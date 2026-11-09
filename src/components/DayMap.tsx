import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { ITINERARY_DAYS, DayItinerary, Stop } from '../data/itineraryData';
import { calculateDistanceMeters, formatDistance, formatWalkingTime } from '../utils/geo';
import { Navigation, Compass, Footprints, Calendar } from 'lucide-react';

interface DayMapProps {
  initialDayId?: string;
}

export const DayMap: React.FC<DayMapProps> = ({ initialDayId = 'day-1' }) => {
  const [selectedDayId, setSelectedDayId] = useState<string>(initialDayId);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const layerGroupRef = useRef<L.LayerGroup | null>(null);

  const currentDay = ITINERARY_DAYS.find((d) => d.id === selectedDayId) || ITINERARY_DAYS[0];

  // Calcolo distanza totale a piedi tra le tappe del giorno
  let totalDistanceMeters = 0;
  for (let i = 0; i < currentDay.stops.length - 1; i++) {
    const from = currentDay.stops[i].coordinates;
    const to = currentDay.stops[i + 1].coordinates;
    totalDistanceMeters += calculateDistanceMeters(from.lat, from.lng, to.lat, to.lng);
  }

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Se la mappa non esiste ancora, inizializzala
    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        zoomControl: false,
        attributionControl: false,
      });

      L.control.zoom({ position: 'bottomright' }).addTo(map);

      // Tile OpenStreetMap 100% gratuita (NESSUNA API KEY RICHIESTA!)
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      const layerGroup = L.layerGroup().addTo(map);
      layerGroupRef.current = layerGroup;
      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;
    const layerGroup = layerGroupRef.current;
    if (!map || !layerGroup) return;

    // Pulisci i layer precedenti
    layerGroup.clearLayers();

    const coordinatesList: L.LatLngExpression[] = [];

    // Aggiungi Marker numerati per ogni tappa
    currentDay.stops.forEach((stop, index) => {
      const { lat, lng } = stop.coordinates;
      coordinatesList.push([lat, lng]);

      const customIcon = L.divIcon({
        className: 'custom-day-pin',
        html: `
          <div style="
            background: linear-gradient(135deg, #f43f5e 0%, #f59e0b 100%);
            color: white;
            font-weight: 800;
            font-size: 13px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.4);
            border: 2px solid white;
          ">
            ${index + 1}
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -18],
      });

      const gmapsDir = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`;
      const citymapperDir = `https://citymapper.com/directions?endcoord=${lat}%2C${lng}&endname=${encodeURIComponent(stop.title)}&endaddress=${encodeURIComponent(stop.address)}`;

      const marker = L.marker([lat, lng], { icon: customIcon });

      const popupContent = `
        <div style="font-family: -apple-system, sans-serif; font-size: 12px; color: #0f172a; padding: 4px; min-width: 200px;">
          ${stop.image ? `<img src="${stop.image}" style="width: 100%; height: 90px; object-fit: cover; border-radius: 8px; margin-bottom: 6px;" />` : ''}
          <div style="font-size: 10px; font-weight: 800; color: #e11d48; text-transform: uppercase;">
            Tappa ${index + 1} • ${stop.time || ''}
          </div>
          <div style="font-weight: 700; font-size: 13px; margin: 2px 0 4px 0; color: #0f172a;">
            ${stop.title}
          </div>
          <div style="font-size: 11px; color: #64748b; margin-bottom: 8px;">
            ${stop.address}
          </div>
          <div style="display: flex; gap: 4px;">
            <a href="${gmapsDir}" target="_blank" rel="noopener noreferrer" style="
              flex: 1;
              background: #0f172a;
              color: white;
              padding: 6px 8px;
              border-radius: 8px;
              text-align: center;
              text-decoration: none;
              font-weight: 600;
              font-size: 11px;
              display: inline-block;
            ">🚶 A piedi (Maps)</a>
            <a href="${citymapperDir}" target="_blank" rel="noopener noreferrer" style="
              flex: 1;
              background: #288330;
              color: white;
              padding: 6px 8px;
              border-radius: 8px;
              text-align: center;
              text-decoration: none;
              font-weight: 600;
              font-size: 11px;
              display: inline-block;
            ">🚇 Citymapper</a>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent);
      layerGroup.addLayer(marker);
    });

    // Traccia la linea del percorso
    if (coordinatesList.length > 1) {
      const polyline = L.polyline(coordinatesList, {
        color: '#f43f5e',
        weight: 4,
        opacity: 0.9,
        dashArray: '6, 8',
      });
      layerGroup.addLayer(polyline);
    }

    // Centra su tutti i punti
    if (coordinatesList.length > 0) {
      const bounds = L.latLngBounds(coordinatesList);
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 16 });
    }

    setTimeout(() => {
      map.invalidateSize();
    }, 200);

  }, [selectedDayId]);

  return (
    <div className="space-y-3">
      
      {/* Selettore Giorno dedicato per la Mappa */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
        {ITINERARY_DAYS.map((d) => (
          <button
            key={d.id}
            onClick={() => setSelectedDayId(d.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
              selectedDayId === d.id
                ? 'bg-rose-500 text-white border-rose-400 shadow-md shadow-rose-950/40'
                : 'bg-slate-900 text-slate-400 hover:text-white border-slate-800'
            }`}
          >
            <span>{d.dayOfWeek} {d.dateStr.split(' ')[1]}</span>
          </button>
        ))}
      </div>

      {/* Scheda Mappa */}
      <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900/90 flex flex-col">
        
        {/* Header Mappa con Distanza Totale */}
        <div className="p-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs">
          <div>
            <span className="font-extrabold text-white text-sm">{currentDay.title}</span>
            <p className="text-[11px] text-rose-300">{currentDay.stops.length} Tappe collegate</p>
          </div>
          
          <div className="flex items-center gap-2 text-slate-300 bg-slate-950 px-2.5 py-1.5 rounded-xl border border-slate-800">
            <Footprints className="w-3.5 h-3.5 text-rose-400" />
            <span className="font-extrabold text-amber-300">
              {formatDistance(totalDistanceMeters)}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">
              {formatWalkingTime(totalDistanceMeters)}
            </span>
          </div>
        </div>

        {/* Mappa Container */}
        <div 
          ref={mapContainerRef} 
          className="w-full h-[400px] sm:h-[460px] z-10"
        />

        {/* Footer Mappa */}
        <div className="p-2.5 bg-slate-950/90 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Tocca i cerchietti numerati per vedere la foto e aprire il navigatore</span>
          <span className="text-emerald-400 font-semibold">100% Free OSM</span>
        </div>

      </div>

    </div>
  );
};

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { DayItinerary, Stop } from '../data/itineraryData';
import { calculateDistanceMeters, formatDistance, formatWalkingTime } from '../utils/geo';
import { Navigation, Compass, Footprints } from 'lucide-react';

interface DayMapProps {
  day: DayItinerary;
  onSelectStop?: (stop: Stop) => void;
}

export const DayMap: React.FC<DayMapProps> = ({ day }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const layerGroupRef = useRef<L.LayerGroup | null>(null);

  // Calcolo distanza totale a piedi tra le tappe del giorno
  let totalDistanceMeters = 0;
  for (let i = 0; i < day.stops.length - 1; i++) {
    const from = day.stops[i].coordinates;
    const to = day.stops[i + 1].coordinates;
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

      // Aggiungi controlli zoom in basso a destra
      L.control.zoom({ position: 'bottomright' }).addTo(map);

      // Tile Layer elegante CartoDB Voyager
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd',
      }).addTo(map);

      const layerGroup = L.layerGroup().addTo(map);
      layerGroupRef.current = layerGroup;
      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;
    const layerGroup = layerGroupRef.current;
    if (!map || !layerGroup) return;

    // Pulisci i marker precedenti
    layerGroup.clearLayers();

    const coordinatesList: L.LatLngExpression[] = [];

    // Aggiungi Marker numerati per ogni tappa
    day.stops.forEach((stop, index) => {
      const { lat, lng } = stop.coordinates;
      coordinatesList.push([lat, lng]);

      // Icona HTML personalizzata circolare con numero
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
        <div style="font-family: inherit; font-size: 12px; color: #0f172a; padding: 4px; min-width: 180px;">
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
              padding: 5px 8px;
              border-radius: 8px;
              text-align: center;
              text-decoration: none;
              font-weight: 600;
              font-size: 10px;
              display: inline-block;
            ">📍 Naviga a piedi</a>
            <a href="${citymapperDir}" target="_blank" rel="noopener noreferrer" style="
              flex: 1;
              background: #288330;
              color: white;
              padding: 5px 8px;
              border-radius: 8px;
              text-align: center;
              text-decoration: none;
              font-weight: 600;
              font-size: 10px;
              display: inline-block;
            ">🚇 Citymapper</a>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent);
      layerGroup.addLayer(marker);
    });

    // Traccia la linea del percorso (Polyline)
    if (coordinatesList.length > 1) {
      const polyline = L.polyline(coordinatesList, {
        color: '#f43f5e',
        weight: 3.5,
        opacity: 0.85,
        dashArray: '6, 8',
      });
      layerGroup.addLayer(polyline);
    }

    // Adatta la vista a tutti i marker
    if (coordinatesList.length > 0) {
      const bounds = L.latLngBounds(coordinatesList);
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 16 });
    }

    // Invalida dimensioni per evitare glitch su schermi mobili
    setTimeout(() => {
      map.invalidateSize();
    }, 200);

  }, [day]);

  return (
    <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900/90 flex flex-col">
      
      {/* Header Mappa con Distanza Totale */}
      <div className="p-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 font-bold text-white">
          <Footprints className="w-4 h-4 text-rose-400" />
          <span>Percorso di {day.dayOfWeek}</span>
        </div>
        
        <div className="flex items-center gap-2 text-slate-300 bg-slate-950 px-2.5 py-1 rounded-xl border border-slate-800">
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
        className="w-full h-[320px] sm:h-[380px] z-10"
      />

      {/* Footer Mappa: Legenda rapida */}
      <div className="p-2.5 bg-slate-950/90 text-[11px] text-slate-400 flex items-center justify-between">
        <span>Tocca i numeri per vedere la tappa e avviare il navigatore</span>
        <span className="text-rose-400 font-semibold">{day.stops.length} Tappe</span>
      </div>

    </div>
  );
};

import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { ITINERARY_DAYS, Stop } from '../data/itineraryData';
import { NEARBY_PLACES, NearbyPlace } from '../data/nearbyPlacesData';
import { calculateDistanceMeters, formatDistance, formatWalkingTime } from '../utils/geo';
import { fetchWalkingRoute } from '../services/routingService';
import { Navigation, Compass, Footprints, Utensils, Camera, Eye, Layers } from 'lucide-react';

interface DayMapProps {
  initialDayId?: string;
}

export const DayMap: React.FC<DayMapProps> = ({ initialDayId = 'day-1' }) => {
  const [selectedDayId, setSelectedDayId] = useState<string>(initialDayId);
  const [showRestaurants, setShowRestaurants] = useState<boolean>(true);
  const [showPhotoSpots, setShowPhotoSpots] = useState<boolean>(false);
  const [isLoadingRoute, setIsLoadingRoute] = useState<boolean>(false);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const routeLayerGroupRef = useRef<L.LayerGroup | null>(null);
  const nearbyLayerGroupRef = useRef<L.LayerGroup | null>(null);

  const currentDay = ITINERARY_DAYS.find((d) => d.id === selectedDayId) || ITINERARY_DAYS[0];

  // Distanza totale approssimativa tra le tappe
  let totalDistanceMeters = 0;
  for (let i = 0; i < currentDay.stops.length - 1; i++) {
    const from = currentDay.stops[i].coordinates;
    const to = currentDay.stops[i + 1].coordinates;
    totalDistanceMeters += calculateDistanceMeters(from.lat, from.lng, to.lat, to.lng);
  }

  // 1. Inizializzazione Mappa (1 sola volta)
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        zoomControl: false,
        attributionControl: false,
      });

      L.control.zoom({ position: 'bottomright' }).addTo(map);

      // Tile OpenStreetMap 100% libera e senza API key
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      routeLayerGroupRef.current = L.layerGroup().addTo(map);
      nearbyLayerGroupRef.current = L.layerGroup().addTo(map);
      mapInstanceRef.current = map;
    }
  }, []);

  // 2. Aggiornamento Tappe e Percorso a Piedi Reale (OSRM)
  useEffect(() => {
    const map = mapInstanceRef.current;
    const routeLayer = routeLayerGroupRef.current;
    if (!map || !routeLayer) return;

    routeLayer.clearLayers();
    setIsLoadingRoute(true);

    const waypoints = currentDay.stops.map((s) => s.coordinates);

    // Marker Tappe Numerati
    currentDay.stops.forEach((stop, index) => {
      const { lat, lng } = stop.coordinates;

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
            box-shadow: 0 4px 12px rgba(0,0,0,0.5);
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
          ${stop.image ? `<img src="${stop.image}" style="width: 100%; height: 95px; object-fit: cover; border-radius: 8px; margin-bottom: 6px;" />` : ''}
          <div style="font-size: 10px; font-weight: 800; color: #e11d48; text-transform: uppercase;">
            Tappa ${index + 1} • ${stop.time || ''}
          </div>
          <div style="font-weight: 800; font-size: 13px; margin: 2px 0 4px 0; color: #0f172a;">
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
              font-weight: 700;
              font-size: 11px;
              display: inline-block;
            ">🚶 A piedi</a>
            <a href="${citymapperDir}" target="_blank" rel="noopener noreferrer" style="
              flex: 1;
              background: #288330;
              color: white;
              padding: 6px 8px;
              border-radius: 8px;
              text-align: center;
              text-decoration: none;
              font-weight: 700;
              font-size: 11px;
              display: inline-block;
            ">🚇 Metro</a>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent);
      routeLayer.addLayer(marker);
    });

    // Calcolo percorso a piedi REALE (strada per strada con marciapiedi)
    fetchWalkingRoute(waypoints).then((routeCoords) => {
      setIsLoadingRoute(false);
      if (routeCoords.length > 1) {
        const polyline = L.polyline(routeCoords, {
          color: '#f43f5e',
          weight: 4.5,
          opacity: 0.9,
          dashArray: '8, 8',
          lineCap: 'round',
        });
        routeLayer.addLayer(polyline);
      }
    });

    // Centra sui punti
    if (waypoints.length > 0) {
      const bounds = L.latLngBounds(waypoints.map((p) => [p.lat, p.lng]));
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 16 });
    }

    setTimeout(() => {
      map.invalidateSize();
    }, 200);

  }, [selectedDayId]);

  // 3. Aggiornamento Punti d'Interesse Nei Dintorni (Ristoranti & Foto Spot)
  useEffect(() => {
    const nearbyLayer = nearbyLayerGroupRef.current;
    if (!nearbyLayer) return;

    nearbyLayer.clearLayers();

    // Filtra luoghi da mostrare sulla mappa
    const placesToShow = NEARBY_PLACES.filter((p) => {
      if (showRestaurants && p.category === 'food') return true;
      if (showPhotoSpots && (p.category === 'photo' || p.category === 'romantic')) return true;
      return false;
    });

    placesToShow.forEach((place) => {
      const isFood = place.category === 'food';
      const emoji = isFood ? '🥐' : '📸';
      const bgColor = isFood ? '#f59e0b' : '#38bdf8';

      const poiIcon = L.divIcon({
        className: 'custom-poi-pin',
        html: `
          <div style="
            background: ${bgColor};
            color: white;
            font-size: 14px;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 3px 8px rgba(0,0,0,0.4);
            border: 2px solid white;
          ">
            ${emoji}
          </div>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
        popupAnchor: [0, -14],
      });

      const gmapsDir = `https://www.google.com/maps/dir/?api=1&destination=${place.coordinates.lat},${place.coordinates.lng}&travelmode=walking`;
      const citymapperDir = `https://citymapper.com/directions?endcoord=${place.coordinates.lat}%2C${place.coordinates.lng}&endname=${encodeURIComponent(place.name)}&endaddress=${encodeURIComponent(place.address)}`;

      const marker = L.marker([place.coordinates.lat, place.coordinates.lng], { icon: poiIcon });

      const popupContent = `
        <div style="font-family: -apple-system, sans-serif; font-size: 12px; color: #0f172a; padding: 4px; min-width: 190px;">
          <div style="font-size: 10px; font-weight: 800; color: ${isFood ? '#d97706' : '#0284c7'}; text-transform: uppercase;">
            ${isFood ? '🥐 Ristorante / Café' : '📸 Scorcio Romantico'} • ${place.neighborhood}
          </div>
          <div style="font-weight: 800; font-size: 13px; margin: 2px 0 4px 0; color: #0f172a;">
            ${place.name}
          </div>
          <div style="font-size: 11px; color: #475569; margin-bottom: 6px;">
            ${place.description}
          </div>
          <div style="display: flex; gap: 4px;">
            <a href="${gmapsDir}" target="_blank" rel="noopener noreferrer" style="
              flex: 1;
              background: #0f172a;
              color: white;
              padding: 5px 8px;
              border-radius: 6px;
              text-align: center;
              text-decoration: none;
              font-weight: 700;
              font-size: 10px;
              display: inline-block;
            ">🚶 Naviga</a>
            <a href="${citymapperDir}" target="_blank" rel="noopener noreferrer" style="
              flex: 1;
              background: #288330;
              color: white;
              padding: 5px 8px;
              border-radius: 6px;
              text-align: center;
              text-decoration: none;
              font-weight: 700;
              font-size: 10px;
              display: inline-block;
            ">🚇 Citymapper</a>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent);
      nearbyLayer.addLayer(marker);
    });

  }, [showRestaurants, showPhotoSpots, selectedDayId]);

  return (
    <div className="space-y-3">
      
      {/* Selettore Giorno in alto */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
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
        
        {/* Header Mappa con Info e Toggles POI vicini */}
        <div className="p-3 bg-slate-900 border-b border-slate-800 space-y-2">
          
          <div className="flex items-center justify-between text-xs">
            <div>
              <span className="font-extrabold text-white text-sm">{currentDay.title}</span>
              <p className="text-[11px] text-rose-300">
                {currentDay.stops.length} Tappe con percorso a piedi reale
                {isLoadingRoute && <span className="text-amber-400 ml-1.5 animate-pulse">(calcolo curve...)</span>}
              </p>
            </div>
            
            <div className="flex items-center gap-1.5 text-slate-300 bg-slate-950 px-2.5 py-1 rounded-xl border border-slate-800 text-[11px]">
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

          {/* Toggle Filtri: Mostra Ristoranti / Mostra Punti Foto sulla Mappa */}
          <div className="flex items-center gap-2 pt-1 border-t border-slate-800/60">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Nei Dintorni:</span>

            <button
              onClick={() => setShowRestaurants(!showRestaurants)}
              className={`px-2.5 py-1 rounded-xl text-[11px] font-bold flex items-center gap-1 transition-all border ${
                showRestaurants
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
                  : 'bg-slate-950 text-slate-500 border-slate-800'
              }`}
            >
              <span>🥐 Cibo & Café</span>
              <span className="text-[9px] px-1 rounded-full bg-slate-800">{showRestaurants ? 'ON' : 'OFF'}</span>
            </button>

            <button
              onClick={() => setShowPhotoSpots(!showPhotoSpots)}
              className={`px-2.5 py-1 rounded-xl text-[11px] font-bold flex items-center gap-1 transition-all border ${
                showPhotoSpots
                  ? 'bg-sky-500/20 text-sky-300 border-sky-500/40 shadow-sm'
                  : 'bg-slate-950 text-slate-500 border-slate-800'
              }`}
            >
              <span>📸 Scorci Foto</span>
              <span className="text-[9px] px-1 rounded-full bg-slate-800">{showPhotoSpots ? 'ON' : 'OFF'}</span>
            </button>
          </div>

        </div>

        {/* Mappa Container */}
        <div 
          ref={mapContainerRef} 
          className="w-full h-[410px] sm:h-[480px] z-10"
        />

        {/* Footer Mappa */}
        <div className="p-2.5 bg-slate-950/90 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Tocca i cerchietti per vedere la scheda e avviare il navigatore</span>
          <span className="text-emerald-400 font-semibold">Percorso Reale OSRM</span>
        </div>

      </div>

    </div>
  );
};

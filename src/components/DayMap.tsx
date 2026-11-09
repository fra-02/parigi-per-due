import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { ITINERARY_DAYS, Stop } from '../data/itineraryData';
import { calculateDistanceMeters, formatDistance, formatWalkingTime } from '../utils/geo';
import { fetchWalkingRoute } from '../services/routingService';
import { 
  Navigation, 
  Compass, 
  Footprints, 
  LocateFixed, 
  MapPin,
  Sparkles
} from 'lucide-react';

interface DayMapProps {
  initialDayId?: string;
  onStopAdded?: () => void;
}

export const DayMap: React.FC<DayMapProps> = ({ initialDayId = 'day-1' }) => {
  const [selectedDayId, setSelectedDayId] = useState<string>(initialDayId);
  const [activeStopIndex, setActiveStopIndex] = useState<number>(0);
  const [isLocating, setIsLocating] = useState<boolean>(false);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const routeLayerGroupRef = useRef<L.LayerGroup | null>(null);
  const userGpsLayerGroupRef = useRef<L.LayerGroup | null>(null);

  const currentDay = ITINERARY_DAYS.find((d) => d.id === selectedDayId) || ITINERARY_DAYS[0];

  // Distanza totale approssimativa a piedi
  let totalDistanceMeters = 0;
  for (let i = 0; i < currentDay.stops.length - 1; i++) {
    const from = currentDay.stops[i].coordinates;
    const to = currentDay.stops[i + 1].coordinates;
    totalDistanceMeters += calculateDistanceMeters(from.lat, from.lng, to.lat, to.lng);
  }

  // Inizializzazione Mappa pulita
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        zoomControl: false,
        attributionControl: false,
      });

      L.control.zoom({ position: 'bottomright' }).addTo(map);

      // OpenStreetMap libera
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      routeLayerGroupRef.current = L.layerGroup().addTo(map);
      userGpsLayerGroupRef.current = L.layerGroup().addTo(map);
      mapInstanceRef.current = map;
    }
  }, []);

  // Render Tappe & Traccia del Quartiere
  useEffect(() => {
    const map = mapInstanceRef.current;
    const routeLayer = routeLayerGroupRef.current;
    if (!map || !routeLayer) return;

    routeLayer.clearLayers();

    const waypoints = currentDay.stops.map((s) => s.coordinates);

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
            width: 30px;
            height: 30px;
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
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -16],
      });

      const gmapsDir = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`;
      const citymapperDir = `https://citymapper.com/directions?endcoord=${lat}%2C${lng}&endname=${encodeURIComponent(stop.title)}&endaddress=${encodeURIComponent(stop.address)}`;

      const marker = L.marker([lat, lng], { icon: customIcon });

      const popupContent = `
        <div style="font-family: -apple-system, sans-serif; font-size: 12px; color: #0f172a; padding: 4px; min-width: 190px;">
          ${stop.image ? `<img src="${stop.image}" style="width: 100%; height: 90px; object-fit: cover; border-radius: 8px; margin-bottom: 6px;" />` : ''}
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
            ">🚶 A piedi (Maps)</a>
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

    // Traccia a piedi con le curve delle strade
    fetchWalkingRoute(waypoints).then((routeCoords) => {
      if (routeCoords.length > 1) {
        const polyline = L.polyline(routeCoords, {
          color: '#f43f5e',
          weight: 4,
          opacity: 0.9,
          dashArray: '8, 8',
          lineCap: 'round',
        });
        routeLayer.addLayer(polyline);
      }
    });

    if (waypoints.length > 0) {
      const bounds = L.latLngBounds(waypoints.map((p) => [p.lat, p.lng]));
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 16 });
    }

    setTimeout(() => {
      map.invalidateSize();
    }, 200);

  }, [selectedDayId]);

  // Centra GPS su di noi
  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      alert('Geolocalizzazione non supportata');
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setIsLocating(false);
        const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        const map = mapInstanceRef.current;
        const gpsLayer = userGpsLayerGroupRef.current;
        if (map && gpsLayer) {
          gpsLayer.clearLayers();

          const pulseIcon = L.divIcon({
            className: 'user-pulse-pin',
            html: `
              <div style="
                width: 18px;
                height: 18px;
                background: #38bdf8;
                border: 3px solid white;
                border-radius: 50%;
                box-shadow: 0 0 12px #38bdf8;
              "></div>
            `,
            iconSize: [18, 18],
            iconAnchor: [9, 9],
          });

          L.marker([coords.lat, coords.lng], { icon: pulseIcon }).addTo(gpsLayer);
          map.flyTo([coords.lat, coords.lng], 16, { duration: 1.2 });
        }
      },
      () => {
        setIsLocating(false);
        alert('Posizione GPS non disponibile al momento.');
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  const handleFlyToStop = (stop: Stop, idx: number) => {
    setActiveStopIndex(idx);
    const map = mapInstanceRef.current;
    if (map) {
      map.flyTo([stop.coordinates.lat, stop.coordinates.lng], 16.5, { duration: 1.2 });
    }
  };

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950 flex flex-col h-[calc(100vh-140px)] min-h-[500px]">
      
      {/* 1. SELETTORE GIORNO IN ALTO */}
      <div className="absolute top-3 left-3 right-3 z-30 flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 pointer-events-auto">
        {ITINERARY_DAYS.map((d) => (
          <button
            key={d.id}
            onClick={() => setSelectedDayId(d.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap backdrop-blur-md shadow-lg transition-all ${
              selectedDayId === d.id
                ? 'bg-rose-500 text-white shadow-rose-950/60 scale-102 border border-white/30'
                : 'bg-black/60 text-slate-300 hover:text-white border border-white/15'
            }`}
          >
            <span>{d.dayOfWeek} {d.dateStr.split(' ')[1]}</span>
          </button>
        ))}
      </div>

      {/* 2. HEADER PANORAMICA QUARTIERE */}
      <div className="absolute top-14 left-3 right-3 z-20 pointer-events-none">
        <div className="p-2.5 px-3.5 rounded-2xl bg-[#0b0f19]/90 backdrop-blur-md border border-slate-700/80 shadow-xl flex items-center justify-between pointer-events-auto">
          <div>
            <span className="text-[10px] text-rose-400 font-extrabold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Panoramica Quartiere
            </span>
            <h4 className="text-sm font-black text-white">{currentDay.title}</h4>
          </div>

          <div className="text-right">
            <span className="text-xs font-black text-amber-300">
              {formatDistance(totalDistanceMeters)}
            </span>
            <p className="text-[10px] text-slate-400">
              {formatWalkingTime(totalDistanceMeters)} a piedi
            </p>
          </div>
        </div>
      </div>

      {/* 3. PULSANTE GPS DOVE SIAMO */}
      <div className="absolute top-32 right-3 z-30 pointer-events-auto">
        <button
          onClick={handleLocateMe}
          disabled={isLocating}
          className={`w-10 h-10 rounded-2xl bg-[#0b0f19]/90 backdrop-blur-md border border-slate-700 shadow-xl flex items-center justify-center text-sky-400 active:scale-95 transition-all ${
            isLocating ? 'animate-pulse' : ''
          }`}
          title="Centra su di me"
        >
          <LocateFixed className="w-5 h-5" />
        </button>
      </div>

      {/* 4. MAPPA A SCHERMO INTERO */}
      <div ref={mapContainerRef} className="w-full h-full z-10" />

      {/* 5. CAROSELLO TAPPE IN BASSO */}
      <div className="absolute bottom-3 left-3 right-3 z-20 pointer-events-auto">
        <div className="p-2 rounded-2xl bg-[#0b0f19]/95 backdrop-blur-xl border border-slate-700/80 shadow-2xl flex items-center gap-2">
          
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 flex-1">
            {currentDay.stops.map((stop, idx) => (
              <button
                key={stop.id}
                onClick={() => handleFlyToStop(stop, idx)}
                className={`shrink-0 p-1.5 px-2.5 rounded-xl border text-left transition-all flex items-center gap-1.5 min-w-[130px] max-w-[170px] ${
                  activeStopIndex === idx
                    ? 'bg-rose-500/20 border-rose-500/60 shadow-md text-white'
                    : 'bg-slate-900/90 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-rose-500 text-white font-black text-[10px] flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="text-xs font-bold truncate">{stop.title}</span>
              </button>
            ))}
          </div>

          <span className="text-[11px] text-slate-400 font-medium shrink-0 px-1">
            {currentDay.stops.length} tappe
          </span>

        </div>
      </div>

    </div>
  );
};

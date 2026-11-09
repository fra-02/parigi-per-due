import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { ITINERARY_DAYS, Stop } from '../data/itineraryData';
import { NEARBY_PLACES, NearbyPlace } from '../data/nearbyPlacesData';
import { calculateDistanceMeters, formatDistance, formatWalkingTime } from '../utils/geo';
import { fetchWalkingRoute } from '../services/routingService';
import { 
  Navigation, 
  Compass, 
  Footprints, 
  Search, 
  LocateFixed, 
  Utensils, 
  Camera, 
  X,
  Sparkles,
  MapPin
} from 'lucide-react';

interface DayMapProps {
  initialDayId?: string;
}

export const DayMap: React.FC<DayMapProps> = ({ initialDayId = 'day-1' }) => {
  const [selectedDayId, setSelectedDayId] = useState<string>(initialDayId);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showRestaurants, setShowRestaurants] = useState<boolean>(true);
  const [showPhotoSpots, setShowPhotoSpots] = useState<boolean>(true);
  const [userGps, setUserGps] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState<boolean>(false);
  const [activeStopIndex, setActiveStopIndex] = useState<number>(0);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const routeLayerGroupRef = useRef<L.LayerGroup | null>(null);
  const nearbyLayerGroupRef = useRef<L.LayerGroup | null>(null);
  const userGpsLayerGroupRef = useRef<L.LayerGroup | null>(null);

  const currentDay = ITINERARY_DAYS.find((d) => d.id === selectedDayId) || ITINERARY_DAYS[0];

  // Distanza totale approssimativa del percorso
  let totalDistanceMeters = 0;
  for (let i = 0; i < currentDay.stops.length - 1; i++) {
    const from = currentDay.stops[i].coordinates;
    const to = currentDay.stops[i + 1].coordinates;
    totalDistanceMeters += calculateDistanceMeters(from.lat, from.lng, to.lat, to.lng);
  }

  // 1. Inizializzazione Mappa a Schermo Intero
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        zoomControl: false,
        attributionControl: false,
      });

      L.control.zoom({ position: 'bottomright' }).addTo(map);

      // OpenStreetMap 100% libera e senza API key
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      routeLayerGroupRef.current = L.layerGroup().addTo(map);
      nearbyLayerGroupRef.current = L.layerGroup().addTo(map);
      userGpsLayerGroupRef.current = L.layerGroup().addTo(map);
      mapInstanceRef.current = map;
    }
  }, []);

  // 2. Render Tappe e Percorso a Piedi Reale OSRM
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
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 14px rgba(0,0,0,0.5);
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

    // Percorso pedonale reale
    fetchWalkingRoute(waypoints).then((routeCoords) => {
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

    if (waypoints.length > 0) {
      const bounds = L.latLngBounds(waypoints.map((p) => [p.lat, p.lng]));
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 16 });
    }

    setTimeout(() => {
      map.invalidateSize();
    }, 200);

  }, [selectedDayId]);

  // 3. Render Punti d'Interesse Nei Dintorni (Ristoranti & Foto)
  useEffect(() => {
    const nearbyLayer = nearbyLayerGroupRef.current;
    if (!nearbyLayer) return;

    nearbyLayer.clearLayers();

    const placesToShow = NEARBY_PLACES.filter((p) => {
      if (showRestaurants && p.category === 'food') return true;
      if (showPhotoSpots && (p.category === 'photo' || p.category === 'romantic')) return true;
      return false;
    });

    placesToShow.forEach((place) => {
      const isFood = place.category === 'food';
      const emoji = isFood ? '🥐' : '📸';
      const bgColor = isFood ? '#f59e0b' : '#38bdf8';

      // Calcola distanza minima rispetto a una delle tappe del giorno
      let minDistanceToDay = 999999;
      let closestStopName = '';
      currentDay.stops.forEach((s) => {
        const dist = calculateDistanceMeters(s.coordinates.lat, s.coordinates.lng, place.coordinates.lat, place.coordinates.lng);
        if (dist < minDistanceToDay) {
          minDistanceToDay = dist;
          closestStopName = s.title;
        }
      });

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
            ${isFood ? '🥐 Cibo & Bistrot' : '📸 Punto Foto'} • ${place.neighborhood}
          </div>
          <div style="font-weight: 800; font-size: 13px; margin: 2px 0 2px 0; color: #0f172a;">
            ${place.name}
          </div>
          <div style="font-size: 10px; font-weight: 700; color: #e11d48; margin-bottom: 4px;">
            📍 A ${formatDistance(minDistanceToDay)} da ${closestStopName}
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

  // 4. GPS Centra su di Me
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
        setUserGps(coords);

        const map = mapInstanceRef.current;
        const gpsLayer = userGpsLayerGroupRef.current;
        if (map && gpsLayer) {
          gpsLayer.clearLayers();

          const pulseIcon = L.divIcon({
            className: 'user-pulse-pin',
            html: `
              <div style="
                width: 20px;
                height: 20px;
                background: #38bdf8;
                border: 3px solid white;
                border-radius: 50%;
                box-shadow: 0 0 15px #38bdf8;
                animation: pulse 1.5s infinite;
              "></div>
            `,
            iconSize: [20, 20],
            iconAnchor: [10, 10],
          });

          L.marker([coords.lat, coords.lng], { icon: pulseIcon }).addTo(gpsLayer);
          map.flyTo([coords.lat, coords.lng], 16, { duration: 1.2 });
        }
      },
      () => {
        setIsLocating(false);
        alert('Impossibile rilevare la posizione GPS al momento.');
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  // 5. Ricerca sulla Mappa
  const filteredSearchResults = searchQuery.trim()
    ? NEARBY_PLACES.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.neighborhood.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSelectSearchResult = (place: NearbyPlace) => {
    setSearchQuery('');
    const map = mapInstanceRef.current;
    if (map) {
      map.flyTo([place.coordinates.lat, place.coordinates.lng], 17, { duration: 1.2 });
    }
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
      
      {/* 1. SELETTORE GIORNO FLOATING IN ALTO */}
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

      {/* 2. BARRA DI RICERCA FLOATING SULLA MAPPA */}
      <div className="absolute top-14 left-3 right-3 z-30 pointer-events-auto">
        <div className="relative">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#0b0f19]/90 backdrop-blur-md border border-slate-700/80 shadow-xl">
            <Search className="w-4 h-4 text-slate-400 ml-2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cerca un posto o cibo vicino al percorso..."
              className="flex-1 bg-transparent text-white text-xs placeholder:text-slate-500 focus:outline-none"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="p-1 text-slate-400 hover:text-white">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Risultati a comparsa */}
          {filteredSearchResults.length > 0 && (
            <div className="absolute top-11 left-0 right-0 mt-1 max-h-48 overflow-y-auto rounded-2xl bg-[#0f1422]/95 backdrop-blur-xl border border-slate-700 shadow-2xl p-1.5 space-y-1">
              {filteredSearchResults.slice(0, 5).map((p) => {
                let minDist = 999999;
                currentDay.stops.forEach((s) => {
                  const dist = calculateDistanceMeters(s.coordinates.lat, s.coordinates.lng, p.coordinates.lat, p.coordinates.lng);
                  if (dist < minDist) minDist = dist;
                });

                return (
                  <button
                    key={p.id}
                    onClick={() => handleSelectSearchResult(p)}
                    className="w-full text-left p-2 rounded-xl hover:bg-slate-800 flex items-center justify-between text-xs transition-colors"
                  >
                    <div>
                      <span className="font-bold text-white">{p.name}</span>
                      <p className="text-[10px] text-slate-400">{p.neighborhood}</p>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      A {formatDistance(minDist)}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* 3. PULSANTI RAPIDI FLOATING A DESTRA (Centra GPS + Filtri Cibo/Foto) */}
      <div className="absolute top-28 right-3 z-30 flex flex-col gap-2 pointer-events-auto">
        
        {/* Pulsante GPS Dove siamo? */}
        <button
          onClick={handleLocateMe}
          disabled={isLocating}
          className={`w-10 h-10 rounded-2xl bg-[#0b0f19]/90 backdrop-blur-md border border-slate-700 shadow-xl flex items-center justify-center text-sky-400 active:scale-95 transition-all ${
            isLocating ? 'animate-pulse' : ''
          }`}
          title="Centra sulla mia posizione"
        >
          <LocateFixed className="w-5 h-5" />
        </button>

        {/* Toggle Cibo */}
        <button
          onClick={() => setShowRestaurants(!showRestaurants)}
          className={`w-10 h-10 rounded-2xl backdrop-blur-md border shadow-xl flex items-center justify-center text-sm active:scale-95 transition-all ${
            showRestaurants
              ? 'bg-amber-500/80 border-amber-400 text-slate-950 font-black'
              : 'bg-[#0b0f19]/90 border-slate-700 text-slate-400 opacity-60'
          }`}
          title="Mostra / Nascondi Ristoranti"
        >
          🥐
        </button>

        {/* Toggle Foto */}
        <button
          onClick={() => setShowPhotoSpots(!showPhotoSpots)}
          className={`w-10 h-10 rounded-2xl backdrop-blur-md border shadow-xl flex items-center justify-center text-sm active:scale-95 transition-all ${
            showPhotoSpots
              ? 'bg-sky-500/80 border-sky-400 text-slate-950 font-black'
              : 'bg-[#0b0f19]/90 border-slate-700 text-slate-400 opacity-60'
          }`}
          title="Mostra / Nascondi Punti Foto"
        >
          📸
        </button>

      </div>

      {/* 4. MAPPA CONTAINER EFFETTIVA (A TUTTO SCHERMO) */}
      <div ref={mapContainerRef} className="w-full h-full z-10" />

      {/* 5. CAROSELLO TAPPE IN BASSO (Stile Apple Maps / Airbnb) */}
      <div className="absolute bottom-3 left-3 right-3 z-30 pointer-events-auto">
        <div className="p-2.5 rounded-3xl bg-[#0b0f19]/95 backdrop-blur-xl border border-slate-700/80 shadow-2xl space-y-2">
          
          <div className="flex items-center justify-between px-1 text-[11px]">
            <span className="font-extrabold text-white flex items-center gap-1">
              <Footprints className="w-3.5 h-3.5 text-rose-400" />
              <span>{currentDay.title}</span>
            </span>
            <span className="text-amber-300 font-bold bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
              {formatDistance(totalDistanceMeters)} a piedi
            </span>
          </div>

          {/* Cards Tappe a Scorrimento Orizzontale */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            {currentDay.stops.map((stop, idx) => (
              <button
                key={stop.id}
                onClick={() => handleFlyToStop(stop, idx)}
                className={`shrink-0 p-2 rounded-2xl border text-left transition-all flex items-center gap-2 min-w-[170px] max-w-[210px] ${
                  activeStopIndex === idx
                    ? 'bg-rose-500/20 border-rose-500/60 shadow-md'
                    : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                }`}
              >
                <span className="w-6 h-6 rounded-full bg-rose-500 text-white font-black text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <div className="truncate">
                  <div className="font-bold text-white text-xs truncate">{stop.title}</div>
                  <div className="text-[10px] text-slate-400 truncate">{stop.time || 'Tappa'}</div>
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

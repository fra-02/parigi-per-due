import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { ITINERARY_DAYS, Stop } from '../data/itineraryData';
import { NEARBY_PLACES, NearbyPlace } from '../data/nearbyPlacesData';
import { calculateDistanceMeters, formatDistance, formatWalkingTime } from '../utils/geo';
import { fetchWalkingRoute } from '../services/routingService';
import { searchParisPlaces, SearchResult } from '../services/searchService';
import { saveCustomStopForDay } from '../utils/customStops';
import { 
  Navigation, 
  Compass, 
  Footprints, 
  Search, 
  LocateFixed, 
  X,
  Plus,
  Route,
  Check,
  Sparkles
} from 'lucide-react';

interface DayMapProps {
  initialDayId?: string;
  onStopAdded?: () => void;
}

export const DayMap: React.FC<DayMapProps> = ({ initialDayId = 'day-1', onStopAdded }) => {
  const [selectedDayId, setSelectedDayId] = useState<string>(initialDayId);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showRestaurants, setShowRestaurants] = useState<boolean>(true);
  const [showPhotoSpots, setShowPhotoSpots] = useState<boolean>(false);
  const [isLocating, setIsLocating] = useState<boolean>(false);
  const [activeStopIndex, setActiveStopIndex] = useState<number>(0);

  // Deviazione attiva selezionata
  const [activeDetour, setActiveDetour] = useState<{
    place: { name: string; lat: number; lng: number; address: string };
    closestStop: Stop;
    detourDistance: number;
    routeCoords: [number, number][];
  } | null>(null);

  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const routeLayerGroupRef = useRef<L.LayerGroup | null>(null);
  const nearbyLayerGroupRef = useRef<L.LayerGroup | null>(null);
  const detourLayerGroupRef = useRef<L.LayerGroup | null>(null);
  const userGpsLayerGroupRef = useRef<L.LayerGroup | null>(null);

  const currentDay = ITINERARY_DAYS.find((d) => d.id === selectedDayId) || ITINERARY_DAYS[0];

  // Distanza totale approssimativa del percorso
  let totalDistanceMeters = 0;
  for (let i = 0; i < currentDay.stops.length - 1; i++) {
    const from = currentDay.stops[i].coordinates;
    const to = currentDay.stops[i + 1].coordinates;
    totalDistanceMeters += calculateDistanceMeters(from.lat, from.lng, to.lat, to.lng);
  }

  // 1. Inizializzazione Mappa
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        zoomControl: false,
        attributionControl: false,
      });

      L.control.zoom({ position: 'bottomright' }).addTo(map);

      // OpenStreetMap 100% gratuita senza API key
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      routeLayerGroupRef.current = L.layerGroup().addTo(map);
      nearbyLayerGroupRef.current = L.layerGroup().addTo(map);
      detourLayerGroupRef.current = L.layerGroup().addTo(map);
      userGpsLayerGroupRef.current = L.layerGroup().addTo(map);
      mapInstanceRef.current = map;
    }
  }, []);

  // 2. Render Tappe e Percorso Principale a Piedi (Rosso)
  useEffect(() => {
    const map = mapInstanceRef.current;
    const routeLayer = routeLayerGroupRef.current;
    if (!map || !routeLayer) return;

    routeLayer.clearLayers();
    setActiveDetour(null);

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

    // Percorso reale con curve strade
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

      const marker = L.marker([place.coordinates.lat, place.coordinates.lng], { icon: poiIcon });

      marker.on('click', () => {
        handleTriggerDetour({
          name: place.name,
          lat: place.coordinates.lat,
          lng: place.coordinates.lng,
          address: place.address
        });
      });

      nearbyLayer.addLayer(marker);
    });

  }, [showRestaurants, showPhotoSpots, selectedDayId]);

  // 4. Calcola DEVIAZIONE A PIEDI REALE (Tracciata in Ciano Elettrico!)
  const handleTriggerDetour = (target: { name: string; lat: number; lng: number; address: string }) => {
    const map = mapInstanceRef.current;
    const detourLayer = detourLayerGroupRef.current;
    if (!map || !detourLayer) return;

    detourLayer.clearLayers();
    setAddedSuccess(false);

    // Trova la tappa più vicina dell'itinerario a questo punto
    let closestStop = currentDay.stops[0];
    let minDistance = 999999;

    currentDay.stops.forEach((s) => {
      const dist = calculateDistanceMeters(s.coordinates.lat, s.coordinates.lng, target.lat, target.lng);
      if (dist < minDistance) {
        minDistance = dist;
        closestStop = s;
      }
    });

    // Calcola il percorso reale a piedi dalla tappa più vicina alla deviazione
    fetchWalkingRoute([
      { lat: closestStop.coordinates.lat, lng: closestStop.coordinates.lng },
      { lat: target.lat, lng: target.lng }
    ]).then((routeCoords) => {
      if (routeCoords.length > 1) {
        // Linea Ciano Elettrico della deviazione
        const detourPolyline = L.polyline(routeCoords, {
          color: '#06b6d4',
          weight: 5,
          opacity: 0.95,
          dashArray: '4, 6',
          lineCap: 'round',
        });
        detourLayer.addLayer(detourPolyline);
      }

      // Pin speciale deviazione
      const detourPin = L.divIcon({
        className: 'custom-detour-pin',
        html: `
          <div style="
            background: #06b6d4;
            color: white;
            font-size: 14px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 16px #06b6d4;
            border: 2px solid white;
          ">
            📍
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

      L.marker([target.lat, target.lng], { icon: detourPin }).addTo(detourLayer);

      setActiveDetour({
        place: target,
        closestStop,
        detourDistance: minDistance,
        routeCoords
      });

      // Centra per mostrare sia la tappa che la deviazione
      const bounds = L.latLngBounds([
        [closestStop.coordinates.lat, closestStop.coordinates.lng],
        [target.lat, target.lng]
      ]);
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 17 });
    });
  };

  // 5. Ricerca REALE su OpenStreetMap
  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    const results = await searchParisPlaces(searchQuery.trim());
    setIsSearching(false);
    setSearchResults(results);
  };

  const handleSelectSearchResult = (result: SearchResult) => {
    setSearchResults([]);
    setSearchQuery('');
    handleTriggerDetour({
      name: result.name,
      lat: result.lat,
      lng: result.lng,
      address: result.address
    });
  };

  // 6. Aggiungi la deviazione direttamente all'itinerario con 1 click
  const handleAddDetourToItinerary = () => {
    if (!activeDetour) return;
    saveCustomStopForDay(
      selectedDayId,
      activeDetour.place.name,
      undefined,
      { lat: activeDetour.place.lat, lng: activeDetour.place.lng }
    );
    setAddedSuccess(true);
    if (onStopAdded) onStopAdded();
  };

  // 7. Centra GPS
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
                width: 20px;
                height: 20px;
                background: #38bdf8;
                border: 3px solid white;
                border-radius: 50%;
                box-shadow: 0 0 15px #38bdf8;
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

  const handleFlyToStop = (stop: Stop, idx: number) => {
    setActiveStopIndex(idx);
    const map = mapInstanceRef.current;
    if (map) {
      map.flyTo([stop.coordinates.lat, stop.coordinates.lng], 16.5, { duration: 1.2 });
    }
  };

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950 flex flex-col h-[calc(100vh-140px)] min-h-[520px]">
      
      {/* 1. SELETTORE GIORNO FLOATING */}
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

      {/* 2. BARRA DI RICERCA REALE (CERCA QUALSIASI COSA A PARIGI SU OPENSTREETMAP) */}
      <div className="absolute top-14 left-3 right-3 z-30 pointer-events-auto">
        <form onSubmit={handleSearchSubmit} className="relative">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#0b0f19]/90 backdrop-blur-md border border-slate-700/80 shadow-2xl">
            <Search className="w-4 h-4 text-slate-400 ml-2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cerca qualsiasi posto reale (es. forni, starbucks, vie)..."
              className="flex-1 bg-transparent text-white text-xs placeholder:text-slate-500 focus:outline-none"
            />
            {isSearching && <span className="text-[10px] text-amber-400 mr-2 animate-pulse">Cerca...</span>}
            {searchQuery && (
              <button 
                type="button" 
                onClick={() => { setSearchQuery(''); setSearchResults([]); }} 
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              type="submit"
              className="px-3 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs"
            >
              Cerca
            </button>
          </div>

          {/* Risultati di Ricerca Reale con Calcolo Deviazione */}
          {searchResults.length > 0 && (
            <div className="absolute top-12 left-0 right-0 mt-1 max-h-56 overflow-y-auto rounded-2xl bg-[#0f1422]/95 backdrop-blur-xl border border-slate-700 shadow-2xl p-1.5 space-y-1">
              <div className="text-[10px] font-bold text-cyan-400 px-2 py-0.5">
                Risultati trovati (Tocca per vedere il percorso):
              </div>
              {searchResults.map((r) => {
                let minDist = 999999;
                currentDay.stops.forEach((s) => {
                  const dist = calculateDistanceMeters(s.coordinates.lat, s.coordinates.lng, r.lat, r.lng);
                  if (dist < minDist) minDist = dist;
                });

                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => handleSelectSearchResult(r)}
                    className="w-full text-left p-2 rounded-xl hover:bg-slate-800 flex items-center justify-between text-xs transition-colors"
                  >
                    <div className="truncate mr-2">
                      <span className="font-bold text-white block truncate">{r.name}</span>
                      <p className="text-[10px] text-slate-400 truncate">{r.address}</p>
                    </div>
                    <span className="text-[10px] font-bold text-cyan-300 bg-cyan-500/20 px-2 py-0.5 rounded-full shrink-0 border border-cyan-500/30">
                      +{formatDistance(minDist)}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </form>
      </div>

      {/* 3. PULSANTI RAPIDI FLOATING A DESTRA */}
      <div className="absolute top-28 right-3 z-30 flex flex-col gap-2 pointer-events-auto">
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

        <button
          onClick={() => setShowRestaurants(!showRestaurants)}
          className={`w-10 h-10 rounded-2xl backdrop-blur-md border shadow-xl flex items-center justify-center text-sm active:scale-95 transition-all ${
            showRestaurants
              ? 'bg-amber-500/80 border-amber-400 text-slate-950 font-black'
              : 'bg-[#0b0f19]/90 border-slate-700 text-slate-400 opacity-60'
          }`}
          title="Ristoranti ON/OFF"
        >
          🥐
        </button>

        <button
          onClick={() => setShowPhotoSpots(!showPhotoSpots)}
          className={`w-10 h-10 rounded-2xl backdrop-blur-md border shadow-xl flex items-center justify-center text-sm active:scale-95 transition-all ${
            showPhotoSpots
              ? 'bg-sky-500/80 border-sky-400 text-slate-950 font-black'
              : 'bg-[#0b0f19]/90 border-slate-700 text-slate-400 opacity-60'
          }`}
          title="Scorci Foto ON/OFF"
        >
          📸
        </button>
      </div>

      {/* 4. MAPPA LEAFLET A TUTTO SCHERMO */}
      <div ref={mapContainerRef} className="w-full h-full z-10" />

      {/* 5. SCHEDA DEVIAZIONE ATTIVA (LINEA CIANO ELETTRICO) */}
      {activeDetour && (
        <div className="absolute bottom-20 left-3 right-3 z-30 pointer-events-auto animate-fade-in">
          <div className="p-3 rounded-2xl bg-[#0f1422]/95 backdrop-blur-xl border border-cyan-500/60 shadow-2xl space-y-2">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-cyan-400 uppercase tracking-wider">
                  <Route className="w-3.5 h-3.5" />
                  <span>Deviazione Pedonale Reale</span>
                </div>
                <h4 className="text-sm font-black text-white">{activeDetour.place.name}</h4>
                <p className="text-[11px] text-cyan-300 font-semibold">
                  A soli <strong>{formatDistance(activeDetour.detourDistance)}</strong> ({formatWalkingTime(activeDetour.detourDistance)}) da <em>{activeDetour.closestStop.title}</em>
                </p>
              </div>

              <button
                onClick={() => {
                  setActiveDetour(null);
                  if (detourLayerGroupRef.current) detourLayerGroupRef.current.clearLayers();
                }}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${activeDetour.place.lat},${activeDetour.place.lng}&travelmode=walking`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-1.5 px-2.5 rounded-xl bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-1"
              >
                <Navigation className="w-3 h-3 text-sky-400" />
                <span>Naviga a piedi</span>
              </a>

              <button
                onClick={handleAddDetourToItinerary}
                disabled={addedSuccess}
                className={`flex-1 py-1.5 px-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-all ${
                  addedSuccess
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-cyan-600 hover:bg-cyan-500 text-white'
                }`}
              >
                {addedSuccess ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                <span>{addedSuccess ? 'Aggiunto!' : 'Salva in Tappe'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. CAROSELLO TAPPE IN BASSO */}
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

          <div className="shrink-0 text-[10px] text-amber-300 font-extrabold bg-amber-500/10 px-2 py-1 rounded-xl border border-amber-500/20">
            {formatDistance(totalDistanceMeters)}
          </div>

        </div>
      </div>

    </div>
  );
};

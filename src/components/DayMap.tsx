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
  LocateFixed, 
  MapPin,
  Sparkles,
  Search,
  Coffee,
  Croissant,
  UtensilsCrossed,
  Camera,
  Heart,
  X
} from 'lucide-react';

interface DayMapProps {
  initialDayId?: string;
}

export const DayMap: React.FC<DayMapProps> = ({ initialDayId = 'day-1' }) => {
  const [selectedDayId, setSelectedDayId] = useState<string>(initialDayId);
  const [activeStopIndex, setActiveStopIndex] = useState<number>(0);
  const [isLocating, setIsLocating] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [carouselMode, setCarouselMode] = useState<'stops' | 'nearby'>('stops');
  const [selectedNearbyPlace, setSelectedNearbyPlace] = useState<NearbyPlace | null>(null);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const routeLayerGroupRef = useRef<L.LayerGroup | null>(null);
  const nearbyLayerGroupRef = useRef<L.LayerGroup | null>(null);
  const userGpsLayerGroupRef = useRef<L.LayerGroup | null>(null);

  const currentDay = ITINERARY_DAYS.find((d) => d.id === selectedDayId) || ITINERARY_DAYS[0];

  // Distanza totale approssimativa a piedi
  let totalDistanceMeters = 0;
  for (let i = 0; i < currentDay.stops.length - 1; i++) {
    const from = currentDay.stops[i].coordinates;
    const to = currentDay.stops[i + 1].coordinates;
    totalDistanceMeters += calculateDistanceMeters(from.lat, from.lng, to.lat, to.lng);
  }

  // Coordinate di riferimento per le ricerche: GPS reale oppure la prima tappa del giorno
  const referenceCoords = userLocation || currentDay.stops[0]?.coordinates || { lat: 48.8566, lng: 2.3522 };

  // Calcolo distanze per i luoghi nei dintorni
  const nearbyPlacesWithDistance = NEARBY_PLACES.map((place) => {
    const dist = calculateDistanceMeters(
      referenceCoords.lat,
      referenceCoords.lng,
      place.coordinates.lat,
      place.coordinates.lng
    );
    return { ...place, distanceMeters: dist };
  }).sort((a, b) => a.distanceMeters - b.distanceMeters);

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
      nearbyLayerGroupRef.current = L.layerGroup().addTo(map);
      userGpsLayerGroupRef.current = L.layerGroup().addTo(map);
      mapInstanceRef.current = map;
    }
  }, []);

  // Render Tappe del Giorno + Traccia pedonale
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
            box-shadow: 0 4px 14px rgba(244, 63, 94, 0.6);
            border: 2px solid white;
          ">
            ${index + 1}
          </div>
        `,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
      });

      const marker = L.marker([lat, lng], { icon: customIcon }).addTo(routeLayer);
      marker.bindPopup(`
        <div style="font-family: sans-serif; padding: 4px; color: #1e293b;">
          <strong style="font-size: 13px; display: block; color: #e11d48;">Tappa ${index + 1}: ${stop.title}</strong>
          <span style="font-size: 11px; color: #64748b;">${stop.address}</span>
        </div>
      `);
      marker.on('click', () => {
        setActiveStopIndex(index);
        setSelectedNearbyPlace(null);
      });
    });

    // Traccia a piedi con le curve delle strade
    if (waypoints.length >= 2) {
      fetchWalkingRoute(waypoints).then((routePoints) => {
        if (!routeLayerGroupRef.current) return;
        L.polyline(routePoints, {
          color: '#f43f5e',
          weight: 4.5,
          opacity: 0.85,
          dashArray: '8, 8',
          lineCap: 'round',
        }).addTo(routeLayerGroupRef.current);
      });
    }

    // Centra sui punti
    if (waypoints.length > 0) {
      const bounds = L.latLngBounds(waypoints.map((w) => [w.lat, w.lng]));
      map.fitBounds(bounds, { padding: [55, 55], maxZoom: 15 });
    }
  }, [currentDay]);

  // Render Pin Dintorni e Scorci Segreti
  useEffect(() => {
    const map = mapInstanceRef.current;
    const nearbyLayer = nearbyLayerGroupRef.current;
    if (!map || !nearbyLayer) return;

    nearbyLayer.clearLayers();

    // Mostra i primi 15 posti nei dintorni come graziose stelline viola
    nearbyPlacesWithDistance.slice(0, 15).forEach((place) => {
      const nearbyIcon = L.divIcon({
        className: 'custom-nearby-pin',
        html: `
          <div style="
            background: #8b5cf6;
            color: white;
            font-size: 11px;
            width: 22px;
            height: 22px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px rgba(139, 92, 246, 0.6);
            border: 2px solid white;
          ">
            ✨
          </div>
        `,
        iconSize: [22, 22],
        iconAnchor: [11, 11]
      });

      const marker = L.marker([place.coordinates.lat, place.coordinates.lng], { icon: nearbyIcon }).addTo(nearbyLayer);
      marker.on('click', () => {
        setSelectedNearbyPlace(place);
        setCarouselMode('nearby');
        map.flyTo([place.coordinates.lat, place.coordinates.lng], 16.5, { duration: 1 });
      });
    });
  }, [referenceCoords]);

  // Rilevamento GPS Reale
  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      alert('Geolocalizzazione non supportata dal browser');
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setIsLocating(false);
        const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setUserLocation(coords);

        const map = mapInstanceRef.current;
        const gpsLayer = userGpsLayerGroupRef.current;

        if (map && gpsLayer) {
          gpsLayer.clearLayers();

          const pulseIcon = L.divIcon({
            className: 'user-gps-pulse',
            html: `
              <div style="
                width: 18px;
                height: 18px;
                background: #38bdf8;
                border: 3px solid white;
                border-radius: 50%;
                box-shadow: 0 0 14px #38bdf8;
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
        alert('Posizione GPS non rilevata. Assicurati di aver concesso i permessi di geolocalizzazione.');
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  const handleFlyToStop = (stop: Stop, idx: number) => {
    setActiveStopIndex(idx);
    setSelectedNearbyPlace(null);
    const map = mapInstanceRef.current;
    if (map) {
      map.flyTo([stop.coordinates.lat, stop.coordinates.lng], 16.5, { duration: 1.2 });
    }
  };

  const handleFlyToNearby = (place: NearbyPlace) => {
    setSelectedNearbyPlace(place);
    const map = mapInstanceRef.current;
    if (map) {
      map.flyTo([place.coordinates.lat, place.coordinates.lng], 16.5, { duration: 1.2 });
    }
  };

  // Funzione per generare ricerche live dirette su Google Maps
  const openGoogleMapsSearch = (query: string) => {
    const url = `https://www.google.com/maps/search/${encodeURIComponent(query)}/@${referenceCoords.lat},${referenceCoords.lng},16z`;
    window.open(url, '_blank');
  };

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950 flex flex-col h-[calc(100vh-140px)] min-h-[520px]">
      
      {/* 1. SELETTORE DEI GIORNI IN ALTO */}
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

      {/* 2. BARRA RICERCHE DINAMICHE GOOGLE MAPS IN TEMPO REALE */}
      <div className="absolute top-14 left-3 right-3 z-20 pointer-events-auto">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          <button
            onClick={() => openGoogleMapsSearch('punti panoramici e monumenti')}
            className="px-2.5 py-1.5 rounded-xl bg-black/75 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold flex items-center gap-1.5 shadow-lg active:scale-95 transition-all whitespace-nowrap"
          >
            <Camera className="w-3.5 h-3.5 text-sky-400" />
            <span>📸 Scorci vicini</span>
          </button>

          <button
            onClick={() => openGoogleMapsSearch('café et salons de thé')}
            className="px-2.5 py-1.5 rounded-xl bg-black/75 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold flex items-center gap-1.5 shadow-lg active:scale-95 transition-all whitespace-nowrap"
          >
            <Coffee className="w-3.5 h-3.5 text-amber-400" />
            <span>☕ Caffè al caldo</span>
          </button>

          <button
            onClick={() => openGoogleMapsSearch('boulangerie pâtisserie')}
            className="px-2.5 py-1.5 rounded-xl bg-black/75 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold flex items-center gap-1.5 shadow-lg active:scale-95 transition-all whitespace-nowrap"
          >
            <Croissant className="w-3.5 h-3.5 text-amber-300" />
            <span>🥐 Boulangerie</span>
          </button>

          <button
            onClick={() => openGoogleMapsSearch('bistrot et restaurants')}
            className="px-2.5 py-1.5 rounded-xl bg-black/75 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold flex items-center gap-1.5 shadow-lg active:scale-95 transition-all whitespace-nowrap"
          >
            <UtensilsCrossed className="w-3.5 h-3.5 text-rose-400" />
            <span>🍽️ Ristoranti</span>
          </button>
        </div>
      </div>

      {/* 3. PULSANTE GPS DOVE SIAMO */}
      <div className="absolute top-28 right-3 z-30 pointer-events-auto">
        <button
          onClick={handleLocateMe}
          disabled={isLocating}
          className={`w-10 h-10 rounded-2xl bg-[#0b0f19]/90 backdrop-blur-md border border-slate-700 shadow-xl flex items-center justify-center text-sky-400 active:scale-95 transition-all ${
            isLocating ? 'animate-pulse' : ''
          }`}
          title="Centra su di noi (GPS Reale)"
        >
          <LocateFixed className="w-5 h-5" />
        </button>
      </div>

      {/* 4. MAPPA A SCHERMO INTERO */}
      <div ref={mapContainerRef} className="w-full h-full z-10" />

      {/* 5. CAROSELLO INTERATTIVO IN BASSO: TAPPE VS DINTORNI */}
      <div className="absolute bottom-3 left-3 right-3 z-20 pointer-events-auto space-y-2">
        
        {/* Toggle Tappe vs Dintorni */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center bg-black/80 backdrop-blur-md p-0.5 rounded-xl border border-white/20 text-xs">
            <button
              onClick={() => {
                setCarouselMode('stops');
                setSelectedNearbyPlace(null);
              }}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                carouselMode === 'stops'
                  ? 'bg-rose-500 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              📍 Tappe ({currentDay.stops.length})
            </button>
            <button
              onClick={() => setCarouselMode('nearby')}
              className={`px-3 py-1 rounded-lg font-bold transition-all flex items-center gap-1 ${
                carouselMode === 'nearby'
                  ? 'bg-purple-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3 h-3 text-purple-300" />
              <span>Dintorni & Chicche</span>
            </button>
          </div>

          <span className="text-[10px] text-slate-300 font-bold bg-black/60 px-2 py-1 rounded-lg backdrop-blur-md border border-white/10">
            {formatDistance(totalDistanceMeters)} • {formatWalkingTime(totalDistanceMeters)}
          </span>
        </div>

        {/* Modalità 1: Carosello Tappe del Giorno */}
        {carouselMode === 'stops' && (
          <div className="p-2 rounded-2xl bg-[#0b0f19]/95 backdrop-blur-xl border border-slate-700/80 shadow-2xl flex items-center gap-2">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 flex-1">
              {currentDay.stops.map((stop, idx) => (
                <button
                  key={stop.id}
                  onClick={() => handleFlyToStop(stop, idx)}
                  className={`shrink-0 p-1.5 px-2.5 rounded-xl border text-left transition-all flex items-center gap-1.5 min-w-[130px] max-w-[180px] ${
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
          </div>
        )}

        {/* Modalità 2: Carosello Chicche nei Dintorni */}
        {carouselMode === 'nearby' && (
          <div className="p-2 rounded-2xl bg-[#0b0f19]/95 backdrop-blur-xl border border-purple-500/40 shadow-2xl space-y-2">
            {selectedNearbyPlace ? (
              <div className="p-2 space-y-2 animate-fade-in">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-500/30">
                      {selectedNearbyPlace.neighborhood}
                    </span>
                    <h4 className="text-xs font-extrabold text-white mt-1">
                      {selectedNearbyPlace.name}
                    </h4>
                  </div>
                  <button 
                    onClick={() => setSelectedNearbyPlace(null)}
                    className="p-1 rounded-full text-slate-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[11px] text-slate-300 line-clamp-2">
                  {selectedNearbyPlace.description}
                </p>

                {selectedNearbyPlace.tip && (
                  <p className="text-[10px] text-rose-300 flex items-center gap-1 bg-rose-950/30 p-1.5 rounded-lg border border-rose-500/20">
                    <Heart className="w-3 h-3 text-rose-400 shrink-0" />
                    <span><strong>Per voi:</strong> {selectedNearbyPlace.tip}</span>
                  </p>
                )}

                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${selectedNearbyPlace.coordinates.lat},${selectedNearbyPlace.coordinates.lng}&travelmode=walking`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 active:scale-95 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Portami lì a piedi (Google Maps)</span>
                </a>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                {nearbyPlacesWithDistance.slice(0, 10).map((place) => (
                  <button
                    key={place.id}
                    onClick={() => handleFlyToNearby(place)}
                    className="shrink-0 p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500 text-left transition-all min-w-[150px] max-w-[200px]"
                  >
                    <div className="flex items-center justify-between text-[10px] mb-0.5">
                      <span className="text-purple-300 font-bold">{place.neighborhood}</span>
                      <span className="text-amber-300 font-bold">{formatDistance(place.distanceMeters)}</span>
                    </div>
                    <span className="text-xs font-bold text-white block truncate">{place.name}</span>
                    <span className="text-[10px] text-slate-400 flex items-center gap-0.5 mt-0.5">
                      <Footprints className="w-2.5 h-2.5" />
                      <span>{formatWalkingTime(place.distanceMeters)}</span>
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

      </div>

    </div>
  );
};
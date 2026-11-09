import React, { useState } from 'react';
import { NEARBY_PLACES } from '../data/nearbyPlacesData';
import { calculateDistanceMeters, formatDistance, formatWalkingTime } from '../utils/geo';
import { getCitymapperUrl } from '../data/itineraryData';
import { 
  Compass, 
  MapPin, 
  Navigation, 
  Sparkles, 
  Footprints, 
  Heart, 
  Camera, 
  LocateFixed,
  Eye
} from 'lucide-react';

export const NearbyRadar: React.FC = () => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [gpsLoading, setGpsLoading] = useState<boolean>(false);
  const [gpsError, setGpsError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Modalità Prova dall'Italia (per testare subito da casa)
  const [isTestMode, setIsTestMode] = useState<boolean>(true);
  const [simulatedLocation, setSimulatedLocation] = useState<{ name: string; lat: number; lng: number }>({
    name: 'Montmartre (Maison Rose)',
    lat: 48.8879,
    lng: 2.3398
  });

  const testLocations = [
    { name: 'Montmartre', lat: 48.8879, lng: 2.3398, emoji: '🎨' },
    { name: 'Notre-Dame / Cité', lat: 48.8530, lng: 2.3499, emoji: '🌹' },
    { name: 'Le Marais', lat: 48.8555, lng: 2.3656, emoji: '🏛️' },
    { name: 'Saint-Germain', lat: 48.8539, lng: 2.3332, emoji: '☕' },
    { name: 'Tour Eiffel', lat: 48.8584, lng: 2.2945, emoji: '🗼' },
    { name: 'Louvre & Tuileries', lat: 48.8606, lng: 2.3376, emoji: '✨' }
  ];

  // Rilevamento GPS Reale del Telefono
  const requestLocation = () => {
    if (!navigator.geolocation) {
      setGpsError('GPS non supportato dal browser');
      return;
    }

    setGpsLoading(true);
    setGpsError(null);
    setIsTestMode(false);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setGpsLoading(false);
      },
      () => {
        setGpsLoading(false);
        setGpsError('GPS non rilevato al momento. Usa la prova qui sotto per testare da casa!');
        setIsTestMode(true);
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  const currentCoords = isTestMode ? simulatedLocation : userLocation;

  // Mostra SOLO cose da vedere, scorci romantici e foto (esclude cibo generico)
  const sightPlaces = NEARBY_PLACES.filter((p) => p.category !== 'food');

  const placesWithDistance = sightPlaces.map((place) => {
    let distanceMeters: number | null = null;
    if (currentCoords) {
      distanceMeters = calculateDistanceMeters(
        currentCoords.lat,
        currentCoords.lng,
        place.coordinates.lat,
        place.coordinates.lng
      );
    }
    return {
      ...place,
      distanceMeters
    };
  });

  const filteredPlaces = placesWithDistance.filter((place) => {
    if (selectedCategory === 'all') return true;
    return place.category === selectedCategory;
  });

  if (currentCoords) {
    filteredPlaces.sort((a, b) => (a.distanceMeters ?? 999999) - (b.distanceMeters ?? 999999));
  }

  return (
    <div className="space-y-3.5">
      
      {/* Box Radar GPS in Tempo Reale */}
      <div className="p-4 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/30 shadow-xl space-y-3">
        
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-sky-400">
            <Compass className="w-4 h-4 text-sky-400" />
            <span>Cosa c'è da vedere intorno a noi adesso?</span>
          </div>

          {/* Toggle Prova Italia vs GPS Reale */}
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-[11px]">
            <button
              onClick={() => setIsTestMode(true)}
              className={`px-2 py-1 rounded-lg font-bold transition-colors ${
                isTestMode ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              🇮🇹 Prova da Casa
            </button>
            <button
              onClick={requestLocation}
              className={`px-2 py-1 rounded-lg font-bold transition-colors flex items-center gap-1 ${
                !isTestMode && userLocation ? 'bg-sky-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <LocateFixed className="w-3 h-3" />
              <span>🇫🇷 GPS a Parigi</span>
            </button>
          </div>
        </div>

        {/* Simulatore Italia */}
        {isTestMode ? (
          <div className="space-y-2">
            <p className="text-xs text-slate-300 leading-relaxed">
              Fai finta di essere a Parigi e vedi subito <strong>gli scorci romantici e i posti segreti più vicini con i metri reali</strong>:
            </p>

            <div className="flex flex-wrap gap-1.5">
              {testLocations.map((loc) => (
                <button
                  key={loc.name}
                  onClick={() => setSimulatedLocation(loc)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all ${
                    simulatedLocation.name === loc.name
                      ? 'bg-rose-500 text-white shadow-md shadow-rose-950/40 scale-102'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-750 border border-slate-700/60'
                  }`}
                >
                  <span>{loc.emoji}</span>
                  <span>{loc.name}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-xs text-sky-200 flex items-center gap-2">
            <LocateFixed className="w-4 h-4 text-sky-400 shrink-0" />
            <span>
              {gpsLoading 
                ? 'Rilevamento satellitare in corso...' 
                : userLocation 
                ? 'GPS attivo! Scorci ordinati dal più vicino a dove vi trovate.' 
                : 'Tocca "GPS a Parigi" per rilevare la posizione.'}
            </span>
          </div>
        )}

      </div>

      {/* Categorie Filtro: Romantici, Foto, Segreti */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
        {[
          { id: 'all', label: 'Tutti gli Scorci', icon: null },
          { id: 'romantic', label: '❤️ Romantici & Piazze', icon: Heart },
          { id: 'photo', label: '📸 Punti Foto Iconici', icon: Camera },
          { id: 'curiosity', label: '✨ Cortili & Segreti', icon: Sparkles }
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
              selectedCategory === cat.id
                ? 'bg-gradient-to-r from-rose-600/30 to-amber-600/30 text-amber-200 border-rose-500/40'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border-slate-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Lista Scorci con Distanza in Metri e Minuti a Piedi */}
      <div className="space-y-2.5">
        {filteredPlaces.map((place) => {
          const gmapsWalkingUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.coordinates.lat},${place.coordinates.lng}&travelmode=walking`;

          return (
            <div
              key={place.id}
              className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all backdrop-blur-sm space-y-2"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700/60">
                      {place.neighborhood}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {place.name}
                  </h4>
                </div>

                {place.distanceMeters !== null && (
                  <div className="text-right shrink-0 bg-sky-950/50 border border-sky-500/30 px-2 py-1 rounded-xl">
                    <div className="text-xs font-black text-sky-300">
                      {formatDistance(place.distanceMeters)}
                    </div>
                    <div className="text-[10px] text-sky-400 flex items-center gap-0.5 justify-end">
                      <Footprints className="w-2.5 h-2.5" />
                      <span>{formatWalkingTime(place.distanceMeters)}</span>
                    </div>
                  </div>
                )}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {place.description}
              </p>

              {place.tip && (
                <div className="p-2 rounded-xl bg-rose-950/20 border border-rose-500/20 text-rose-200 text-xs flex items-start gap-1.5">
                  <Heart className="w-3 h-3 text-rose-400 shrink-0 mt-0.5 fill-rose-500/20" />
                  <div>
                    <span className="font-bold text-rose-300">La chicca per due: </span>
                    {place.tip}
                  </div>
                </div>
              )}

              {/* Tasto Diretto: Portami Lì con Google Maps */}
              <div className="pt-1 border-t border-slate-800/80">
                <a
                  href={gmapsWalkingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-750 active:scale-98 text-white border border-slate-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5 text-sky-400" />
                  <span>🚶 Portami lì a piedi (Google Maps)</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

import React, { useState } from 'react';
import { NEARBY_PLACES } from '../data/nearbyPlacesData';
import { calculateDistanceMeters, formatDistance, formatWalkingTime } from '../utils/geo';
import { getCitymapperUrl, getGoogleMapsUrl } from '../data/itineraryData';
import { 
  Compass, 
  MapPin, 
  Navigation, 
  Sparkles, 
  Footprints, 
  Heart, 
  Utensils, 
  Camera, 
  LocateFixed,
  AlertCircle,
  Sliders
} from 'lucide-react';

export const NearbyRadar: React.FC = () => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [gpsLoading, setGpsLoading] = useState<boolean>(false);
  const [gpsError, setGpsError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Modalità Test Parigi (per provare l'app adesso stando in Italia!)
  const [isTestMode, setIsTestMode] = useState<boolean>(true);
  const [simulatedLocation, setSimulatedLocation] = useState<{ name: string; lat: number; lng: number }>({
    name: 'Montmartre (Maison Rose)',
    lat: 48.8879,
    lng: 2.3398
  });

  const testLocations = [
    { name: 'Montmartre', lat: 48.8879, lng: 2.3398, emoji: '🎨' },
    { name: 'Notre-Dame / Cité', lat: 48.8530, lng: 2.3499, emoji: '🌹' },
    { name: 'Le Marais', lat: 48.8555, lng: 2.3656, emoji: '🥐' },
    { name: 'Saint-Germain', lat: 48.8539, lng: 2.3332, emoji: '☕' },
    { name: 'Tour Eiffel', lat: 48.8584, lng: 2.2945, emoji: '🗼' },
    { name: 'Louvre & Tuileries', lat: 48.8606, lng: 2.3376, emoji: '🏛️' }
  ];

  // Rilevamento GPS Reale
  const requestLocation = () => {
    if (!navigator.geolocation) {
      setGpsError('La geolocalizzazione non è supportata dal browser');
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
      (error) => {
        setGpsLoading(false);
        setGpsError('GPS non rilevato. Usa la Modalità Test qui sotto per provare l\'app dall\'Italia!');
        setIsTestMode(true);
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  // Punto di riferimento: se in test mode usa la simulazione parigina, altrimenti il GPS reale
  const currentCoords = isTestMode ? simulatedLocation : userLocation;

  // Calcolo distanze
  const placesWithDistance = NEARBY_PLACES.map((place) => {
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

  // Filtro categoria
  const filteredPlaces = placesWithDistance.filter((place) => {
    if (selectedCategory === 'all') return true;
    return place.category === selectedCategory;
  });

  // Ordina per distanza crescente
  if (currentCoords) {
    filteredPlaces.sort((a, b) => (a.distanceMeters ?? 999999) - (b.distanceMeters ?? 999999));
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'romantic':
        return <Heart className="w-3 h-3 text-rose-400 fill-rose-500/20" />;
      case 'food':
        return <Utensils className="w-3 h-3 text-amber-400" />;
      case 'photo':
        return <Camera className="w-3 h-3 text-sky-400" />;
      case 'curiosity':
        return <Sparkles className="w-3 h-3 text-purple-400" />;
      default:
        return <MapPin className="w-3 h-3 text-slate-400" />;
    }
  };

  return (
    <div className="space-y-4">
      
      {/* Box Simulatore & GPS */}
      <div className="p-4 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 shadow-xl space-y-3">
        
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>Radar Dintorni Parigi</span>
          </div>

          {/* Toggle Modalità Test vs GPS Reale */}
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-[11px]">
            <button
              onClick={() => setIsTestMode(true)}
              className={`px-2 py-1 rounded-lg font-bold transition-colors ${
                isTestMode ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              🇮🇹 Prova dall'Italia
            </button>
            <button
              onClick={requestLocation}
              className={`px-2 py-1 rounded-lg font-bold transition-colors flex items-center gap-1 ${
                !isTestMode && userLocation ? 'bg-emerald-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <LocateFixed className="w-3 h-3" />
              <span>🇫🇷 GPS Reale</span>
            </button>
          </div>
        </div>

        {/* Spiegazione Test dall'Italia */}
        {isTestMode ? (
          <div className="space-y-2">
            <p className="text-xs text-amber-200/90 leading-relaxed">
              👉 <strong>Stai provando l'app dall'Italia?</strong> Scegli dove far finta di trovarti a Parigi per testare le distanze e i minuti a piedi in tempo reale:
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

            <div className="text-[11px] text-slate-400 pt-1 flex items-center gap-1">
              <span>Posizione simulata:</span>
              <strong className="text-white">{simulatedLocation.name}</strong>
            </div>
          </div>
        ) : (
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-200 flex items-center gap-2">
            <LocateFixed className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              {gpsLoading 
                ? 'Rilevamento GPS in corso...' 
                : userLocation 
                ? 'GPS attivo! Posti ordinati dalla tua posizione reale.' 
                : 'Tocca "GPS Reale" per attivare il rilevamento.'}
            </span>
          </div>
        )}

      </div>

      {/* Categorie Filtro */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
        {[
          { id: 'all', label: 'Tutti', icon: null },
          { id: 'romantic', label: 'Romantici ❤️', icon: Heart },
          { id: 'food', label: 'Cibo & Dolci 🥐', icon: Utensils },
          { id: 'photo', label: 'Scorci & Foto 📸', icon: Camera },
          { id: 'curiosity', label: 'Piazze & Segreti ✨', icon: Sparkles }
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

      {/* Conteggio e Ordinamento */}
      <div className="flex items-center justify-between px-1 text-xs text-slate-400">
        <span>Trovati <strong>{filteredPlaces.length}</strong> luoghi</span>
        <span className="text-emerald-400 flex items-center gap-1 text-[11px] font-semibold">
          <Footprints className="w-3.5 h-3.5" />
          Ordinati dal più vicino a te
        </span>
      </div>

      {/* Lista Luoghi */}
      <div className="space-y-2.5">
        {filteredPlaces.map((place) => {
          const cmUrl = getCitymapperUrl(place.coordinates.lat, place.coordinates.lng, place.name, place.address);
          const gmapsWalkingUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.coordinates.lat},${place.coordinates.lng}&travelmode=walking`;

          return (
            <div
              key={place.id}
              className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all backdrop-blur-sm space-y-2"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700/60 flex items-center gap-1">
                      {getCategoryIcon(place.category)}
                      {place.neighborhood}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {place.name}
                  </h4>
                </div>

                {/* Distanza & Tempo a Piedi Calcolato */}
                {place.distanceMeters !== null && (
                  <div className="text-right shrink-0 bg-emerald-950/50 border border-emerald-500/30 px-2 py-1 rounded-xl">
                    <div className="text-xs font-black text-emerald-300">
                      {formatDistance(place.distanceMeters)}
                    </div>
                    <div className="text-[10px] text-emerald-400 flex items-center gap-0.5 justify-end">
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
                    <span className="font-bold text-rose-300">Tip: </span>
                    {place.tip}
                  </div>
                </div>
              )}

              {/* Pulsanti di navigazione */}
              <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-800/80">
                <a
                  href={gmapsWalkingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1.5 px-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-sky-400" />
                  <span>🚶 A piedi (Maps)</span>
                </a>

                <a
                  href={cmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1.5 px-2 rounded-xl bg-[#288330]/20 hover:bg-[#288330]/30 text-[#4ade80] border border-[#288330]/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>🚇 Metro (Citymapper)</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

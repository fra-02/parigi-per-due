import React, { useState, useEffect } from 'react';
import { NEARBY_PLACES, NearbyPlace } from '../data/nearbyPlacesData';
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
  HelpCircle, 
  RefreshCw,
  LocateFixed,
  AlertCircle
} from 'lucide-react';

interface NearbyRadarProps {
  onGoToTransit?: () => void;
}

export const NearbyRadar: React.FC<NearbyRadarProps> = () => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [gpsLoading, setGpsLoading] = useState<boolean>(false);
  const [gpsError, setGpsError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('all');

  // Rilevamento GPS
  const requestLocation = () => {
    if (!navigator.geolocation) {
      setGpsError('La geolocalizzazione non è supportata dal tuo browser');
      return;
    }

    setGpsLoading(true);
    setGpsError(null);

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
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setGpsError('Permesso GPS negato. Puoi comunque scegliere il quartiere dal menu!');
            break;
          case error.POSITION_UNAVAILABLE:
            setGpsError('Posizione GPS non disponibile. Sei al coperto o sotto terra?');
            break;
          default:
            setGpsError('Impossibile rilevare la posizione GPS al momento.');
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 30000
      }
    );
  };

  // Seleziona un quartiere per simulare / filtrare
  const neighborhoods = [
    'all',
    'Montmartre',
    'Le Marais',
    'Centro & Senna',
    'Saint-Germain & Quartiere Latino',
    'Tour Eiffel & Ovest',
    'Opéra & Grandi Magazzini'
  ];

  // Centroide approssimativo per quartiere quando non c'è GPS attivo
  const neighborhoodCoords: Record<string, { lat: number; lng: number }> = {
    'Montmartre': { lat: 48.8867, lng: 2.3431 },
    'Le Marais': { lat: 48.8555, lng: 2.3656 },
    'Centro & Senna': { lat: 48.8554, lng: 2.3450 },
    'Saint-Germain & Quartiere Latino': { lat: 48.8539, lng: 2.3332 },
    'Tour Eiffel & Ovest': { lat: 48.8584, lng: 2.2945 },
    'Opéra & Grandi Magazzini': { lat: 48.8719, lng: 2.3316 }
  };

  // Punto di riferimento per il calcolo della distanza (GPS reale oppure quartiere selezionato)
  const referencePoint = userLocation || (selectedNeighborhood !== 'all' ? neighborhoodCoords[selectedNeighborhood] : null);

  // Calcola distanze e ordina
  const placesWithDistance = NEARBY_PLACES.map((place) => {
    let distanceMeters: number | null = null;
    if (referencePoint) {
      distanceMeters = calculateDistanceMeters(
        referencePoint.lat,
        referencePoint.lng,
        place.coordinates.lat,
        place.coordinates.lng
      );
    }
    return {
      ...place,
      distanceMeters
    };
  });

  // Filtro
  const filteredPlaces = placesWithDistance.filter((place) => {
    const matchCategory = selectedCategory === 'all' || place.category === selectedCategory;
    const matchNeighborhood = selectedNeighborhood === 'all' || place.neighborhood === selectedNeighborhood;
    return matchCategory && matchNeighborhood;
  });

  // Ordina per distanza crescente se disponibile
  if (referencePoint) {
    filteredPlaces.sort((a, b) => (a.distanceMeters ?? 999999) - (b.distanceMeters ?? 999999));
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'romantic':
        return <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-500/20" />;
      case 'food':
        return <Utensils className="w-3.5 h-3.5 text-amber-400" />;
      case 'photo':
        return <Camera className="w-3.5 h-3.5 text-sky-400" />;
      case 'curiosity':
        return <Sparkles className="w-3.5 h-3.5 text-purple-400" />;
      default:
        return <MapPin className="w-3.5 h-3.5 text-slate-400" />;
    }
  };

  return (
    <div className="space-y-4">
      
      {/* Hero GPS Banner */}
      <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 shadow-xl">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-0.5">
              <Compass className="w-4 h-4 text-emerald-400 animate-spin-slow" />
              <span>Radar Esplora Parigi</span>
            </div>
            <h2 className="text-xl font-black text-white">Cosa c'è nei paraggi?</h2>
          </div>

          <button
            onClick={requestLocation}
            disabled={gpsLoading}
            className={`px-3 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-950/40 transition-all ${
              gpsLoading ? 'opacity-70 animate-pulse' : ''
            }`}
          >
            {gpsLoading ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <LocateFixed className="w-3.5 h-3.5" />
            )}
            <span>{gpsLoading ? 'Rilevo...' : userLocation ? 'Aggiorna GPS' : 'Leggi la mia Posizione'}</span>
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed mb-3">
          Tocca il pulsante: l'app legge il GPS del telefono e ordina subito i posti più belli, romantici e golosi <strong>dal più vicino al più lontano da dove ti trovi</strong> con i metri e minuti a piedi!
        </p>

        {/* Status GPS */}
        {userLocation && (
          <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center gap-2 text-xs text-emerald-200">
            <LocateFixed className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>GPS Attivo!</strong> Luoghi ordinati a partire dalla tua posizione corrente in tempo reale.
            </span>
          </div>
        )}

        {gpsError && (
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-2 text-xs text-amber-200">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p>{gpsError}</p>
              <p className="text-[11px] text-amber-300/80 mt-0.5">
                Nessun problema: usa il filtro qui sotto per selezionare il quartiere in cui vi trovate!
              </p>
            </div>
          </div>
        )}

        {/* Filtro Quartiere Rapido */}
        <div className="mt-3 pt-3 border-t border-slate-800 flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] text-slate-400 font-semibold mr-1">Quartiere:</span>
          {neighborhoods.map((n) => (
            <button
              key={n}
              onClick={() => setSelectedNeighborhood(n)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                selectedNeighborhood === n
                  ? 'bg-slate-200 text-slate-900 font-bold'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-700/50'
              }`}
            >
              {n === 'all' ? 'Tutta Parigi' : n}
            </button>
          ))}
        </div>
      </div>

      {/* Categorie Filtro */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
        {[
          { id: 'all', label: 'Tutti i Luoghi', icon: null },
          { id: 'romantic', label: 'Romantici ❤️', icon: Heart },
          { id: 'food', label: 'Cibo & Dolci 🥐', icon: Utensils },
          { id: 'photo', label: 'Scorci & Foto 📸', icon: Camera },
          { id: 'curiosity', label: 'Piazze & Segreti ✨', icon: Sparkles }
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all border ${
              selectedCategory === cat.id
                ? 'bg-gradient-to-r from-rose-600/30 to-amber-600/30 text-amber-200 border-rose-500/40 font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border-slate-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Conteggio Risultati */}
      <div className="flex items-center justify-between px-1 text-xs text-slate-400">
        <span>Trovati <strong>{filteredPlaces.length}</strong> luoghi</span>
        {referencePoint && (
          <span className="text-emerald-400 flex items-center gap-1">
            <Footprints className="w-3.5 h-3.5" />
            Ordinati dal più vicino
          </span>
        )}
      </div>

      {/* Lista Luoghi nei Dintorni */}
      <div className="space-y-3">
        {filteredPlaces.map((place) => {
          const cmUrl = getCitymapperUrl(place.coordinates.lat, place.coordinates.lng, place.name, place.address);
          const gmUrl = getGoogleMapsUrl(place.coordinates.lat, place.coordinates.lng, place.name);

          return (
            <div
              key={place.id}
              className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all backdrop-blur-sm shadow-md space-y-2.5"
            >
              {/* Header card con Distanza in evidenza */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700/60 flex items-center gap-1">
                      {getCategoryIcon(place.category)}
                      {place.neighborhood}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white leading-tight">
                    {place.name}
                  </h3>
                </div>

                {/* Distanza & Tempo a Piedi */}
                {place.distanceMeters !== null && (
                  <div className="text-right shrink-0 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1.5 rounded-xl">
                    <div className="text-xs font-black text-emerald-300">
                      {formatDistance(place.distanceMeters)}
                    </div>
                    <div className="text-[10px] text-emerald-400/80 flex items-center gap-0.5 justify-end">
                      <Footprints className="w-3 h-3" />
                      <span>{formatWalkingTime(place.distanceMeters)}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Descrizione */}
              <p className="text-xs text-slate-300 leading-relaxed">
                {place.description}
              </p>

              {/* Consiglio speciale / chicca */}
              {place.tip && (
                <div className="p-2 rounded-xl bg-rose-950/20 border border-rose-500/20 text-rose-200 text-xs flex items-start gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5 fill-rose-500/20" />
                  <div>
                    <span className="font-bold text-rose-300">Da non perdere: </span>
                    {place.tip}
                  </div>
                </div>
              )}

              {/* Metro & Indirizzo */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="truncate max-w-[200px]">📍 {place.address}</span>
                <span className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">
                  🚇 {place.metro}
                </span>
              </div>

              {/* Azioni Rapide con Citymapper & Maps */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={cmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-xl bg-[#288330]/20 hover:bg-[#288330]/30 active:scale-95 text-[#4ade80] border border-[#288330]/40 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
                  title="Apri indicazioni a piedi o con metro in Citymapper"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>🚇 Citymapper</span>
                </a>

                <a
                  href={gmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-750 active:scale-95 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                >
                  <Navigation className="w-3.5 h-3.5 text-sky-400" />
                  <span>📍 Google Maps</span>
                </a>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

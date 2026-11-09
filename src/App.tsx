import React, { useState, useEffect } from 'react';
import { ITINERARY_DAYS } from './data/itineraryData';
import { Navbar } from './components/Navbar';
import { DaySelector } from './components/DaySelector';
import { StopCard } from './components/StopCard';
import { DayMap } from './components/DayMap';
import { WeatherWidget } from './components/WeatherWidget';
import { NearbyRadar } from './components/NearbyRadar';
import { TransitNavigator } from './components/TransitNavigator';
import { UtilitiesView } from './components/UtilitiesView';
import { MetroAssistantModal } from './components/MetroAssistantModal';
import { RainPlanModal } from './components/RainPlanModal';
import { Under26Modal } from './components/Under26Modal';
import { NotesModal } from './components/NotesModal';
import { calculateDistanceMeters, formatDistance, formatWalkingTime } from './utils/geo';
import { 
  Calendar, 
  Compass, 
  Train, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  Share2, 
  Info,
  Map,
  ListFilter,
  Footprints
} from 'lucide-react';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'radar' | 'transit' | 'utilities'>('itinerary');
  const [selectedDayId, setSelectedDayId] = useState<string>('day-1');
  const [itineraryViewMode, setItineraryViewMode] = useState<'list' | 'map'>('list');
  const [completedStops, setCompletedStops] = useState<Record<string, boolean>>({});
  
  // Modals state
  const [isMetroOpen, setIsMetroOpen] = useState<boolean>(false);
  const [isRainOpen, setIsRainOpen] = useState<boolean>(false);
  const [isUnder26Open, setIsUnder26Open] = useState<boolean>(false);
  const [isNotesOpen, setIsNotesOpen] = useState<boolean>(false);

  // Caricamento tappe completate da localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('parigi_completed_stops');
      if (saved) {
        setCompletedStops(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Error loading saved stops', e);
    }
  }, []);

  const handleToggleComplete = (id: string) => {
    setCompletedStops((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem('parigi_completed_stops', JSON.stringify(updated));
      } catch (e) {
        console.error('Error saving stops', e);
      }
      return updated;
    });
  };

  const currentDayIndex = ITINERARY_DAYS.findIndex((d) => d.id === selectedDayId);
  const currentDay = ITINERARY_DAYS[currentDayIndex] || ITINERARY_DAYS[0];

  const totalStopsCount = ITINERARY_DAYS.reduce((acc, day) => acc + day.stops.length, 0);
  const completedCount = Object.values(completedStops).filter(Boolean).length;

  const handlePrevDay = () => {
    if (currentDayIndex > 0) {
      setSelectedDayId(ITINERARY_DAYS[currentDayIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextDay = () => {
    if (currentDayIndex < ITINERARY_DAYS.length - 1) {
      setSelectedDayId(ITINERARY_DAYS[currentDayIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Parigi per Due ❤️ Nostro Itinerario',
        text: 'Il nostro itinerario completo di Parigi con mappa, meteo e Citymapper!',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiato negli appunti! Invialo su WhatsApp alla tua ragazza ❤️');
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans pb-24">
      
      {/* Top Navbar */}
      <Navbar
        onOpenMetro={() => setActiveTab('transit')}
        onOpenRain={() => setIsRainOpen(true)}
        onOpenUnder26={() => setIsUnder26Open(true)}
        onOpenNotes={() => setIsNotesOpen(true)}
        completedCount={completedCount}
        totalCount={totalStopsCount}
      />

      {/* Main Container */}
      <main className="max-w-2xl mx-auto w-full px-4 pt-3 flex-1">
        
        {/* TAB 1: ITINERARIO GIORNO PER GIORNO */}
        {activeTab === 'itinerary' && (
          <div className="space-y-3.5">
            
            {/* Widget Meteo & Tramonto Parigi */}
            <WeatherWidget />

            {/* Selettore dei Giorni */}
            <div>
              <div className="flex items-center justify-between px-1 mb-1 text-xs text-slate-400">
                <span className="font-semibold uppercase tracking-wider text-[11px] text-slate-300">
                  Giorno del Viaggio
                </span>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1 text-[11px] text-rose-400 hover:text-rose-300 transition-colors"
                >
                  <Share2 className="w-3 h-3" />
                  <span>Condividi con lei</span>
                </button>
              </div>
              <DaySelector
                selectedDayId={selectedDayId}
                onSelectDay={(id) => {
                  setSelectedDayId(id);
                }}
                completedStops={completedStops}
              />
            </div>

            {/* Intestazione Giorno Snella con Toggle Vista Mappa / Lista */}
            <div className={`p-4 rounded-3xl bg-gradient-to-br ${currentDay.colorTheme} border border-slate-800/80 shadow-lg relative overflow-hidden backdrop-blur-sm`}>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/10 text-white border border-white/20">
                  {currentDay.dateStr}
                </span>

                {/* Selettore Vista Mappa / Schede */}
                <div className="flex items-center bg-slate-950/80 p-1 rounded-xl border border-white/10 text-xs">
                  <button
                    onClick={() => setItineraryViewMode('list')}
                    className={`px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 transition-colors ${
                      itineraryViewMode === 'list' 
                        ? 'bg-rose-500 text-white shadow' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <ListFilter className="w-3.5 h-3.5" />
                    <span>Tappe</span>
                  </button>
                  <button
                    onClick={() => setItineraryViewMode('map')}
                    className={`px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 transition-colors ${
                      itineraryViewMode === 'map' 
                        ? 'bg-rose-500 text-white shadow' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Map className="w-3.5 h-3.5" />
                    <span>Mappa</span>
                  </button>
                </div>
              </div>

              <h3 className="text-xl font-black text-white leading-tight">
                {currentDay.title}
              </h3>
              <p className="text-xs text-rose-200/90 font-medium flex items-center gap-1 mt-0.5">
                <Heart className="w-3 h-3 text-rose-400 fill-rose-400/40 shrink-0" />
                <span>{currentDay.tagline}</span>
              </p>
            </div>

            {/* VISTA MAPPA INTERATTIVA */}
            {itineraryViewMode === 'map' ? (
              <DayMap day={currentDay} />
            ) : (
              /* VISTA TAPPE SNELLE E INTUITIVE */
              <div className="space-y-2.5">
                {currentDay.stops.map((stop, idx) => {
                  // Calcolo distanza dalla tappa precedente
                  let distanceToNext: number | null = null;
                  if (idx < currentDay.stops.length - 1) {
                    const nextStop = currentDay.stops[idx + 1];
                    distanceToNext = calculateDistanceMeters(
                      stop.coordinates.lat,
                      stop.coordinates.lng,
                      nextStop.coordinates.lat,
                      nextStop.coordinates.lng
                    );
                  }

                  return (
                    <React.Fragment key={stop.id}>
                      <StopCard
                        stop={stop}
                        index={idx}
                        isCompleted={!!completedStops[stop.id]}
                        onToggleComplete={handleToggleComplete}
                      />

                      {/* Lineetta di connessione e distanza a piedi verso la tappa successiva */}
                      {distanceToNext !== null && (
                        <div className="flex items-center justify-center my-0.5">
                          <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-900/90 border border-slate-800 text-[10px] text-slate-400 font-medium">
                            <Footprints className="w-2.5 h-2.5 text-rose-400" />
                            <span>
                              {formatDistance(distanceToNext)} • {formatWalkingTime(distanceToNext)} alla tappa successiva
                            </span>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            )}

            {/* Navigazione Rapida Tra Giorni */}
            <div className="mt-6 flex items-center justify-between gap-3 pt-3 border-t border-slate-800">
              <button
                onClick={handlePrevDay}
                disabled={currentDayIndex === 0}
                className={`flex-1 py-2.5 px-3 rounded-2xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  currentDayIndex === 0
                    ? 'opacity-40 border-slate-800 text-slate-600 cursor-not-allowed'
                    : 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800 active:scale-98'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Giorno Prima</span>
              </button>

              <button
                onClick={handleNextDay}
                disabled={currentDayIndex === ITINERARY_DAYS.length - 1}
                className={`flex-1 py-2.5 px-3 rounded-2xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  currentDayIndex === ITINERARY_DAYS.length - 1
                    ? 'opacity-40 border-slate-800 text-slate-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-rose-600/30 to-amber-600/30 border-rose-500/40 text-amber-200 hover:from-rose-600/40 hover:to-amber-600/40 active:scale-98'
                }`}
              >
                <span>Giorno Dopo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* TAB 2: RADAR NEI DINTORNI (CON SIMULATORE TEST DALL'ITALIA) */}
        {activeTab === 'radar' && (
          <NearbyRadar />
        )}

        {/* TAB 3: TRANSIT NAVIGATOR (CITYMAPPER & METRO & HOTEL) */}
        {activeTab === 'transit' && (
          <TransitNavigator />
        )}

        {/* TAB 4: GUIDA, FRASARIO & UTILITY */}
        {activeTab === 'utilities' && (
          <UtilitiesView
            onOpenUnder26={() => setIsUnder26Open(true)}
            onOpenRain={() => setIsRainOpen(true)}
            onOpenNotes={() => setIsNotesOpen(true)}
          />
        )}

      </main>

      {/* Floating Bottom Navigation Tab Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#0b0f19]/95 backdrop-blur-xl border-t border-slate-800/80 px-2 pt-2 pb-5">
        <div className="max-w-md mx-auto grid grid-cols-4 gap-1">
          
          <button
            onClick={() => {
              setActiveTab('itinerary');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all ${
              activeTab === 'itinerary'
                ? 'text-rose-400 bg-rose-500/10 font-bold scale-102'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Calendar className="w-5 h-5 mb-1" />
            <span className="text-[11px]">Itinerario</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('radar');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all ${
              activeTab === 'radar'
                ? 'text-emerald-400 bg-emerald-500/10 font-bold scale-102'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Compass className="w-5 h-5 mb-1" />
            <span className="text-[11px]">Dintorni</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('transit');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all ${
              activeTab === 'transit'
                ? 'text-[#4ade80] bg-[#288330]/20 font-bold scale-102'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Train className="w-5 h-5 mb-1" />
            <span className="text-[11px]">Citymapper</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('utilities');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all ${
              activeTab === 'utilities'
                ? 'text-amber-400 bg-amber-500/10 font-bold scale-102'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-5 h-5 mb-1" />
            <span className="text-[11px]">Info & Extra</span>
          </button>

        </div>
      </nav>

      {/* Modals */}
      <MetroAssistantModal isOpen={isMetroOpen} onClose={() => setIsMetroOpen(false)} />
      <RainPlanModal isOpen={isRainOpen} onClose={() => setIsRainOpen(false)} />
      <Under26Modal isOpen={isUnder26Open} onClose={() => setIsUnder26Open(false)} />
      <NotesModal isOpen={isNotesOpen} onClose={() => setIsNotesOpen(false)} />

    </div>
  );
};

import React, { useState, useEffect, useMemo } from 'react';
import { ITINERARY_DAYS, Stop } from './data/itineraryData';
import { DaySelector } from './components/DaySelector';
import { StopCard } from './components/StopCard';
import { StopStoryViewer } from './components/StopStoryViewer';
import { DayMap } from './components/DayMap';
import { WeatherWidget } from './components/WeatherWidget';
import { TransitNavigator } from './components/TransitNavigator';
import { NotesView } from './components/NotesView';
import { AddStopModal } from './components/AddStopModal';
import { getCustomStopsForDay, saveCustomStopForDay, deleteCustomStop } from './utils/customStops';
import { calculateDistanceMeters, formatDistance, formatWalkingTime } from './utils/geo';
import { 
  Calendar, 
  Map, 
  Train, 
  BookHeart,
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Layers,
  Footprints
} from 'lucide-react';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'map' | 'transit' | 'notes'>('itinerary');
  const [selectedDayId, setSelectedDayId] = useState<string>('day-1');
  const [itineraryMode, setItineraryMode] = useState<'story' | 'list'>('story');
  const [completedStops, setCompletedStops] = useState<Record<string, boolean>>({});
  const [isAddStopOpen, setIsAddStopOpen] = useState<boolean>(false);
  const [customStopsVersion, setCustomStopsVersion] = useState<number>(0);

  // Caricamento tappe completate da localStorage & auto-selezione intelligente del giorno
  useEffect(() => {
    try {
      const saved = localStorage.getItem('parigi_completed_stops');
      if (saved) {
        setCompletedStops(JSON.parse(saved));
      }

      // Rilevamento automatico del giorno in base alla data reale (Dicembre 7-12)
      const now = new Date();
      const currentMonth = now.getMonth(); // 11 = Dicembre
      const currentDayDate = now.getDate();

      if (currentMonth === 11) {
        if (currentDayDate === 7) setSelectedDayId('day-1');
        else if (currentDayDate === 8) setSelectedDayId('day-2');
        else if (currentDayDate === 9) setSelectedDayId('day-3');
        else if (currentDayDate === 10) setSelectedDayId('day-4');
        else if (currentDayDate === 11) setSelectedDayId('day-5');
        else if (currentDayDate === 12) setSelectedDayId('day-6');
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
  const baseDay = ITINERARY_DAYS[currentDayIndex] || ITINERARY_DAYS[0];

  // Unione tappe predefinite + tappe personalizzate aggiunte al volo
  const combinedStops = useMemo(() => {
    const custom = getCustomStopsForDay(baseDay.id);
    return [...baseDay.stops, ...custom];
  }, [baseDay.id, customStopsVersion]);

  const currentDay = useMemo(() => {
    return {
      ...baseDay,
      stops: combinedStops
    };
  }, [baseDay, combinedStops]);

  // Calcolo indice della PRIMA tappa ancora da fare per aprire subito l'app su quella!
  const firstPendingStopIndex = useMemo(() => {
    const idx = combinedStops.findIndex((s) => !completedStops[s.id]);
    return idx !== -1 ? idx : 0;
  }, [combinedStops, completedStops]);

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

  const handleAddQuickStop = (title: string, time?: string) => {
    saveCustomStopForDay(baseDay.id, title, time);
    setCustomStopsVersion((v) => v + 1);
  };

  const handleDeleteCustomStop = (stopId: string) => {
    deleteCustomStop(baseDay.id, stopId);
    setCustomStopsVersion((v) => v + 1);
  };

  const isStoryMode = activeTab === 'itinerary' && itineraryMode === 'story';

  return (
    <div className={`min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans ${isStoryMode ? 'overflow-hidden' : 'pb-24'} selection:bg-rose-500 selection:text-white`}>
      
      {/* Main Container - A Tutto Schermo in modalità Sfoglia, centrato e scrollabile nelle altre */}
      <main className={`w-full flex-1 ${isStoryMode ? 'p-0 max-w-full' : 'max-w-2xl mx-auto px-3 pt-2.5'}`}>
        
        {/* TAB 1: ITINERARIO IN MODALITÀ SFOGLIA A TUTTO SCHERMO */}
        {activeTab === 'itinerary' && itineraryMode === 'story' && (
          <StopStoryViewer
            key={selectedDayId}
            stops={currentDay.stops}
            currentDay={currentDay}
            allDays={ITINERARY_DAYS}
            selectedDayId={selectedDayId}
            onSelectDay={(id) => setSelectedDayId(id)}
            onPrevDay={handlePrevDay}
            onNextDay={handleNextDay}
            hasPrevDay={currentDayIndex > 0}
            hasNextDay={currentDayIndex < ITINERARY_DAYS.length - 1}
            completedStops={completedStops}
            onToggleComplete={handleToggleComplete}
            onSwitchToList={() => setItineraryMode('list')}
            onAddStop={() => setIsAddStopOpen(true)}
            onDeleteStop={handleDeleteCustomStop}
            initialIndex={firstPendingStopIndex}
          />
        )}

        {/* TAB 1: ITINERARIO IN MODALITÀ ELENCO COMPLETO */}
        {activeTab === 'itinerary' && itineraryMode === 'list' && (
          <div className="space-y-3">
            
            {/* Barra Switch Torna a Sfoglia a Tutto Schermo */}
            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700/80 shadow-lg flex items-center justify-between gap-2">
              <div>
                <h3 className="text-sm font-black text-white">Elenco Tappe</h3>
                <p className="text-[11px] text-slate-400">{currentDay.dayOfWeek} • {currentDay.stops.length} tappe previste</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsAddStopOpen(true)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-rose-300 border border-slate-700 active:scale-95 transition-all"
                  title="Aggiungi tappa al volo"
                >
                  <Plus className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setItineraryMode('story')}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 active:scale-95 text-white text-xs font-bold shadow-md transition-all border border-rose-400/40"
                >
                  <Layers className="w-4 h-4 text-white" />
                  <span>Sfoglia a Schermo Intero</span>
                </button>
              </div>
            </div>

            {/* Widget Meteo in Tempo Reale */}
            <WeatherWidget />

            {/* Selettore dei Giorni Orizzontale a Scorrimento Rapido */}
            <DaySelector
              selectedDayId={selectedDayId}
              onSelectDay={(id) => {
                setSelectedDayId(id);
              }}
              completedStops={completedStops}
            />

            {/* Lista delle Tappe */}
            <div className="space-y-3">
              {currentDay.stops.map((stop, idx) => {
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
                      onDeleteStop={handleDeleteCustomStop}
                    />

                    {distanceToNext !== null && (
                      <div className="flex items-center justify-center my-0.5">
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 font-medium shadow-sm">
                          <Footprints className="w-3 h-3 text-rose-400" />
                          <span>
                            {formatDistance(distanceToNext)} • {formatWalkingTime(distanceToNext)} a piedi
                          </span>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Navigazione Rapida Tra Giorni */}
            <div className="flex items-center justify-between gap-3 pt-2 border-t border-slate-800/80">
              <button
                onClick={handlePrevDay}
                disabled={currentDayIndex === 0}
                className={`flex-1 py-2.5 px-3 rounded-2xl border text-xs font-bold flex items-center justify-center gap-1 transition-all ${
                  currentDayIndex === 0
                    ? 'opacity-30 border-slate-800 text-slate-600 cursor-not-allowed'
                    : 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800 active:scale-98'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Giorno Prima</span>
              </button>

              <button
                onClick={handleNextDay}
                disabled={currentDayIndex === ITINERARY_DAYS.length - 1}
                className={`flex-1 py-2.5 px-3 rounded-2xl border text-xs font-bold flex items-center justify-center gap-1 transition-all ${
                  currentDayIndex === ITINERARY_DAYS.length - 1
                    ? 'opacity-30 border-slate-800 text-slate-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-rose-600/30 to-amber-600/30 border-rose-500/40 text-amber-200 hover:from-rose-600/40 active:scale-98'
                }`}
              >
                <span>Giorno Dopo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* TAB 2: MAPPA & DINTORNI (CON RICERCA DINAMICA LIVE SU GOOGLE MAPS) */}
        {activeTab === 'map' && (
          <DayMap 
            initialDayId={selectedDayId} 
          />
        )}

        {/* TAB 3: TRANSIT NAVIGATOR (CITYMAPPER & METRO & SOS HOTEL) */}
        {activeTab === 'transit' && (
          <TransitNavigator />
        )}

        {/* TAB 4: NOTE PER NOI (TACCUINO PERSONALE & TRUCCHI SALVA-BUDGET) */}
        {activeTab === 'notes' && (
          <NotesView />
        )}

      </main>

      {/* Floating Bottom Navigation Tab Bar (4 TAB PERFETTE E SPAZIOSE) */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#0b0f19]/95 backdrop-blur-xl border-t border-slate-800/80 px-3 pt-2 pb-5">
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
            <Calendar className="w-5 h-5 mb-0.5" />
            <span className="text-[11px] font-bold">Tappe</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('map');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all ${
              activeTab === 'map'
                ? 'text-purple-400 bg-purple-500/10 font-bold scale-102'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Map className="w-5 h-5 mb-0.5" />
            <span className="text-[11px] font-bold">Mappa</span>
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
            <Train className="w-5 h-5 mb-0.5" />
            <span className="text-[11px] font-bold">Metro</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('notes');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all ${
              activeTab === 'notes'
                ? 'text-amber-400 bg-amber-500/10 font-bold scale-102'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookHeart className="w-5 h-5 mb-0.5" />
            <span className="text-[11px] font-bold">Note</span>
          </button>

        </div>
      </nav>

      {/* Modal Aggiungi Tappa al Volo */}
      <AddStopModal
        isOpen={isAddStopOpen}
        onClose={() => setIsAddStopOpen(false)}
        onAddStop={handleAddQuickStop}
      />

    </div>
  );
};

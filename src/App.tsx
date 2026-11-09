import React, { useState, useEffect } from 'react';
import { ITINERARY_DAYS } from './data/itineraryData';
import { Navbar } from './components/Navbar';
import { DaySelector } from './components/DaySelector';
import { StopCard } from './components/StopCard';
import { NearbyRadar } from './components/NearbyRadar';
import { TransitNavigator } from './components/TransitNavigator';
import { UtilitiesView } from './components/UtilitiesView';
import { MetroAssistantModal } from './components/MetroAssistantModal';
import { RainPlanModal } from './components/RainPlanModal';
import { Under26Modal } from './components/Under26Modal';
import { NotesModal } from './components/NotesModal';
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
  MapPin
} from 'lucide-react';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'radar' | 'transit' | 'utilities'>('itinerary');
  const [selectedDayId, setSelectedDayId] = useState<string>('day-1');
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
        text: 'Il nostro itinerario completo di Parigi con Citymapper e radar dintorni!',
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
          <div className="space-y-4">
            
            {/* Selettore dei Giorni a scorrimento */}
            <div>
              <div className="flex items-center justify-between px-1 mb-1.5 text-xs text-slate-400">
                <span className="font-semibold uppercase tracking-wider text-[11px] text-slate-300">
                  Scegli il Giorno
                </span>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1 text-[11px] text-rose-400 hover:text-rose-300 transition-colors"
                >
                  <Share2 className="w-3 h-3" />
                  <span>Condividi</span>
                </button>
              </div>
              <DaySelector
                selectedDayId={selectedDayId}
                onSelectDay={(id) => {
                  setSelectedDayId(id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                completedStops={completedStops}
              />
            </div>

            {/* Day Header Card */}
            <div className={`p-4 sm:p-5 rounded-3xl bg-gradient-to-br ${currentDay.colorTheme} border border-slate-800/80 shadow-xl relative overflow-hidden backdrop-blur-sm`}>
              <div className="flex items-center justify-between mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white border border-white/20 backdrop-blur-md">
                  {currentDay.dateStr}
                </span>
                <span className="text-xs font-semibold text-amber-300 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  {currentDay.badge}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-white leading-tight mb-1">
                {currentDay.title}
              </h2>
              <p className="text-xs sm:text-sm font-medium text-rose-200/90 mb-3 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400/40 shrink-0" />
                {currentDay.tagline}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-3 rounded-2xl border border-white/5">
                {currentDay.summary}
              </p>
            </div>

            {/* Timeline delle Tappe */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Tappe del Giorno ({currentDay.stops.length})
                </h3>
                <span className="text-[11px] text-slate-400">
                  Tocca le spunte man mano che visitate ✨
                </span>
              </div>

              {currentDay.stops.map((stop) => (
                <StopCard
                  key={stop.id}
                  stop={stop}
                  isCompleted={!!completedStops[stop.id]}
                  onToggleComplete={handleToggleComplete}
                />
              ))}
            </div>

            {/* Bottom Navigation Tra Giorni */}
            <div className="mt-8 flex items-center justify-between gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={handlePrevDay}
                disabled={currentDayIndex === 0}
                className={`flex-1 py-3 px-4 rounded-2xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  currentDayIndex === 0
                    ? 'opacity-40 border-slate-800 text-slate-600 cursor-not-allowed'
                    : 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800 active:scale-98'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Giorno Precedente</span>
              </button>

              <button
                onClick={handleNextDay}
                disabled={currentDayIndex === ITINERARY_DAYS.length - 1}
                className={`flex-1 py-3 px-4 rounded-2xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  currentDayIndex === ITINERARY_DAYS.length - 1
                    ? 'opacity-40 border-slate-800 text-slate-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-rose-600/30 to-amber-600/30 border-rose-500/40 text-amber-200 hover:from-rose-600/40 hover:to-amber-600/40 active:scale-98'
                }`}
              >
                <span>Giorno Successivo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* TAB 2: RADAR NEI DINTORNI (GPS) */}
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

        {/* PWA Home Screen Helper Footer Banner */}
        <div className="mt-8 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-200">Come averla come vera app sul telefono a Parigi:</strong>
            <p className="mt-0.5 leading-relaxed">
              Su <strong>iPhone</strong>: tocca Condividi su Safari $\rightarrow$ <em>"Aggiungi a schermata Home"</em>. Su <strong>Android</strong>: tocca i 3 puntini su Chrome $\rightarrow$ <em>"Installa app"</em>. Si apre istantanea a schermo intero come un'app nativa!
            </p>
          </div>
        </div>

      </main>

      {/* Floating Bottom Navigation Tab Bar (Stile iOS/Android nativo) */}
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
            <span className="text-[11px]">Dintorni GPS</span>
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
            <span className="text-[11px]">Guida & Info</span>
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

import React, { useState, useEffect } from 'react';
import { ITINERARY_DAYS } from './data/itineraryData';
import { Navbar } from './components/Navbar';
import { DaySelector } from './components/DaySelector';
import { StopCard } from './components/StopCard';
import { MetroAssistantModal } from './components/MetroAssistantModal';
import { RainPlanModal } from './components/RainPlanModal';
import { Under26Modal } from './components/Under26Modal';
import { NotesModal } from './components/NotesModal';
import { ChevronLeft, ChevronRight, Compass, Sparkles, Heart, Share2, Info } from 'lucide-react';

export const App: React.FC = () => {
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

  // Salvataggio su localStorage
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

  // Conteggio totale tappe
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

  // Funzione di condivisione link rapido
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Parigi per Due ❤️ Nostro Itinerario',
        text: 'Il nostro itinerario completo di Parigi con Citymapper e mappe!',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiato negli appunti! Invialo su WhatsApp alla tua ragazza ❤️');
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans pb-28">
      
      {/* Top Navbar */}
      <Navbar
        onOpenMetro={() => setIsMetroOpen(true)}
        onOpenRain={() => setIsRainOpen(true)}
        onOpenUnder26={() => setIsUnder26Open(true)}
        onOpenNotes={() => setIsNotesOpen(true)}
        completedCount={completedCount}
        totalCount={totalStopsCount}
      />

      {/* Main Container */}
      <main className="max-w-2xl mx-auto w-full px-4 pt-3 flex-1">
        
        {/* Selettore dei Giorni a scorrimento */}
        <div className="mb-4">
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
        <div className={`p-4 sm:p-5 rounded-3xl bg-gradient-to-br ${currentDay.colorTheme} border border-slate-800/80 mb-5 shadow-xl relative overflow-hidden backdrop-blur-sm`}>
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

        {/* PWA Home Screen Helper Footer Banner */}
        <div className="mt-8 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-200">Come averla come vera app sul telefono:</strong>
            <p className="mt-0.5 leading-relaxed">
              Su <strong>iPhone</strong> tocca il tasto Condividi di Safari $\rightarrow$ <em>"Aggiungi a schermata Home"</em>. Su <strong>Android</strong> tocca i 3 puntini di Chrome $\rightarrow$ <em>"Installa app"</em>. Si aprirà a schermo intero senza barre del browser!
            </p>
          </div>
        </div>

      </main>

      {/* Floating Bottom Bar: Quick Metro Citymapper + Progress */}
      <div className="fixed bottom-3 left-4 right-4 max-w-md mx-auto z-30">
        <div className="p-2.5 rounded-2xl bg-[#0f1422]/95 backdrop-blur-lg border border-slate-700/80 shadow-2xl flex items-center justify-between gap-3">
          
          <button
            onClick={() => setIsMetroOpen(true)}
            className="flex-1 py-2 px-3 rounded-xl bg-[#288330] hover:bg-[#288330]/90 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-950/40 active:scale-95 transition-all"
          >
            <Compass className="w-4 h-4" />
            <span>Assistente Metro & Bus</span>
          </button>

          <button
            onClick={() => setIsNotesOpen(true)}
            className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 text-xs font-semibold flex items-center gap-1.5 active:scale-95 transition-all border border-slate-700"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Consigli</span>
          </button>

        </div>
      </div>

      {/* Modals */}
      <MetroAssistantModal isOpen={isMetroOpen} onClose={() => setIsMetroOpen(false)} />
      <RainPlanModal isOpen={isRainOpen} onClose={() => setIsRainOpen(false)} />
      <Under26Modal isOpen={isUnder26Open} onClose={() => setIsUnder26Open(false)} />
      <NotesModal isOpen={isNotesOpen} onClose={() => setIsNotesOpen(false)} />

    </div>
  );
};

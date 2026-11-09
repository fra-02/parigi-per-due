import React, { useState, useRef } from 'react';
import { Stop, getCitymapperUrl } from '../data/itineraryData';
import { handleImageError } from '../utils/images';
import confetti from 'canvas-confetti';
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Heart, 
  CheckCircle2, 
  Circle, 
  Navigation, 
  Compass, 
  Sparkles, 
  Ticket, 
  AlertCircle, 
  ExternalLink,
  MapPin,
  List,
  Touchpad
} from 'lucide-react';

interface StopStoryViewerProps {
  stops: Stop[];
  completedStops: Record<string, boolean>;
  onToggleComplete: (id: string) => void;
  onSwitchToList: () => void;
}

export const StopStoryViewer: React.FC<StopStoryViewerProps> = ({
  stops,
  completedStops,
  onToggleComplete,
  onSwitchToList
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  
  // Touch swipe handling
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const currentStop = stops[currentIndex] || stops[0];
  const isCompleted = !!completedStops[currentStop.id];

  const citymapperUrl = getCitymapperUrl(
    currentStop.coordinates.lat,
    currentStop.coordinates.lng,
    currentStop.title,
    currentStop.address
  );
  const gmapsWalkingUrl = `https://www.google.com/maps/dir/?api=1&destination=${currentStop.coordinates.lat},${currentStop.coordinates.lng}&travelmode=walking`;

  const handleNext = () => {
    if (currentIndex < stops.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsExpanded(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setIsExpanded(false);
    }
  };

  // Touch Swipe Gesture per smartphone
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const deltaY = e.changedTouches[0].clientY - touchStartYRef.current;

    // Se lo swipe orizzontale è prevalente e supera 40 pixel
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        handleNext(); // Swipe a sinistra -> Prossima tappa
      } else {
        handlePrev(); // Swipe a destra -> Tappa precedente
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  const handleCheckboxClick = () => {
    if (!isCompleted) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#f43f5e', '#fb7185', '#fbbf24', '#38bdf8']
      });
    }
    onToggleComplete(currentStop.id);
  };

  return (
    <div 
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl flex flex-col h-[520px] sm:h-[600px] select-none"
    >
      
      {/* SFONDO FOTOGRAFICO A TUTTO SCHERMO */}
      <img
        src={currentStop.image}
        alt={currentStop.title}
        onError={handleImageError}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
          isCompleted ? 'grayscale contrast-75' : ''
        }`}
      />

      {/* GRADIENTE SCURO PROGRESSIVO DAL BASSO VERSO L'ALTO */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/80 to-black/40 pointer-events-none" />

      {/* 1. TOP BARS STILE INSTAGRAM STORIES */}
      <div className="relative z-20 p-3 pt-3 flex items-center justify-between gap-3">
        <div className="flex-1 flex items-center gap-1.5">
          {stops.map((s, idx) => {
            const isDone = completedStops[s.id];
            const isCurrent = idx === currentIndex;
            return (
              <div
                key={s.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsExpanded(false);
                }}
                className="h-1.5 flex-1 rounded-full cursor-pointer transition-all duration-300 overflow-hidden bg-white/20"
              >
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    isCurrent
                      ? 'bg-gradient-to-r from-rose-400 to-amber-300 w-full'
                      : isDone
                      ? 'bg-emerald-400 w-full'
                      : idx < currentIndex
                      ? 'bg-white/60 w-full'
                      : 'w-0'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Tasto switch rapido a elenco */}
        <button
          onClick={onSwitchToList}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-xs font-bold border border-white/20 shadow-lg active:scale-95 transition-all"
        >
          <List className="w-3.5 h-3.5" />
          <span>Elenco</span>
        </button>
      </div>

      {/* 2. AREA TAP LATERALE (Tap a destra per andare avanti, a sinistra per tornare indietro) */}
      <div 
        onClick={handlePrev}
        className="absolute top-16 left-0 bottom-44 w-1/4 z-10 cursor-pointer"
        title="Tappa precedente"
      />
      <div 
        onClick={handleNext}
        className="absolute top-16 right-0 bottom-44 w-1/4 z-10 cursor-pointer"
        title="Tappa successiva"
      />

      {/* 3. CONTENUTO CENTRALE E INFERIORE */}
      <div className="relative z-20 mt-auto p-4 sm:p-5 space-y-2.5">
        
        {/* Badge Numero Tappa & Orario & Spunta Fatto */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-black bg-rose-500 text-white shadow-lg border border-white/20">
              Tappa {currentIndex + 1} di {stops.length}
            </span>

            {currentStop.time && (
              <span className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold backdrop-blur-md shadow ${
                currentStop.isFixedTime
                  ? 'bg-rose-500/90 text-white border border-rose-300/40 animate-pulse'
                  : 'bg-black/60 text-white border border-white/20'
              }`}>
                <Clock className="w-3.5 h-3.5 text-amber-300" />
                <span>{currentStop.time}</span>
                {currentStop.isFixedTime && <span className="text-[9px] uppercase tracking-wider ml-0.5">• FISSO</span>}
              </span>
            )}
          </div>

          <button
            onClick={handleCheckboxClick}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md transition-all active:scale-90 shadow-lg ${
              isCompleted
                ? 'bg-emerald-500 text-slate-950 font-extrabold'
                : 'bg-black/70 text-white border border-white/30'
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Fatto!</span>
              </>
            ) : (
              <>
                <Circle className="w-3.5 h-3.5 text-slate-400" />
                <span>Spunta</span>
              </>
            )}
          </button>
        </div>

        {/* Titolo e Sottotitolo */}
        <div>
          <h3 className={`text-xl sm:text-2xl font-black text-white leading-tight ${isCompleted ? 'line-through text-slate-400' : ''}`}>
            {currentStop.title}
          </h3>
          {currentStop.subtitle && (
            <p className="text-xs font-semibold text-amber-300 flex items-center gap-1 mt-0.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{currentStop.subtitle}</span>
            </p>
          )}
        </div>

        {/* Descrizione Breve */}
        <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 leading-relaxed">
          {currentStop.description}
        </p>

        {/* Momento Romantico */}
        {currentStop.romanticTip && (
          <div className="p-2.5 rounded-2xl bg-rose-950/40 border border-rose-500/30 text-xs text-rose-200 flex items-start gap-2 backdrop-blur-sm">
            <Heart className="w-4 h-4 text-rose-400 shrink-0 mt-0.5 fill-rose-500/30" />
            <div>
              <span className="font-bold text-rose-300">Momento per voi: </span>
              {currentStop.romanticTip}
            </div>
          </div>
        )}

        {/* Dettagli Espandibili (Biglietti, sconti under 26) */}
        {isExpanded && (
          <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-700/80 space-y-2 text-xs animate-fade-in">
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentStop.description}
            </p>
            {currentStop.under26Info && (
              <div className="text-emerald-300 flex items-start gap-1.5 font-medium">
                <Ticket className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Under 26 UE:</strong> {currentStop.under26Info}</span>
              </div>
            )}
            {currentStop.bookingUrl && (
              <a
                href={currentStop.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold flex items-center justify-center gap-1"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{currentStop.bookingLabel || 'Prenota / Info Ufficiali'}</span>
              </a>
            )}
            <div className="text-[11px] text-slate-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-500" />
              <span>{currentStop.address}</span>
            </div>
          </div>
        )}

        {/* PULSANTI DI NAVIGAZIONE A PIEDI & METRO */}
        <div className="pt-1 flex items-center gap-2">
          <a
            href={gmapsWalkingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-3 rounded-2xl bg-slate-800 hover:bg-slate-750 active:scale-95 text-white border border-slate-600 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-lg"
          >
            <Navigation className="w-4 h-4 text-sky-400" />
            <span>🚶 A piedi (Maps)</span>
          </a>

          <a
            href={citymapperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-3 rounded-2xl bg-[#288330] hover:bg-[#288330]/90 active:scale-95 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-lg"
          >
            <Compass className="w-4 h-4 text-white" />
            <span>🚇 Metro (Citymapper)</span>
          </a>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2.5 rounded-2xl bg-slate-800 text-slate-300 border border-slate-700 text-xs font-bold"
          >
            {isExpanded ? 'Riduci' : 'Info'}
          </button>
        </div>

        {/* INDICATORE TOUCH SWIPE CON IL DITO */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`flex items-center gap-0.5 font-bold ${
              currentIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'text-slate-300'
            }`}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Prec</span>
          </button>

          <span className="text-[10px] text-slate-400 flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-full">
            <span>👈 Scorri con il dito 👉</span>
          </span>

          <button
            onClick={handleNext}
            disabled={currentIndex === stops.length - 1}
            className={`flex items-center gap-0.5 font-bold ${
              currentIndex === stops.length - 1 ? 'opacity-20 cursor-not-allowed' : 'text-rose-400'
            }`}
          >
            <span>Succ</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
};

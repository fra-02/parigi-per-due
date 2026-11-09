import React, { useState } from 'react';
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
  List
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
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
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
    <div className="relative w-full rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl flex flex-col min-h-[520px] sm:min-h-[580px]">
      
      {/* 1. TOP BARS STILE INSTAGRAM STORIES */}
      <div className="absolute top-3 left-3 right-3 z-30 flex items-center gap-1.5">
        {stops.map((s, idx) => {
          const isDone = completedStops[s.id];
          const isCurrent = idx === currentIndex;
          return (
            <div
              key={s.id}
              onClick={() => setCurrentIndex(idx)}
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

      {/* 2. BOTTONE SWITCH A ELENCO IN ALTO A DESTRA */}
      <div className="absolute top-7 right-3.5 z-30 flex items-center gap-2">
        <button
          onClick={onSwitchToList}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-xs font-bold border border-white/20 shadow-lg active:scale-95 transition-all"
        >
          <List className="w-3.5 h-3.5" />
          <span>Vedi Elenco</span>
        </button>
      </div>

      {/* 3. FOTO GIGANTE DELLA TAPPA (Cover a tutta altezza) */}
      <div className="relative w-full h-72 sm:h-80 overflow-hidden bg-slate-900">
        <img
          src={currentStop.image}
          alt={currentStop.title}
          onError={handleImageError}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isCompleted ? 'grayscale contrast-75' : ''
          }`}
        />

        {/* Gradiente nero cinematografico */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/30" />

        {/* Badge Tappa & Orario sovrimpressi */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-end justify-between">
          <div className="space-y-1">
            <span className="px-2.5 py-1 rounded-full text-xs font-black bg-rose-500 text-white shadow-lg border border-white/20">
              Tappa {currentIndex + 1} di {stops.length}
            </span>

            {currentStop.time && (
              <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-black/70 text-white border border-white/20 backdrop-blur-md w-fit">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{currentStop.time}</span>
                {currentStop.isFixedTime && (
                  <span className="text-[10px] text-rose-400 font-extrabold ml-0.5">• FISSO</span>
                )}
              </div>
            )}
          </div>

          {/* Pulsante Spunta Rapida */}
          <button
            onClick={handleCheckboxClick}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold backdrop-blur-md transition-all active:scale-95 shadow-xl ${
              isCompleted
                ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/40'
                : 'bg-black/70 text-white border border-white/30 hover:bg-black/90'
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>Completata!</span>
              </>
            ) : (
              <>
                <Circle className="w-4 h-4 text-slate-400" />
                <span>Segna come Fatta</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 4. CONTENUTO DETTAGLIATO DELLA TAPPA */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        
        <div>
          <h3 className={`text-xl font-black leading-tight ${isCompleted ? 'text-slate-400 line-through' : 'text-white'}`}>
            {currentStop.title}
          </h3>
          {currentStop.subtitle && (
            <p className="text-xs font-semibold text-amber-300 flex items-center gap-1 mt-0.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{currentStop.subtitle}</span>
            </p>
          )}

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2.5">
            {currentStop.description}
          </p>

          {/* Momento Romantico per la Coppia */}
          {currentStop.romanticTip && (
            <div className="p-3 rounded-2xl bg-rose-950/30 border border-rose-500/25 text-xs text-rose-200 flex items-start gap-2 mt-3">
              <Heart className="w-4 h-4 text-rose-400 shrink-0 mt-0.5 fill-rose-500/30" />
              <div>
                <span className="font-bold text-rose-300">Momento speciale per voi: </span>
                {currentStop.romanticTip}
              </div>
            </div>
          )}

          {/* Under 26 Gratuita */}
          {currentStop.under26Info && (
            <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-200 flex items-start gap-2 mt-2">
              <Ticket className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-emerald-300">Under 26 UE: </span>
                {currentStop.under26Info}
              </div>
            </div>
          )}

          {/* Alert */}
          {currentStop.alertNote && (
            <div className="p-2 rounded-xl bg-amber-950/30 border border-amber-500/20 text-xs text-amber-200 flex items-start gap-2 mt-2">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{currentStop.alertNote}</span>
            </div>
          )}

          {/* Bottone Prenotazione Ufficiale */}
          {currentStop.bookingUrl && (
            <a
              href={currentStop.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-2.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500/20 to-rose-500/20 hover:from-amber-500/30 text-amber-200 border border-amber-500/30 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{currentStop.bookingLabel || 'Prenota / Info Ufficiali'}</span>
            </a>
          )}
        </div>

        {/* Indirizzo e metro */}
        <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1 border-t border-slate-800">
          <span className="flex items-center gap-1 truncate max-w-[200px]">
            <MapPin className="w-3 h-3 text-slate-500" />
            {currentStop.address}
          </span>
          {currentStop.metroStop && (
            <span className="bg-slate-900 px-2 py-0.5 rounded text-slate-300 font-medium">
              🚇 {currentStop.metroStop}
            </span>
          )}
        </div>

        {/* 5. NAVIGAZIONE RAPIDA: PULSANTI MAPS & CITYMAPPER */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <a
            href={gmapsWalkingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 rounded-2xl bg-slate-800 hover:bg-slate-750 active:scale-95 text-white border border-slate-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md"
          >
            <Navigation className="w-4 h-4 text-sky-400" />
            <span>🚶 A piedi (Maps)</span>
          </a>

          <a
            href={citymapperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 rounded-2xl bg-[#288330]/25 hover:bg-[#288330]/35 active:scale-95 text-[#4ade80] border border-[#288330]/40 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md"
          >
            <Compass className="w-4 h-4 text-[#4ade80]" />
            <span>🚇 Metro (Citymapper)</span>
          </a>
        </div>

        {/* 6. PULSANTI AVANTI / INDIETRO SFOGLIA TAPPA */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-xl transition-all ${
              currentIndex === 0
                ? 'opacity-30 text-slate-600 cursor-not-allowed'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800 active:scale-95'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Tappa Precedente</span>
          </button>

          <span className="text-[11px] text-slate-500 font-bold">
            {currentIndex + 1} / {stops.length}
          </span>

          <button
            onClick={handleNext}
            disabled={currentIndex === stops.length - 1}
            className={`flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-xl transition-all ${
              currentIndex === stops.length - 1
                ? 'opacity-30 text-slate-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-rose-600/30 to-amber-600/30 text-amber-200 border border-rose-500/40 hover:from-rose-600/40 active:scale-95'
            }`}
          >
            <span>Tappa Successiva</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};

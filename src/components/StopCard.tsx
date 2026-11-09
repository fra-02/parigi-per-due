import React, { useState } from 'react';
import { 
  Navigation, 
  ExternalLink, 
  Clock, 
  Heart, 
  CheckCircle2, 
  Circle, 
  AlertCircle, 
  Ticket, 
  Sparkles,
  Compass,
  ChevronDown,
  ChevronUp,
  MapPin
} from 'lucide-react';
import { Stop, getCitymapperUrl } from '../data/itineraryData';
import { handleImageError } from '../utils/images';
import confetti from 'canvas-confetti';

interface StopCardProps {
  stop: Stop;
  index: number;
  isCompleted: boolean;
  onToggleComplete: (id: string) => void;
}

export const StopCard: React.FC<StopCardProps> = ({ stop, index, isCompleted, onToggleComplete }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const citymapperUrl = getCitymapperUrl(stop.coordinates.lat, stop.coordinates.lng, stop.title, stop.address);
  const gmapsWalkingUrl = `https://www.google.com/maps/dir/?api=1&destination=${stop.coordinates.lat},${stop.coordinates.lng}&travelmode=walking`;

  const handleCheckboxClick = () => {
    if (!isCompleted) {
      confetti({
        particleCount: 35,
        spread: 55,
        origin: { y: 0.8 },
        colors: ['#f43f5e', '#fb7185', '#fbbf24', '#38bdf8']
      });
    }
    onToggleComplete(stop.id);
  };

  const getCategoryBadge = () => {
    switch (stop.category) {
      case 'disney':
        return <span className="text-[10px] font-bold text-white bg-purple-600/80 backdrop-blur-md px-2 py-0.5 rounded-full shadow">🏰 Disney</span>;
      case 'cruise':
        return <span className="text-[10px] font-bold text-white bg-cyan-600/80 backdrop-blur-md px-2 py-0.5 rounded-full shadow">⛵ Senna</span>;
      case 'museum':
        return <span className="text-[10px] font-bold text-white bg-amber-600/80 backdrop-blur-md px-2 py-0.5 rounded-full shadow">🏛️ Museo</span>;
      case 'monument':
        return <span className="text-[10px] font-bold text-white bg-blue-600/80 backdrop-blur-md px-2 py-0.5 rounded-full shadow">✨ Monumento</span>;
      case 'food':
        return <span className="text-[10px] font-bold text-white bg-rose-600/80 backdrop-blur-md px-2 py-0.5 rounded-full shadow">🥐 Food</span>;
      case 'shopping':
        return <span className="text-[10px] font-bold text-white bg-pink-600/80 backdrop-blur-md px-2 py-0.5 rounded-full shadow">🛍️ Luci</span>;
      case 'travel':
        return <span className="text-[10px] font-bold text-white bg-emerald-600/80 backdrop-blur-md px-2 py-0.5 rounded-full shadow">🚇 Metro</span>;
      default:
        return <span className="text-[10px] font-bold text-white bg-slate-700/80 backdrop-blur-md px-2 py-0.5 rounded-full shadow">🚶 Tappa</span>;
    }
  };

  const hasExtraDetails = !!(stop.romanticTip || stop.under26Info || stop.alertNote || stop.bookingUrl);

  return (
    <div className={`relative rounded-3xl transition-all duration-300 border overflow-hidden ${
      isCompleted 
        ? 'bg-slate-900/50 border-slate-800 opacity-65' 
        : 'bg-slate-900/90 border-slate-800/80 hover:border-slate-700 shadow-xl'
    }`}>
      
      {/* IMMAGINE MODERNA DELLA TAPPA (Cover fotografica stile Instagram/Airbnb) */}
      <div className="relative w-full h-36 sm:h-44 overflow-hidden bg-slate-950">
        <img
          src={stop.image}
          alt={stop.title}
          onError={handleImageError}
          className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${
            isCompleted ? 'grayscale contrast-75' : ''
          }`}
          loading="lazy"
        />

        {/* Gradiente nero dal basso per risaltare il testo */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-black/30 to-black/20" />

        {/* Badge Fluttuanti sopra la foto */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {/* Numero della Tappa */}
            <span className="w-6 h-6 rounded-full bg-rose-500 text-white text-xs font-black flex items-center justify-center shadow-lg border border-white/30">
              {index + 1}
            </span>

            {/* Orario */}
            {stop.time && (
              <span className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold backdrop-blur-md shadow ${
                stop.isFixedTime 
                  ? 'bg-rose-500/90 text-white border border-rose-300/40 animate-pulse' 
                  : 'bg-black/60 text-white border border-white/20'
              }`}>
                <Clock className="w-3 h-3" />
                <span>{stop.time}</span>
                {stop.isFixedTime && <span className="text-[9px] uppercase tracking-wider ml-0.5">• FISSO</span>}
              </span>
            )}
          </div>

          <div>
            {getCategoryBadge()}
          </div>
        </div>

        {/* Spunta "Fatto" sovrimpressa in basso a destra sulla foto */}
        <button
          onClick={handleCheckboxClick}
          className={`absolute bottom-2.5 right-2.5 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md transition-transform active:scale-90 shadow-lg ${
            isCompleted 
              ? 'bg-emerald-500 text-slate-950' 
              : 'bg-black/60 text-white border border-white/20 hover:bg-black/80'
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
              <span>Segna</span>
            </>
          )}
        </button>
      </div>

      {/* CONTENUTO CARD */}
      <div className="p-3.5 sm:p-4 space-y-2">
        
        {/* Titolo e Sottotitolo */}
        <div>
          <h4 className={`text-base sm:text-lg font-black leading-snug ${isCompleted ? 'text-slate-400 line-through' : 'text-white'}`}>
            {stop.title}
          </h4>
          {stop.subtitle && (
            <p className="text-xs font-semibold text-amber-300/90 flex items-center gap-1 mt-0.5">
              <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
              <span>{stop.subtitle}</span>
            </p>
          )}
        </div>

        {/* Descrizione rapida */}
        <p className="text-xs text-slate-300 leading-relaxed">
          {stop.description}
        </p>

        {/* Momento Romantico per voi due */}
        {stop.romanticTip && (
          <div className="p-2.5 rounded-2xl bg-rose-950/30 border border-rose-500/20 text-xs text-rose-200 flex items-start gap-2">
            <Heart className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5 fill-rose-500/30" />
            <div>
              <span className="font-bold text-rose-300">Momento per voi: </span>
              {stop.romanticTip}
            </div>
          </div>
        )}

        {/* Dettagli extra espandibili */}
        {isExpanded && (
          <div className="space-y-2 pt-2 border-t border-slate-800/80 animate-fade-in text-xs">
            {stop.under26Info && (
              <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-emerald-200 flex items-start gap-2">
                <Ticket className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-emerald-300">Under 26 UE: </span>
                  {stop.under26Info}
                </div>
              </div>
            )}

            {stop.alertNote && (
              <div className="p-2 rounded-xl bg-amber-950/30 border border-amber-500/20 text-amber-200 flex items-start gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{stop.alertNote}</span>
              </div>
            )}

            {stop.bookingUrl && (
              <a
                href={stop.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500/20 to-rose-500/20 hover:from-amber-500/30 hover:to-rose-500/30 text-amber-200 border border-amber-500/30 font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{stop.bookingLabel || 'Prenota / Info Ufficiali'}</span>
              </a>
            )}

            <div className="text-[11px] text-slate-400 flex items-center gap-1 pt-1">
              <MapPin className="w-3 h-3 text-slate-500" />
              <span>{stop.address}</span>
            </div>
          </div>
        )}

        {/* BARRA AZIONI NAVIGAZIONE (A piedi con Maps + Metro con Citymapper) */}
        <div className="pt-2 flex items-center gap-2">
          <a
            href={gmapsWalkingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-750 active:scale-95 text-white border border-slate-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
          >
            <Navigation className="w-3.5 h-3.5 text-sky-400" />
            <span>🚶 A piedi (Maps)</span>
          </a>

          <a
            href={citymapperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-3 rounded-xl bg-[#288330]/25 hover:bg-[#288330]/35 active:scale-95 text-[#4ade80] border border-[#288330]/40 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
          >
            <Compass className="w-3.5 h-3.5 text-[#4ade80]" />
            <span>🚇 Metro</span>
          </a>

          {hasExtraDetails && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 border border-slate-700/60 transition-colors"
              title={isExpanded ? 'Chiudi dettagli' : 'Mostra biglietti e sconti'}
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}
        </div>

      </div>

    </div>
  );
};

import React, { useState } from 'react';
import { 
  MapPin, 
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
  ChevronUp
} from 'lucide-react';
import { Stop, getCitymapperUrl, getGoogleMapsUrl } from '../data/itineraryData';
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
  // Google Maps con modalità a piedi specifica per evitare confusioni
  const gmapsWalkingUrl = `https://www.google.com/maps/dir/?api=1&destination=${stop.coordinates.lat},${stop.coordinates.lng}&travelmode=walking`;

  const handleCheckboxClick = () => {
    if (!isCompleted) {
      confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#f43f5e', '#fb7185', '#fbbf24', '#38bdf8']
      });
    }
    onToggleComplete(stop.id);
  };

  const getCategoryBadge = () => {
    switch (stop.category) {
      case 'disney':
        return <span className="text-[10px] font-semibold text-purple-300 bg-purple-500/20 px-1.5 py-0.5 rounded">🏰 Disney</span>;
      case 'cruise':
        return <span className="text-[10px] font-semibold text-cyan-300 bg-cyan-500/20 px-1.5 py-0.5 rounded">⛵ Crociera</span>;
      case 'museum':
        return <span className="text-[10px] font-semibold text-amber-300 bg-amber-500/20 px-1.5 py-0.5 rounded">🏛️ Museo</span>;
      case 'monument':
        return <span className="text-[10px] font-semibold text-blue-300 bg-blue-500/20 px-1.5 py-0.5 rounded">✨ Monumento</span>;
      case 'food':
        return <span className="text-[10px] font-semibold text-rose-300 bg-rose-500/20 px-1.5 py-0.5 rounded">🥐 Cibo</span>;
      case 'shopping':
        return <span className="text-[10px] font-semibold text-pink-300 bg-pink-500/20 px-1.5 py-0.5 rounded">🛍️ Luci</span>;
      case 'travel':
        return <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-500/20 px-1.5 py-0.5 rounded">🚇 Metro</span>;
      default:
        return <span className="text-[10px] font-semibold text-indigo-300 bg-indigo-500/20 px-1.5 py-0.5 rounded">🚶 Camminata</span>;
    }
  };

  const hasExtraDetails = !!(stop.romanticTip || stop.under26Info || stop.alertNote || stop.bookingUrl);

  return (
    <div className={`relative rounded-2xl transition-all duration-200 border ${
      isCompleted 
        ? 'bg-slate-900/40 border-slate-800/60 opacity-60' 
        : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 shadow-md'
    } p-3.5 backdrop-blur-md`}>
      
      {/* Riga Superiore: Numero tappa, orario, badge e completamento */}
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <div className="flex items-center gap-1.5 flex-wrap">
          {/* Badge Numero */}
          <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[11px] font-black flex items-center justify-center">
            {index + 1}
          </span>

          {stop.time && (
            <div className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold ${
              stop.isFixedTime 
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse' 
                : 'bg-slate-800 text-slate-300'
            }`}>
              <Clock className="w-3 h-3" />
              <span>{stop.time}</span>
              {stop.isFixedTime && <span className="text-[9px] text-rose-400 font-extrabold uppercase ml-0.5">• FISSO</span>}
            </div>
          )}

          {getCategoryBadge()}
        </div>

        {/* Tasto Spunta Rapido */}
        <button
          onClick={handleCheckboxClick}
          className={`flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-semibold transition-all ${
            isCompleted 
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
              : 'text-slate-400 hover:text-white bg-slate-800/80 border border-slate-700/60 active:scale-95'
          }`}
        >
          {isCompleted ? (
            <>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Fatto</span>
            </>
          ) : (
            <>
              <Circle className="w-3.5 h-3.5 text-slate-500" />
              <span>Spunta</span>
            </>
          )}
        </button>
      </div>

      {/* Titolo Principale Chiaro */}
      <div className="my-1">
        <h4 className={`text-base font-bold leading-snug ${isCompleted ? 'text-slate-400 line-through' : 'text-white'}`}>
          {stop.title}
        </h4>
        {stop.subtitle && (
          <p className="text-[11px] text-amber-300/90 font-medium flex items-center gap-1 mt-0.5">
            <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
            <span>{stop.subtitle}</span>
          </p>
        )}
      </div>

      {/* Descrizione Breve e Pulita */}
      <p className="text-xs text-slate-300 line-clamp-2 my-1 leading-relaxed">
        {stop.description}
      </p>

      {/* Dettagli Espandibili (Fisarmonica per non appesantire la vista) */}
      {isExpanded && (
        <div className="space-y-2 pt-2 mt-2 border-t border-slate-800/80 animate-fade-in">
          
          {/* Descrizione completa non tagliata */}
          <p className="text-xs text-slate-300 leading-relaxed">
            {stop.description}
          </p>

          {/* Consiglio Romantico */}
          {stop.romanticTip && (
            <div className="p-2 rounded-xl bg-rose-950/30 border border-rose-500/20 flex items-start gap-1.5 text-xs text-rose-200">
              <Heart className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5 fill-rose-500/30" />
              <div>
                <span className="font-bold text-rose-300">Momento per voi: </span>
                {stop.romanticTip}
              </div>
            </div>
          )}

          {/* Under 26 Info */}
          {stop.under26Info && (
            <div className="p-2 rounded-xl bg-emerald-950/30 border border-emerald-500/20 flex items-start gap-1.5 text-xs text-emerald-200">
              <Ticket className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-emerald-300">Under 26 UE: </span>
                {stop.under26Info}
              </div>
            </div>
          )}

          {/* Avviso */}
          {stop.alertNote && (
            <div className="p-2 rounded-xl bg-amber-950/30 border border-amber-500/20 text-xs text-amber-200 flex items-start gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <span>{stop.alertNote}</span>
            </div>
          )}

          {/* Link Prenotazione Ufficiale */}
          {stop.bookingUrl && (
            <a
              href={stop.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{stop.bookingLabel || 'Prenota / Info Ufficiali'}</span>
            </a>
          )}
        </div>
      )}

      {/* Pulsanti di Azione Navigazione Rapida */}
      <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center gap-1.5">
        
        {/* Naviga a piedi con Google Maps */}
        <a
          href={gmapsWalkingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-1.5 px-2 rounded-xl bg-slate-800 hover:bg-slate-750 active:scale-95 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
        >
          <Navigation className="w-3.5 h-3.5 text-sky-400" />
          <span>🚶 A piedi (Maps)</span>
        </a>

        {/* Metro con Citymapper */}
        <a
          href={citymapperUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-1.5 px-2 rounded-xl bg-[#288330]/20 hover:bg-[#288330]/30 active:scale-95 text-[#4ade80] border border-[#288330]/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
        >
          <Compass className="w-3.5 h-3.5" />
          <span>🚇 Metro</span>
        </a>

        {/* Bottone Espandi / Riduci Dettagli */}
        {hasExtraDetails && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 border border-slate-700/60 transition-colors"
            title={isExpanded ? 'Riduci dettagli' : 'Mostra consigli e biglietti'}
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        )}
      </div>

    </div>
  );
};

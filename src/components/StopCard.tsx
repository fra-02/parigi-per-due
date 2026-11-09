import React from 'react';
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
  Compass
} from 'lucide-react';
import { Stop, getCitymapperUrl, getGoogleMapsUrl, getAppleMapsUrl } from '../data/itineraryData';
import confetti from 'canvas-confetti';

interface StopCardProps {
  stop: Stop;
  isCompleted: boolean;
  onToggleComplete: (id: string) => void;
}

export const StopCard: React.FC<StopCardProps> = ({ stop, isCompleted, onToggleComplete }) => {
  const citymapperUrl = getCitymapperUrl(stop.coordinates.lat, stop.coordinates.lng, stop.title, stop.address);
  const gmapsUrl = getGoogleMapsUrl(stop.coordinates.lat, stop.coordinates.lng, stop.title);
  const appleMapsUrl = getAppleMapsUrl(stop.coordinates.lat, stop.coordinates.lng, stop.title);

  const handleCheckboxClick = () => {
    if (!isCompleted) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#f43f5e', '#fb7185', '#fbbf24', '#38bdf8']
      });
    }
    onToggleComplete(stop.id);
  };

  const getCategoryBadge = () => {
    switch (stop.category) {
      case 'disney':
        return <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">🏰 Disney</span>;
      case 'cruise':
        return <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">⛵ Crociera Senna</span>;
      case 'museum':
        return <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">🏛️ Museo</span>;
      case 'monument':
        return <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">✨ Monumento</span>;
      case 'food':
        return <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30">🥐 Cibo & Café</span>;
      case 'shopping':
        return <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-pink-500/20 text-pink-300 border border-pink-500/30">🛍️ Magazzini & Luci</span>;
      case 'travel':
        return <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">🚇 Spostamento</span>;
      default:
        return <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">🚶 Passeggiata</span>;
    }
  };

  return (
    <div className={`relative rounded-2xl transition-all duration-300 border ${
      isCompleted 
        ? 'bg-slate-900/40 border-slate-800 opacity-75' 
        : 'bg-slate-900/80 border-slate-800/80 hover:border-slate-700 shadow-lg'
    } p-4.5 backdrop-blur-md overflow-hidden group`}>
      
      {/* Decorative subtle gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500/60 via-amber-400/60 to-purple-500/60 opacity-60" />

      {/* Top Header: Time, Badges, Completion Button */}
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <div className="flex flex-wrap items-center gap-1.5">
          {stop.time && (
            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold ${
              stop.isFixedTime 
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse' 
                : 'bg-slate-800 text-slate-300 border border-slate-700/60'
            }`}>
              <Clock className="w-3.5 h-3.5" />
              <span>{stop.time}</span>
              {stop.isFixedTime && <span className="text-[10px] uppercase tracking-wider font-extrabold text-rose-400 ml-0.5">• FISSO</span>}
            </div>
          )}
          {getCategoryBadge()}
        </div>

        {/* Spunta "Fatto" */}
        <button
          onClick={handleCheckboxClick}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-medium transition-colors ${
            isCompleted 
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
              : 'bg-slate-800/90 text-slate-400 hover:text-slate-200 border border-slate-700/60 active:scale-95'
          }`}
          aria-label={isCompleted ? 'Segna come non fatto' : 'Segna come fatto'}
        >
          {isCompleted ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="font-semibold">Fatto!</span>
            </>
          ) : (
            <>
              <Circle className="w-4 h-4 text-slate-500" />
              <span>Da fare</span>
            </>
          )}
        </button>
      </div>

      {/* Titolo e Sottotitolo */}
      <h3 className={`text-lg font-bold leading-tight ${isCompleted ? 'text-slate-400 line-through' : 'text-white'}`}>
        {stop.title}
      </h3>
      {stop.subtitle && (
        <p className="text-xs font-medium text-amber-300/90 mt-0.5 mb-2 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-amber-400" />
          {stop.subtitle}
        </p>
      )}

      {/* Descrizione Principale */}
      <p className="text-sm text-slate-300 leading-relaxed my-2">
        {stop.description}
      </p>

      {/* Consiglio Romantico / Per Due */}
      {stop.romanticTip && (
        <div className="my-2.5 p-2.5 rounded-xl bg-gradient-to-r from-rose-950/40 to-slate-900 border border-rose-500/20 flex items-start gap-2 text-xs text-rose-200">
          <Heart className="w-4 h-4 text-rose-400 shrink-0 mt-0.5 fill-rose-500/30" />
          <div>
            <span className="font-bold text-rose-300">Momento per voi: </span>
            {stop.romanticTip}
          </div>
        </div>
      )}

      {/* Info Gratuità / Documenti Under 26 UE */}
      {stop.under26Info && (
        <div className="my-2 p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 flex items-start gap-2 text-xs text-emerald-200">
          <Ticket className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-emerald-300">Under 26 UE (22 e 24 anni): </span>
            {stop.under26Info}
          </div>
        </div>
      )}

      {/* Alert / Avviso speciale (es. Mur des Je t'aime chiuso) */}
      {stop.alertNote && (
        <div className="my-2 p-2 rounded-xl bg-amber-950/30 border border-amber-500/20 flex items-start gap-2 text-xs text-amber-200">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>{stop.alertNote}</span>
        </div>
      )}

      {/* Metro Stop & Indirizzo */}
      <div className="mt-2.5 pt-2.5 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
        <div className="flex items-center gap-1 text-slate-400">
          <MapPin className="w-3.5 h-3.5 text-slate-500" />
          <span className="truncate max-w-[220px]">{stop.address}</span>
        </div>
        {stop.metroStop && (
          <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-800 text-[11px] font-medium text-slate-300 border border-slate-700/50">
            🚇 {stop.metroStop}
          </span>
        )}
      </div>

      {/* Pulsanti di Azione Rapida: CITYMAPPER + GOOGLE MAPS + PRENOTAZIONI */}
      <div className="mt-3 pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
        
        {/* Pulsante CITYMAPPER (In primo piano!) */}
        <a
          href={citymapperUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#288330]/20 hover:bg-[#288330]/30 active:bg-[#288330]/40 text-[#4ade80] border border-[#288330]/40 text-xs font-semibold transition-transform active:scale-95 shadow-sm"
          title="Apri in Citymapper per metro, bus e coincidenze"
        >
          <Compass className="w-4 h-4 text-[#4ade80]" />
          <span>🚇 Metro con Citymapper</span>
        </a>

        {/* Pulsante Mappe (Google Maps) */}
        <a
          href={gmapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-750 active:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium transition-transform active:scale-95"
          title="Apri su Google Maps"
        >
          <Navigation className="w-3.5 h-3.5 text-sky-400" />
          <span>📍 Google Maps</span>
        </a>

        {/* Pulsante Prenotazione Ufficiale (se presente) */}
        {stop.bookingUrl && (
          <a
            href={stop.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:col-span-2 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r from-rose-600/30 to-amber-600/30 hover:from-rose-600/40 hover:to-amber-600/40 text-amber-200 border border-rose-500/40 text-xs font-bold transition-all shadow-sm active:scale-95"
          >
            <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            <span>{stop.bookingLabel || 'Apri Portale Ufficiale'}</span>
          </a>
        )}
      </div>

    </div>
  );
};

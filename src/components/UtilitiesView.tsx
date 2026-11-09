import React from 'react';
import { 
  Ticket, 
  CloudRain, 
  SlidersHorizontal, 
  Languages, 
  PhoneCall, 
  ShieldCheck, 
  Heart, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { PASSAGES_PIOGGIA, getCitymapperUrl, getGoogleMapsUrl } from '../data/itineraryData';

interface UtilitiesViewProps {
  onOpenUnder26: () => void;
  onOpenRain: () => void;
  onOpenNotes: () => void;
}

export const UtilitiesView: React.FC<UtilitiesViewProps> = ({
  onOpenUnder26,
  onOpenRain,
  onOpenNotes
}) => {
  const frenchPhrases = [
    { it: 'Un tavolo per due, per favore', fr: 'Une table pour deux, s\'il vous plaît', pr: 'Ün tabl pur dö, sil vu plè' },
    { it: 'Il conto, per favore', fr: 'L\'addition, s\'il vous plaît', pr: 'L-addisiòn, sil vu plè' },
    { it: 'Dov\'è la metro / la toilette?', fr: 'Où est le métro / les toilettes ?', pr: 'U è l-metrò / le tualèt?' },
    { it: 'Due caffè / Due croissant per favore', fr: 'Deux cafés / Deux croissants, s\'il vous plaît', pr: 'Dö cafè / Dö cruassàn, sil vu plè' },
    { it: 'Acqua del rubinetto gratuita al ristorante', fr: 'Une carafe d\'eau, s\'il vous plaît', pr: 'Ün caràf do, sil vu plè' },
    { it: 'Parla inglese o italiano?', fr: 'Parlez-vous anglais ou italien ?', pr: 'Parlé-vu anglé u italièn?' }
  ];

  return (
    <div className="space-y-4">
      
      {/* 3 Quick Cards: Under 26, Se Piove, Filosofia */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        
        <button
          onClick={onOpenUnder26}
          className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 hover:border-emerald-500/60 text-left transition-all active:scale-98 shadow-md"
        >
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-2">
            <Ticket className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-white text-xs sm:text-sm">Gratuità Under 26</h3>
          <p className="text-[11px] text-slate-400 mt-0.5">Louvre, Orsay, Sainte-Chapelle a 0€</p>
        </button>

        <button
          onClick={onOpenRain}
          className="p-3.5 rounded-2xl bg-gradient-to-br from-sky-950/40 via-slate-900 to-slate-900 border border-sky-500/30 hover:border-sky-500/60 text-left transition-all active:scale-98 shadow-md"
        >
          <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center mb-2">
            <CloudRain className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-white text-xs sm:text-sm">Piano Pioggia</h3>
          <p className="text-[11px] text-slate-400 mt-0.5">Passages coperti & gallerie ottocentesche</p>
        </button>

        <button
          onClick={onOpenNotes}
          className="p-3.5 rounded-2xl bg-gradient-to-br from-purple-950/40 via-slate-900 to-slate-900 border border-purple-500/30 hover:border-purple-500/60 text-left transition-all active:scale-98 shadow-md"
        >
          <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center mb-2">
            <SlidersHorizontal className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-white text-xs sm:text-sm">Filosofia Viaggio</h3>
          <p className="text-[11px] text-slate-400 mt-0.5">Cosa abbiamo tolto e perché</p>
        </button>

      </div>

      {/* Frasario Utile per la Coppia */}
      <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
        <div className="flex items-center gap-2">
          <Languages className="w-4 h-4 text-rose-400" />
          <h3 className="font-bold text-white text-xs sm:text-sm">
            Frasario Furbo Francese (Pronuncia pronta)
          </h3>
        </div>

        <div className="space-y-2">
          {frenchPhrases.map((phrase, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-baseline justify-between gap-1 mb-0.5">
                <span className="text-xs font-semibold text-slate-200">{phrase.it}</span>
              </div>
              <p className="text-xs font-bold text-amber-300">"{phrase.fr}"</p>
              <p className="text-[11px] text-slate-400 italic">Si pronuncia: {phrase.pr}</p>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-emerald-300/90 bg-emerald-950/30 p-2 rounded-xl border border-emerald-500/20">
          💡 <strong>Trucco a Parigi:</strong> Al ristorante chiedete sempre <em>"Une carafe d'eau"</em> anziché l'acqua minerale in bottiglia: è l'ottima acqua di sorgente parigina, è obbligatoriamente <strong>gratuita per legge</strong> e vi fa risparmiare 6–8€ ogni volta!
        </p>
      </div>

      {/* Numeri d'Emergenza & Utilità */}
      <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2.5">
        <div className="flex items-center gap-2">
          <PhoneCall className="w-4 h-4 text-emerald-400" />
          <h3 className="font-bold text-white text-xs sm:text-sm">Numeri Utili a Parigi</h3>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-slate-400 text-[11px]">Numero Unico Emergenze</span>
            <p className="font-black text-rose-400 text-base">112</p>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-slate-400 text-[11px]">Pronto Soccorso Medico (SAMU)</span>
            <p className="font-black text-emerald-400 text-base">15</p>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-slate-400 text-[11px]">Polizia</span>
            <p className="font-black text-sky-400 text-base">17</p>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-slate-400 text-[11px]">Oggetti Smarriti Metro RATP</span>
            <p className="font-bold text-amber-300 text-xs">32 46 / ratp.fr</p>
          </div>
        </div>
      </div>

    </div>
  );
};

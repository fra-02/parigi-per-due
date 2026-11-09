import React, { useState, useEffect } from 'react';
import { Compass, CloudRain, Ticket, SlidersHorizontal, Heart, Clock } from 'lucide-react';

interface NavbarProps {
  onOpenMetro: () => void;
  onOpenRain: () => void;
  onOpenUnder26: () => void;
  onOpenNotes: () => void;
  completedCount: number;
  totalCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenMetro,
  onOpenRain,
  onOpenUnder26,
  onOpenNotes,
  completedCount,
  totalCount
}) => {
  const [parisTime, setParisTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit'
      };
      setParisTime(new Intl.DateTimeFormat('it-IT', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <header className="sticky top-0 z-40 bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800/80 px-4 pt-3 pb-2.5">
      <div className="max-w-2xl mx-auto">
        
        {/* Top Brand & Clock */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center shadow-md shadow-rose-950/30">
              <Heart className="w-4 h-4 text-white fill-white" />
            </div>
            <div>
              <h1 className="text-sm font-extrabold text-white flex items-center gap-1.5 leading-none">
                Parigi per Due
                <span className="text-[10px] font-semibold text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded-full border border-rose-500/20">
                  7-12 Dicembre
                </span>
              </h1>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Il vostro itinerario smart & romantico
              </p>
            </div>
          </div>

          {/* Orologio di Parigi */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Parigi: {parisTime || '18:00'}</span>
          </div>
        </div>

        {/* Quick Hub Navigation Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          
          {/* Pulsante Metro & Citymapper in primo piano */}
          <button
            onClick={onOpenMetro}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#288330]/20 hover:bg-[#288330]/30 active:scale-95 text-[#4ade80] border border-[#288330]/40 text-xs font-semibold transition-all whitespace-nowrap shadow-sm"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>🚇 Metro & Citymapper</span>
          </button>

          {/* Piano Pioggia */}
          <button
            onClick={onOpenRain}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 active:scale-95 text-sky-300 border border-slate-800 hover:border-sky-500/40 text-xs font-medium transition-all whitespace-nowrap"
          >
            <CloudRain className="w-3.5 h-3.5 text-sky-400" />
            <span>☔ Se Piove</span>
          </button>

          {/* Under 26 */}
          <button
            onClick={onOpenUnder26}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 active:scale-95 text-emerald-300 border border-slate-800 hover:border-emerald-500/40 text-xs font-medium transition-all whitespace-nowrap"
          >
            <Ticket className="w-3.5 h-3.5 text-emerald-400" />
            <span>🎫 Under 26 UE</span>
          </button>

          {/* Filosofia / Note */}
          <button
            onClick={onOpenNotes}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 active:scale-95 text-purple-300 border border-slate-800 hover:border-purple-500/40 text-xs font-medium transition-all whitespace-nowrap"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-purple-400" />
            <span>💡 Filosofia</span>
          </button>

        </div>

        {/* Progress Bar Viaggio */}
        <div className="mt-2 flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-rose-500 to-emerald-400 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-[10px] text-slate-400 font-medium">
            {completedCount}/{totalCount} tappe ({progressPercent}%)
          </span>
        </div>

      </div>
    </header>
  );
};

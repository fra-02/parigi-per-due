import React from 'react';
import { ITINERARY_DAYS } from '../data/itineraryData';
import { Sparkles } from 'lucide-react';

interface DaySelectorProps {
  selectedDayId: string;
  onSelectDay: (id: string) => void;
  completedStops: Record<string, boolean>;
}

export const DaySelector: React.FC<DaySelectorProps> = ({
  selectedDayId,
  onSelectDay,
  completedStops
}) => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-2 px-1">
      <div className="flex items-center gap-2.5 min-w-max">
        {ITINERARY_DAYS.map((day) => {
          const isSelected = day.id === selectedDayId;
          const totalStops = day.stops.length;
          const completedCount = day.stops.filter((s) => completedStops[s.id]).length;
          const isAllDone = totalStops > 0 && completedCount === totalStops;

          return (
            <button
              key={day.id}
              onClick={() => onSelectDay(day.id)}
              className={`relative flex flex-col text-left px-3.5 py-2.5 rounded-2xl transition-all duration-300 border ${
                isSelected
                  ? 'bg-gradient-to-br from-rose-600/30 via-slate-800 to-amber-600/20 border-rose-500/60 shadow-lg shadow-rose-950/40 scale-[1.02]'
                  : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-850 hover:border-slate-700 opacity-90'
              }`}
            >
              {/* Active top line */}
              {isSelected && (
                <div className="absolute top-0 left-3 right-3 h-0.5 bg-gradient-to-r from-rose-400 to-amber-400 rounded-full" />
              )}

              <div className="flex items-center justify-between gap-2">
                <span className={`text-[11px] font-bold uppercase tracking-wider ${
                  isSelected ? 'text-rose-300' : 'text-slate-400'
                }`}>
                  {day.dayOfWeek}
                </span>

                {isAllDone ? (
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    ✓ Fatto
                  </span>
                ) : (
                  <span className="text-[10px] text-slate-500">
                    {completedCount}/{totalStops}
                  </span>
                )}
              </div>

              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-base font-extrabold text-white">
                  {day.dateStr.split(' ')[1]}
                </span>
                <span className="text-xs text-slate-400 font-medium">Dic</span>
              </div>

              <span className={`text-[11px] font-medium truncate max-w-[110px] mt-0.5 ${
                isSelected ? 'text-amber-200' : 'text-slate-400'
              }`}>
                {day.dayNumber === 2 ? '🏰 Disneyland' : day.badge.split(' ')[0] + ' ' + (day.badge.split(' ')[1] || '')}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

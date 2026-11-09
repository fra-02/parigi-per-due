import React, { useState, useEffect } from 'react';
import { fetchParisWeather, WeatherData } from '../services/weatherService';
import { Sunset, Droplets, Clock, ChevronDown, ChevronUp } from 'lucide-react';

export const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showHourly, setShowHourly] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;
    fetchParisWeather().then((data) => {
      if (mounted) {
        setWeather(data);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (loading || !weather) {
    return (
      <div className="p-2.5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center justify-between animate-pulse">
        <span>Carico meteo in tempo reale Parigi...</span>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800/80 shadow-md text-xs overflow-hidden">
      
      {/* Riga Principale Compatta */}
      <div className="p-2.5 sm:p-3 flex items-center justify-between">
        
        {/* Meteo Corrente & Temp */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">{weather.icon}</span>
          <div>
            <div className="flex items-center gap-1.5 font-bold text-white text-sm">
              <span>{weather.currentTemp}°C</span>
              <span className="text-slate-400 font-normal text-xs">({weather.minTemp}° / {weather.maxTemp}°)</span>
            </div>
            <span className="text-[11px] text-slate-400">{weather.weatherLabel}</span>
          </div>
        </div>

        {/* Info Tramonto & Toggle Previsioni Prossime Ore */}
        <div className="flex items-center gap-2">
          
          {/* Pioggia */}
          <div className="flex items-center gap-1 text-[11px] text-sky-300 bg-sky-950/50 px-2 py-1 rounded-xl border border-sky-500/20">
            <Droplets className="w-3 h-3 text-sky-400" />
            <span>{weather.rainProbability}%</span>
          </div>

          {/* Tramonto Parigi in evidenza */}
          <div className="flex items-center gap-1 text-[11px] font-bold text-amber-300 bg-amber-950/50 px-2 py-1 rounded-xl border border-amber-500/30">
            <Sunset className="w-3.5 h-3.5 text-amber-400" />
            <span>{weather.sunsetTime}</span>
          </div>

          {/* Toggle Ore */}
          {weather.hourly && weather.hourly.length > 0 && (
            <button
              onClick={() => setShowHourly(!showHourly)}
              className="p-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
              title="Previsioni prossime ore"
            >
              {showHourly ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}

        </div>

      </div>

      {/* Previsioni Orarie a Scorrimento (Prossime 5-6 ore in tempo reale) */}
      {showHourly && weather.hourly && weather.hourly.length > 0 && (
        <div className="px-3 pb-3 pt-1 border-t border-slate-800/80 bg-slate-950/40 animate-fade-in">
          <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1.5">
            <Clock className="w-3 h-3 text-sky-400" />
            <span>Previsioni Prossime Ore a Parigi</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            {weather.hourly.map((h, i) => (
              <div 
                key={i} 
                className="shrink-0 p-2 rounded-xl bg-slate-900 border border-slate-800/80 flex flex-col items-center min-w-[58px] text-center"
              >
                <span className="text-[10px] font-bold text-slate-400">{h.timeStr}</span>
                <span className="text-base my-0.5">{h.icon}</span>
                <span className="text-xs font-bold text-white">{h.temp}°</span>
                {h.rainProb > 0 ? (
                  <span className="text-[9px] text-sky-300 flex items-center gap-0.5 mt-0.5">
                    <Droplets className="w-2 h-2 text-sky-400" />
                    <span>{h.rainProb}%</span>
                  </span>
                ) : (
                  <span className="text-[9px] text-slate-500 mt-0.5">0%</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

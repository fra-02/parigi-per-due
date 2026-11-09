import React, { useState, useEffect } from 'react';
import { fetchParisWeather, WeatherData } from '../services/weatherService';
import { Sunset, Sunrise, Droplets, CloudSun, Sparkles } from 'lucide-react';

export const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
        <span>Carico meteo e tramonto Parigi...</span>
      </div>
    );
  }

  return (
    <div className="p-2.5 sm:p-3 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800/80 shadow-md flex items-center justify-between text-xs">
      
      {/* Meteo Corrente & Temp */}
      <div className="flex items-center gap-2">
        <span className="text-xl">{weather.icon}</span>
        <div>
          <div className="flex items-center gap-1.5 font-bold text-white">
            <span>{weather.currentTemp}°C</span>
            <span className="text-slate-400 font-normal">({weather.minTemp}° / {weather.maxTemp}°)</span>
          </div>
          <span className="text-[11px] text-slate-400">{weather.weatherLabel}</span>
        </div>
      </div>

      {/* Probabilità Pioggia & Orario Tramonto */}
      <div className="flex items-center gap-2.5">
        
        {/* Pioggia */}
        <div className="flex items-center gap-1 text-[11px] text-sky-300 bg-sky-950/40 px-2 py-1 rounded-xl border border-sky-500/20">
          <Droplets className="w-3 h-3 text-sky-400" />
          <span>{weather.rainProbability}%</span>
        </div>

        {/* Tramonto Parigi in evidenza */}
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-300 bg-amber-950/40 px-2.5 py-1 rounded-xl border border-amber-500/30">
          <Sunset className="w-3.5 h-3.5 text-amber-400" />
          <span>Tramonto {weather.sunsetTime}</span>
        </div>

      </div>

    </div>
  );
};

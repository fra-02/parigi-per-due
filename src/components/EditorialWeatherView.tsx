import React, { useState, useEffect } from 'react';
import { fetchParisWeather, WeatherData } from '../services/weatherService';
import { PASSAGES_PIOGGIA, ITINERARY_DAYS, getGoogleMapsUrl } from '../data/itineraryData';
import { CloudRain, Sunset, Droplets, Clock, Umbrella, Compass } from 'lucide-react';

export const EditorialWeatherView: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    let mounted = true;
    fetchParisWeather().then((data) => {
      if (mounted) setWeather(data);
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="space-y-7 max-w-4xl mx-auto px-4 py-5 animate-fade-in">
      
      {/* Title & Editorial Subtitle */}
      <div className="space-y-2 border-b border-[#e5e0d5] pb-4">
        <h1 className="font-editorial-serif text-3xl sm:text-4xl font-bold text-[#1a1918]">
          Meteo &amp; Piano Pioggia
        </h1>
        <p className="text-xs sm:text-sm text-[#504b42] leading-relaxed max-w-2xl">
          Parigi a dicembre ha un clima invernale che varia tra i 4°C e i 10°C. Se piove, non si resta chiusi in camera: Parigi possiede una rete storica di gallerie coperte e musei straordinari progettati apposta per essere vissuti al caldo.
        </p>
      </div>

      {/* Live Weather Card */}
      {weather && (
        <div className="border border-[#e5e0d5] bg-white rounded-xl p-4 space-y-3 shadow-2xs">
          <div className="flex items-center justify-between border-b border-[#f0ece3] pb-2.5">
            <div className="flex items-center gap-2.5">
              <span className="text-3xl">{weather.icon}</span>
              <div>
                <span className="font-editorial-mono text-[10px] text-[#8a8477] uppercase font-bold block">
                  METEO LIVE A PARIGI
                </span>
                <h3 className="font-editorial-serif text-xl font-bold text-[#1a1918]">
                  {weather.currentTemp}°C • {weather.weatherLabel}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="px-2.5 py-1 rounded bg-[#f6f3eb] border border-[#e5e0d5] font-editorial-mono text-[11px] text-[#6b6559] flex items-center gap-1">
                <Sunset className="w-3.5 h-3.5 text-[#a86527]" />
                <span>Tramonto: {weather.sunsetTime}</span>
              </div>
            </div>
          </div>

          {/* Previsioni Orarie */}
          {weather.hourly && weather.hourly.length > 0 && (
            <div className="space-y-1 pt-1">
              <span className="font-editorial-mono text-[10px] text-[#8a8477] uppercase font-bold tracking-wider block">
                Previsioni prossime ore a Parigi
              </span>
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                {weather.hourly.map((h, idx) => (
                  <div
                    key={idx}
                    className="shrink-0 p-2 rounded-lg bg-[#f9f8f4] border border-[#ebe7de] flex flex-col items-center min-w-[56px] text-center"
                  >
                    <span className="font-editorial-mono text-[10px] text-[#8a8477]">{h.timeStr}</span>
                    <span className="text-base my-0.5">{h.icon}</span>
                    <span className="font-editorial-mono text-xs font-bold text-[#1a1918]">{h.temp}°</span>
                    {h.rainProb > 0 && (
                      <span className="font-editorial-mono text-[9px] text-[#3b7296] flex items-center gap-0.5 mt-0.5">
                        <Droplets className="w-2.5 h-2.5" />
                        <span>{h.rainProb}%</span>
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Piani Pioggia Giorno per Giorno */}
      <div className="space-y-3">
        <div className="space-y-1">
          <h2 className="font-editorial-serif text-2xl font-bold text-[#1a1918]">
            Cosa fare giorno per giorno se piove forte
          </h2>
          <p className="text-xs text-[#706a5e]">
            Alternative ragionate senza stravolgere la giornata.
          </p>
        </div>

        <div className="space-y-2.5">
          {ITINERARY_DAYS.map((day) => (
            <div 
              key={day.id}
              className="p-3.5 rounded-lg border border-[#e5e0d5] bg-white space-y-1"
            >
              <div className="flex items-center gap-2">
                <span className="font-editorial-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#4a453c] text-white">
                  GIORNO {day.dayNumber}
                </span>
                <span className="font-editorial-serif font-bold text-sm sm:text-base text-[#1a1918]">
                  {day.title}
                </span>
              </div>
              <p className="text-xs text-[#403c35] leading-relaxed pt-0.5">
                {day.rainPlan}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* I Passages Couverts: La Parigi segreta al coperto */}
      <div className="border-t border-[#e5e0d5] pt-6 space-y-4">
        <div className="space-y-1">
          <h2 className="font-editorial-serif text-2xl font-bold text-[#1a1918]">
            I Passages Couverts &amp; Rifugi Storici
          </h2>
          <p className="text-xs text-[#706a5e]">
            Gallerie ottocentesche con tetti in vetro, librerie vintage, café e pavimenti a mosaico al riparo dall'acqua.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PASSAGES_PIOGGIA.map((passage, idx) => {
            const gmapsUrl = getGoogleMapsUrl(passage.coordinates.lat, passage.coordinates.lng, passage.name);

            return (
              <div 
                key={idx}
                className="p-3.5 rounded-lg border border-[#e5e0d5] bg-white space-y-2 flex flex-col justify-between shadow-2xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-editorial-serif font-bold text-base text-[#1a1918]">
                      {passage.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[#4d483e] leading-relaxed">
                    {passage.description}
                  </p>
                  <p className="font-editorial-mono text-[11px] text-[#736c5f]">
                    📍 {passage.address}
                  </p>
                  <p className="font-editorial-mono text-[11px] text-[#2a7a40] font-semibold">
                    🚇 {passage.metro}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#f2eee6] flex justify-end">
                  <a
                    href={gmapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-editorial-mono text-xs text-[#2f5d8a] hover:underline"
                  >
                    maps &gt;
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

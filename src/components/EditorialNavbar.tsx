import React, { useState, useEffect } from 'react';
import { fetchParisWeather, WeatherData } from '../services/weatherService';

export type EditorialTab = 
  | 'itinerario' 
  | 'cosa-vedere' 
  | 'mangiare' 
  | 'dormire' 
  | 'meteo' 
  | 'trasporti' 
  | 'da-fare-ora';

interface EditorialNavbarProps {
  activeTab: EditorialTab;
  onSelectTab: (tab: EditorialTab) => void;
}

export const EditorialNavbar: React.FC<EditorialNavbarProps> = ({
  activeTab,
  onSelectTab
}) => {
  const [parisTime, setParisTime] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);

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

  useEffect(() => {
    let mounted = true;
    fetchParisWeather().then((data) => {
      if (mounted) setWeather(data);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const navItems: { id: EditorialTab; label: string }[] = [
    { id: 'itinerario', label: 'ITINERARIO' },
    { id: 'cosa-vedere', label: 'COSA VEDERE' },
    { id: 'mangiare', label: 'MANGIARE' },
    { id: 'dormire', label: 'DORMIRE' },
    { id: 'meteo', label: 'METEO' },
    { id: 'trasporti', label: 'VOLI & TRASPORTI' },
    { id: 'da-fare-ora', label: 'DA FARE ORA' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e7e3da] transition-all">
      <div className="max-w-4xl mx-auto px-4 pt-2.5 pb-0">
        
        {/* Top Minimalist Branding Bar */}
        <div className="flex items-center justify-between py-1 border-b border-[#ece8df]">
          <div className="flex items-center gap-2">
            <span className="font-editorial-mono text-[10px] tracking-widest uppercase font-semibold text-[#8a8477]">
              PARIGI • 7–12 DICEMBRE 2026
            </span>
            <span className="hidden sm:inline-block text-[#c5c0b5]">•</span>
            <span className="hidden sm:inline-block font-editorial-mono text-[10px] tracking-wider text-[#a09a8e]">
              HÔTEL JARDINS DE MONTMARTRE
            </span>
          </div>

          <div className="flex items-center gap-2 font-editorial-mono text-[11px] text-[#5a554a]">
            {weather && (
              <span className="flex items-center gap-1 bg-[#ede9df] px-2 py-0.5 rounded text-[10px]">
                <span>{weather.icon}</span>
                <span className="font-medium">{weather.currentTemp}°C</span>
              </span>
            )}
            <span className="bg-[#ede9df] px-2 py-0.5 rounded text-[10px] font-medium">
              {parisTime} Parigi
            </span>
          </div>
        </div>

        {/* Horizontal Scrollable Tabs Bar (Inspired by Jacopo D'Alesio dashboard) */}
        <nav className="flex items-center gap-5 overflow-x-auto no-scrollbar pt-2.5 pb-0">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`pb-2.5 font-editorial-mono text-[11px] tracking-wider whitespace-nowrap transition-all border-b-2 uppercase ${
                  isActive
                    ? 'border-[#1a1918] text-[#1a1918] font-bold'
                    : 'border-transparent text-[#7a7468] hover:text-[#1a1918]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

      </div>
    </header>
  );
};

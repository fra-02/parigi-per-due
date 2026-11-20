import React, { useState, useEffect } from 'react';
import { EditorialNavbar, EditorialTab } from './components/EditorialNavbar';
import { EditorialItineraryView } from './components/EditorialItineraryView';
import { EditorialAttractionsView } from './components/EditorialAttractionsView';
import { EditorialFoodView } from './components/EditorialFoodView';
import { EditorialStayView } from './components/EditorialStayView';
import { EditorialWeatherView } from './components/EditorialWeatherView';
import { EditorialTransitView } from './components/EditorialTransitView';
import { EditorialChecklistView } from './components/EditorialChecklistView';
import confetti from 'canvas-confetti';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<EditorialTab>('itinerario');
  const [completedStops, setCompletedStops] = useState<Record<string, boolean>>({});

  // Caricamento tappe completate da localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('parigi_completed_stops');
      if (saved) {
        setCompletedStops(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Error loading saved stops', e);
    }
  }, []);

  const handleToggleComplete = (id: string) => {
    setCompletedStops((prev) => {
      const isNowCompleted = !prev[id];
      const updated = { ...prev, [id]: isNowCompleted };
      
      if (isNowCompleted) {
        try {
          confetti({
            particleCount: 25,
            spread: 45,
            origin: { y: 0.8 },
            colors: ['#8a4233', '#c2785c', '#2a7a40', '#2f5d8a']
          });
        } catch {
          // fallback
        }
      }

      try {
        localStorage.setItem('parigi_completed_stops', JSON.stringify(updated));
      } catch (e) {
        console.error('Error saving stops', e);
      }
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a1918] font-editorial-sans flex flex-col selection:bg-[#c2785c] selection:text-white">
      
      {/* Sticky Editorial Navbar (Fedele a Screenshot 2 & 3 per smartphone) */}
      <EditorialNavbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
      />

      {/* Main View Body */}
      <main className="flex-1 pb-16">
        {activeTab === 'itinerario' && (
          <EditorialItineraryView
            completedStops={completedStops}
            onToggleComplete={handleToggleComplete}
          />
        )}

        {activeTab === 'cosa-vedere' && (
          <EditorialAttractionsView />
        )}

        {activeTab === 'mangiare' && (
          <EditorialFoodView />
        )}

        {activeTab === 'dormire' && (
          <EditorialStayView />
        )}

        {activeTab === 'meteo' && (
          <EditorialWeatherView />
        )}

        {activeTab === 'trasporti' && (
          <EditorialTransitView />
        )}

        {activeTab === 'da-fare-ora' && (
          <EditorialChecklistView />
        )}
      </main>

      {/* Editorial Minimalist Footer */}
      <footer className="border-t border-[#e5e0d5] py-6 px-4 bg-[#f4efe6] text-center text-xs text-[#756f62] font-editorial-mono space-y-1">
        <p className="tracking-wider uppercase font-semibold">
          PARIGI CON AMORE • 7–12 DICEMBRE 2026
        </p>
        <p className="text-[11px] text-[#918b7e]">
          Creato con amore per il nostro viaggio indimenticabile ❤️
        </p>
      </footer>

    </div>
  );
};

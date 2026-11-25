import React from 'react';
import { Home, CalendarDays, MapPin, BookmarkCheck } from 'lucide-react';

export type AppTab = 'home' | 'days' | 'map' | 'saved';

interface BottomNavProps {
  activeTab: AppTab;
  onSelectTab: (tab: AppTab) => void;
}

const NAV_ITEMS: { id: AppTab; label: string; icon: React.FC<{ className?: string }> }[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'days', label: 'Giornate', icon: CalendarDays },
  { id: 'map', label: 'Mappa', icon: MapPin },
  { id: 'saved', label: 'Salvati', icon: BookmarkCheck },
];

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onSelectTab }) => {
  return (
    <nav
      aria-label="Navigazione principale"
      className="fixed bottom-0 inset-x-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-t border-[#E5DCD0] shadow-[0_-4px_20px_rgba(33,27,25,0.06)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="max-w-2xl mx-auto grid grid-cols-4">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectTab(item.id)}
              aria-current={active ? 'page' : undefined}
              className={`touch-target flex flex-col items-center justify-center gap-1 py-2 px-1 text-xs font-semibold transition-colors ${
                active
                  ? 'text-[#7A1E2E]'
                  : 'text-[#5C524D] hover:text-[#211B19]'
              }`}
            >
              <span
                className={`flex items-center justify-center w-10 h-7 rounded-full transition-colors ${
                  active ? 'bg-[#7A1E2E]/10' : ''
                }`}
              >
                <Icon className="w-5 h-5" />
              </span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

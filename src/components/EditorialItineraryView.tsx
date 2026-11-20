import React, { useState } from 'react';
import { ITINERARY_DAYS, DayItinerary, Stop, getGoogleMapsUrl, getCitymapperUrl } from '../data/itineraryData';
import { DayMap } from './DayMap';
import { Map, ChevronDown, ChevronUp, Check, ExternalLink } from 'lucide-react';

interface EditorialItineraryViewProps {
  completedStops: Record<string, boolean>;
  onToggleComplete: (id: string) => void;
}

export const EditorialItineraryView: React.FC<EditorialItineraryViewProps> = ({
  completedStops,
  onToggleComplete
}) => {
  const [selectedDayFilter, setSelectedDayFilter] = useState<string>('all');
  const [isMapExpanded, setIsMapExpanded] = useState<boolean>(false);

  const filteredDays = selectedDayFilter === 'all'
    ? ITINERARY_DAYS
    : ITINERARY_DAYS.filter(d => d.id === selectedDayFilter);

  // Generatore link multi-tappa Google Maps
  const getDayGoogleMapsMultiRoute = (day: DayItinerary) => {
    if (!day.stops || day.stops.length === 0) return 'https://maps.google.com';
    const coordsList = day.stops.map(s => `${s.coordinates.lat},${s.coordinates.lng}`).join('/');
    return `https://www.google.com/maps/dir/${coordsList}`;
  };

  // Badge colori per ogni giorno (stile Jacopo D'Alesio dashboard)
  const getDayBadgeBg = (dayNumber: number) => {
    switch (dayNumber) {
      case 1: return 'bg-[#8a4233] text-white'; // terracotta / ruggine
      case 2: return 'bg-[#5c3e7a] text-white'; // prugna Disney
      case 3: return 'bg-[#355670] text-white'; // blu navy Senna
      case 4: return 'bg-[#626e3c] text-white'; // oliva impressionista
      case 5: return 'bg-[#8c652b] text-white'; // ambra oro Opéra/Louvre
      case 6: return 'bg-[#3b6666] text-white'; // petrolio partenza
      default: return 'bg-[#555047] text-white';
    }
  };

  const getDayMetaText = (dayNumber: number) => {
    switch (dayNumber) {
      case 1: return '12:50 arrivo • Montmartre a piedi';
      case 2: return 'RER A • intera giornata';
      case 3: return 'Cité • Marais • 18:45 battello';
      case 4: return 'Orangerie • Orsay • Torre Eiffel';
      case 5: return 'Louvre • Opéra • 20:00 Jungle Palace';
      case 6: return 'Montmartre mattina • 16:40 volo Orly';
      default: return 'Parigi centro';
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto px-4 py-5 animate-fade-in">
      
      {/* 1. SELETTORE RAPIDO DEI GIORNI (Pill filter in stile Screenshot 2) */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
        <button
          onClick={() => setSelectedDayFilter('all')}
          className={`px-3 py-1 rounded text-xs font-editorial-mono font-medium tracking-wider uppercase transition-all ${
            selectedDayFilter === 'all'
              ? 'bg-[#1a1918] text-white font-bold'
              : 'bg-[#ede9df] text-[#6b6559] hover:text-[#1a1918]'
          }`}
        >
          TUTTO
        </button>

        {ITINERARY_DAYS.map((day) => {
          const isSelected = selectedDayFilter === day.id;
          return (
            <button
              key={day.id}
              onClick={() => setSelectedDayFilter(day.id)}
              className={`px-3 py-1 rounded text-xs font-editorial-mono font-medium tracking-wider uppercase whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-[#1a1918] text-white font-bold'
                  : 'bg-[#ede9df] text-[#6b6559] hover:text-[#1a1918]'
              }`}
            >
              GIORNO {day.dayNumber}
            </button>
          );
        })}
      </div>

      {/* 2. MAPPA ACCORDION INTEGRATA CON PULSANTE SATELLITE/MAPPA */}
      <div className="rounded-xl border border-[#e5e0d5] bg-white overflow-hidden shadow-sm">
        <div 
          onClick={() => setIsMapExpanded(!isMapExpanded)}
          className="p-3 bg-[#f8f6f0] border-b border-[#ece7dd] flex items-center justify-between cursor-pointer hover:bg-[#f3f0e7] transition-colors"
        >
          <div className="flex items-center gap-2">
            <Map className="w-4 h-4 text-[#8a8477]" />
            <span className="font-editorial-mono text-xs font-bold uppercase tracking-wider text-[#3a3731]">
              Mappa del percorso
            </span>
            <span className="text-[11px] font-editorial-mono text-[#8a8477]">
              ({selectedDayFilter === 'all' ? 'Tutti i 6 giorni' : `Giorno ${selectedDayFilter.replace('day-', '')}`})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[11px] font-editorial-mono text-[#2f5d8a] hover:underline"
            >
              Tutto il giro su Google Maps &gt;
            </a>
            {isMapExpanded ? (
              <ChevronUp className="w-4 h-4 text-[#666]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#666]" />
            )}
          </div>
        </div>

        {isMapExpanded && (
          <div className="h-80 sm:h-96 w-full animate-fade-in relative">
            <DayMap initialDayId={selectedDayFilter === 'all' ? 'day-1' : selectedDayFilter} />
          </div>
        )}
      </div>

      {/* 3. LISTA EDITORIALE DEI GIORNI (Layout fedele a Screenshot 1 & 4) */}
      <div className="space-y-10">
        {filteredDays.map((day) => {
          const gmapsRouteUrl = getDayGoogleMapsMultiRoute(day);

          return (
            <article 
              key={day.id} 
              className="border-t-2 border-[#1a1918] pt-4 space-y-4"
            >
              {/* Day Header Row */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-editorial-mono font-bold tracking-wider uppercase ${getDayBadgeBg(day.dayNumber)}`}>
                      GIORNO {day.dayNumber}
                    </span>
                    <span className="font-editorial-mono text-xs text-[#706a5e] tracking-wider uppercase">
                      {day.dateStr}
                    </span>
                  </div>

                  <h2 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-[#1a1918] leading-tight">
                    {day.title}
                  </h2>
                </div>

                <div className="text-right shrink-0">
                  <span className="font-editorial-mono text-[11px] text-[#857f72] block">
                    {getDayMetaText(day.dayNumber)}
                  </span>
                </div>
              </div>

              {/* Day Stops (Elenco tipografico pulito con link maps >) */}
              <div className="space-y-4 pt-1">
                {day.stops.map((stop, sIdx) => {
                  const isDone = !!completedStops[stop.id];
                  const gmapsUrl = getGoogleMapsUrl(stop.coordinates.lat, stop.coordinates.lng, stop.title);
                  const citymapperUrl = getCitymapperUrl(stop.coordinates.lat, stop.coordinates.lng, stop.title, stop.address);

                  return (
                    <div 
                      key={stop.id}
                      className="group flex items-start gap-3 text-left transition-all"
                    >
                      {/* Spunta rapida "Fatto" */}
                      <button
                        onClick={() => onToggleComplete(stop.id)}
                        className={`mt-1 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all ${
                          isDone 
                            ? 'bg-[#2a7a40] border-[#2a7a40] text-white' 
                            : 'border-[#b5afa3] hover:border-[#1a1918] text-transparent'
                        }`}
                        title="Segna come visitato"
                      >
                        <Check className="w-3 h-3 stroke-[3]" />
                      </button>

                      <div className="flex-1 space-y-1">
                        {/* Riga Titolo + Link Maps */}
                        <div className="flex items-baseline flex-wrap gap-x-2 gap-y-0.5">
                          <h3 className={`text-sm sm:text-base font-bold text-[#1a1918] ${
                            isDone ? 'line-through text-[#8f8a7e]' : ''
                          }`}>
                            {stop.title}
                          </h3>

                          {stop.time && (
                            <span className="font-editorial-mono text-[11px] text-[#8a5030] font-medium">
                              [{stop.time}]
                            </span>
                          )}

                          <a
                            href={gmapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-editorial-mono text-[11px] text-[#2f5d8a] hover:underline"
                          >
                            maps &gt;
                          </a>

                          <a
                            href={citymapperUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-editorial-mono text-[10px] text-[#3e784a] hover:underline"
                            title="Apri indicazioni metro su Citymapper"
                          >
                            metro &gt;
                          </a>

                          {stop.bookingUrl && (
                            <a
                              href={stop.bookingUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-editorial-mono text-[10px] text-[#9c531d] hover:underline font-semibold"
                            >
                              prenota &gt;
                            </a>
                          )}
                        </div>

                        {/* Testo descrittivo onesto */}
                        <p className="text-xs sm:text-[13px] text-[#403c35] leading-relaxed">
                          {stop.description}
                        </p>

                        {/* Chicca romantica o nota speciale se presente */}
                        {stop.romanticTip && (
                          <p className="text-xs text-[#8a3e35] font-editorial-serif italic pt-0.5">
                            *Per voi: {stop.romanticTip}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Dormite a... */}
              <div className="pt-1">
                <span className="font-editorial-serif text-xs italic text-[#706a5e]">
                  dormite a Hôtel Jardins de Montmartre (131 Rue Caulaincourt)
                </span>
              </div>

              {/* Sand Alert Box (Identico allo Screenshot 1) */}
              {day.rainPlan && (
                <div className="p-3.5 bg-[#f4efe4] border-l-3 border-[#8a4233] text-xs text-[#403c35] space-y-1 rounded-r-md">
                  <p className="font-bold text-[#2a2723]">
                    Nota del giorno &amp; Piano Pioggia:
                  </p>
                  <p className="leading-relaxed">
                    {day.rainPlan}
                  </p>
                </div>
              )}

              {/* Button: Questa giornata su Google Maps > */}
              <div className="pt-1">
                <a
                  href={gmapsRouteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-2 px-3 border border-[#ccc6b8] hover:border-[#1a1918] bg-white rounded font-editorial-mono text-xs text-[#201e1a] font-medium tracking-wide transition-colors shadow-2xs"
                >
                  Questa giornata su Google Maps &gt;
                </a>
              </div>

            </article>
          );
        })}
      </div>

    </div>
  );
};

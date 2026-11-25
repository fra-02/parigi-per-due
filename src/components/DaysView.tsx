import React, { useState } from 'react';
import {
  TrainFront,
  Umbrella,
  Sparkles,
  Utensils,
  AlertTriangle,
  Castle,
  BookOpen,
  Navigation,
  ExternalLink,
} from 'lucide-react';
import {
  DayPlan,
  RestaurantCard,
  StopCompletionState,
  WeatherMode,
} from '../types/travel';
import { StopDetailCard } from './StopDetailCard';
import { DISNEY_SPECIAL_GUIDE, MENU_TRANSLATIONS } from '../data/staticGuides';

interface DaysViewProps {
  days: DayPlan[];
  restaurants: RestaurantCard[];
  selectedDate: string;
  highlightStopId?: string | null;
  stopStates: Record<string, StopCompletionState>;
  favorites: string[];
  weatherByDay: Record<string, WeatherMode>;
  recoveryFlags: { eiffelFriday: boolean; montmartreSaturday: boolean };
  onSelectDate: (date: string) => void;
  onSetCompletion: (id: string, state: StopCompletionState) => void;
  onToggleFavorite: (id: string) => void;
  onSetWeather: (date: string, mode: WeatherMode) => void;
  onToggleRecovery: (key: 'eiffelFriday' | 'montmartreSaturday') => void;
}

export const DaysView: React.FC<DaysViewProps> = ({
  days,
  restaurants,
  selectedDate,
  highlightStopId,
  stopStates,
  favorites,
  weatherByDay,
  recoveryFlags,
  onSelectDate,
  onSetCompletion,
  onToggleFavorite,
  onSetWeather,
  onToggleRecovery,
}) => {
  const [subMode, setSubMode] = useState<'timeline' | 'food'>('timeline');
  const [showTranslations, setShowTranslations] = useState(false);

  const day = days.find((d) => d.date === selectedDate) ?? days[0];
  const weatherMode: WeatherMode = weatherByDay[day.date] ?? 'dry';
  const dayRestaurants = restaurants.filter((r) => r.dayDates.includes(day.date));
  const isDisneyDay = day.date === '2026-12-08';

  const completedCount = day.activities.filter(
    (a) => stopStates[a.id] === 'completed'
  ).length;

  return (
    <div className="space-y-4">
      {/* Day Selector Pills */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {days.map((d) => {
          const active = d.date === day.date;
          return (
            <button
              key={d.date}
              type="button"
              onClick={() => onSelectDate(d.date)}
              className={`touch-target shrink-0 rounded-2xl px-3.5 py-2 text-left border transition-colors ${
                active
                  ? 'bg-[#7A1E2E] text-white border-[#7A1E2E] shadow-sm'
                  : 'bg-[#FFFDF9] text-[#211B19] border-[#E5DCD0]'
              }`}
            >
              <div className="text-[11px] font-mono-tabular opacity-85">
                {d.date.slice(8)}/12
              </div>
              <div className="text-xs font-bold">Giorno {d.dayNumber}</div>
            </button>
          );
        })}
      </div>

      {/* Day Header Card */}
      <section className="rounded-2xl bg-[#FFFDF9] border border-[#E5DCD0] p-4 shadow-sm space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[11px] font-mono-tabular uppercase tracking-wider text-[#7A1E2E] font-semibold">
              {day.subtitle}
            </p>
            <h1 className="font-serif-editorial text-2xl font-semibold text-[#211B19]">
              {day.title}
            </h1>
          </div>
          <span className="font-mono-tabular text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EBF1EC] text-[#2F5239]">
            {completedCount}/{day.activities.length}
          </span>
        </div>

        {/* Transport summary */}
        <div className="rounded-xl bg-[#FAF7F2] border border-[#E5DCD0] p-3 text-xs text-[#211B19] flex items-start gap-2">
          <TrainFront className="w-4 h-4 text-[#4A6652] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-[#4A6652]">Metro & RER: </span>
            {day.transport}
          </div>
        </div>

        {/* Manual weather selector */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#5C524D] flex items-center gap-1">
              <Umbrella className="w-3.5 h-3.5 text-[#7A1E2E]" /> Meteo della giornata
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {(
              [
                { id: 'dry', label: 'Asciutto' },
                { id: 'light_rain', label: 'Pioggia lieve' },
                { id: 'heavy_rain', label: 'Pioggia forte' },
              ] as const
            ).map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => onSetWeather(day.date, opt.id)}
                className={`min-h-[38px] rounded-xl border text-xs font-semibold transition-colors ${
                  weatherMode === opt.id
                    ? 'bg-[#4A6652] text-white border-[#4A6652]'
                    : 'bg-[#FAF7F2] text-[#211B19] border-[#E5DCD0]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {weatherMode !== 'dry' && (
            <div className="rounded-xl bg-[#F6EEDB] border border-[#DFC99B] p-3 text-xs text-[#211B19] space-y-1">
              <div className="font-semibold text-[#6E4F16]">
                Piano {weatherMode === 'light_rain' ? 'pioggia lieve' : 'pioggia forte'}:
              </div>
              <p>{weatherMode === 'light_rain' ? day.rain.light : day.rain.heavy}</p>
              <p className="text-[11px] text-[#5C524D] flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-[#9A7432]" />
                Le prenotazioni confermate restano invariate.
              </p>
            </div>
          )}
        </div>

        {/* Recovery proposals with conflict warnings */}
        {(day.date === '2026-12-10' || day.date === '2026-12-11') && (
          <div className="rounded-xl border border-[#DFC99B] bg-[#FAF7F2] p-3 text-xs space-y-1.5">
            <div className="flex items-center justify-between gap-2">
              <span className="font-semibold text-[#7A1E2E]">
                Proposta recupero Torre Eiffel (venerdì 11/12 ore 18:00)
              </span>
              <button
                type="button"
                onClick={() => onToggleRecovery('eiffelFriday')}
                className={`px-2.5 py-1 rounded-lg font-semibold border ${
                  recoveryFlags.eiffelFriday
                    ? 'bg-[#7A1E2E] text-white border-[#7A1E2E]'
                    : 'bg-white text-[#7A1E2E] border-[#7A1E2E]'
                }`}
              >
                {recoveryFlags.eiffelFriday ? 'Attiva' : 'Valuta'}
              </button>
            </div>
            <p className="text-[#5C524D]">
              Avviso conflitti: richiede di tagliare Printemps Haussmann (17:15) e ridurre Galeries Lafayette Gourmet prima della cena alle 20:00.
            </p>
          </div>
        )}

        {(day.date === '2026-12-07' || day.date === '2026-12-12') && (
          <div className="rounded-xl border border-[#DFC99B] bg-[#FAF7F2] p-3 text-xs space-y-1.5">
            <div className="flex items-center justify-between gap-2">
              <span className="font-semibold text-[#7A1E2E]">
                Proposta recupero Montmartre (sabato 12/12 mattina)
              </span>
              <button
                type="button"
                onClick={() => onToggleRecovery('montmartreSaturday')}
                className={`px-2.5 py-1 rounded-lg font-semibold border ${
                  recoveryFlags.montmartreSaturday
                    ? 'bg-[#7A1E2E] text-white border-[#7A1E2E]'
                    : 'bg-white text-[#7A1E2E] border-[#7A1E2E]'
                }`}
              >
                {recoveryFlags.montmartreSaturday ? 'Attiva' : 'Valuta'}
              </button>
            </div>
            <p className="text-[#5C524D]">
              Avviso conflitti: recupero bagagli in hotel tassativo entro le 11:40 per prendere la Metro 12 + 14 verso Orly (volo 16:40).
            </p>
          </div>
        )}

        {/* Sub-mode switcher: Timeline vs Ristoranti */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            type="button"
            onClick={() => setSubMode('timeline')}
            className={`touch-target rounded-xl text-xs font-bold border flex items-center justify-center gap-1.5 ${
              subMode === 'timeline'
                ? 'bg-[#7A1E2E] text-white border-[#7A1E2E]'
                : 'bg-[#FAF7F2] text-[#211B19] border-[#E5DCD0]'
            }`}
          >
            <Sparkles className="w-4 h-4" /> Timeline ({day.activities.length})
          </button>
          <button
            type="button"
            onClick={() => setSubMode('food')}
            className={`touch-target rounded-xl text-xs font-bold border flex items-center justify-center gap-1.5 ${
              subMode === 'food'
                ? 'bg-[#7A1E2E] text-white border-[#7A1E2E]'
                : 'bg-[#FAF7F2] text-[#211B19] border-[#E5DCD0]'
            }`}
          >
            <Utensils className="w-4 h-4" /> Cibo & Menù ({dayRestaurants.length})
          </button>
        </div>
      </section>

      {/* Special Disneyland Anniversary Section on Dec 8 */}
      {isDisneyDay && subMode === 'timeline' && (
        <section className="rounded-2xl bg-gradient-to-br from-[#F6EEDB] to-[#FFFDF9] border border-[#DFC99B] p-4 shadow-sm space-y-2.5">
          <div className="flex items-center gap-2 text-[#7A1E2E]">
            <Castle className="w-5 h-5" />
            <h2 className="font-serif-editorial text-lg font-semibold">
              Speciale Anniversario · Disneyland Park
            </h2>
          </div>
          <p className="text-xs text-[#211B19] font-medium">
            {DISNEY_SPECIAL_GUIDE.seasonName} · Parco: {DISNEY_SPECIAL_GUIDE.parkHoursDec8} · LEGO Store: {DISNEY_SPECIAL_GUIDE.legoStoreHours}
          </p>
          <ul className="space-y-1 text-xs text-[#211B19]">
            {DISNEY_SPECIAL_GUIDE.strategy.map((s, i) => (
              <li key={i}>• {s}</li>
            ))}
          </ul>
          <p className="text-[11px] text-[#5C524D] bg-white/70 rounded-xl p-2.5 border border-[#E5D5B2]">
            <strong>Rientro RER A:</strong> {DISNEY_SPECIAL_GUIDE.rerReturnNote}
          </p>
        </section>
      )}

      {/* Timeline or Restaurants */}
      {subMode === 'timeline' ? (
        <div className="space-y-3">
          {day.activities.map((act) => (
            <StopDetailCard
              key={act.id}
              activity={act}
              completionState={stopStates[act.id] ?? 'pending'}
              isFavorite={favorites.includes(act.id)}
              weatherMode={weatherMode}
              onSetCompletion={onSetCompletion}
              onToggleFavorite={onToggleFavorite}
              defaultExpanded={highlightStopId === act.id}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {/* Quick French Menu Translator */}
          <div className="rounded-2xl bg-[#FFFDF9] border border-[#E5DCD0] p-4 shadow-sm">
            <button
              type="button"
              onClick={() => setShowTranslations((v) => !v)}
              className="w-full flex items-center justify-between text-left"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-[#7A1E2E] flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" /> Dizionario rapido menù (FR → IT) · Analcolico
              </span>
              <span className="text-xs font-semibold text-[#4A6652]">
                {showTranslations ? 'Nascondi' : 'Apri'}
              </span>
            </button>
            {showTranslations && (
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                {MENU_TRANSLATIONS.map((t) => (
                  <div
                    key={t.fr}
                    className="flex justify-between gap-2 rounded-lg bg-[#FAF7F2] px-2.5 py-1.5 border border-[#E5DCD0]"
                  >
                    <span className="font-semibold text-[#7A1E2E]">{t.fr}</span>
                    <span className="text-[#211B19] text-right">{t.it}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Day Food Ideas from JSON */}
          <div className="rounded-2xl bg-[#F3ECE1]/70 border border-[#E5DCD0] p-4 text-xs space-y-1">
            <div className="font-bold uppercase tracking-wider text-[#7A1E2E] mb-1">
              Stime gastronomia del giorno (per due salvo diversa indicazione)
            </div>
            {day.foodIdeas.map((idea, idx) => (
              <div key={idx} className="text-[#211B19]">
                • {idea}
              </div>
            ))}
          </div>

          {/* Separate Restaurant Cards */}
          {dayRestaurants.map((rest) => {
            const img = rest.photo.localPath || rest.photo.url;
            return (
              <article
                key={rest.id}
                className="rounded-2xl bg-[#FFFDF9] border border-[#E5DCD0] overflow-hidden shadow-sm"
              >
                {img && (
                  <figure className="bg-[#F3ECE1]">
                    <img
                      src={img}
                      alt={rest.name}
                      loading="lazy"
                      className="w-full h-40 object-cover"
                    />
                    <figcaption className="px-3 py-1 text-[10px] text-[#5C524D] bg-[#FAF7F2]">
                      {rest.photo.caption || 'Foto illustrativa'} ·{' '}
                      {rest.photo.author || 'Wikimedia Commons'} ({rest.photo.license || 'CC'})
                    </figcaption>
                  </figure>
                )}
                <div className="p-4 space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-serif-editorial text-xl font-semibold text-[#211B19]">
                        {rest.name}
                      </h3>
                      <p className="text-xs text-[#5C524D]">
                        {rest.cuisine} · {rest.address}
                      </p>
                    </div>
                    <span className="font-mono-tabular text-xs font-bold px-2.5 py-1 rounded-full bg-[#F6EEDB] text-[#6E4F16] shrink-0">
                      {rest.priceRangePerTwo}
                    </span>
                  </div>

                  <p className="text-xs text-[#4A6652] font-medium">
                    Orari: {rest.hours} ({rest.hoursStatus === 'verified' ? 'verificato' : 'da verificare'})
                  </p>

                  <div className="text-xs text-[#211B19]">
                    <span className="font-semibold text-[#7A1E2E]">Specialità: </span>
                    {rest.specialties.join(', ')}
                  </div>

                  {rest.menuHighlights.length > 0 && (
                    <div className="rounded-xl bg-[#FAF7F2] border border-[#E5DCD0] p-2.5 space-y-1 text-xs">
                      <div className="font-semibold text-[#5C524D]">Piatti indicativi</div>
                      {rest.menuHighlights.map((m, idx) => (
                        <div key={idx} className="flex justify-between gap-2">
                          <span>
                            <strong>{m.fr}</strong> — {m.it}
                          </span>
                          {m.price && (
                            <span className="font-mono-tabular text-[#7A1E2E] shrink-0">
                              {m.price}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="text-xs text-[#5C524D]">
                    <strong>Opzione analcolica:</strong> {rest.nonAlcoholicNote}
                  </p>
                  <p className="text-xs text-[#5C524D]">
                    <strong>Note prenotazione:</strong> {rest.bookingNote}
                  </p>
                  {rest.alternativesNearby.length > 0 && (
                    <p className="text-xs text-[#5C524D]">
                      <strong>Alternative vicine:</strong> {rest.alternativesNearby.join(' · ')}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 pt-2">
                    <a
                      href={rest.walking}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="touch-target inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#7A1E2E] text-white text-xs font-semibold"
                    >
                      <Navigation className="w-3.5 h-3.5" /> Maps
                    </a>
                    <a
                      href={rest.citymapper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="touch-target inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#4A6652] text-white text-xs font-semibold"
                    >
                      <TrainFront className="w-3.5 h-3.5" /> Citymapper
                    </a>
                    {rest.officialUrl && (
                      <a
                        href={rest.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="touch-target inline-flex items-center gap-1 px-3 py-2 rounded-xl border border-[#E5DCD0] text-xs font-semibold text-[#211B19]"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Sito
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
};

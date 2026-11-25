import React, { useState, useEffect, useMemo } from 'react';
import {
  Clock,
  Navigation,
  TrainFront,
  Umbrella,
  Sparkles,
  Wallet,
  CalendarCheck,
  LocateFixed,
  AlertTriangle,
  WifiOff,
  Coffee,
  ChevronRight,
} from 'lucide-react';
import {
  Activity,
  BookingRecord,
  Coordinates,
  DayPlan,
  StopCompletionState,
  WeatherMode,
} from '../types/travel';
import {
  computeFreeTimeSuggestions,
  getParisNow,
  parseTimeToMinutes,
} from '../utils/timeAndLinks';
import { fetchParisLiveWeather, LiveWeatherReport } from '../services/weatherService';

interface HomeViewProps {
  days: DayPlan[];
  stopStates: Record<string, StopCompletionState>;
  weatherByDay: Record<string, WeatherMode>;
  bookings: BookingRecord[];
  actualSpentEur: number;
  residualEstimatedEur: number;
  onSetWeather: (date: string, mode: WeatherMode) => void;
  onGoToDay: (date: string, highlightId?: string) => void;
  onGoToSaved: (subTab?: 'bookings' | 'budget' | 'checklist' | 'diary' | 'emergency') => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  days,
  stopStates,
  weatherByDay,
  bookings,
  actualSpentEur,
  residualEstimatedEur,
  onSetWeather,
  onGoToDay,
  onGoToSaved,
}) => {
  const [parisNow, setParisNow] = useState(() => getParisNow());
  const [liveWeather, setLiveWeather] = useState<LiveWeatherReport | null>(null);
  const [isOnline, setIsOnline] = useState<boolean>(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );
  const [freeMinutes, setFreeMinutes] = useState<15 | 30 | 60>(30);
  const [geoCoords, setGeoCoords] = useState<Coordinates | null>(null);
  const [geoError, setGeoError] = useState<string | null>(null);
  const [manualOriginId, setManualOriginId] = useState<string>('');

  useEffect(() => {
    const id = setInterval(() => setParisNow(getParisNow()), 30000);
    const onOnline = () => setIsOnline(true);
    const onOffline = () => setIsOnline(false);
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);
    return () => {
      clearInterval(id);
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    };
  }, []);

  useEffect(() => {
    if (!isOnline) {
      setLiveWeather(null);
      return;
    }
    let mounted = true;
    fetchParisLiveWeather().then((w) => {
      if (mounted) setLiveWeather(w);
    });
    return () => {
      mounted = false;
    };
  }, [isOnline]);

  // Determine active trip day (or Day 1 before trip starts, Day 6 after)
  const activeDay = useMemo(() => {
    const exact = days.find((d) => d.date === parisNow.dateStr);
    if (exact) return exact;
    if (parisNow.dateStr < days[0].date) return days[0];
    return days[days.length - 1];
  }, [days, parisNow.dateStr]);

  const isDuringTrip = days.some((d) => d.date === parisNow.dateStr);
  const currentWeatherMode: WeatherMode = weatherByDay[activeDay.date] ?? 'dry';

  // Next pending stop in active day
  const nextStop: Activity | null = useMemo(() => {
    const pending = activeDay.activities.filter(
      (a) => (stopStates[a.id] ?? 'pending') === 'pending'
    );
    if (pending.length === 0) return null;
    if (!isDuringTrip) return pending[0];
    const upcoming = pending.find(
      (a) => parseTimeToMinutes(a.time) + a.durationMinutes >= parisNow.minutesSinceMidnight
    );
    return upcoming ?? pending[0];
  }, [activeDay, stopStates, isDuringTrip, parisNow.minutesSinceMidnight]);

  const originCoords = useMemo(() => {
    if (geoCoords) return geoCoords;
    if (manualOriginId) {
      const found = activeDay.activities.find((a) => a.id === manualOriginId);
      if (found?.coordinates) return found.coordinates;
    }
    return nextStop?.coordinates ?? activeDay.activities[0]?.coordinates ?? null;
  }, [geoCoords, manualOriginId, activeDay, nextStop]);

  const freeTimeAnalysis = useMemo(() => {
    const baseMin = isDuringTrip ? parisNow.minutesSinceMidnight : 13 * 60;
    return computeFreeTimeSuggestions(
      activeDay.activities.filter((a) => (stopStates[a.id] ?? 'pending') === 'pending'),
      freeMinutes,
      baseMin,
      originCoords
    );
  }, [activeDay, stopStates, freeMinutes, isDuringTrip, parisNow.minutesSinceMidnight, originCoords]);

  const requestGeo = () => {
    setGeoError(null);
    if (!navigator.geolocation) {
      setGeoError('Geolocalizzazione non supportata dal dispositivo.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGeoCoords({
          lat: Number(pos.coords.latitude.toFixed(6)),
          lon: Number(pos.coords.longitude.toFixed(6)),
        });
      },
      () => {
        setGeoError('Permesso posizione negato o non disponibile. Seleziona una tappa di partenza.');
      },
      { enableHighAccuracy: false, timeout: 6000 }
    );
  };

  const confirmedCount = bookings.filter((b) => b.status === 'confirmed').length;
  const unknownTimeCount = bookings.filter((b) => b.status === 'booked_time_unknown').length;
  const toBookCount = bookings.filter((b) => b.status === 'to_book').length;

  return (
    <div className="space-y-4">
      {/* Romantic Editorial Header */}
      <header className="rounded-3xl bg-gradient-to-br from-[#7A1E2E] to-[#5E1522] text-white p-5 shadow-md">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#F6EEDB]/90 font-semibold">
              7–12 Dicembre 2026
            </p>
            <h1 className="font-serif-editorial text-3xl font-semibold tracking-tight mt-0.5">
              Paris à deux
            </h1>
            <p className="font-serif-editorial italic text-sm text-[#F6EEDB] mt-0.5">
              Six jours, deux cœurs, mille souvenirs.
            </p>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="font-mono-tabular text-xs bg-white/15 px-2.5 py-1 rounded-full">
              Parigi · {parisNow.timeStr}
            </span>
            {!isOnline && (
              <span className="inline-flex items-center gap-1 text-[11px] bg-[#F6EEDB] text-[#7A1E2E] font-semibold px-2 py-0.5 rounded-full">
                <WifiOff className="w-3 h-3" /> Offline
              </span>
            )}
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-2 text-xs text-[#F6EEDB]">
          <span>
            {isDuringTrip
              ? `Oggi: Giorno ${activeDay.dayNumber} — ${activeDay.title}`
              : `Anteprima Giorno ${activeDay.dayNumber} (${activeDay.date}): ${activeDay.title}`}
          </span>
          {liveWeather ? (
            <span className="bg-white/10 px-2.5 py-1 rounded-full">
              {liveWeather.temperatureC}°C · {liveWeather.descriptionIt} ({liveWeather.source})
            </span>
          ) : (
            <span className="bg-white/10 px-2.5 py-1 rounded-full">
              {isOnline ? 'Meteo live non caricato' : 'Offline — meteo live non disponibile'}
            </span>
          )}
        </div>
      </header>

      {/* Prossima Tappa (1-tap navigation!) */}
      <section className="rounded-2xl bg-[#FFFDF9] border border-[#E5DCD0] p-4 shadow-sm">
        <div className="flex items-center justify-between gap-2 mb-2">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#7A1E2E] flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            Prossima tappa · Giorno {activeDay.dayNumber}
          </h2>
          <button
            type="button"
            onClick={() => onGoToDay(activeDay.date, nextStop?.id)}
            className="text-xs font-semibold text-[#7A1E2E] inline-flex items-center gap-0.5 hover:underline"
          >
            Vedi giornata <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {nextStop ? (
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-mono-tabular text-base font-bold text-[#7A1E2E]">
                {nextStop.time}
              </span>
              <h3 className="font-serif-editorial text-xl font-semibold text-[#211B19]">
                {nextStop.name}
              </h3>
            </div>
            <p className="text-sm text-[#5C524D] mt-1">{nextStop.description}</p>
            <p className="text-xs text-[#5C524D] mt-1">{nextStop.address}</p>

            <div className="grid grid-cols-2 gap-2 mt-3">
              <a
                href={nextStop.walking}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target flex items-center justify-center gap-2 rounded-xl bg-[#7A1E2E] text-white text-sm font-semibold px-3 py-2.5 hover:bg-[#5E1522]"
              >
                <Navigation className="w-4 h-4" />
                Maps (A piedi)
              </a>
              <a
                href={nextStop.citymapper}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target flex items-center justify-center gap-2 rounded-xl bg-[#4A6652] text-white text-sm font-semibold px-3 py-2.5 hover:opacity-90"
              >
                <TrainFront className="w-4 h-4" />
                Citymapper
              </a>
            </div>
          </div>
        ) : (
          <p className="text-sm text-[#4A6652] font-medium">
            Tutte le tappe di questa giornata sono state completate o gestite!
          </p>
        )}
      </section>

      {/* Tempo disponibile: 15 / 30 / 60 min */}
      <section className="rounded-2xl bg-[#FFFDF9] border border-[#E5DCD0] p-4 shadow-sm space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#7A1E2E] flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            Tempo libero adesso
          </h2>
          <div className="flex gap-1.5">
            {([15, 30, 60] as const).map((min) => (
              <button
                key={min}
                type="button"
                onClick={() => setFreeMinutes(min)}
                className={`min-h-[38px] px-3 rounded-xl text-xs font-bold border transition-colors ${
                  freeMinutes === min
                    ? 'bg-[#7A1E2E] text-white border-[#7A1E2E]'
                    : 'bg-[#FAF7F2] text-[#211B19] border-[#E5DCD0]'
                }`}
              >
                {min} min
              </button>
            ))}
          </div>
        </div>

        {/* Optional Geolocation or Manual Origin */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <button
            type="button"
            onClick={requestGeo}
            className="touch-target inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#E5DCD0] bg-[#FAF7F2] font-semibold text-[#211B19]"
          >
            <LocateFixed className="w-4 h-4 text-[#4A6652]" />
            {geoCoords ? 'Posizione attiva' : 'Usa posizione (opzionale)'}
          </button>

          <select
            aria-label="Punto di partenza manuale"
            value={manualOriginId}
            onChange={(e) => {
              setManualOriginId(e.target.value);
              setGeoCoords(null);
            }}
            className="touch-target flex-1 min-w-[160px] rounded-xl border border-[#E5DCD0] bg-[#FAF7F2] px-3 py-2 text-xs text-[#211B19]"
          >
            <option value="">Partenza: tappa corrente ({nextStop?.name ?? 'inizio'})</option>
            {activeDay.activities.map((a) => (
              <option key={a.id} value={a.id}>
                Da: {a.name}
              </option>
            ))}
          </select>
        </div>

        {geoError && <p className="text-xs text-[#7A1E2E]">{geoError}</p>}

        {freeTimeAnalysis.nextBooking && (
          <p className="text-xs text-[#5C524D]">
            Prossimo vincolo: <strong>{freeTimeAnalysis.nextBooking.name}</strong> alle{' '}
            <span className="font-mono-tabular">{freeTimeAnalysis.nextBooking.time}</span>.
          </p>
        )}

        {freeTimeAnalysis.recommendPause ? (
          <div className="rounded-xl bg-[#F3ECE1] p-3 flex items-start gap-2.5 text-xs text-[#211B19]">
            <Coffee className="w-4 h-4 text-[#7A1E2E] shrink-0 mt-0.5" />
            <div>
              <strong>Meglio una pausa al caldo!</strong> Con {freeMinutes} minuti (inclusi cammino e margine di sicurezza) conviene fermarsi per un tè, una cioccolata calda o riposare prima della prossima tappa.
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            {freeTimeAnalysis.suggestions.slice(0, 3).map((s) => (
              <div
                key={s.activity.id}
                className="rounded-xl border border-[#E5DCD0] bg-[#FAF7F2] p-3 flex items-center justify-between gap-2"
              >
                <div className="min-w-0">
                  <div className="font-semibold text-sm text-[#211B19] truncate">
                    {s.activity.name}
                  </div>
                  <div className="text-[11px] text-[#4A6652]">{s.reason}</div>
                </div>
                <a
                  href={s.activity.walking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target shrink-0 inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-[#7A1E2E] text-white text-xs font-semibold"
                >
                  <Navigation className="w-3.5 h-3.5" /> Vai
                </a>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Meteo Manuale per Oggi */}
      <section className="rounded-2xl bg-[#FFFDF9] border border-[#E5DCD0] p-4 shadow-sm space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-[#7A1E2E] flex items-center gap-1.5">
          <Umbrella className="w-4 h-4" />
          Meteo manuale · Giorno {activeDay.dayNumber}
        </h2>
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
              onClick={() => onSetWeather(activeDay.date, opt.id)}
              className={`touch-target rounded-xl border px-2 py-2 text-xs font-semibold transition-colors ${
                currentWeatherMode === opt.id
                  ? 'bg-[#4A6652] text-white border-[#4A6652]'
                  : 'bg-[#FAF7F2] text-[#211B19] border-[#E5DCD0]'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {currentWeatherMode !== 'dry' && (
          <div className="rounded-xl bg-[#F6EEDB] border border-[#DFC99B] p-3 text-xs text-[#211B19] space-y-1">
            <div className="font-semibold text-[#6E4F16]">
              Piano alternativo ({currentWeatherMode === 'light_rain' ? 'pioggia lieve' : 'pioggia forte'}):
            </div>
            <p>{currentWeatherMode === 'light_rain' ? activeDay.rain.light : activeDay.rain.heavy}</p>
            <p className="text-[11px] text-[#5C524D] flex items-center gap-1 pt-1">
              <AlertTriangle className="w-3.5 h-3.5 text-[#9A7432]" />
              Le prenotazioni confermate non vengono spostate automaticamente.
            </p>
          </div>
        )}
      </section>

      {/* Stato Prenotazioni & Budget rapido */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => onGoToSaved('bookings')}
          className="text-left rounded-2xl bg-[#FFFDF9] border border-[#E5DCD0] p-4 shadow-sm hover:border-[#7A1E2E]/40 transition-colors"
        >
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#7A1E2E]">
            <span className="flex items-center gap-1.5">
              <CalendarCheck className="w-4 h-4" /> Prenotazioni
            </span>
            <ChevronRight className="w-4 h-4" />
          </div>
          <div className="mt-2 space-y-1 text-xs text-[#211B19]">
            <div>• {confirmedCount} confermate</div>
            <div className="text-[#6E4F16]">• {unknownTimeCount} con orario da voucher</div>
            <div className="text-[#7A1E2E]">• {toBookCount} da prenotare (Opéra, Jungle)</div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => onGoToSaved('budget')}
          className="text-left rounded-2xl bg-[#FFFDF9] border border-[#E5DCD0] p-4 shadow-sm hover:border-[#7A1E2E]/40 transition-colors"
        >
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#7A1E2E]">
            <span className="flex items-center gap-1.5">
              <Wallet className="w-4 h-4" /> Budget residuo
            </span>
            <ChevronRight className="w-4 h-4" />
          </div>
          <div className="mt-2">
            <div className="font-mono-tabular text-lg font-bold text-[#211B19]">
              {actualSpentEur.toFixed(2)} € <span className="text-xs font-normal text-[#5C524D]">spesi</span>
            </div>
            <div className="text-xs text-[#5C524D]">
              Stima residua: {residualEstimatedEur.toFixed(2)} € (target 400–500 €)
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

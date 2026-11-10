import React, { useState, useRef, useEffect } from 'react';
import { Stop, DayItinerary, getCitymapperUrl } from '../data/itineraryData';
import { fetchParisWeather, WeatherData } from '../services/weatherService';
import { handleImageError } from '../utils/images';
import confetti from 'canvas-confetti';
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Heart, 
  CheckCircle2, 
  Circle, 
  Navigation, 
  Compass, 
  Sparkles, 
  Ticket, 
  ExternalLink,
  MapPin,
  List,
  Trash2,
  Sunset,
  Droplets,
  Calendar,
  Plus,
  X,
  Info
} from 'lucide-react';

interface StopStoryViewerProps {
  stops: Stop[];
  currentDay: DayItinerary;
  allDays: DayItinerary[];
  selectedDayId: string;
  onSelectDay: (id: string) => void;
  onPrevDay: () => void;
  onNextDay: () => void;
  hasPrevDay: boolean;
  hasNextDay: boolean;
  completedStops: Record<string, boolean>;
  onToggleComplete: (id: string) => void;
  onSwitchToList: () => void;
  onAddStop: () => void;
  onDeleteStop?: (id: string) => void;
  initialIndex?: number;
}

export const StopStoryViewer: React.FC<StopStoryViewerProps> = ({
  stops,
  currentDay,
  allDays,
  selectedDayId,
  onSelectDay,
  onPrevDay,
  onNextDay,
  hasPrevDay,
  hasNextDay,
  completedStops,
  onToggleComplete,
  onSwitchToList,
  onAddStop,
  onDeleteStop,
  initialIndex = 0
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    if (initialIndex >= 0 && initialIndex < stops.length) {
      return initialIndex;
    }
    return 0;
  });

  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isDayPickerOpen, setIsDayPickerOpen] = useState<boolean>(false);
  const [isWeatherModalOpen, setIsWeatherModalOpen] = useState<boolean>(false);
  const [weather, setWeather] = useState<WeatherData | null>(null);

  // Touch swipe handling
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  // Caricamento meteo live per Parigi
  useEffect(() => {
    let mounted = true;
    fetchParisWeather().then((data) => {
      if (mounted) setWeather(data);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const currentStop = stops[currentIndex] || stops[0];
  const isCompleted = !!completedStops[currentStop?.id];

  const citymapperUrl = currentStop ? getCitymapperUrl(
    currentStop.coordinates.lat,
    currentStop.coordinates.lng,
    currentStop.title,
    currentStop.address
  ) : '#';

  const gmapsWalkingUrl = currentStop 
    ? `https://www.google.com/maps/dir/?api=1&destination=${currentStop.coordinates.lat},${currentStop.coordinates.lng}&travelmode=walking`
    : '#';

  const handleNext = () => {
    if (currentIndex < stops.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsExpanded(false);
    } else if (hasNextDay) {
      // Se è l'ultima tappa del giorno e si va avanti, passa al giorno successivo!
      onNextDay();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setIsExpanded(false);
    } else if (hasPrevDay) {
      // Se è la prima tappa del giorno e si va indietro, passa al giorno prima!
      onPrevDay();
    }
  };

  // Touch Swipe Gesture per smartphone (sensibile e fluido)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const deltaY = e.changedTouches[0].clientY - touchStartYRef.current;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  const handleCheckboxClick = () => {
    if (!isCompleted) {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.75 },
        colors: ['#f43f5e', '#fb7185', '#fbbf24', '#38bdf8']
      });
    }
    if (currentStop) {
      onToggleComplete(currentStop.id);
    }
  };

  if (!currentStop) {
    return (
      <div className="h-[calc(100dvh-4.25rem)] flex items-center justify-center p-6 text-center text-slate-400">
        Nessuna tappa presente per questo giorno.
      </div>
    );
  }

  return (
    <div 
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[calc(100dvh-max(4.25rem,calc(env(safe-area-inset-bottom)+3.5rem)))] overflow-hidden bg-slate-950 flex flex-col select-none"
    >
      
      {/* 1. SFONDO FOTOGRAFICO A TUTTO SCHERMO */}
      <img
        src={currentStop.image}
        alt={currentStop.title}
        onError={handleImageError}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
          isCompleted ? 'grayscale contrast-75 brightness-75' : 'brightness-90'
        }`}
      />

      {/* GRADIENTE SUPERIORE (PER CONTRASTO DYNAMIC ISLAND, STATUS BAR & METEO) */}
      <div className="absolute top-0 left-0 right-0 h-56 bg-gradient-to-b from-black/95 via-black/60 to-transparent pointer-events-none z-10" />

      {/* GRADIENTE INFERIORE (PER CONTRASTO TESTI E PULSANTI) */}
      <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/85 to-transparent pointer-events-none z-10" />

      {/* 2. TOP OVERLAY: ADATTATO A DYNAMIC ISLAND & NOTCH */}
      <div className="relative z-30 pt-[max(0.75rem,calc(env(safe-area-inset-top)+0.35rem))] px-3 space-y-2.5">
        
        {/* Barre di avanzamento Story (una per ogni tappa del giorno) */}
        <div className="flex items-center gap-1.5 px-0.5">
          {stops.map((s, idx) => {
            const isDone = completedStops[s.id];
            const isCurrent = idx === currentIndex;
            return (
              <div
                key={s.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                  setIsExpanded(false);
                }}
                className="h-1.5 flex-1 rounded-full cursor-pointer transition-all duration-300 overflow-hidden bg-white/25 backdrop-blur-sm"
              >
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    isCurrent
                      ? 'bg-gradient-to-r from-rose-400 to-amber-300 w-full shadow-sm shadow-amber-400'
                      : isDone
                      ? 'bg-emerald-400 w-full'
                      : idx < currentIndex
                      ? 'bg-white/70 w-full'
                      : 'w-0'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Floating Island Header: Giorno, Meteo Live, + Tappa, Elenco */}
        <div className="flex items-center justify-between gap-1.5">
          
          {/* Selettore Giorno Compatto con Frecce Rapide */}
          <div className="flex items-center bg-black/60 backdrop-blur-md border border-white/20 rounded-2xl p-0.5 shadow-lg">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrevDay();
              }}
              disabled={!hasPrevDay}
              className={`p-1 rounded-xl transition-all ${
                hasPrevDay ? 'text-white hover:bg-white/10 active:scale-90' : 'text-white/20 cursor-not-allowed'
              }`}
              title="Giorno prima"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsDayPickerOpen(true);
              }}
              className="px-2 py-1 text-xs font-black text-white flex items-center gap-1 active:scale-95 transition-all"
            >
              <Calendar className="w-3.5 h-3.5 text-rose-400" />
              <span>Giorno {currentDay.dayNumber}</span>
              <span className="text-[10px] text-amber-300 font-normal">({currentDay.dayOfWeek.slice(0, 3)})</span>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onNextDay();
              }}
              disabled={!hasNextDay}
              className={`p-1 rounded-xl transition-all ${
                hasNextDay ? 'text-white hover:bg-white/10 active:scale-90' : 'text-white/20 cursor-not-allowed'
              }`}
              title="Giorno dopo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Meteo Live Pill (Cliccabile per aprire le previsioni a ore) */}
          {weather && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsWeatherModalOpen(true);
              }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-2xl bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-lg active:scale-95 transition-all"
              title="Tocca per vedere il meteo orario di Parigi"
            >
              <span>{weather.icon}</span>
              <span>{weather.currentTemp}°</span>
              <span className="text-amber-300 text-[11px] font-medium flex items-center gap-0.5">
                <Sunset className="w-3 h-3 text-amber-400" />
                <span>{weather.sunsetTime}</span>
              </span>
            </button>
          )}

          {/* Azioni Rapide a Destra: + Tappa & Switch Elenco */}
          <div className="flex items-center gap-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddStop();
              }}
              className="p-1.5 rounded-2xl bg-rose-600/80 hover:bg-rose-600 backdrop-blur-md border border-rose-400/40 text-white shadow-lg active:scale-95 transition-all"
              title="Aggiungi tappa al volo"
            >
              <Plus className="w-4 h-4" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onSwitchToList();
              }}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-2xl bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-xs font-bold border border-white/20 shadow-lg active:scale-95 transition-all"
              title="Vedi tutte le tappe in elenco"
            >
              <List className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Elenco</span>
            </button>
          </div>

        </div>

      </div>

      {/* 3. AREE TAP TRASPARENTI AI LATI DELLO SCHERMO PER CAMBIARE TAPPA */}
      <div 
        onClick={handlePrev}
        className="absolute top-20 left-0 bottom-60 w-1/4 z-20 cursor-pointer"
        title="Tocca a sinistra: Tappa precedente"
      />
      <div 
        onClick={handleNext}
        className="absolute top-20 right-0 bottom-60 w-1/4 z-20 cursor-pointer"
        title="Tocca a destra: Tappa successiva"
      />

      {/* 4. CONTENUTO INFERIORE AMPIO E SUPER LEGGIBILE A TUTTO SCHERMO */}
      <div className="relative z-30 mt-auto p-4 sm:p-5 space-y-3 max-h-[68vh] overflow-y-auto no-scrollbar">
        
        {/* Riga Badge: Numero Tappa + Orario + Fatto + Elimina se custom */}
        <div className="flex items-center justify-between gap-2">
          
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-black bg-rose-500 text-white shadow-lg border border-white/20">
              Tappa {currentIndex + 1} di {stops.length}
            </span>

            {currentStop.time && (
              <span className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold backdrop-blur-md shadow-md ${
                currentStop.isFixedTime
                  ? 'bg-rose-500/90 text-white border border-rose-300 animate-pulse'
                  : 'bg-black/70 text-slate-200 border border-white/20'
              }`}>
                <Clock className="w-3.5 h-3.5 text-amber-300" />
                <span>{currentStop.time}</span>
                {currentStop.isFixedTime && <span className="text-[9px] uppercase tracking-wider ml-0.5">• FISSO</span>}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            {/* Tasto Elimina per tappe custom aggiunte al volo */}
            {currentStop.id.startsWith('custom-') && onDeleteStop && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (confirm('Vuoi rimuovere questa tappa aggiunta?')) {
                    onDeleteStop(currentStop.id);
                    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
                  }
                }}
                className="p-1.5 rounded-full bg-rose-600/90 hover:bg-rose-600 text-white shadow-lg active:scale-90 border border-rose-400"
                title="Elimina tappa aggiunta"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Pulsante Spunta Fatto */}
            <button
              onClick={handleCheckboxClick}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black backdrop-blur-md transition-all active:scale-90 shadow-xl border ${
                isCompleted
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-extrabold'
                  : 'bg-black/70 text-white border-white/30 hover:border-white/50'
              }`}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-slate-950" />
                  <span>Fatto! ✓</span>
                </>
              ) : (
                <>
                  <Circle className="w-4 h-4 text-slate-400" />
                  <span>Segna fatto</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Titolo e Sottotitolo (Grande e nitido) */}
        <div>
          <h2 className={`text-2xl sm:text-3xl font-black text-white leading-tight drop-shadow-lg ${
            isCompleted ? 'line-through text-slate-400' : ''
          }`}>
            {currentStop.title}
          </h2>
          {currentStop.subtitle && (
            <p className="text-xs sm:text-sm font-semibold text-amber-300 flex items-center gap-1.5 mt-1 drop-shadow">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{currentStop.subtitle}</span>
            </p>
          )}
        </div>

        {/* Chicca Romantica per Due */}
        {currentStop.romanticTip && (
          <div className="p-3 rounded-2xl bg-rose-950/60 border border-rose-500/40 text-xs sm:text-sm text-rose-100 flex items-start gap-2.5 backdrop-blur-md shadow-lg">
            <Heart className="w-4 h-4 text-rose-400 shrink-0 mt-0.5 fill-rose-500/30" />
            <div className="leading-relaxed">
              <strong className="text-rose-300 font-bold">Momento per voi: </strong>
              <span>{currentStop.romanticTip}</span>
            </div>
          </div>
        )}

        {/* Descrizione Principale */}
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed drop-shadow-sm">
          {currentStop.description}
        </p>

        {/* Box Dettagli / Biglietti / Under 26 (Espandibile se serve) */}
        {isExpanded && (
          <div className="p-3.5 rounded-2xl bg-slate-900/95 border border-slate-700 space-y-2.5 text-xs animate-fade-in shadow-2xl backdrop-blur-xl">
            {currentStop.under26Info && (
              <div className="text-emerald-300 flex items-start gap-1.5 font-semibold bg-emerald-950/40 p-2 rounded-xl border border-emerald-500/30">
                <Ticket className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Under 26 UE:</strong> {currentStop.under26Info}</span>
              </div>
            )}
            {currentStop.bookingUrl && (
              <a
                href={currentStop.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{currentStop.bookingLabel || 'Prenota / Info Ufficiali'}</span>
              </a>
            )}
            {currentStop.address && (
              <div className="text-slate-300 flex items-center gap-1.5 pt-1">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>{currentStop.address}</span>
              </div>
            )}
            {currentStop.metroStop && (
              <div className="text-slate-300 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Metro: <strong>{currentStop.metroStop}</strong></span>
              </div>
            )}
          </div>
        )}

        {/* PULSANTI DI NAVIGAZIONE A PIEDI & METRO (Grandi e facili da premere col pollice) */}
        <div className="pt-1 flex items-center gap-2">
          <a
            href={gmapsWalkingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-3 rounded-2xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-500 hover:to-sky-600 active:scale-95 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-sky-950/50"
          >
            <Navigation className="w-4 h-4 text-sky-200" />
            <span>🚶 A piedi (Maps)</span>
          </a>

          <a
            href={citymapperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-3 rounded-2xl bg-[#288330] hover:bg-[#288330]/90 active:scale-95 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-emerald-950/50"
          >
            <Compass className="w-4 h-4 text-white" />
            <span>🚇 Metro (Citymapper)</span>
          </a>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-3 rounded-2xl bg-black/60 hover:bg-black/80 backdrop-blur-md text-slate-200 border border-white/20 text-xs font-bold transition-all active:scale-95"
            title="Dettagli e note"
          >
            {isExpanded ? <X className="w-4 h-4" /> : <Info className="w-4 h-4" />}
          </button>
        </div>

        {/* Barra di Navigazione e Indicatori a Pallini */}
        <div className="flex items-center justify-between text-xs text-slate-400 pt-1 pb-1">
          <button
            onClick={handlePrev}
            className="flex items-center gap-1 font-bold text-slate-300 hover:text-white active:scale-90 transition-all"
          >
            <ChevronLeft className="w-4 h-4 text-slate-400" />
            <span>{currentIndex === 0 ? 'Giorno prec' : 'Precedente'}</span>
          </button>

          {/* Indicatori a pallini minimali */}
          <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            {stops.map((_, i) => (
              <span
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(i);
                }}
                className={`block rounded-full transition-all duration-300 cursor-pointer ${
                  i === currentIndex
                    ? 'w-4 h-1.5 bg-rose-400'
                    : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex items-center gap-1 font-bold text-rose-400 hover:text-rose-300 active:scale-90 transition-all"
          >
            <span>{currentIndex === stops.length - 1 ? 'Giorno dopo' : 'Successivo'}</span>
            <ChevronRight className="w-4 h-4 text-rose-400" />
          </button>
        </div>

      </div>

      {/* MODAL SELETTORE DEI GIORNI RAPIDO (DAL FLOATING HEADER) */}
      {isDayPickerOpen && (
        <div 
          onClick={() => setIsDayPickerOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-3 pb-[max(1rem,calc(env(safe-area-inset-bottom)+0.75rem))] animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-3xl bg-slate-900 border border-slate-700 p-4 space-y-3 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-sm font-bold text-white flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-rose-400" />
                <span>Seleziona il Giorno</span>
              </span>
              <button 
                onClick={() => setIsDayPickerOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-1.5 max-h-[60vh] overflow-y-auto">
              {allDays.map((d) => {
                const isCurrent = d.id === selectedDayId;
                const totalStops = d.stops.length;
                const doneCount = d.stops.filter((s) => completedStops[s.id]).length;

                return (
                  <button
                    key={d.id}
                    onClick={() => {
                      onSelectDay(d.id);
                      setIsDayPickerOpen(false);
                    }}
                    className={`w-full p-3 rounded-2xl flex items-center justify-between text-left transition-all border ${
                      isCurrent
                        ? 'bg-gradient-to-r from-rose-600/30 to-amber-600/20 border-rose-500/60 text-white font-bold'
                        : 'bg-slate-850 hover:bg-slate-800 border-slate-800 text-slate-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-rose-400">{d.dayOfWeek}</span>
                        <span className="text-xs text-white font-bold">{d.dateStr}</span>
                      </div>
                      <span className="text-[11px] text-amber-200 block mt-0.5 truncate max-w-[200px]">
                        {d.dayNumber === 2 ? '🏰 Disneyland Paris' : d.title}
                      </span>
                    </div>

                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                      {doneCount}/{totalStops} tappe
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* MODAL METEO ORARIO IN TEMPO REALE */}
      {isWeatherModalOpen && weather && (
        <div 
          onClick={() => setIsWeatherModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-3 pb-[max(1rem,calc(env(safe-area-inset-bottom)+0.75rem))] animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-3xl bg-slate-900 border border-slate-700 p-4 space-y-3 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{weather.icon}</span>
                <div>
                  <h4 className="text-sm font-bold text-white">Meteo Live a Parigi</h4>
                  <span className="text-xs text-slate-400">{weather.weatherLabel} • {weather.currentTemp}°C</span>
                </div>
              </div>
              <button 
                onClick={() => setIsWeatherModalOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-amber-950/30 border border-amber-500/20 text-amber-200 flex items-center gap-2">
                <Sunset className="w-4 h-4 text-amber-400" />
                <div>
                  <span className="block text-[10px] text-slate-400">Tramonto oggi</span>
                  <span className="font-bold">{weather.sunsetTime}</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-sky-950/30 border border-sky-500/20 text-sky-200 flex items-center gap-2">
                <Droplets className="w-4 h-4 text-sky-400" />
                <div>
                  <span className="block text-[10px] text-slate-400">Prob. Pioggia</span>
                  <span className="font-bold">{weather.rainProbability}%</span>
                </div>
              </div>
            </div>

            {weather.hourly && weather.hourly.length > 0 && (
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-sky-400" />
                  <span>Previsioni Prossime Ore</span>
                </span>
                
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                  {weather.hourly.map((h, i) => (
                    <div 
                      key={i} 
                      className="shrink-0 p-2 rounded-xl bg-slate-800 border border-slate-700/80 flex flex-col items-center min-w-[56px] text-center"
                    >
                      <span className="text-[10px] font-bold text-slate-400">{h.timeStr}</span>
                      <span className="text-base my-0.5">{h.icon}</span>
                      <span className="text-xs font-bold text-white">{h.temp}°</span>
                      {h.rainProb > 0 && (
                        <span className="text-[9px] text-sky-300 flex items-center gap-0.5 mt-0.5">
                          <Droplets className="w-2 h-2 text-sky-400" />
                          <span>{h.rainProb}%</span>
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={() => setIsWeatherModalOpen(false)}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-bold text-xs"
            >
              Chiudi
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
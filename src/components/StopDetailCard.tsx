import React, { useState } from 'react';
import {
  CheckCircle2,
  SkipForward,
  ChevronDown,
  ChevronUp,
  Navigation,
  TrainFront,
  MapPin,
  Heart,
  Clock,
  Umbrella,
  Sparkles,
  Camera,
  ExternalLink,
  Info,
  AlertCircle,
} from 'lucide-react';
import { Activity, StopCompletionState, WeatherMode } from '../types/travel';

interface StopDetailCardProps {
  activity: Activity;
  completionState: StopCompletionState;
  isFavorite: boolean;
  weatherMode: WeatherMode;
  onSetCompletion: (id: string, state: StopCompletionState) => void;
  onToggleFavorite: (id: string) => void;
  defaultExpanded?: boolean;
}

const STATUS_BADGE: Record<
  Activity['status'],
  { label: string; cls: string }
> = {
  confirmed: {
    label: 'Confermato',
    cls: 'bg-[#EBF1EC] text-[#2F5239] border-[#BBD0C0]',
  },
  booked_time_unknown: {
    label: 'Prenotato · Orario da voucher',
    cls: 'bg-[#F6EEDB] text-[#6E4F16] border-[#DFC99B]',
  },
  to_book: {
    label: 'Da prenotare',
    cls: 'bg-[#FBEAE8] text-[#7A1E2E] border-[#E7B7B2]',
  },
  planned: {
    label: 'Pianificato',
    cls: 'bg-[#F3ECE1] text-[#4B413C] border-[#DDD1C2]',
  },
  optional: {
    label: 'Facoltativo',
    cls: 'bg-[#FAF7F2] text-[#5C524D] border-[#E5DCD0]',
  },
};

const WEATHER_BADGE: Record<Activity['weather'], string> = {
  indoor: 'Al coperto',
  outdoor: 'All’aperto',
  mixed: 'Misto',
};

export const StopDetailCard: React.FC<StopDetailCardProps> = ({
  activity,
  completionState,
  isFavorite,
  weatherMode,
  onSetCompletion,
  onToggleFavorite,
  defaultExpanded = false,
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const badge = STATUS_BADGE[activity.status];
  const isCompleted = completionState === 'completed';
  const isSkipped = completionState === 'skipped';

  const rainWarning =
    weatherMode === 'heavy_rain' && activity.weather === 'outdoor'
      ? 'Esposto a pioggia forte: valuta alternativa al coperto.'
      : weatherMode === 'light_rain' && activity.weather === 'outdoor'
      ? 'All’aperto: porta ombrello o poncho.'
      : null;

  const photoSrc = activity.photo.localPath || activity.photo.url;

  return (
    <article
      className={`rounded-2xl border transition-colors ${
        isCompleted
          ? 'bg-[#EBF1EC]/55 border-[#BBD0C0]'
          : isSkipped
          ? 'bg-[#F3ECE1]/60 border-[#DDD1C2] opacity-75'
          : 'bg-[#FFFDF9] border-[#E5DCD0] shadow-sm'
      }`}
    >
      {/* Compact Header (Always visible) */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="font-mono-tabular text-sm font-semibold text-[#7A1E2E]">
                {activity.time}
              </span>
              <span className="text-[11px] text-[#5C524D] font-medium">
                {activity.timeStatus === 'user_confirmed' ? '(confermato)' : '(proposta)'}
              </span>
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${badge.cls}`}
              >
                {badge.label}
              </span>
            </div>

            <h3
              className={`font-serif-editorial text-lg font-semibold leading-snug ${
                isCompleted || isSkipped ? 'line-through text-[#5C524D]' : 'text-[#211B19]'
              }`}
            >
              {activity.name}
            </h3>

            <p className="text-sm text-[#5C524D] mt-1 leading-relaxed">
              {activity.description}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onToggleFavorite(activity.id)}
            aria-label={isFavorite ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
            className="touch-target flex items-center justify-center rounded-xl border border-[#E5DCD0] bg-[#FAF7F2] text-[#7A1E2E] hover:bg-[#F3ECE1]"
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-[#7A1E2E]' : ''}`} />
          </button>
        </div>

        {/* Meta pills */}
        <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-[#5C524D]">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-[#F3ECE1]">
            <Clock className="w-3.5 h-3.5 text-[#7A1E2E]" />
            {activity.durationMinutes > 0 ? `${activity.durationMinutes} min` : 'Orario fisso'}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-[#F3ECE1]">
            <Umbrella className="w-3.5 h-3.5 text-[#4A6652]" />
            {WEATHER_BADGE[activity.weather]}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-[#F3ECE1] capitalize">
            Priorità {activity.priority}
          </span>
        </div>

        {rainWarning && (
          <div className="mt-3 flex items-center gap-2 rounded-xl bg-[#F6EEDB] border border-[#DFC99B] px-3 py-2 text-xs text-[#6E4F16]">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{rainWarning}</span>
          </div>
        )}

        {/* Quick 1-tap actions: Complete, Skip, Expand, Direct Maps/Citymapper */}
        <div className="mt-3 pt-3 border-t border-[#E5DCD0]/70 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() =>
              onSetCompletion(activity.id, isCompleted ? 'pending' : 'completed')
            }
            className={`touch-target inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-colors ${
              isCompleted
                ? 'bg-[#4A6652] text-white border-[#4A6652]'
                : 'bg-[#FAF7F2] text-[#211B19] border-[#E5DCD0] hover:bg-[#EBF1EC]'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            {isCompleted ? 'Completata' : 'Completa'}
          </button>

          <button
            type="button"
            onClick={() =>
              onSetCompletion(activity.id, isSkipped ? 'pending' : 'skipped')
            }
            className={`touch-target inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-colors ${
              isSkipped
                ? 'bg-[#5C524D] text-white border-[#5C524D]'
                : 'bg-[#FAF7F2] text-[#5C524D] border-[#E5DCD0] hover:bg-[#F3ECE1]'
            }`}
          >
            <SkipForward className="w-4 h-4" />
            {isSkipped ? 'Saltata' : 'Salta'}
          </button>

          <a
            href={activity.walking}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-[#7A1E2E] text-white hover:bg-[#5E1522]"
          >
            <Navigation className="w-4 h-4" />
            A piedi
          </a>

          <a
            href={activity.citymapper}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-[#4A6652] text-white hover:opacity-90"
          >
            <TrainFront className="w-4 h-4" />
            Citymapper
          </a>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="touch-target ml-auto inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold text-[#7A1E2E] bg-[#7A1E2E]/8 hover:bg-[#7A1E2E]/15"
          >
            {expanded ? 'Chiudi' : 'Dettagli'}
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Expandable Full Details */}
      {expanded && (
        <div className="px-4 pb-4 pt-2 border-t border-[#E5DCD0] space-y-4">
          {/* Authentic Photo or Explicit Placeholder */}
          {photoSrc ? (
            <figure className="rounded-xl overflow-hidden border border-[#E5DCD0] bg-[#F3ECE1]">
              <img
                src={photoSrc}
                alt={activity.name}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <figcaption className="px-3 py-1.5 text-[11px] text-[#5C524D] bg-[#FAF7F2] flex flex-wrap items-center justify-between gap-1">
                <span>
                  Foto: {activity.photo.author || 'Wikimedia Commons'} ·{' '}
                  {activity.photo.license || 'Licenza libera'}
                </span>
                {activity.photo.commonsUrl && (
                  <a
                    href={activity.photo.commonsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-[#7A1E2E]"
                  >
                    Fonte
                  </a>
                )}
              </figcaption>
            </figure>
          ) : (
            <div className="rounded-xl border border-dashed border-[#D6C9B8] bg-[#FAF7F2] p-3 text-xs text-[#5C524D] flex items-center gap-2">
              <Camera className="w-4 h-4 text-[#9A7432] shrink-0" />
              <span>
                Nessuna foto autentica verificata disponibile offline per questa tappa (stato: da verificare).
              </span>
            </div>
          )}

          {/* History & Curiosities */}
          <div className="space-y-2.5 text-sm">
            <div>
              <h4 className="font-semibold text-[#7A1E2E] text-xs uppercase tracking-wider mb-1">
                Storia breve
              </h4>
              <p className="text-[#211B19] leading-relaxed">{activity.shortHistory}</p>
            </div>

            {activity.whatToSee.length > 0 && (
              <div>
                <h4 className="font-semibold text-[#7A1E2E] text-xs uppercase tracking-wider mb-1">
                  Cosa vedere
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-[#211B19]">
                  {activity.whatToSee.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {activity.curiosities.length > 0 && (
              <div className="rounded-xl bg-[#F3ECE1]/70 p-3">
                <h4 className="font-semibold text-[#7A1E2E] text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Curiosità
                </h4>
                <ul className="space-y-1 text-xs text-[#211B19]">
                  {activity.curiosities.map((c, i) => (
                    <li key={i}>• {c}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-xl bg-[#F6EEDB]/70 border border-[#E5D5B2] p-3 text-xs">
              <span className="font-semibold text-[#6E4F16]">Foto spot: </span>
              <span className="text-[#211B19]">{activity.photoSpot}</span>
            </div>
          </div>

          {/* Practical Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            <div className="rounded-xl bg-[#FAF7F2] border border-[#E5DCD0] p-3">
              <div className="font-semibold text-[#5C524D] mb-0.5">Indirizzo</div>
              <div className="text-[#211B19] font-medium">{activity.address}</div>
              {activity.coordinates && (
                <div className="font-mono-tabular text-[11px] text-[#5C524D] mt-1">
                  {activity.coordinates.lat}, {activity.coordinates.lon}
                </div>
              )}
            </div>

            <div className="rounded-xl bg-[#FAF7F2] border border-[#E5DCD0] p-3">
              <div className="font-semibold text-[#5C524D] mb-0.5">Ingresso e fascia prezzo</div>
              <div className="text-[#211B19] font-medium">{activity.entryAndPrice}</div>
              <div className="text-[11px] text-[#5C524D] mt-1">
                Stato: {activity.priceStatus === 'verified' ? 'Verificato' : activity.priceStatus === 'estimate' ? 'Stima' : activity.priceStatus === 'user_confirmed' ? 'Dato coppia' : 'Da verificare'}
              </div>
            </div>

            <div className="rounded-xl bg-[#FAF7F2] border border-[#E5DCD0] p-3">
              <div className="font-semibold text-[#5C524D] mb-0.5">Orari per la data</div>
              <div className="text-[#211B19] font-medium">{activity.hoursForDate}</div>
              <div className="text-[11px] text-[#5C524D] mt-1">
                Stato: {activity.hoursStatus === 'verified' ? 'Verificato' : 'Da riconfermare'}
              </div>
            </div>

            <div className="rounded-xl bg-[#FAF7F2] border border-[#E5DCD0] p-3 flex flex-col justify-between">
              <div>
                <div className="font-semibold text-[#5C524D] mb-0.5">Navigazione & Sito</div>
                <div className="flex flex-wrap gap-2 mt-1.5">
                  <a
                    href={activity.transit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 underline text-[#7A1E2E] font-medium"
                  >
                    <MapPin className="w-3.5 h-3.5" /> Maps Mezzi
                  </a>
                  {activity.officialUrl && (
                    <a
                      href={activity.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 underline text-[#4A6652] font-medium"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Sito ufficiale
                    </a>
                  )}
                </div>
              </div>
              <div className="text-[10px] text-[#5C524D] mt-2 flex items-center gap-1">
                <Info className="w-3 h-3" /> Fonte: {activity.source} ({activity.verifiedAt})
              </div>
            </div>
          </div>

          {/* Nearby POIs specific to this stop */}
          {activity.nearby.length > 0 && (
            <div className="pt-2 border-t border-[#E5DCD0]">
              <h4 className="font-semibold text-[#7A1E2E] text-xs uppercase tracking-wider mb-2">
                Nei dintorni di questa tappa ({activity.nearby.length})
              </h4>
              <div className="space-y-2">
                {activity.nearby.map((nb) => {
                  const nbImg = nb.photo.localPath || nb.photo.url;
                  return (
                    <div
                      key={nb.id}
                      className="flex items-start gap-3 rounded-xl border border-[#E5DCD0] bg-[#FAF7F2] p-2.5"
                    >
                      {nbImg ? (
                        <img
                          src={nbImg}
                          alt={nb.name}
                          loading="lazy"
                          className="w-16 h-16 rounded-lg object-cover shrink-0 border border-[#E5DCD0]"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-lg bg-[#F3ECE1] border border-[#E5DCD0] flex items-center justify-center shrink-0">
                          <MapPin className="w-5 h-5 text-[#9A7432]" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h5 className="font-semibold text-sm text-[#211B19] truncate">
                            {nb.name}
                          </h5>
                          <span className="text-[11px] font-medium text-[#4A6652] shrink-0">
                            {nb.distanceLabel}
                          </span>
                        </div>
                        <p className="text-xs text-[#5C524D] mt-0.5 line-clamp-2">
                          {nb.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-1.5">
                          <a
                            href={nb.walking}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-semibold text-[#7A1E2E] underline"
                          >
                            Maps a piedi
                          </a>
                          <a
                            href={nb.citymapper}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-semibold text-[#4A6652] underline"
                          >
                            Citymapper
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  );
};

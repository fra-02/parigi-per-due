import { Activity, Coordinates } from '../types/travel';

export const PARIS_TIMEZONE = 'Europe/Paris';

export function getParisNow(): {
  dateStr: string;
  timeStr: string;
  minutesSinceMidnight: number;
  formattedDate: string;
} {
  const now = new Date();
  const dateParts = new Intl.DateTimeFormat('en-CA', {
    timeZone: PARIS_TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(now);

  const timeParts = new Intl.DateTimeFormat('en-GB', {
    timeZone: PARIS_TIMEZONE,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(now);

  const y = dateParts.find((p) => p.type === 'year')?.value ?? '2026';
  const m = dateParts.find((p) => p.type === 'month')?.value ?? '12';
  const d = dateParts.find((p) => p.type === 'day')?.value ?? '07';
  const hh = Number(timeParts.find((p) => p.type === 'hour')?.value ?? '09');
  const mm = Number(timeParts.find((p) => p.type === 'minute')?.value ?? '00');

  const formattedDate = new Intl.DateTimeFormat('it-IT', {
    timeZone: PARIS_TIMEZONE,
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(now);

  return {
    dateStr: `${y}-${m}-${d}`,
    timeStr: `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`,
    minutesSinceMidnight: hh * 60 + mm,
    formattedDate,
  };
}

export function parseTimeToMinutes(time: string): number {
  const [h, m] = time.split(':').map((n) => parseInt(n, 10));
  if (Number.isNaN(h) || Number.isNaN(m)) return 0;
  return h * 60 + m;
}

export function minutesToTimeStr(totalMinutes: number): string {
  const clamped = Math.max(0, Math.min(23 * 60 + 59, Math.round(totalMinutes)));
  const h = Math.floor(clamped / 60);
  const m = clamped % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

export function haversineMeters(a: Coordinates, b: Coordinates): number {
  const R = 6371000;
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);

  const sinDLat = Math.sin(dLat / 2);
  const sinDLon = Math.sin(dLon / 2);
  const h = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon;
  return Math.round(2 * R * Math.asin(Math.sqrt(h)));
}

export function estimateWalkMinutes(meters: number): number {
  // ~70m/min conservative pace in winter / sightseeing
  return Math.max(1, Math.round(meters / 70));
}

export function formatDistanceLabel(meters: number | null): string {
  if (meters === null) return 'Distanza indicativa';
  if (meters < 1000) return `${meters} m (~${estimateWalkMinutes(meters)} min a piedi)`;
  return `${(meters / 1000).toFixed(1)} km (~${estimateWalkMinutes(meters)} min a piedi)`;
}

export function buildMapsSearchUrl(name: string, address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name} ${address}`)}`;
}

export function buildMapsWalkingUrl(
  name: string,
  address: string,
  coords?: Coordinates | null
): string {
  const dest = coords ? `${coords.lat},${coords.lon}` : `${name} ${address}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(dest)}&travelmode=walking`;
}

export function buildMapsTransitUrl(
  name: string,
  address: string,
  coords?: Coordinates | null
): string {
  const dest = coords ? `${coords.lat},${coords.lon}` : `${name} ${address}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(dest)}&travelmode=transit`;
}

export function buildCitymapperUrl(
  name: string,
  address: string,
  coords?: Coordinates | null
): string {
  if (coords) {
    return `https://citymapper.com/directions?endcoord=${coords.lat},${coords.lon}&endname=${encodeURIComponent(name)}`;
  }
  return buildMapsTransitUrl(name, address, null);
}

export interface FreeTimeSuggestion {
  activity: Activity;
  walkMinutes: number;
  totalNeededMinutes: number;
  fitsBeforeNextBooking: boolean;
  reason: string;
}

/**
 * Suggests activities that fit in `availableMinutes` (15/30/60)
 * ensuring duration + walking + 10 min safety margin fits before the next confirmed/booked stop.
 */
export function computeFreeTimeSuggestions(
  dayActivities: Activity[],
  availableMinutes: number,
  currentMinutes: number,
  originCoords: Coordinates | null
): {
  nextBooking: Activity | null;
  minutesToNextBooking: number | null;
  suggestions: FreeTimeSuggestion[];
  recommendPause: boolean;
} {
  const margin = 10;
  const upcomingBookings = dayActivities
    .filter(
      (a) =>
        (a.status === 'confirmed' || a.status === 'booked_time_unknown') &&
        parseTimeToMinutes(a.time) > currentMinutes
    )
    .sort((a, b) => parseTimeToMinutes(a.time) - parseTimeToMinutes(b.time));

  const nextBooking = upcomingBookings[0] ?? null;
  const minutesToNextBooking = nextBooking
    ? parseTimeToMinutes(nextBooking.time) - currentMinutes
    : null;

  const effectiveBudget =
    minutesToNextBooking !== null
      ? Math.min(availableMinutes, minutesToNextBooking)
      : availableMinutes;

  const candidates = dayActivities.filter(
    (a) => a.status === 'optional' || a.status === 'planned'
  );

  const suggestions: FreeTimeSuggestion[] = [];
  for (const act of candidates) {
    let walkMinutes = 8; // indicative fallback
    if (originCoords && act.coordinates) {
      walkMinutes = estimateWalkMinutes(haversineMeters(originCoords, act.coordinates));
    }
    const needed = act.durationMinutes + walkMinutes + margin;
    if (needed <= effectiveBudget) {
      suggestions.push({
        activity: act,
        walkMinutes,
        totalNeededMinutes: needed,
        fitsBeforeNextBooking: true,
        reason: `${act.durationMinutes} min visita + ~${walkMinutes} min cammino + ${margin} min margine`,
      });
    }
  }

  return {
    nextBooking,
    minutesToNextBooking,
    suggestions,
    recommendPause: suggestions.length === 0,
  };
}

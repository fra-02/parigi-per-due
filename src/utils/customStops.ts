import { Stop } from '../data/itineraryData';
import { FALLBACK_IMAGE } from './images';

export function getCustomStopsForDay(dayId: string): Stop[] {
  try {
    const saved = localStorage.getItem(`parigi_custom_stops_${dayId}`);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error(e);
  }
  return [];
}

export function saveCustomStopForDay(
  dayId: string,
  title: string,
  time?: string,
  coords?: { lat: number; lng: number }
): Stop {
  const currentStops = getCustomStopsForDay(dayId);
  const newStop: Stop = {
    id: `custom-${Date.now()}`,
    title: title.trim(),
    subtitle: 'Tappa aggiunta al volo da voi',
    time: time?.trim() || undefined,
    category: 'walk',
    image: FALLBACK_IMAGE,
    description: 'Aggiunta direttamente durante il vostro viaggio a Parigi!',
    coordinates: coords || { lat: 48.8566, lng: 2.3522 },
    address: 'Parigi'
  };

  const updated = [...currentStops, newStop];
  try {
    localStorage.setItem(`parigi_custom_stops_${dayId}`, JSON.stringify(updated));
  } catch (e) {
    console.error(e);
  }

  return newStop;
}

export function deleteCustomStop(dayId: string, stopId: string): void {
  const currentStops = getCustomStopsForDay(dayId);
  const updated = currentStops.filter((s) => s.id !== stopId);
  try {
    localStorage.setItem(`parigi_custom_stops_${dayId}`, JSON.stringify(updated));
  } catch (e) {
    console.error(e);
  }
}

import React, { useEffect, useRef, useState, useMemo } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Navigation, TrainFront, WifiOff, MapPin } from 'lucide-react';
import { Category, DayPlan } from '../types/travel';

interface MapViewProps {
  days: DayPlan[];
  selectedDateFilter: string;
  onSelectDateFilter: (date: string) => void;
}

const CATEGORY_LABELS: Record<'all' | Category, string> = {
  all: 'Tutte',
  monumento: 'Monumenti',
  museo: 'Musei',
  quartiere: 'Quartieri',
  gastronomia: 'Gastronomia',
  disney: 'Disney',
  shopping: 'Shopping',
  trasporto: 'Trasporti',
  hotel: 'Hotel',
};

export const MapView: React.FC<MapViewProps> = ({
  days,
  selectedDateFilter,
  onSelectDateFilter,
}) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  const [categoryFilter, setCategoryFilter] = useState<'all' | Category>('all');
  const [isOnline, setIsOnline] = useState<boolean>(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );
  const [selectedStopId, setSelectedStopId] = useState<string | null>(null);

  useEffect(() => {
    const onOnline = () => setIsOnline(true);
    const onOffline = () => setIsOnline(false);
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);
    return () => {
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    };
  }, []);

  const filteredActivities = useMemo(() => {
    const list = days
      .filter((d) => selectedDateFilter === 'all' || d.date === selectedDateFilter)
      .flatMap((d) => d.activities);

    return list.filter(
      (a) =>
        a.coordinates !== null &&
        (categoryFilter === 'all' || a.category === categoryFilter)
    );
  }, [days, selectedDateFilter, categoryFilter]);

  const selectedActivity = useMemo(
    () => filteredActivities.find((a) => a.id === selectedStopId) ?? filteredActivities[0] ?? null,
    [filteredActivities, selectedStopId]
  );

  // Initialize Leaflet only when online (do not cache OSM tiles offline)
  useEffect(() => {
    if (!isOnline || !mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [48.8566, 2.3522],
        zoom: 12,
        zoomControl: true,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18,
      }).addTo(map);

      markersLayerRef.current = L.layerGroup().addTo(map);
      mapInstanceRef.current = map;
    }

    return () => {
      // Keep instance alive across filter changes; destroy only on unmount
    };
  }, [isOnline]);

  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        markersLayerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!isOnline || !mapInstanceRef.current || !markersLayerRef.current) return;
    const layer = markersLayerRef.current;
    layer.clearLayers();

    const bounds: [number, number][] = [];
    filteredActivities.forEach((act) => {
      if (!act.coordinates) return;
      const latLng: [number, number] = [act.coordinates.lat, act.coordinates.lon];
      bounds.push(latLng);

      const marker = L.circleMarker(latLng, {
        radius: 8,
        fillColor: act.category === 'disney' ? '#9A7432' : '#7A1E2E',
        color: '#FFFDF9',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.92,
      });

      marker.bindTooltip(`${act.time} · ${act.name}`, { direction: 'top' });
      marker.on('click', () => setSelectedStopId(act.id));
      marker.addTo(layer);
    });

    if (bounds.length > 0) {
      mapInstanceRef.current.fitBounds(bounds, { padding: [30, 30], maxZoom: 14 });
    }
  }, [filteredActivities, isOnline]);

  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-[#FFFDF9] border border-[#E5DCD0] p-4 shadow-sm space-y-3">
        <h1 className="font-serif-editorial text-2xl font-semibold text-[#211B19]">
          Mappa delle tappe
        </h1>

        {/* Day filters */}
        <div className="flex gap-1.5 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => onSelectDateFilter('all')}
            className={`min-h-[38px] px-3 rounded-xl text-xs font-semibold shrink-0 border ${
              selectedDateFilter === 'all'
                ? 'bg-[#7A1E2E] text-white border-[#7A1E2E]'
                : 'bg-[#FAF7F2] text-[#211B19] border-[#E5DCD0]'
            }`}
          >
            Tutti i giorni
          </button>
          {days.map((d) => (
            <button
              key={d.date}
              type="button"
              onClick={() => onSelectDateFilter(d.date)}
              className={`min-h-[38px] px-3 rounded-xl text-xs font-semibold shrink-0 border ${
                selectedDateFilter === d.date
                  ? 'bg-[#7A1E2E] text-white border-[#7A1E2E]'
                  : 'bg-[#FAF7F2] text-[#211B19] border-[#E5DCD0]'
              }`}
            >
              G{d.dayNumber} ({d.date.slice(8)}/12)
            </button>
          ))}
        </div>

        {/* Category filters */}
        <div className="flex gap-1.5 overflow-x-auto pb-1">
          {(Object.keys(CATEGORY_LABELS) as ('all' | Category)[]).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategoryFilter(cat)}
              className={`min-h-[36px] px-3 rounded-full text-xs font-medium shrink-0 border ${
                categoryFilter === cat
                  ? 'bg-[#4A6652] text-white border-[#4A6652]'
                  : 'bg-[#FAF7F2] text-[#5C524D] border-[#E5DCD0]'
              }`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>
      </div>

      {/* Map or Offline Fallback */}
      {isOnline ? (
        <div className="rounded-2xl overflow-hidden border border-[#E5DCD0] bg-[#F3ECE1] shadow-sm">
          <div ref={mapContainerRef} className="w-full h-[340px]" />
          <div className="px-3 py-2 text-[11px] text-[#5C524D] bg-[#FAF7F2] border-t border-[#E5DCD0]">
            {filteredActivities.length} pin visualizzati · Tile live OpenStreetMap (non salvate in cache offline).
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-[#DFC99B] bg-[#F6EEDB] p-4 text-xs text-[#6E4F16] flex items-start gap-2.5">
          <WifiOff className="w-4 h-4 shrink-0 mt-0.5" />
          <div>
            <strong>Sei offline:</strong> la mappa interattiva richiede connessione per le tile OpenStreetMap. Puoi comunque consultare tutte le coordinate verificate e i link qui sotto.
          </div>
        </div>
      )}

      {/* Selected Pin Card */}
      {selectedActivity && (
        <div className="rounded-2xl bg-[#FFFDF9] border border-[#7A1E2E]/30 p-4 shadow-sm">
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="font-mono-tabular text-xs font-bold text-[#7A1E2E]">
                {selectedActivity.dayDate.slice(8)}/12 · {selectedActivity.time}
              </span>
              <h2 className="font-serif-editorial text-lg font-semibold text-[#211B19]">
                {selectedActivity.name}
              </h2>
              <p className="text-xs text-[#5C524D]">{selectedActivity.address}</p>
              {selectedActivity.coordinates && (
                <p className="font-mono-tabular text-[11px] text-[#5C524D] mt-0.5">
                  {selectedActivity.coordinates.lat}, {selectedActivity.coordinates.lon}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <a
              href={selectedActivity.walking}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target flex items-center justify-center gap-1.5 rounded-xl bg-[#7A1E2E] text-white text-xs font-semibold py-2"
            >
              <Navigation className="w-4 h-4" /> Maps a piedi
            </a>
            <a
              href={selectedActivity.citymapper}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target flex items-center justify-center gap-1.5 rounded-xl bg-[#4A6652] text-white text-xs font-semibold py-2"
            >
              <TrainFront className="w-4 h-4" /> Citymapper
            </a>
          </div>
        </div>
      )}

      {/* Offline-accessible list of filtered stops */}
      <div className="space-y-2">
        {filteredActivities.map((act) => (
          <button
            key={act.id}
            type="button"
            onClick={() => setSelectedStopId(act.id)}
            className={`w-full text-left rounded-xl border p-3 flex items-center justify-between gap-2 transition-colors ${
              selectedActivity?.id === act.id
                ? 'bg-[#F3ECE1] border-[#7A1E2E]'
                : 'bg-[#FFFDF9] border-[#E5DCD0]'
            }`}
          >
            <div className="min-w-0">
              <div className="text-sm font-semibold text-[#211B19] truncate">
                {act.name}
              </div>
              <div className="text-xs text-[#5C524D] truncate">{act.address}</div>
            </div>
            <MapPin className="w-4 h-4 text-[#7A1E2E] shrink-0" />
          </button>
        ))}
      </div>
    </div>
  );
};

// Servizio di routing reale a piedi (Open Source Routing Machine - 100% Gratuito, NO API Key)
import L from 'leaflet';

const routeCache = new Map<string, [number, number][]>();

export async function fetchWalkingRoute(
  waypoints: { lat: number; lng: number }[]
): Promise<[number, number][]> {
  if (waypoints.length < 2) return [];

  // Se sono troppi punti o siamo a Disneyland (fuori Parigi urbana pedonale), genera linea diretta
  const cacheKey = waypoints.map((p) => `${p.lat.toFixed(4)},${p.lng.toFixed(4)}`).join(';');
  if (routeCache.has(cacheKey)) {
    return routeCache.get(cacheKey)!;
  }

  try {
    // Calcola il percorso tra ogni coppia consecutiva di tappe
    const fullRoute: [number, number][] = [];

    for (let i = 0; i < waypoints.length - 1; i++) {
      const p1 = waypoints[i];
      const p2 = waypoints[i + 1];

      // Se la distanza è oltre 15 km (es. da Parigi a Disney), non fare routing a piedi dettagliato
      const straightDistKm = Math.hypot(p1.lat - p2.lat, p1.lng - p2.lng) * 111;
      if (straightDistKm > 15) {
        fullRoute.push([p1.lat, p1.lng], [p2.lat, p2.lng]);
        continue;
      }

      const pairKey = `${p1.lat.toFixed(4)},${p1.lng.toFixed(4)}-${p2.lat.toFixed(4)},${p2.lng.toFixed(4)}`;
      if (routeCache.has(pairKey)) {
        fullRoute.push(...routeCache.get(pairKey)!);
        continue;
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500); // 3.5s timeout max

      const url = `https://router.project-osrm.org/route/v1/foot/${p1.lng},${p1.lat};${p2.lng},${p2.lat}?overview=full&geometries=geojson`;
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (!res.ok) throw new Error('OSRM error');
      const data = await res.json();

      if (data.routes && data.routes[0]?.geometry?.coordinates) {
        // GeoJSON coordinate sono [lon, lat] -> converti in Leaflet [lat, lon]
        const coords: [number, number][] = data.routes[0].geometry.coordinates.map(
          (c: [number, number]) => [c[1], c[0]]
        );
        routeCache.set(pairKey, coords);
        fullRoute.push(...coords);
      } else {
        fullRoute.push([p1.lat, p1.lng], [p2.lat, p2.lng]);
      }
    }

    routeCache.set(cacheKey, fullRoute);
    return fullRoute;
  } catch (e) {
    // Fallback sicuro su linea diretta tra le tappe in caso di timeout o offline
    return waypoints.map((p) => [p.lat, p.lng]);
  }
}

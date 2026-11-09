// Servizio di ricerca reale su mappa di Parigi tramite OpenStreetMap Nominatim (100% Free, NO API Key)
export interface SearchResult {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  category?: string;
}

export async function searchParisPlaces(query: string): Promise<SearchResult[]> {
  if (!query || query.trim().length < 2) return [];

  const cleanQuery = query.trim();
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(cleanQuery + ', Paris, France')}&addressdetails=1&limit=6&viewbox=2.22,48.92,2.47,48.80&bounded=1`;

  try {
    const res = await fetch(url, {
      headers: {
        'Accept-Language': 'it,fr,en',
      },
    });

    if (!res.ok) throw new Error('Errore ricerca');
    const data = await res.json();

    return data.map((item: any) => {
      // Nome pulito
      const displayName = item.display_name.split(',')[0] || item.name || cleanQuery;
      const subtitle = item.display_name.split(',').slice(1, 3).join(',').trim();

      return {
        id: String(item.place_id || Math.random()),
        name: displayName,
        address: subtitle || 'Parigi',
        lat: parseFloat(item.lat),
        lng: parseFloat(item.lon),
        category: item.type || item.class || 'place'
      };
    });
  } catch (e) {
    console.warn('Errore geocoding:', e);
    return [];
  }
}

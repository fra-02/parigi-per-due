export interface LiveWeatherReport {
  temperatureC: number;
  apparentTemperatureC: number;
  precipitationMm: number;
  weatherCode: number;
  descriptionIt: string;
  fetchedAtIso: string;
  source: string;
}

const WEATHER_CODE_IT: Record<number, string> = {
  0: 'Cielo sereno',
  1: 'Prevalentemente sereno',
  2: 'Parzialmente nuvoloso',
  3: 'Coperto',
  45: 'Nebbia',
  48: 'Nebbia con brina',
  51: 'Pioviggine debole',
  53: 'Pioviggine moderata',
  55: 'Pioviggine intensa',
  61: 'Pioggia debole',
  63: 'Pioggia moderata',
  65: 'Pioggia forte',
  71: 'Neve debole',
  73: 'Neve moderata',
  80: 'Rovesci deboli',
  81: 'Rovesci moderati',
  82: 'Rovesci forti',
  95: 'Temporale',
};

export async function fetchParisLiveWeather(): Promise<LiveWeatherReport | null> {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return null;
  }
  const url =
    'https://api.open-meteo.com/v1/forecast?latitude=48.8566&longitude=2.3522&current=temperature_2m,apparent_temperature,precipitation,weather_code&timezone=Europe%2FParis';
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 5000);
    const res = await fetch(url, { signal: ctrl.signal });
    clearTimeout(timer);
    if (!res.ok) return null;
    const data = await res.json();
    const cur = data?.current;
    if (!cur) return null;
    const code = Number(cur.weather_code ?? 0);
    return {
      temperatureC: Math.round(Number(cur.temperature_2m ?? 0)),
      apparentTemperatureC: Math.round(Number(cur.apparent_temperature ?? 0)),
      precipitationMm: Number(cur.precipitation ?? 0),
      weatherCode: code,
      descriptionIt: WEATHER_CODE_IT[code] ?? 'Condizioni variabili',
      fetchedAtIso: new Date().toISOString(),
      source: 'Open-Meteo (Europe/Paris)',
    };
  } catch {
    return null;
  }
}

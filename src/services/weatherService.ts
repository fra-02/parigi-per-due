export interface WeatherData {
  currentTemp: number;
  weatherCode: number;
  weatherLabel: string;
  icon: string;
  sunsetTime: string;
  sunriseTime: string;
  rainProbability: number;
  maxTemp: number;
  minTemp: number;
}

export function getWeatherInfoFromCode(code: number): { label: string; icon: string } {
  switch (code) {
    case 0:
      return { label: 'Sereno', icon: '☀️' };
    case 1:
    case 2:
      return { label: 'Poco nuvoloso', icon: '🌤️' };
    case 3:
      return { label: 'Nuvoloso', icon: '☁️' };
    case 45:
    case 48:
      return { label: 'Nebbia parigina', icon: '🌫️' };
    case 51:
    case 53:
    case 55:
      return { label: 'Pioggerella leggera', icon: '🌦️' };
    case 61:
    case 63:
    case 65:
      return { label: 'Pioggia', icon: '🌧️' };
    case 71:
    case 73:
    case 75:
      return { label: 'Neve romantica', icon: '❄️' };
    case 80:
    case 81:
    case 82:
      return { label: 'Rovesci sparsi', icon: '🌧️' };
    case 95:
      return { label: 'Temporale', icon: '⛈️' };
    default:
      return { label: 'Variabile', icon: '⛅' };
  }
}

export async function fetchParisWeather(): Promise<WeatherData> {
  try {
    const res = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=48.8566&longitude=2.3522&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max&timezone=Europe%2FParis'
    );
    if (!res.ok) throw new Error('Meteo non disponibile');
    const data = await res.json();

    const currentTemp = Math.round(data.current?.temperature_2m ?? 8);
    const weatherCode = data.current?.weather_code ?? 2;
    const { label, icon } = getWeatherInfoFromCode(weatherCode);

    const todaySunsetRaw = data.daily?.sunset?.[0]; // ISO string es: 2026-11-09T17:15
    const todaySunriseRaw = data.daily?.sunrise?.[0];

    let sunsetTime = '17:05';
    let sunriseTime = '08:15';

    if (todaySunsetRaw) {
      const sunsetDate = new Date(todaySunsetRaw);
      sunsetTime = sunsetDate.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
    }

    if (todaySunriseRaw) {
      const sunriseDate = new Date(todaySunriseRaw);
      sunriseTime = sunriseDate.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
    }

    const rainProbability = data.daily?.precipitation_probability_max?.[0] ?? 20;
    const maxTemp = Math.round(data.daily?.temperature_2m_max?.[0] ?? 9);
    const minTemp = Math.round(data.daily?.temperature_2m_min?.[0] ?? 4);

    return {
      currentTemp,
      weatherCode,
      weatherLabel: label,
      icon,
      sunsetTime,
      sunriseTime,
      rainProbability,
      maxTemp,
      minTemp
    };
  } catch (e) {
    console.warn('Fallback meteo locale attivo:', e);
    // Fallback elegante se offline
    return {
      currentTemp: 7,
      weatherCode: 2,
      weatherLabel: 'Inverno Parigino',
      icon: '⛅',
      sunsetTime: '16:55',
      sunriseTime: '08:20',
      rainProbability: 25,
      maxTemp: 9,
      minTemp: 4
    };
  }
}

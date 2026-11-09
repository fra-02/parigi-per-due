export interface HourlyWeather {
  timeStr: string; // "19:00", "20:00"
  temp: number;
  icon: string;
  label: string;
  rainProb: number;
}

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
  hourly: HourlyWeather[];
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
      return { label: 'Nebbia', icon: '🌫️' };
    case 51:
    case 53:
    case 55:
      return { label: 'Pioggerella', icon: '🌦️' };
    case 61:
    case 63:
    case 65:
      return { label: 'Pioggia', icon: '🌧️' };
    case 71:
    case 73:
    case 75:
      return { label: 'Neve', icon: '❄️' };
    case 80:
    case 81:
    case 82:
      return { label: 'Rovesci', icon: '🌧️' };
    case 95:
      return { label: 'Temporale', icon: '⛈️' };
    default:
      return { label: 'Variabile', icon: '⛅' };
  }
}

export async function fetchParisWeather(): Promise<WeatherData> {
  try {
    const res = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=48.8566&longitude=2.3522&current=temperature_2m,weather_code&hourly=temperature_2m,weather_code,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max&timezone=Europe%2FParis'
    );
    if (!res.ok) throw new Error('Meteo non disponibile');
    const data = await res.json();

    const currentTemp = Math.round(data.current?.temperature_2m ?? 8);
    const weatherCode = data.current?.weather_code ?? 2;
    const { label, icon } = getWeatherInfoFromCode(weatherCode);

    const todaySunsetRaw = data.daily?.sunset?.[0];
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

    // Calcolo prossime 8 ore di previsione oraria in tempo reale
    const hourly: HourlyWeather[] = [];
    if (data.hourly?.time && data.hourly?.temperature_2m) {
      const now = new Date();
      const currentHour = now.getHours();

      // Trova l'indice dell'ora attuale
      for (let i = 0; i < data.hourly.time.length && hourly.length < 7; i++) {
        const itemDate = new Date(data.hourly.time[i]);
        // Considera le ore da adesso in poi per oggi
        if (itemDate >= now || (itemDate.getDate() === now.getDate() && itemDate.getHours() >= currentHour)) {
          const code = data.hourly.weather_code?.[i] ?? 1;
          const { label: hLabel, icon: hIcon } = getWeatherInfoFromCode(code);
          hourly.push({
            timeStr: `${String(itemDate.getHours()).padStart(2, '0')}:00`,
            temp: Math.round(data.hourly.temperature_2m[i]),
            icon: hIcon,
            label: hLabel,
            rainProb: data.hourly.precipitation_probability?.[i] ?? 0
          });
        }
      }
    }

    return {
      currentTemp,
      weatherCode,
      weatherLabel: label,
      icon,
      sunsetTime,
      sunriseTime,
      rainProbability,
      maxTemp,
      minTemp,
      hourly
    };
  } catch (e) {
    console.warn('Fallback meteo locale:', e);
    return {
      currentTemp: 8,
      weatherCode: 2,
      weatherLabel: 'Inverno Parigino',
      icon: '⛅',
      sunsetTime: '16:55',
      sunriseTime: '08:20',
      rainProbability: 20,
      maxTemp: 9,
      minTemp: 4,
      hourly: [
        { timeStr: '19:00', temp: 8, icon: '⛅', label: 'Nuvoloso', rainProb: 15 },
        { timeStr: '20:00', temp: 8, icon: '⛅', label: 'Nuvoloso', rainProb: 15 },
        { timeStr: '21:00', temp: 7, icon: '🌦️', label: 'Pioggerella', rainProb: 35 },
        { timeStr: '22:00', temp: 6, icon: '☁️', label: 'Coperto', rainProb: 20 },
        { timeStr: '23:00', temp: 6, icon: '☁️', label: 'Coperto', rainProb: 10 }
      ]
    };
  }
}

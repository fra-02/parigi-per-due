export type FactStatus = 'user_confirmed' | 'verified' | 'estimate' | 'to_verify';

export type ActivityStatus =
  | 'confirmed'
  | 'booked_time_unknown'
  | 'to_book'
  | 'planned'
  | 'optional';

export type WeatherSuitability = 'indoor' | 'outdoor' | 'mixed';

export type WeatherMode = 'dry' | 'light_rain' | 'heavy_rain';

export type StopCompletionState = 'pending' | 'completed' | 'skipped';

export type Category =
  | 'museo'
  | 'monumento'
  | 'quartiere'
  | 'trasporto'
  | 'gastronomia'
  | 'disney'
  | 'shopping'
  | 'hotel';

export interface Coordinates {
  lat: number;
  lon: number;
}

export interface PhotoMeta {
  status: 'verified' | 'illustrative' | 'to_source';
  url: string | null;
  localPath?: string | null;
  author?: string | null;
  license?: string | null;
  licenseUrl?: string | null;
  commonsUrl?: string | null;
  caption?: string | null;
}

export interface NearbyPlace {
  id: string;
  name: string;
  address: string;
  coordinates: Coordinates | null;
  distanceMeters: number | null;
  distanceLabel: string;
  description: string;
  category: Category;
  photo: PhotoMeta;
  maps: string;
  walking: string;
  transit: string;
  citymapper: string;
  source?: string;
  verifiedAt?: string;
}

export interface Activity {
  id: string;
  dayDate: string;
  time: string;
  timeStatus: 'user_confirmed' | 'indicative';
  durationMinutes: number;
  name: string;
  address: string;
  coordinates: Coordinates | null;
  description: string;
  shortHistory: string;
  curiosities: string[];
  whatToSee: string[];
  photoSpot: string;
  entryAndPrice: string;
  priceStatus: FactStatus;
  hoursForDate: string;
  hoursStatus: FactStatus;
  officialUrl: string | null;
  category: Category;
  weather: WeatherSuitability;
  status: ActivityStatus;
  priority: 'alta' | 'media' | 'bassa';
  nearby: NearbyPlace[];
  photo: PhotoMeta;
  maps: string;
  walking: string;
  transit: string;
  citymapper: string;
  source: string;
  verifiedAt: string;
}

export interface DayPlan {
  date: string;
  dayNumber: number;
  title: string;
  subtitle: string;
  transport: string;
  rain: {
    light: string;
    heavy: string;
  };
  foodIdeas: string[];
  activities: Activity[];
}

export interface MenuTranslationItem {
  fr: string;
  it: string;
  note?: string;
}

export interface RestaurantCard {
  id: string;
  name: string;
  dayDates: string[];
  address: string;
  coordinates: Coordinates | null;
  cuisine: string;
  priceRangePerTwo: string;
  priceStatus: FactStatus;
  nonAlcoholicNote: string;
  hours: string;
  hoursStatus: FactStatus;
  specialties: string[];
  menuHighlights: { fr: string; it: string; price?: string }[];
  alternativesNearby: string[];
  bookingNote: string;
  officialUrl: string | null;
  photo: PhotoMeta;
  maps: string;
  walking: string;
  transit: string;
  citymapper: string;
  source: string;
  verifiedAt: string;
}

export interface BookingRecord {
  id: string;
  title: string;
  dayDate: string;
  activityId?: string;
  status: 'confirmed' | 'booked_time_unknown' | 'to_book';
  confirmedTime: string | null;
  paidAmountEur: number | null;
  referenceNote: string;
  attachmentIds: string[];
}

export interface TicketAttachment {
  id: string;
  bookingId: string;
  fileName: string;
  mimeType: string;
  sizeBytes: number;
  dataUrl: string;
  addedAt: string;
}

export interface ExpenseEntry {
  id: string;
  date: string;
  title: string;
  category: 'cibo' | 'trasporti' | 'ingressi' | 'shopping' | 'extra';
  amountEur: number;
  kind: 'actual' | 'prepaid';
  notes?: string;
}

export interface BudgetEstimateItem {
  id: string;
  date: string;
  label: string;
  estimatedEur: number;
  included: boolean;
}

export interface DiaryEntry {
  id: string;
  date: string;
  title: string;
  text: string;
  mood: string;
  createdAt: string;
}

export interface ChecklistItem {
  id: string;
  group: 'disney' | 'musei' | 'partenza' | 'cibo';
  label: string;
  sublabel?: string;
  done: boolean;
}

export interface AppBackupPayload {
  version: number;
  exportedAt: string;
  stopStates: Record<string, StopCompletionState>;
  favorites: string[];
  weatherByDay: Record<string, WeatherMode>;
  bookings: BookingRecord[];
  expenses: ExpenseEntry[];
  budgetEstimates: BudgetEstimateItem[];
  diary: DiaryEntry[];
  checklist: Record<string, boolean>;
  recoveryFlags: {
    eiffelFriday: boolean;
    montmartreSaturday: boolean;
  };
}

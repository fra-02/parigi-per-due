import React, { useState, useEffect, useMemo } from 'react';
import {
  AppBackupPayload,
  BookingRecord,
  BudgetEstimateItem,
  ChecklistItem,
  DiaryEntry,
  ExpenseEntry,
  StopCompletionState,
  TicketAttachment,
  WeatherMode,
} from './types/travel';
import { ITINERARY_DAYS, RESTAURANTS_DATA } from './data/enrichedItinerary';
import {
  INITIAL_BOOKINGS,
  INITIAL_BUDGET_ESTIMATES,
  INITIAL_CHECKLIST,
} from './data/staticGuides';
import {
  deleteAttachment,
  getAllAttachments,
  loadJson,
  saveAttachment,
  saveJson,
} from './utils/storage';
import { AppTab, BottomNav } from './components/BottomNav';
import { HomeView } from './components/HomeView';
import { DaysView } from './components/DaysView';
import { MapView } from './components/MapView';
import { SavedSubTab, SavedView } from './components/SavedView';

const STORAGE_KEYS = {
  stopStates: 'pad_stop_states_v1',
  favorites: 'pad_favorites_v1',
  weatherByDay: 'pad_weather_v1',
  bookings: 'pad_bookings_v1',
  expenses: 'pad_expenses_v1',
  budgetEstimates: 'pad_estimates_v1',
  checklist: 'pad_checklist_v1',
  diary: 'pad_diary_v1',
  recovery: 'pad_recovery_v1',
};

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>('home');
  const [selectedDate, setSelectedDate] = useState<string>(ITINERARY_DAYS[0].date);
  const [highlightStopId, setHighlightStopId] = useState<string | null>(null);
  const [mapDateFilter, setMapDateFilter] = useState<string>('all');
  const [savedSubTab, setSavedSubTab] = useState<SavedSubTab>('bookings');

  const [stopStates, setStopStates] = useState<Record<string, StopCompletionState>>(() =>
    loadJson(STORAGE_KEYS.stopStates, {})
  );
  const [favorites, setFavorites] = useState<string[]>(() =>
    loadJson(STORAGE_KEYS.favorites, [])
  );
  const [weatherByDay, setWeatherByDay] = useState<Record<string, WeatherMode>>(() =>
    loadJson(STORAGE_KEYS.weatherByDay, {})
  );
  const [bookings, setBookings] = useState<BookingRecord[]>(() =>
    loadJson(STORAGE_KEYS.bookings, INITIAL_BOOKINGS)
  );
  const [expenses, setExpenses] = useState<ExpenseEntry[]>(() =>
    loadJson(STORAGE_KEYS.expenses, [])
  );
  const [budgetEstimates, setBudgetEstimates] = useState<BudgetEstimateItem[]>(() =>
    loadJson(STORAGE_KEYS.budgetEstimates, INITIAL_BUDGET_ESTIMATES)
  );
  const [checklistMap, setChecklistMap] = useState<Record<string, boolean>>(() =>
    loadJson(STORAGE_KEYS.checklist, {})
  );
  const [diary, setDiary] = useState<DiaryEntry[]>(() =>
    loadJson(STORAGE_KEYS.diary, [])
  );
  const [recoveryFlags, setRecoveryFlags] = useState<{
    eiffelFriday: boolean;
    montmartreSaturday: boolean;
  }>(() =>
    loadJson(STORAGE_KEYS.recovery, { eiffelFriday: false, montmartreSaturday: false })
  );

  const [attachments, setAttachments] = useState<TicketAttachment[]>([]);

  useEffect(() => {
    getAllAttachments().then(setAttachments);
  }, []);

  const checklist: ChecklistItem[] = useMemo(
    () =>
      INITIAL_CHECKLIST.map((item) => ({
        ...item,
        done: checklistMap[item.id] ?? item.done,
      })),
    [checklistMap]
  );

  const allActivities = useMemo(
    () => ITINERARY_DAYS.flatMap((d) => d.activities),
    []
  );

  const favoriteActivities = useMemo(
    () => allActivities.filter((a) => favorites.includes(a.id)),
    [allActivities, favorites]
  );

  const actualSpentEur = useMemo(
    () => expenses.filter((e) => e.kind === 'actual').reduce((s, e) => s + e.amountEur, 0),
    [expenses]
  );

  const residualEstimatedEur = useMemo(
    () => budgetEstimates.filter((b) => b.included).reduce((s, b) => s + b.estimatedEur, 0),
    [budgetEstimates]
  );

  const handleSetCompletion = (id: string, state: StopCompletionState) => {
    setStopStates((prev) => {
      const next = { ...prev, [id]: state };
      saveJson(STORAGE_KEYS.stopStates, next);
      return next;
    });
  };

  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      saveJson(STORAGE_KEYS.favorites, next);
      return next;
    });
  };

  const handleSetWeather = (date: string, mode: WeatherMode) => {
    setWeatherByDay((prev) => {
      const next = { ...prev, [date]: mode };
      saveJson(STORAGE_KEYS.weatherByDay, next);
      return next;
    });
  };

  const handleToggleRecovery = (key: 'eiffelFriday' | 'montmartreSaturday') => {
    setRecoveryFlags((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      saveJson(STORAGE_KEYS.recovery, next);
      return next;
    });
  };

  const handleUpdateBooking = (id: string, patch: Partial<BookingRecord>) => {
    setBookings((prev) => {
      const next = prev.map((b) => (b.id === id ? { ...b, ...patch } : b));
      saveJson(STORAGE_KEYS.bookings, next);
      return next;
    });
  };

  const handleAddAttachment = async (bookingId: string, file: File) => {
    const dataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
    const att: TicketAttachment = {
      id: `att-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      bookingId,
      fileName: file.name,
      mimeType: file.type || 'application/octet-stream',
      sizeBytes: file.size,
      dataUrl,
      addedAt: new Date().toISOString(),
    };
    await saveAttachment(att);
    setAttachments((prev) => [...prev, att]);
    setBookings((prev) => {
      const next = prev.map((b) =>
        b.id === bookingId ? { ...b, attachmentIds: [...b.attachmentIds, att.id] } : b
      );
      saveJson(STORAGE_KEYS.bookings, next);
      return next;
    });
  };

  const handleDeleteAttachment = async (id: string, bookingId: string) => {
    await deleteAttachment(id);
    setAttachments((prev) => prev.filter((a) => a.id !== id));
    setBookings((prev) => {
      const next = prev.map((b) =>
        b.id === bookingId
          ? { ...b, attachmentIds: b.attachmentIds.filter((x) => x !== id) }
          : b
      );
      saveJson(STORAGE_KEYS.bookings, next);
      return next;
    });
  };

  const handleAddExpense = (exp: Omit<ExpenseEntry, 'id'>) => {
    const entry: ExpenseEntry = {
      ...exp,
      id: `exp-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    };
    setExpenses((prev) => {
      const next = [entry, ...prev];
      saveJson(STORAGE_KEYS.expenses, next);
      return next;
    });
  };

  const handleDeleteExpense = (id: string) => {
    setExpenses((prev) => {
      const next = prev.filter((e) => e.id !== id);
      saveJson(STORAGE_KEYS.expenses, next);
      return next;
    });
  };

  const handleUpdateEstimate = (id: string, patch: Partial<BudgetEstimateItem>) => {
    setBudgetEstimates((prev) => {
      const next = prev.map((b) => (b.id === id ? { ...b, ...patch } : b));
      saveJson(STORAGE_KEYS.budgetEstimates, next);
      return next;
    });
  };

  const handleToggleChecklist = (id: string) => {
    setChecklistMap((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      saveJson(STORAGE_KEYS.checklist, next);
      return next;
    });
  };

  const handleAddDiaryEntry = (entry: Omit<DiaryEntry, 'id' | 'createdAt'>) => {
    const full: DiaryEntry = {
      ...entry,
      id: `diary-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    setDiary((prev) => {
      const next = [full, ...prev];
      saveJson(STORAGE_KEYS.diary, next);
      return next;
    });
  };

  const handleDeleteDiaryEntry = (id: string) => {
    setDiary((prev) => {
      const next = prev.filter((d) => d.id !== id);
      saveJson(STORAGE_KEYS.diary, next);
      return next;
    });
  };

  const handleExportBackup = () => {
    const payload: AppBackupPayload = {
      version: 1,
      exportedAt: new Date().toISOString(),
      stopStates,
      favorites,
      weatherByDay,
      bookings,
      expenses,
      budgetEstimates,
      diary,
      checklist: checklistMap,
      recoveryFlags,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `paris-a-deux-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportBackup = (payload: AppBackupPayload) => {
    if (payload.stopStates) {
      setStopStates(payload.stopStates);
      saveJson(STORAGE_KEYS.stopStates, payload.stopStates);
    }
    if (Array.isArray(payload.favorites)) {
      setFavorites(payload.favorites);
      saveJson(STORAGE_KEYS.favorites, payload.favorites);
    }
    if (payload.weatherByDay) {
      setWeatherByDay(payload.weatherByDay);
      saveJson(STORAGE_KEYS.weatherByDay, payload.weatherByDay);
    }
    if (Array.isArray(payload.bookings)) {
      setBookings(payload.bookings);
      saveJson(STORAGE_KEYS.bookings, payload.bookings);
    }
    if (Array.isArray(payload.expenses)) {
      setExpenses(payload.expenses);
      saveJson(STORAGE_KEYS.expenses, payload.expenses);
    }
    if (Array.isArray(payload.budgetEstimates)) {
      setBudgetEstimates(payload.budgetEstimates);
      saveJson(STORAGE_KEYS.budgetEstimates, payload.budgetEstimates);
    }
    if (Array.isArray(payload.diary)) {
      setDiary(payload.diary);
      saveJson(STORAGE_KEYS.diary, payload.diary);
    }
    if (payload.checklist) {
      setChecklistMap(payload.checklist);
      saveJson(STORAGE_KEYS.checklist, payload.checklist);
    }
    if (payload.recoveryFlags) {
      setRecoveryFlags(payload.recoveryFlags);
      saveJson(STORAGE_KEYS.recovery, payload.recoveryFlags);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#211B19]">
      <main className="max-w-2xl mx-auto px-4 pt-4 pb-24">
        {activeTab === 'home' && (
          <HomeView
            days={ITINERARY_DAYS}
            stopStates={stopStates}
            weatherByDay={weatherByDay}
            bookings={bookings}
            actualSpentEur={actualSpentEur}
            residualEstimatedEur={residualEstimatedEur}
            onSetWeather={handleSetWeather}
            onGoToDay={(date, stopId) => {
              setSelectedDate(date);
              setHighlightStopId(stopId ?? null);
              setActiveTab('days');
            }}
            onGoToSaved={(sub) => {
              if (sub) setSavedSubTab(sub);
              setActiveTab('saved');
            }}
          />
        )}

        {activeTab === 'days' && (
          <DaysView
            days={ITINERARY_DAYS}
            restaurants={RESTAURANTS_DATA}
            selectedDate={selectedDate}
            highlightStopId={highlightStopId}
            stopStates={stopStates}
            favorites={favorites}
            weatherByDay={weatherByDay}
            recoveryFlags={recoveryFlags}
            onSelectDate={(d) => {
              setSelectedDate(d);
              setHighlightStopId(null);
            }}
            onSetCompletion={handleSetCompletion}
            onToggleFavorite={handleToggleFavorite}
            onSetWeather={handleSetWeather}
            onToggleRecovery={handleToggleRecovery}
          />
        )}

        {activeTab === 'map' && (
          <MapView
            days={ITINERARY_DAYS}
            selectedDateFilter={mapDateFilter}
            onSelectDateFilter={setMapDateFilter}
          />
        )}

        {activeTab === 'saved' && (
          <SavedView
            activeSubTab={savedSubTab}
            onSelectSubTab={setSavedSubTab}
            bookings={bookings}
            attachments={attachments}
            expenses={expenses}
            budgetEstimates={budgetEstimates}
            checklist={checklist}
            diary={diary}
            favoriteActivities={favoriteActivities}
            onUpdateBooking={handleUpdateBooking}
            onAddAttachment={handleAddAttachment}
            onDeleteAttachment={handleDeleteAttachment}
            onAddExpense={handleAddExpense}
            onDeleteExpense={handleDeleteExpense}
            onUpdateEstimate={handleUpdateEstimate}
            onToggleChecklist={handleToggleChecklist}
            onAddDiaryEntry={handleAddDiaryEntry}
            onDeleteDiaryEntry={handleDeleteDiaryEntry}
            onExportBackup={handleExportBackup}
            onImportBackup={handleImportBackup}
          />
        )}
      </main>

      <BottomNav activeTab={activeTab} onSelectTab={setActiveTab} />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import {
  Ticket,
  Wallet,
  CheckSquare,
  BookHeart,
  PhoneCall,
  Upload,
  Trash2,
  Download,
  FileUp,
  Plus,
  Heart,
  AlertTriangle,
  MapPin,
} from 'lucide-react';
import {
  Activity,
  AppBackupPayload,
  BookingRecord,
  BudgetEstimateItem,
  ChecklistItem,
  DiaryEntry,
  ExpenseEntry,
  TicketAttachment,
} from '../types/travel';
import { EMERGENCY_INFO } from '../data/staticGuides';
import { checkStorageQuota } from '../utils/storage';

export type SavedSubTab = 'bookings' | 'budget' | 'checklist' | 'diary' | 'emergency';

interface SavedViewProps {
  activeSubTab: SavedSubTab;
  onSelectSubTab: (t: SavedSubTab) => void;
  bookings: BookingRecord[];
  attachments: TicketAttachment[];
  expenses: ExpenseEntry[];
  budgetEstimates: BudgetEstimateItem[];
  checklist: ChecklistItem[];
  diary: DiaryEntry[];
  favoriteActivities: Activity[];
  onUpdateBooking: (id: string, patch: Partial<BookingRecord>) => void;
  onAddAttachment: (bookingId: string, file: File) => Promise<void>;
  onDeleteAttachment: (id: string, bookingId: string) => Promise<void>;
  onAddExpense: (exp: Omit<ExpenseEntry, 'id'>) => void;
  onDeleteExpense: (id: string) => void;
  onUpdateEstimate: (id: string, patch: Partial<BudgetEstimateItem>) => void;
  onToggleChecklist: (id: string) => void;
  onAddDiaryEntry: (entry: Omit<DiaryEntry, 'id' | 'createdAt'>) => void;
  onDeleteDiaryEntry: (id: string) => void;
  onExportBackup: () => void;
  onImportBackup: (payload: AppBackupPayload) => void;
}

export const SavedView: React.FC<SavedViewProps> = ({
  activeSubTab,
  onSelectSubTab,
  bookings,
  attachments,
  expenses,
  budgetEstimates,
  checklist,
  diary,
  favoriteActivities,
  onUpdateBooking,
  onAddAttachment,
  onDeleteAttachment,
  onAddExpense,
  onDeleteExpense,
  onUpdateEstimate,
  onToggleChecklist,
  onAddDiaryEntry,
  onDeleteDiaryEntry,
  onExportBackup,
  onImportBackup,
}) => {
  const [storageWarn, setStorageWarn] = useState<string | null>(null);
  const [expTitle, setExpTitle] = useState('');
  const [expAmount, setExpAmount] = useState('');
  const [expCategory, setExpCategory] = useState<ExpenseEntry['category']>('cibo');
  const [expKind, setExpKind] = useState<ExpenseEntry['kind']>('actual');
  const [expDate, setExpDate] = useState('2026-12-07');

  const [diaryTitle, setDiaryTitle] = useState('');
  const [diaryText, setDiaryText] = useState('');
  const [diaryDate, setDiaryDate] = useState('2026-12-07');
  const [importMsg, setImportMsg] = useState<string | null>(null);

  useEffect(() => {
    checkStorageQuota().then((q) => {
      if (q.lowSpace) {
        setStorageWarn(
          `Spazio dispositivo quasi esaurito (${q.usageMb} MB / ${q.quotaMb} MB). Riduci eventuali allegati pesanti.`
        );
      }
    });
  }, [attachments.length]);

  const actualExpenses = expenses.filter((e) => e.kind === 'actual');
  const prepaidExpenses = expenses.filter((e) => e.kind === 'prepaid');
  const actualTotal = actualExpenses.reduce((s, e) => s + e.amountEur, 0);
  const prepaidTotal = prepaidExpenses.reduce((s, e) => s + e.amountEur, 0);
  const estimateTotal = budgetEstimates
    .filter((b) => b.included)
    .reduce((s, b) => s + b.estimatedEur, 0);

  const handleAddExpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(expAmount.replace(',', '.'));
    if (!expTitle.trim() || Number.isNaN(val) || val <= 0) return;
    onAddExpense({
      date: expDate,
      title: expTitle.trim(),
      category: expCategory,
      amountEur: Math.round(val * 100) / 100,
      kind: expKind,
    });
    setExpTitle('');
    setExpAmount('');
  };

  const handleAddDiarySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!diaryTitle.trim() && !diaryText.trim()) return;
    onAddDiaryEntry({
      date: diaryDate,
      title: diaryTitle.trim() || 'Ricordo di Parigi',
      text: diaryText.trim(),
      mood: '❤️',
    });
    setDiaryTitle('');
    setDiaryText('');
  };

  const handleImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = JSON.parse(text) as AppBackupPayload;
      if (!parsed || typeof parsed !== 'object' || typeof parsed.version !== 'number') {
        setImportMsg('File backup non valido.');
        return;
      }
      onImportBackup(parsed);
      setImportMsg('Backup importato con successo!');
    } catch {
      setImportMsg('Errore durante la lettura del file JSON.');
    }
    e.target.value = '';
  };

  return (
    <div className="space-y-4">
      {/* Sub-navigation */}
      <div className="flex gap-1.5 overflow-x-auto pb-1">
        {(
          [
            { id: 'bookings', label: 'Prenotazioni', icon: Ticket },
            { id: 'budget', label: 'Budget', icon: Wallet },
            { id: 'checklist', label: 'Checklist', icon: CheckSquare },
            { id: 'diary', label: 'Diario & Backup', icon: BookHeart },
            { id: 'emergency', label: 'Emergenze', icon: PhoneCall },
          ] as const
        ).map((tab) => {
          const Icon = tab.icon;
          const active = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectSubTab(tab.id)}
              className={`touch-target shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border ${
                active
                  ? 'bg-[#7A1E2E] text-white border-[#7A1E2E]'
                  : 'bg-[#FFFDF9] text-[#211B19] border-[#E5DCD0]'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {storageWarn && (
        <div className="rounded-xl bg-[#FBEAE8] border border-[#E7B7B2] p-3 text-xs text-[#7A1E2E] flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span>{storageWarn}</span>
        </div>
      )}

      {/* 1. BOOKINGS */}
      {activeSubTab === 'bookings' && (
        <div className="space-y-3">
          <div className="rounded-2xl bg-[#FFFDF9] border border-[#E5DCD0] p-4 text-xs text-[#5C524D]">
            <strong>Nota privacy:</strong> Tutti i biglietti, PDF e QR importati restano salvati <em>solo in locale</em> (IndexedDB) sul tuo dispositivo. Nessun caricamento automatico esterno.
          </div>

          {bookings.map((bk) => {
            const bkAttachments = attachments.filter((a) => a.bookingId === bk.id);
            return (
              <div
                key={bk.id}
                className="rounded-2xl bg-[#FFFDF9] border border-[#E5DCD0] p-4 shadow-sm space-y-2.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-mono-tabular text-xs text-[#7A1E2E] font-semibold">
                      {bk.dayDate.slice(8)}/12/2026
                    </div>
                    <h3 className="font-serif-editorial text-lg font-semibold text-[#211B19]">
                      {bk.title}
                    </h3>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border shrink-0 ${
                      bk.status === 'confirmed'
                        ? 'bg-[#EBF1EC] text-[#2F5239] border-[#BBD0C0]'
                        : bk.status === 'booked_time_unknown'
                        ? 'bg-[#F6EEDB] text-[#6E4F16] border-[#DFC99B]'
                        : 'bg-[#FBEAE8] text-[#7A1E2E] border-[#E7B7B2]'
                    }`}
                  >
                    {bk.status === 'confirmed'
                      ? 'Confermata'
                      : bk.status === 'booked_time_unknown'
                      ? 'Prenotata · Orario ignoto'
                      : 'Da prenotare'}
                  </span>
                </div>

                <p className="text-xs text-[#5C524D]">{bk.referenceNote}</p>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <label className="block">
                    <span className="text-[#5C524D] block mb-1">Orario da voucher</span>
                    <input
                      type="time"
                      value={bk.confirmedTime ?? ''}
                      onChange={(e) =>
                        onUpdateBooking(bk.id, {
                          confirmedTime: e.target.value || null,
                          status: e.target.value ? 'confirmed' : bk.status,
                        })
                      }
                      className="w-full min-h-[40px] rounded-xl border border-[#E5DCD0] bg-[#FAF7F2] px-2.5 font-mono-tabular"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[#5C524D] block mb-1">Prezzo pagato (€ opz.)</span>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="Non inserito"
                      value={bk.paidAmountEur ?? ''}
                      onChange={(e) => {
                        const v = parseFloat(e.target.value);
                        onUpdateBooking(bk.id, {
                          paidAmountEur: Number.isNaN(v) ? null : v,
                        });
                      }}
                      className="w-full min-h-[40px] rounded-xl border border-[#E5DCD0] bg-[#FAF7F2] px-2.5 font-mono-tabular"
                    />
                  </label>
                </div>

                {/* Attachments */}
                <div className="pt-2 border-t border-[#E5DCD0]/70 space-y-2">
                  <label className="touch-target inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#E5DCD0] bg-[#FAF7F2] text-xs font-semibold text-[#7A1E2E] cursor-pointer">
                    <Upload className="w-4 h-4" />
                    Allega PDF / Immagine / QR
                    <input
                      type="file"
                      accept="application/pdf,image/*"
                      className="hidden"
                      onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (f) onAddAttachment(bk.id, f);
                        e.target.value = '';
                      }}
                    />
                  </label>

                  {bkAttachments.map((att) => (
                    <div
                      key={att.id}
                      className="flex items-center justify-between gap-2 rounded-xl bg-[#FAF7F2] border border-[#E5DCD0] px-3 py-2 text-xs"
                    >
                      <a
                        href={att.dataUrl}
                        download={att.fileName}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#4A6652] underline truncate"
                      >
                        {att.fileName} ({Math.round(att.sizeBytes / 1024)} KB)
                      </a>
                      <button
                        type="button"
                        onClick={() => onDeleteAttachment(att.id, bk.id)}
                        aria-label="Elimina allegato"
                        className="p-1.5 text-[#7A1E2E]"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 2. BUDGET */}
      {activeSubTab === 'budget' && (
        <div className="space-y-4">
          {/* Summary cards: strictly separated */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div className="rounded-2xl bg-[#7A1E2E] text-white p-4">
              <div className="text-[11px] uppercase tracking-wider opacity-85">
                Spese effettive (in viaggio)
              </div>
              <div className="font-mono-tabular text-2xl font-bold mt-1">
                {actualTotal.toFixed(2)} €
              </div>
            </div>
            <div className="rounded-2xl bg-[#FFFDF9] border border-[#E5DCD0] p-4">
              <div className="text-[11px] uppercase tracking-wider text-[#5C524D]">
                Stime residue (target 400–500 €)
              </div>
              <div className="font-mono-tabular text-2xl font-bold text-[#211B19] mt-1">
                {estimateTotal.toFixed(2)} €
              </div>
            </div>
            <div className="rounded-2xl bg-[#EBF1EC] border border-[#BBD0C0] p-4">
              <div className="text-[11px] uppercase tracking-wider text-[#2F5239]">
                Prepagate registrate (separate)
              </div>
              <div className="font-mono-tabular text-2xl font-bold text-[#2F5239] mt-1">
                {prepaidTotal.toFixed(2)} €
              </div>
            </div>
          </div>

          {/* Add expense form */}
          <form
            onSubmit={handleAddExpSubmit}
            className="rounded-2xl bg-[#FFFDF9] border border-[#E5DCD0] p-4 space-y-3"
          >
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#7A1E2E]">
              Registra una spesa
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="Descrizione (es. Pranzo galette)"
                value={expTitle}
                onChange={(e) => setExpTitle(e.target.value)}
                className="min-h-[42px] rounded-xl border border-[#E5DCD0] bg-[#FAF7F2] px-3 text-sm"
                required
              />
              <input
                type="number"
                step="0.01"
                min="0.01"
                placeholder="Importo €"
                value={expAmount}
                onChange={(e) => setExpAmount(e.target.value)}
                className="min-h-[42px] rounded-xl border border-[#E5DCD0] bg-[#FAF7F2] px-3 text-sm font-mono-tabular"
                required
              />
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <select
                value={expDate}
                onChange={(e) => setExpDate(e.target.value)}
                className="min-h-[40px] rounded-xl border border-[#E5DCD0] bg-[#FAF7F2] px-2"
              >
                <option value="2026-12-07">7/12</option>
                <option value="2026-12-08">8/12</option>
                <option value="2026-12-09">9/12</option>
                <option value="2026-12-10">10/12</option>
                <option value="2026-12-11">11/12</option>
                <option value="2026-12-12">12/12</option>
              </select>
              <select
                value={expCategory}
                onChange={(e) => setExpCategory(e.target.value as ExpenseEntry['category'])}
                className="min-h-[40px] rounded-xl border border-[#E5DCD0] bg-[#FAF7F2] px-2"
              >
                <option value="cibo">Cibo</option>
                <option value="trasporti">Trasporti</option>
                <option value="ingressi">Ingressi</option>
                <option value="shopping">Shopping</option>
                <option value="extra">Extra</option>
              </select>
              <select
                value={expKind}
                onChange={(e) => setExpKind(e.target.value as ExpenseEntry['kind'])}
                className="min-h-[40px] rounded-xl border border-[#E5DCD0] bg-[#FAF7F2] px-2"
              >
                <option value="actual">Effettiva</option>
                <option value="prepaid">Prepagata</option>
              </select>
            </div>
            <button
              type="submit"
              className="touch-target w-full rounded-xl bg-[#7A1E2E] text-white text-sm font-semibold flex items-center justify-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Aggiungi spesa
            </button>
          </form>

          {/* Expense list */}
          {expenses.length > 0 && (
            <div className="rounded-2xl bg-[#FFFDF9] border border-[#E5DCD0] p-4 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#7A1E2E]">
                Spese registrate ({expenses.length})
              </h3>
              {expenses.map((exp) => (
                <div
                  key={exp.id}
                  className="flex items-center justify-between gap-2 rounded-xl bg-[#FAF7F2] border border-[#E5DCD0] px-3 py-2 text-xs"
                >
                  <div>
                    <div className="font-semibold text-[#211B19]">{exp.title}</div>
                    <div className="text-[#5C524D]">
                      {exp.date.slice(8)}/12 · {exp.category} ·{' '}
                      {exp.kind === 'prepaid' ? 'Prepagata' : 'Effettiva'}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono-tabular font-bold text-[#7A1E2E]">
                      {exp.amountEur.toFixed(2)} €
                    </span>
                    <button
                      type="button"
                      onClick={() => onDeleteExpense(exp.id)}
                      aria-label="Rimuovi spesa"
                      className="p-1 text-[#5C524D] hover:text-[#7A1E2E]"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Editable Residual Estimates */}
          <div className="rounded-2xl bg-[#FFFDF9] border border-[#E5DCD0] p-4 space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#7A1E2E]">
              Stime spese residue (modificabili, nessun doppio conteggio)
            </h3>
            {budgetEstimates.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-2 rounded-xl bg-[#FAF7F2] border border-[#E5DCD0] px-3 py-2 text-xs"
              >
                <label className="flex items-center gap-2 flex-1 min-w-0 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={item.included}
                    onChange={(e) =>
                      onUpdateEstimate(item.id, { included: e.target.checked })
                    }
                    className="w-4 h-4 accent-[#7A1E2E]"
                  />
                  <span className={item.included ? 'text-[#211B19]' : 'line-through text-[#5C524D]'}>
                    {item.label}
                  </span>
                </label>
                <input
                  type="number"
                  step="0.5"
                  min="0"
                  value={item.estimatedEur}
                  onChange={(e) => {
                    const v = parseFloat(e.target.value);
                    onUpdateEstimate(item.id, {
                      estimatedEur: Number.isNaN(v) ? 0 : v,
                    });
                  }}
                  className="w-20 min-h-[34px] rounded-lg border border-[#E5DCD0] bg-white px-2 text-right font-mono-tabular"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. CHECKLIST */}
      {activeSubTab === 'checklist' && (
        <div className="space-y-4">
          {(
            [
              { key: 'disney', title: 'Checklist Disneyland Park' },
              { key: 'musei', title: 'Checklist Opere nei Musei' },
              { key: 'partenza', title: 'Prima di partire' },
            ] as const
          ).map((grp) => {
            const items = checklist.filter((c) => c.group === grp.key);
            const doneCount = items.filter((c) => c.done).length;
            return (
              <section
                key={grp.key}
                className="rounded-2xl bg-[#FFFDF9] border border-[#E5DCD0] p-4 shadow-sm space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-serif-editorial text-lg font-semibold text-[#211B19]">
                    {grp.title}
                  </h3>
                  <span className="font-mono-tabular text-xs font-semibold text-[#4A6652]">
                    {doneCount}/{items.length}
                  </span>
                </div>
                <div className="space-y-1.5">
                  {items.map((item) => (
                    <label
                      key={item.id}
                      className="flex items-start gap-3 rounded-xl bg-[#FAF7F2] border border-[#E5DCD0] p-2.5 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={item.done}
                        onChange={() => onToggleChecklist(item.id)}
                        className="mt-0.5 w-4 h-4 accent-[#7A1E2E]"
                      />
                      <div className="text-xs">
                        <div
                          className={`font-semibold ${
                            item.done ? 'line-through text-[#5C524D]' : 'text-[#211B19]'
                          }`}
                        >
                          {item.label}
                        </div>
                        {item.sublabel && (
                          <div className="text-[#5C524D] mt-0.5">{item.sublabel}</div>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}

      {/* 4. DIARY, FAVORITES & BACKUP */}
      {activeSubTab === 'diary' && (
        <div className="space-y-4">
          {/* Favorites */}
          <section className="rounded-2xl bg-[#FFFDF9] border border-[#E5DCD0] p-4 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#7A1E2E] flex items-center gap-1.5">
              <Heart className="w-4 h-4 fill-[#7A1E2E]" /> Tappe preferite ({favoriteActivities.length})
            </h3>
            {favoriteActivities.length === 0 ? (
              <p className="text-xs text-[#5C524D]">
                Tocca il cuore su qualsiasi tappa per salvarla qui.
              </p>
            ) : (
              <div className="space-y-1.5">
                {favoriteActivities.map((a) => (
                  <div
                    key={a.id}
                    className="flex items-center justify-between gap-2 rounded-xl bg-[#FAF7F2] border border-[#E5DCD0] px-3 py-2 text-xs"
                  >
                    <span className="font-semibold text-[#211B19]">
                      {a.dayDate.slice(8)}/12 · {a.name}
                    </span>
                    <a
                      href={a.walking}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#7A1E2E] font-semibold underline"
                    >
                      Maps
                    </a>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Local Diary */}
          <form
            onSubmit={handleAddDiarySubmit}
            className="rounded-2xl bg-[#FFFDF9] border border-[#E5DCD0] p-4 space-y-2.5"
          >
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#7A1E2E]">
              Diario di viaggio (locale)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <select
                value={diaryDate}
                onChange={(e) => setDiaryDate(e.target.value)}
                className="min-h-[40px] rounded-xl border border-[#E5DCD0] bg-[#FAF7F2] px-2.5 text-xs"
              >
                <option value="2026-12-07">7 Dicembre</option>
                <option value="2026-12-08">8 Dicembre</option>
                <option value="2026-12-09">9 Dicembre</option>
                <option value="2026-12-10">10 Dicembre</option>
                <option value="2026-12-11">11 Dicembre</option>
                <option value="2026-12-12">12 Dicembre</option>
              </select>
              <input
                type="text"
                placeholder="Titolo ricordo"
                value={diaryTitle}
                onChange={(e) => setDiaryTitle(e.target.value)}
                className="sm:col-span-2 min-h-[40px] rounded-xl border border-[#E5DCD0] bg-[#FAF7F2] px-3 text-sm"
              />
            </div>
            <textarea
              rows={3}
              placeholder="Scrivi un momento, un piatto, una sensazione..."
              value={diaryText}
              onChange={(e) => setDiaryText(e.target.value)}
              className="w-full rounded-xl border border-[#E5DCD0] bg-[#FAF7F2] p-3 text-sm"
            />
            <button
              type="submit"
              className="touch-target w-full rounded-xl bg-[#7A1E2E] text-white text-sm font-semibold"
            >
              Salva nel diario
            </button>
          </form>

          {diary.map((entry) => (
            <article
              key={entry.id}
              className="rounded-2xl bg-[#FFFDF9] border border-[#E5DCD0] p-4 space-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono-tabular text-xs text-[#7A1E2E] font-semibold">
                  {entry.date.slice(8)}/12/2026
                </span>
                <button
                  type="button"
                  onClick={() => onDeleteDiaryEntry(entry.id)}
                  aria-label="Elimina nota diario"
                  className="p-1 text-[#5C524D] hover:text-[#7A1E2E]"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <h4 className="font-serif-editorial text-lg font-semibold text-[#211B19]">
                {entry.title}
              </h4>
              <p className="text-sm text-[#211B19] whitespace-pre-line">{entry.text}</p>
            </article>
          ))}

          {/* Export / Import JSON Backup */}
          <section className="rounded-2xl bg-[#FFFDF9] border border-[#E5DCD0] p-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#7A1E2E]">
              Backup dati locali (JSON)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={onExportBackup}
                className="touch-target inline-flex items-center justify-center gap-2 rounded-xl bg-[#4A6652] text-white text-xs font-semibold px-4 py-2.5"
              >
                <Download className="w-4 h-4" /> Esporta Backup JSON
              </button>

              <label className="touch-target inline-flex items-center justify-center gap-2 rounded-xl border border-[#7A1E2E] text-[#7A1E2E] text-xs font-semibold px-4 py-2.5 cursor-pointer">
                <FileUp className="w-4 h-4" /> Importa Backup JSON
                <input
                  type="file"
                  accept="application/json"
                  className="hidden"
                  onChange={handleImportFile}
                />
              </label>
            </div>
            {importMsg && <p className="text-xs font-semibold text-[#4A6652]">{importMsg}</p>}
          </section>
        </div>
      )}

      {/* 5. EMERGENCY & PACKING */}
      {activeSubTab === 'emergency' && (
        <div className="space-y-4">
          <section className="rounded-2xl bg-[#FFFDF9] border border-[#E5DCD0] p-4 space-y-2.5">
            <h3 className="font-serif-editorial text-lg font-semibold text-[#7A1E2E]">
              Numeri di emergenza (Francia / UE)
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {EMERGENCY_INFO.numbers.map((n) => (
                <a
                  key={n.code}
                  href={`tel:${n.code}`}
                  className="touch-target rounded-xl border border-[#E5DCD0] bg-[#FAF7F2] p-3 flex flex-col justify-center"
                >
                  <span className="font-mono-tabular text-lg font-bold text-[#7A1E2E]">
                    {n.code}
                  </span>
                  <span className="text-xs text-[#211B19]">{n.label}</span>
                </a>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-[#FFFDF9] border border-[#E5DCD0] p-4 space-y-2">
            <h3 className="font-serif-editorial text-lg font-semibold text-[#211B19]">
              Servizi utili vicini (su Maps)
            </h3>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                { label: 'Bagni pubblici', q: 'toilettes publiques Paris' },
                { label: 'Farmacie', q: 'pharmacie Paris' },
                { label: 'Supermercati', q: 'supermarche Paris' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.q)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target rounded-xl border border-[#E5DCD0] bg-[#FAF7F2] p-2.5 flex flex-col items-center justify-center text-center gap-1 font-semibold text-[#4A6652]"
                >
                  <MapPin className="w-4 h-4" />
                  {s.label}
                </a>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-[#FFFDF9] border border-[#E5DCD0] p-4 space-y-2">
            <h3 className="font-serif-editorial text-lg font-semibold text-[#211B19]">
              Attrezzatura consigliata (Dicembre)
            </h3>
            <ul className="space-y-1 text-xs text-[#211B19]">
              {EMERGENCY_INFO.packing.map((p, i) => (
                <li key={i}>• {p}</li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </div>
  );
};

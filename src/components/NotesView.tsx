import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  Circle, 
  Ticket, 
  Sparkles, 
  Droplets, 
  Gift, 
  Key, 
  BookHeart, 
  ChevronDown, 
  ChevronUp, 
  AlertCircle,
  PhoneCall
} from 'lucide-react';

interface NoteItem {
  id: string;
  text: string;
  category: 'todo' | 'gift' | 'memo' | 'memory';
  isDone: boolean;
  createdAt: string;
}

const DEFAULT_NOTES: NoteItem[] = [
  {
    id: 'note-1',
    text: '🎁 Macarons da Ladurée o Pierre Hermé per mamma',
    category: 'gift',
    isDone: false,
    createdAt: 'Pre-viaggio'
  },
  {
    id: 'note-2',
    text: '🏰 Cerchietto con orecchie a Disneyland Paris',
    category: 'gift',
    isDone: false,
    createdAt: 'Anniversario'
  },
  {
    id: 'note-3',
    text: '🗝️ Codice portone hotel / Numero camera: (scrivi qui)',
    category: 'memo',
    isDone: false,
    createdAt: 'Check-in'
  },
  {
    id: 'note-4',
    text: '📸 Foto bacio romantico al tramonto con la Torre Eiffel che scintilla',
    category: 'memory',
    isDone: false,
    createdAt: 'Momento per due'
  }
];

export const NotesView: React.FC = () => {
  const [notes, setNotes] = useState<NoteItem[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<'todo' | 'gift' | 'memo' | 'memory'>('todo');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [showTips, setShowTips] = useState<boolean>(false);

  // Caricamento da localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('parigi_personal_notes');
      if (saved) {
        setNotes(JSON.parse(saved));
      } else {
        setNotes(DEFAULT_NOTES);
        localStorage.setItem('parigi_personal_notes', JSON.stringify(DEFAULT_NOTES));
      }
    } catch (e) {
      console.error(e);
      setNotes(DEFAULT_NOTES);
    }
  }, []);

  const saveNotes = (updated: NoteItem[]) => {
    setNotes(updated);
    try {
      localStorage.setItem('parigi_personal_notes', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newNote: NoteItem = {
      id: `note-${Date.now()}`,
      text: inputText.trim(),
      category: selectedCategory,
      isDone: false,
      createdAt: 'Aggiunto ora'
    };

    saveNotes([newNote, ...notes]);
    setInputText('');
  };

  const handleToggleDone = (id: string) => {
    const updated = notes.map((n) => (n.id === id ? { ...n, isDone: !n.isDone } : n));
    saveNotes(updated);
  };

  const handleDeleteNote = (id: string) => {
    const updated = notes.filter((n) => n.id !== id);
    saveNotes(updated);
  };

  const filteredNotes = notes.filter((n) => {
    if (filterCategory === 'all') return true;
    return n.category === filterCategory;
  });

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'gift':
        return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">🎁 Regalo / Wishlist</span>;
      case 'memo':
        return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">🗝️ Memo Hotel</span>;
      case 'memory':
        return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">❤️ Ricordo per Noi</span>;
      default:
        return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">✓ Da Fare</span>;
    }
  };

  return (
    <div className="space-y-4 pb-4">
      
      {/* Testata Note per Noi */}
      <div className="p-4 rounded-3xl bg-gradient-to-r from-rose-950/40 via-slate-900 to-amber-950/30 border border-rose-500/30 shadow-xl">
        <div className="flex items-center gap-2 mb-1">
          <BookHeart className="w-5 h-5 text-rose-400" />
          <h2 className="text-base font-black text-white">Note & Ricordi per Noi</h2>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Il vostro diario tascabile salvato sul telefono: regali da comprare, codici dell'hotel, ricordi e promemoria.
        </p>
      </div>

      {/* Form Aggiungi Nota Rapida */}
      <form onSubmit={handleAddNote} className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md space-y-2.5">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Scrivi una nota, un ricordo o una spesa..."
            className="flex-1 px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-rose-400 transition-colors"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 disabled:opacity-30 disabled:cursor-not-allowed text-white text-xs font-black flex items-center gap-1 shadow-lg active:scale-95 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Aggiungi</span>
          </button>
        </div>

        {/* Categorie scelta */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 text-xs">
          {[
            { id: 'todo', label: '✓ Da Fare' },
            { id: 'gift', label: '🎁 Regalo / Wishlist' },
            { id: 'memo', label: '🗝️ Memo Pratico' },
            { id: 'memory', label: '❤️ Ricordo' }
          ].map((cat) => (
            <button
              type="button"
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all border ${
                selectedCategory === cat.id
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/50'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </form>

      {/* Filtri Elenco */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          {[
            { id: 'all', label: 'Tutte' },
            { id: 'todo', label: 'Da Fare' },
            { id: 'gift', label: 'Regali' },
            { id: 'memo', label: 'Memo' },
            { id: 'memory', label: 'Ricordi' }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilterCategory(f.id)}
              className={`px-2.5 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                filterCategory === f.id
                  ? 'bg-slate-800 text-white font-bold border border-slate-700'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <span className="text-[11px] text-slate-400 shrink-0">
          {filteredNotes.length} note
        </span>
      </div>

      {/* Lista Note */}
      <div className="space-y-2">
        {filteredNotes.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-xs rounded-2xl border border-dashed border-slate-800">
            Nessuna nota in questa categoria. Aggiungine una sopra!
          </div>
        ) : (
          filteredNotes.map((note) => (
            <div
              key={note.id}
              className={`p-3 rounded-2xl border transition-all flex items-start gap-2.5 ${
                note.isDone
                  ? 'bg-slate-950/60 border-slate-800/60 opacity-60'
                  : 'bg-slate-900/90 border-slate-800 hover:border-slate-700 shadow-sm'
              }`}
            >
              <button
                onClick={() => handleToggleDone(note.id)}
                className="mt-0.5 text-slate-400 hover:text-emerald-400 transition-colors shrink-0"
              >
                {note.isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Circle className="w-4 h-4 text-slate-500" />
                )}
              </button>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  {getCategoryBadge(note.category)}
                  <span className="text-[10px] text-slate-500">{note.createdAt}</span>
                </div>
                <p className={`text-xs sm:text-sm text-slate-200 leading-relaxed break-words ${
                  note.isDone ? 'line-through text-slate-500' : ''
                }`}>
                  {note.text}
                </p>
              </div>

              <button
                onClick={() => handleDeleteNote(note.id)}
                className="p-1 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-950/30 transition-all shrink-0"
                title="Elimina nota"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))
        )}
      </div>

      {/* SEZIONE SALVA-BUDGET & TRUCCHI A SCOMPARSA (IN FONDO, NON INTRUSIVA) */}
      <div className="pt-2">
        <button
          onClick={() => setShowTips(!showTips)}
          className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-slate-900 to-slate-900 border border-emerald-500/30 flex items-center justify-between text-left transition-all active:scale-98 shadow-md"
        >
          <div className="flex items-center gap-2">
            <Ticket className="w-4 h-4 text-emerald-400" />
            <div>
              <h4 className="text-xs font-bold text-white">💡 Trucchi Salva-Budget & Gratuità Under 26</h4>
              <p className="text-[10px] text-emerald-300/80">Come risparmiare oltre 130€ in due a Parigi</p>
            </div>
          </div>
          {showTips ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
        </button>

        {showTips && (
          <div className="mt-2.5 p-4 rounded-2xl bg-slate-900/95 border border-slate-800 space-y-3.5 text-xs text-slate-300 animate-fade-in shadow-xl">
            
            {/* Under 26 */}
            <div className="space-y-1.5 border-b border-slate-800 pb-3">
              <span className="font-bold text-emerald-300 flex items-center gap-1">
                <Ticket className="w-3.5 h-3.5 text-emerald-400" />
                Ingressi GRATUITI Under 26 UE (Francesco 24 & Ragazza 22):
              </span>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Mostrando la <strong>carta d'identità italiana</strong> avete diritto all'ingresso gratuito a:
              </p>
              <ul className="list-disc list-inside text-[11px] text-slate-300 space-y-0.5">
                <li><strong>Musée du Louvre</strong> (risparmiate 22€ a testa)</li>
                <li><strong>Musée d'Orsay</strong> (risparmiate 16€ a testa)</li>
                <li><strong>Sainte-Chapelle</strong> (risparmiate 13€ a testa)</li>
                <li><strong>Terrazza panoramica Arco di Trionfo</strong> (risparmiate 16€ a testa)</li>
              </ul>
              <p className="text-[10px] text-amber-300 font-medium pt-0.5">
                *Consiglio: tenete sempre con voi un documento d'identità in originale.
              </p>
            </div>

            {/* Acqua gratis */}
            <div className="space-y-1.5 border-b border-slate-800 pb-3">
              <span className="font-bold text-sky-300 flex items-center gap-1">
                <Droplets className="w-3.5 h-3.5 text-sky-400" />
                Il trucco dell'acqua al ristorante:
              </span>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Nei bistrot e ristoranti chiedete sempre <em>"Une carafe d'eau, s'il vous plaît"</em> (pronuncia: <em>Ün caràf do</em>). È la fresca acqua di sorgente parigina, è <strong>gratuita per legge francese</strong> e vi fa risparmiare 6-8€ a pasto!
              </p>
            </div>

            {/* Mance */}
            <div className="space-y-1.5 border-b border-slate-800 pb-3">
              <span className="font-bold text-amber-300 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Le mance non sono obbligatorie:
              </span>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                In Francia il servizio al 15% è già compreso per legge nello scontrino (*service compris*). Potete lasciare 1-2€ sul piattino solo se il servizio è stato speciale.
              </p>
            </div>

            {/* Emergenze */}
            <div className="space-y-1">
              <span className="font-bold text-rose-300 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                Numeri di Emergenza Rapidi:
              </span>
              <p className="text-[11px] text-slate-300">
                Numero Unico Europeo: <strong>112</strong> • Consolato Generale d'Italia a Parigi: <strong>+33 1 44 30 47 00</strong>
              </p>
            </div>

          </div>
        )}
      </div>

    </div>
  );
};
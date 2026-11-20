import React, { useState, useEffect } from 'react';
import { Check, Plus, Trash2, ExternalLink } from 'lucide-react';

interface CheckItem {
  id: string;
  text: string;
  subtext?: string;
  isDone: boolean;
  linkUrl?: string;
  linkLabel?: string;
}

const DEFAULT_BOOKING_TASKS: CheckItem[] = [
  {
    id: 'task-notre-dame',
    text: 'Notre-Dame: prenotare lo slot orario gratuito',
    subtext: 'Il portale ufficiale apre gli slot la mattina stessa o poche ore prima per le 11:00 circa di mercoledì 9.',
    isDone: false,
    linkUrl: 'https://resa.notredamedeparis.fr/fr/reservationindividuelle/tickets',
    linkLabel: 'Portale Notre-Dame >'
  },
  {
    id: 'task-orangerie',
    text: 'Musée de l\'Orangerie: prenotare slot gratuito Under 26 a 0€',
    subtext: 'Per giovedì 10 alle ore 09:00. Priorità alle Ninfee di Monet.',
    isDone: false,
    linkUrl: 'https://www.musee-orangerie.fr/',
    linkLabel: 'Sito Orangerie >'
  },
  {
    id: 'task-louvre',
    text: 'Musée du Louvre: prenotare slot gratuito Under 26 a 0€',
    subtext: 'Per venerdì 11 alle ore 09:00. Ricordarsi di puntare subito agli Appartamenti Napoleone III.',
    isDone: false,
    linkUrl: 'https://www.ticketlouvre.fr/',
    linkLabel: 'Sito Louvre >'
  },
  {
    id: 'task-opera',
    text: 'Palais Garnier (Opéra): acquistare biglietti ridotti Under 26',
    subtext: 'Per venerdì 11 alle ore 14:30 (circa 10€ a persona).',
    isDone: false,
    linkUrl: 'https://www.operadeparis.fr/visites/palais-garnier',
    linkLabel: 'Biglietteria Opéra >'
  },
  {
    id: 'task-jungle',
    text: 'Jungle Palace: verificare prenotazione tavolo ore 20:00',
    subtext: 'Per venerdì 11 alle 20:00 al 12 Rue de la Fidélité.',
    isDone: true,
    linkUrl: 'https://www.ephemera-group.com/nos-restaurants/jungle-palace-paris',
    linkLabel: 'Jungle Palace >'
  },
  {
    id: 'task-docs',
    text: 'Documenti: carte d\'identità italiane in originale nel portafoglio',
    subtext: 'I musei francesi richiedono il documento originale (non fotocopia) per le gratuità Under 26 UE.',
    isDone: false
  }
];

interface NoteItem {
  id: string;
  text: string;
  isDone: boolean;
}

const DEFAULT_COUPLE_NOTES: NoteItem[] = [
  { id: 'cn-1', text: '🥐 Prendere il Cramique al cioccolato caldo da Fred (2 Rue Lepic o 24 Rue du Pont Louis-Philippe)', isDone: false },
  { id: 'cn-2', text: '🏰 Cerchietto natalizio con le orecchie a Disneyland Paris per l\'anniversario', isDone: false },
  { id: 'cn-3', text: '📸 Foto bacio romantico al tramonto dal Trocadéro con la Torre Eiffel che scintilla', isDone: false },
  { id: 'cn-4', text: '🎷 Serata Jazz seduti al tavolo al Duc des Lombards (42 Rue des Lombards) mercoledì sera', isDone: false },
  { id: 'cn-5', text: '🎁 Macarons da portare a casa come ricordo parigino', isDone: false }
];

export const EditorialChecklistView: React.FC = () => {
  const [tasks, setTasks] = useState<CheckItem[]>(() => {
    try {
      const saved = localStorage.getItem('parigi_editorial_tasks');
      return saved ? JSON.parse(saved) : DEFAULT_BOOKING_TASKS;
    } catch {
      return DEFAULT_BOOKING_TASKS;
    }
  });

  const [notes, setNotes] = useState<NoteItem[]>(() => {
    try {
      const saved = localStorage.getItem('parigi_editorial_notes');
      return saved ? JSON.parse(saved) : DEFAULT_COUPLE_NOTES;
    } catch {
      return DEFAULT_COUPLE_NOTES;
    }
  });

  const [newNoteInput, setNewNoteInput] = useState<string>('');

  const toggleTask = (id: string) => {
    const updated = tasks.map(t => t.id === id ? { ...t, isDone: !t.isDone } : t);
    setTasks(updated);
    try {
      localStorage.setItem('parigi_editorial_tasks', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const toggleNote = (id: string) => {
    const updated = notes.map(n => n.id === id ? { ...n, isDone: !n.isDone } : n);
    setNotes(updated);
    try {
      localStorage.setItem('parigi_editorial_notes', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const deleteNote = (id: string) => {
    const updated = notes.filter(n => n.id !== id);
    setNotes(updated);
    try {
      localStorage.setItem('parigi_editorial_notes', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const addNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteInput.trim()) return;
    const newNote: NoteItem = {
      id: `cn-${Date.now()}`,
      text: newNoteInput.trim(),
      isDone: false
    };
    const updated = [newNote, ...notes];
    setNotes(updated);
    setNewNoteInput('');
    try {
      localStorage.setItem('parigi_editorial_notes', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="space-y-7 max-w-4xl mx-auto px-4 py-5 animate-fade-in">
      
      {/* Title & Editorial Subtitle */}
      <div className="space-y-2 border-b border-[#e5e0d5] pb-4">
        <h1 className="font-editorial-serif text-3xl sm:text-4xl font-bold text-[#1a1918]">
          Da fare ora
        </h1>
        <p className="text-xs sm:text-sm text-[#504b42] leading-relaxed max-w-2xl">
          Le prenotazioni e i dettagli operativi da sbrigare per partire leggeri, senza pensieri e senza code.
        </p>
      </div>

      {/* Checklist Prenotazioni & Scadenze */}
      <div className="space-y-3">
        <h2 className="font-editorial-serif text-2xl font-bold text-[#1a1918]">
          Prenotazioni &amp; Ingressi
        </h2>

        <div className="space-y-2.5">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`p-3.5 rounded-lg border transition-all flex items-start gap-3 bg-white ${
                task.isDone ? 'border-[#dfdbd1] opacity-70' : 'border-[#e0dbcf] shadow-2xs'
              }`}
            >
              <button
                onClick={() => toggleTask(task.id)}
                className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all ${
                  task.isDone
                    ? 'bg-[#2a7a40] border-[#2a7a40] text-white'
                    : 'border-[#b5afa3] hover:border-[#1a1918] text-transparent'
                }`}
              >
                <Check className="w-3 h-3 stroke-[3]" />
              </button>

              <div className="flex-1 space-y-0.5 text-xs">
                <div className="flex items-baseline justify-between gap-2 flex-wrap">
                  <p className={`font-bold text-[#1a1918] ${task.isDone ? 'line-through text-[#857f72]' : ''}`}>
                    {task.text}
                  </p>
                  {task.linkUrl && (
                    <a
                      href={task.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-editorial-mono text-[11px] text-[#2f5d8a] hover:underline"
                    >
                      {task.linkLabel || 'link >'}
                    </a>
                  )}
                </div>
                {task.subtext && (
                  <p className="text-[#615b50] leading-relaxed pt-0.5">
                    {task.subtext}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Note Personali della Coppia */}
      <div className="border-t border-[#e5e0d5] pt-6 space-y-4">
        <div className="space-y-1">
          <h2 className="font-editorial-serif text-2xl font-bold text-[#1a1918]">
            Note &amp; Desideri per noi
          </h2>
          <p className="text-xs text-[#706a5e]">
            Piccoli promemoria, cose da comprare o momenti speciali da non dimenticare.
          </p>
        </div>

        {/* Input Aggiungi Nota */}
        <form onSubmit={addNote} className="flex gap-2">
          <input
            type="text"
            value={newNoteInput}
            onChange={(e) => setNewNoteInput(e.target.value)}
            placeholder="Aggiungi una nota o un desiderio..."
            className="flex-1 px-3 py-2 text-xs bg-white border border-[#ccc6b8] rounded font-editorial-sans focus:outline-none focus:border-[#1a1918]"
          />
          <button
            type="submit"
            className="px-3.5 py-2 bg-[#1a1918] hover:bg-black text-white rounded text-xs font-editorial-mono font-medium flex items-center gap-1 transition-colors shrink-0"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Aggiungi</span>
          </button>
        </form>

        {/* Lista Note */}
        <div className="space-y-2">
          {notes.map((note) => (
            <div
              key={note.id}
              className={`p-3 rounded-lg border bg-white flex items-center justify-between gap-2 text-xs ${
                note.isDone ? 'border-[#dfdbd1] opacity-60' : 'border-[#e0dbcf] shadow-2xs'
              }`}
            >
              <div className="flex items-center gap-2.5 flex-1 min-w-0">
                <button
                  onClick={() => toggleNote(note.id)}
                  className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all ${
                    note.isDone
                      ? 'bg-[#2a7a40] border-[#2a7a40] text-white'
                      : 'border-[#b5afa3] hover:border-[#1a1918] text-transparent'
                  }`}
                >
                  <Check className="w-3 h-3 stroke-[3]" />
                </button>
                <span className={`text-[#262420] break-words ${note.isDone ? 'line-through text-[#857f72]' : ''}`}>
                  {note.text}
                </span>
              </div>

              <button
                onClick={() => deleteNote(note.id)}
                className="text-[#999] hover:text-[#8a4233] p-1 shrink-0"
                title="Elimina"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

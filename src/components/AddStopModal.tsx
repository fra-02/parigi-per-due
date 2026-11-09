import React, { useState } from 'react';
import { X, Plus, Sparkles, Clock, MapPin } from 'lucide-react';

interface AddStopModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddStop: (title: string, time?: string) => void;
}

export const AddStopModal: React.FC<AddStopModalProps> = ({ isOpen, onClose, onAddStop }) => {
  const [title, setTitle] = useState<string>('');
  const [time, setTime] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddStop(title.trim(), time.trim() || undefined);
    setTitle('');
    setTime('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full sm:max-w-md bg-[#0f1422] border border-slate-800 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden p-5 space-y-4">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center justify-center">
              <Plus className="w-4 h-4 text-rose-400" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base">Aggiungi Tappa al Volo</h3>
              <p className="text-[11px] text-slate-400">Visto un posto carino per strada? Salvalo subito!</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form semplice e veloce */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
              Cosa avete visto? *
            </label>
            <input
              type="text"
              required
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Es. Forno con croissant caldi, piazzetta, mercatino..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-rose-400"
            />
          </div>

          <div>
            <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
              Orario indicativo (opzionale)
            </label>
            <input
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Es. 16:30 o adesso"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-rose-400"
            />
          </div>

          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold"
            >
              Annulla
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-400 text-white text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-lg shadow-rose-950/40"
            >
              <Plus className="w-4 h-4" />
              <span>Aggiungi Tappa</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

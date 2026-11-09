import React from 'react';
import { X, Sparkles, CheckCircle, SlidersHorizontal, HeartHandshake } from 'lucide-react';

interface NotesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotesModal: React.FC<NotesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full sm:max-w-xl max-h-[85vh] bg-[#0f1422] border border-slate-800 rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/80 sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center">
              <SlidersHorizontal className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                Filosofia del Viaggio
              </h2>
              <p className="text-xs text-slate-400">Perché questo piano è equilibrato e romantico</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-slate-300 text-xs sm:text-sm">
          
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-rose-950/30 border border-purple-500/20 space-y-2">
            <div className="flex items-center gap-2 font-bold text-purple-300">
              <HeartHandshake className="w-4 h-4 text-rose-400" />
              Il vostro obiettivo di coppia
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Volete giornate che abbiano movimento e varietà, ma anche il tempo di <strong>fermarvi perché un posto vi piace</strong>. Non un tour de force per timbrare il cartellino, ma un viaggio per guardarvi negli occhi e vivere Parigi e il vostro anniversario con serenità.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-white text-xs sm:text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              I 3 Grandi Cambiamenti Chiave:
            </h3>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <p className="font-semibold text-amber-300 text-xs">1. Orsay spostato al Giovedì mattina</p>
              <p className="text-xs text-slate-400">Permette una visita tranquilla ai quadri impressionisti e libera il Mercoledì per godersi la riapertura di Notre-Dame e i vicoli del Marais.</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <p className="font-semibold text-amber-300 text-xs">2. Mercoledì dedicato al Marais & Crociera alle 18:45</p>
              <p className="text-xs text-slate-400">Passeggiata lenta da Île Saint-Louis fino a Place des Vosges, per poi raggiungere Pont Neuf con ampio anticipo senza corse.</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <p className="font-semibold text-amber-300 text-xs">3. Venerdì: Louvre, Opéra & Grandi Magazzini</p>
              <p className="text-xs text-slate-400">Tutti raggruppati nello stesso asse pedonale! Louvre (9:00), mercatino Tuileries a pranzo, Opéra (14:30), albero gigante di Galeries Lafayette e Place Vendôme la sera.</p>
            </div>
          </div>

          {/* Cosa abbiamo escluso deliberatamente */}
          <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
            <h3 className="font-bold text-white text-xs sm:text-sm flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Cosa abbiamo tolto (e perché è un bene!)
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Abbiamo escluso dal programma principale: <strong>Panthéon, visita interna agli Invalides, Giardini del Lussemburgo e il giro dedicato sulla Metro 6</strong>.
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              Sono rinunce deliberate: così conservate Louvre, Orsay, Sainte-Chapelle, Notre-Dame e Opéra senza accumulare 25 km di camminata al giorno e distruggervi i piedi!
            </p>
          </div>

          {/* Prossimi step da fare subito */}
          <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-500/20 text-amber-200 text-xs space-y-1.5">
            <div className="font-bold text-amber-300">Promemoria Prenotazioni da fare:</div>
            <ul className="space-y-1 list-disc list-inside text-amber-200/90">
              <li>Cercare slot gratuito Musée d'Orsay per Giovedì 10 alle 09:30.</li>
              <li>Prenotare slot gratuito Louvre per Venerdì 11 alle 09:00.</li>
              <li>Prenotare Opéra Garnier per Venerdì 11 verso le 14:30 (tariffa 10€).</li>
              <li>Notre-Dame: prenotare lo slot la mattina stessa di Mercoledì 9.</li>
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-900 border-t border-slate-800">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-medium text-xs sm:text-sm transition-colors"
          >
            Tutto chiaro!
          </button>
        </div>

      </div>
    </div>
  );
};

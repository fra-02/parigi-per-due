import React from 'react';
import { X, Ticket, Check, ShieldCheck, Info } from 'lucide-react';

interface Under26ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Under26Modal: React.FC<Under26ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const gratuities = [
    {
      place: 'Musée du Louvre',
      price: 'GRATUITO 100%',
      rule: 'Valido per cittadini UE 18-25 anni. È obbligatorio prenotare online lo slot orario a 0€ sul sito ticketlouvre.fr per evitare la fila esterna.',
      badge: 'Risparmio: 22€ a testa'
    },
    {
      place: 'Musée d\'Orsay',
      price: 'GRATUITO 100%',
      rule: 'Valido per cittadini UE 18-25 anni presentando documento valido alle casse/tornelli prioritari. Consigliato slot gratuito sul sito.',
      badge: 'Risparmio: 16€ a testa'
    },
    {
      place: 'Sainte-Chapelle',
      price: 'GRATUITO 100%',
      rule: 'Gratis per giovani europei 18-25 anni. È richiesta la prenotazione dell\'orario (mantenete la prenotazione attuale delle 9:30).',
      badge: 'Risparmio: 13€ a testa'
    },
    {
      place: 'Arco di Trionfo (Salita terrazza)',
      price: 'GRATUITO 100%',
      rule: 'Accesso gratuito alla terrazza panoramica per cittadini UE sotto i 26 anni, mostrando la carta d\'identità all\'ingresso prioritario.',
      badge: 'Risparmio: 16€ a testa'
    },
    {
      place: 'Opéra Garnier (Palais Garnier)',
      price: 'RIDOTTO GIOVANI (~10€)',
      rule: 'Tariffa agevolata per giovani 13-25 anni (anziché 15-18€). Prenotabile online o acquistabile alle biglietterie.',
      badge: 'Tariffa Giovani'
    },
    {
      place: 'Cattedrale di Notre-Dame',
      price: 'GRATUITO (Accesso Normale)',
      rule: 'L\'ingresso alla cattedrale è gratuito per tutti. La prenotazione dello slot orario apre poche ore prima o la mattina stessa sul portale ufficiale.',
      badge: 'Slot Giorno Stesso'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full sm:max-w-xl max-h-[85vh] bg-[#0f1422] border border-slate-800 rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/80 sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
              <Ticket className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                Gratuità Under 26 UE
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">22 e 24 anni</span>
              </h2>
              <p className="text-xs text-slate-400">Tutti i vantaggi per cittadini italiani ed europei</p>
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
          
          {/* Important ID notice */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/30">
            <div className="flex items-center gap-2 font-bold text-emerald-300 mb-1.5 text-xs sm:text-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Cosa avere SEMPRE nella borsa/tasca:
            </div>
            <ul className="space-y-1 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span><strong>Carta d'Identità italiana / Passaporto</strong> in corso di validità (dimostra età e cittadinanza UE).</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span><strong>Tessera Universitaria</strong> o libretto digitale universitario sullo smartphone (per eventuali sconti studenti).</span>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5">
            {gratuities.map((item, idx) => (
              <div key={idx} className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-white text-xs sm:text-sm">{item.place}</span>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                    {item.price}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-1.5">
                  {item.rule}
                </p>
                <div className="flex items-center gap-1 text-[11px] text-amber-300/80">
                  <Info className="w-3 h-3 text-amber-400" />
                  <span>{item.badge}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-900 border-t border-slate-800">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-medium text-xs sm:text-sm transition-colors"
          >
            Ho capito, grazie!
          </button>
        </div>

      </div>
    </div>
  );
};

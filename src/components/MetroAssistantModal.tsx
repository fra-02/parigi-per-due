import React from 'react';
import { X, Compass, Smartphone, CreditCard, AlertTriangle, Train, ArrowRight } from 'lucide-react';
import { METRO_LINES, getCitymapperUrl } from '../data/itineraryData';

interface MetroAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MetroAssistantModal: React.FC<MetroAssistantModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const quickTransits = [
    {
      title: 'Disneyland Paris (RER A)',
      detail: 'Da Châtelet-Les Halles o Nation con RER A fino al capolinea Marne-la-Vallée Chessy (~40 min)',
      lat: 48.8700,
      lng: 2.7830,
      address: 'Marne-la-Vallée Chessy, 77700 Chessy',
      badge: 'Giorno Anniversario'
    },
    {
      title: 'Aeroporto di Parigi-Orly (Metro 14)',
      detail: 'Da Madeleine o Châtelet con Metro 14 diretta ultra-rapida senza conducente',
      lat: 48.7262,
      lng: 2.3652,
      address: 'Aéroport d\'Orly, 94390 Orly',
      badge: 'Rientro Volo'
    },
    {
      title: 'Montmartre / Sacré-Cœur (Metro 12 / 2)',
      detail: 'Fermata Lamarck-Caulaincourt, Abbesses o Anvers con Funicolare',
      lat: 48.8867,
      lng: 2.3431,
      address: 'Basilique du Sacré-Cœur, 75018 Paris',
      badge: 'Hotel & Panorama'
    },
    {
      title: 'Sainte-Chapelle & Notre-Dame (Metro 4)',
      detail: 'Fermata Cité o Saint-Michel Notre-Dame',
      lat: 48.8554,
      lng: 2.3450,
      address: 'Île de la Cité, 75001 Paris',
      badge: 'Cuore Storico'
    },
    {
      title: 'Tour Eiffel & Trocadéro (Metro 6 / 9)',
      detail: 'Fermata Trocadéro per la vista panoramica al tramonto',
      lat: 48.8624,
      lng: 2.2872,
      address: 'Place du Trocadéro, 75016 Paris',
      badge: 'Luci Romantiche'
    },
    {
      title: 'Musée du Louvre & Tuileries (Metro 1)',
      detail: 'Fermata Palais Royal - Musée du Louvre',
      lat: 48.8606,
      lng: 2.3376,
      address: 'Musée du Louvre, 75001 Paris',
      badge: 'Arte & Mercatino'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full sm:max-w-xl max-h-[88vh] bg-[#0f1422] border border-slate-800 rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/80 sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
              <Compass className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                Citymapper & Metro Parigi
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">Smart Transit</span>
              </h2>
              <p className="text-xs text-slate-400">Come muoversi senza stress in due</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Scrollable */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-5 text-slate-300 text-xs sm:text-sm">
          
          {/* Box Citymapper Perchè è il migliore */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30">
            <div className="flex items-center gap-2 font-bold text-emerald-300 mb-1.5 text-sm">
              <Compass className="w-4 h-4 text-emerald-400" />
              Perché Citymapper è fondamentale a Parigi?
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Quale carrozza prendere:</strong> ti dice se salire in testa, al centro o in coda al treno per uscire proprio davanti alle scale della stazione!</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Scioperi & Guasti in tempo reale:</strong> ti avvisa subito se una linea è rallentata e ti calcola all'istante l'alternativa con i bus.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Integrazione nell'app:</strong> ogni tappa di questa mini-app ha il pulsante verde che apre Citymapper già impostato sulla destinazione.</span>
              </li>
            </ul>
          </div>

          {/* Quick Transit Targets con Citymapper */}
          <div>
            <h3 className="font-bold text-white text-sm mb-2.5 flex items-center gap-2">
              <Train className="w-4 h-4 text-sky-400" />
              Rotte Rapide del Viaggio (Apri in Citymapper con 1 tap)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {quickTransits.map((item, idx) => (
                <a
                  key={idx}
                  href={getCitymapperUrl(item.lat, item.lng, item.title, item.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-850 transition-all flex flex-col justify-between group active:scale-98"
                >
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <span className="font-semibold text-xs text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </span>
                    <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-2 line-clamp-2">
                    {item.detail}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-400 mt-auto">
                    <span>Calcola itinerario</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Come pagare i biglietti: Apple Wallet & Android */}
          <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2.5">
            <h3 className="font-bold text-white text-sm flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-rose-400" />
              Biglietti sullo Smartphone (Niente code ai distributori!)
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="font-bold text-slate-200 mb-1 flex items-center gap-1.5">
                  <span className="text-base"></span> Per chi ha iPhone (iOS)
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Apri <strong>Apple Wallet</strong> $\rightarrow$ tocca <strong>"+"</strong> $\rightarrow$ <em>Carta trasporti</em> $\rightarrow$ <em>Francia</em> $\rightarrow$ <strong>Navigo</strong>. Puoi acquistare i carnet di biglietti e appoggiare direttamente l'iPhone ai tornelli!
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="font-bold text-slate-200 mb-1 flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-emerald-400" /> Per chi ha Android
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Scarica l'app <strong>"Bonjour RATP"</strong> o <strong>"Île-de-France Mobilités"</strong>: acquisti i biglietti dematerializzati ed entri nei tornelli avvicinando il telefono con NFC.
                </p>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-amber-950/30 border border-amber-500/20 text-amber-200 text-xs flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong>Attenzione alle tratte speciali:</strong> I biglietti T+ normali valgono solo per la metro e i bus cittadini. Per <strong>Disneyland (RER A zona 5)</strong> e per <strong>l'Aeroporto di Orly (Metro 14)</strong> serve il biglietto dedicato per quella destinazione.
              </div>
            </div>
          </div>

          {/* Linee Chiave del vostro viaggio */}
          <div>
            <h3 className="font-bold text-white text-sm mb-2.5">
              Le Linee Principali del Vostro Itinerario
            </h3>
            <div className="space-y-2">
              {METRO_LINES.map((m, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                  <span className={`px-2 py-0.5 rounded font-extrabold text-xs shrink-0 ${m.badgeBg} ${m.badgeText}`}>
                    {m.line}
                  </span>
                  <div className="text-xs">
                    <p className="text-slate-200 leading-snug mb-0.5 font-medium">{m.utility}</p>
                    <p className="text-[11px] text-slate-400">{m.keyStops}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-900 border-t border-slate-800 text-center">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-medium text-xs sm:text-sm transition-colors"
          >
            Chiudi Assistente Metro
          </button>
        </div>

      </div>
    </div>
  );
};

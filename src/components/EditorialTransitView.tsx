import React from 'react';
import { METRO_LINES } from '../data/itineraryData';
import { Plane, Train, CreditCard, Compass } from 'lucide-react';

export const EditorialTransitView: React.FC = () => {
  return (
    <div className="space-y-7 max-w-4xl mx-auto px-4 py-5 animate-fade-in">
      
      {/* Title & Editorial Subtitle */}
      <div className="space-y-2 border-b border-[#e5e0d5] pb-4">
        <h1 className="font-editorial-serif text-3xl sm:text-4xl font-bold text-[#1a1918]">
          Voli &amp; Trasporti
        </h1>
        <p className="text-xs sm:text-sm text-[#504b42] leading-relaxed max-w-2xl">
          Tutti i collegamenti essenziali: dall'atterraggio a Beauvais alla comodissima linea 14 diretta dentro l'aeroporto di Orly, passando per la RER A di Disneyland.
        </p>
      </div>

      {/* Voli Wizz Air Card */}
      <div className="border border-[#e5e0d5] bg-white rounded-xl p-4 sm:p-5 space-y-4 shadow-2xs">
        <div className="flex items-center gap-2 border-b border-[#f0ece3] pb-2.5">
          <Plane className="w-5 h-5 text-[#8a4233]" />
          <h2 className="font-editorial-serif text-xl font-bold text-[#1a1918]">
            I due voli Wizz Air
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#38342c]">
          
          {/* Volo Andata */}
          <div className="p-3 bg-[#f8f6f0] rounded-lg space-y-1.5 border border-[#ede9df]">
            <div className="flex items-center justify-between">
              <span className="font-editorial-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#8a4233] text-white">
                ANDATA • LUNEDÌ 7 DICEMBRE
              </span>
              <span className="font-editorial-mono text-[11px] text-[#787265]">Wizz Air</span>
            </div>
            <p className="font-bold text-sm text-[#1a1918]">
              Atterraggio: ore 12:50 @ Parigi Beauvais
            </p>
            <p className="text-[#555046] leading-relaxed">
              Dall'uscita del terminal prendete la navetta ufficiale bus per Parigi (arriva a Porte Maillot in ~1h15). Da Porte Maillot prendete Metro 1 fino a Concorde, poi Metro 12 fino a Lamarck-Caulaincourt.
            </p>
          </div>

          {/* Volo Ritorno */}
          <div className="p-3 bg-[#f8f6f0] rounded-lg space-y-1.5 border border-[#ede9df]">
            <div className="flex items-center justify-between">
              <span className="font-editorial-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#2a7a40] text-white">
                RITORNO • SABATO 12 DICEMBRE
              </span>
              <span className="font-editorial-mono text-[11px] text-[#787265]">Wizz Air</span>
            </div>
            <p className="font-bold text-sm text-[#1a1918]">
              Decollo: ore 16:40 @ Parigi Orly
            </p>
            <p className="text-[#555046] leading-relaxed">
              Partenza hotel ore 12:15–12:30 con Metro 12 fino a Madeleine → cambio su <strong>Metro 14</strong> che porta DIRETTAMENTE dentro l'aeroporto di Orly. Obiettivo: arrivare in aeroporto alle 14:00.
            </p>
          </div>

        </div>
      </div>

      {/* RER A Disneyland Paris */}
      <div className="border border-[#e5e0d5] bg-white rounded-xl p-4 sm:p-5 space-y-2.5 shadow-2xs">
        <div className="flex items-center gap-2 border-b border-[#f0ece3] pb-2">
          <Train className="w-5 h-5 text-[#5c3e7a]" />
          <h2 className="font-editorial-serif text-lg font-bold text-[#1a1918]">
            RER A per Disneyland Paris (Martedì 8)
          </h2>
        </div>
        <p className="text-xs text-[#403c35] leading-relaxed">
          Il treno veloce <strong>RER A</strong> parte dal centro di Parigi (es. stazioni <em>Châtelet-Les Halles</em> o <em>Charles de Gaulle-Étoile</em>) in direzione <strong>Marne-la-Vallée Chessy</strong>. Il tragitto dura circa 40 minuti e il capolinea è letteralmente di fronte all'ingresso dei parchi Disney.
        </p>
      </div>

      {/* Guida Linee Metro Chiave */}
      <div className="space-y-3">
        <h2 className="font-editorial-serif text-2xl font-bold text-[#1a1918]">
          Le linee della metropolitana parigina che userete
        </h2>

        <div className="space-y-2">
          {METRO_LINES.map((m, idx) => (
            <div key={idx} className="p-3 rounded-lg border border-[#e5e0d5] bg-white space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-editorial-mono text-xs font-bold px-2 py-0.5 rounded text-white" style={{ backgroundColor: m.color }}>
                  {m.line}
                </span>
                <span className="font-editorial-mono text-[10px] text-[#857f72]">
                  {m.keyStops}
                </span>
              </div>
              <p className="text-xs text-[#403c35] pt-0.5 leading-relaxed">
                {m.utility}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Biglietti & Navigo Easy */}
      <div className="p-4 bg-[#f8f6f0] border border-[#e5e0d5] rounded-xl space-y-2 text-xs text-[#403c35]">
        <h3 className="font-bold text-sm text-[#1a1918] flex items-center gap-1.5">
          <CreditCard className="w-4 h-4 text-[#8a4233]" />
          <span>Come pagare metro e bus a Parigi:</span>
        </h3>
        <p className="leading-relaxed">
          Il modo più pratico è comprare in qualsiasi stazione la tessera ricaricabile <strong>Navigo Easy</strong> (costa 2€) e caricare un carnet di biglietti singoli T+, oppure acquistare i biglietti direttamente dall'app <em>Île-de-France Mobilités</em> o Apple Wallet / Google Wallet avvicinando semplicemente lo smartphone ai tornelli.
        </p>
      </div>

    </div>
  );
};

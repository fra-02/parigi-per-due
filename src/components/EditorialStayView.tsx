import React from 'react';
import { getGoogleMapsUrl, getCitymapperUrl } from '../data/itineraryData';
import { Hotel, Phone, Navigation, Clock, ShieldCheck, MapPin } from 'lucide-react';

export const EditorialStayView: React.FC = () => {
  const hotelLat = 48.8906;
  const hotelLng = 2.3353;
  const hotelName = 'Hôtel Jardins de Montmartre';
  const hotelAddress = '131 Rue Caulaincourt, 75018 Paris';

  const gmapsUrl = getGoogleMapsUrl(hotelLat, hotelLng, hotelName);
  const citymapperUrl = getCitymapperUrl(hotelLat, hotelLng, hotelName, hotelAddress);

  return (
    <div className="space-y-6 max-w-4xl mx-auto px-4 py-5 animate-fade-in">
      
      {/* Editorial Header */}
      <div className="space-y-2 border-b border-[#e5e0d5] pb-4">
        <h1 className="font-editorial-serif text-3xl sm:text-4xl font-bold text-[#1a1918]">
          Dormire
        </h1>
        <p className="text-xs sm:text-sm text-[#504b42] leading-relaxed max-w-2xl">
          Tutto ciò che vi serve sapere sulla vostra sistemazione per il viaggio: orari, deposito bagagli, metro e collegamenti con gli aeroporti.
        </p>
      </div>

      {/* Main Hotel Card (PRENOTATO) */}
      <div className="border-2 border-[#1a1918] bg-white rounded-xl p-4 sm:p-5 space-y-4 shadow-sm">
        
        {/* Header Hotel */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#ece7dd] pb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-editorial-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#2a7a40] text-white tracking-wider uppercase">
                PRENOTATO • 5 NOTTI
              </span>
              <span className="font-editorial-mono text-[11px] text-[#787265]">
                7 – 12 Dicembre 2026
              </span>
            </div>

            <h2 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-[#1a1918]">
              Hôtel Jardins de Montmartre
            </h2>
          </div>

          <div className="flex items-center gap-2 pt-1 sm:pt-0">
            <a
              href="tel:+33146063742"
              className="px-3 py-1.5 rounded border border-[#cfc9bc] hover:border-[#1a1918] bg-[#fbf9f5] font-editorial-mono text-xs text-[#1a1918] flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#8a4233]" />
              <span>Chiama hotel</span>
            </a>
            <a
              href={gmapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded bg-[#1a1918] hover:bg-black text-white font-editorial-mono text-xs flex items-center gap-1.5 transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Apri Mappa</span>
            </a>
          </div>
        </div>

        {/* Dettagli Indirizzo & Metro */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#38342c]">
          <div className="p-3 bg-[#f8f6f0] rounded-lg space-y-1">
            <span className="font-editorial-mono text-[10px] text-[#857f72] uppercase font-bold block">
              Indirizzo
            </span>
            <p className="font-medium text-[#1a1918]">
              131 Rue Caulaincourt, 75018 Paris
            </p>
            <p className="text-[11px] text-[#706a5e]">
              Quartiere Montmartre / 18° arr.
            </p>
          </div>

          <div className="p-3 bg-[#f8f6f0] rounded-lg space-y-1">
            <span className="font-editorial-mono text-[10px] text-[#857f72] uppercase font-bold block">
              Fermata Metro
            </span>
            <p className="font-bold text-[#1a1918]">
              Lamarck - Caulaincourt (Metro 12)
            </p>
            <p className="text-[11px] text-[#706a5e]">
              A soli 3 minuti a piedi dall'hotel
            </p>
          </div>

          <div className="p-3 bg-[#f8f6f0] rounded-lg space-y-1">
            <span className="font-editorial-mono text-[10px] text-[#857f72] uppercase font-bold block">
              Orari Check-in &amp; Check-out
            </span>
            <p className="font-medium text-[#1a1918]">
              Check-in dalle 15:00 • Check-out entro 11:30
            </p>
            <p className="text-[11px] text-[#2a7a40] font-semibold">
              Deposito bagagli gratuito per sabato
            </p>
          </div>
        </div>

        {/* Informazioni Pratiche sui Trasferimenti */}
        <div className="space-y-3 pt-2 text-xs text-[#403c35]">
          <div className="p-3.5 bg-[#f4efe4] border-l-3 border-[#8a4233] space-y-1 rounded-r-md">
            <h4 className="font-bold text-[#1a1918] flex items-center gap-1.5">
              <span>Arrivo Lunedì 7 dall'Aeroporto di Beauvais:</span>
            </h4>
            <p className="leading-relaxed">
              Dopo l'atterraggio delle 12:50, prendete la navetta ufficiale fino a Parigi (Porte Maillot, ~1h15). Da Porte Maillot prendete la <strong>Metro 1</strong> fino a Concorde, poi cambio sulla <strong>Metro 12</strong> fino alla fermata <strong>Lamarck - Caulaincourt</strong>. Uscite su Rue Caulaincourt: l'hotel è a 250 metri.
            </p>
          </div>

          <div className="p-3.5 bg-[#edf3ee] border-l-3 border-[#2a7a40] space-y-1 rounded-r-md">
            <h4 className="font-bold text-[#1a1918] flex items-center gap-1.5">
              <span>Partenza Sabato 12 per l'Aeroporto di Orly:</span>
            </h4>
            <p className="leading-relaxed">
              Dopo il check-out lasciate i bagagli in reception. Verso le 12:15 recuperate le valigie e salite sulla <strong>Metro 12</strong> da Lamarck-Caulaincourt fino a <strong>Madeleine</strong>. Qui cambio diretto con la moderna <strong>Metro 14</strong> che vi porta DIRETTAMENTE dentro l'aeroporto di Orly (~45 minuti di viaggio totale). Obiettivo aeroporto: ore 14:00 (volo Wizz Air 16:40).
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

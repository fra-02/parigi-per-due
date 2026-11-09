import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Hotel, 
  MapPin, 
  Search, 
  Train, 
  Sparkles, 
  ArrowRight, 
  Save, 
  Edit3, 
  Smartphone, 
  CreditCard, 
  AlertTriangle,
  ExternalLink
} from 'lucide-react';
import { METRO_LINES, getCitymapperUrl } from '../data/itineraryData';

export const TransitNavigator: React.FC = () => {
  const [hotelAddress, setHotelAddress] = useState<string>('Montmartre, Paris');
  const [hotelCoords, setHotelCoords] = useState<{ lat: number; lng: number }>({ lat: 48.8879, lng: 2.3398 });
  const [isEditingHotel, setIsEditingHotel] = useState<boolean>(false);
  const [tempHotelInput, setTempHotelInput] = useState<string>('');
  const [customDestination, setCustomDestination] = useState<string>('');

  useEffect(() => {
    try {
      const savedHotel = localStorage.getItem('parigi_hotel_address');
      if (savedHotel) {
        setHotelAddress(savedHotel);
      }
      const savedCoords = localStorage.getItem('parigi_hotel_coords');
      if (savedCoords) {
        setHotelCoords(JSON.parse(savedCoords));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleSaveHotel = () => {
    if (tempHotelInput.trim()) {
      setHotelAddress(tempHotelInput.trim());
      localStorage.setItem('parigi_hotel_address', tempHotelInput.trim());
      setIsEditingHotel(false);
    }
  };

  const handleCustomSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (customDestination.trim()) {
      const url = `https://citymapper.com/directions?endaddress=${encodeURIComponent(customDestination.trim() + ', Paris')}`;
      window.open(url, '_blank');
    }
  };

  const quickMissions = [
    {
      title: '🏰 Disneyland Paris',
      badge: 'RER A (~40 min)',
      detail: 'Stazione Marne-la-Vallée Chessy (uscita proprio sui parchi)',
      lat: 48.8700,
      lng: 2.7830,
      address: 'Marne-la-Vallée Chessy, 77700 Chessy'
    },
    {
      title: '✈️ Aeroporto di Parigi-Orly',
      badge: 'Metro 14 Diretta',
      detail: 'La metro automatica veloce da Madeleine o Châtelet fino al terminal',
      lat: 48.7262,
      lng: 2.3652,
      address: 'Aéroport d\'Orly, 94390 Orly'
    },
    {
      title: '✨ Basilica del Sacré-Cœur',
      badge: 'Metro 12 / 2',
      detail: 'Vista mozzafiato da Montmartre e piazzetta dei pittori',
      lat: 48.8867,
      lng: 2.3431,
      address: 'Sacré-Cœur, 75018 Paris'
    },
    {
      title: '⛵ Crociera Pont Neuf',
      badge: 'Metro 7 (Pont Neuf)',
      detail: 'Punto d\'imbarco della vostra crociera serale sulla Senna',
      lat: 48.8571,
      lng: 2.3406,
      address: 'Square du Vert-Galant, Pont Neuf, 75001 Paris'
    },
    {
      title: '🗼 Tour Eiffel & Trocadéro',
      badge: 'Metro 6 / 9',
      detail: 'La terrazza del Trocadéro per ammirare le luci scintillanti',
      lat: 48.8624,
      lng: 2.2872,
      address: 'Place du Trocadéro, 75016 Paris'
    },
    {
      title: '🏛️ Musée du Louvre & Tuileries',
      badge: 'Metro 1',
      detail: 'La piramide di vetro e il villaggio natalizio delle Tuileries',
      lat: 48.8606,
      lng: 2.3376,
      address: 'Musée du Louvre, 75001 Paris'
    },
    {
      title: '🌹 Notre-Dame & Sainte-Chapelle',
      badge: 'Metro 4 (Cité)',
      detail: 'Il cuore medievale di Parigi sull\'Île de la Cité',
      lat: 48.8554,
      lng: 2.3450,
      address: '10 Bd du Palais, 75001 Paris'
    },
    {
      title: '🛍️ Opéra Garnier & Galeries Lafayette',
      badge: 'Metro 3 / 7 / 8 / 9',
      detail: 'L\'albero gigante dei grandi magazzini e il teatro dorato',
      lat: 48.8719,
      lng: 2.3316,
      address: 'Pl. de l\'Opéra, 75009 Paris'
    }
  ];

  const hotelCitymapperUrl = `https://citymapper.com/directions?endcoord=${hotelCoords.lat}%2C${hotelCoords.lng}&endname=${encodeURIComponent('Nostro Hotel')}&endaddress=${encodeURIComponent(hotelAddress)}`;

  return (
    <div className="space-y-4">
      
      {/* Box SOS Riportaci in Hotel */}
      <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-rose-950/50 via-slate-900 to-amber-950/30 border border-rose-500/40 shadow-xl">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center justify-center">
              <Hotel className="w-4 h-4 text-rose-400" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-rose-400 tracking-wider">
                Pulsante Salvavita
              </span>
              <h2 className="text-base font-extrabold text-white">Il Nostro Hotel</h2>
            </div>
          </div>

          <button
            onClick={() => {
              setTempHotelInput(hotelAddress);
              setIsEditingHotel(!isEditingHotel);
            }}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs flex items-center gap-1"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Modifica</span>
          </button>
        </div>

        {isEditingHotel ? (
          <div className="space-y-2 my-2">
            <input
              type="text"
              value={tempHotelInput}
              onChange={(e) => setTempHotelInput(e.target.value)}
              placeholder="Es. Hotel Le Chat Noir, 68 Bd de Clichy..."
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-rose-400"
            />
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setIsEditingHotel(false)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs"
              >
                Annulla
              </button>
              <button
                onClick={handleSaveHotel}
                className="px-3 py-1.5 rounded-lg bg-rose-600 text-white text-xs font-bold flex items-center gap-1"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Salva Indirizzo</span>
              </button>
            </div>
          </div>
        ) : (
          <p className="text-xs text-slate-300 mb-3 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span className="truncate">{hotelAddress}</span>
          </p>
        )}

        {/* Pulsantone Riportaci all'Hotel */}
        <a
          href={hotelCitymapperUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-[#288330] to-[#1e6624] hover:from-[#2e9336] hover:to-[#227529] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 active:scale-98 transition-all"
        >
          <Compass className="w-5 h-5 text-white" />
          <span>🚇 Riportaci all'Hotel con Citymapper</span>
        </a>
        <p className="text-[11px] text-slate-400 text-center mt-1.5">
          Prende la tua posizione ovunque sei e calcola la metro/bus più veloce verso l'hotel!
        </p>
      </div>

      {/* Cerca qualsiasi destinazione a Parigi */}
      <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
        <h3 className="font-bold text-white text-xs sm:text-sm mb-2 flex items-center gap-1.5">
          <Search className="w-4 h-4 text-sky-400" />
          Vuoi andare in un posto specifico a Parigi?
        </h3>
        <form onSubmit={handleCustomSearch} className="flex gap-2">
          <input
            type="text"
            value={customDestination}
            onChange={(e) => setCustomDestination(e.target.value)}
            placeholder="Scrivi via, ristorante o monumento..."
            className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-400"
          />
          <button
            type="submit"
            className="px-3.5 py-2 rounded-xl bg-[#288330] hover:bg-[#288330]/90 text-white font-bold text-xs flex items-center gap-1 transition-all active:scale-95"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Vai</span>
          </button>
        </form>
      </div>

      {/* Mete Veloci con Citymapper */}
      <div className="space-y-2">
        <h3 className="font-bold text-white text-xs sm:text-sm flex items-center gap-1.5 px-1">
          <Train className="w-4 h-4 text-emerald-400" />
          Rotte Veloci con 1 Tap (Dalla tua posizione attuale)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {quickMissions.map((item, idx) => {
            const cmUrl = getCitymapperUrl(item.lat, item.lng, item.title, item.address);

            return (
              <a
                key={idx}
                href={cmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-[#288330]/50 hover:bg-slate-850 transition-all flex flex-col justify-between group active:scale-98"
              >
                <div className="flex items-start justify-between gap-1 mb-1">
                  <span className="font-bold text-xs text-white group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </span>
                  <span className="text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    {item.badge}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mb-2">
                  {item.detail}
                </p>
                <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 mt-auto">
                  <span>Apri su Citymapper</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Biglietti su Smartphone */}
      <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2.5">
        <h3 className="font-bold text-white text-xs sm:text-sm flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-rose-400" />
          Come pagare la metro dal telefono (Senza code)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
            <div className="font-bold text-slate-200 mb-1 flex items-center gap-1.5">
              <span className="text-base"></span> Su iPhone (Apple Wallet)
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Apri <strong>Wallet</strong> $\rightarrow$ premi <strong>"+"</strong> $\rightarrow$ <em>Carta Trasporti</em> $\rightarrow$ <em>Francia</em> $\rightarrow$ <strong>Navigo</strong>. Compri i biglietti istantaneamente con Apple Pay e passi i tornelli senza neanche sbloccare lo schermo!
            </p>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
            <div className="font-bold text-slate-200 mb-1 flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5 text-emerald-400" /> Su Android (NFC)
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Scarica l'app ufficiale <strong>"Bonjour RATP"</strong> o <strong>"Île-de-France Mobilités"</strong>. Compri i biglietti T+ dematerializzati e appoggi il retro dello smartphone al tornello.
            </p>
          </div>
        </div>

        <div className="p-2 rounded-xl bg-amber-950/30 border border-amber-500/20 text-amber-200 text-xs flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>
            <strong>Tratte speciali:</strong> Per Disneyland (RER A zona 5) e per Orly (Metro 14) serve il biglietto dedicato, non il biglietto T+ standard.
          </span>
        </div>
      </div>

      {/* Linee Guida Metro */}
      <div className="space-y-2">
        <h3 className="font-bold text-white text-xs sm:text-sm px-1">
          Le Linee della Metro Parigina Utili per Voi
        </h3>
        {METRO_LINES.map((m, i) => (
          <div key={i} className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-3">
            <span className={`px-2 py-0.5 rounded font-extrabold text-xs shrink-0 ${m.badgeBg} ${m.badgeText}`}>
              {m.line}
            </span>
            <div className="text-xs">
              <p className="text-slate-200 leading-snug font-medium mb-0.5">{m.utility}</p>
              <p className="text-[11px] text-slate-400">{m.keyStops}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

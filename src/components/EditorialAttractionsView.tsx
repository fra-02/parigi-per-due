import React, { useState } from 'react';
import { getGoogleMapsUrl } from '../data/itineraryData';
import { handleImageError } from '../utils/images';

interface AttractionItem {
  id: string;
  dayNumber: number;
  dayName: string;
  groupName: string;
  name: string;
  description: string;
  image: string;
  tags: string[]; // e.g. ['VALE', 'GRATIS UNDER 26']
  mapsCoords: { lat: number; lng: number };
  websiteUrl?: string;
}

const ATTRACTIONS_DATA: AttractionItem[] = [
  // --- GIORNO 1: MONTMARTRE ---
  {
    id: 'att-1-maison-rose',
    dayNumber: 1,
    dayName: 'Giorno 1',
    groupName: 'Montmartre',
    name: 'La Maison Rose',
    description: 'La celebre casetta dalla facciata rosa all\'angolo tra Rue de l\'Abreuvoir e Rue des Saules. La sosta dura tre minuti: una foto dall\'inizio della curva acciottolata e si prosegue.',
    image: 'https://images.unsplash.com/photo-1636931384548-85695ab84581?auto=format&fit=crop&w=1080&q=80',
    tags: ['VALE', 'GRATIS', 'SCORCIO'],
    mapsCoords: { lat: 48.8879, lng: 2.3398 }
  },
  {
    id: 'att-1-tertre',
    dayNumber: 1,
    dayName: 'Giorno 1',
    groupName: 'Montmartre',
    name: 'Place du Tertre',
    description: 'La piazza storica dei pittori e ritrattisti. Non comprate ritratti turistici a pressione: camminate tra i cavalletti e godetevi l\'atmosfera illuminata.',
    image: 'https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?auto=format&fit=crop&w=1080&q=80',
    tags: ['ATMOSFERA', 'GRATIS'],
    mapsCoords: { lat: 48.8865, lng: 2.3408 }
  },
  {
    id: 'att-1-sacre-coeur',
    dayNumber: 1,
    dayName: 'Giorno 1',
    groupName: 'Montmartre',
    name: 'Basilica del Sacré-Cœur & Belvedere',
    description: 'La cupola bianca che domina Parigi. Il 90% dell\'esperienza è stare uno accanto all\'altra sul belvedere a guardare i tetti di Parigi che si accendono di luci. Ingresso alla basilica gratuito per tutti.',
    image: 'https://images.unsplash.com/photo-1520939817895-060bdef4dc1b?auto=format&fit=crop&w=1080&q=80',
    tags: ['VALE', 'GRATIS', 'PANORAMA'],
    mapsCoords: { lat: 48.8867, lng: 2.3431 },
    websiteUrl: 'https://www.sacre-coeur-montmartre.com/'
  },
  {
    id: 'att-1-fred',
    dayNumber: 1,
    dayName: 'Giorno 1',
    groupName: 'Montmartre',
    name: 'Aux Merveilleux de Fred (Rue Lepic)',
    description: 'Al 2 Rue Lepic. Il cramique al cioccolato è la brioche più morbida e profumata di Parigi: sfornata calda a vista dal laboratorio. Prendetene uno da dividere subito.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1080&q=80',
    tags: ['IMPERDIBILE', 'FOOD GOLOSO'],
    mapsCoords: { lat: 48.8837, lng: 2.3338 },
    websiteUrl: 'https://auxmerveilleux.com/'
  },

  // --- GIORNO 2: DISNEYLAND ---
  {
    id: 'att-2-disney',
    dayNumber: 2,
    dayName: 'Giorno 2',
    groupName: 'Disneyland Paris',
    name: 'Castello della Bella Addormentata & Natale Disney',
    description: 'La stagione natalizia con l\'albero gigante su Main Street, la parata e lo spettacolo notturno con proiezioni e fuochi. Trovate postazione 20 min prima.',
    image: 'https://images.unsplash.com/photo-1597466599360-3b9775841aec?auto=format&fit=crop&w=1080&q=80',
    tags: ['PRENOTATO', 'ANNIVERSARIO ❤️'],
    mapsCoords: { lat: 48.8722, lng: 2.7758 },
    websiteUrl: 'https://www.disneylandparis.com/'
  },

  // --- GIORNO 3: SENNA & CENTRO ---
  {
    id: 'att-3-sainte-chapelle',
    dayNumber: 3,
    dayName: 'Giorno 3',
    groupName: 'Île de la Cité & Marais',
    name: 'Sainte-Chapelle (Cappella Superiore)',
    description: '15 metri di vetrate policrome che occupano quasi tutta la parete. Non serve studiare ogni pannello: salite la scala a chiocciola e lasciatevi travolgere dalla luce. 30–45 min bastano.',
    image: 'https://images.unsplash.com/photo-1571860424830-0271e6c9d9b2?auto=format&fit=crop&w=1080&q=80',
    tags: ['VALE', 'GRATIS UNDER 26', 'ORE 09:30'],
    mapsCoords: { lat: 48.8554, lng: 2.3450 },
    websiteUrl: 'https://www.sainte-chapelle.fr/'
  },
  {
    id: 'att-3-notre-dame',
    dayNumber: 3,
    dayName: 'Giorno 3',
    groupName: 'Île de la Cité & Marais',
    name: 'Cattedrale di Notre-Dame de Paris',
    description: 'La navata e le altezze maestose riaperte al mondo. Visita relativamente breve per sentire lo spazio e l\'atmosfera. Lo slot gratuito si riserva sul portale ufficiale la mattina stessa.',
    image: 'https://images.unsplash.com/photo-1755812969724-ef1802a07a95?auto=format&fit=crop&w=1080&q=80',
    tags: ['VALE', 'GRATIS', 'SLOT GIORNO STESSO'],
    mapsCoords: { lat: 48.8530, lng: 2.3499 },
    websiteUrl: 'https://resa.notredamedeparis.fr/'
  },
  {
    id: 'att-3-crociera',
    dayNumber: 3,
    dayName: 'Giorno 3',
    groupName: 'Île de la Cité & Marais',
    name: 'Crociera sulla Senna (Pont Neuf)',
    description: 'Un\'ora per guardare Parigi che scorre dall\'acqua: i ponti illuminati e la Torre Eiffel. Battello riparato e riscaldato in caso di pioggia o freddo.',
    image: 'https://images.unsplash.com/photo-1613614338153-14ed06b3dc9e?auto=format&fit=crop&w=1080&q=80',
    tags: ['PRENOTATO', 'ORE 18:45 TASSATIVO'],
    mapsCoords: { lat: 48.8571, lng: 2.3406 },
    websiteUrl: 'https://www.vedettesdupontneuf.com/'
  },
  {
    id: 'att-3-place-des-vosges',
    dayNumber: 3,
    dayName: 'Giorno 3',
    groupName: 'Île de la Cité & Marais',
    name: 'Place des Vosges (Le Marais)',
    description: 'La piazza residenziale più antica di Parigi, con 36 palazzi nobiliari simmetrici e portici in mattoni. Punto più lontano della passeggiata nel Marais, facoltativa se avete voglia di camminare.',
    image: 'https://images.unsplash.com/photo-1594558068774-4bd20990a583?auto=format&fit=crop&w=1080&q=80',
    tags: ['GRATIS', 'PASSEGGIATA'],
    mapsCoords: { lat: 48.8555, lng: 2.3656 }
  },

  // --- GIORNO 4: ORANGERIE, ORSAY & TORRE EIFFEL ---
  {
    id: 'att-4-orangerie',
    dayNumber: 4,
    dayName: 'Giorno 4',
    groupName: 'Arte & Torre Eiffel',
    name: 'Musée de l\'Orangerie: le Ninfee per lei',
    description: 'Le due sale ovali con gli 8 giganteschi pannelli delle Ninfee di Claude Monet. Sedetevi sulla panca circolare al centro. Il piano inferiore solo se avanza tempo.',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1080&q=80',
    tags: ['VALE', 'GRATIS UNDER 26', 'ORE 09:00'],
    mapsCoords: { lat: 48.8638, lng: 2.3227 },
    websiteUrl: 'https://www.musee-orangerie.fr/'
  },
  {
    id: 'att-4-orsay',
    dayNumber: 4,
    dayName: 'Giorno 4',
    groupName: 'Arte & Torre Eiffel',
    name: 'Musée d\'Orsay: Van Gogh & Renoir',
    description: 'L\'antica stazione ferroviaria tempio dell\'Impressionismo. Percorso mirato: Van Gogh (Notte stellata sul Rodano, Autoritratto), Renoir (Moulin de la Galette) e l\'orologio trasparente al 5° piano.',
    image: 'https://images.unsplash.com/photo-1573301626856-8552b3889342?auto=format&fit=crop&w=1080&q=80',
    tags: ['VALE', 'GRATIS UNDER 26', 'ORE 11:00'],
    mapsCoords: { lat: 48.8599, lng: 2.3265 },
    websiteUrl: 'https://www.musee-orsay.fr/'
  },
  {
    id: 'att-4-trocadero',
    dayNumber: 4,
    dayName: 'Giorno 4',
    groupName: 'Arte & Torre Eiffel',
    name: 'Terrazza del Trocadéro & Torre Eiffel',
    description: 'La terrazza di fronte alla Torre: la vedete intera, senza pagare il biglietto di salita. Arrivate per le 16:30 per vedere il passaggio dal tramonto al buio e lo scintillio all\'ora piena (17:00).',
    image: 'https://images.unsplash.com/photo-1540982318052-f5357b1cc18c?auto=format&fit=crop&w=1080&q=80',
    tags: ['VALE', 'GRATIS', 'SCINTILLIO 17:00'],
    mapsCoords: { lat: 48.8624, lng: 2.2872 }
  },
  {
    id: 'att-4-champs',
    dayNumber: 4,
    dayName: 'Giorno 4',
    groupName: 'Arte & Torre Eiffel',
    name: 'Mercatino di Natale degli Champs-Élysées',
    description: 'Dal Rond-Point a Place de la Concorde: chalet in legno, luminarie maestose, formaggi fusi e dolci caldi. L\'Arco di Trionfo in cima si raggiunge comodamente in metro.',
    image: 'https://images.unsplash.com/photo-1513297887119-d46091b24bfa?auto=format&fit=crop&w=1080&q=80',
    tags: ['NATALE', 'CHALET', 'SERA'],
    mapsCoords: { lat: 48.8675, lng: 2.3135 }
  },

  // --- GIORNO 5: LOUVRE, OPÉRA & JUNGLE PALACE ---
  {
    id: 'att-5-napoleone',
    dayNumber: 5,
    dayName: 'Giorno 5',
    groupName: 'Louvre, Opéra & Finale',
    name: 'Louvre: Appartamenti Napoleone III',
    description: 'Ala Richelieu. Saloni sfarzosi del Secondo Impero con lampadari di cristallo monumentali e dorature intatte. Poi percorso verso Amore e Psiche di Canova, Nike di Samotracia e Gioconda.',
    image: 'https://images.unsplash.com/photo-1543335785-8aadf6d8183c?auto=format&fit=crop&w=1080&q=80',
    tags: ['VALE', 'GRATIS UNDER 26', 'ORE 09:00'],
    mapsCoords: { lat: 48.8606, lng: 2.3376 },
    websiteUrl: 'https://www.ticketlouvre.fr/'
  },
  {
    id: 'att-5-opera',
    dayNumber: 5,
    dayName: 'Giorno 5',
    groupName: 'Louvre, Opéra & Finale',
    name: 'Palais Garnier (Opéra)',
    description: 'La monumentale scalinata in marmo e il Grand Foyer dorato ricco di specchi. Non si viene per i quadri, ma per l\'impatto teatrale ed elegante per lei.',
    image: 'https://images.unsplash.com/photo-1650772868326-585230bb132c?auto=format&fit=crop&w=1080&q=80',
    tags: ['VALE', 'RIDOTTO UNDER 26', 'ORE 14:30'],
    mapsCoords: { lat: 48.8719, lng: 2.3316 },
    websiteUrl: 'https://www.operadeparis.fr/'
  },
  {
    id: 'att-5-lafayette',
    dayNumber: 5,
    dayName: 'Giorno 5',
    groupName: 'Louvre, Opéra & Finale',
    name: 'Galeries Lafayette & Printemps',
    description: 'La cupola di vetro Art Nouveau con il maestoso albero di Natale gigante sospeso a mezz\'aria. All\'esterno, le famose vetrine natalizie animate con pupazzi meccanici.',
    image: 'https://images.unsplash.com/photo-1574927523620-7eb999e5d614?auto=format&fit=crop&w=1080&q=80',
    tags: ['GRATIS', 'ALBERO NATALE', 'VETRINE'],
    mapsCoords: { lat: 48.8737, lng: 2.3321 },
    websiteUrl: 'https://www.galerieslafayette.com/'
  },
  {
    id: 'att-5-jungle',
    dayNumber: 5,
    dayName: 'Giorno 5',
    groupName: 'Louvre, Opéra & Finale',
    name: 'Jungle Palace (Cena speciale)',
    description: '12 Rue de la Fidélité. La cena speciale del viaggio: ristorante immersivo ispirato alla foresta pluviale con video-mapping e mocktail botanici spettacolari.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1080&q=80',
    tags: ['PRENOTATO', 'ORE 20:00', 'IMMERSIVO'],
    mapsCoords: { lat: 48.8757, lng: 2.3571 },
    websiteUrl: 'https://www.ephemera-group.com/nos-restaurants/jungle-palace-paris'
  }
];

export const EditorialAttractionsView: React.FC = () => {
  const [selectedDayFilter, setSelectedDayFilter] = useState<number | 'all'>('all');

  const filteredAttractions = selectedDayFilter === 'all'
    ? ATTRACTIONS_DATA
    : ATTRACTIONS_DATA.filter((a) => a.dayNumber === selectedDayFilter);

  // Raggruppamento per gruppo / zona
  const groupedAttractions = filteredAttractions.reduce<Record<string, AttractionItem[]>>((acc, item) => {
    const key = `${item.groupName} • GIORNO ${item.dayNumber}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});

  return (
    <div className="space-y-6 max-w-4xl mx-auto px-4 py-5 animate-fade-in">
      
      {/* Editorial Header (Fedele a Screenshot 2) */}
      <div className="space-y-2 border-b border-[#e5e0d5] pb-4">
        <h1 className="font-editorial-serif text-3xl sm:text-4xl font-bold text-[#1a1918]">
          Cosa vedere
        </h1>
        <p className="text-xs sm:text-sm text-[#504b42] leading-relaxed max-w-2xl">
          Verdetti onesti, non depliant. Le cose migliori di questa lista sono quasi tutte gratis e non hanno un gift shop. <strong>Filtra per giorno</strong> e resta solo quello che vedete quel giorno.
        </p>
      </div>

      {/* Filter Buttons (Pills fedeli a Screenshot 2) */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
        <button
          onClick={() => setSelectedDayFilter('all')}
          className={`px-3 py-1 rounded text-xs font-editorial-mono font-medium tracking-wider uppercase transition-all ${
            selectedDayFilter === 'all'
              ? 'bg-[#1a1918] text-white font-bold'
              : 'bg-[#ede9df] text-[#6b6559] hover:text-[#1a1918]'
          }`}
        >
          TUTTO
        </button>

        {[1, 2, 3, 4, 5, 6].map((dayNum) => (
          <button
            key={dayNum}
            onClick={() => setSelectedDayFilter(dayNum)}
            className={`px-3 py-1 rounded text-xs font-editorial-mono font-medium tracking-wider uppercase whitespace-nowrap transition-all ${
              selectedDayFilter === dayNum
                ? 'bg-[#1a1918] text-white font-bold'
                : 'bg-[#ede9df] text-[#6b6559] hover:text-[#1a1918]'
            }`}
          >
            GIORNO {dayNum}
          </button>
        ))}
      </div>

      {/* Grouped Attraction Cards */}
      <div className="space-y-8 pt-2">
        {Object.entries(groupedAttractions).map(([groupTitle, items]) => (
          <section key={groupTitle} className="space-y-3">
            
            {/* Group Header */}
            <div className="flex items-baseline gap-2 border-b border-[#e8e4db] pb-1">
              <h2 className="font-editorial-serif text-lg font-bold text-[#1a1918]">
                {groupTitle.split(' • ')[0]}
              </h2>
              <span className="font-editorial-mono text-[10px] tracking-widest text-[#857f72] uppercase">
                {groupTitle.split(' • ')[1]}
              </span>
            </div>

            {/* Cards Grid: 1 colonna su smartphone, 2 colonne su desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((att) => {
                const gmapsUrl = getGoogleMapsUrl(att.mapsCoords.lat, att.mapsCoords.lng, att.name);

                return (
                  <div
                    key={att.id}
                    className="border border-[#e5e0d5] bg-white rounded-lg overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#1a1918] transition-all"
                  >
                    {/* Immagine Card */}
                    <div className="w-full h-44 overflow-hidden bg-[#e8e4db] relative">
                      <img
                        src={att.image}
                        alt={att.name}
                        onError={handleImageError}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                        loading="lazy"
                      />
                    </div>

                    {/* Contenuto Card */}
                    <div className="p-3.5 space-y-1.5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-editorial-serif text-base sm:text-lg font-bold text-[#1a1918] leading-snug">
                          {att.name}
                        </h3>
                        <p className="text-xs text-[#4a453c] leading-relaxed pt-1">
                          {att.description}
                        </p>
                      </div>

                      {/* Footer Card (Tag a sinistra, link a destra) */}
                      <div className="pt-3 border-t border-[#f0ece3] flex items-center justify-between text-[11px] font-editorial-mono">
                        {/* Tags */}
                        <div className="flex items-center gap-1.5 text-[#736c5f]">
                          {att.tags.map((t, idx) => (
                            <span key={idx}>
                              {idx > 0 && <span className="text-[#bbb] mr-1">•</span>}
                              <strong className="font-semibold">{t}</strong>
                            </span>
                          ))}
                        </div>

                        {/* Link rapidi sito e maps */}
                        <div className="flex items-center gap-2.5">
                          {att.websiteUrl && (
                            <a
                              href={att.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#2f5d8a] hover:underline"
                            >
                              sito &gt;
                            </a>
                          )}
                          <a
                            href={gmapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#2f5d8a] hover:underline"
                          >
                            maps &gt;
                          </a>
                        </div>

                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </section>
        ))}
      </div>

    </div>
  );
};

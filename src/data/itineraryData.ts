export interface Stop {
  id: string;
  time?: string;
  isFixedTime?: boolean; // Se è una prenotazione con orario tassativo
  title: string;
  subtitle: string;
  category: 'monument' | 'museum' | 'walk' | 'food' | 'disney' | 'cruise' | 'shopping' | 'travel';
  image: string;
  description: string;
  romanticTip?: string;
  under26Info?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  address: string;
  metroStop?: string;
  bookingUrl?: string;
  bookingLabel?: string;
  officialInfoUrl?: string;
  alertNote?: string;
}

export interface DayItinerary {
  id: string;
  dayNumber: number;
  dateStr: string;
  dayOfWeek: string;
  title: string;
  tagline: string;
  summary: string;
  colorTheme: string;
  badge: string;
  stops: Stop[];
}

export interface PassageCoperto {
  name: string;
  description: string;
  address: string;
  coordinates: { lat: number; lng: number };
  metro: string;
}

export interface MetroLineGuide {
  line: string;
  color: string;
  badgeBg: string;
  badgeText: string;
  utility: string;
  keyStops: string;
}

export const METRO_LINES: MetroLineGuide[] = [
  {
    line: 'Metro 14',
    color: '#662483',
    badgeBg: 'bg-[#662483]',
    badgeText: 'text-white',
    utility: 'La linea più moderna, veloce e senza conducente. Collega direttamente il centro (Châtelet, Madeleine) con l\'Aeroporto di Orly!',
    keyStops: 'Saint-Denis Pleyel ↔ Châtelet ↔ Madeleine ↔ Gare de Lyon ↔ Aéroport d\'Orly'
  },
  {
    line: 'Metro 12',
    color: '#007852',
    badgeBg: 'bg-[#007852]',
    badgeText: 'text-white',
    utility: 'Linea di Montmartre (Abbesses, Lamarck) verso Concorde e Saint-Germain. Perfetta per scendere dal vostro hotel verso il centro.',
    keyStops: 'Mairie d\'Aubervilliers ↔ Lamarck-Caulaincourt ↔ Abbesses ↔ Madeleine ↔ Concorde ↔ Sèvres-Babylone'
  },
  {
    line: 'Metro 1',
    color: '#FFCD00',
    badgeBg: 'bg-[#FFCD00]',
    badgeText: 'text-black',
    utility: 'Attraversa Parigi orizzontalmente da Est a Ovest: Louvre, Tuileries, Concorde, Champs-Élysées, Arc de Triomphe.',
    keyStops: 'Château de Vincennes ↔ Bastille ↔ Châtelet ↔ Louvre ↔ Champs-Élysées ↔ La Défense'
  },
  {
    line: 'RER A',
    color: '#E3051B',
    badgeBg: 'bg-[#E3051B]',
    badgeText: 'text-white',
    utility: 'Il treno rapido per DISNEYLAND PARIS (fermata capolinea: Marne-la-Vallée Chessy). Si prende da Châtelet o Charles de Gaulle-Étoile (~40 min).',
    keyStops: 'Charles de Gaulle-Étoile ↔ Auber ↔ Châtelet-Les Halles ↔ Gare de Lyon ↔ Marne-la-Vallée Chessy (Disneyland)'
  },
  {
    line: 'Metro 4',
    color: '#BE4E98',
    badgeBg: 'bg-[#BE4E98]',
    badgeText: 'text-white',
    utility: 'Taglia Parigi da nord a sud passando per Île de la Cité (Saint-Michel Notre-Dame, Sainte-Chapelle, Quartiere Latino).',
    keyStops: 'Porte de Clignancourt ↔ Gare du Nord ↔ Châtelet ↔ Cité ↔ Saint-Michel ↔ Montparnasse'
  }
];

export const PASSAGES_PIOGGIA: PassageCoperto[] = [
  {
    name: 'Galerie Vivienne',
    description: 'La galleria coperta più elegante e romantica di Parigi, con mosaici a terra spettacolari, librerie d\'epoca e café al coperto.',
    address: '4 Rue des Petits Champs, 75002 Paris',
    coordinates: { lat: 48.8665, lng: 2.3396 },
    metro: 'Bourse (M3) o Palais Royal-Musée du Louvre (M1/M7)'
  },
  {
    name: 'Passage des Panoramas',
    description: 'Il più antico passaggio coperto di Parigi (1799), famoso per i suoi bistrot storici, antiquari e l\'atmosfera della vecchia Parigi illuminata a gas.',
    address: '11 Bd Montmartre, 75002 Paris',
    coordinates: { lat: 48.8712, lng: 2.3418 },
    metro: 'Grands Boulevards (M8/M9)'
  },
  {
    name: 'Passage Jouffroy',
    description: 'Proprio di fronte al Passage des Panoramas, con struttura in ferro e vetro, negozi di giocattoli d\'epoca, tè caldo e il Museo Grévin.',
    address: '10-12 Bd Montmartre, 75009 Paris',
    coordinates: { lat: 48.8720, lng: 2.3424 },
    metro: 'Grands Boulevards (M8/M9)'
  }
];

export const ITINERARY_DAYS: DayItinerary[] = [
  {
    id: 'day-1',
    dayNumber: 1,
    dateStr: 'Lunedì 7 Dicembre',
    dayOfWeek: 'Lunedì',
    title: 'Il primo incontro con Montmartre',
    tagline: 'Luci del crepuscolo, vicoli romantici e bistrot',
    summary: 'Dopo il check-in in hotel, un pomeriggio e sera tutti dedicati a Montmartre senza attraversare tutta la città. Dal panorama del Sacré-Cœur alla discesa tra i caffè.',
    colorTheme: 'from-amber-500/20 to-rose-500/20',
    badge: 'Atmosfera Bohemien',
    stops: [
      {
        id: 'stop-1-1',
        time: 'Pomeriggio (dopo check-in)',
        isFixedTime: false,
        title: 'Rue Caulaincourt & La Maison Rose',
        subtitle: 'I vicoli iconici di Montmartre',
        category: 'walk',
        image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=80',
        description: 'Partenza da Rue Caulaincourt imboccando la pittoresca Rue de l\'Abreuvoir. Scorcio imperdibile davanti a La Maison Rose, una delle casette più fotografate di Parigi.',
        romanticTip: 'Cercate di arrivare per l\'ora d\'oro o l\'ultimo barlume di luce, ma è magico anche appena si accendono i lampioni storici.',
        coordinates: { lat: 48.8879, lng: 2.3398 },
        address: '2 Rue de l\'Abreuvoir, 75018 Paris',
        metroStop: 'Lamarck - Caulaincourt (M12)',
        alertNote: 'Nota: Il Mur des Je t\'aime resta escluso dal percorso fino a riapertura confermata dal Comune.'
      },
      {
        id: 'stop-1-2',
        time: 'Tardo pomeriggio',
        isFixedTime: false,
        title: 'Place du Tertre',
        subtitle: 'La piazza dei pittori',
        category: 'walk',
        image: 'https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?auto=format&fit=crop&w=800&q=80',
        description: 'La storica piazza degli artisti e ritrattisti parigini. Passeggiate tra i cavalletti e gli atelier prima di dirigervi verso la basilica.',
        romanticTip: 'Fermatevi a guardare i disegnatori all\'opera; l\'atmosfera a inizio dicembre con le lucine è fiabesca.',
        coordinates: { lat: 48.8865, lng: 2.3408 },
        address: 'Place du Tertre, 75018 Paris',
        metroStop: 'Abbesses o Anvers'
      },
      {
        id: 'stop-1-3',
        time: 'Tramonto / Crepuscolo',
        isFixedTime: false,
        title: 'Basilica del Sacré-Cœur',
        subtitle: 'Il panorama più spettacolare su tutta Parigi',
        category: 'monument',
        image: 'https://images.unsplash.com/photo-1520939817895-060bdef4dc1b?auto=format&fit=crop&w=800&q=80',
        description: 'La cupola bianca che domina Parigi. Salite sulla gradinata per ammirare i tetti della città che si accendono di luci.',
        romanticTip: 'Sedetevi qualche minuto sui gradini insieme ad ascoltare gli artisti di strada con Parigi ai vostri piedi.',
        coordinates: { lat: 48.8867, lng: 2.3431 },
        address: '35 Rue du Chevalier de la Barre, 75018 Paris',
        under26Info: 'Ingresso alla basilica gratuito per tutti.',
        metroStop: 'Anvers (M2) o Funiculaire de Montmartre'
      },
      {
        id: 'stop-1-4',
        time: 'Sera (19:30–20:00)',
        isFixedTime: false,
        title: 'Rue des Abbesses & Bouillon Pigalle',
        subtitle: 'Cena tipica francese o bistrot a Montmartre',
        category: 'food',
        image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80',
        description: 'Scendete per la vivace Rue des Abbesses. Per cena ottima opzione al Bouillon Pigalle (cucina tipica francese gustosa e super economica) o un bistrot di Montmartre.',
        romanticTip: 'Dopo cena: vista facoltativa del Moulin Rouge illuminato per un brindisi, senza fare troppo tardi prima di Disney!',
        coordinates: { lat: 48.8826, lng: 2.3372 },
        address: '22 Bd de Clichy, 75018 Paris',
        metroStop: 'Pigalle (M2, M12) o Abbesses (M12)'
      }
    ]
  },
  {
    id: 'day-2',
    dayNumber: 2,
    dateStr: 'Martedì 8 Dicembre',
    dayOfWeek: 'Martedì',
    title: 'Il vostro anniversario a Disneyland Paris',
    tagline: 'Fiaba, castello incantato e magia natalizia per due',
    summary: 'Partenza di buon mattino con la RER A per arrivare all\'apertura. Giornata incentrata sul Parc Disneyland, le decorazioni di Main Street, la parata e lo spettacolo serale.',
    colorTheme: 'from-purple-500/20 to-pink-500/20',
    badge: 'Anniversario Speciale ❤️',
    stops: [
      {
        id: 'stop-2-1',
        time: '08:00 - 08:30',
        isFixedTime: false,
        title: 'Trasferimento RER A per Disneyland',
        subtitle: 'Da Parigi centro a Marne-la-Vallée Chessy',
        category: 'travel',
        image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80',
        description: 'Prendete la RER A (ad es. da Châtelet o Nation) in direzione Marne-la-Vallée Chessy (~40 min), scendendo proprio davanti ai cancelli.',
        coordinates: { lat: 48.8700, lng: 2.7830 },
        address: 'Gare de Marne-la-Vallée Chessy, 77700 Chessy',
        metroStop: 'RER A Capolinea: Marne-la-Vallée Chessy'
      },
      {
        id: 'stop-2-2',
        time: '09:30 - Pomeriggio',
        isFixedTime: false,
        title: 'Parc Disneyland & Main Street U.S.A.',
        subtitle: 'Stagione di Natale Disney & Castello Incantato',
        category: 'disney',
        image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=800&q=80',
        description: 'Priorità al parco principale con l\'albero gigante, le musiche natalizie e la neve finta su Main Street. Concentratevi sulle attrazioni che desiderate entrambi.',
        romanticTip: 'Per l\'anniversario concedetevi una bella pausa al caldo con cioccolata e dolce natalizio mano nella mano.',
        coordinates: { lat: 48.8722, lng: 2.7758 },
        address: 'Bd de Parc, 77700 Coupvray',
        bookingUrl: 'https://www.disneylandparis.com/fr-fr/application-mobile',
        bookingLabel: 'Apri App Ufficiale Disney (Tempi Attese)',
        officialInfoUrl: 'https://www.disneylandparis.com/fr-ch/les-saisons/noel-a-disneyland-paris'
      },
      {
        id: 'stop-2-3',
        time: 'Pomeriggio & Sera',
        isFixedTime: false,
        title: 'Parata & Spettacolo Notturno Disney',
        subtitle: 'Fuochi d\'artificio e proiezioni sul Castello',
        category: 'disney',
        image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
        description: 'Consultate l\'app Disney per l\'orario esatto dello show notturno e della parata. Al termine rientro a Parigi con RER A quando vi sentite appagati.',
        romanticTip: 'Trovate una buona postazione con vista sul castello 20 minuti prima dello spettacolo serale: è il momento più romantico della giornata.',
        coordinates: { lat: 48.8735, lng: 2.7766 },
        address: 'Le Château de la Belle au Bois Dormant, Disneyland Paris',
        metroStop: 'RER A Marne-la-Vallée'
      }
    ]
  },
  {
    id: 'day-3',
    dayNumber: 3,
    dateStr: 'Mercoledì 9 Dicembre',
    dayOfWeek: 'Mercoledì',
    title: 'Notre-Dame, il fascino del Marais e la Crociera',
    tagline: 'Vetri gotici, mercatino profumato e Senna illuminata',
    summary: 'La mattina dedicata ai gioielli dell\'Île de la Cité, pranzo al mercatino vivente di Square René Viviani, passeggiata nel Marais e alle 18:45 la crociera in battello.',
    colorTheme: 'from-blue-500/20 to-cyan-500/20',
    badge: 'Giorno di Quartiere & Senna',
    stops: [
      {
        id: 'stop-3-1',
        time: '09:30',
        isFixedTime: true,
        title: 'Sainte-Chapelle',
        subtitle: 'La meraviglia delle vetrate gotiche medievali',
        category: 'monument',
        image: 'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?auto=format&fit=crop&w=800&q=80',
        description: 'Mantenete la vostra prenotazione attuale: 15 metri di vetrate policrome che creano un caleidoscopio di luce irripetibile.',
        under26Info: 'Gratuito per giovani cittadini UE 18-25 anni (esibite la prenotazione dello slot).',
        romanticTip: 'Salite al livello superiore: l\'effetto delle vetrate lascia senza fiato.',
        coordinates: { lat: 48.8554, lng: 2.3450 },
        address: '10 Bd du Palais, 75001 Paris',
        metroStop: 'Cité (M4) o Saint-Michel (M4, RER B/C)'
      },
      {
        id: 'stop-3-2',
        time: '11:00 circa (Slot da riservare)',
        isFixedTime: false,
        title: 'Cattedrale di Notre-Dame de Paris',
        subtitle: 'La rinascita del cuore di Parigi',
        category: 'monument',
        image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
        description: 'La cattedrale riaperta dopo il restauro! Il portale ufficiale di prenotazione apre poche ore prima o la mattina stessa. Se lo slot cambia, regolate la mattinata.',
        bookingUrl: 'https://resa.notredamedeparis.fr/fr/reservationindividuelle/tickets',
        bookingLabel: 'Prenota Slot Notre-Dame (Giorno Stesso)',
        romanticTip: 'Passeggiate anche sul sagrato e ammirate la facciata con le maestose torri campanarie.',
        coordinates: { lat: 48.8530, lng: 2.3499 },
        address: '6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris',
        metroStop: 'Cité (M4)'
      },
      {
        id: 'stop-3-3',
        time: '12:00 – 13:30',
        isFixedTime: false,
        title: 'Mercatino di Natale Square René Viviani & Pranzo',
        subtitle: 'Chalet tradizionali e albero più antico di Parigi',
        category: 'food',
        image: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=800&q=80',
        description: 'Ai piedi della chiesa di Saint-Julien-le-Pauvre. Potete assaggiare specialità tipiche agli chalet (crêpes, raclette, vin chaud) o sedervi al caldo in una brasserie vicina.',
        romanticTip: 'Cercate l\'albero più antico di Parigi (una robinia piantata nel 1601) dentro la piazzetta.',
        coordinates: { lat: 48.8523, lng: 2.3475 },
        address: '25 Quai de Montebello, 75005 Paris',
        officialInfoUrl: 'https://www.paris.fr/evenements/marche-de-noel-notre-dame-124520',
        metroStop: 'Saint-Michel (M4) o Maubert-Mutualité (M10)'
      },
      {
        id: 'stop-3-4',
        time: 'Pomeriggio (14:00 – 17:15)',
        isFixedTime: false,
        title: 'Île Saint-Louis → Place des Vosges (Marais)',
        subtitle: 'Vicoli nobiliari, cortili nascosti e Rue des Rosiers',
        category: 'walk',
        image: 'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?auto=format&fit=crop&w=800&q=80',
        description: 'Percorso a piedi: attraversate l\'Île Saint-Louis verso l\'Hôtel de Ville, poi infilatevi nel quartiere ebraico di Rue des Rosiers fino alla romantica Place des Vosges.',
        romanticTip: 'Fermatevi per una merenda dolce o una passeggiata sotto i portici simmetrici di Place des Vosges.',
        coordinates: { lat: 48.8555, lng: 2.3656 },
        address: 'Place des Vosges, 75004 Paris',
        alertNote: 'Interrompere il giro verso le 17:15–17:30 per raggiungere Pont Neuf a piedi o in metro.'
      },
      {
        id: 'stop-3-5',
        time: '18:45 TASSATIVO',
        isFixedTime: true,
        title: 'Crociera sulla Senna al Pont Neuf',
        subtitle: 'I monumenti illuminati visti dall\'acqua',
        category: 'cruise',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
        description: 'Arrivate con almeno 15-20 minuti di anticipo all\'imbarco di Pont Neuf. Parigi dal battello con tutte le luci riflesse sull\'acqua è un ricordo indimenticabile.',
        romanticTip: 'Mettetevi sul ponte scoperto ben coperti per le foto più belle dei ponti illuminati.',
        coordinates: { lat: 48.8571, lng: 2.3406 },
        address: 'Square du Vert-Galant, Pont Neuf, 75001 Paris',
        metroStop: 'Pont Neuf (M7)'
      },
      {
        id: 'stop-3-6',
        time: '20:15 in poi',
        isFixedTime: false,
        title: 'Cena nel Quartiere Latino & Caveau',
        subtitle: 'Atmosfera serale tra bistrot e jazz bar',
        category: 'food',
        image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80',
        description: 'Cena in uno dei caratteristici ristorantini del Quartiere Latino. Se vi restano energie, potete fare un salto al leggendario jazz club Caveau de la Huchette.',
        coordinates: { lat: 48.8527, lng: 2.3458 },
        address: 'Rue de la Huchette, 75005 Paris',
        metroStop: 'Saint-Michel (M4)'
      }
    ]
  },
  {
    id: 'day-4',
    dayNumber: 4,
    dateStr: 'Giovedì 10 Dicembre',
    dayOfWeek: 'Giovedì',
    title: 'Orsay, Saint-Germain e la Torre Eiffel illuminata',
    tagline: 'Impressionismo, vita da café e le luci sfavillanti',
    summary: 'La mattina tra i capolavori di Monet e Van Gogh all\'Orsay, pranzo rilassato a Saint-Germain-des-Prés, pomeriggio con la Torre Eiffel al tramonto e le grandi luci di Avenue Montaigne.',
    colorTheme: 'from-amber-400/20 to-orange-500/20',
    badge: 'Romantica Fuori Disney',
    stops: [
      {
        id: 'stop-4-1',
        time: '09:30 – 12:00',
        isFixedTime: true,
        title: 'Musée d\'Orsay',
        subtitle: 'L\'antica stazione ferroviaria tempio dell\'Impressionismo',
        category: 'museum',
        image: 'https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=800&q=80',
        description: 'Visita mirata tra capolavori di Monet, Degas, Renoir e Van Gogh. Salite fino all\'iconico orologio trasparente per una vista sulla Senna.',
        under26Info: 'Gratuito per giovani UE 18-25 anni con documento! Consigliato prenotare lo slot orario gratuito.',
        bookingUrl: 'https://www.musee-orsay.fr/',
        bookingLabel: 'Prenota Slot Gratuito Musée d\'Orsay',
        romanticTip: 'Scattate la classica foto romantica in controluce dietro il quadrante gigante dell\'orologio al 5° piano.',
        coordinates: { lat: 48.8599, lng: 2.3265 },
        address: '1 Rue de la Légion d\'Honneur, 75007 Paris',
        metroStop: 'Solférino (M12) o Musée d\'Orsay (RER C)'
      },
      {
        id: 'stop-4-2',
        time: '12:30 – 14:00',
        isFixedTime: false,
        title: 'Saint-Germain-des-Prés',
        subtitle: 'Pranzo tra Rue de Buci e café parigini',
        category: 'food',
        image: 'https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=800&q=80',
        description: 'Passeggiata rilassata nel quartiere intellettuale di Parigi. Pranzo e sosta in un vero café parigino per riscaldarsi e godersi l\'atmosfera.',
        romanticTip: 'Provate una baguette farcita calda o un café au lait con pain au chocolat seduti ai tavolini riscaldati.',
        coordinates: { lat: 48.8539, lng: 2.3332 },
        address: 'Rue de Buci, 75006 Paris',
        metroStop: 'Saint-Germain-des-Prés (M4) o Mabillon (M10)'
      },
      {
        id: 'stop-4-3',
        time: 'Pomeriggio (15:00 – 17:00)',
        isFixedTime: false,
        title: 'Torre Eiffel & Trocadéro al Tramonto',
        subtitle: 'Dalla luce del giorno all\'accensione serale',
        category: 'monument',
        image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80',
        description: 'Ammirate la Torre dal Campo di Marte, attraversate il ponte e salite sulla terrazza del Trocadéro all\'ora in cui si fa buio per vederla scintillare.',
        romanticTip: 'Allo scoccare di ogni ora dopo il tramonto la Torre Eiffel brilla con migliaia di scintille per 5 minuti: imperdibile!',
        coordinates: { lat: 48.8624, lng: 2.2872 },
        address: 'Place du Trocadéro et du 11 Novembre, 75016 Paris',
        metroStop: 'Trocadéro (M6, M9)'
      },
      {
        id: 'stop-4-4',
        time: 'Sera (dalle 17:30)',
        isFixedTime: false,
        title: 'Avenue Montaigne & Champs-Élysées',
        subtitle: 'Le favolose luminarie di Natale e l\'Arco di Trionfo',
        category: 'walk',
        image: 'https://images.unsplash.com/photo-1508050919630-b135583b398f?auto=format&fit=crop&w=800&q=80',
        description: 'Passeggiate lungo Avenue Montaigne, famosa per gli alberi e le vetrine di alta moda decorate a festa. Raggiungete i Champs-Élysées illuminati fino all\'Arco di Trionfo.',
        under26Info: 'La salita alla terrazza panoramica dell\'Arco di Trionfo è GRATUITA per cittadini UE 18-25 anni.',
        officialInfoUrl: 'https://parisjetaime.com/article/les-illuminations-de-noel-a-paris-a016',
        coordinates: { lat: 48.8738, lng: 2.2950 },
        address: 'Place Charles de Gaulle, 75008 Paris',
        metroStop: 'Charles de Gaulle - Étoile (M1, M2, M6, RER A)'
      }
    ]
  },
  {
    id: 'day-5',
    dayNumber: 5,
    dateStr: 'Venerdì 11 Dicembre',
    dayOfWeek: 'Venerdì',
    title: 'Louvre, Opéra Garnier e il Grande Natale Parigino',
    tagline: 'La Gioconda, il teatro d\'oro, la cupola dei magazzini',
    summary: 'Primo ingresso al Louvre con percorso mirato (3 ore), pranzo tra le casette del mercatino delle Tuileries, visita all\'Opéra Garnier, albero gigante di Galeries Lafayette e Place Vendôme illuminata.',
    colorTheme: 'from-rose-500/20 to-amber-500/20',
    badge: 'Arte & Gran Natale',
    stops: [
      {
        id: 'stop-5-1',
        time: '09:00 – 12:00',
        isFixedTime: true,
        title: 'Musée du Louvre',
        subtitle: 'La Piramide, la Gioconda e la Nike di Samotracia',
        category: 'museum',
        image: 'https://images.unsplash.com/photo-1565099824688-e93eb20fe622?auto=format&fit=crop&w=800&q=80',
        description: 'Primo ingresso del mattino. Selezionate in anticipo cosa vedere (Gioconda, Venere di Milo, Galleria di Apollo) per mantenere il piacere della visita.',
        under26Info: 'GRATUITO per cittadini UE 18-25 anni con documento! Prenotate lo slot orario a 0€ sul sito.',
        bookingUrl: 'https://www.ticketlouvre.fr/',
        bookingLabel: 'Prenota Slot Gratuito Louvre (09:00)',
        romanticTip: 'La Galleria d\'Apollo con i diamanti della corona è una delle sale più ricche al mondo.',
        coordinates: { lat: 48.8606, lng: 2.3376 },
        address: 'Musée du Louvre, 75001 Paris',
        metroStop: 'Palais Royal - Musée du Louvre (M1, M7)'
      },
      {
        id: 'stop-5-2',
        time: '12:15 – 13:45',
        isFixedTime: false,
        title: 'Mercatino di Natale delle Tuileries',
        subtitle: '"La Magie de Noël" tra ruota panoramica e chalet gourmet',
        category: 'food',
        image: 'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?auto=format&fit=crop&w=800&q=80',
        description: 'Il villaggio di Natale più famoso di Parigi proprio all\'uscita del Louvre. Stand gastronomici regionali con formaggi fusi, dolci, vin chaud e giostre.',
        officialInfoUrl: 'https://www.paris.fr/evenements/edition-2026-de-la-magie-de-noel-des-tuileries-127134',
        romanticTip: 'Condividete una cialda calda o una baguette al formaggio fuso passeggiando nel giardino.',
        coordinates: { lat: 48.8635, lng: 2.3275 },
        address: 'Jardin des Tuileries, 75001 Paris',
        metroStop: 'Tuileries (M1) o Concorde (M1, M8, M12)'
      },
      {
        id: 'stop-5-3',
        time: '14:30 circa',
        isFixedTime: true,
        title: 'Palais Garnier (Opéra)',
        subtitle: 'Scalone monumentale in marmo e soffitto di Chagall',
        category: 'monument',
        image: 'https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&w=800&q=80',
        description: 'Uno dei palazzi più sfarzosi d\'Europa. Il Grand Foyer dorato ricorda la Galleria degli Specchi di Versailles.',
        under26Info: 'Tariffa ridotta speciale giovani UE (13-25 anni): circa 10 € a persona.',
        bookingUrl: 'https://www.operadeparis.fr/visites/palais-garnier',
        bookingLabel: 'Biglietteria Ufficiale Opéra Garnier (14:30)',
        romanticTip: 'Salite la scalinata d\'onore sentendovi come protagonisti di un ballo dell\'Ottocento.',
        coordinates: { lat: 48.8719, lng: 2.3316 },
        address: 'Pl. de l\'Opéra, 75009 Paris',
        metroStop: 'Opéra (M3, M7, M8)'
      },
      {
        id: 'stop-5-4',
        time: '16:00 – 17:30',
        isFixedTime: false,
        title: 'Galeries Lafayette & Terrazza Panoramica',
        subtitle: 'L\'albero di Natale monumentale sotto la cupola Art Nouveau',
        category: 'shopping',
        image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=80',
        description: 'L\'albero gigante sospeso sotto la cupola di vetro colorato. Salite anche alla terrazza gratuita panoramica sul tetto se il meteo è sereno.',
        romanticTip: 'La vista dei tetti di Parigi e del retro dell\'Opéra dalla terrazza al 7° piano è splendida e gratuita.',
        coordinates: { lat: 48.8737, lng: 2.3321 },
        address: '40 Bd Haussmann, 75009 Paris',
        metroStop: 'Chaussée d\'Antin - La Fayette (M7, M9) o Havre-Caumartin'
      },
      {
        id: 'stop-5-5',
        time: 'Dalle 17:30',
        isFixedTime: false,
        title: 'Place Vendôme illuminata & Madeleine',
        subtitle: 'La piazza dei gioielli con i pini di Natale giganti',
        category: 'walk',
        image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=80',
        description: 'Breve passeggiata tra le vetrine di Rue Saint-Honoré fino a Place Vendôme: alberi di Natale scintillanti e atmosfera parigina esclusiva.',
        coordinates: { lat: 48.8675, lng: 2.3294 },
        address: 'Place Vendôme, 75001 Paris',
        metroStop: 'Tuileries o Madeleine'
      },
      {
        id: 'stop-5-6',
        time: '19:30 – 20:00',
        isFixedTime: false,
        title: 'Cena: Jungle Palace o Bistrot raccolto',
        subtitle: 'Esperienza immersiva scenografica o brasserie romantica',
        category: 'food',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
        description: 'Se vi entusiasma una serata scenografica immersiva, Jungle Palace (12 Rue de la Fidélité) offre proiezioni e cibo a tema. In alternativa, un bistrot raccolto vicino all\'hotel.',
        bookingUrl: 'https://www.ephemera-group.com/nos-restaurants/jungle-palace-paris',
        bookingLabel: 'Prenota Jungle Palace (Ephemera)',
        coordinates: { lat: 48.8757, lng: 2.3571 },
        address: '12 Rue de la Fidélité, 75010 Paris',
        metroStop: 'Gare de l\'Est (M4, M5, M7) o Château d\'Eau (M4)'
      }
    ]
  },
  {
    id: 'day-6',
    dayNumber: 6,
    dateStr: 'Sabato 12 Dicembre',
    dayOfWeek: 'Sabato',
    title: 'Montmartre alla luce del sole e rientro',
    tagline: 'Ultime crêpes, saluti a Parigi e rotta su Orly',
    summary: 'Colazione con calma, check-out e bagagli in deposito. Mattinata a rivedere i vicoli di Montmartre di giorno. Partenza dall\'hotel verso le 12:15 per essere a Orly alle 14:00 (volo 16:40).',
    colorTheme: 'from-slate-500/20 to-sky-500/20',
    badge: 'Arrivederci Parigi 🥐',
    stops: [
      {
        id: 'stop-6-1',
        time: '09:30 – 11:45',
        isFixedTime: false,
        title: 'Passeggiata mattutina a Montmartre',
        subtitle: 'Ultimi croissant, Rue Lepic e forni artigianali',
        category: 'walk',
        image: 'https://images.unsplash.com/photo-1503917988258-f87a78e3c995?auto=format&fit=crop&w=800&q=80',
        description: 'Rivedete con la luce del mattino i luoghi del primo giorno: Place du Tertre senza la folla serale, le panetterie di Rue Lepic per comprare dei souvenir golosi.',
        romanticTip: 'Prendete un croissant caldo appena sfornato e godetevi gli ultimi istanti di Parigi insieme.',
        coordinates: { lat: 48.8867, lng: 2.3431 },
        address: 'Rue Lepic, 75018 Paris',
        metroStop: 'Abbesses o Blanche (M2)'
      },
      {
        id: 'stop-6-2',
        time: '12:00 – 12:30',
        isFixedTime: true,
        title: 'Recupero Bagagli & Partenza per Orly',
        subtitle: 'Itinerario metro rapido: Metro 12 → Metro 14',
        category: 'travel',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
        description: 'Recuperate i bagagli in hotel verso le 12:00–12:15. Prendete la Metro 12 fino a Madeleine, poi cambio sulla moderna Metro 14 che vi porta DIRETTAMENTE dentro l\'aeroporto di Orly!',
        coordinates: { lat: 48.7262, lng: 2.3652 },
        address: 'Aéroport de Paris-Orly, 94390 Orly',
        alertNote: 'Puntate a essere a Orly per le 14:00 (il volo Wizz Air parte alle 16:40).',
        metroStop: 'Metro 14 capolinea: Aéroport d\'Orly'
      }
    ]
  }
];

export function getCitymapperUrl(lat: number, lng: number, name: string, address: string): string {
  return `https://citymapper.com/directions?endcoord=${lat}%2C${lng}&endname=${encodeURIComponent(name)}&endaddress=${encodeURIComponent(address)}`;
}

export function getGoogleMapsUrl(lat: number, lng: number, name: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}+(${encodeURIComponent(name)})`;
}

export function getAppleMapsUrl(lat: number, lng: number, name: string): string {
  return `https://maps.apple.com/?daddr=${lat},${lng}&q=${encodeURIComponent(name)}&dirflg=r`;
}

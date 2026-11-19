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
  rainPlan?: string;
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
  },
  {
    name: 'Le Bon Marché Rive Gauche',
    description: 'Il grande magazzino più elegante e raffinato di Parigi a Saint-Germain, perfetto per passeggiare tra vetrine e sontuose decorazioni natalizie al coperto.',
    address: '24 Rue de Sèvres, 75007 Paris',
    coordinates: { lat: 48.8509, lng: 2.3256 },
    metro: 'Sèvres - Babylone (M10, M12)'
  }
];

export const ITINERARY_DAYS: DayItinerary[] = [
  {
    id: 'day-1',
    dayNumber: 1,
    dateStr: 'Lunedì 7 Dicembre',
    dayOfWeek: 'Lunedì',
    title: 'Arrivare e sentirsi a Parigi',
    tagline: 'Montmartre, il quartiere delle stradine, del panorama e del primo dolce',
    summary: 'Atterraggio a Beauvais alle 12:50, navetta per Parigi e arrivo all\'Hôtel Jardins de Montmartre. Pomeriggio libero da impegni per entrare nell\'atmosfera: passeggiata lungo Rue Caulaincourt, Rue de l\'Abreuvoir e La Maison Rose, Place du Tertre e il tramonto al Sacré-Cœur per guardare Parigi insieme. Discesa da Rue Lepic con sosta per il cramique al cioccolato da Fred e cena conveniente tra Montmartre e Pigalle.',
    colorTheme: 'from-amber-500/20 to-rose-500/20',
    badge: 'Primo Incontro Bohemien',
    rainPlan: 'Se piove forte: Riposo in hotel dopo il viaggio, cena calda nel quartiere e salita al Sacré-Cœur solo se gli spostamenti sono piacevoli. Gli scorci e le stradine di Montmartre si possono recuperare sabato mattina con calma. Non cerchiamo di fare tutte le vie sotto l\'acqua.',
    stops: [
      {
        id: 'stop-1-1',
        time: '12:50 – Pomeriggio',
        isFixedTime: false,
        title: 'Atterraggio a Beauvais & Arrivo in Hotel',
        subtitle: 'Navetta e check-in all\'Hôtel Jardins de Montmartre',
        category: 'travel',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=80',
        description: 'Atterriamo alle 12:50 a Beauvais, prendiamo la navetta per Parigi e raggiungiamo l\'Hôtel Jardins de Montmartre (131 Rue Caulaincourt). L\'arrivo dipende da attese e traffico: nessun altro impegno fissato nel pomeriggio, ci ambientiamo con calma.',
        coordinates: { lat: 48.8906, lng: 2.3353 },
        address: '131 Rue Caulaincourt, 75018 Paris',
        metroStop: 'Lamarck - Caulaincourt (M12)'
      },
      {
        id: 'stop-1-2',
        time: 'Dopo il check-in',
        isFixedTime: false,
        title: 'Rue Caulaincourt, Rue de l\'Abreuvoir & La Maison Rose',
        subtitle: 'Vicoli curvi, ciottoli e sosta foto alla casetta rosa',
        category: 'walk',
        image: 'https://images.unsplash.com/photo-1636931384548-85695ab84581?auto=format&fit=crop&w=1080&q=80',
        description: 'La prima passeggiata serve a entrare nell\'atmosfera della città. Montmartre è fatta di salite, scalinate, piccoli negozi e case che in alcuni tratti fanno pensare a un paese. Dall\'hotel saliamo lungo Rue Caulaincourt, raggiungendo poi Rue de l\'Abreuvoir: una strada curva e acciottolata, con scorci da fotografare. Qui troviamo La Maison Rose, una casetta dalla facciata rosa che ospita un ristorante. Ci fermiamo per guardarla e fare una foto: è una tappa di pochi minuti.',
        romanticTip: 'È una tappa di pochi minuti per fare una foto ricordo e respirare l\'aria bohémien mano nella mano.',
        coordinates: { lat: 48.8879, lng: 2.3398 },
        address: '2 Rue de l\'Abreuvoir, 75018 Paris',
        metroStop: 'Lamarck - Caulaincourt (M12)',
        alertNote: 'Nota: Il Mur des Je t\'aime resta escluso dal percorso fino a riapertura confermata dal Comune.'
      },
      {
        id: 'stop-1-3',
        time: 'Pomeriggio',
        isFixedTime: false,
        title: 'Place du Tertre',
        subtitle: 'La piazzetta storica degli artisti e pittori',
        category: 'walk',
        image: 'https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?auto=format&fit=crop&w=1080&q=80',
        description: 'Proseguiamo verso Place du Tertre, la piazzetta conosciuta per artisti e ritrattisti. Guardiamo le opere e l\'ambiente, senza contare sulla presenza degli artisti a qualsiasi ora.',
        romanticTip: 'Fermatevi a curiosare tra i cavalletti: l\'atmosfera a inizio dicembre con le lucine natalizie accese è fiabesca.',
        coordinates: { lat: 48.8865, lng: 2.3408 },
        address: 'Place du Tertre, 75018 Paris',
        metroStop: 'Abbesses o Lamarck'
      },
      {
        id: 'stop-1-4',
        time: 'Crepuscolo / Tramonto',
        isFixedTime: false,
        title: 'Basilica del Sacré-Cœur & Panorama',
        subtitle: 'Fermarsi uno accanto all\'altra a guardare Parigi',
        category: 'monument',
        image: 'https://images.unsplash.com/photo-1520939817895-060bdef4dc1b?auto=format&fit=crop&w=1080&q=80',
        description: 'Arriviamo al Sacré-Cœur, la grande chiesa bianca in cima alla collina. Il momento principale è il panorama: fermarci uno accanto all\'altra a guardare Parigi che si estende sotto i nostri piedi. Possiamo anche visitarne l\'interno, rispettando le celebrazioni liturgiche. Se troviamo ancora luce, bene. Se è già buio, non abbiamo perso la giornata: vediamo il quartiere nella sua atmosfera serale.',
        romanticTip: 'Fermatevi vicini sul belvedere mentre le luci della città iniziano ad accendersi una a una.',
        under26Info: 'Ingresso alla basilica gratuito per tutti.',
        coordinates: { lat: 48.8867, lng: 2.3431 },
        address: '35 Rue du Chevalier de la Barre, 75018 Paris',
        metroStop: 'Anvers (M2) o Funiculaire de Montmartre'
      },
      {
        id: 'stop-1-5',
        time: 'Scendendo (Tardo pomeriggio)',
        isFixedTime: false,
        title: 'Rue des Abbesses, Rue Lepic & Cramique da Fred',
        subtitle: 'Botteghe vivaci e il primo cramique al cioccolato',
        category: 'food',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1080&q=80',
        description: 'Torniamo verso Rue des Abbesses e Rue Lepic, dove la passeggiata diventa più vivace, tra botteghe e locali. Al 2 Rue Lepic c\'è Aux Merveilleux de Fred: se è aperto, primo cramique al cioccolato, la morbida brioche belga tempestata di perle di cioccolato che desideriamo assaggiare!',
        romanticTip: 'Il profumo di brioche calda appena sfornata che esce dal laboratorio a vista di Fred vi conquisterà al primo istante.',
        coordinates: { lat: 48.8837, lng: 2.3338 },
        address: '2 Rue Lepic, 75018 Paris',
        metroStop: 'Blanche (M2) o Abbesses (M12)'
      },
      {
        id: 'stop-1-6',
        time: '19:30 – 20:00 circa',
        isFixedTime: false,
        title: 'Cena tra Montmartre e Pigalle',
        subtitle: 'Pasto conveniente, caldo e passaggio al Moulin Rouge',
        category: 'food',
        image: 'https://images.unsplash.com/photo-1580164109780-d3925e57abc3?auto=format&fit=crop&w=1080&q=80',
        description: 'Cena rilassata nel quartiere, cercando qualcosa di soddisfacente e conveniente (ottima scelta Bouillon Pigalle al 22 Bd de Clichy con cucina tipica francese a prezzi modici). Dopo cena, se abbiamo energie, breve passaggio al Moulin Rouge (82 Bd de Clichy) per vedere il famoso mulino rosso illuminato dall\'esterno (senza assistere allo spettacolo). Poi eventuale locale per bevanda analcolica oppure rientro: domani è Disneyland!',
        romanticTip: 'Scattate la foto ricordo dal marciapiede opposto con il mulino rosso al neon che risplende nel viale.',
        coordinates: { lat: 48.8826, lng: 2.3372 },
        address: '22 Bd de Clichy, 75018 Paris',
        metroStop: 'Pigalle (M2, M12) o Blanche (M2)'
      }
    ]
  },
  {
    id: 'day-2',
    dayNumber: 2,
    dateStr: 'Martedì 8 Dicembre',
    dayOfWeek: 'Martedì',
    title: 'Il nostro anniversario a Disneyland',
    tagline: 'Fiaba, castello incantato e magia natalizia per due',
    summary: 'Giornata interamente dedicata a Disneyland Paris, già prenotata. Partenza in tempo per l\'apertura con la RER A, pause al caldo, pranzo e cena organizzati secondo il programma del parco. Rientro dopo lo spettacolo serale secondo gli orari effettivi.',
    colorTheme: 'from-purple-500/20 to-pink-500/20',
    badge: 'Anniversario Speciale ❤️',
    rainPlan: 'Se piove forte: Adattiamo attrazioni, spettacoli e pause alle condizioni e alle informazioni dell\'app ufficiale Disney. Moltissime attrazioni sono interamente al coperto (Pirates of the Caribbean, Peter Pan, Space Mountain, Phantom Manor, Ratatouille), così come le gallerie arcade coperte di Main Street U.S.A. e i teatri degli spettacoli.',
    stops: [
      {
        id: 'stop-2-1',
        time: '08:00 – 08:30',
        isFixedTime: false,
        title: 'Partenza in RER A per Disneyland',
        subtitle: 'Da Parigi centro a Marne-la-Vallée Chessy',
        category: 'travel',
        image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1080&q=80',
        description: 'Partenza di buon mattino per arrivare in tempo per l\'apertura del parco. Prendiamo la RER A (ad es. da Châtelet-Les Halles o Nation) in direzione Marne-la-Vallée Chessy (~40 min), scendendo proprio davanti ai tornelli di ingresso.',
        coordinates: { lat: 48.8700, lng: 2.7830 },
        address: 'Gare de Marne-la-Vallée Chessy, 77700 Chessy',
        metroStop: 'RER A Capolinea: Marne-la-Vallée Chessy'
      },
      {
        id: 'stop-2-2',
        time: '09:30 – Pomeriggio',
        isFixedTime: false,
        title: 'Parc Disneyland & Main Street U.S.A.',
        subtitle: 'Stagione di Natale Disney, Castello e pause al caldo',
        category: 'disney',
        image: 'https://images.unsplash.com/photo-1597466599360-3b9775841aec?auto=format&fit=crop&w=1080&q=80',
        description: 'Giornata dedicata al vostro anniversario. Priorità al parco principale con l\'albero gigante, le musiche natalizie e la neve finta su Main Street. Concentratevi sulle attrazioni che desiderate entrambi senza corse, alternando giri a pause al caldo per riscaldarsi con una cioccolata fumante.',
        romanticTip: 'Per l\'anniversario regalatevi un cerchietto a tema e una foto di coppia davanti al Castello della Bella Addormentata.',
        coordinates: { lat: 48.8722, lng: 2.7758 },
        address: 'Bd de Parc, 77700 Coupvray',
        bookingUrl: 'https://www.disneylandparis.com/fr-fr/application-mobile',
        bookingLabel: 'Apri App Disneyland Paris (Orari & Tempi File)',
        officialInfoUrl: 'https://www.disneylandparis.com/fr-ch/les-saisons/noel-a-disneyland-paris'
      },
      {
        id: 'stop-2-3',
        time: 'Pomeriggio & Sera',
        isFixedTime: false,
        title: 'Parata & Spettacolo Notturno Disney',
        subtitle: 'Fuochi d\'artificio, droni e proiezioni sul Castello',
        category: 'disney',
        image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1080&q=80',
        description: 'Consultate l\'app Disney per l\'orario esatto dello show notturno e della parata natalizia. Pranzo e cena organizzati secondo il programma del parco. Al termine dello spettacolo serale, rientro a Parigi con RER A quando vi sentite appagati.',
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
    title: 'Le vetrate, la Parigi antica e la crociera',
    tagline: 'Vetri gotici, mercatino profumato, cramique e luci sulla Senna',
    summary: 'Mattinata tra la cappella superiore della Sainte-Chapelle (9:30) e Notre-Dame (11:00 circa). Tarda mattina al mercatino di Square René Viviani e pranzo al caldo nel Quartiere Latino. Pomeriggio tra Île Saint-Louis, il cramique da Fred al 24 Rue du Pont Louis-Philippe e le strade del Marais (o Saint-Germain). Alle 18:45 crociera sulla Senna al Pont Neuf, seguita da cena comoda e possibile serata jazz con posti a sedere.',
    colorTheme: 'from-blue-500/20 to-cyan-500/20',
    badge: 'Parigi Antica & Senna',
    rainPlan: 'Se piove forte: Manteniamo le visite del mattino (Sainte-Chapelle e Notre-Dame sono coperte). Riduciamo isola e Marais, scegliendo un pranzo lungo e una pausa al caldo. Come alternativa coperta speciale: Galerie Vivienne (galleria coperta ottocentesca con pavimenti a mosaico, vetrine e librerie). Per la crociera controlliamo con l\'operatore: i battelli dispongono di saloni panoramici chiusi e riscaldati, non viene cancellata per la sola pioggia.',
    stops: [
      {
        id: 'stop-3-1',
        time: '09:30',
        isFixedTime: true,
        title: 'Sainte-Chapelle: entrare in una stanza di vetro colorato',
        subtitle: 'La cappella superiore e 1.113 scene bibliche',
        category: 'monument',
        image: 'https://images.unsplash.com/photo-1571860424830-0271e6c9d9b2?auto=format&fit=crop&w=1080&q=80',
        description: 'La parte più suggestiva è la cappella superiore: le grandi vetrate occupano quasi tutte le pareti e raccontano scene bibliche. Non serve studiare ogni pannello: ci prendiamo il tempo per guardare i colori, i dettagli e l\'effetto complessivo dello spazio. Calcoliamo circa 30–45 minuti all\'interno, oltre ai controlli e alle eventuali attese.',
        under26Info: 'Gratuito per giovani cittadini UE 18-25 anni (esibite la prenotazione dello slot orario gratuito).',
        romanticTip: 'Salite la stretta scala a chiocciola: sbucare all\'improvviso nella sala superiore inondata di luce colorata lascia senza fiato.',
        coordinates: { lat: 48.8554, lng: 2.3450 },
        address: '10 Bd du Palais, 75001 Paris',
        metroStop: 'Cité (M4) o Saint-Michel (M4, RER B/C)'
      },
      {
        id: 'stop-3-2',
        time: '11:00 circa',
        isFixedTime: false,
        title: 'Notre-Dame: vedere la cattedrale e il suo quartiere',
        subtitle: 'La grande navata, le altezze e la rinascita',
        category: 'monument',
        image: 'https://images.unsplash.com/photo-1755812969724-ef1802a07a95?auto=format&fit=crop&w=1080&q=80',
        description: 'Entriamo per osservare la grande navata, le altezze e l\'atmosfera della cattedrale. Per noi può essere una visita relativamente breve. L\'orario dipende dalla disponibilità dell\'accesso: le 11 restano l\'obiettivo, non una prenotazione già garantita.',
        bookingUrl: 'https://resa.notredamedeparis.fr/fr/reservationindividuelle/tickets',
        bookingLabel: 'Prenota Slot Notre-Dame (Slot Giornaliero)',
        romanticTip: 'Ammirate la maestosa facciata con le torri campanarie dal sagrato prima di entrare.',
        coordinates: { lat: 48.8530, lng: 2.3499 },
        address: '6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris',
        metroStop: 'Cité (M4)'
      },
      {
        id: 'stop-3-3',
        time: 'Tarda mattina (11:45 – 12:30)',
        isFixedTime: false,
        title: 'Mercatino di Natale a Square René Viviani',
        subtitle: 'Chalet tradizionali affacciati sul fiume',
        category: 'food',
        image: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=1080&q=80',
        description: 'Attraversiamo la Senna e raggiungiamo Square René Viviani, il piccolo giardino di fronte alla zona di Notre-Dame. Qui il motivo della sosta è il mercatino: guardare gli chalet, curiosare tra prodotti e decorazioni e scegliere qualcosa da assaggiare. Non dobbiamo acquistare né mangiare tutto.',
        romanticTip: 'Cercate la robinia piantata nel 1601: è l\'albero vivente più antico di tutta Parigi.',
        coordinates: { lat: 48.8523, lng: 2.3475 },
        address: '25 Quai de Montebello, 75005 Paris',
        officialInfoUrl: 'https://www.paris.fr/evenements/marche-de-noel-notre-dame-124520',
        metroStop: 'Saint-Michel (M4) o Maubert-Mutualité (M10)'
      },
      {
        id: 'stop-3-4',
        time: '12:30 – 13:30 circa',
        isFixedTime: false,
        title: 'Pranzo al caldo nel Quartiere Latino',
        subtitle: 'Pausa vera seduti al riparo dal freddo',
        category: 'food',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1080&q=80',
        description: 'Restiamo nella zona della cattedrale e del Quartiere Latino. Ci sediamo e facciamo una pausa vera al caldo in un bistrot tipico (ad es. Le Bistro des Augustins sul lungosenna per i famosi gratin caldi, o una crêperie bretone).',
        coordinates: { lat: 48.8535, lng: 2.3440 },
        address: 'Quartiere Latino, 75005 Paris',
        metroStop: 'Saint-Michel (M4)'
      },
      {
        id: 'stop-3-5',
        time: 'Primo pomeriggio (13:30 – 14:30)',
        isFixedTime: false,
        title: 'Île Saint-Louis & Aux Merveilleux de Fred',
        subtitle: 'Ponti, scorci sul fiume e cramique al cioccolato',
        category: 'walk',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1080&q=80',
        description: 'Passeggiamo verso Île Saint-Louis, una piccola isola abitata in mezzo alla Senna. Non contiene una grande attrazione obbligatoria: ci andiamo per le facciate, le stradine e gli affacci sul fiume. Attraversando verso la riva destra raggiungiamo Aux Merveilleux de Fred, 24 Rue du Pont Louis-Philippe. È il posto per il cramique se lunedì non siamo riusciti ad assaggiarlo, oppure per un secondo dolce.',
        romanticTip: 'Passeggiare sui moli silenziosi dell\'isola con le luci invernali che riflettono sulla Senna.',
        coordinates: { lat: 48.8550, lng: 2.3551 },
        address: '24 Rue du Pont Louis-Philippe, 75004 Paris',
        metroStop: 'Pont Marie (M7)'
      },
      {
        id: 'stop-3-6',
        time: '14:30 – 16:45 circa',
        isFixedTime: false,
        title: 'Il Marais: curiosare, non inseguire monumenti',
        subtitle: 'Rue François-Miron, Rue des Rosiers e Place des Vosges (opzionale)',
        category: 'walk',
        image: 'https://images.unsplash.com/photo-1594558068774-4bd20990a583?auto=format&fit=crop&w=1080&q=80',
        description: 'Il Marais è un quartiere di negozi, cortili, locali e strade piacevoli da esplorare. Possiamo passare da Rue François-Miron, con edifici antichi, e proseguire verso Rue des Rosiers, legata alla storia ebraica del quartiere e conosciuta anche per il cibo. Se ci va di continuare, arriviamo a Place des Vosges: una piazza circondata da edifici in mattoni e portici, dove passeggiare e osservare l\'insieme. La piazza è il punto più lontano del giro, quindi resta facoltativa. (In alternativa: questo pomeriggio può essere dedicato a Saint-Germain-des-Prés).',
        romanticTip: 'I portici simmetrici di Place des Vosges offrono un riparo romantico e suggestivo.',
        coordinates: { lat: 48.8555, lng: 2.3656 },
        address: 'Place des Vosges, 75004 Paris',
        alertNote: 'Interrompere il giro verso le 17:00 per avvicinarsi a Pont Neuf con calma.'
      },
      {
        id: 'stop-3-7',
        time: 'Dalle 17:00 – 18:15',
        isFixedTime: false,
        title: 'Verso la Crociera & Hôtel de Ville',
        subtitle: 'Piazza del Municipio illuminata e arrivo all\'imbarco',
        category: 'walk',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1080&q=80',
        description: 'Raggiungiamo Pont Neuf, usando i mezzi se ci troviamo lontani. L\'eventuale passaggio davanti all\'Hôtel de Ville, il grande Municipio di Parigi, serve a vedere la facciata illuminata e la piazza. Arrivo all\'imbarco intorno alle 18:15 per seguire le indicazioni del biglietto.',
        coordinates: { lat: 48.8566, lng: 2.3522 },
        address: 'Place de l\'Hôtel de Ville / Pont Neuf, 75004 Paris',
        metroStop: 'Hôtel de Ville (M1, M11) o Pont Neuf (M7)'
      },
      {
        id: 'stop-3-8',
        time: '18:45 TASSATIVO',
        isFixedTime: true,
        title: 'Crociera sulla Senna (Pont Neuf)',
        subtitle: 'Per un\'ora lasciamo che sia la città a scorrere davanti a noi',
        category: 'cruise',
        image: 'https://images.unsplash.com/photo-1613614338153-14ed06b3dc9e?auto=format&fit=crop&w=1080&q=80',
        description: 'Crociera già prenotata di un\'ora con partenza da Pont Neuf. Ponti, edifici illuminati e Torre Eiffel lungo il percorso: il senso è vedere Parigi dall\'acqua e goderci il momento insieme. La posizione esatta della barca durante lo scintillio della Torre non è garantita.',
        romanticTip: 'Mettetevi vicini sul ponte o accanto ai finestroni del salone coperto e ammirate la magia dei riflessi.',
        coordinates: { lat: 48.8571, lng: 2.3406 },
        address: 'Square du Vert-Galant, Pont Neuf, 75001 Paris',
        metroStop: 'Pont Neuf (M7)'
      },
      {
        id: 'stop-3-9',
        time: '20:15 in poi',
        isFixedTime: false,
        title: 'Cena e possibile serata jazz dal vivo',
        subtitle: 'Locale accogliente con posti a sedere e bevande analcoliche',
        category: 'food',
        image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1080&q=80',
        description: 'Scegliamo un ristorante comodo rispetto all\'imbarco e al locale del dopocena. Questa è la sera che terrei come prima candidata per il jazz dal vivo: un locale accogliente con posti a sedere e possibilità di ordinare analcolici (ad es. il prestigioso Duc des Lombards o il Sunset/Sunside in Rue des Lombards, a soli 6 minuti a piedi da Pont Neuf). Non fissiamo anche una lunga passeggiata dopo cena.',
        romanticTip: 'Ascoltare note jazz dal vivo comodamente seduti a un tavolino intimo è il coronamento perfetto della serata.',
        coordinates: { lat: 48.8598, lng: 2.3486 },
        address: 'Rue des Lombards, 75001 Paris',
        metroStop: 'Châtelet (M1, M4, M7, M11, M14)'
      }
    ]
  },
  {
    id: 'day-4',
    dayNumber: 4,
    dateStr: 'Giovedì 10 Dicembre',
    dayOfWeek: 'Giovedì',
    title: 'Monet, Van Gogh, Torre Eiffel e mercatini',
    tagline: 'Le Ninfee per lei, i capolavori di Orsay e la Torre scintillante',
    summary: 'Mattinata dedicata all\'arte: apertura alle Ninfee di Monet all\'Orangerie (9:00), poi attraverso la Senna al Musée d\'Orsay (11:00) per Van Gogh e Renoir. Pranzo seduti al caldo vicino al museo. Pomeriggio ai piedi della Torre Eiffel e al tramonto sulla terrazza panoramica del Trocadéro. Sera tra le vetrine di Avenue Montaigne e il grande mercatino natalizio degli Champs-Élysées.',
    colorTheme: 'from-amber-400/20 to-orange-500/20',
    badge: 'Ninfee & Torre Eiffel ✨',
    rainPlan: 'Se piove forte: La mattina nei musei resta invariata. Dopo pranzo controlliamo se c\'è una finestra migliore per uscire; se continua a piovere forte, sostituiamo la lunga passeggiata con una pausa e negozi al coperto: possiamo andare a Le Bon Marché, grande magazzino elegante a Saint-Germain, per vetrine e decorazioni al coperto. Torre e luci passano al venerdì sera soltanto sostituendo parte del programma, non aggiungendosi a tutto.',
    stops: [
      {
        id: 'stop-4-1',
        time: '09:00 – 10:15',
        isFixedTime: true,
        title: 'Orangerie: le Ninfee per lei',
        subtitle: 'Le due sale ovali monumentali di Monet',
        category: 'museum',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1080&q=80',
        description: 'La priorità sono le due sale ovali delle Ninfee di Monet. I dipinti sono enormi e vi circondano: acqua, riflessi, vegetazione e colori. Ci sediamo, guardiamo da lontano e poi ci avviciniamo. È il momento per soffermarsi su qualcosa che interessa davvero alla tua ragazza. La collezione al piano inferiore resta una seconda parte breve, se rimangono tempo e curiosità. Non cerchiamo di esaurire tutto il museo.',
        romanticTip: 'Sedetevi al centro della sala ovale circolare e lasciatevi avvolgere dai riflessi di luce e dai colori di Monet.',
        under26Info: 'GRATUITO per cittadini UE 18-25 anni con documento! Prenotare lo slot a 0€ sul sito.',
        bookingUrl: 'https://www.musee-orangerie.fr/',
        bookingLabel: 'Prenota Slot Gratuito Orangerie (09:00)',
        coordinates: { lat: 48.8638, lng: 2.3227 },
        address: 'Jardin des Tuileries (lato Concorde), 75001 Paris',
        metroStop: 'Concorde (M1, M8, M12)'
      },
      {
        id: 'stop-4-2',
        time: '10:15 – 11:00',
        isFixedTime: false,
        title: 'Attraversiamo la Senna verso Orsay',
        subtitle: 'Passeggiata sul ponte pedonale ed eventuale caffè',
        category: 'walk',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=80',
        description: 'Lasciamo margine per il tragitto e l\'ingresso. Attraversiamo la Senna a piedi (via Passerelle Léopold-Sédar-Senghor) verso il Musée d\'Orsay. La pausa caffè è possibile se i tempi lo consentono.',
        coordinates: { lat: 48.8615, lng: 2.3245 },
        address: 'Passerelle Léopold-Sédar-Senghor, 75007 Paris',
        metroStop: 'Solférino (M12) o Assemblée Nationale (M12)'
      },
      {
        id: 'stop-4-3',
        time: '11:00 – 13:00 circa',
        isFixedTime: true,
        title: 'Orsay: Van Gogh e i quadri che ci attirano',
        subtitle: 'La vecchia stazione, gli orologi e i capolavori impressionisti',
        category: 'museum',
        image: 'https://images.unsplash.com/photo-1573301626856-8552b3889342?auto=format&fit=crop&w=1080&q=80',
        description: 'Il museo occupa una vecchia stazione: guardiamo anche la grande navata e gli orologi, oltre alle opere. Prepariamo un percorso con priorità a: Van Gogh (soprattutto Notte stellata sul Rodano e Autoritratto, se esposti); Renoir (con il ballo del Moulin de la Galette); alcune opere di Monet e Degas, secondo interesse e disponibilità. Guardiamo poche opere bene. Non percorriamo ogni sala soltanto perché è compresa nel biglietto.',
        romanticTip: 'Scattate la foto romantica dietro il quadrante gigante dell\'orologio trasparente al 5° piano.',
        under26Info: 'GRATUITO per giovani UE 18-25 anni con documento! Consigliato prenotare lo slot gratuito a 0€.',
        bookingUrl: 'https://www.musee-orsay.fr/',
        bookingLabel: 'Prenota Slot Gratuito Musée d\'Orsay (11:00)',
        coordinates: { lat: 48.8599, lng: 2.3265 },
        address: '1 Rue de la Légion d\'Honneur, 75007 Paris',
        metroStop: 'Solférino (M12) o Musée d\'Orsay (RER C)'
      },
      {
        id: 'stop-4-4',
        time: '13:00 – 14:15',
        isFixedTime: false,
        title: 'Pranzo vicino al museo',
        subtitle: 'Pausa seduti prima del pomeriggio all\'aperto',
        category: 'food',
        image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1080&q=80',
        description: 'Pausa seduti nei dintorni di Orsay (ad esempio in Rue du Bac o al Café Campana dentro il museo) per rilassarsi al caldo prima del pomeriggio all\'aperto.',
        coordinates: { lat: 48.8588, lng: 2.3275 },
        address: 'Rue de Bellechasse / Rue du Bac, 75007 Paris',
        metroStop: 'Solférino (M12)'
      },
      {
        id: 'stop-4-5',
        time: '15:00 – 16:00',
        isFixedTime: false,
        title: 'La Torre da vicino e dalla Senna',
        subtitle: 'Quai Branly e Pont d\'Iéna ai piedi della Torre',
        category: 'monument',
        image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1080&q=80',
        description: 'Trasferimento verso la Torre Eiffel con un mezzo (RER C da Musée d\'Orsay a Champ de Mars-Tour Eiffel, ~8 min): non serve consumare energie in un lungo collegamento a piedi. Arriviamo nella zona di Quai Branly e Pont d\'Iéna: il lungofiume e il ponte ai piedi della Torre. La guardiamo dal basso, passeggiamo vicino all\'acqua e facciamo foto. Non programmiamo la salita sulla Torre: richiederebbe un\'altra prenotazione e cambierebbe il pomeriggio.',
        romanticTip: 'Ammirate la maestosità della struttura in ferro dal molo lungosenna.',
        coordinates: { lat: 48.8584, lng: 2.2945 },
        address: 'Quai Branly / Pont d\'Iéna, 75007 Paris',
        metroStop: 'Champ de Mars - Tour Eiffel (RER C) o Bir-Hakeim (M6)'
      },
      {
        id: 'stop-4-6',
        time: '16:00 – 17:15',
        isFixedTime: false,
        title: 'Il panorama del Trocadéro',
        subtitle: 'La terrazza, il passaggio luce-buio e lo scintillio',
        category: 'monument',
        image: 'https://images.unsplash.com/photo-1540982318052-f5357b1cc18c?auto=format&fit=crop&w=1080&q=80',
        description: 'Attraversiamo il fiume e raggiungiamo la terrazza di fronte alla Torre. Qui la vediamo intera, con Parigi intorno. Il momento da vivere è il passaggio dalla luce al buio e, quando attivo, lo scintillio all\'ora piena (17:00). Non dobbiamo aspettare immobili al freddo: adattiamo sosta e pausa alle condizioni.',
        romanticTip: 'Abbracciatevi sulla terrazza mentre scocca l\'ora e la Torre inizia a brillare con migliaia di scintille dorate.',
        coordinates: { lat: 48.8624, lng: 2.2872 },
        address: 'Place du Trocadéro et du 11 Novembre, 75016 Paris',
        metroStop: 'Trocadéro (M6, M9)'
      },
      {
        id: 'stop-4-7',
        time: '18:00 – 18:45',
        isFixedTime: false,
        title: 'Avenue Montaigne: le vetrine natalizie',
        subtitle: 'Boutique eleganti, alberi addobbati e luminarie',
        category: 'shopping',
        image: 'https://images.unsplash.com/photo-1573986409198-280cc9bbc399?auto=format&fit=crop&w=1080&q=80',
        description: 'Pausa al caldo con qualcosa di dolce o una bevanda calda, poi raggiungiamo la zona di Alma-Marceau (in metro M9). Avenue Montaigne è una strada di boutique e alberghi eleganti. Non ci andiamo per fare acquisti costosi: guardiamo decorazioni e facciate mentre risaliamo verso gli Champs-Élysées. Se ci basta un giro breve, proseguiamo senza doverla "completare".',
        coordinates: { lat: 48.8661, lng: 2.3075 },
        address: 'Avenue Montaigne, 75008 Paris',
        metroStop: 'Alma - Marceau (M9) o Franklin D. Roosevelt (M1, M9)'
      },
      {
        id: 'stop-4-8',
        time: '18:45 – 20:00 circa',
        isFixedTime: false,
        title: 'Mercatino degli Champs-Élysées & Cena',
        subtitle: 'Chalet in festa dal Rond-Point a Concorde',
        category: 'food',
        image: 'https://images.unsplash.com/photo-1513297887119-d46091b24bfa?auto=format&fit=crop&w=1080&q=80',
        description: 'Dal Rond-Point scendiamo verso Concorde, nella parte bassa del grande viale dove è allestito il mercatino. Questo tempo serve per curiosare tra chalet, guardare le luci e scegliere qualcosa da mangiare. Gli Champs sono ampi e vivaci: un\'atmosfera spettacolare. Dalle 20:00 decidiamo se cenare in zona o mangiare al mercatino. L\'Arco di Trionfo è un eventuale finale in metro senza imporci di risalire a piedi tutto il viale.',
        romanticTip: 'Passeggiate tra gli chalet illuminati con un dolce caldo e l\'atmosfera del Natale parigino.',
        coordinates: { lat: 48.8675, lng: 2.3135 },
        address: 'Av. des Champs-Élysées, 75008 Paris',
        metroStop: 'Champs-Élysées - Clemenceau (M1, M13) o Concorde (M1, M8, M12)'
      }
    ]
  },
  {
    id: 'day-5',
    dayNumber: 5,
    dateStr: 'Venerdì 11 Dicembre',
    dayOfWeek: 'Venerdì',
    title: 'Il Louvre, l\'Opéra e l\'ultima cena speciale',
    tagline: 'Appartamenti Napoleone III, l\'oro dell\'Opéra e Jungle Palace',
    summary: 'Ore 9:00 ingresso al Louvre con percorso mirato: priorità assoluta agli Appartamenti Napoleone III e ai capolavori desiderati (Canova, Samotracia, Gioconda). Pranzo e mercatino alle Tuileries. Alle 14:30 lo scalone monumentale e i saloni dorati di Palais Garnier (Opéra). Pomeriggio tra la cupola e l\'albero di Galeries Lafayette e le vetrine animate di Printemps. Ore 20:00 la spettacolare cena immersiva al Jungle Palace.',
    colorTheme: 'from-rose-500/20 to-amber-500/20',
    badge: 'Gran Finale & Cena Speciale 🌺',
    rainPlan: 'Se piove forte: È già la giornata più protetta del viaggio: Louvre, pranzo seduti, Opéra Garnier, grandi magazzini al coperto e ristorante. Saltiamo le Tuileries e la terrazza scoperta. Usiamo i mezzi per i collegamenti e conserviamo i margini tra le prenotazioni.',
    stops: [
      {
        id: 'stop-5-1',
        time: '09:00 – 12:15 circa',
        isFixedTime: true,
        title: 'Musée du Louvre (Ingresso prenotato)',
        subtitle: 'Appartamenti Napoleone III e capolavori scelti',
        category: 'museum',
        image: 'https://images.unsplash.com/photo-1543335785-8aadf6d8183c?auto=format&fit=crop&w=1080&q=80',
        description: 'Il percorso deve partire dai vostri interessi. Gli Appartamenti Napoleone III sono una priorità: saloni con arredi, lampadari e decorazioni sontuose (ambienti del Secondo Impero, non la camera da letto di Napoleone Bonaparte). Poi scegliamo un percorso tra: Amore e Psiche (la scultura di Canova con le due figure nell\'istante del bacio); Vittoria di Samotracia (la figura alata sul grande scalone); Gioconda e Nozze di Cana (nella stessa sala); Venere di Milo, se tempo e percorso lo permettono. Non cerchiamo di vedere tutto: se ci appassioniamo, accorciamo la sosta successiva.',
        romanticTip: 'Fermatevi davanti alla scultura di Amore e Psiche di Canova: l\'attimo prima del bacio trasmette un romanticismo senza tempo.',
        under26Info: 'GRATUITO per cittadini UE 18-25 anni con documento! Prenotare lo slot orario a 0€ sul sito.',
        bookingUrl: 'https://www.ticketlouvre.fr/',
        bookingLabel: 'Prenota Slot Gratuito Louvre (09:00)',
        coordinates: { lat: 48.8606, lng: 2.3376 },
        address: 'Musée du Louvre, 75001 Paris',
        metroStop: 'Palais Royal - Musée du Louvre (M1, M7)'
      },
      {
        id: 'stop-5-2',
        time: '12:15 – 14:00',
        isFixedTime: false,
        title: 'Pranzo e Giardini delle Tuileries',
        subtitle: 'Chalet natalizi e sosta prima dell\'Opéra',
        category: 'food',
        image: 'https://images.unsplash.com/photo-1767477692800-a36344da0627?auto=format&fit=crop&w=1080&q=80',
        description: 'I Giardini delle Tuileries sono il grande spazio verde davanti al Louvre. Il motivo della tappa in dicembre è soprattutto il mercatino: chalet, cibo e attrazioni. Facciamo un giro breve, compatibile con un pranzo e il trasferimento all\'Opéra. Se il Louvre ci trattiene, mangiamo e lasciamo il mercatino: giovedì abbiamo già tempo dedicato agli chalet.',
        coordinates: { lat: 48.8635, lng: 2.3275 },
        address: 'Jardin des Tuileries, 75001 Paris',
        metroStop: 'Tuileries (M1) o Pyramides (M7, M14)'
      },
      {
        id: 'stop-5-3',
        time: '14:30 – 16:00',
        isFixedTime: true,
        title: 'Palais Garnier (Opéra, da prenotare)',
        subtitle: 'La grande scalinata monumentale e i saloni decorati',
        category: 'monument',
        image: 'https://images.unsplash.com/photo-1650772868326-585230bb132c?auto=format&fit=crop&w=1080&q=80',
        description: 'Qui non veniamo per guardare altri quadri. Visitiamo la grande scalinata e i saloni decorati dell\'Opéra: soffitti, specchi, dorature e ambienti teatrali. È il momento scenografico che interessa alla tua ragazza. La sala degli spettacoli si vede soltanto se accessibile; prove e attività del teatro possono impedirne l\'ingresso.',
        romanticTip: 'Salite la scalinata d\'onore sentendovi come protagonisti di un ballo dell\'Ottocento.',
        under26Info: 'Tariffa ridotta speciale giovani UE (13-25 anni): circa 10 € a persona.',
        bookingUrl: 'https://www.operadeparis.fr/visites/palais-garnier',
        bookingLabel: 'Biglietteria Ufficiale Opéra Garnier (14:30)',
        coordinates: { lat: 48.8719, lng: 2.3316 },
        address: 'Pl. de l\'Opéra, 75009 Paris',
        metroStop: 'Opéra (M3, M7, M8)'
      },
      {
        id: 'stop-5-4',
        time: '16:00 – 18:00',
        isFixedTime: false,
        title: 'Galeries Lafayette & Printemps',
        subtitle: 'La cupola, l\'albero di Natale e le vetrine animate',
        category: 'shopping',
        image: 'https://images.unsplash.com/photo-1574927523620-7eb999e5d614?auto=format&fit=crop&w=1080&q=80',
        description: 'Grandi magazzini vicini all\'Opéra. Alle Galeries Lafayette entriamo per la cupola e l\'albero natalizio monumentale; all\'esterno guardiamo le vetrine, comprese quelle di Printemps. La terrazza delle Galeries è una possibilità se aperta e con meteo adatto, non un altro appuntamento obbligatorio. Ci fermiamo anche per un dolce o una bevanda: questa parte deve essere piacevole, senza correre.',
        romanticTip: 'Ammirate l\'albero gigante sospeso a mezz\'aria sotto la vetrata colorata della cupola Art Nouveau.',
        coordinates: { lat: 48.8737, lng: 2.3321 },
        address: '40 Bd Haussmann, 75009 Paris',
        metroStop: 'Chaussée d\'Antin - La Fayette (M7, M9) o Havre-Caumartin'
      },
      {
        id: 'stop-5-5',
        time: '18:00 – 19:15',
        isFixedTime: false,
        title: 'Tempo libero e trasferimento',
        subtitle: 'Pausa rilassante e avvicinamento al ristorante',
        category: 'walk',
        image: 'https://images.unsplash.com/photo-1787833537573-b60a73438252?auto=format&fit=crop&w=1080&q=80',
        description: 'Non aggiungiamo un giro obbligatorio di piazze e strade eleganti. Se abbiamo energie possiamo passeggiare ancora; altrimenti facciamo una pausa e ci avviciniamo al ristorante.',
        coordinates: { lat: 48.8735, lng: 2.3450 },
        address: 'Grands Boulevards, Paris',
        metroStop: 'Grands Boulevards (M8, M9) o Gare de l\'Est (M4, M5, M7)'
      },
      {
        id: 'stop-5-6',
        time: '20:00',
        isFixedTime: true,
        title: 'Jungle Palace (Cena speciale del viaggio)',
        subtitle: 'Ambiente scenografico immersivo ispirato alla giungla',
        category: 'food',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1080&q=80',
        description: 'La cena speciale del viaggio: ambiente scenografico ispirato alla giungla, per lasciare un ricordo diverso dai pasti semplici degli altri giorni. L\'indirizzo è 12 Rue de la Fidélité. Lasciamo tempo per raggiungerlo dal punto in cui terminiamo il pomeriggio. Dopo cena, eventuale ultimo brindisi analcolico in un locale comodo, se abbiamo voglia. Non serve un\'altra grande attività per completare la serata.',
        bookingUrl: 'https://www.ephemera-group.com/nos-restaurants/jungle-palace-paris',
        bookingLabel: 'Prenota Jungle Palace (20:00)',
        romanticTip: 'Festeggiate l\'ultima sera parigina con una cena indimenticabile immersi nei suoni e nei colori della foresta tropicale.',
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
    title: 'Salutare Montmartre e partire',
    tagline: 'Luce del giorno sulla collina e rotta su Orly',
    summary: 'Colazione con calma, check-out e deposito dei bagagli in hotel. Mattina a rivedere Montmartre alla luce del sole (Maison Rose, Sacré-Cœur o le botteghe) oppure una colazione lunga rilassata. Ore 11:30–12:00 spuntino e recupero bagagli. Ore 12:15–12:30 partenza con Metro 12 fino a Madeleine e Metro 14 diretta per l\'Aeroporto di Orly (arrivo intorno alle 14:00 per il volo Wizz Air delle 16:40).',
    colorTheme: 'from-slate-500/20 to-sky-500/20',
    badge: 'Arrivederci Parigi 🥐',
    rainPlan: 'Se piove forte: Colazione lunga, negozi vicini e recupero bagagli. Non attraversiamo Parigi per riempire le ultime ore.',
    stops: [
      {
        id: 'stop-6-1',
        time: '09:00 circa – Mattina',
        isFixedTime: false,
        title: 'Il quartiere alla luce del giorno',
        subtitle: 'Colazione con calma e gli scorci di Montmartre col sole',
        category: 'walk',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1080&q=80',
        description: 'Colazione con calma, check-out e deposito dei bagagli in hotel, se disponibile. Torniamo in uno o due posti che lunedì abbiamo visto al buio: la strada della Maison Rose, il panorama del Sacré-Cœur o le vie con negozi. In alternativa restiamo vicino all\'hotel, compriamo qualcosa di dolce e ci godiamo l\'ultima colazione lunga. Nessuna visita in centro da incastrare prima dell\'aereo.',
        romanticTip: 'Prendete un croissant caldo appena sfornato e godetevi gli ultimi istanti di Parigi insieme con la luce del mattino.',
        coordinates: { lat: 48.8879, lng: 2.3398 },
        address: 'Rue Caulaincourt / Rue de l\'Abreuvoir, 75018 Paris',
        metroStop: 'Lamarck - Caulaincourt (M12)'
      },
      {
        id: 'stop-6-2',
        time: '12:15 – 12:30 (Partenza)',
        isFixedTime: true,
        title: 'Recupero Bagagli & Partenza per Orly',
        subtitle: 'Metro 12 (fino a Madeleine) → Metro 14 (Aéroport d\'Orly)',
        category: 'travel',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1080&q=80',
        description: 'Ore 11:30–12:00 qualcosa da mangiare e recupero bagagli. Ore 12:15–12:30 partenza per Orly con il percorso previsto: Metro 12 fino a Madeleine → cambio con Metro 14 direzione Aéroport d\'Orly. Obiettivo: aeroporto intorno alle 14:00, verificando prima lavori sui mezzi, terminal e indicazioni della compagnia. Volo Wizz Air ore 16:40.',
        coordinates: { lat: 48.7262, lng: 2.3652 },
        address: 'Aéroport de Paris-Orly, 94390 Orly',
        alertNote: 'Obiettivo aeroporto: ore 14:00. Volo Wizz Air ore 16:40.',
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

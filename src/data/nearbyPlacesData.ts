export interface NearbyPlace {
  id: string;
  name: string;
  category: 'romantic' | 'food' | 'photo' | 'curiosity' | 'museum';
  neighborhood: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  address: string;
  description: string;
  tip?: string;
  metro: string;
}

export const NEARBY_PLACES: NearbyPlace[] = [
  // --- MONTMARTRE & PIGALLE ---
  {
    id: 'nb-montmartre-1',
    name: 'La Maison Rose',
    category: 'photo',
    neighborhood: 'Montmartre',
    coordinates: { lat: 48.8879, lng: 2.3398 },
    address: '2 Rue de l\'Abreuvoir, 75018 Paris',
    description: 'La celebre casetta rosa all\'angolo tra Rue de l\'Abreuvoir e Rue des Saules, dipinta da Maurice Utrillo.',
    tip: 'Scatto perfetto dall\'inizio della curva acciottolata di Rue de l\'Abreuvoir.',
    metro: 'Lamarck-Caulaincourt (M12)'
  },
  {
    id: 'nb-montmartre-fred',
    name: 'Aux Merveilleux de Fred (Montmartre)',
    category: 'food',
    neighborhood: 'Montmartre',
    coordinates: { lat: 48.8837, lng: 2.3338 },
    address: '2 Rue Lepic, 75018 Paris',
    description: 'Il tempio del cramique al cioccolato: brioche soffice calda sfornata a vista tempestata di gocce di cioccolato.',
    tip: 'Prendetene uno da dividere passeggiando tra le botteghe di Rue Lepic!',
    metro: 'Blanche (M2) o Abbesses (M12)'
  },
  {
    id: 'nb-montmartre-2',
    name: 'Vigna di Montmartre (Clos Montmartre)',
    category: 'curiosity',
    neighborhood: 'Montmartre',
    coordinates: { lat: 48.8876, lng: 2.3406 },
    address: '14-18 Rue des Saules, 75018 Paris',
    description: 'L\'unico vigneto superstite sulla collina di Montmartre, segreto e silenzioso.',
    tip: 'Si trova proprio di fronte al cabaret storico Au Lapin Agile.',
    metro: 'Lamarck-Caulaincourt (M12)'
  },
  {
    id: 'nb-montmartre-3',
    name: 'Place Dalida & Busto di Bronzo',
    category: 'romantic',
    neighborhood: 'Montmartre',
    coordinates: { lat: 48.8887, lng: 2.3377 },
    address: 'Place Dalida, 75018 Paris',
    description: 'Una piazzetta romantica e appartata con il busto della cantante Dalida e vista mozzafiato su Rue de l\'Abreuvoir.',
    tip: 'La tradizione locale dice che toccare il busto porta fortuna in amore!',
    metro: 'Lamarck-Caulaincourt (M12)'
  },
  {
    id: 'nb-montmartre-4',
    name: 'Bouillon Pigalle',
    category: 'food',
    neighborhood: 'Montmartre',
    coordinates: { lat: 48.8826, lng: 2.3372 },
    address: '22 Bd de Clichy, 75018 Paris',
    description: 'Il bouillon più trendy e amato di Parigi: piatti tradizionali francesi serviti velocemente a prezzi imbattibili (12-15€ a testa). Ottimi sciroppi e bevande analcoliche.',
    tip: 'Ottima zuppa di cipolle e profiterole gigante!',
    metro: 'Pigalle (M2, M12)'
  },
  {
    id: 'nb-montmartre-5',
    name: 'Moulin Rouge (Vista Esterna)',
    category: 'photo',
    neighborhood: 'Montmartre',
    coordinates: { lat: 48.8841, lng: 2.3323 },
    address: '82 Bd de Clichy, 75018 Paris',
    description: 'Il cabaret più famoso del mondo con le sue iconiche pale rosse al neon che illuminano il viale.',
    tip: 'Scattate la foto dal marciapiede opposto con le luci serali accese.',
    metro: 'Blanche (M2)'
  },

  // --- LE MARAIS & JAZZ CHÂTELET ---
  {
    id: 'nb-marais-fred',
    name: 'Aux Merveilleux de Fred (Marais)',
    category: 'food',
    neighborhood: 'Le Marais',
    coordinates: { lat: 48.8550, lng: 2.3551 },
    address: '24 Rue du Pont Louis-Philippe, 75004 Paris',
    description: 'Boutique raffinata subito dopo Île Saint-Louis. Famosa per i cramique al cioccolato e i dolci merveilleux (meringa e panna).',
    tip: 'Tappa perfetta per il secondo cramique del viaggio mercoledì pomeriggio!',
    metro: 'Pont Marie (M7)'
  },
  {
    id: 'nb-marais-1',
    name: 'Place des Vosges',
    category: 'romantic',
    neighborhood: 'Le Marais',
    coordinates: { lat: 48.8555, lng: 2.3656 },
    address: 'Place des Vosges, 75004 Paris',
    description: 'La piazza residenziale più antica di Parigi (1605), circondata da 36 palazzi nobiliari perfettamente simmetrici con porticati.',
    tip: 'Passeggiate sotto i portici e cercate la casa in cui visse Victor Hugo.',
    metro: 'Saint-Paul (M1) o Bastille (M1, M5, M8)'
  },
  {
    id: 'nb-marais-2',
    name: 'L\'As du Fallafel (Rue des Rosiers)',
    category: 'food',
    neighborhood: 'Le Marais',
    coordinates: { lat: 48.8576, lng: 2.3592 },
    address: '34 Rue des Rosiers, 75004 Paris',
    description: 'Il falafel più celebre d\'Europa: pita calda ripiena di falafel croccanti, melanzane e salsa tahina a prezzi convenienti.',
    tip: 'Prendetelo da asporto alla cassa esterna per evitare le attese.',
    metro: 'Saint-Paul (M1)'
  },
  {
    id: 'nb-jazz-duc',
    name: 'Le Duc des Lombards (Jazz Club con posti a sedere)',
    category: 'romantic',
    neighborhood: 'Châtelet & Pont Neuf',
    coordinates: { lat: 48.8598, lng: 2.3486 },
    address: '42 Rue des Lombards, 75001 Paris',
    description: 'Il tempio del jazz parigino: club elegante e raccolto dove ascoltare musica dal vivo comodamente seduti al tavolo, con ottima acustica e servizio bar analcolico (mocktails d\'autore, tisane e succhi artigianali). A soli 6 min a piedi da Pont Neuf!',
    tip: 'Consigliata la prenotazione del tavolo per il concerto delle 20:00 o delle 22:00.',
    metro: 'Châtelet (M1, M4, M7, M11, M14)'
  },
  {
    id: 'nb-jazz-sunset',
    name: 'Sunset / Sunside Jazz Club',
    category: 'romantic',
    neighborhood: 'Châtelet & Pont Neuf',
    coordinates: { lat: 48.8601, lng: 2.3482 },
    address: '60 Rue des Lombards, 75001 Paris',
    description: 'Storico jazz club con due sale intime con posti a sedere (Sunside al piano terra e Sunset nella suggestiva cantina a volta). Posti al tavolo e ottima atmosfera.',
    tip: 'Sulla leggendaria Rue des Lombards, la via del jazz di Parigi.',
    metro: 'Châtelet (M1, M4, M7, M11, M14)'
  },

  // --- ÎLE DE LA CITÉ & SENNA ---
  {
    id: 'nb-cite-1',
    name: 'Place Dauphine (Piazza Romantica Segreta)',
    category: 'romantic',
    neighborhood: 'Centro & Senna',
    coordinates: { lat: 48.8566, lng: 2.3427 },
    address: 'Place Dauphine, 75001 Paris',
    description: 'Nascosta sulla punta dell\'Île de la Cité dietro il Palais de Justice. Piazza triangolare alberata e silenziosa, tra le più romantiche di Francia.',
    tip: 'A due passi dall\'imbarco della crociera al Pont Neuf.',
    metro: 'Pont Neuf (M7)'
  },
  {
    id: 'nb-cite-2',
    name: 'Square du Vert-Galant (Punta dell\'Isola)',
    category: 'romantic',
    neighborhood: 'Centro & Senna',
    coordinates: { lat: 48.8574, lng: 2.3400 },
    address: 'Square du Vert-Galant, Pont Neuf, 75001 Paris',
    description: 'Il giardino a forma di prua di nave all\'estremità dell\'Île de la Cité, proprio sotto il Pont Neuf da cui partono i battelli.',
    tip: 'Vista incantevole sulla Senna al tramonto.',
    metro: 'Pont Neuf (M7)'
  },
  {
    id: 'nb-cite-bistro-augustins',
    name: 'Le Bistro des Augustins (Pranzo Caldo)',
    category: 'food',
    neighborhood: 'Centro & Senna',
    coordinates: { lat: 48.8538, lng: 2.3435 },
    address: '39 Quai des Grands Augustins, 75006 Paris',
    description: 'Bistrot caloroso affacciato sulla Senna, celebre per i sontuosi gratin al formaggio caldi serviti in cocotte (comfort food a 12-14€) e accoglienza super.',
    tip: 'Ideale per il pranzo del mercoledì dopo Notre-Dame.',
    metro: 'Saint-Michel (M4)'
  },

  // --- TUILERIES, CONCORDE & ORANGERIE ---
  {
    id: 'nb-orangerie-art',
    name: 'Musée de l\'Orangerie (Le Ninfee di Monet)',
    category: 'museum',
    neighborhood: 'Concorde & Tuileries',
    coordinates: { lat: 48.8638, lng: 2.3227 },
    address: 'Jardin des Tuileries (lato Concorde), 75001 Paris',
    description: 'Le due celebri sale ovali illuminate da luce naturale che ospitano gli 8 grandiosi pannelli delle Ninfee di Claude Monet. Gratuito Under 26 UE!',
    tip: 'L\'esperienza artistica più intima e poetica di Parigi.',
    metro: 'Concorde (M1, M8, M12)'
  },
  {
    id: 'nb-champs-marche',
    name: 'Mercatino di Natale degli Champs-Élysées',
    category: 'food',
    neighborhood: 'Champs-Élysées',
    coordinates: { lat: 48.8675, lng: 2.3135 },
    address: 'Avenue des Champs-Élysées, 75008 Paris',
    description: 'Il maestoso mercatino natalizio nella parte bassa del viale, dal Rond-Point a Place de la Concorde: chalet in legno, vin chaud, raclette e dolci.',
    tip: 'Perfetto per cenare passeggiando tra le luminarie giovedì sera.',
    metro: 'Champs-Élysées - Clemenceau (M1, M13) o Concorde'
  },
  {
    id: 'nb-avenue-montaigne',
    name: 'Avenue Montaigne (Vetrine Alta Moda)',
    category: 'photo',
    neighborhood: 'Champs-Élysées',
    coordinates: { lat: 48.8661, lng: 2.3075 },
    address: 'Avenue Montaigne, 75008 Paris',
    description: 'Il viale parigino del lusso che a Natale diventa un bosco incantato con abeti illuminati e facciate scintillanti (Dior, Plaza Athénée).',
    tip: 'La facciata della Maison Dior è un\'opera d\'arte natalizia da fotografare.',
    metro: 'Alma - Marceau (M9)'
  },

  // --- TOUR EIFFEL & TROCADÉRO ---
  {
    id: 'nb-trocadero-carette',
    name: 'Carette Trocadéro (Cioccolata & Dolci)',
    category: 'food',
    neighborhood: 'Tour Eiffel & Trocadéro',
    coordinates: { lat: 48.8632, lng: 2.2872 },
    address: '4 Place du Trocadéro, 75016 Paris',
    description: 'Pasticceria parigina storica sulla piazza del Trocadéro. Famosa per la cioccolata calda densa con ciotola di panna chantilly fresca.',
    tip: 'Ideale per scaldarsi dopo aver ammirato lo scintillio della Torre al freddo!',
    metro: 'Trocadéro (M6, M9)'
  },
  {
    id: 'nb-eiffel-pont-iena',
    name: 'Pont d\'Iéna & Banchina Senna',
    category: 'photo',
    neighborhood: 'Tour Eiffel & Trocadéro',
    coordinates: { lat: 48.8598, lng: 2.2932 },
    address: 'Pont d\'Iéna, 75007 Paris',
    description: 'Il ponte che collega i giardini del Trocadéro ai piedi della Torre Eiffel, con vista grandangolare dal basso verso l\'alto.',
    tip: 'Passeggiate sul marciapiede pedonale per foto panoramiche senza salire sulla torre.',
    metro: 'Bir-Hakeim (M6) o Iéna (M9)'
  },

  // --- LOUVRE, OPÉRA & JUNGLE PALACE ---
  {
    id: 'nb-opera-printemps',
    name: 'Printemps Haussmann & Galeries Lafayette',
    category: 'romantic',
    neighborhood: 'Opéra & Grandi Magazzini',
    coordinates: { lat: 48.8738, lng: 2.3283 },
    address: '64 Bd Haussmann, 75009 Paris',
    description: 'Le vetrine animate meccaniche di Printemps e la cupola con l\'albero gigante delle Galeries Lafayette: la massima espressione del Natale parigino.',
    tip: 'La terrazza al 7° piano è aperta e gratuita se il meteo è favorevole.',
    metro: 'Havre - Caumartin (M3, M9) o Chaussée d\'Antin (M7, M9)'
  },
  {
    id: 'nb-jungle-palace',
    name: 'Jungle Palace (Ephemera)',
    category: 'food',
    neighborhood: 'Grands Boulevards & 10°',
    coordinates: { lat: 48.8757, lng: 2.3571 },
    address: '12 Rue de la Fidélité, 75010 Paris',
    description: 'Ristorante immersivo spettacolare con video mapping a 360°, suoni della foresta equatoriale e deliziosa cucina con ottimi mocktail analcolici.',
    tip: 'La prenotazione per venerdì 11 alle 20:00 è il gran finale scenografico del viaggio!',
    metro: 'Gare de l\'Est (M4, M5, M7) o Château d\'Eau (M4)'
  },

  // --- SAINT-GERMAIN & PIANO PIOGGIA ---
  {
    id: 'nb-bon-marche',
    name: 'Le Bon Marché Rive Gauche',
    category: 'romantic',
    neighborhood: 'Saint-Germain',
    coordinates: { lat: 48.8509, lng: 2.3256 },
    address: '24 Rue de Sèvres, 75007 Paris',
    description: 'Il tempio dell\'eleganza sulla Rive Gauche. A Natale le scale mobili centrali e i soffitti si riempiono di installazioni luminose poetiche al coperto.',
    tip: 'Piano perfetto per giovedì pomeriggio in caso di pioggia battente.',
    metro: 'Sèvres - Babylone (M10, M12)'
  },
  {
    id: 'nb-orsay-antiquaires',
    name: 'Les Antiquaires (Bistrot vicino a Orsay)',
    category: 'food',
    neighborhood: 'Saint-Germain & Orsay',
    coordinates: { lat: 48.8577, lng: 2.3298 },
    address: '36 Rue du Bac, 75007 Paris',
    description: 'Autentico bistrot parigino a 3 minuti a piedi dal Musée d\'Orsay: velluti rossi, piatti caldi del giorno e atmosfera intima e raccolta.',
    tip: 'Ottima sosta pranzo giovedì tra Orsay e la Torre.',
    metro: 'Rue du Bac (M12)'
  }
];

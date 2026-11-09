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
    description: 'La celebre casetta rosa all\'angolo tra Rue de l\'Abreuvoir e Rue des Saules, dipinta da Utrillo.',
    tip: 'Scatto perfetto dall\'inizio di Rue de l\'Abreuvoir.',
    metro: 'Lamarck-Caulaincourt (M12)'
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
    description: 'Il bouillon più trendy e amato di Parigi: piatti tradizionali francesi serviti velocemente a prezzi imbattibili.',
    tip: 'Ottima zuppa di cipolle e profiterole gigante!',
    metro: 'Pigalle (M2, M12)'
  },
  {
    id: 'nb-montmartre-5',
    name: 'Moulin Rouge (Vista Esterna & Brindisi)',
    category: 'photo',
    neighborhood: 'Montmartre',
    coordinates: { lat: 48.8841, lng: 2.3323 },
    address: '82 Bd de Clichy, 75018 Paris',
    description: 'Il cabaret più famoso del mondo con le sue pale rosse al neon che illuminano il viale.',
    tip: 'Scattate la foto dal marciapiede opposto con le auto che passano.',
    metro: 'Blanche (M2)'
  },

  // --- LE MARAIS & HOTEL DE VILLE ---
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
    description: 'Il falafel più celebre d\'Europa: pita ripiena di falafel croccanti, melanzane fritte e salsa tahina indimenticabile.',
    tip: 'Prendetelo da asporto alla cassa esterna per evitare la fila al tavolo.',
    metro: 'Saint-Paul (M1)'
  },
  {
    id: 'nb-marais-3',
    name: 'Carette a Place des Vosges',
    category: 'food',
    neighborhood: 'Le Marais',
    coordinates: { lat: 48.8558, lng: 2.3662 },
    address: '25 Place des Vosges, 75004 Paris',
    description: 'Famosissimo per la cioccolata calda più densa e ricca di Parigi, servita con una ciotola di panna montata freschissima.',
    tip: 'Perfetto per una merenda speciale dopo aver camminato al freddo!',
    metro: 'Saint-Paul (M1)'
  },
  {
    id: 'nb-marais-4',
    name: 'Hôtel de Sully (Cortile Segreto)',
    category: 'curiosity',
    neighborhood: 'Le Marais',
    coordinates: { lat: 48.8549, lng: 2.3638 },
    address: '62 Rue Saint-Antoine, 75004 Paris',
    description: 'Magnifico palazzo rinascimentale con un cortile interno segreto che permette di sbucare direttamente in Place des Vosges da una porticina!',
    tip: 'Un passaggio romantico poco conosciuto dai turisti.',
    metro: 'Saint-Paul (M1)'
  },
  {
    id: 'nb-marais-5',
    name: 'Villaggio Saint-Paul (Cour des Artisans)',
    category: 'romantic',
    neighborhood: 'Le Marais',
    coordinates: { lat: 48.8533, lng: 2.3615 },
    address: 'Rue Saint-Paul, 75004 Paris',
    description: 'Labirinto silenzioso di cortili collegati tra loro, con atelier di antiquari, gallerie d\'arte e fiori.',
    tip: 'Un\'oasi di pace lontana dal traffico.',
    metro: 'Pont Marie (M7) o Saint-Paul (M1)'
  },

  // --- ÎLE DE LA CITÉ & SENNA ---
  {
    id: 'nb-cite-1',
    name: 'Place Dauphine (Piazza Romantica Segreta)',
    category: 'romantic',
    neighborhood: 'Centro & Senna',
    coordinates: { lat: 48.8566, lng: 2.3427 },
    address: 'Place Dauphine, 75001 Paris',
    description: 'Nascosta sulla punta dell\'Île de la Cité dietro il Palais de Justice. Piazza triangolare alberata e silenziosa, considerata tra le più romantiche di Francia.',
    tip: 'Ottimo posto per sedersi su una panchina lontano dal caos del turismo di massa.',
    metro: 'Pont Neuf (M7)'
  },
  {
    id: 'nb-cite-2',
    name: 'Square du Vert-Galant (Punta dell\'Isola)',
    category: 'romantic',
    neighborhood: 'Centro & Senna',
    coordinates: { lat: 48.8574, lng: 2.3400 },
    address: 'Square du Vert-Galant, 75001 Paris',
    description: 'Il giardino a forma di prua di nave all\'estremità dell\'Île de la Cité, proprio sotto il Pont Neuf.',
    tip: 'Da qui partono i battelli della crociera e la vista sui ponti e sul Louvre al tramonto è unica.',
    metro: 'Pont Neuf (M7)'
  },
  {
    id: 'nb-cite-3',
    name: 'Pont des Arts (Ponte Pedonale)',
    category: 'photo',
    neighborhood: 'Centro & Senna',
    coordinates: { lat: 48.8583, lng: 2.3375 },
    address: 'Pont des Arts, 75006 Paris',
    description: 'Il celebre ponte in legno e ferro pedonale che collega l\'Institut de France al Louvre.',
    tip: 'Uno dei migliori punti panoramici sulla Senna per foto di coppia.',
    metro: 'Louvre-Rivoli (M1) o Pont Neuf (M7)'
  },
  {
    id: 'nb-cite-4',
    name: 'Libreria Shakespeare and Company',
    category: 'curiosity',
    neighborhood: 'Centro & Senna',
    coordinates: { lat: 48.8526, lng: 2.3471 },
    address: '37 Rue de la Bûcherie, 75005 Paris',
    description: 'La leggendaria libreria anglofona frequentata da Hemingway e Fitzgerald, proprio di fronte a Notre-Dame.',
    tip: 'Salite al primo piano dove c\'è il pianoforte e la vista sulla cattedrale.',
    metro: 'Saint-Michel (M4)'
  },

  // --- SAINT-GERMAIN & QUARTIERE LATINO ---
  {
    id: 'nb-stgermain-1',
    name: 'Rue de Buci (La Via Gastronomica)',
    category: 'food',
    neighborhood: 'Saint-Germain & Quartiere Latino',
    coordinates: { lat: 48.8534, lng: 2.3364 },
    address: 'Rue de Buci, 75006 Paris',
    description: 'La via pedonale più vivace di Saint-Germain con café, forni, fiorai e bistrot con tavolini all\'aperto.',
    tip: 'Perfetta per passeggiare e scegliere dove fermarsi a mangiare o prendere un dolce.',
    metro: 'Mabillon (M10) o Odéon (M4/M10)'
  },
  {
    id: 'nb-stgermain-2',
    name: 'Café de Flore & Les Deux Magots',
    category: 'food',
    neighborhood: 'Saint-Germain & Quartiere Latino',
    coordinates: { lat: 48.8542, lng: 2.3326 },
    address: '172 Bd Saint-Germain, 75006 Paris',
    description: 'I due caffè letterari più storici di Francia, ritrovo di Sartre, Simone de Beauvoir e Picasso.',
    tip: 'Prendere un espresso o un cioccolato al banco o ai tavolini storici.',
    metro: 'Saint-Germain-des-Prés (M4)'
  },
  {
    id: 'nb-stgermain-3',
    name: 'Place Saint-Sulpice & Fontana dei Quattro Vescovi',
    category: 'curiosity',
    neighborhood: 'Saint-Germain & Quartiere Latino',
    coordinates: { lat: 48.8509, lng: 2.3340 },
    address: 'Place Saint-Sulpice, 75006 Paris',
    description: 'La grande chiesa di Saint-Sulpice resa celebre anche da Il Codice Da Vinci per la meridiana astronomica (Gnomone).',
    tip: 'L\'interno della chiesa ospita due capolavori dipinti da Eugène Delacroix.',
    metro: 'Saint-Sulpice (M4)'
  },
  {
    id: 'nb-stgermain-4',
    name: 'Caveau de la Huchette',
    category: 'romantic',
    neighborhood: 'Saint-Germain & Quartiere Latino',
    coordinates: { lat: 48.8529, lng: 2.3458 },
    address: '5 Rue de la Huchette, 75005 Paris',
    description: 'Storico jazz club sotterraneo del Quartiere Latino (comparso anche nel film La La Land).',
    tip: 'Musica jazz e swing dal vivo in un\'antica cantina medievale.',
    metro: 'Saint-Michel (M4)'
  },

  // --- TOUR EIFFEL & TROCADÉRO ---
  {
    id: 'nb-eiffel-1',
    name: 'Ponte Alessandro III (Pont Alexandre III)',
    category: 'romantic',
    neighborhood: 'Tour Eiffel & Ovest',
    coordinates: { lat: 48.8638, lng: 2.3136 },
    address: 'Pont Alexandre III, 75008 Paris',
    description: 'Il ponte più sontuoso e scenografico di Parigi, in stile Beaux-Arts con candelabri dorati, ninfe e cavalli alati.',
    tip: 'Lo scorcio con la Torre Eiffel sullo sfondo al tramonto è una cartolina pura.',
    metro: 'Invalides (M8, M13) o Champs-Élysées-Clemenceau (M1)'
  },
  {
    id: 'nb-eiffel-2',
    name: 'Passerella Debilly (Vista Torre Eiffel Senza Folla)',
    category: 'photo',
    neighborhood: 'Tour Eiffel & Ovest',
    coordinates: { lat: 48.8617, lng: 2.2968 },
    address: 'Passerelle Debilly, 75007 Paris',
    description: 'Passerella pedonale in ferro sulla Senna a pochi passi dalla Torre Eiffel, molto meno affollata del Pont d\'Iéna.',
    tip: 'Perfetta per fare foto insieme alla Torre senza persone che vi urtano.',
    metro: 'Alma-Marceau (M9) o Iéna (M9)'
  },
  {
    id: 'nb-eiffel-3',
    name: 'Rue Saint-Dominique (Scorcio Torre tra i Bistrot)',
    category: 'photo',
    neighborhood: 'Tour Eiffel & Ovest',
    coordinates: { lat: 48.8587, lng: 2.3082 },
    address: 'Rue Saint-Dominique, 75007 Paris',
    description: 'La via tipica parigina da cui la Torre Eiffel spunta maestosa tra le facciate ottocentesche dei palazzi.',
    tip: 'Scattate la foto all\'incrocio con Rue de l\'Exposition!',
    metro: 'La Tour-Maubourg (M8)'
  },

  // --- LOUVRE, OPÉRA & GRANDI MAGAZZINI ---
  {
    id: 'nb-opera-1',
    name: 'Palais Royal & Colonne di Buren',
    category: 'photo',
    neighborhood: 'Opéra & Grandi Magazzini',
    coordinates: { lat: 48.8637, lng: 2.3371 },
    address: '8 Rue de Montpensier, 75001 Paris',
    description: 'Il cortile d\'onore del Palais Royal con le famose colonne a strisce bianche e nere di diverse altezze e i giardini silenziosi.',
    tip: 'Divertitevi a salire sulle colonne per foto creative!',
    metro: 'Palais Royal - Musée du Louvre (M1/M7)'
  },
  {
    id: 'nb-opera-2',
    name: 'Galeries Lafayette (Terrazza Panoramica Gratuita)',
    category: 'romantic',
    neighborhood: 'Opéra & Grandi Magazzini',
    coordinates: { lat: 48.8737, lng: 2.3321 },
    address: '40 Bd Haussmann, 75009 Paris',
    description: 'Salite al 7° piano del grande magazzino per accedere alla terrazza panoramica all\'aperto con vista su Opéra e Torre Eiffel.',
    tip: 'Accesso completamente gratuito, non serve consumare nulla!',
    metro: 'Chaussée d\'Antin - La Fayette (M7/M9)'
  },
  {
    id: 'nb-opera-3',
    name: 'Place Vendôme (I Gioiellieri & Gli Alberi di Natale)',
    category: 'romantic',
    neighborhood: 'Opéra & Grandi Magazzini',
    coordinates: { lat: 48.8675, lng: 2.3294 },
    address: 'Place Vendôme, 75001 Paris',
    description: 'La piazza dell\'alta gioielleria e dell\'Hotel Ritz, dominata dalla colonna bronzea e decorata a dicembre con maestosi pini di Natale illuminati.',
    tip: 'Un\'atmosfera elegante e magica soprattutto dopo le 17:30.',
    metro: 'Tuileries (M1) o Madeleine (M8/M12/M14)'
  },
  {
    id: 'nb-opera-4',
    name: 'Cédric Grolet Opéra (Alta Pasticceria)',
    category: 'food',
    neighborhood: 'Opéra & Grandi Magazzini',
    coordinates: { lat: 48.8687, lng: 2.3341 },
    address: '35 Av. de l\'Opéra, 75002 Paris',
    description: 'La pasticceria-boutique del pasticciere più virale e famoso del pianeta, noto per i dolci trompe-l\'œil a forma di frutta e croissant giganti.',
    tip: 'Spesso c\'è fila, ma anche solo vedere le creazioni in vetrina è uno spettacolo.',
    metro: 'Pyramides (M7/M14) o Opéra (M3/M7/M8)'
  }
];

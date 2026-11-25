import { DayPlan, RestaurantCard } from '../types/travel';

export const ITINERARY_DAYS: DayPlan[] = [
  {
    "date": "2026-12-07",
    "dayNumber": 1,
    "title": "Arrivo a Montmartre",
    "subtitle": "Lunedì 7 Dicembre · Giorno 1",
    "transport": "A01 verso Porte Maillot (fermata effettiva sul voucher); metro 1 direzione Château de Vincennes fino a Concorde, metro 12 Mairie d’Aubervilliers fino a Jules Joffrin.",
    "rain": {
      "light": "Accorciare la camminata, basilica e cena",
      "heavy": "Basilica se raggiungibile, cena al chiuso; recuperare Montmartre sabato"
    },
    "foodIdeas": [
      "Bouillon Pigalle: 35–48 € in due; zuppa cipolle, bourguignon, crème brûlée",
      "Le Relais Gascon: 40–65 € in due",
      "Le Ruisseau: 30–45 € in due, hamburger"
    ],
    "activities": [
      {
        "id": "d1-1",
        "dayDate": "2026-12-07",
        "time": "12:50",
        "timeStatus": "user_confirmed",
        "durationMinutes": 60,
        "name": "Aéroport Beauvais",
        "address": "Aéroport Paris Beauvais, Tillé",
        "coordinates": {
          "lat": 49.44998,
          "lon": 2.085932
        },
        "description": "Atterraggio; controlli e bagagli.",
        "shortHistory": "Scalo internazionale a nord di Parigi (Tillé), collegato alla capitale tramite navetta Aérobus.",
        "curiosities": [
          "Dista circa 85 km dal centro di Parigi; calcolare almeno 1h15–1h30 di navetta."
        ],
        "whatToSee": [
          "Controllo passaporti/documenti",
          "Ritiro bagagli",
          "Uscita verso la pensilina Aérobus A01"
        ],
        "photoSpot": "Segnaletica Aérobus all'uscita del terminal.",
        "entryAndPrice": "Volo già prenotato (coppia)",
        "priceStatus": "user_confirmed",
        "hoursForDate": "Atterraggio 12:50 (riferito dalla coppia)",
        "hoursStatus": "verified",
        "officialUrl": "https://www.aeroportparisbeauvais.com/",
        "category": "trasporto",
        "weather": "mixed",
        "status": "confirmed",
        "priority": "alta",
        "nearby": [
          {
            "id": "d1-1-nb-1",
            "name": "Villa Léandre",
            "address": "Villa Léandre, Paris",
            "coordinates": {
              "lat": 48.888285,
              "lon": 2.334881
            },
            "distanceMeters": 65027,
            "distanceLabel": "65.0 km (~929 min)",
            "description": "Vicolo romantico con casette in stile inglese anni '20.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Paris%2C_France%2C_villa_Leandre_Rue_%285%29.jpg/960px-Paris%2C_France%2C_villa_Leandre_Rue_%285%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/villa-leandre.jpg",
              "author": "Britchi Mirela",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris,_France,_villa_Leandre_Rue_(5).jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Villa%20L%C3%A9andre%20Villa%20L%C3%A9andre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.888285%2C2.334881&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.888285%2C2.334881&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.888285,2.334881&endname=Villa%20L%C3%A9andre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d1-1-nb-3",
            "name": "Musée de Montmartre",
            "address": "12 Rue Cortot, Paris",
            "coordinates": {
              "lat": 48.887704,
              "lon": 2.340626
            },
            "distanceMeters": 65207,
            "distanceLabel": "65.2 km (~932 min)",
            "description": "Antico atelier di Renoir con giardini affacciati sui vigneti.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg/960px-Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/musee-de-montmartre.jpg",
              "author": "Kathleen Tyler Conklin",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_de_Montmartre_2,_Paris_July_13,_2006.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20de%20Montmartre%2012%20Rue%20Cortot%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887704,2.340626&endname=Mus%C3%A9e%20de%20Montmartre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d1-1-nb-2",
            "name": "Place du Tertre",
            "address": "Place du Tertre, Paris",
            "coordinates": {
              "lat": 48.886518,
              "lon": 2.340671
            },
            "distanceMeters": 65334,
            "distanceLabel": "65.3 km (~933 min)",
            "description": "La celebre piazza dei pittori e ritrattisti di Montmartre.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Butte_Montmartre%2C_Place_du_Tertre%2C_Paris.jpg/960px-Butte_Montmartre%2C_Place_du_Tertre%2C_Paris.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/place-du-tertre.jpg",
              "author": "Britchi Mirela",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Butte_Montmartre,_Place_du_Tertre,_Paris.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Place%20du%20Tertre%20Place%20du%20Tertre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.886518%2C2.340671&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.886518%2C2.340671&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.886518,2.340671&endname=Place%20du%20Tertre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=A%C3%A9roport%20Beauvais%20A%C3%A9roport%20Paris%20Beauvais%2C%20Till%C3%A9",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=49.44998%2C2.085932&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=49.44998%2C2.085932&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=49.44998,2.085932&endname=A%C3%A9roport%20Beauvais",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d1-2",
        "dayDate": "2026-12-07",
        "time": "15:00",
        "timeStatus": "user_confirmed",
        "durationMinutes": 90,
        "name": "Aérobus A01",
        "address": "Aéroport Paris Beauvais, Tillé",
        "coordinates": {
          "lat": 48.878827,
          "lon": 2.283217
        },
        "description": "Navetta prenotata verso Porte Maillot; chiedere se possibile anticipare, non garantito.",
        "shortHistory": "Collegamento diretto ufficiale tra l'aeroporto di Beauvais e Parigi Porte Maillot.",
        "curiosities": [
          "Porte Maillot è collegata direttamente alla Metro 1 (gialla)."
        ],
        "whatToSee": [
          "Verifica fermata effettiva sul voucher",
          "Chiedere eventuale anticipo corsa se disponibile"
        ],
        "photoSpot": "Arrivo a Porte Maillot.",
        "entryAndPrice": "Navetta già prenotata",
        "priceStatus": "user_confirmed",
        "hoursForDate": "Corsa 15:00 (anticipo non garantito)",
        "hoursStatus": "verified",
        "officialUrl": "https://www.aeroportparisbeauvais.com/",
        "category": "trasporto",
        "weather": "indoor",
        "status": "confirmed",
        "priority": "alta",
        "nearby": [
          {
            "id": "d1-2-nb-1",
            "name": "Villa Léandre",
            "address": "Villa Léandre, Paris",
            "coordinates": {
              "lat": 48.888285,
              "lon": 2.334881
            },
            "distanceMeters": 3921,
            "distanceLabel": "3.9 km (~56 min)",
            "description": "Vicolo romantico con casette in stile inglese anni '20.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Paris%2C_France%2C_villa_Leandre_Rue_%285%29.jpg/960px-Paris%2C_France%2C_villa_Leandre_Rue_%285%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/villa-leandre.jpg",
              "author": "Britchi Mirela",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris,_France,_villa_Leandre_Rue_(5).jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Villa%20L%C3%A9andre%20Villa%20L%C3%A9andre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.888285%2C2.334881&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.888285%2C2.334881&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.888285,2.334881&endname=Villa%20L%C3%A9andre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d1-2-nb-2",
            "name": "Place du Tertre",
            "address": "Place du Tertre, Paris",
            "coordinates": {
              "lat": 48.886518,
              "lon": 2.340671
            },
            "distanceMeters": 4287,
            "distanceLabel": "4.3 km (~61 min)",
            "description": "La celebre piazza dei pittori e ritrattisti di Montmartre.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Butte_Montmartre%2C_Place_du_Tertre%2C_Paris.jpg/960px-Butte_Montmartre%2C_Place_du_Tertre%2C_Paris.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/place-du-tertre.jpg",
              "author": "Britchi Mirela",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Butte_Montmartre,_Place_du_Tertre,_Paris.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Place%20du%20Tertre%20Place%20du%20Tertre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.886518%2C2.340671&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.886518%2C2.340671&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.886518,2.340671&endname=Place%20du%20Tertre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d1-2-nb-3",
            "name": "Musée de Montmartre",
            "address": "12 Rue Cortot, Paris",
            "coordinates": {
              "lat": 48.887704,
              "lon": 2.340626
            },
            "distanceMeters": 4312,
            "distanceLabel": "4.3 km (~62 min)",
            "description": "Antico atelier di Renoir con giardini affacciati sui vigneti.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg/960px-Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/musee-de-montmartre.jpg",
              "author": "Kathleen Tyler Conklin",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_de_Montmartre_2,_Paris_July_13,_2006.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20de%20Montmartre%2012%20Rue%20Cortot%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887704,2.340626&endname=Mus%C3%A9e%20de%20Montmartre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=A%C3%A9robus%20A01%20A%C3%A9roport%20Paris%20Beauvais%2C%20Till%C3%A9",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.878827%2C2.283217&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.878827%2C2.283217&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.878827,2.283217&endname=A%C3%A9robus%20A01",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d1-3",
        "dayDate": "2026-12-07",
        "time": "17:15",
        "timeStatus": "indicative",
        "durationMinutes": 30,
        "name": "Hôtel Jardins de Montmartre",
        "address": "131 Rue Ordener, Paris",
        "coordinates": {
          "lat": 48.89288,
          "lon": 2.34107
        },
        "description": "Check-in; arrivo stimato 17–18, non contare sul tramonto.",
        "shortHistory": "Base del soggiorno nel 18° arrondissement, in Rue Ordener a pochi passi da Jules Joffrin (Metro 12).",
        "curiosities": [
          "La Metro 12 collega direttamente Jules Joffrin a Saint-Lazare, Concorde e Madeleine."
        ],
        "whatToSee": [
          "Check-in",
          "Deposito bagagli e verifica orario check-out per sabato 12/12"
        ],
        "photoSpot": "Via tipica parigina su Rue Ordener.",
        "entryAndPrice": "Soggiorno già prenotato (verificare eventuale tassa di soggiorno)",
        "priceStatus": "user_confirmed",
        "hoursForDate": "Check-in stimato 17:15–18:00",
        "hoursStatus": "to_verify",
        "officialUrl": null,
        "category": "hotel",
        "weather": "indoor",
        "status": "planned",
        "priority": "alta",
        "nearby": [
          {
            "id": "d1-3-nb-3",
            "name": "Musée de Montmartre",
            "address": "12 Rue Cortot, Paris",
            "coordinates": {
              "lat": 48.887704,
              "lon": 2.340626
            },
            "distanceMeters": 576,
            "distanceLabel": "576 m (~8 min)",
            "description": "Antico atelier di Renoir con giardini affacciati sui vigneti.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg/960px-Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/musee-de-montmartre.jpg",
              "author": "Kathleen Tyler Conklin",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_de_Montmartre_2,_Paris_July_13,_2006.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20de%20Montmartre%2012%20Rue%20Cortot%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887704,2.340626&endname=Mus%C3%A9e%20de%20Montmartre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d1-3-nb-1",
            "name": "Villa Léandre",
            "address": "Villa Léandre, Paris",
            "coordinates": {
              "lat": 48.888285,
              "lon": 2.334881
            },
            "distanceMeters": 682,
            "distanceLabel": "682 m (~10 min)",
            "description": "Vicolo romantico con casette in stile inglese anni '20.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Paris%2C_France%2C_villa_Leandre_Rue_%285%29.jpg/960px-Paris%2C_France%2C_villa_Leandre_Rue_%285%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/villa-leandre.jpg",
              "author": "Britchi Mirela",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris,_France,_villa_Leandre_Rue_(5).jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Villa%20L%C3%A9andre%20Villa%20L%C3%A9andre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.888285%2C2.334881&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.888285%2C2.334881&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.888285,2.334881&endname=Villa%20L%C3%A9andre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d1-3-nb-2",
            "name": "Place du Tertre",
            "address": "Place du Tertre, Paris",
            "coordinates": {
              "lat": 48.886518,
              "lon": 2.340671
            },
            "distanceMeters": 708,
            "distanceLabel": "708 m (~10 min)",
            "description": "La celebre piazza dei pittori e ritrattisti di Montmartre.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Butte_Montmartre%2C_Place_du_Tertre%2C_Paris.jpg/960px-Butte_Montmartre%2C_Place_du_Tertre%2C_Paris.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/place-du-tertre.jpg",
              "author": "Britchi Mirela",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Butte_Montmartre,_Place_du_Tertre,_Paris.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Place%20du%20Tertre%20Place%20du%20Tertre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.886518%2C2.340671&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.886518%2C2.340671&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.886518,2.340671&endname=Place%20du%20Tertre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=H%C3%B4tel%20Jardins%20de%20Montmartre%20131%20Rue%20Ordener%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.89288%2C2.34107&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.89288%2C2.34107&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.89288,2.34107&endname=H%C3%B4tel%20Jardins%20de%20Montmartre",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d1-4",
        "dayDate": "2026-12-07",
        "time": "18:00",
        "timeStatus": "indicative",
        "durationMinutes": 10,
        "name": "Place Dalida",
        "address": "Place Dalida, Paris",
        "coordinates": {
          "lat": 48.888507,
          "lon": 2.337956
        },
        "description": "Scorcio romantico verso rue de l’Abreuvoir; facoltativo.",
        "shortHistory": "Piazzetta dedicata alla celebre cantante Dalida, che visse nella vicina Rue d'Orchampt.",
        "curiosities": [
          "Uno degli scorci più fotografati di Montmartre, soprattutto con la luce del mattino o le luci serali."
        ],
        "whatToSee": [
          "Busto in bronzo di Dalida",
          "Prospettiva romantica su Rue de l'Abreuvoir"
        ],
        "photoSpot": "Inquadratura verso Rue de l'Abreuvoir con la cupola del Sacré-Cœur sullo sfondo.",
        "entryAndPrice": "Accesso libero",
        "priceStatus": "verified",
        "hoursForDate": "Sempre accessibile",
        "hoursStatus": "verified",
        "officialUrl": null,
        "category": "quartiere",
        "weather": "outdoor",
        "status": "optional",
        "priority": "media",
        "nearby": [
          {
            "id": "d1-4-nb-3",
            "name": "Musée de Montmartre",
            "address": "12 Rue Cortot, Paris",
            "coordinates": {
              "lat": 48.887704,
              "lon": 2.340626
            },
            "distanceMeters": 215,
            "distanceLabel": "215 m (~3 min)",
            "description": "Antico atelier di Renoir con giardini affacciati sui vigneti.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg/960px-Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/musee-de-montmartre.jpg",
              "author": "Kathleen Tyler Conklin",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_de_Montmartre_2,_Paris_July_13,_2006.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20de%20Montmartre%2012%20Rue%20Cortot%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887704,2.340626&endname=Mus%C3%A9e%20de%20Montmartre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d1-4-nb-1",
            "name": "Villa Léandre",
            "address": "Villa Léandre, Paris",
            "coordinates": {
              "lat": 48.888285,
              "lon": 2.334881
            },
            "distanceMeters": 226,
            "distanceLabel": "226 m (~3 min)",
            "description": "Vicolo romantico con casette in stile inglese anni '20.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Paris%2C_France%2C_villa_Leandre_Rue_%285%29.jpg/960px-Paris%2C_France%2C_villa_Leandre_Rue_%285%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/villa-leandre.jpg",
              "author": "Britchi Mirela",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris,_France,_villa_Leandre_Rue_(5).jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Villa%20L%C3%A9andre%20Villa%20L%C3%A9andre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.888285%2C2.334881&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.888285%2C2.334881&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.888285,2.334881&endname=Villa%20L%C3%A9andre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d1-4-nb-2",
            "name": "Place du Tertre",
            "address": "Place du Tertre, Paris",
            "coordinates": {
              "lat": 48.886518,
              "lon": 2.340671
            },
            "distanceMeters": 297,
            "distanceLabel": "297 m (~4 min)",
            "description": "La celebre piazza dei pittori e ritrattisti di Montmartre.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Butte_Montmartre%2C_Place_du_Tertre%2C_Paris.jpg/960px-Butte_Montmartre%2C_Place_du_Tertre%2C_Paris.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/place-du-tertre.jpg",
              "author": "Britchi Mirela",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Butte_Montmartre,_Place_du_Tertre,_Paris.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Place%20du%20Tertre%20Place%20du%20Tertre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.886518%2C2.340671&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.886518%2C2.340671&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.886518,2.340671&endname=Place%20du%20Tertre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Place_Dalida_Montmartre_Paris_France.JPG/960px-Place_Dalida_Montmartre_Paris_France.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/place-dalida.jpg",
          "author": "User: (WT-shared) Riggwelter at  wts wikivoyage",
          "license": "CC BY-SA 4.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Place_Dalida_Montmartre_Paris_France.JPG",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Place%20Dalida%20Place%20Dalida%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.888507%2C2.337956&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.888507%2C2.337956&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.888507,2.337956&endname=Place%20Dalida",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d1-5",
        "dayDate": "2026-12-07",
        "time": "18:15",
        "timeStatus": "indicative",
        "durationMinutes": 10,
        "name": "La Maison Rose",
        "address": "2 Rue de l’Abreuvoir, Paris",
        "coordinates": {
          "lat": 48.887989,
          "lon": 2.339603
        },
        "description": "Facciata rosa e persiane verdi; foto dall’esterno.",
        "shortHistory": "Storica casetta rosa con persiane verdi all'angolo di Rue de l'Abreuvoir, immortalata da Maurice Utrillo.",
        "curiosities": [
          "Fu frequentata da artisti della Belle Époque e delle avanguardie parigine."
        ],
        "whatToSee": [
          "Facciata esterna rosa e verde",
          "Scorcio su Rue des Saules e i vigneti di Montmartre"
        ],
        "photoSpot": "Dall'angolo inferiore di Rue de l'Abreuvoir.",
        "entryAndPrice": "Foto esterna gratuita",
        "priceStatus": "verified",
        "hoursForDate": "Esterno sempre visibile",
        "hoursStatus": "verified",
        "officialUrl": null,
        "category": "monumento",
        "weather": "outdoor",
        "status": "optional",
        "priority": "media",
        "nearby": [
          {
            "id": "d1-5-nb-3",
            "name": "Musée de Montmartre",
            "address": "12 Rue Cortot, Paris",
            "coordinates": {
              "lat": 48.887704,
              "lon": 2.340626
            },
            "distanceMeters": 81,
            "distanceLabel": "81 m (~1 min)",
            "description": "Antico atelier di Renoir con giardini affacciati sui vigneti.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg/960px-Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/musee-de-montmartre.jpg",
              "author": "Kathleen Tyler Conklin",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_de_Montmartre_2,_Paris_July_13,_2006.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20de%20Montmartre%2012%20Rue%20Cortot%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887704,2.340626&endname=Mus%C3%A9e%20de%20Montmartre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d1-5-nb-2",
            "name": "Place du Tertre",
            "address": "Place du Tertre, Paris",
            "coordinates": {
              "lat": 48.886518,
              "lon": 2.340671
            },
            "distanceMeters": 181,
            "distanceLabel": "181 m (~3 min)",
            "description": "La celebre piazza dei pittori e ritrattisti di Montmartre.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Butte_Montmartre%2C_Place_du_Tertre%2C_Paris.jpg/960px-Butte_Montmartre%2C_Place_du_Tertre%2C_Paris.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/place-du-tertre.jpg",
              "author": "Britchi Mirela",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Butte_Montmartre,_Place_du_Tertre,_Paris.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Place%20du%20Tertre%20Place%20du%20Tertre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.886518%2C2.340671&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.886518%2C2.340671&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.886518,2.340671&endname=Place%20du%20Tertre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d1-5-nb-1",
            "name": "Villa Léandre",
            "address": "Villa Léandre, Paris",
            "coordinates": {
              "lat": 48.888285,
              "lon": 2.334881
            },
            "distanceMeters": 347,
            "distanceLabel": "347 m (~5 min)",
            "description": "Vicolo romantico con casette in stile inglese anni '20.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Paris%2C_France%2C_villa_Leandre_Rue_%285%29.jpg/960px-Paris%2C_France%2C_villa_Leandre_Rue_%285%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/villa-leandre.jpg",
              "author": "Britchi Mirela",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris,_France,_villa_Leandre_Rue_(5).jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Villa%20L%C3%A9andre%20Villa%20L%C3%A9andre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.888285%2C2.334881&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.888285%2C2.334881&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.888285,2.334881&endname=Villa%20L%C3%A9andre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Montmartre_Maison_Rose_002.JPG/960px-Montmartre_Maison_Rose_002.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/la-maison-rose.jpg",
          "author": "Moonik",
          "license": "CC BY-SA 3.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Montmartre_Maison_Rose_002.JPG",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=La%20Maison%20Rose%202%20Rue%20de%20l%E2%80%99Abreuvoir%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887989%2C2.339603&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887989%2C2.339603&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.887989,2.339603&endname=La%20Maison%20Rose",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d1-6",
        "dayDate": "2026-12-07",
        "time": "18:30",
        "timeStatus": "indicative",
        "durationMinutes": 35,
        "name": "Sacré-Cœur",
        "address": "35 Rue du Chevalier de la Barre, Paris",
        "coordinates": {
          "lat": 48.887094,
          "lon": 2.343424
        },
        "description": "Basilica bianca sulla collina; mosaico e panorama, ingresso basilica gratuito.",
        "shortHistory": "Basilica romano-bizantina in pietra bianca di Château-Landon sulla sommità della Butte Montmartre.",
        "curiosities": [
          "La pietra bianca si autopulisce con l'acqua piovana rilasciando calcite."
        ],
        "whatToSee": [
          "Mosaico absidale del Cristo in gloria",
          "Navata e atmosfera silenziosa",
          "Belvedere panoramico su Parigi"
        ],
        "photoSpot": "Scalinata panoramica davanti alla facciata.",
        "entryAndPrice": "Ingresso basilica gratuito (cupola a pagamento se desiderata)",
        "priceStatus": "verified",
        "hoursForDate": "Indicativo 06:30–22:30 (da riconfermare)",
        "hoursStatus": "to_verify",
        "officialUrl": "https://www.sacre-coeur-montmartre.com/",
        "category": "monumento",
        "weather": "mixed",
        "status": "planned",
        "priority": "alta",
        "nearby": [
          {
            "id": "d1-6-nb-2",
            "name": "Place du Tertre",
            "address": "Place du Tertre, Paris",
            "coordinates": {
              "lat": 48.886518,
              "lon": 2.340671
            },
            "distanceMeters": 211,
            "distanceLabel": "211 m (~3 min)",
            "description": "La celebre piazza dei pittori e ritrattisti di Montmartre.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Butte_Montmartre%2C_Place_du_Tertre%2C_Paris.jpg/960px-Butte_Montmartre%2C_Place_du_Tertre%2C_Paris.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/place-du-tertre.jpg",
              "author": "Britchi Mirela",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Butte_Montmartre,_Place_du_Tertre,_Paris.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Place%20du%20Tertre%20Place%20du%20Tertre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.886518%2C2.340671&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.886518%2C2.340671&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.886518,2.340671&endname=Place%20du%20Tertre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d1-6-nb-3",
            "name": "Musée de Montmartre",
            "address": "12 Rue Cortot, Paris",
            "coordinates": {
              "lat": 48.887704,
              "lon": 2.340626
            },
            "distanceMeters": 216,
            "distanceLabel": "216 m (~3 min)",
            "description": "Antico atelier di Renoir con giardini affacciati sui vigneti.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg/960px-Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/musee-de-montmartre.jpg",
              "author": "Kathleen Tyler Conklin",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_de_Montmartre_2,_Paris_July_13,_2006.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20de%20Montmartre%2012%20Rue%20Cortot%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887704,2.340626&endname=Mus%C3%A9e%20de%20Montmartre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d1-6-nb-1",
            "name": "Villa Léandre",
            "address": "Villa Léandre, Paris",
            "coordinates": {
              "lat": 48.888285,
              "lon": 2.334881
            },
            "distanceMeters": 639,
            "distanceLabel": "639 m (~9 min)",
            "description": "Vicolo romantico con casette in stile inglese anni '20.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Paris%2C_France%2C_villa_Leandre_Rue_%285%29.jpg/960px-Paris%2C_France%2C_villa_Leandre_Rue_%285%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/villa-leandre.jpg",
              "author": "Britchi Mirela",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris,_France,_villa_Leandre_Rue_(5).jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Villa%20L%C3%A9andre%20Villa%20L%C3%A9andre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.888285%2C2.334881&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.888285%2C2.334881&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.888285,2.334881&endname=Villa%20L%C3%A9andre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Sacre_Coeur_cor_Jesu-DSC_1455w.jpg/960px-Sacre_Coeur_cor_Jesu-DSC_1455w.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/sacre-cur.jpg",
          "author": "P e z i",
          "license": "CC BY-SA 3.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Sacre_Coeur_cor_Jesu-DSC_1455w.jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Sacr%C3%A9-C%C5%93ur%2035%20Rue%20du%20Chevalier%20de%20la%20Barre%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887094%2C2.343424&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887094%2C2.343424&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.887094,2.343424&endname=Sacr%C3%A9-C%C5%93ur",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d1-7",
        "dayDate": "2026-12-07",
        "time": "19:10",
        "timeStatus": "indicative",
        "durationMinutes": 10,
        "name": "Moulin de la Galette",
        "address": "83 Rue Lepic, Paris",
        "coordinates": {
          "lat": 48.887351,
          "lon": 2.337141
        },
        "description": "Antico mulino legato alla storia artistica del quartiere; esterno.",
        "shortHistory": "Antico mulino a vento del XVII secolo (Blute-Fin), simbolo della Montmartre rurale e artistica.",
        "curiosities": [
          "Diede il nome al celebre dipinto di Renoir oggi al Musée d'Orsay."
        ],
        "whatToSee": [
          "Struttura esterna del mulino su Rue Lepic"
        ],
        "photoSpot": "Angolo Rue Lepic / Rue Tholozé.",
        "entryAndPrice": "Esterno gratuito",
        "priceStatus": "verified",
        "hoursForDate": "Esterno sempre visibile",
        "hoursStatus": "verified",
        "officialUrl": null,
        "category": "monumento",
        "weather": "outdoor",
        "status": "optional",
        "priority": "bassa",
        "nearby": [
          {
            "id": "d1-7-nb-1",
            "name": "Villa Léandre",
            "address": "Villa Léandre, Paris",
            "coordinates": {
              "lat": 48.888285,
              "lon": 2.334881
            },
            "distanceMeters": 195,
            "distanceLabel": "195 m (~3 min)",
            "description": "Vicolo romantico con casette in stile inglese anni '20.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Paris%2C_France%2C_villa_Leandre_Rue_%285%29.jpg/960px-Paris%2C_France%2C_villa_Leandre_Rue_%285%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/villa-leandre.jpg",
              "author": "Britchi Mirela",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris,_France,_villa_Leandre_Rue_(5).jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Villa%20L%C3%A9andre%20Villa%20L%C3%A9andre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.888285%2C2.334881&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.888285%2C2.334881&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.888285,2.334881&endname=Villa%20L%C3%A9andre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d1-7-nb-3",
            "name": "Musée de Montmartre",
            "address": "12 Rue Cortot, Paris",
            "coordinates": {
              "lat": 48.887704,
              "lon": 2.340626
            },
            "distanceMeters": 258,
            "distanceLabel": "258 m (~4 min)",
            "description": "Antico atelier di Renoir con giardini affacciati sui vigneti.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg/960px-Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/musee-de-montmartre.jpg",
              "author": "Kathleen Tyler Conklin",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_de_Montmartre_2,_Paris_July_13,_2006.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20de%20Montmartre%2012%20Rue%20Cortot%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887704,2.340626&endname=Mus%C3%A9e%20de%20Montmartre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d1-7-nb-2",
            "name": "Place du Tertre",
            "address": "Place du Tertre, Paris",
            "coordinates": {
              "lat": 48.886518,
              "lon": 2.340671
            },
            "distanceMeters": 274,
            "distanceLabel": "274 m (~4 min)",
            "description": "La celebre piazza dei pittori e ritrattisti di Montmartre.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Butte_Montmartre%2C_Place_du_Tertre%2C_Paris.jpg/960px-Butte_Montmartre%2C_Place_du_Tertre%2C_Paris.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/place-du-tertre.jpg",
              "author": "Britchi Mirela",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Butte_Montmartre,_Place_du_Tertre,_Paris.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Place%20du%20Tertre%20Place%20du%20Tertre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.886518%2C2.340671&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.886518%2C2.340671&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.886518,2.340671&endname=Place%20du%20Tertre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Renoir%2C_Pierre-Auguste_-_Dance_at_Le_Moulin_de_la_Galette%2C_1876.jpg/960px-Renoir%2C_Pierre-Auguste_-_Dance_at_Le_Moulin_de_la_Galette%2C_1876.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/moulin-de-la-galette.jpg",
          "author": "Pierre-Auguste Renoir",
          "license": "Public domain",
          "licenseUrl": "",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Renoir,_Pierre-Auguste_-_Dance_at_Le_Moulin_de_la_Galette,_1876.jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Moulin%20de%20la%20Galette%2083%20Rue%20Lepic%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887351%2C2.337141&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887351%2C2.337141&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.887351,2.337141&endname=Moulin%20de%20la%20Galette",
        "source": "OpenStreetMap / Photon",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d1-8",
        "dayDate": "2026-12-07",
        "time": "19:20",
        "timeStatus": "indicative",
        "durationMinutes": 15,
        "name": "Alexine",
        "address": "40 Rue Lepic, Paris",
        "coordinates": {
          "lat": 48.886041,
          "lon": 2.334618
        },
        "description": "Boulangerie: flan, éclair, pain au chocolat; sede e orari da verificare.",
        "shortHistory": "Boulangerie artigianale di quartiere su Rue Lepic, apprezzata per baguette e viennoiserie.",
        "curiosities": [
          "Premiata in concorsi parigini per la baguette tradizionale."
        ],
        "whatToSee": [
          "Pain au chocolat, croissant, flan, éclair",
          "Solo asporto (nessun posto a sedere)"
        ],
        "photoSpot": "Vetrina verde su Rue Lepic.",
        "entryAndPrice": "Stima 6–14 € in due",
        "priceStatus": "estimate",
        "hoursForDate": "Orari serali da verificare sul posto (chiusura tipica ~20:00)",
        "hoursStatus": "to_verify",
        "officialUrl": null,
        "category": "gastronomia",
        "weather": "indoor",
        "status": "optional",
        "priority": "media",
        "nearby": [
          {
            "id": "d1-8-nb-1",
            "name": "Villa Léandre",
            "address": "Villa Léandre, Paris",
            "coordinates": {
              "lat": 48.888285,
              "lon": 2.334881
            },
            "distanceMeters": 250,
            "distanceLabel": "250 m (~4 min)",
            "description": "Vicolo romantico con casette in stile inglese anni '20.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Paris%2C_France%2C_villa_Leandre_Rue_%285%29.jpg/960px-Paris%2C_France%2C_villa_Leandre_Rue_%285%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/villa-leandre.jpg",
              "author": "Britchi Mirela",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris,_France,_villa_Leandre_Rue_(5).jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Villa%20L%C3%A9andre%20Villa%20L%C3%A9andre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.888285%2C2.334881&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.888285%2C2.334881&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.888285,2.334881&endname=Villa%20L%C3%A9andre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d1-8-nb-2",
            "name": "Place du Tertre",
            "address": "Place du Tertre, Paris",
            "coordinates": {
              "lat": 48.886518,
              "lon": 2.340671
            },
            "distanceMeters": 446,
            "distanceLabel": "446 m (~6 min)",
            "description": "La celebre piazza dei pittori e ritrattisti di Montmartre.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Butte_Montmartre%2C_Place_du_Tertre%2C_Paris.jpg/960px-Butte_Montmartre%2C_Place_du_Tertre%2C_Paris.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/place-du-tertre.jpg",
              "author": "Britchi Mirela",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Butte_Montmartre,_Place_du_Tertre,_Paris.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Place%20du%20Tertre%20Place%20du%20Tertre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.886518%2C2.340671&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.886518%2C2.340671&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.886518,2.340671&endname=Place%20du%20Tertre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d1-8-nb-3",
            "name": "Musée de Montmartre",
            "address": "12 Rue Cortot, Paris",
            "coordinates": {
              "lat": 48.887704,
              "lon": 2.340626
            },
            "distanceMeters": 477,
            "distanceLabel": "477 m (~7 min)",
            "description": "Antico atelier di Renoir con giardini affacciati sui vigneti.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg/960px-Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/musee-de-montmartre.jpg",
              "author": "Kathleen Tyler Conklin",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_de_Montmartre_2,_Paris_July_13,_2006.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20de%20Montmartre%2012%20Rue%20Cortot%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887704,2.340626&endname=Mus%C3%A9e%20de%20Montmartre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/P1000582_Paris_II_Rue_du_Croissant_reductwk.JPG/960px-P1000582_Paris_II_Rue_du_Croissant_reductwk.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/alexine.jpg",
          "author": "Mbzt",
          "license": "CC BY-SA 3.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:P1000582_Paris_II_Rue_du_Croissant_reductwk.JPG",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Alexine%2040%20Rue%20Lepic%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.886041%2C2.334618&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.886041%2C2.334618&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.886041,2.334618&endname=Alexine",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d1-9",
        "dayDate": "2026-12-07",
        "time": "19:40",
        "timeStatus": "indicative",
        "durationMinutes": 10,
        "name": "Abbesses",
        "address": "Place des Abbesses, Paris",
        "coordinates": {
          "lat": 48.884753,
          "lon": 2.338484
        },
        "description": "Quartiere vivace, ingresso metro Art Nouveau.",
        "shortHistory": "Cuore vivace di Montmartre con una delle ultime edicole originali in stile Art Nouveau di Hector Guimard.",
        "curiosities": [
          "La stazione Abbesses è la più profonda della metropolitana di Parigi (-36 m)."
        ],
        "whatToSee": [
          "Edicola della stazione Metro Abbesses",
          "Piazza e boutique del quartiere"
        ],
        "photoSpot": "Insegna 'Métropolitain' di Guimard.",
        "entryAndPrice": "Accesso libero",
        "priceStatus": "verified",
        "hoursForDate": "Sempre accessibile",
        "hoursStatus": "verified",
        "officialUrl": null,
        "category": "quartiere",
        "weather": "outdoor",
        "status": "optional",
        "priority": "bassa",
        "nearby": [
          {
            "id": "d1-9-nb-2",
            "name": "Place du Tertre",
            "address": "Place du Tertre, Paris",
            "coordinates": {
              "lat": 48.886518,
              "lon": 2.340671
            },
            "distanceMeters": 253,
            "distanceLabel": "253 m (~4 min)",
            "description": "La celebre piazza dei pittori e ritrattisti di Montmartre.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Butte_Montmartre%2C_Place_du_Tertre%2C_Paris.jpg/960px-Butte_Montmartre%2C_Place_du_Tertre%2C_Paris.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/place-du-tertre.jpg",
              "author": "Britchi Mirela",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Butte_Montmartre,_Place_du_Tertre,_Paris.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Place%20du%20Tertre%20Place%20du%20Tertre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.886518%2C2.340671&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.886518%2C2.340671&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.886518,2.340671&endname=Place%20du%20Tertre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d1-9-nb-3",
            "name": "Musée de Montmartre",
            "address": "12 Rue Cortot, Paris",
            "coordinates": {
              "lat": 48.887704,
              "lon": 2.340626
            },
            "distanceMeters": 364,
            "distanceLabel": "364 m (~5 min)",
            "description": "Antico atelier di Renoir con giardini affacciati sui vigneti.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg/960px-Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/musee-de-montmartre.jpg",
              "author": "Kathleen Tyler Conklin",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_de_Montmartre_2,_Paris_July_13,_2006.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20de%20Montmartre%2012%20Rue%20Cortot%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887704,2.340626&endname=Mus%C3%A9e%20de%20Montmartre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d1-9-nb-1",
            "name": "Villa Léandre",
            "address": "Villa Léandre, Paris",
            "coordinates": {
              "lat": 48.888285,
              "lon": 2.334881
            },
            "distanceMeters": 473,
            "distanceLabel": "473 m (~7 min)",
            "description": "Vicolo romantico con casette in stile inglese anni '20.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Paris%2C_France%2C_villa_Leandre_Rue_%285%29.jpg/960px-Paris%2C_France%2C_villa_Leandre_Rue_%285%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/villa-leandre.jpg",
              "author": "Britchi Mirela",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris,_France,_villa_Leandre_Rue_(5).jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Villa%20L%C3%A9andre%20Villa%20L%C3%A9andre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.888285%2C2.334881&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.888285%2C2.334881&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.888285,2.334881&endname=Villa%20L%C3%A9andre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Panneaux_Histoires_M%C3%A9tro_Hector_Guimard_Art_Nouveau_%26_Acc%C3%A8s_Abbesses_Station_Abbesses_M%C3%A9tro_Paris_-_Paris_XVIII_%28FR75%29_-_2026-01-21_-_1.jpg/960px-Panneaux_Histoires_M%C3%A9tro_Hector_Guimard_Art_Nouveau_%26_Acc%C3%A8s_Abbesses_Station_Abbesses_M%C3%A9tro_Paris_-_Paris_XVIII_%28FR75%29_-_2026-01-21_-_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/abbesses.jpg",
          "author": "Chabe01",
          "license": "CC BY-SA 4.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Panneaux_Histoires_M%C3%A9tro_Hector_Guimard_Art_Nouveau_%26_Acc%C3%A8s_Abbesses_Station_Abbesses_M%C3%A9tro_Paris_-_Paris_XVIII_(FR75)_-_2026-01-21_-_1.jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Abbesses%20Place%20des%20Abbesses%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.884753%2C2.338484&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.884753%2C2.338484&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.884753,2.338484&endname=Abbesses",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d1-10",
        "dayDate": "2026-12-07",
        "time": "19:55",
        "timeStatus": "indicative",
        "durationMinutes": 10,
        "name": "Moulin Rouge",
        "address": "82 Boulevard de Clichy, Paris",
        "coordinates": {
          "lat": 48.884021,
          "lon": 2.332621
        },
        "description": "Storico cabaret, fotografia esterna senza spettacolo.",
        "shortHistory": "Celebre cabaret fondato nel 1889 ai piedi di Montmartre, icona della Belle Époque.",
        "curiosities": [
          "La sosta prevista è solo per fotografia esterna serale, senza spettacolo."
        ],
        "whatToSee": [
          "Pale rosse illuminate sul Boulevard de Clichy"
        ],
        "photoSpot": "Spartiacque pedonale di Boulevard de Clichy di fronte alle pale.",
        "entryAndPrice": "Foto esterna gratuita",
        "priceStatus": "verified",
        "hoursForDate": "Illuminazione serale",
        "hoursStatus": "verified",
        "officialUrl": "https://www.moulinrouge.fr/",
        "category": "monumento",
        "weather": "outdoor",
        "status": "optional",
        "priority": "bassa",
        "nearby": [
          {
            "id": "d1-10-nb-1",
            "name": "Villa Léandre",
            "address": "Villa Léandre, Paris",
            "coordinates": {
              "lat": 48.888285,
              "lon": 2.334881
            },
            "distanceMeters": 502,
            "distanceLabel": "502 m (~7 min)",
            "description": "Vicolo romantico con casette in stile inglese anni '20.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Paris%2C_France%2C_villa_Leandre_Rue_%285%29.jpg/960px-Paris%2C_France%2C_villa_Leandre_Rue_%285%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/villa-leandre.jpg",
              "author": "Britchi Mirela",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris,_France,_villa_Leandre_Rue_(5).jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Villa%20L%C3%A9andre%20Villa%20L%C3%A9andre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.888285%2C2.334881&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.888285%2C2.334881&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.888285,2.334881&endname=Villa%20L%C3%A9andre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d1-10-nb-2",
            "name": "Place du Tertre",
            "address": "Place du Tertre, Paris",
            "coordinates": {
              "lat": 48.886518,
              "lon": 2.340671
            },
            "distanceMeters": 651,
            "distanceLabel": "651 m (~9 min)",
            "description": "La celebre piazza dei pittori e ritrattisti di Montmartre.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Butte_Montmartre%2C_Place_du_Tertre%2C_Paris.jpg/960px-Butte_Montmartre%2C_Place_du_Tertre%2C_Paris.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/place-du-tertre.jpg",
              "author": "Britchi Mirela",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Butte_Montmartre,_Place_du_Tertre,_Paris.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Place%20du%20Tertre%20Place%20du%20Tertre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.886518%2C2.340671&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.886518%2C2.340671&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.886518,2.340671&endname=Place%20du%20Tertre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d1-10-nb-3",
            "name": "Musée de Montmartre",
            "address": "12 Rue Cortot, Paris",
            "coordinates": {
              "lat": 48.887704,
              "lon": 2.340626
            },
            "distanceMeters": 714,
            "distanceLabel": "714 m (~10 min)",
            "description": "Antico atelier di Renoir con giardini affacciati sui vigneti.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg/960px-Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/musee-de-montmartre.jpg",
              "author": "Kathleen Tyler Conklin",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_de_Montmartre_2,_Paris_July_13,_2006.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20de%20Montmartre%2012%20Rue%20Cortot%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887704,2.340626&endname=Mus%C3%A9e%20de%20Montmartre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/De_Moulin_Rouge_in_Parijs_bij_avond%2C_Bestanddeelnr_254-5695.jpg/960px-De_Moulin_Rouge_in_Parijs_bij_avond%2C_Bestanddeelnr_254-5695.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/moulin-rouge.jpg",
          "author": "Willem van de Poll",
          "license": "CC0",
          "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:De_Moulin_Rouge_in_Parijs_bij_avond,_Bestanddeelnr_254-5695.jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Moulin%20Rouge%2082%20Boulevard%20de%20Clichy%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.884021%2C2.332621&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.884021%2C2.332621&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.884021,2.332621&endname=Moulin%20Rouge",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d1-11",
        "dayDate": "2026-12-07",
        "time": "20:15",
        "timeStatus": "indicative",
        "durationMinutes": 60,
        "name": "Bouillon Pigalle",
        "address": "22 Boulevard de Clichy, Paris",
        "coordinates": {
          "lat": 48.882583,
          "lon": 2.337451
        },
        "description": "Cena francese accessibile; alternative sotto.",
        "shortHistory": "Grande brasserie parigina in stile 'bouillon' popolare: cucina francese tradizionale a prezzi contenuti.",
        "curiosities": [
          "Servizio continuo 12:00–24:00; possibile coda ma ricambio tavoli rapido."
        ],
        "whatToSee": [
          "Soupe à l'oignon (~3,90 €)",
          "Bœuf bourguignon (~12,20 €)",
          "Crème brûlée (~3,80 €)"
        ],
        "photoSpot": "Insegna luminosa su Boulevard de Clichy.",
        "entryAndPrice": "Stima 35–48 € in due (piatti verificati ~9,50–14 €)",
        "priceStatus": "verified",
        "hoursForDate": "Tutti i giorni 12:00–24:00 (verificato)",
        "hoursStatus": "verified",
        "officialUrl": "https://bouillonlesite.com/",
        "category": "gastronomia",
        "weather": "indoor",
        "status": "optional",
        "priority": "media",
        "nearby": [
          {
            "id": "d1-11-nb-2",
            "name": "Place du Tertre",
            "address": "Place du Tertre, Paris",
            "coordinates": {
              "lat": 48.886518,
              "lon": 2.340671
            },
            "distanceMeters": 497,
            "distanceLabel": "497 m (~7 min)",
            "description": "La celebre piazza dei pittori e ritrattisti di Montmartre.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Butte_Montmartre%2C_Place_du_Tertre%2C_Paris.jpg/960px-Butte_Montmartre%2C_Place_du_Tertre%2C_Paris.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/place-du-tertre.jpg",
              "author": "Britchi Mirela",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Butte_Montmartre,_Place_du_Tertre,_Paris.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Place%20du%20Tertre%20Place%20du%20Tertre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.886518%2C2.340671&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.886518%2C2.340671&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.886518,2.340671&endname=Place%20du%20Tertre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d1-11-nb-3",
            "name": "Musée de Montmartre",
            "address": "12 Rue Cortot, Paris",
            "coordinates": {
              "lat": 48.887704,
              "lon": 2.340626
            },
            "distanceMeters": 615,
            "distanceLabel": "615 m (~9 min)",
            "description": "Antico atelier di Renoir con giardini affacciati sui vigneti.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg/960px-Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/musee-de-montmartre.jpg",
              "author": "Kathleen Tyler Conklin",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_de_Montmartre_2,_Paris_July_13,_2006.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20de%20Montmartre%2012%20Rue%20Cortot%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887704,2.340626&endname=Mus%C3%A9e%20de%20Montmartre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d1-11-nb-1",
            "name": "Villa Léandre",
            "address": "Villa Léandre, Paris",
            "coordinates": {
              "lat": 48.888285,
              "lon": 2.334881
            },
            "distanceMeters": 661,
            "distanceLabel": "661 m (~9 min)",
            "description": "Vicolo romantico con casette in stile inglese anni '20.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Paris%2C_France%2C_villa_Leandre_Rue_%285%29.jpg/960px-Paris%2C_France%2C_villa_Leandre_Rue_%285%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/villa-leandre.jpg",
              "author": "Britchi Mirela",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris,_France,_villa_Leandre_Rue_(5).jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Villa%20L%C3%A9andre%20Villa%20L%C3%A9andre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.888285%2C2.334881&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.888285%2C2.334881&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.888285,2.334881&endname=Villa%20L%C3%A9andre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Soupe_%C3%A0_l%27oignon_01.JPG/960px-Soupe_%C3%A0_l%27oignon_01.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/bouillon-pigalle.jpg",
          "author": "Arnaud 25",
          "license": "CC BY-SA 4.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Soupe_%C3%A0_l%27oignon_01.JPG",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Bouillon%20Pigalle%2022%20Boulevard%20de%20Clichy%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.882583%2C2.337451&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.882583%2C2.337451&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.882583,2.337451&endname=Bouillon%20Pigalle",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      }
    ]
  },
  {
    "date": "2026-12-08",
    "dayNumber": 2,
    "title": "Anniversario Disney",
    "subtitle": "Martedì 8 Dicembre · Giorno 2",
    "transport": "Metro 12 Mairie d’Issy fino a Saint-Lazare, collegamento pedonale Auber, RER A direzione Marne-la-Vallée–Chessy; ritorno inverso, verificare ultimo treno e ramo corretto.",
    "rain": {
      "light": "Attrazioni interne e parata se attiva",
      "heavy": "Peter Pan, Pirates, Buzz, galleria, drago, spettacoli interni se attivi; parata/finale non garantiti"
    },
    "foodIdeas": [
      "Bella Notte, Casa de Coco, Hakuna Matata: 12–22 € a persona",
      "Victoria’s Home-Style: 8–15 € a persona, merenda",
      "Captain Jack’s: 45–65 € a persona, extra con prenotazione"
    ],
    "activities": [
      {
        "id": "d2-1",
        "dayDate": "2026-12-08",
        "time": "07:00",
        "timeStatus": "indicative",
        "durationMinutes": 15,
        "name": "Hôtel Jardins de Montmartre",
        "address": "131 Rue Ordener, Paris",
        "coordinates": {
          "lat": 48.89288,
          "lon": 2.34107
        },
        "description": "Partenza per Disneyland; colazione da asporto.",
        "shortHistory": "Base del soggiorno nel 18° arrondissement, in Rue Ordener a pochi passi da Jules Joffrin (Metro 12).",
        "curiosities": [
          "La Metro 12 collega direttamente Jules Joffrin a Saint-Lazare, Concorde e Madeleine."
        ],
        "whatToSee": [
          "Check-in",
          "Deposito bagagli e verifica orario check-out per sabato 12/12"
        ],
        "photoSpot": "Via tipica parigina su Rue Ordener.",
        "entryAndPrice": "Soggiorno già prenotato (verificare eventuale tassa di soggiorno)",
        "priceStatus": "user_confirmed",
        "hoursForDate": "Check-in stimato 17:15–18:00",
        "hoursStatus": "to_verify",
        "officialUrl": null,
        "category": "hotel",
        "weather": "indoor",
        "status": "planned",
        "priority": "alta",
        "nearby": [
          {
            "id": "d2-1-nb-1",
            "name": "Le Passage Enchanté d’Aladdin",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 32039,
            "distanceLabel": "32.0 km (~458 min)",
            "description": "Percorso pedonale al coperto con diorami di Aladdin (Adventureland).",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Passage%20Enchant%C3%A9%20d%E2%80%99Aladdin%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Le%20Passage%20Enchant%C3%A9%20d%E2%80%99Aladdin",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-1-nb-2",
            "name": "Le Pays des Contes de Fées",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 32039,
            "distanceLabel": "32.0 km (~458 min)",
            "description": "Giro tranquillo in barca tra scene in miniatura delle fiabe.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Pays%20des%20Contes%20de%20F%C3%A9es%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Le%20Pays%20des%20Contes%20de%20F%C3%A9es",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-1-nb-3",
            "name": "Alice’s Curious Labyrinth",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 32039,
            "distanceLabel": "32.0 km (~458 min)",
            "description": "Labirinto di siepi ispirato ad Alice nel Paese delle Meraviglie.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Alice%E2%80%99s%20Curious%20Labyrinth%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Alice%E2%80%99s%20Curious%20Labyrinth",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-1-nb-4",
            "name": "Les Voyages de Pinocchio",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 32039,
            "distanceLabel": "32.0 km (~458 min)",
            "description": "Dark ride classica al coperto a Fantasyland.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Les%20Voyages%20de%20Pinocchio%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Les%20Voyages%20de%20Pinocchio",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=H%C3%B4tel%20Jardins%20de%20Montmartre%20131%20Rue%20Ordener%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.89288%2C2.34107&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.89288%2C2.34107&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.89288,2.34107&endname=H%C3%B4tel%20Jardins%20de%20Montmartre",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d2-2",
        "dayDate": "2026-12-08",
        "time": "09:00",
        "timeStatus": "indicative",
        "durationMinutes": 720,
        "name": "Disneyland Park",
        "address": "Disneyland Park, Chessy, France",
        "coordinates": {
          "lat": 48.869509,
          "lon": 2.777768
        },
        "description": "Solo primo parco; prima visita e anniversario. Apertura da riconfermare.",
        "shortHistory": "Il parco principale di Disneyland Paris, inaugurato nel 1992. Giornata speciale per il vostro anniversario.",
        "curiosities": [
          "L'8 dicembre 2026 rientra nella stagione 'Natale Incantato Disney' (7 nov – 6 gen)."
        ],
        "whatToSee": [
          "Main Street U.S.A. addobbata per Natale",
          "Albero di Town Square",
          "Fantasyland, Adventureland, Discoveryland"
        ],
        "photoSpot": "Central Plaza davanti al Castello.",
        "entryAndPrice": "Ingresso già prenotato (solo 1° parco)",
        "priceStatus": "user_confirmed",
        "hoursForDate": "8 dic 2026: 09:00–21:00 (verificato su calendario)",
        "hoursStatus": "verified",
        "officialUrl": "https://www.disneylandparis.com/",
        "category": "disney",
        "weather": "mixed",
        "status": "confirmed",
        "priority": "alta",
        "nearby": [
          {
            "id": "d2-2-nb-1",
            "name": "Le Passage Enchanté d’Aladdin",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Percorso pedonale al coperto con diorami di Aladdin (Adventureland).",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Passage%20Enchant%C3%A9%20d%E2%80%99Aladdin%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Le%20Passage%20Enchant%C3%A9%20d%E2%80%99Aladdin",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-2-nb-2",
            "name": "Le Pays des Contes de Fées",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Giro tranquillo in barca tra scene in miniatura delle fiabe.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Pays%20des%20Contes%20de%20F%C3%A9es%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Le%20Pays%20des%20Contes%20de%20F%C3%A9es",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-2-nb-3",
            "name": "Alice’s Curious Labyrinth",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Labirinto di siepi ispirato ad Alice nel Paese delle Meraviglie.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Alice%E2%80%99s%20Curious%20Labyrinth%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Alice%E2%80%99s%20Curious%20Labyrinth",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-2-nb-4",
            "name": "Les Voyages de Pinocchio",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Dark ride classica al coperto a Fantasyland.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Les%20Voyages%20de%20Pinocchio%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Les%20Voyages%20de%20Pinocchio",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Disneyland_Paris_-_Paddy_Wagon_-_20150803_09h07_%2810763%29.jpg/960px-Disneyland_Paris_-_Paddy_Wagon_-_20150803_09h07_%2810763%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/disneyland-park.jpg",
          "author": "Another one of my pictures:\n\n\n\nThis photograph was taken by Medium6...",
          "license": "CC BY-SA 4.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Disneyland_Paris_-_Paddy_Wagon_-_20150803_09h07_(10763).jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Disneyland%20Park%20Disneyland%20Park%2C%20Chessy%2C%20France",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Disneyland%20Park",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d2-3",
        "dayDate": "2026-12-08",
        "time": "09:10",
        "timeStatus": "indicative",
        "durationMinutes": 45,
        "name": "Peter Pan’s Flight",
        "address": "Peter Pan’s Flight, Disneyland Paris",
        "coordinates": {
          "lat": 48.869509,
          "lon": 2.777768
        },
        "description": "Volo fiabesco su Londra e Neverland; priorità appena aperto.",
        "shortHistory": "Iconica dark ride sospesa su galeoni volanti sopra Londra e l'Isola che non c'è.",
        "curiosities": [
          "È l'attrazione con le code più lunghe di Fantasyland: farla subito alle 09:00."
        ],
        "whatToSee": [
          "Volo sopra Londra illuminata",
          "Isola che non c'è"
        ],
        "photoSpot": "Ingresso in stile vittoriano a Fantasyland.",
        "entryAndPrice": "Inclusa nel biglietto del parco",
        "priceStatus": "verified",
        "hoursForDate": "Orari del parco (09:00–21:00)",
        "hoursStatus": "verified",
        "officialUrl": "https://www.disneylandparis.com/",
        "category": "disney",
        "weather": "indoor",
        "status": "planned",
        "priority": "alta",
        "nearby": [
          {
            "id": "d2-3-nb-1",
            "name": "Le Passage Enchanté d’Aladdin",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Percorso pedonale al coperto con diorami di Aladdin (Adventureland).",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Passage%20Enchant%C3%A9%20d%E2%80%99Aladdin%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Le%20Passage%20Enchant%C3%A9%20d%E2%80%99Aladdin",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-3-nb-2",
            "name": "Le Pays des Contes de Fées",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Giro tranquillo in barca tra scene in miniatura delle fiabe.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Pays%20des%20Contes%20de%20F%C3%A9es%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Le%20Pays%20des%20Contes%20de%20F%C3%A9es",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-3-nb-3",
            "name": "Alice’s Curious Labyrinth",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Labirinto di siepi ispirato ad Alice nel Paese delle Meraviglie.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Alice%E2%80%99s%20Curious%20Labyrinth%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Alice%E2%80%99s%20Curious%20Labyrinth",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-3-nb-4",
            "name": "Les Voyages de Pinocchio",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Dark ride classica al coperto a Fantasyland.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Les%20Voyages%20de%20Pinocchio%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Les%20Voyages%20de%20Pinocchio",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Peter%20Pan%E2%80%99s%20Flight%20Peter%20Pan%E2%80%99s%20Flight%2C%20Disneyland%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Peter%20Pan%E2%80%99s%20Flight",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d2-4",
        "dayDate": "2026-12-08",
        "time": "10:00",
        "timeStatus": "indicative",
        "durationMinutes": 30,
        "name": "It’s a Small World",
        "address": "It’s a Small World, Disneyland Paris",
        "coordinates": {
          "lat": 48.869509,
          "lon": 2.777768
        },
        "description": "Barche e personaggi dei diversi paesi.",
        "shortHistory": "Viaggio in barca tra centinaia di bambole animate che celebrano le culture del mondo.",
        "curiosities": [
          "Ideale a metà mattina o in caso di pioggia."
        ],
        "whatToSee": [
          "Scenografie colorate",
          "Dolce giro rilassante al coperto"
        ],
        "photoSpot": "Facciata geometrica bianca e oro.",
        "entryAndPrice": "Inclusa nel biglietto",
        "priceStatus": "verified",
        "hoursForDate": "Verificare eventuali chiusure su app ufficiale",
        "hoursStatus": "to_verify",
        "officialUrl": "https://www.disneylandparis.com/",
        "category": "disney",
        "weather": "indoor",
        "status": "optional",
        "priority": "media",
        "nearby": [
          {
            "id": "d2-4-nb-1",
            "name": "Le Passage Enchanté d’Aladdin",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Percorso pedonale al coperto con diorami di Aladdin (Adventureland).",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Passage%20Enchant%C3%A9%20d%E2%80%99Aladdin%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Le%20Passage%20Enchant%C3%A9%20d%E2%80%99Aladdin",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-4-nb-2",
            "name": "Le Pays des Contes de Fées",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Giro tranquillo in barca tra scene in miniatura delle fiabe.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Pays%20des%20Contes%20de%20F%C3%A9es%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Le%20Pays%20des%20Contes%20de%20F%C3%A9es",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-4-nb-3",
            "name": "Alice’s Curious Labyrinth",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Labirinto di siepi ispirato ad Alice nel Paese delle Meraviglie.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Alice%E2%80%99s%20Curious%20Labyrinth%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Alice%E2%80%99s%20Curious%20Labyrinth",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-4-nb-4",
            "name": "Les Voyages de Pinocchio",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Dark ride classica al coperto a Fantasyland.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Les%20Voyages%20de%20Pinocchio%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Les%20Voyages%20de%20Pinocchio",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=It%E2%80%99s%20a%20Small%20World%20It%E2%80%99s%20a%20Small%20World%2C%20Disneyland%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=It%E2%80%99s%20a%20Small%20World",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d2-5",
        "dayDate": "2026-12-08",
        "time": "10:40",
        "timeStatus": "indicative",
        "durationMinutes": 40,
        "name": "Castello della Bella Addormentata",
        "address": "Le Château de la Belle au Bois Dormant, Disneyland Paris",
        "coordinates": {
          "lat": 48.879176,
          "lon": 2.769979
        },
        "description": "Galleria con arazzi e vetrate; drago animatronico sotto il castello.",
        "shortHistory": "Simbolo di Disneyland Paris, ispirato ai castelli della Loira e alle miniature medievali.",
        "curiosities": [
          "Il drago animatronico sotto il castello è una delle creature più grandi mai costruite da Disney."
        ],
        "whatToSee": [
          "La Galerie de la Belle au Bois Dormant (vetrate e arazzi)",
          "La Tanière du Dragon nei sotterranei"
        ],
        "photoSpot": "Ponte d'ingresso o lato sinistro verso Adventureland.",
        "entryAndPrice": "Incluso nel biglietto",
        "priceStatus": "verified",
        "hoursForDate": "Aperto durante l'orario del parco",
        "hoursStatus": "verified",
        "officialUrl": "https://www.disneylandparis.com/",
        "category": "disney",
        "weather": "mixed",
        "status": "planned",
        "priority": "alta",
        "nearby": [
          {
            "id": "d2-5-nb-1",
            "name": "Le Passage Enchanté d’Aladdin",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 1217,
            "distanceLabel": "1.2 km (~17 min)",
            "description": "Percorso pedonale al coperto con diorami di Aladdin (Adventureland).",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Passage%20Enchant%C3%A9%20d%E2%80%99Aladdin%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Le%20Passage%20Enchant%C3%A9%20d%E2%80%99Aladdin",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-5-nb-2",
            "name": "Le Pays des Contes de Fées",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 1217,
            "distanceLabel": "1.2 km (~17 min)",
            "description": "Giro tranquillo in barca tra scene in miniatura delle fiabe.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Pays%20des%20Contes%20de%20F%C3%A9es%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Le%20Pays%20des%20Contes%20de%20F%C3%A9es",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-5-nb-3",
            "name": "Alice’s Curious Labyrinth",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 1217,
            "distanceLabel": "1.2 km (~17 min)",
            "description": "Labirinto di siepi ispirato ad Alice nel Paese delle Meraviglie.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Alice%E2%80%99s%20Curious%20Labyrinth%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Alice%E2%80%99s%20Curious%20Labyrinth",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-5-nb-4",
            "name": "Les Voyages de Pinocchio",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 1217,
            "distanceLabel": "1.2 km (~17 min)",
            "description": "Dark ride classica al coperto a Fantasyland.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Les%20Voyages%20de%20Pinocchio%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Les%20Voyages%20de%20Pinocchio",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Sleeping_Beauty_Castle_Disneyland_Anaheim_2013.jpg/960px-Sleeping_Beauty_Castle_Disneyland_Anaheim_2013.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/castello-della-bella-addormentata.jpg",
          "author": "Tuxyso",
          "license": "CC BY-SA 3.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Sleeping_Beauty_Castle_Disneyland_Anaheim_2013.jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Castello%20della%20Bella%20Addormentata%20Le%20Ch%C3%A2teau%20de%20la%20Belle%20au%20Bois%20Dormant%2C%20Disneyland%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.879176%2C2.769979&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.879176%2C2.769979&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.879176,2.769979&endname=Castello%20della%20Bella%20Addormentata",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d2-6",
        "dayDate": "2026-12-08",
        "time": "11:30",
        "timeStatus": "indicative",
        "durationMinutes": 45,
        "name": "Pirates of the Caribbean",
        "address": "Pirates of the Caribbean, Disneyland Paris",
        "coordinates": {
          "lat": 48.869509,
          "lon": 2.777768
        },
        "description": "Barca tra pirati e scenografie; piccole discese.",
        "shortHistory": "Avventura in barca tra fortezze spagnole, battaglie navali e caverne dei pirati.",
        "curiosities": [
          "La versione di Parigi è considerata una delle più scenografiche al mondo."
        ],
        "whatToSee": [
          "Scenografie immersive al coperto",
          "Due piccole discese in acqua"
        ],
        "photoSpot": "Fortezza di Adventureland.",
        "entryAndPrice": "Inclusa nel biglietto",
        "priceStatus": "verified",
        "hoursForDate": "Orari del parco",
        "hoursStatus": "verified",
        "officialUrl": "https://www.disneylandparis.com/",
        "category": "disney",
        "weather": "indoor",
        "status": "planned",
        "priority": "alta",
        "nearby": [
          {
            "id": "d2-6-nb-1",
            "name": "Le Passage Enchanté d’Aladdin",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Percorso pedonale al coperto con diorami di Aladdin (Adventureland).",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Passage%20Enchant%C3%A9%20d%E2%80%99Aladdin%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Le%20Passage%20Enchant%C3%A9%20d%E2%80%99Aladdin",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-6-nb-2",
            "name": "Le Pays des Contes de Fées",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Giro tranquillo in barca tra scene in miniatura delle fiabe.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Pays%20des%20Contes%20de%20F%C3%A9es%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Le%20Pays%20des%20Contes%20de%20F%C3%A9es",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-6-nb-3",
            "name": "Alice’s Curious Labyrinth",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Labirinto di siepi ispirato ad Alice nel Paese delle Meraviglie.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Alice%E2%80%99s%20Curious%20Labyrinth%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Alice%E2%80%99s%20Curious%20Labyrinth",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-6-nb-4",
            "name": "Les Voyages de Pinocchio",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Dark ride classica al coperto a Fantasyland.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Les%20Voyages%20de%20Pinocchio%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Les%20Voyages%20de%20Pinocchio",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Pirates%20of%20the%20Caribbean%20Pirates%20of%20the%20Caribbean%2C%20Disneyland%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Pirates%20of%20the%20Caribbean",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d2-7",
        "dayDate": "2026-12-08",
        "time": "12:30",
        "timeStatus": "indicative",
        "durationMinutes": 45,
        "name": "Pizzeria Bella Notte",
        "address": "Pizzeria Bella Notte, Disneyland Paris",
        "coordinates": {
          "lat": 48.869509,
          "lon": 2.777768
        },
        "description": "Pranzo a tema Lilli e il Vagabondo; alternativa Casa de Coco.",
        "shortHistory": "Ristorante a servizio rapido a Fantasyland ispirato a Lilli e il Vagabondo.",
        "curiosities": [
          "Alternativa veloce: Casa de Coco (Frontierland) o Hakuna Matata (Adventureland)."
        ],
        "whatToSee": [
          "Menu pizza/pasta a tema italiano",
          "Sala interna riscaldata"
        ],
        "photoSpot": "Fontana di Lilli e il Vagabondo.",
        "entryAndPrice": "Stima 12–22 € a persona",
        "priceStatus": "estimate",
        "hoursForDate": "Orari variabili su app Disneyland Paris",
        "hoursStatus": "to_verify",
        "officialUrl": "https://www.disneylandparis.com/",
        "category": "gastronomia",
        "weather": "indoor",
        "status": "optional",
        "priority": "media",
        "nearby": [
          {
            "id": "d2-7-nb-1",
            "name": "Le Passage Enchanté d’Aladdin",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Percorso pedonale al coperto con diorami di Aladdin (Adventureland).",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Passage%20Enchant%C3%A9%20d%E2%80%99Aladdin%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Le%20Passage%20Enchant%C3%A9%20d%E2%80%99Aladdin",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-7-nb-2",
            "name": "Le Pays des Contes de Fées",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Giro tranquillo in barca tra scene in miniatura delle fiabe.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Pays%20des%20Contes%20de%20F%C3%A9es%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Le%20Pays%20des%20Contes%20de%20F%C3%A9es",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-7-nb-3",
            "name": "Alice’s Curious Labyrinth",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Labirinto di siepi ispirato ad Alice nel Paese delle Meraviglie.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Alice%E2%80%99s%20Curious%20Labyrinth%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Alice%E2%80%99s%20Curious%20Labyrinth",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-7-nb-4",
            "name": "Les Voyages de Pinocchio",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Dark ride classica al coperto a Fantasyland.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Les%20Voyages%20de%20Pinocchio%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Les%20Voyages%20de%20Pinocchio",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Pizzeria%20Bella%20Notte%20Pizzeria%20Bella%20Notte%2C%20Disneyland%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Pizzeria%20Bella%20Notte",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d2-8",
        "dayDate": "2026-12-08",
        "time": "13:30",
        "timeStatus": "indicative",
        "durationMinutes": 40,
        "name": "Phantom Manor",
        "address": "Phantom Manor, Disneyland Paris",
        "coordinates": {
          "lat": 48.869509,
          "lon": 2.777768
        },
        "description": "Dimora gotica, movimento tranquillo ma atmosfera inquietante.",
        "shortHistory": "Dimora vittoriana infestata di Frontierland con una storia gotica esclusiva di Parigi.",
        "curiosities": [
          "Movimento lento e fluido su Doom Buggy, nessuna montagna russa."
        ],
        "whatToSee": [
          "Effetti ottici classici",
          "Sala da ballo degli spiriti"
        ],
        "photoSpot": "Giardino davanti alla facciata della villa.",
        "entryAndPrice": "Inclusa nel biglietto",
        "priceStatus": "verified",
        "hoursForDate": "Orari del parco",
        "hoursStatus": "verified",
        "officialUrl": "https://www.disneylandparis.com/",
        "category": "disney",
        "weather": "indoor",
        "status": "optional",
        "priority": "media",
        "nearby": [
          {
            "id": "d2-8-nb-1",
            "name": "Le Passage Enchanté d’Aladdin",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Percorso pedonale al coperto con diorami di Aladdin (Adventureland).",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Passage%20Enchant%C3%A9%20d%E2%80%99Aladdin%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Le%20Passage%20Enchant%C3%A9%20d%E2%80%99Aladdin",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-8-nb-2",
            "name": "Le Pays des Contes de Fées",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Giro tranquillo in barca tra scene in miniatura delle fiabe.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Pays%20des%20Contes%20de%20F%C3%A9es%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Le%20Pays%20des%20Contes%20de%20F%C3%A9es",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-8-nb-3",
            "name": "Alice’s Curious Labyrinth",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Labirinto di siepi ispirato ad Alice nel Paese delle Meraviglie.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Alice%E2%80%99s%20Curious%20Labyrinth%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Alice%E2%80%99s%20Curious%20Labyrinth",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-8-nb-4",
            "name": "Les Voyages de Pinocchio",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Dark ride classica al coperto a Fantasyland.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Les%20Voyages%20de%20Pinocchio%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Les%20Voyages%20de%20Pinocchio",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Phantom%20Manor%20Phantom%20Manor%2C%20Disneyland%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Phantom%20Manor",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d2-9",
        "dayDate": "2026-12-08",
        "time": "15:00",
        "timeStatus": "indicative",
        "durationMinutes": 45,
        "name": "Buzz Lightyear Laser Blast",
        "address": "Buzz Lightyear Laser Blast, Disneyland Paris",
        "coordinates": {
          "lat": 48.869509,
          "lon": 2.777768
        },
        "description": "Sfida di coppia a bersagli laser.",
        "shortHistory": "Attrazione interattiva a Discoveryland dove ci si sfida a colpi di laser contro l'imperatore Zurg.",
        "curiosities": [
          "Perfetta per una sfida divertente a due senza adrenalina estrema."
        ],
        "whatToSee": [
          "Sfida di coppia a punti",
          "Navicella rotante al coperto"
        ],
        "photoSpot": "Tabellone finale dei punteggi.",
        "entryAndPrice": "Inclusa nel biglietto",
        "priceStatus": "verified",
        "hoursForDate": "Orari del parco",
        "hoursStatus": "verified",
        "officialUrl": "https://www.disneylandparis.com/",
        "category": "disney",
        "weather": "indoor",
        "status": "planned",
        "priority": "alta",
        "nearby": [
          {
            "id": "d2-9-nb-1",
            "name": "Le Passage Enchanté d’Aladdin",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Percorso pedonale al coperto con diorami di Aladdin (Adventureland).",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Passage%20Enchant%C3%A9%20d%E2%80%99Aladdin%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Le%20Passage%20Enchant%C3%A9%20d%E2%80%99Aladdin",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-9-nb-2",
            "name": "Le Pays des Contes de Fées",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Giro tranquillo in barca tra scene in miniatura delle fiabe.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Pays%20des%20Contes%20de%20F%C3%A9es%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Le%20Pays%20des%20Contes%20de%20F%C3%A9es",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-9-nb-3",
            "name": "Alice’s Curious Labyrinth",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Labirinto di siepi ispirato ad Alice nel Paese delle Meraviglie.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Alice%E2%80%99s%20Curious%20Labyrinth%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Alice%E2%80%99s%20Curious%20Labyrinth",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-9-nb-4",
            "name": "Les Voyages de Pinocchio",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Dark ride classica al coperto a Fantasyland.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Les%20Voyages%20de%20Pinocchio%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Les%20Voyages%20de%20Pinocchio",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Buzz%20Lightyear%20Laser%20Blast%20Buzz%20Lightyear%20Laser%20Blast%2C%20Disneyland%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Buzz%20Lightyear%20Laser%20Blast",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d2-10",
        "dayDate": "2026-12-08",
        "time": "16:00",
        "timeStatus": "indicative",
        "durationMinutes": 60,
        "name": "Main Street USA",
        "address": "Main Street USA, Disneyland Paris",
        "coordinates": {
          "lat": 48.869509,
          "lon": 2.777768
        },
        "description": "Merenda, negozi, albero, fotografie. Parata secondo app ufficiale, non questo orario fisso.",
        "shortHistory": "Viale d'ingresso in stile primo Novecento, cuore dello shopping e delle parate natalizie.",
        "curiosities": [
          "In inverno le vetrine e le ghirlande creano un'atmosfera fiabesca al crepuscolo."
        ],
        "whatToSee": [
          "Albero di Natale di Town Square",
          "Parata di Natale (orario su app ufficiale)",
          "Pasticcerie e negozi"
        ],
        "photoSpot": "Town Square con l'albero e il Castello in fondo.",
        "entryAndPrice": "Accesso incluso",
        "priceStatus": "verified",
        "hoursForDate": "09:00–21:00",
        "hoursStatus": "verified",
        "officialUrl": "https://www.disneylandparis.com/",
        "category": "disney",
        "weather": "mixed",
        "status": "planned",
        "priority": "alta",
        "nearby": [
          {
            "id": "d2-10-nb-1",
            "name": "Le Passage Enchanté d’Aladdin",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Percorso pedonale al coperto con diorami di Aladdin (Adventureland).",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Passage%20Enchant%C3%A9%20d%E2%80%99Aladdin%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Le%20Passage%20Enchant%C3%A9%20d%E2%80%99Aladdin",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-10-nb-2",
            "name": "Le Pays des Contes de Fées",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Giro tranquillo in barca tra scene in miniatura delle fiabe.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Pays%20des%20Contes%20de%20F%C3%A9es%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Le%20Pays%20des%20Contes%20de%20F%C3%A9es",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-10-nb-3",
            "name": "Alice’s Curious Labyrinth",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Labirinto di siepi ispirato ad Alice nel Paese delle Meraviglie.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Alice%E2%80%99s%20Curious%20Labyrinth%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Alice%E2%80%99s%20Curious%20Labyrinth",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-10-nb-4",
            "name": "Les Voyages de Pinocchio",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Dark ride classica al coperto a Fantasyland.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Les%20Voyages%20de%20Pinocchio%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Les%20Voyages%20de%20Pinocchio",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Main%20Street%20USA%20Main%20Street%20USA%2C%20Disneyland%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Main%20Street%20USA",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d2-11",
        "dayDate": "2026-12-08",
        "time": "20:15",
        "timeStatus": "indicative",
        "durationMinutes": 60,
        "name": "Spettacolo finale Disney",
        "address": "Central Plaza, Disneyland Paris",
        "coordinates": {
          "lat": 48.869509,
          "lon": 2.777768
        },
        "description": "Posizionarsi prima dello spettacolo; orario indicativo, verificare programma.",
        "shortHistory": "Spettacolo serale di proiezioni, musica e fuochi sul Castello della Bella Addormentata.",
        "curiosities": [
          "In caso di vento forte o pioggia intensa può subire modifiche; verificare orario su app."
        ],
        "whatToSee": [
          "Proiezioni sul Castello",
          "Musiche Disney"
        ],
        "photoSpot": "Central Plaza 30–40 min prima.",
        "entryAndPrice": "Incluso nel biglietto",
        "priceStatus": "verified",
        "hoursForDate": "Intorno alle 20:45–21:00 (verificare programma del giorno)",
        "hoursStatus": "to_verify",
        "officialUrl": "https://www.disneylandparis.com/",
        "category": "disney",
        "weather": "outdoor",
        "status": "planned",
        "priority": "alta",
        "nearby": [
          {
            "id": "d2-11-nb-1",
            "name": "Le Passage Enchanté d’Aladdin",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Percorso pedonale al coperto con diorami di Aladdin (Adventureland).",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Passage%20Enchant%C3%A9%20d%E2%80%99Aladdin%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Le%20Passage%20Enchant%C3%A9%20d%E2%80%99Aladdin",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-11-nb-2",
            "name": "Le Pays des Contes de Fées",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Giro tranquillo in barca tra scene in miniatura delle fiabe.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Pays%20des%20Contes%20de%20F%C3%A9es%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Le%20Pays%20des%20Contes%20de%20F%C3%A9es",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-11-nb-3",
            "name": "Alice’s Curious Labyrinth",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Labirinto di siepi ispirato ad Alice nel Paese delle Meraviglie.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Alice%E2%80%99s%20Curious%20Labyrinth%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Alice%E2%80%99s%20Curious%20Labyrinth",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-11-nb-4",
            "name": "Les Voyages de Pinocchio",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 0,
            "distanceLabel": "0 m (~1 min)",
            "description": "Dark ride classica al coperto a Fantasyland.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Les%20Voyages%20de%20Pinocchio%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Les%20Voyages%20de%20Pinocchio",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Spettacolo%20finale%20Disney%20Central%20Plaza%2C%20Disneyland%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Spettacolo%20finale%20Disney",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d2-12",
        "dayDate": "2026-12-08",
        "time": "21:30",
        "timeStatus": "indicative",
        "durationMinutes": 30,
        "name": "LEGO Store",
        "address": "LEGO Store Disney Village, Chessy",
        "coordinates": {
          "lat": 48.881276,
          "lon": 2.765727
        },
        "description": "Passaporto e timbro; chiedere eventuale timbro natalizio. Verificare chiusura prima di entrare al parco.",
        "shortHistory": "Negozio ufficiale LEGO nel Disney Village, noto per il passaporto LEGO e i timbri ricordo.",
        "curiosities": [
          "Aperto fino alle 23:00 (verificato su lego.com): comodissimo dopo la chiusura del parco alle 21:00."
        ],
        "whatToSee": [
          "Passaporto LEGO e timbro store/natalizio",
          "Sculture in mattoncini Disney"
        ],
        "photoSpot": "Sculture LEGO all'ingresso.",
        "entryAndPrice": "Ingresso libero (timbri soggetti a disponibilità)",
        "priceStatus": "verified",
        "hoursForDate": "10:00–23:00 (verificato su lego.com)",
        "hoursStatus": "verified",
        "officialUrl": "https://www.lego.com/",
        "category": "shopping",
        "weather": "indoor",
        "status": "planned",
        "priority": "media",
        "nearby": [
          {
            "id": "d2-12-nb-1",
            "name": "Le Passage Enchanté d’Aladdin",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 1577,
            "distanceLabel": "1.6 km (~23 min)",
            "description": "Percorso pedonale al coperto con diorami di Aladdin (Adventureland).",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Passage%20Enchant%C3%A9%20d%E2%80%99Aladdin%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Le%20Passage%20Enchant%C3%A9%20d%E2%80%99Aladdin",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-12-nb-2",
            "name": "Le Pays des Contes de Fées",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 1577,
            "distanceLabel": "1.6 km (~23 min)",
            "description": "Giro tranquillo in barca tra scene in miniatura delle fiabe.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Pays%20des%20Contes%20de%20F%C3%A9es%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Le%20Pays%20des%20Contes%20de%20F%C3%A9es",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-12-nb-3",
            "name": "Alice’s Curious Labyrinth",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 1577,
            "distanceLabel": "1.6 km (~23 min)",
            "description": "Labirinto di siepi ispirato ad Alice nel Paese delle Meraviglie.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Alice%E2%80%99s%20Curious%20Labyrinth%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Alice%E2%80%99s%20Curious%20Labyrinth",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d2-12-nb-4",
            "name": "Les Voyages de Pinocchio",
            "address": "Disneyland Paris",
            "coordinates": {
              "lat": 48.869509,
              "lon": 2.777768
            },
            "distanceMeters": 1577,
            "distanceLabel": "1.6 km (~23 min)",
            "description": "Dark ride classica al coperto a Fantasyland.",
            "category": "disney",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Les%20Voyages%20de%20Pinocchio%20Disneyland%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Les%20Voyages%20de%20Pinocchio",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=LEGO%20Store%20LEGO%20Store%20Disney%20Village%2C%20Chessy",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.881276%2C2.765727&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.881276%2C2.765727&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.881276,2.765727&endname=LEGO%20Store",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      }
    ]
  },
  {
    "date": "2026-12-09",
    "dayNumber": 3,
    "title": "Parigi medievale e Senna",
    "subtitle": "Mercoledì 9 Dicembre · Giorno 3",
    "transport": "Metro 12 Mairie d’Issy fino a Concorde, metro 1 Château de Vincennes fino a Châtelet, poi a piedi. Rientro da Châtelet via Concorde.",
    "rain": {
      "light": "Portici Marais, pause al caldo",
      "heavy": "Sainte-Chapelle, Notre-Dame, Conciergerie o Maison de Victor Hugo (verificare), crociera se operativa e coperta"
    },
    "foodIdeas": [
      "Mercatino: 20–36 € in due",
      "L’As du Fallafel o Miznon: 20–44 € in due",
      "Fred: 6–12 € in due",
      "Cena zona Pont Neuf/Lombards: 30–50 €; jazz extra 28–65 €"
    ],
    "activities": [
      {
        "id": "d3-1",
        "dayDate": "2026-12-09",
        "time": "09:30",
        "timeStatus": "indicative",
        "durationMinutes": 60,
        "name": "Sainte-Chapelle",
        "address": "10 Boulevard du Palais, Paris",
        "coordinates": {
          "lat": 48.85465,
          "lon": 2.34494
        },
        "description": "Cappella gotica di Luigi IX; vetrate e rosone. Arrivare 30 min prima.",
        "shortHistory": "Gioiello del gotico rayonnant fatto costruire da Luigi IX nel XIII secolo per custodire le reliquie della Passione.",
        "curiosities": [
          "Si trova nel perimetro del Palais de Justice: controlli di sicurezza severi, arrivare 30 min prima."
        ],
        "whatToSee": [
          "Cappella superiore con 15 vetrate alte 15 metri",
          "Rosone dell'Apocalisse"
        ],
        "photoSpot": "Centro della cappella superiore guardando verso il coro.",
        "entryAndPrice": "Biglietto già prenotato (verificare orario sul voucher)",
        "priceStatus": "user_confirmed",
        "hoursForDate": "Dicembre: 09:00–17:00 (ultimo ingresso 16:00/16:15)",
        "hoursStatus": "verified",
        "officialUrl": "https://www.sainte-chapelle.fr/",
        "category": "monumento",
        "weather": "indoor",
        "status": "booked_time_unknown",
        "priority": "alta",
        "nearby": [
          {
            "id": "d3-1-nb-1",
            "name": "Conciergerie",
            "address": "2 Boulevard du Palais, Paris",
            "coordinates": {
              "lat": 48.855681,
              "lon": 2.34592
            },
            "distanceMeters": 135,
            "distanceLabel": "135 m (~2 min)",
            "description": "Antico palazzo reale e prigione della Rivoluzione (Maria Antonietta).",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Paris%2C_Conciergerie_--_2014_--_1320.jpg/960px-Paris%2C_Conciergerie_--_2014_--_1320.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/conciergerie.jpg",
              "author": "Dietmar Rabich",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris,_Conciergerie_--_2014_--_1320.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Conciergerie%202%20Boulevard%20du%20Palais%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.855681%2C2.34592&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.855681%2C2.34592&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.855681,2.34592&endname=Conciergerie",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d3-1-nb-3",
            "name": "Shakespeare and Company",
            "address": "37 Rue de la Bûcherie, Paris",
            "coordinates": {
              "lat": 48.852589,
              "lon": 2.347107
            },
            "distanceMeters": 279,
            "distanceLabel": "279 m (~4 min)",
            "description": "Storica libreria anglofona affacciata su Notre-Dame.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Shakespeare_and_Company%2C_Paris_1.jpg/960px-Shakespeare_and_Company%2C_Paris_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/shakespeare-and-company.jpg",
              "author": "Photograph by Mike Peel (www.mikepeel.net).",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Shakespeare_and_Company,_Paris_1.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Shakespeare%20and%20Company%2037%20Rue%20de%20la%20B%C3%BBcherie%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.852589%2C2.347107&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.852589%2C2.347107&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.852589,2.347107&endname=Shakespeare%20and%20Company",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d3-1-nb-2",
            "name": "Place Dauphine",
            "address": "Place Dauphine, Paris",
            "coordinates": {
              "lat": 48.856616,
              "lon": 2.342374
            },
            "distanceMeters": 288,
            "distanceLabel": "288 m (~4 min)",
            "description": "Piazzetta triangolare tranquilla all'estremità dell'Île de la Cité.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Paris_Place_Dauphine.jpg/960px-Paris_Place_Dauphine.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/place-dauphine.jpg",
              "author": "Myrabella",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris_Place_Dauphine.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Place%20Dauphine%20Place%20Dauphine%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.856616%2C2.342374&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.856616%2C2.342374&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.856616,2.342374&endname=Place%20Dauphine",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Santa_Capilla%2C_Par%C3%ADs%2C_Francia%2C_2022-11-01%2C_DD_80-82_HDR.jpg/960px-Santa_Capilla%2C_Par%C3%ADs%2C_Francia%2C_2022-11-01%2C_DD_80-82_HDR.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/sainte-chapelle.jpg",
          "author": "Diego Delso",
          "license": "CC BY-SA 4.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Santa_Capilla,_Par%C3%ADs,_Francia,_2022-11-01,_DD_80-82_HDR.jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Sainte-Chapelle%2010%20Boulevard%20du%20Palais%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.85465%2C2.34494&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.85465%2C2.34494&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.85465,2.34494&endname=Sainte-Chapelle",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d3-2",
        "dayDate": "2026-12-09",
        "time": "11:00",
        "timeStatus": "indicative",
        "durationMinutes": 50,
        "name": "Notre-Dame",
        "address": "6 Parvis Notre-Dame, Paris",
        "coordinates": {
          "lat": 48.304419,
          "lon": -0.618129
        },
        "description": "Cattedrale gotica; visita interna gratuita, prenotazione gratuita facoltativa da verificare.",
        "shortHistory": "Cattedrale gotica simbolo di Parigi sull'Île de la Cité, riaperta dopo il grande restauro.",
        "curiosities": [
          "L'ingresso alla cattedrale è gratuito; le prenotazioni gratuite a fascia oraria aprono pochi giorni prima su notredamedeparis.fr."
        ],
        "whatToSee": [
          "Facciata occidentale e portali",
          "Navata gotica e rosoni restaurati"
        ],
        "photoSpot": "Parvis Notre-Dame o dal Pont au Double.",
        "entryAndPrice": "Ingresso gratuito",
        "priceStatus": "verified",
        "hoursForDate": "Mercoledì 9 dic: 07:55–19:00 (ultimo ingresso 18:30)",
        "hoursStatus": "verified",
        "officialUrl": "https://www.notredamedeparis.fr/",
        "category": "monumento",
        "weather": "indoor",
        "status": "planned",
        "priority": "alta",
        "nearby": [
          {
            "id": "d3-2-nb-2",
            "name": "Place Dauphine",
            "address": "Place Dauphine, Paris",
            "coordinates": {
              "lat": 48.856616,
              "lon": 2.342374
            },
            "distanceMeters": 226256,
            "distanceLabel": "226.3 km (~3232 min)",
            "description": "Piazzetta triangolare tranquilla all'estremità dell'Île de la Cité.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Paris_Place_Dauphine.jpg/960px-Paris_Place_Dauphine.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/place-dauphine.jpg",
              "author": "Myrabella",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris_Place_Dauphine.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Place%20Dauphine%20Place%20Dauphine%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.856616%2C2.342374&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.856616%2C2.342374&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.856616,2.342374&endname=Place%20Dauphine",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d3-2-nb-5",
            "name": "Galerie Vivienne",
            "address": "4 Rue des Petits Champs, Paris",
            "coordinates": {
              "lat": 48.866215,
              "lon": 2.339481
            },
            "distanceMeters": 226324,
            "distanceLabel": "226.3 km (~3233 min)",
            "description": "Elegante passaggio coperto ottocentesco con mosaici e librerie.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Galerie_Vivienne%2C_12_March_2015.jpg/960px-Galerie_Vivienne%2C_12_March_2015.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/galerie-vivienne.jpg",
              "author": "Benh LIEU SONG",
              "license": "CC BY-SA 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Galerie_Vivienne,_12_March_2015.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Galerie%20Vivienne%204%20Rue%20des%20Petits%20Champs%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.866215%2C2.339481&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.866215%2C2.339481&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.866215,2.339481&endname=Galerie%20Vivienne",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d3-2-nb-3",
            "name": "Shakespeare and Company",
            "address": "37 Rue de la Bûcherie, Paris",
            "coordinates": {
              "lat": 48.852589,
              "lon": 2.347107
            },
            "distanceMeters": 226479,
            "distanceLabel": "226.5 km (~3235 min)",
            "description": "Storica libreria anglofona affacciata su Notre-Dame.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Shakespeare_and_Company%2C_Paris_1.jpg/960px-Shakespeare_and_Company%2C_Paris_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/shakespeare-and-company.jpg",
              "author": "Photograph by Mike Peel (www.mikepeel.net).",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Shakespeare_and_Company,_Paris_1.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Shakespeare%20and%20Company%2037%20Rue%20de%20la%20B%C3%BBcherie%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.852589%2C2.347107&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.852589%2C2.347107&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.852589,2.347107&endname=Shakespeare%20and%20Company",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Paris%2C_Notre_Dame_--_2014_--_1458-65.jpg/960px-Paris%2C_Notre_Dame_--_2014_--_1458-65.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/notre-dame.jpg",
          "author": "Dietmar Rabich",
          "license": "CC BY-SA 4.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris,_Notre_Dame_--_2014_--_1458-65.jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Notre-Dame%206%20Parvis%20Notre-Dame%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.304419%2C-0.618129&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.304419%2C-0.618129&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.304419,-0.618129&endname=Notre-Dame",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d3-3",
        "dayDate": "2026-12-09",
        "time": "12:00",
        "timeStatus": "indicative",
        "durationMinutes": 30,
        "name": "Mercatino Notre-Dame",
        "address": "Square René Viviani, Paris",
        "coordinates": {
          "lat": 48.840775,
          "lon": 2.349204
        },
        "description": "Artigianato e gastronomia natalizia; date specifiche da verificare.",
        "shortHistory": "Mercatino di Natale artigianale nello Square René-Viviani, affacciato su Notre-Dame.",
        "curiosities": [
          "Edizione 2026 confermata dal 26 novembre al 27 dicembre 2026."
        ],
        "whatToSee": [
          "Artigianato francese",
          "Dolci e bevande calde analcoliche"
        ],
        "photoSpot": "Tra le casette in legno con Notre-Dame sullo sfondo.",
        "entryAndPrice": "Accesso libero (consumazioni stimate 20–36 € in due)",
        "priceStatus": "estimate",
        "hoursForDate": "26 nov – 27 dic 2026 (verificato)",
        "hoursStatus": "verified",
        "officialUrl": "https://www.marche-de-noel-paris-notre-dame.fr/",
        "category": "shopping",
        "weather": "outdoor",
        "status": "optional",
        "priority": "bassa",
        "nearby": [
          {
            "id": "d3-3-nb-3",
            "name": "Shakespeare and Company",
            "address": "37 Rue de la Bûcherie, Paris",
            "coordinates": {
              "lat": 48.852589,
              "lon": 2.347107
            },
            "distanceMeters": 1323,
            "distanceLabel": "1.3 km (~19 min)",
            "description": "Storica libreria anglofona affacciata su Notre-Dame.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Shakespeare_and_Company%2C_Paris_1.jpg/960px-Shakespeare_and_Company%2C_Paris_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/shakespeare-and-company.jpg",
              "author": "Photograph by Mike Peel (www.mikepeel.net).",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Shakespeare_and_Company,_Paris_1.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Shakespeare%20and%20Company%2037%20Rue%20de%20la%20B%C3%BBcherie%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.852589%2C2.347107&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.852589%2C2.347107&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.852589,2.347107&endname=Shakespeare%20and%20Company",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d3-3-nb-1",
            "name": "Conciergerie",
            "address": "2 Boulevard du Palais, Paris",
            "coordinates": {
              "lat": 48.855681,
              "lon": 2.34592
            },
            "distanceMeters": 1675,
            "distanceLabel": "1.7 km (~24 min)",
            "description": "Antico palazzo reale e prigione della Rivoluzione (Maria Antonietta).",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Paris%2C_Conciergerie_--_2014_--_1320.jpg/960px-Paris%2C_Conciergerie_--_2014_--_1320.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/conciergerie.jpg",
              "author": "Dietmar Rabich",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris,_Conciergerie_--_2014_--_1320.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Conciergerie%202%20Boulevard%20du%20Palais%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.855681%2C2.34592&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.855681%2C2.34592&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.855681,2.34592&endname=Conciergerie",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d3-3-nb-2",
            "name": "Place Dauphine",
            "address": "Place Dauphine, Paris",
            "coordinates": {
              "lat": 48.856616,
              "lon": 2.342374
            },
            "distanceMeters": 1831,
            "distanceLabel": "1.8 km (~26 min)",
            "description": "Piazzetta triangolare tranquilla all'estremità dell'Île de la Cité.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Paris_Place_Dauphine.jpg/960px-Paris_Place_Dauphine.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/place-dauphine.jpg",
              "author": "Myrabella",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris_Place_Dauphine.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Place%20Dauphine%20Place%20Dauphine%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.856616%2C2.342374&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.856616%2C2.342374&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.856616,2.342374&endname=Place%20Dauphine",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Mercatino%20Notre-Dame%20Square%20Ren%C3%A9%20Viviani%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.840775%2C2.349204&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.840775%2C2.349204&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.840775,2.349204&endname=Mercatino%20Notre-Dame",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d3-4",
        "dayDate": "2026-12-09",
        "time": "12:30",
        "timeStatus": "indicative",
        "durationMinutes": 60,
        "name": "Pranzo",
        "address": "Quartier Latin, Paris",
        "coordinates": {
          "lat": 46.351691,
          "lon": 1.393468
        },
        "description": "Mercatino oppure pranzo al chiuso; falafel nel Marais se si anticipa la passeggiata.",
        "shortHistory": "Mercatino oppure pranzo al chiuso; falafel nel Marais se si anticipa la passeggiata.",
        "curiosities": [],
        "whatToSee": [],
        "photoSpot": "Scorcio principale della tappa.",
        "entryAndPrice": "Da verificare",
        "priceStatus": "to_verify",
        "hoursForDate": "Orario da verificare",
        "hoursStatus": "to_verify",
        "officialUrl": null,
        "category": "monumento",
        "weather": "mixed",
        "status": "optional",
        "priority": "media",
        "nearby": [
          {
            "id": "d3-4-nb-3",
            "name": "Shakespeare and Company",
            "address": "37 Rue de la Bûcherie, Paris",
            "coordinates": {
              "lat": 48.852589,
              "lon": 2.347107
            },
            "distanceMeters": 287125,
            "distanceLabel": "287.1 km (~4102 min)",
            "description": "Storica libreria anglofona affacciata su Notre-Dame.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Shakespeare_and_Company%2C_Paris_1.jpg/960px-Shakespeare_and_Company%2C_Paris_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/shakespeare-and-company.jpg",
              "author": "Photograph by Mike Peel (www.mikepeel.net).",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Shakespeare_and_Company,_Paris_1.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Shakespeare%20and%20Company%2037%20Rue%20de%20la%20B%C3%BBcherie%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.852589%2C2.347107&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.852589%2C2.347107&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.852589,2.347107&endname=Shakespeare%20and%20Company",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d3-4-nb-1",
            "name": "Conciergerie",
            "address": "2 Boulevard du Palais, Paris",
            "coordinates": {
              "lat": 48.855681,
              "lon": 2.34592
            },
            "distanceMeters": 287436,
            "distanceLabel": "287.4 km (~4106 min)",
            "description": "Antico palazzo reale e prigione della Rivoluzione (Maria Antonietta).",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Paris%2C_Conciergerie_--_2014_--_1320.jpg/960px-Paris%2C_Conciergerie_--_2014_--_1320.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/conciergerie.jpg",
              "author": "Dietmar Rabich",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris,_Conciergerie_--_2014_--_1320.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Conciergerie%202%20Boulevard%20du%20Palais%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.855681%2C2.34592&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.855681%2C2.34592&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.855681,2.34592&endname=Conciergerie",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d3-4-nb-2",
            "name": "Place Dauphine",
            "address": "Place Dauphine, Paris",
            "coordinates": {
              "lat": 48.856616,
              "lon": 2.342374
            },
            "distanceMeters": 287470,
            "distanceLabel": "287.5 km (~4107 min)",
            "description": "Piazzetta triangolare tranquilla all'estremità dell'Île de la Cité.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Paris_Place_Dauphine.jpg/960px-Paris_Place_Dauphine.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/place-dauphine.jpg",
              "author": "Myrabella",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris_Place_Dauphine.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Place%20Dauphine%20Place%20Dauphine%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.856616%2C2.342374&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.856616%2C2.342374&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.856616,2.342374&endname=Place%20Dauphine",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Pranzo%20Quartier%20Latin%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=46.351691%2C1.393468&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=46.351691%2C1.393468&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=46.351691,1.393468&endname=Pranzo",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d3-5",
        "dayDate": "2026-12-09",
        "time": "13:30",
        "timeStatus": "indicative",
        "durationMinutes": 30,
        "name": "Île Saint-Louis",
        "address": "Rue Saint-Louis en l’Île, Paris",
        "coordinates": {
          "lat": 48.851888,
          "lon": 2.356405
        },
        "description": "Botteghe e scorci della Senna.",
        "shortHistory": "L'isola più raccolta e residenziale sulla Senna, collegata all'Île de la Cité dal Pont Saint-Louis.",
        "curiosities": [
          "Mantiene un'atmosfera da piccolo villaggio seicentesco nel cuore di Parigi."
        ],
        "whatToSee": [
          "Rue Saint-Louis en l'Île",
          "Scorci romantici sui lungosenna"
        ],
        "photoSpot": "Pont Saint-Louis o Quai de Bourbon.",
        "entryAndPrice": "Accesso libero",
        "priceStatus": "verified",
        "hoursForDate": "Sempre accessibile",
        "hoursStatus": "verified",
        "officialUrl": null,
        "category": "quartiere",
        "weather": "outdoor",
        "status": "planned",
        "priority": "media",
        "nearby": [
          {
            "id": "d3-5-nb-3",
            "name": "Shakespeare and Company",
            "address": "37 Rue de la Bûcherie, Paris",
            "coordinates": {
              "lat": 48.852589,
              "lon": 2.347107
            },
            "distanceMeters": 685,
            "distanceLabel": "685 m (~10 min)",
            "description": "Storica libreria anglofona affacciata su Notre-Dame.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Shakespeare_and_Company%2C_Paris_1.jpg/960px-Shakespeare_and_Company%2C_Paris_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/shakespeare-and-company.jpg",
              "author": "Photograph by Mike Peel (www.mikepeel.net).",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Shakespeare_and_Company,_Paris_1.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Shakespeare%20and%20Company%2037%20Rue%20de%20la%20B%C3%BBcherie%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.852589%2C2.347107&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.852589%2C2.347107&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.852589,2.347107&endname=Shakespeare%20and%20Company",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d3-5-nb-4",
            "name": "Maison de Victor Hugo",
            "address": "6 Place des Vosges, Paris",
            "coordinates": {
              "lat": 48.854821,
              "lon": 2.366132
            },
            "distanceMeters": 783,
            "distanceLabel": "783 m (~11 min)",
            "description": "Casa-museo dello scrittore su Place des Vosges (collezione permanente gratuita).",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg/960px-Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/maison-de-victor-hugo.jpg",
              "author": "Étienne Carjat",
              "license": "Public domain",
              "licenseUrl": "",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Maison%20de%20Victor%20Hugo%206%20Place%20des%20Vosges%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.854821%2C2.366132&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.854821%2C2.366132&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.854821,2.366132&endname=Maison%20de%20Victor%20Hugo",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d3-5-nb-1",
            "name": "Conciergerie",
            "address": "2 Boulevard du Palais, Paris",
            "coordinates": {
              "lat": 48.855681,
              "lon": 2.34592
            },
            "distanceMeters": 875,
            "distanceLabel": "875 m (~12 min)",
            "description": "Antico palazzo reale e prigione della Rivoluzione (Maria Antonietta).",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Paris%2C_Conciergerie_--_2014_--_1320.jpg/960px-Paris%2C_Conciergerie_--_2014_--_1320.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/conciergerie.jpg",
              "author": "Dietmar Rabich",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris,_Conciergerie_--_2014_--_1320.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Conciergerie%202%20Boulevard%20du%20Palais%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.855681%2C2.34592&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.855681%2C2.34592&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.855681,2.34592&endname=Conciergerie",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Saint-Paul-Saint-Louis_Church_Interior_1%2C_Paris%2C_France.jpg/960px-Saint-Paul-Saint-Louis_Church_Interior_1%2C_Paris%2C_France.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/ile-saint-louis.jpg",
          "author": "Diliff",
          "license": "CC BY-SA 3.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Saint-Paul-Saint-Louis_Church_Interior_1,_Paris,_France.jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=%C3%8Ele%20Saint-Louis%20Rue%20Saint-Louis%20en%20l%E2%80%99%C3%8Ele%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.851888%2C2.356405&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.851888%2C2.356405&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.851888,2.356405&endname=%C3%8Ele%20Saint-Louis",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d3-6",
        "dayDate": "2026-12-09",
        "time": "14:00",
        "timeStatus": "indicative",
        "durationMinutes": 20,
        "name": "Aux Merveilleux de Fred",
        "address": "24 Rue du Pont Louis-Philippe, Paris",
        "coordinates": {
          "lat": 48.855701,
          "lon": 2.356363
        },
        "description": "Cramique al cioccolato e mini merveilleux; sede da riconfermare.",
        "shortHistory": "Celebre pasticceria di origine fiamminga fondata da Frédéric Vaucamps.",
        "curiosities": [
          "Sede di 24 Rue du Pont Louis-Philippe verificata; i dolci vengono preparati a vista."
        ],
        "whatToSee": [
          "Cramique al cioccolato (brioche soffice)",
          "Mini Merveilleux (meringa, panna e scaglie di cioccolato)"
        ],
        "photoSpot": "Lampadario di cristallo in vetrina.",
        "entryAndPrice": "Stima 6–12 € in due",
        "priceStatus": "estimate",
        "hoursForDate": "Tutti i giorni 07:30–20:00 (verificato)",
        "hoursStatus": "verified",
        "officialUrl": "https://auxmerveilleux.fr/",
        "category": "gastronomia",
        "weather": "indoor",
        "status": "planned",
        "priority": "alta",
        "nearby": [
          {
            "id": "d3-6-nb-4",
            "name": "Maison de Victor Hugo",
            "address": "6 Place des Vosges, Paris",
            "coordinates": {
              "lat": 48.854821,
              "lon": 2.366132
            },
            "distanceMeters": 721,
            "distanceLabel": "721 m (~10 min)",
            "description": "Casa-museo dello scrittore su Place des Vosges (collezione permanente gratuita).",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg/960px-Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/maison-de-victor-hugo.jpg",
              "author": "Étienne Carjat",
              "license": "Public domain",
              "licenseUrl": "",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Maison%20de%20Victor%20Hugo%206%20Place%20des%20Vosges%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.854821%2C2.366132&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.854821%2C2.366132&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.854821,2.366132&endname=Maison%20de%20Victor%20Hugo",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d3-6-nb-3",
            "name": "Shakespeare and Company",
            "address": "37 Rue de la Bûcherie, Paris",
            "coordinates": {
              "lat": 48.852589,
              "lon": 2.347107
            },
            "distanceMeters": 760,
            "distanceLabel": "760 m (~11 min)",
            "description": "Storica libreria anglofona affacciata su Notre-Dame.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Shakespeare_and_Company%2C_Paris_1.jpg/960px-Shakespeare_and_Company%2C_Paris_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/shakespeare-and-company.jpg",
              "author": "Photograph by Mike Peel (www.mikepeel.net).",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Shakespeare_and_Company,_Paris_1.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Shakespeare%20and%20Company%2037%20Rue%20de%20la%20B%C3%BBcherie%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.852589%2C2.347107&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.852589%2C2.347107&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.852589,2.347107&endname=Shakespeare%20and%20Company",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d3-6-nb-1",
            "name": "Conciergerie",
            "address": "2 Boulevard du Palais, Paris",
            "coordinates": {
              "lat": 48.855681,
              "lon": 2.34592
            },
            "distanceMeters": 764,
            "distanceLabel": "764 m (~11 min)",
            "description": "Antico palazzo reale e prigione della Rivoluzione (Maria Antonietta).",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Paris%2C_Conciergerie_--_2014_--_1320.jpg/960px-Paris%2C_Conciergerie_--_2014_--_1320.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/conciergerie.jpg",
              "author": "Dietmar Rabich",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris,_Conciergerie_--_2014_--_1320.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Conciergerie%202%20Boulevard%20du%20Palais%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.855681%2C2.34592&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.855681%2C2.34592&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.855681,2.34592&endname=Conciergerie",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Galerie_B%C3%A9raudier%2C_p%C3%A2tisserie_Aux_Merveilleux_de_Fred.jpg/960px-Galerie_B%C3%A9raudier%2C_p%C3%A2tisserie_Aux_Merveilleux_de_Fred.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/aux-merveilleux-de-fred.jpg",
          "author": "TCY",
          "license": "CC BY-SA 4.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Galerie_B%C3%A9raudier,_p%C3%A2tisserie_Aux_Merveilleux_de_Fred.jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Aux%20Merveilleux%20de%20Fred%2024%20Rue%20du%20Pont%20Louis-Philippe%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.855701%2C2.356363&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.855701%2C2.356363&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.855701,2.356363&endname=Aux%20Merveilleux%20de%20Fred",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d3-7",
        "dayDate": "2026-12-09",
        "time": "14:30",
        "timeStatus": "indicative",
        "durationMinutes": 10,
        "name": "Rue François-Miron",
        "address": "11 Rue François-Miron, Paris",
        "coordinates": {
          "lat": 48.855821,
          "lon": 2.356803
        },
        "description": "Case a graticcio ai civici 11 e 13.",
        "shortHistory": "Una delle strade più antiche del Marais, con rare case medievali a graticcio ai civici 11 e 13.",
        "curiosities": [
          "Testimonianza rarissima della Parigi medievale precedente ai grandi sventramenti ottocenteschi."
        ],
        "whatToSee": [
          "Facciate medievali a graticcio (civici 11 e 13)"
        ],
        "photoSpot": "Marciapiede opposto ai civici 11–13.",
        "entryAndPrice": "Esterno gratuito",
        "priceStatus": "verified",
        "hoursForDate": "Sempre visibile",
        "hoursStatus": "verified",
        "officialUrl": null,
        "category": "quartiere",
        "weather": "outdoor",
        "status": "optional",
        "priority": "bassa",
        "nearby": [
          {
            "id": "d3-7-nb-4",
            "name": "Maison de Victor Hugo",
            "address": "6 Place des Vosges, Paris",
            "coordinates": {
              "lat": 48.854821,
              "lon": 2.366132
            },
            "distanceMeters": 692,
            "distanceLabel": "692 m (~10 min)",
            "description": "Casa-museo dello scrittore su Place des Vosges (collezione permanente gratuita).",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg/960px-Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/maison-de-victor-hugo.jpg",
              "author": "Étienne Carjat",
              "license": "Public domain",
              "licenseUrl": "",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Maison%20de%20Victor%20Hugo%206%20Place%20des%20Vosges%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.854821%2C2.366132&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.854821%2C2.366132&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.854821,2.366132&endname=Maison%20de%20Victor%20Hugo",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d3-7-nb-3",
            "name": "Shakespeare and Company",
            "address": "37 Rue de la Bûcherie, Paris",
            "coordinates": {
              "lat": 48.852589,
              "lon": 2.347107
            },
            "distanceMeters": 795,
            "distanceLabel": "795 m (~11 min)",
            "description": "Storica libreria anglofona affacciata su Notre-Dame.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Shakespeare_and_Company%2C_Paris_1.jpg/960px-Shakespeare_and_Company%2C_Paris_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/shakespeare-and-company.jpg",
              "author": "Photograph by Mike Peel (www.mikepeel.net).",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Shakespeare_and_Company,_Paris_1.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Shakespeare%20and%20Company%2037%20Rue%20de%20la%20B%C3%BBcherie%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.852589%2C2.347107&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.852589%2C2.347107&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.852589,2.347107&endname=Shakespeare%20and%20Company",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d3-7-nb-1",
            "name": "Conciergerie",
            "address": "2 Boulevard du Palais, Paris",
            "coordinates": {
              "lat": 48.855681,
              "lon": 2.34592
            },
            "distanceMeters": 796,
            "distanceLabel": "796 m (~11 min)",
            "description": "Antico palazzo reale e prigione della Rivoluzione (Maria Antonietta).",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Paris%2C_Conciergerie_--_2014_--_1320.jpg/960px-Paris%2C_Conciergerie_--_2014_--_1320.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/conciergerie.jpg",
              "author": "Dietmar Rabich",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris,_Conciergerie_--_2014_--_1320.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Conciergerie%202%20Boulevard%20du%20Palais%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.855681%2C2.34592&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.855681%2C2.34592&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.855681,2.34592&endname=Conciergerie",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Rue%20Fran%C3%A7ois-Miron%2011%20Rue%20Fran%C3%A7ois-Miron%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.855821%2C2.356803&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.855821%2C2.356803&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.855821,2.356803&endname=Rue%20Fran%C3%A7ois-Miron",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d3-8",
        "dayDate": "2026-12-09",
        "time": "15:00",
        "timeStatus": "indicative",
        "durationMinutes": 30,
        "name": "Rue des Rosiers",
        "address": "Rue des Rosiers, Paris",
        "coordinates": {
          "lat": 48.857161,
          "lon": 2.35949
        },
        "description": "Quartiere ebraico, falafel e boutique.",
        "shortHistory": "Cuore storico dello Pletzl, l'antico quartiere ebraico del Marais.",
        "curiosities": [
          "Qui si trovano L'As du Fallafel e Miznon (verificare orari/chiusure in giornata)."
        ],
        "whatToSee": [
          "Boutique indipendenti",
          "Storiche gastronomie di falafel"
        ],
        "photoSpot": "Insegne storiche lungo Rue des Rosiers.",
        "entryAndPrice": "Passeggiata libera (falafel stima 20–44 € in due)",
        "priceStatus": "estimate",
        "hoursForDate": "Pomeriggio vivace",
        "hoursStatus": "verified",
        "officialUrl": null,
        "category": "quartiere",
        "weather": "mixed",
        "status": "planned",
        "priority": "media",
        "nearby": [
          {
            "id": "d3-8-nb-4",
            "name": "Maison de Victor Hugo",
            "address": "6 Place des Vosges, Paris",
            "coordinates": {
              "lat": 48.854821,
              "lon": 2.366132
            },
            "distanceMeters": 551,
            "distanceLabel": "551 m (~8 min)",
            "description": "Casa-museo dello scrittore su Place des Vosges (collezione permanente gratuita).",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg/960px-Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/maison-de-victor-hugo.jpg",
              "author": "Étienne Carjat",
              "license": "Public domain",
              "licenseUrl": "",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Maison%20de%20Victor%20Hugo%206%20Place%20des%20Vosges%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.854821%2C2.366132&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.854821%2C2.366132&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.854821,2.366132&endname=Maison%20de%20Victor%20Hugo",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d3-8-nb-1",
            "name": "Conciergerie",
            "address": "2 Boulevard du Palais, Paris",
            "coordinates": {
              "lat": 48.855681,
              "lon": 2.34592
            },
            "distanceMeters": 1006,
            "distanceLabel": "1.0 km (~14 min)",
            "description": "Antico palazzo reale e prigione della Rivoluzione (Maria Antonietta).",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Paris%2C_Conciergerie_--_2014_--_1320.jpg/960px-Paris%2C_Conciergerie_--_2014_--_1320.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/conciergerie.jpg",
              "author": "Dietmar Rabich",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris,_Conciergerie_--_2014_--_1320.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Conciergerie%202%20Boulevard%20du%20Palais%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.855681%2C2.34592&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.855681%2C2.34592&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.855681,2.34592&endname=Conciergerie",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d3-8-nb-3",
            "name": "Shakespeare and Company",
            "address": "37 Rue de la Bûcherie, Paris",
            "coordinates": {
              "lat": 48.852589,
              "lon": 2.347107
            },
            "distanceMeters": 1039,
            "distanceLabel": "1.0 km (~15 min)",
            "description": "Storica libreria anglofona affacciata su Notre-Dame.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Shakespeare_and_Company%2C_Paris_1.jpg/960px-Shakespeare_and_Company%2C_Paris_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/shakespeare-and-company.jpg",
              "author": "Photograph by Mike Peel (www.mikepeel.net).",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Shakespeare_and_Company,_Paris_1.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Shakespeare%20and%20Company%2037%20Rue%20de%20la%20B%C3%BBcherie%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.852589%2C2.347107&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.852589%2C2.347107&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.852589,2.347107&endname=Shakespeare%20and%20Company",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Rue%20des%20Rosiers%20Rue%20des%20Rosiers%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.857161%2C2.35949&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.857161%2C2.35949&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.857161,2.35949&endname=Rue%20des%20Rosiers",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d3-9",
        "dayDate": "2026-12-09",
        "time": "16:00",
        "timeStatus": "indicative",
        "durationMinutes": 30,
        "name": "Place des Vosges",
        "address": "Place des Vosges, Paris",
        "coordinates": {
          "lat": 48.855326,
          "lon": 2.36552
        },
        "description": "Piazza seicentesca con portici riparati.",
        "shortHistory": "La piazza reale più antica di Parigi (1612), circondata da 36 palazzi in mattoni rossi e pietra.",
        "curiosities": [
          "Al civico 6 visse Victor Hugo (Maison de Victor Hugo, ingresso permanente gratuito)."
        ],
        "whatToSee": [
          "Portici coperti (ottimi in caso di pioggia lieve)",
          "Giardino centrale simmetrico"
        ],
        "photoSpot": "Sotto le arcate in mattoni rossi.",
        "entryAndPrice": "Accesso libero",
        "priceStatus": "verified",
        "hoursForDate": "Sempre accessibile",
        "hoursStatus": "verified",
        "officialUrl": null,
        "category": "monumento",
        "weather": "mixed",
        "status": "optional",
        "priority": "media",
        "nearby": [
          {
            "id": "d3-9-nb-4",
            "name": "Maison de Victor Hugo",
            "address": "6 Place des Vosges, Paris",
            "coordinates": {
              "lat": 48.854821,
              "lon": 2.366132
            },
            "distanceMeters": 72,
            "distanceLabel": "72 m (~1 min)",
            "description": "Casa-museo dello scrittore su Place des Vosges (collezione permanente gratuita).",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg/960px-Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/maison-de-victor-hugo.jpg",
              "author": "Étienne Carjat",
              "license": "Public domain",
              "licenseUrl": "",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Maison%20de%20Victor%20Hugo%206%20Place%20des%20Vosges%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.854821%2C2.366132&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.854821%2C2.366132&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.854821,2.366132&endname=Maison%20de%20Victor%20Hugo",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d3-9-nb-3",
            "name": "Shakespeare and Company",
            "address": "37 Rue de la Bûcherie, Paris",
            "coordinates": {
              "lat": 48.852589,
              "lon": 2.347107
            },
            "distanceMeters": 1381,
            "distanceLabel": "1.4 km (~20 min)",
            "description": "Storica libreria anglofona affacciata su Notre-Dame.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Shakespeare_and_Company%2C_Paris_1.jpg/960px-Shakespeare_and_Company%2C_Paris_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/shakespeare-and-company.jpg",
              "author": "Photograph by Mike Peel (www.mikepeel.net).",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Shakespeare_and_Company,_Paris_1.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Shakespeare%20and%20Company%2037%20Rue%20de%20la%20B%C3%BBcherie%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.852589%2C2.347107&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.852589%2C2.347107&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.852589,2.347107&endname=Shakespeare%20and%20Company",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d3-9-nb-1",
            "name": "Conciergerie",
            "address": "2 Boulevard du Palais, Paris",
            "coordinates": {
              "lat": 48.855681,
              "lon": 2.34592
            },
            "distanceMeters": 1435,
            "distanceLabel": "1.4 km (~20 min)",
            "description": "Antico palazzo reale e prigione della Rivoluzione (Maria Antonietta).",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Paris%2C_Conciergerie_--_2014_--_1320.jpg/960px-Paris%2C_Conciergerie_--_2014_--_1320.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/conciergerie.jpg",
              "author": "Dietmar Rabich",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris,_Conciergerie_--_2014_--_1320.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Conciergerie%202%20Boulevard%20du%20Palais%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.855681%2C2.34592&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.855681%2C2.34592&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.855681,2.34592&endname=Conciergerie",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Place_des_Vosges%2C_Paris%2C_porte_du_n%C2%B0_15.JPG/960px-Place_des_Vosges%2C_Paris%2C_porte_du_n%C2%B0_15.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/place-des-vosges.jpg",
          "author": "Coyau",
          "license": "CC BY-SA 3.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Place_des_Vosges,_Paris,_porte_du_n%C2%B0_15.JPG",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Place%20des%20Vosges%20Place%20des%20Vosges%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.855326%2C2.36552&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.855326%2C2.36552&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.855326,2.36552&endname=Place%20des%20Vosges",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d3-10",
        "dayDate": "2026-12-09",
        "time": "17:00",
        "timeStatus": "indicative",
        "durationMinutes": 15,
        "name": "Hôtel de Ville",
        "address": "Place de l’Hôtel de Ville, Paris",
        "coordinates": {
          "lat": 48.854287,
          "lon": 2.356161
        },
        "description": "Municipio monumentale; decorazioni da verificare.",
        "shortHistory": "Sede del Comune di Parigi dal 1357, ricostruita in stile neorinascimentale nell'Ottocento.",
        "curiosities": [
          "In inverno la piazza ospita spesso installazioni luminose comunali."
        ],
        "whatToSee": [
          "Facciata monumentale",
          "Eventuali decorazioni natalizie sulla piazza"
        ],
        "photoSpot": "Piazza pedonale di fronte alla facciata.",
        "entryAndPrice": "Esterno gratuito",
        "priceStatus": "verified",
        "hoursForDate": "Sempre visibile",
        "hoursStatus": "verified",
        "officialUrl": "https://www.paris.fr/",
        "category": "monumento",
        "weather": "outdoor",
        "status": "optional",
        "priority": "bassa",
        "nearby": [
          {
            "id": "d3-10-nb-3",
            "name": "Shakespeare and Company",
            "address": "37 Rue de la Bûcherie, Paris",
            "coordinates": {
              "lat": 48.852589,
              "lon": 2.347107
            },
            "distanceMeters": 689,
            "distanceLabel": "689 m (~10 min)",
            "description": "Storica libreria anglofona affacciata su Notre-Dame.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Shakespeare_and_Company%2C_Paris_1.jpg/960px-Shakespeare_and_Company%2C_Paris_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/shakespeare-and-company.jpg",
              "author": "Photograph by Mike Peel (www.mikepeel.net).",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Shakespeare_and_Company,_Paris_1.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Shakespeare%20and%20Company%2037%20Rue%20de%20la%20B%C3%BBcherie%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.852589%2C2.347107&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.852589%2C2.347107&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.852589,2.347107&endname=Shakespeare%20and%20Company",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d3-10-nb-4",
            "name": "Maison de Victor Hugo",
            "address": "6 Place des Vosges, Paris",
            "coordinates": {
              "lat": 48.854821,
              "lon": 2.366132
            },
            "distanceMeters": 732,
            "distanceLabel": "732 m (~10 min)",
            "description": "Casa-museo dello scrittore su Place des Vosges (collezione permanente gratuita).",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg/960px-Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/maison-de-victor-hugo.jpg",
              "author": "Étienne Carjat",
              "license": "Public domain",
              "licenseUrl": "",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Maison%20de%20Victor%20Hugo%206%20Place%20des%20Vosges%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.854821%2C2.366132&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.854821%2C2.366132&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.854821,2.366132&endname=Maison%20de%20Victor%20Hugo",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d3-10-nb-1",
            "name": "Conciergerie",
            "address": "2 Boulevard du Palais, Paris",
            "coordinates": {
              "lat": 48.855681,
              "lon": 2.34592
            },
            "distanceMeters": 765,
            "distanceLabel": "765 m (~11 min)",
            "description": "Antico palazzo reale e prigione della Rivoluzione (Maria Antonietta).",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Paris%2C_Conciergerie_--_2014_--_1320.jpg/960px-Paris%2C_Conciergerie_--_2014_--_1320.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/conciergerie.jpg",
              "author": "Dietmar Rabich",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris,_Conciergerie_--_2014_--_1320.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Conciergerie%202%20Boulevard%20du%20Palais%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.855681%2C2.34592&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.855681%2C2.34592&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.855681,2.34592&endname=Conciergerie",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/H%C3%B4tel_Ville_Paris_burnt_Commune_1871.jpg/960px-H%C3%B4tel_Ville_Paris_burnt_Commune_1871.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/hotel-de-ville.jpg",
          "author": "Charles Marville",
          "license": "Public domain",
          "licenseUrl": "",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:H%C3%B4tel_Ville_Paris_burnt_Commune_1871.jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=H%C3%B4tel%20de%20Ville%20Place%20de%20l%E2%80%99H%C3%B4tel%20de%20Ville%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.854287%2C2.356161&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.854287%2C2.356161&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.854287,2.356161&endname=H%C3%B4tel%20de%20Ville",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d3-11",
        "dayDate": "2026-12-09",
        "time": "18:15",
        "timeStatus": "user_confirmed",
        "durationMinutes": 90,
        "name": "Crociera Pont Neuf",
        "address": "Square du Vert-Galant, Paris",
        "coordinates": {
          "lat": 48.862646,
          "lon": 2.340618
        },
        "description": "Presentarsi all’imbarco; partenza confermata 18:45. Rientro stimato 19:45.",
        "shortHistory": "Crociera di un'ora sulla Senna con partenza dalla punta occidentale dell'Île de la Cité.",
        "curiosities": [
          "Imbarco allo Square du Vert-Galant scendendo le scale dietro la statua di Enrico IV."
        ],
        "whatToSee": [
          "Navigazione notturna tra Louvre, Orsay, Notre-Dame e Torre Eiffel illuminata"
        ],
        "photoSpot": "Ponte del battello al passaggio sotto i ponti illuminati.",
        "entryAndPrice": "Già prenotata (coppia)",
        "priceStatus": "user_confirmed",
        "hoursForDate": "Imbarco 18:15 · Partenza confermata 18:45 (rientro ~19:45)",
        "hoursStatus": "verified",
        "officialUrl": "https://www.vedettesdupontneuf.com/",
        "category": "monumento",
        "weather": "mixed",
        "status": "confirmed",
        "priority": "alta",
        "nearby": [
          {
            "id": "d3-11-nb-5",
            "name": "Galerie Vivienne",
            "address": "4 Rue des Petits Champs, Paris",
            "coordinates": {
              "lat": 48.866215,
              "lon": 2.339481
            },
            "distanceMeters": 405,
            "distanceLabel": "405 m (~6 min)",
            "description": "Elegante passaggio coperto ottocentesco con mosaici e librerie.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Galerie_Vivienne%2C_12_March_2015.jpg/960px-Galerie_Vivienne%2C_12_March_2015.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/galerie-vivienne.jpg",
              "author": "Benh LIEU SONG",
              "license": "CC BY-SA 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Galerie_Vivienne,_12_March_2015.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Galerie%20Vivienne%204%20Rue%20des%20Petits%20Champs%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.866215%2C2.339481&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.866215%2C2.339481&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.866215,2.339481&endname=Galerie%20Vivienne",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d3-11-nb-2",
            "name": "Place Dauphine",
            "address": "Place Dauphine, Paris",
            "coordinates": {
              "lat": 48.856616,
              "lon": 2.342374
            },
            "distanceMeters": 683,
            "distanceLabel": "683 m (~10 min)",
            "description": "Piazzetta triangolare tranquilla all'estremità dell'Île de la Cité.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Paris_Place_Dauphine.jpg/960px-Paris_Place_Dauphine.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/place-dauphine.jpg",
              "author": "Myrabella",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris_Place_Dauphine.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Place%20Dauphine%20Place%20Dauphine%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.856616%2C2.342374&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.856616%2C2.342374&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.856616,2.342374&endname=Place%20Dauphine",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d3-11-nb-1",
            "name": "Conciergerie",
            "address": "2 Boulevard du Palais, Paris",
            "coordinates": {
              "lat": 48.855681,
              "lon": 2.34592
            },
            "distanceMeters": 866,
            "distanceLabel": "866 m (~12 min)",
            "description": "Antico palazzo reale e prigione della Rivoluzione (Maria Antonietta).",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Paris%2C_Conciergerie_--_2014_--_1320.jpg/960px-Paris%2C_Conciergerie_--_2014_--_1320.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/conciergerie.jpg",
              "author": "Dietmar Rabich",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris,_Conciergerie_--_2014_--_1320.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Conciergerie%202%20Boulevard%20du%20Palais%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.855681%2C2.34592&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.855681%2C2.34592&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.855681,2.34592&endname=Conciergerie",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Square_du_Vert-Galant_%40_Pont_Neuf.jpg/960px-Square_du_Vert-Galant_%40_Pont_Neuf.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/crociera-pont-neuf.jpg",
          "author": "Rémih",
          "license": "CC BY-SA 4.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Square_du_Vert-Galant_@_Pont_Neuf.jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Crociera%20Pont%20Neuf%20Square%20du%20Vert-Galant%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.862646%2C2.340618&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.862646%2C2.340618&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.862646,2.340618&endname=Crociera%20Pont%20Neuf",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d3-12",
        "dayDate": "2026-12-09",
        "time": "20:00",
        "timeStatus": "indicative",
        "durationMinutes": 120,
        "name": "Cena e jazz",
        "address": "Rue des Lombards, Paris",
        "coordinates": {
          "lat": 48.859759,
          "lon": 2.347967
        },
        "description": "Cena con calma, jazz seduti se compatibile. Sunside o Caveau de la Huchette; programma da verificare.",
        "shortHistory": "Rue des Lombards è la via storica del jazz parigino, vicino a Châtelet.",
        "curiosities": [
          "Verificare il programma della sera del 9 dicembre e disponibilità posti seduti."
        ],
        "whatToSee": [
          "Sunset-Sunside o Caveau de la Huchette",
          "Cena tranquilla nei dintorni"
        ],
        "photoSpot": "Ingresso dei club su Rue des Lombards.",
        "entryAndPrice": "Cena 30–50 € + eventuale jazz 28–65 € (stima)",
        "priceStatus": "estimate",
        "hoursForDate": "Serale (da verificare su sito del club)",
        "hoursStatus": "to_verify",
        "officialUrl": "https://www.sunset-sunside.com/",
        "category": "gastronomia",
        "weather": "indoor",
        "status": "optional",
        "priority": "bassa",
        "nearby": [
          {
            "id": "d3-12-nb-1",
            "name": "Conciergerie",
            "address": "2 Boulevard du Palais, Paris",
            "coordinates": {
              "lat": 48.855681,
              "lon": 2.34592
            },
            "distanceMeters": 478,
            "distanceLabel": "478 m (~7 min)",
            "description": "Antico palazzo reale e prigione della Rivoluzione (Maria Antonietta).",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Paris%2C_Conciergerie_--_2014_--_1320.jpg/960px-Paris%2C_Conciergerie_--_2014_--_1320.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/conciergerie.jpg",
              "author": "Dietmar Rabich",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris,_Conciergerie_--_2014_--_1320.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Conciergerie%202%20Boulevard%20du%20Palais%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.855681%2C2.34592&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.855681%2C2.34592&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.855681,2.34592&endname=Conciergerie",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d3-12-nb-2",
            "name": "Place Dauphine",
            "address": "Place Dauphine, Paris",
            "coordinates": {
              "lat": 48.856616,
              "lon": 2.342374
            },
            "distanceMeters": 538,
            "distanceLabel": "538 m (~8 min)",
            "description": "Piazzetta triangolare tranquilla all'estremità dell'Île de la Cité.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Paris_Place_Dauphine.jpg/960px-Paris_Place_Dauphine.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/place-dauphine.jpg",
              "author": "Myrabella",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris_Place_Dauphine.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Place%20Dauphine%20Place%20Dauphine%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.856616%2C2.342374&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.856616%2C2.342374&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.856616,2.342374&endname=Place%20Dauphine",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d3-12-nb-3",
            "name": "Shakespeare and Company",
            "address": "37 Rue de la Bûcherie, Paris",
            "coordinates": {
              "lat": 48.852589,
              "lon": 2.347107
            },
            "distanceMeters": 800,
            "distanceLabel": "800 m (~11 min)",
            "description": "Storica libreria anglofona affacciata su Notre-Dame.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Shakespeare_and_Company%2C_Paris_1.jpg/960px-Shakespeare_and_Company%2C_Paris_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/shakespeare-and-company.jpg",
              "author": "Photograph by Mike Peel (www.mikepeel.net).",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Shakespeare_and_Company,_Paris_1.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Shakespeare%20and%20Company%2037%20Rue%20de%20la%20B%C3%BBcherie%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.852589%2C2.347107&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.852589%2C2.347107&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.852589,2.347107&endname=Shakespeare%20and%20Company",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Cena%20e%20jazz%20Rue%20des%20Lombards%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.859759%2C2.347967&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.859759%2C2.347967&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.859759,2.347967&endname=Cena%20e%20jazz",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      }
    ]
  },
  {
    "date": "2026-12-10",
    "dayNumber": 4,
    "title": "Monet e Torre Eiffel",
    "subtitle": "Giovedì 10 Dicembre · Giorno 4",
    "transport": "Metro 12 fino a Concorde; a piedi Orsay. RER C verso Champ de Mars–Tour Eiffel se in servizio oppure mezzi indicati da Citymapper. Metro 9 Trocadéro–Alma-Marceau, rientro da Concorde metro 12.",
    "rain": {
      "light": "Solo punti fotografici essenziali e metro",
      "heavy": "Orsay più lungo, Le Bon Marché e Grande Épicerie; recupero Eiffel venerdì se possibile"
    },
    "foodIdeas": [
      "Galette Café: 24–40 € in due",
      "Café Campana: 30–50 €",
      "Restaurant Orsay: 60–90 €",
      "Mercatino: 20–35 € oppure bistrot 40–60 €"
    ],
    "activities": [
      {
        "id": "d4-1",
        "dayDate": "2026-12-10",
        "time": "09:00",
        "timeStatus": "indicative",
        "durationMinutes": 75,
        "name": "Musée de l’Orangerie",
        "address": "Jardin des Tuileries, Paris",
        "coordinates": {
          "lat": 43.660983,
          "lon": 5.42693
        },
        "description": "Ninfee di Monet nelle due sale ovali; priorità della coppia.",
        "shortHistory": "Museo impressionista ai Giardini delle Tuileries, progettato con Monet per ospitare le grandi Ninfee.",
        "curiosities": [
          "Monet volle sale ellittiche a luce naturale per avvolgere il visitatore in un orizzonte senza fine."
        ],
        "whatToSee": [
          "Le due sale ovali delle Ninfee di Claude Monet",
          "Collezione Walter-Guillaume (Cézanne, Renoir, Matisse)"
        ],
        "photoSpot": "Centro delle due sale ovali.",
        "entryAndPrice": "Biglietto già prenotato (orario da voucher)",
        "priceStatus": "user_confirmed",
        "hoursForDate": "Giovedì 10 dic: 09:00–18:00 (ultimo ingresso 17:15)",
        "hoursStatus": "verified",
        "officialUrl": "https://www.musee-orangerie.fr/",
        "category": "museo",
        "weather": "indoor",
        "status": "booked_time_unknown",
        "priority": "alta",
        "nearby": [
          {
            "id": "d4-1-nb-1",
            "name": "Pont Alexandre III",
            "address": "Pont Alexandre III, Paris",
            "coordinates": {
              "lat": 43.547189,
              "lon": 7.04185
            },
            "distanceMeters": 130643,
            "distanceLabel": "130.6 km (~1866 min)",
            "description": "Il ponte più scenografico di Parigi, con statue dorate e vista Eiffel.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Eiffel_Tower_and_Pont_Alexandre_III_at_night.jpg/960px-Eiffel_Tower_and_Pont_Alexandre_III_at_night.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/pont-alexandre-iii.jpg",
              "author": "Getfunky Paris",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Eiffel_Tower_and_Pont_Alexandre_III_at_night.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Pont%20Alexandre%20III%20Pont%20Alexandre%20III%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=43.547189%2C7.04185&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=43.547189%2C7.04185&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=43.547189,7.04185&endname=Pont%20Alexandre%20III",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d4-1-nb-4",
            "name": "Grande Épicerie",
            "address": "38 Rue de Sèvres, Paris",
            "coordinates": {
              "lat": 48.849983,
              "lon": 2.323297
            },
            "distanceMeters": 624248,
            "distanceLabel": "624.2 km (~8918 min)",
            "description": "Tempio della gastronomia francese con reparti dolci e specialità.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Grande%20%C3%89picerie%2038%20Rue%20de%20S%C3%A8vres%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.849983%2C2.323297&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.849983%2C2.323297&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.849983,2.323297&endname=Grande%20%C3%89picerie",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d4-1-nb-3",
            "name": "Le Bon Marché",
            "address": "24 Rue de Sèvres, Paris",
            "coordinates": {
              "lat": 48.850479,
              "lon": 2.32442
            },
            "distanceMeters": 624265,
            "distanceLabel": "624.3 km (~8918 min)",
            "description": "Storico grande magazzino della Rive Gauche.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Le_Bon_March%C3%A9%2C_Paris_27_May_2012.jpg/960px-Le_Bon_March%C3%A9%2C_Paris_27_May_2012.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/le-bon-marche.jpg",
              "author": "Guillaume Speurt from Vilnius, Lithuania",
              "license": "CC BY-SA 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Le_Bon_March%C3%A9,_Paris_27_May_2012.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Bon%20March%C3%A9%2024%20Rue%20de%20S%C3%A8vres%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.850479%2C2.32442&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.850479%2C2.32442&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.850479,2.32442&endname=Le%20Bon%20March%C3%A9",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Detail_nympheas_musee_de_lOrangerie_Paris.jpg/960px-Detail_nympheas_musee_de_lOrangerie_Paris.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/musee-de-lorangerie.jpg",
          "author": "DocDaysleeper",
          "license": "CC BY-SA 4.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Detail_nympheas_musee_de_lOrangerie_Paris.jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20de%20l%E2%80%99Orangerie%20Jardin%20des%20Tuileries%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=43.660983%2C5.42693&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=43.660983%2C5.42693&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=43.660983,5.42693&endname=Mus%C3%A9e%20de%20l%E2%80%99Orangerie",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d4-2",
        "dayDate": "2026-12-10",
        "time": "11:00",
        "timeStatus": "indicative",
        "durationMinutes": 120,
        "name": "Musée d’Orsay",
        "address": "1 Rue de la Légion d’Honneur, Paris",
        "coordinates": {
          "lat": 48.860379,
          "lon": 2.32513
        },
        "description": "Ex stazione, impressionismo; grande orologio. Opere esposte da verificare.",
        "shortHistory": "Antica stazione ferroviaria Beaux-Arts del 1900 trasformata nel tempio dell'arte tra il 1848 e il 1914.",
        "curiosities": [
          "Il giovedì il museo resta aperto fino alle 21:45."
        ],
        "whatToSee": [
          "Notte stellata sul Rodano e Autoritratto (Van Gogh)",
          "Bal au Moulin de la Galette (Renoir)",
          "I Papaveri e Gare Saint-Lazare (Monet)",
          "La Classe di danza (Degas)",
          "Grande orologio panoramico"
        ],
        "photoSpot": "Dietro il grande orologio al 5° piano.",
        "entryAndPrice": "Biglietto già prenotato (orario da voucher)",
        "priceStatus": "user_confirmed",
        "hoursForDate": "Giovedì 10 dic: 09:30–21:45 (verificato)",
        "hoursStatus": "verified",
        "officialUrl": "https://www.musee-orsay.fr/",
        "category": "museo",
        "weather": "indoor",
        "status": "booked_time_unknown",
        "priority": "alta",
        "nearby": [
          {
            "id": "d4-2-nb-3",
            "name": "Le Bon Marché",
            "address": "24 Rue de Sèvres, Paris",
            "coordinates": {
              "lat": 48.850479,
              "lon": 2.32442
            },
            "distanceMeters": 1102,
            "distanceLabel": "1.1 km (~16 min)",
            "description": "Storico grande magazzino della Rive Gauche.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Le_Bon_March%C3%A9%2C_Paris_27_May_2012.jpg/960px-Le_Bon_March%C3%A9%2C_Paris_27_May_2012.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/le-bon-marche.jpg",
              "author": "Guillaume Speurt from Vilnius, Lithuania",
              "license": "CC BY-SA 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Le_Bon_March%C3%A9,_Paris_27_May_2012.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Bon%20March%C3%A9%2024%20Rue%20de%20S%C3%A8vres%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.850479%2C2.32442&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.850479%2C2.32442&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.850479,2.32442&endname=Le%20Bon%20March%C3%A9",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d4-2-nb-4",
            "name": "Grande Épicerie",
            "address": "38 Rue de Sèvres, Paris",
            "coordinates": {
              "lat": 48.849983,
              "lon": 2.323297
            },
            "distanceMeters": 1164,
            "distanceLabel": "1.2 km (~17 min)",
            "description": "Tempio della gastronomia francese con reparti dolci e specialità.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Grande%20%C3%89picerie%2038%20Rue%20de%20S%C3%A8vres%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.849983%2C2.323297&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.849983%2C2.323297&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.849983,2.323297&endname=Grande%20%C3%89picerie",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d4-2-nb-2",
            "name": "Palais de Tokyo",
            "address": "13 Avenue du Président Wilson, Paris",
            "coordinates": {
              "lat": 48.864383,
              "lon": 2.293534
            },
            "distanceMeters": 2354,
            "distanceLabel": "2.4 km (~34 min)",
            "description": "Centro d'arte contemporanea vicino al Trocadéro.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Palais_de_Tokyo_20030101w.JPG/960px-Palais_de_Tokyo_20030101w.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/palais-de-tokyo.jpg",
              "author": "Strobilomyces",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Palais_de_Tokyo_20030101w.JPG",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Palais%20de%20Tokyo%2013%20Avenue%20du%20Pr%C3%A9sident%20Wilson%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.864383%2C2.293534&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.864383%2C2.293534&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.864383,2.293534&endname=Palais%20de%20Tokyo",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Musee_d%27Orsay_and_Pont_Royal%2C_North-West_view_140402_1.jpg/960px-Musee_d%27Orsay_and_Pont_Royal%2C_North-West_view_140402_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/musee-dorsay.jpg",
          "author": "DXR",
          "license": "CC BY-SA 3.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Musee_d%27Orsay_and_Pont_Royal,_North-West_view_140402_1.jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20d%E2%80%99Orsay%201%20Rue%20de%20la%20L%C3%A9gion%20d%E2%80%99Honneur%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.860379%2C2.32513&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.860379%2C2.32513&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.860379,2.32513&endname=Mus%C3%A9e%20d%E2%80%99Orsay",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d4-3",
        "dayDate": "2026-12-10",
        "time": "13:00",
        "timeStatus": "indicative",
        "durationMinutes": 65,
        "name": "Galette Café",
        "address": "2 Rue de l’Université, Paris",
        "coordinates": {
          "lat": 48.856434,
          "lon": 2.33153
        },
        "description": "Galette bretone; indirizzo e menu da verificare. Alternative Café Campana e ristorante Orsay.",
        "shortHistory": "Crêperie bretone moderna a Saint-Germain-des-Prés, a pochi minuti a piedi dal Musée d'Orsay.",
        "curiosities": [
          "Indirizzo 2 Rue de l'Université verificato; usa burro Bordier e farina macinata a pietra."
        ],
        "whatToSee": [
          "Galette salate di grano saraceno (senza glutine)",
          "Crêpes dolci al caramello al burro salato"
        ],
        "photoSpot": "Tavolo vicino alle vetrate.",
        "entryAndPrice": "Stima 24–40 € in due",
        "priceStatus": "estimate",
        "hoursForDate": "Giovedì: 12:00–22:30 (verificato su galettecafe.fr)",
        "hoursStatus": "verified",
        "officialUrl": "https://galettecafe.fr/",
        "category": "gastronomia",
        "weather": "indoor",
        "status": "optional",
        "priority": "media",
        "nearby": [
          {
            "id": "d4-3-nb-3",
            "name": "Le Bon Marché",
            "address": "24 Rue de Sèvres, Paris",
            "coordinates": {
              "lat": 48.850479,
              "lon": 2.32442
            },
            "distanceMeters": 842,
            "distanceLabel": "842 m (~12 min)",
            "description": "Storico grande magazzino della Rive Gauche.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Le_Bon_March%C3%A9%2C_Paris_27_May_2012.jpg/960px-Le_Bon_March%C3%A9%2C_Paris_27_May_2012.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/le-bon-marche.jpg",
              "author": "Guillaume Speurt from Vilnius, Lithuania",
              "license": "CC BY-SA 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Le_Bon_March%C3%A9,_Paris_27_May_2012.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Bon%20March%C3%A9%2024%20Rue%20de%20S%C3%A8vres%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.850479%2C2.32442&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.850479%2C2.32442&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.850479,2.32442&endname=Le%20Bon%20March%C3%A9",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d4-3-nb-4",
            "name": "Grande Épicerie",
            "address": "38 Rue de Sèvres, Paris",
            "coordinates": {
              "lat": 48.849983,
              "lon": 2.323297
            },
            "distanceMeters": 937,
            "distanceLabel": "937 m (~13 min)",
            "description": "Tempio della gastronomia francese con reparti dolci e specialità.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Grande%20%C3%89picerie%2038%20Rue%20de%20S%C3%A8vres%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.849983%2C2.323297&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.849983%2C2.323297&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.849983,2.323297&endname=Grande%20%C3%89picerie",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d4-3-nb-2",
            "name": "Palais de Tokyo",
            "address": "13 Avenue du Président Wilson, Paris",
            "coordinates": {
              "lat": 48.864383,
              "lon": 2.293534
            },
            "distanceMeters": 2917,
            "distanceLabel": "2.9 km (~42 min)",
            "description": "Centro d'arte contemporanea vicino al Trocadéro.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Palais_de_Tokyo_20030101w.JPG/960px-Palais_de_Tokyo_20030101w.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/palais-de-tokyo.jpg",
              "author": "Strobilomyces",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Palais_de_Tokyo_20030101w.JPG",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Palais%20de%20Tokyo%2013%20Avenue%20du%20Pr%C3%A9sident%20Wilson%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.864383%2C2.293534&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.864383%2C2.293534&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.864383,2.293534&endname=Palais%20de%20Tokyo",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Stack_of_buckwheat_pancakes.jpg/960px-Stack_of_buckwheat_pancakes.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/galette-cafe.jpg",
          "author": "Shisma",
          "license": "CC BY-SA 4.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Stack_of_buckwheat_pancakes.jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Galette%20Caf%C3%A9%202%20Rue%20de%20l%E2%80%99Universit%C3%A9%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.856434%2C2.33153&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.856434%2C2.33153&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.856434,2.33153&endname=Galette%20Caf%C3%A9",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d4-4",
        "dayDate": "2026-12-10",
        "time": "14:45",
        "timeStatus": "indicative",
        "durationMinutes": 15,
        "name": "Rue de l’Université",
        "address": "223 Rue de l’Université, Paris",
        "coordinates": {
          "lat": 48.859751,
          "lon": 2.296468
        },
        "description": "Scorcio fotografico della Torre Eiffel.",
        "shortHistory": "Via elegante del 7° arrondissement celebre per la prospettiva ravvicinata sulla Torre Eiffel.",
        "curiosities": [
          "Molto frequentato: basta qualche minuto per uno scatto di coppia."
        ],
        "whatToSee": [
          "Scorcio fotografico sulla Torre Eiffel al civico 223"
        ],
        "photoSpot": "Incrocio con Rue de l'Université 223.",
        "entryAndPrice": "Accesso libero",
        "priceStatus": "verified",
        "hoursForDate": "Sempre accessibile",
        "hoursStatus": "verified",
        "officialUrl": null,
        "category": "monumento",
        "weather": "outdoor",
        "status": "optional",
        "priority": "media",
        "nearby": [
          {
            "id": "d4-4-nb-2",
            "name": "Palais de Tokyo",
            "address": "13 Avenue du Président Wilson, Paris",
            "coordinates": {
              "lat": 48.864383,
              "lon": 2.293534
            },
            "distanceMeters": 558,
            "distanceLabel": "558 m (~8 min)",
            "description": "Centro d'arte contemporanea vicino al Trocadéro.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Palais_de_Tokyo_20030101w.JPG/960px-Palais_de_Tokyo_20030101w.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/palais-de-tokyo.jpg",
              "author": "Strobilomyces",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Palais_de_Tokyo_20030101w.JPG",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Palais%20de%20Tokyo%2013%20Avenue%20du%20Pr%C3%A9sident%20Wilson%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.864383%2C2.293534&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.864383%2C2.293534&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.864383,2.293534&endname=Palais%20de%20Tokyo",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d4-4-nb-4",
            "name": "Grande Épicerie",
            "address": "38 Rue de Sèvres, Paris",
            "coordinates": {
              "lat": 48.849983,
              "lon": 2.323297
            },
            "distanceMeters": 2243,
            "distanceLabel": "2.2 km (~32 min)",
            "description": "Tempio della gastronomia francese con reparti dolci e specialità.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Grande%20%C3%89picerie%2038%20Rue%20de%20S%C3%A8vres%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.849983%2C2.323297&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.849983%2C2.323297&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.849983,2.323297&endname=Grande%20%C3%89picerie",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d4-4-nb-3",
            "name": "Le Bon Marché",
            "address": "24 Rue de Sèvres, Paris",
            "coordinates": {
              "lat": 48.850479,
              "lon": 2.32442
            },
            "distanceMeters": 2290,
            "distanceLabel": "2.3 km (~33 min)",
            "description": "Storico grande magazzino della Rive Gauche.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Le_Bon_March%C3%A9%2C_Paris_27_May_2012.jpg/960px-Le_Bon_March%C3%A9%2C_Paris_27_May_2012.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/le-bon-marche.jpg",
              "author": "Guillaume Speurt from Vilnius, Lithuania",
              "license": "CC BY-SA 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Le_Bon_March%C3%A9,_Paris_27_May_2012.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Bon%20March%C3%A9%2024%20Rue%20de%20S%C3%A8vres%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.850479%2C2.32442&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.850479%2C2.32442&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.850479,2.32442&endname=Le%20Bon%20March%C3%A9",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Rue%20de%20l%E2%80%99Universit%C3%A9%20223%20Rue%20de%20l%E2%80%99Universit%C3%A9%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.859751%2C2.296468&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.859751%2C2.296468&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.859751,2.296468&endname=Rue%20de%20l%E2%80%99Universit%C3%A9",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d4-5",
        "dayDate": "2026-12-10",
        "time": "15:15",
        "timeStatus": "indicative",
        "durationMinutes": 30,
        "name": "Champ de Mars",
        "address": "Champ de Mars, Paris",
        "coordinates": {
          "lat": 48.856259,
          "lon": 2.305065
        },
        "description": "Vista esterna della torre; nessuna salita.",
        "shortHistory": "Grande parco alberato che si estende ai piedi della Torre Eiffel fino all'École Militaire.",
        "curiosities": [
          "Costruito originariamente nel XVIII secolo come campo di addestramento militare."
        ],
        "whatToSee": [
          "Vista esterna dal basso della Torre Eiffel (nessuna salita prevista)"
        ],
        "photoSpot": "Viale centrale verso la Torre.",
        "entryAndPrice": "Accesso libero",
        "priceStatus": "verified",
        "hoursForDate": "Sempre accessibile",
        "hoursStatus": "verified",
        "officialUrl": "https://www.toureiffel.paris/",
        "category": "monumento",
        "weather": "outdoor",
        "status": "planned",
        "priority": "alta",
        "nearby": [
          {
            "id": "d4-5-nb-2",
            "name": "Palais de Tokyo",
            "address": "13 Avenue du Président Wilson, Paris",
            "coordinates": {
              "lat": 48.864383,
              "lon": 2.293534
            },
            "distanceMeters": 1236,
            "distanceLabel": "1.2 km (~18 min)",
            "description": "Centro d'arte contemporanea vicino al Trocadéro.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Palais_de_Tokyo_20030101w.JPG/960px-Palais_de_Tokyo_20030101w.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/palais-de-tokyo.jpg",
              "author": "Strobilomyces",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Palais_de_Tokyo_20030101w.JPG",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Palais%20de%20Tokyo%2013%20Avenue%20du%20Pr%C3%A9sident%20Wilson%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.864383%2C2.293534&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.864383%2C2.293534&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.864383,2.293534&endname=Palais%20de%20Tokyo",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d4-5-nb-4",
            "name": "Grande Épicerie",
            "address": "38 Rue de Sèvres, Paris",
            "coordinates": {
              "lat": 48.849983,
              "lon": 2.323297
            },
            "distanceMeters": 1505,
            "distanceLabel": "1.5 km (~22 min)",
            "description": "Tempio della gastronomia francese con reparti dolci e specialità.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Grande%20%C3%89picerie%2038%20Rue%20de%20S%C3%A8vres%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.849983%2C2.323297&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.849983%2C2.323297&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.849983,2.323297&endname=Grande%20%C3%89picerie",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d4-5-nb-3",
            "name": "Le Bon Marché",
            "address": "24 Rue de Sèvres, Paris",
            "coordinates": {
              "lat": 48.850479,
              "lon": 2.32442
            },
            "distanceMeters": 1555,
            "distanceLabel": "1.6 km (~22 min)",
            "description": "Storico grande magazzino della Rive Gauche.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Le_Bon_March%C3%A9%2C_Paris_27_May_2012.jpg/960px-Le_Bon_March%C3%A9%2C_Paris_27_May_2012.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/le-bon-marche.jpg",
              "author": "Guillaume Speurt from Vilnius, Lithuania",
              "license": "CC BY-SA 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Le_Bon_March%C3%A9,_Paris_27_May_2012.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Bon%20March%C3%A9%2024%20Rue%20de%20S%C3%A8vres%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.850479%2C2.32442&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.850479%2C2.32442&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.850479,2.32442&endname=Le%20Bon%20March%C3%A9",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/960px-Tour_Eiffel_Wikimedia_Commons.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/champ-de-mars.jpg",
          "author": "Benh LIEU SONG",
          "license": "Public domain",
          "licenseUrl": "",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Tour_Eiffel_Wikimedia_Commons.jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Champ%20de%20Mars%20Champ%20de%20Mars%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.856259%2C2.305065&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.856259%2C2.305065&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.856259,2.305065&endname=Champ%20de%20Mars",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d4-6",
        "dayDate": "2026-12-10",
        "time": "16:00",
        "timeStatus": "indicative",
        "durationMinutes": 75,
        "name": "Trocadéro",
        "address": "Place du Trocadéro, Paris",
        "coordinates": {
          "lat": 48.862539,
          "lon": 2.282334
        },
        "description": "Attraversare Pont d’Iéna se accessibile; tramonto e scintillio delle 17 o 18 se attivo.",
        "shortHistory": "Spianata monumentale sulla riva destra, il punto panoramico più celebre sulla Torre Eiffel.",
        "curiosities": [
          "Lo scintillio dura 5 minuti allo scoccare di ogni ora dopo il tramonto (da verificare)."
        ],
        "whatToSee": [
          "Esplanade des Droits de l'Homme",
          "Tramonto e scintillio serale della Torre Eiffel (se attivo alle 17 o 18)"
        ],
        "photoSpot": "Terrazza superiore del Trocadéro.",
        "entryAndPrice": "Accesso libero",
        "priceStatus": "verified",
        "hoursForDate": "Sempre accessibile",
        "hoursStatus": "verified",
        "officialUrl": "https://www.toureiffel.paris/",
        "category": "monumento",
        "weather": "outdoor",
        "status": "planned",
        "priority": "alta",
        "nearby": [
          {
            "id": "d4-6-nb-2",
            "name": "Palais de Tokyo",
            "address": "13 Avenue du Président Wilson, Paris",
            "coordinates": {
              "lat": 48.864383,
              "lon": 2.293534
            },
            "distanceMeters": 845,
            "distanceLabel": "845 m (~12 min)",
            "description": "Centro d'arte contemporanea vicino al Trocadéro.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Palais_de_Tokyo_20030101w.JPG/960px-Palais_de_Tokyo_20030101w.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/palais-de-tokyo.jpg",
              "author": "Strobilomyces",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Palais_de_Tokyo_20030101w.JPG",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Palais%20de%20Tokyo%2013%20Avenue%20du%20Pr%C3%A9sident%20Wilson%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.864383%2C2.293534&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.864383%2C2.293534&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.864383,2.293534&endname=Palais%20de%20Tokyo",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d4-6-nb-4",
            "name": "Grande Épicerie",
            "address": "38 Rue de Sèvres, Paris",
            "coordinates": {
              "lat": 48.849983,
              "lon": 2.323297
            },
            "distanceMeters": 3306,
            "distanceLabel": "3.3 km (~47 min)",
            "description": "Tempio della gastronomia francese con reparti dolci e specialità.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Grande%20%C3%89picerie%2038%20Rue%20de%20S%C3%A8vres%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.849983%2C2.323297&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.849983%2C2.323297&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.849983,2.323297&endname=Grande%20%C3%89picerie",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d4-6-nb-3",
            "name": "Le Bon Marché",
            "address": "24 Rue de Sèvres, Paris",
            "coordinates": {
              "lat": 48.850479,
              "lon": 2.32442
            },
            "distanceMeters": 3358,
            "distanceLabel": "3.4 km (~48 min)",
            "description": "Storico grande magazzino della Rive Gauche.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Le_Bon_March%C3%A9%2C_Paris_27_May_2012.jpg/960px-Le_Bon_March%C3%A9%2C_Paris_27_May_2012.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/le-bon-marche.jpg",
              "author": "Guillaume Speurt from Vilnius, Lithuania",
              "license": "CC BY-SA 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Le_Bon_March%C3%A9,_Paris_27_May_2012.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Bon%20March%C3%A9%2024%20Rue%20de%20S%C3%A8vres%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.850479%2C2.32442&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.850479%2C2.32442&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.850479,2.32442&endname=Le%20Bon%20March%C3%A9",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Tour_eiffel_at_sunrise_from_the_trocadero.jpg/960px-Tour_eiffel_at_sunrise_from_the_trocadero.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/trocadero.jpg",
          "author": "Tristan Nitot",
          "license": "CC BY-SA 3.0",
          "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Tour_eiffel_at_sunrise_from_the_trocadero.jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Trocad%C3%A9ro%20Place%20du%20Trocad%C3%A9ro%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.862539%2C2.282334&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.862539%2C2.282334&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.862539,2.282334&endname=Trocad%C3%A9ro",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d4-7",
        "dayDate": "2026-12-10",
        "time": "18:00",
        "timeStatus": "indicative",
        "durationMinutes": 40,
        "name": "Avenue Montaigne",
        "address": "30 Avenue Montaigne, Paris",
        "coordinates": {
          "lat": 48.866684,
          "lon": 2.306131
        },
        "description": "Vetrine Dior e Plaza Athénée; luminarie.",
        "shortHistory": "Viale dell'alta moda parigina celebre per le facciate illuminate a dicembre.",
        "curiosities": [
          "Le decorazioni di dicembre rendono il viale una passeggiata molto scenografica."
        ],
        "whatToSee": [
          "Luminarie natalizie",
          "Vetrine Dior e facciata dell'Hôtel Plaza Athénée"
        ],
        "photoSpot": "Facciata di Plaza Athénée.",
        "entryAndPrice": "Passeggiata gratuita",
        "priceStatus": "verified",
        "hoursForDate": "Luminarie serali",
        "hoursStatus": "verified",
        "officialUrl": null,
        "category": "shopping",
        "weather": "outdoor",
        "status": "optional",
        "priority": "bassa",
        "nearby": [
          {
            "id": "d4-7-nb-2",
            "name": "Palais de Tokyo",
            "address": "13 Avenue du Président Wilson, Paris",
            "coordinates": {
              "lat": 48.864383,
              "lon": 2.293534
            },
            "distanceMeters": 956,
            "distanceLabel": "956 m (~14 min)",
            "description": "Centro d'arte contemporanea vicino al Trocadéro.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Palais_de_Tokyo_20030101w.JPG/960px-Palais_de_Tokyo_20030101w.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/palais-de-tokyo.jpg",
              "author": "Strobilomyces",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Palais_de_Tokyo_20030101w.JPG",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Palais%20de%20Tokyo%2013%20Avenue%20du%20Pr%C3%A9sident%20Wilson%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.864383%2C2.293534&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.864383%2C2.293534&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.864383,2.293534&endname=Palais%20de%20Tokyo",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d4-7-nb-4",
            "name": "Grande Épicerie",
            "address": "38 Rue de Sèvres, Paris",
            "coordinates": {
              "lat": 48.849983,
              "lon": 2.323297
            },
            "distanceMeters": 2242,
            "distanceLabel": "2.2 km (~32 min)",
            "description": "Tempio della gastronomia francese con reparti dolci e specialità.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Grande%20%C3%89picerie%2038%20Rue%20de%20S%C3%A8vres%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.849983%2C2.323297&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.849983%2C2.323297&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.849983,2.323297&endname=Grande%20%C3%89picerie",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d4-7-nb-3",
            "name": "Le Bon Marché",
            "address": "24 Rue de Sèvres, Paris",
            "coordinates": {
              "lat": 48.850479,
              "lon": 2.32442
            },
            "distanceMeters": 2244,
            "distanceLabel": "2.2 km (~32 min)",
            "description": "Storico grande magazzino della Rive Gauche.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Le_Bon_March%C3%A9%2C_Paris_27_May_2012.jpg/960px-Le_Bon_March%C3%A9%2C_Paris_27_May_2012.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/le-bon-marche.jpg",
              "author": "Guillaume Speurt from Vilnius, Lithuania",
              "license": "CC BY-SA 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Le_Bon_March%C3%A9,_Paris_27_May_2012.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Bon%20March%C3%A9%2024%20Rue%20de%20S%C3%A8vres%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.850479%2C2.32442&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.850479%2C2.32442&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.850479,2.32442&endname=Le%20Bon%20March%C3%A9",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Avenue%20Montaigne%2030%20Avenue%20Montaigne%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.866684%2C2.306131&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.866684%2C2.306131&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.866684,2.306131&endname=Avenue%20Montaigne",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d4-8",
        "dayDate": "2026-12-10",
        "time": "18:45",
        "timeStatus": "indicative",
        "durationMinutes": 90,
        "name": "Mercatino Champs-Élysées",
        "address": "Rond-point des Champs-Élysées, Paris",
        "coordinates": {
          "lat": 48.869196,
          "lon": 2.309927
        },
        "description": "Mercatino confermato dal Comune; cena street food o bistrot.",
        "shortHistory": "Mercatino di Natale ufficiale tra Place de la Concorde e il Rond-Point des Champs-Élysées.",
        "curiosities": [
          "Confermato dal Comune di Parigi: 22 nov – 4 gen, giovedì 10:00–22:00."
        ],
        "whatToSee": [
          "Chalet artigianali e street food",
          "Luminarie degli Champs-Élysées (dalle 17:00)"
        ],
        "photoSpot": "Vista verso l'Arco di Trionfo illuminato.",
        "entryAndPrice": "Accesso libero (cena stimata 20–35 € in due)",
        "priceStatus": "verified",
        "hoursForDate": "Giovedì 10 dic: 10:00–22:00 (verificato su paris.fr)",
        "hoursStatus": "verified",
        "officialUrl": "https://www.paris.fr/",
        "category": "shopping",
        "weather": "outdoor",
        "status": "planned",
        "priority": "alta",
        "nearby": [
          {
            "id": "d4-8-nb-2",
            "name": "Palais de Tokyo",
            "address": "13 Avenue du Président Wilson, Paris",
            "coordinates": {
              "lat": 48.864383,
              "lon": 2.293534
            },
            "distanceMeters": 1313,
            "distanceLabel": "1.3 km (~19 min)",
            "description": "Centro d'arte contemporanea vicino al Trocadéro.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Palais_de_Tokyo_20030101w.JPG/960px-Palais_de_Tokyo_20030101w.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/palais-de-tokyo.jpg",
              "author": "Strobilomyces",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Palais_de_Tokyo_20030101w.JPG",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Palais%20de%20Tokyo%2013%20Avenue%20du%20Pr%C3%A9sident%20Wilson%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.864383%2C2.293534&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.864383%2C2.293534&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.864383,2.293534&endname=Palais%20de%20Tokyo",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d4-8-nb-3",
            "name": "Le Bon Marché",
            "address": "24 Rue de Sèvres, Paris",
            "coordinates": {
              "lat": 48.850479,
              "lon": 2.32442
            },
            "distanceMeters": 2336,
            "distanceLabel": "2.3 km (~33 min)",
            "description": "Storico grande magazzino della Rive Gauche.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Le_Bon_March%C3%A9%2C_Paris_27_May_2012.jpg/960px-Le_Bon_March%C3%A9%2C_Paris_27_May_2012.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/le-bon-marche.jpg",
              "author": "Guillaume Speurt from Vilnius, Lithuania",
              "license": "CC BY-SA 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Le_Bon_March%C3%A9,_Paris_27_May_2012.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Bon%20March%C3%A9%2024%20Rue%20de%20S%C3%A8vres%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.850479%2C2.32442&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.850479%2C2.32442&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.850479,2.32442&endname=Le%20Bon%20March%C3%A9",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d4-8-nb-4",
            "name": "Grande Épicerie",
            "address": "38 Rue de Sèvres, Paris",
            "coordinates": {
              "lat": 48.849983,
              "lon": 2.323297
            },
            "distanceMeters": 2350,
            "distanceLabel": "2.4 km (~34 min)",
            "description": "Tempio della gastronomia francese con reparti dolci e specialità.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Grande%20%C3%89picerie%2038%20Rue%20de%20S%C3%A8vres%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.849983%2C2.323297&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.849983%2C2.323297&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.849983,2.323297&endname=Grande%20%C3%89picerie",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Mercatino%20Champs-%C3%89lys%C3%A9es%20Rond-point%20des%20Champs-%C3%89lys%C3%A9es%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869196%2C2.309927&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869196%2C2.309927&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.869196,2.309927&endname=Mercatino%20Champs-%C3%89lys%C3%A9es",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d4-9",
        "dayDate": "2026-12-10",
        "time": "20:30",
        "timeStatus": "indicative",
        "durationMinutes": 20,
        "name": "Arc de Triomphe",
        "address": "Place Charles de Gaulle, Paris",
        "coordinates": {
          "lat": 48.872916,
          "lon": 2.29402
        },
        "description": "Esterno, facoltativo; metro 1 per evitare lunga camminata.",
        "shortHistory": "Monumento voluto da Napoleone nel 1806 al centro di Place Charles-de-Gaulle.",
        "curiosities": [
          "Sotto l'arco arde la Fiamma Eterna sulla Tomba del Milite Ignoto."
        ],
        "whatToSee": [
          "Esterno monumentale illuminato (facoltativo, Metro 1 per risparmiare cammino)"
        ],
        "photoSpot": "Sottopasso o isola pedonale all'inizio degli Champs-Élysées.",
        "entryAndPrice": "Esterno gratuito",
        "priceStatus": "verified",
        "hoursForDate": "Esterno sempre visibile",
        "hoursStatus": "verified",
        "officialUrl": "https://www.paris-arc-de-triomphe.fr/",
        "category": "monumento",
        "weather": "outdoor",
        "status": "optional",
        "priority": "bassa",
        "nearby": [
          {
            "id": "d4-9-nb-2",
            "name": "Palais de Tokyo",
            "address": "13 Avenue du Président Wilson, Paris",
            "coordinates": {
              "lat": 48.864383,
              "lon": 2.293534
            },
            "distanceMeters": 949,
            "distanceLabel": "949 m (~14 min)",
            "description": "Centro d'arte contemporanea vicino al Trocadéro.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Palais_de_Tokyo_20030101w.JPG/960px-Palais_de_Tokyo_20030101w.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/palais-de-tokyo.jpg",
              "author": "Strobilomyces",
              "license": "CC BY-SA 3.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Palais_de_Tokyo_20030101w.JPG",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Palais%20de%20Tokyo%2013%20Avenue%20du%20Pr%C3%A9sident%20Wilson%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.864383%2C2.293534&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.864383%2C2.293534&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.864383,2.293534&endname=Palais%20de%20Tokyo",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d4-9-nb-4",
            "name": "Grande Épicerie",
            "address": "38 Rue de Sèvres, Paris",
            "coordinates": {
              "lat": 48.849983,
              "lon": 2.323297
            },
            "distanceMeters": 3330,
            "distanceLabel": "3.3 km (~48 min)",
            "description": "Tempio della gastronomia francese con reparti dolci e specialità.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Grande%20%C3%89picerie%2038%20Rue%20de%20S%C3%A8vres%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.849983%2C2.323297&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.849983%2C2.323297&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.849983,2.323297&endname=Grande%20%C3%89picerie",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d4-9-nb-3",
            "name": "Le Bon Marché",
            "address": "24 Rue de Sèvres, Paris",
            "coordinates": {
              "lat": 48.850479,
              "lon": 2.32442
            },
            "distanceMeters": 3342,
            "distanceLabel": "3.3 km (~48 min)",
            "description": "Storico grande magazzino della Rive Gauche.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Le_Bon_March%C3%A9%2C_Paris_27_May_2012.jpg/960px-Le_Bon_March%C3%A9%2C_Paris_27_May_2012.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/le-bon-marche.jpg",
              "author": "Guillaume Speurt from Vilnius, Lithuania",
              "license": "CC BY-SA 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Le_Bon_March%C3%A9,_Paris_27_May_2012.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Le%20Bon%20March%C3%A9%2024%20Rue%20de%20S%C3%A8vres%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.850479%2C2.32442&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.850479%2C2.32442&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.850479,2.32442&endname=Le%20Bon%20March%C3%A9",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Arc_de_Triomphe_de_l%27%C3%89toile_at_night_vertical_fix.jpg/960px-Arc_de_Triomphe_de_l%27%C3%89toile_at_night_vertical_fix.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/arc-de-triomphe.jpg",
          "author": "Wilfredor",
          "license": "CC0",
          "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Arc_de_Triomphe_de_l%27%C3%89toile_at_night_vertical_fix.jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Arc%20de%20Triomphe%20Place%20Charles%20de%20Gaulle%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.872916%2C2.29402&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.872916%2C2.29402&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.872916,2.29402&endname=Arc%20de%20Triomphe",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      }
    ]
  },
  {
    "date": "2026-12-11",
    "dayNumber": 5,
    "title": "Arte ed eleganza",
    "subtitle": "Venerdì 11 Dicembre · Giorno 5",
    "transport": "Metro 12 fino a Concorde, metro 1 fino a Palais Royal–Musée du Louvre; poi a piedi verso Opéra. Verso Jungle Palace usare Citymapper, possibile metro 7 Opéra–Poissonnière e passeggiata.",
    "rain": {
      "light": "Salta mercatino, visita grandi magazzini",
      "heavy": "Louvre, Opéra, grandi magazzini, cena; se recupero Eiffel alle 18 taglia Printemps"
    },
    "foodIdeas": [
      "Le Petit Vendôme, 8 Rue des Capucines: 15–25 € in due",
      "Angelina, 226 Rue de Rivoli: pausa facoltativa",
      "Jungle Palace: 40–75 € in due; burger, tacos, dessert, mocktail"
    ],
    "activities": [
      {
        "id": "d5-1",
        "dayDate": "2026-12-11",
        "time": "09:00",
        "timeStatus": "indicative",
        "durationMinutes": 195,
        "name": "Musée du Louvre",
        "address": "Rue de Rivoli, Paris",
        "coordinates": {
          "lat": 48.862442,
          "lon": 2.3362
        },
        "description": "Gioconda, Nozze di Cana, Vittoria, Canova; appartamenti Napoleone III se aperti.",
        "shortHistory": "Il museo più visitato al mondo, nell'antico palazzo reale lungo la Senna.",
        "curiosities": [
          "Il venerdì il Louvre effettua apertura serale fino alle 21:00."
        ],
        "whatToSee": [
          "La Gioconda & Le Nozze di Cana",
          "Vittoria di Samotracia",
          "Amore e Psiche (Canova)",
          "Appartamenti Napoleone III (se aperti)",
          "Venere di Milo (facoltativa)"
        ],
        "photoSpot": "Cortile della Piramide di vetro.",
        "entryAndPrice": "Biglietto già prenotato (orario da voucher)",
        "priceStatus": "user_confirmed",
        "hoursForDate": "Venerdì 11 dic: 09:00–21:00 (verificato)",
        "hoursStatus": "verified",
        "officialUrl": "https://www.louvre.fr/",
        "category": "museo",
        "weather": "indoor",
        "status": "booked_time_unknown",
        "priority": "alta",
        "nearby": [
          {
            "id": "d5-1-nb-1",
            "name": "Palais Royal",
            "address": "Place du Palais Royal, Paris",
            "coordinates": {
              "lat": 48.862551,
              "lon": 2.336751
            },
            "distanceMeters": 42,
            "distanceLabel": "42 m (~1 min)",
            "description": "Giardino porticato e cortile con le celebri colonne di Buren.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Palais_Royal_et_les_Colonnes_de_Buren.jpg/960px-Palais_Royal_et_les_Colonnes_de_Buren.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/palais-royal.jpg",
              "author": "ros k @ getfunky_paris",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Palais_Royal_et_les_Colonnes_de_Buren.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Palais%20Royal%20Place%20du%20Palais%20Royal%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.862551%2C2.336751&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.862551%2C2.336751&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.862551,2.336751&endname=Palais%20Royal",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d5-1-nb-2",
            "name": "Galerie Vivienne",
            "address": "4 Rue des Petits Champs, Paris",
            "coordinates": {
              "lat": 48.866215,
              "lon": 2.339481
            },
            "distanceMeters": 483,
            "distanceLabel": "483 m (~7 min)",
            "description": "Elegante passaggio coperto ottocentesco con mosaici e librerie.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Galerie_Vivienne%2C_12_March_2015.jpg/960px-Galerie_Vivienne%2C_12_March_2015.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/galerie-vivienne.jpg",
              "author": "Benh LIEU SONG",
              "license": "CC BY-SA 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Galerie_Vivienne,_12_March_2015.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Galerie%20Vivienne%204%20Rue%20des%20Petits%20Champs%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.866215%2C2.339481&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.866215%2C2.339481&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.866215,2.339481&endname=Galerie%20Vivienne",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d5-1-nb-3",
            "name": "Olympia",
            "address": "28 Boulevard des Capucines, Paris",
            "coordinates": {
              "lat": 48.870152,
              "lon": 2.328364
            },
            "distanceMeters": 1031,
            "distanceLabel": "1.0 km (~15 min)",
            "description": "Storico teatro musicale parigino su Boulevard des Capucines.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Olympia%2028%20Boulevard%20des%20Capucines%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.870152%2C2.328364&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.870152%2C2.328364&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.870152,2.328364&endname=Olympia",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Louvre_Courtyard%2C_Looking_West.jpg/960px-Louvre_Courtyard%2C_Looking_West.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/musee-du-louvre.jpg",
          "author": "Benh LIEU SONG (Flickr)",
          "license": "CC BY-SA 4.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Louvre_Courtyard,_Looking_West.jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20du%20Louvre%20Rue%20de%20Rivoli%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.862442%2C2.3362&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.862442%2C2.3362&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.862442,2.3362&endname=Mus%C3%A9e%20du%20Louvre",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d5-2",
        "dayDate": "2026-12-11",
        "time": "12:15",
        "timeStatus": "indicative",
        "durationMinutes": 75,
        "name": "Mercatino Tuileries",
        "address": "Jardin des Tuileries, Paris",
        "coordinates": {
          "lat": 48.863173,
          "lon": 2.323505
        },
        "description": "Pranzo e giro facoltativo; verificare edizione.",
        "shortHistory": "Grande villaggio natalizio 'La Magie de Noël' nei Giardini delle Tuileries.",
        "curiosities": [
          "Edizione 2026 confermata: 14 novembre 2026 – 3 gennaio 2027."
        ],
        "whatToSee": [
          "Chalet gastronomici per pranzo veloce",
          "Atmosfera natalizia"
        ],
        "photoSpot": "Ruota panoramica e viale centrale.",
        "entryAndPrice": "Accesso libero",
        "priceStatus": "verified",
        "hoursForDate": "14 nov 2026 – 3 gen 2027 (verificato)",
        "hoursStatus": "verified",
        "officialUrl": "https://www.paris.fr/",
        "category": "shopping",
        "weather": "outdoor",
        "status": "optional",
        "priority": "bassa",
        "nearby": [
          {
            "id": "d5-2-nb-3",
            "name": "Olympia",
            "address": "28 Boulevard des Capucines, Paris",
            "coordinates": {
              "lat": 48.870152,
              "lon": 2.328364
            },
            "distanceMeters": 854,
            "distanceLabel": "854 m (~12 min)",
            "description": "Storico teatro musicale parigino su Boulevard des Capucines.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Olympia%2028%20Boulevard%20des%20Capucines%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.870152%2C2.328364&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.870152%2C2.328364&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.870152,2.328364&endname=Olympia",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d5-2-nb-1",
            "name": "Palais Royal",
            "address": "Place du Palais Royal, Paris",
            "coordinates": {
              "lat": 48.862551,
              "lon": 2.336751
            },
            "distanceMeters": 971,
            "distanceLabel": "971 m (~14 min)",
            "description": "Giardino porticato e cortile con le celebri colonne di Buren.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Palais_Royal_et_les_Colonnes_de_Buren.jpg/960px-Palais_Royal_et_les_Colonnes_de_Buren.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/palais-royal.jpg",
              "author": "ros k @ getfunky_paris",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Palais_Royal_et_les_Colonnes_de_Buren.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Palais%20Royal%20Place%20du%20Palais%20Royal%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.862551%2C2.336751&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.862551%2C2.336751&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.862551,2.336751&endname=Palais%20Royal",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d5-2-nb-2",
            "name": "Galerie Vivienne",
            "address": "4 Rue des Petits Champs, Paris",
            "coordinates": {
              "lat": 48.866215,
              "lon": 2.339481
            },
            "distanceMeters": 1217,
            "distanceLabel": "1.2 km (~17 min)",
            "description": "Elegante passaggio coperto ottocentesco con mosaici e librerie.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Galerie_Vivienne%2C_12_March_2015.jpg/960px-Galerie_Vivienne%2C_12_March_2015.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/galerie-vivienne.jpg",
              "author": "Benh LIEU SONG",
              "license": "CC BY-SA 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Galerie_Vivienne,_12_March_2015.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Galerie%20Vivienne%204%20Rue%20des%20Petits%20Champs%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.866215%2C2.339481&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.866215%2C2.339481&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.866215,2.339481&endname=Galerie%20Vivienne",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Grand_bassin_octogonal_Jardin_des_Tuileries_003.jpg/960px-Grand_bassin_octogonal_Jardin_des_Tuileries_003.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/mercatino-tuileries.jpg",
          "author": "Moonik",
          "license": "CC BY-SA 3.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Grand_bassin_octogonal_Jardin_des_Tuileries_003.jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Mercatino%20Tuileries%20Jardin%20des%20Tuileries%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.863173%2C2.323505&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.863173%2C2.323505&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.863173,2.323505&endname=Mercatino%20Tuileries",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d5-3",
        "dayDate": "2026-12-11",
        "time": "13:45",
        "timeStatus": "indicative",
        "durationMinutes": 10,
        "name": "Place Vendôme",
        "address": "Place Vendôme, Paris",
        "coordinates": {
          "lat": 48.867527,
          "lon": 2.329528
        },
        "description": "Piazza elegante con colonna monumentale; passaggio facoltativo.",
        "shortHistory": "Piazza ottagonale reale progettata da Mansart alla fine del XVII secolo.",
        "curiosities": [
          "Qui si trova lo storico Hôtel Ritz e le grandi maison di alta gioielleria."
        ],
        "whatToSee": [
          "Colonna Vendôme",
          "Architettura classica e vetrine"
        ],
        "photoSpot": "Lato sud con la colonna al centro.",
        "entryAndPrice": "Accesso libero",
        "priceStatus": "verified",
        "hoursForDate": "Sempre accessibile",
        "hoursStatus": "verified",
        "officialUrl": null,
        "category": "monumento",
        "weather": "outdoor",
        "status": "optional",
        "priority": "bassa",
        "nearby": [
          {
            "id": "d5-3-nb-3",
            "name": "Olympia",
            "address": "28 Boulevard des Capucines, Paris",
            "coordinates": {
              "lat": 48.870152,
              "lon": 2.328364
            },
            "distanceMeters": 304,
            "distanceLabel": "304 m (~4 min)",
            "description": "Storico teatro musicale parigino su Boulevard des Capucines.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Olympia%2028%20Boulevard%20des%20Capucines%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.870152%2C2.328364&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.870152%2C2.328364&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.870152,2.328364&endname=Olympia",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d5-3-nb-2",
            "name": "Galerie Vivienne",
            "address": "4 Rue des Petits Champs, Paris",
            "coordinates": {
              "lat": 48.866215,
              "lon": 2.339481
            },
            "distanceMeters": 742,
            "distanceLabel": "742 m (~11 min)",
            "description": "Elegante passaggio coperto ottocentesco con mosaici e librerie.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Galerie_Vivienne%2C_12_March_2015.jpg/960px-Galerie_Vivienne%2C_12_March_2015.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/galerie-vivienne.jpg",
              "author": "Benh LIEU SONG",
              "license": "CC BY-SA 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Galerie_Vivienne,_12_March_2015.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Galerie%20Vivienne%204%20Rue%20des%20Petits%20Champs%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.866215%2C2.339481&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.866215%2C2.339481&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.866215,2.339481&endname=Galerie%20Vivienne",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d5-3-nb-1",
            "name": "Palais Royal",
            "address": "Place du Palais Royal, Paris",
            "coordinates": {
              "lat": 48.862551,
              "lon": 2.336751
            },
            "distanceMeters": 765,
            "distanceLabel": "765 m (~11 min)",
            "description": "Giardino porticato e cortile con le celebri colonne di Buren.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Palais_Royal_et_les_Colonnes_de_Buren.jpg/960px-Palais_Royal_et_les_Colonnes_de_Buren.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/palais-royal.jpg",
              "author": "ros k @ getfunky_paris",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Palais_Royal_et_les_Colonnes_de_Buren.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Palais%20Royal%20Place%20du%20Palais%20Royal%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.862551%2C2.336751&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.862551%2C2.336751&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.862551,2.336751&endname=Palais%20Royal",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Mascaron_16_Place_Vend%C3%B4me_Paris.jpg/960px-Mascaron_16_Place_Vend%C3%B4me_Paris.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/place-vendome.jpg",
          "author": "This Photo was taken by Wolfgang Moroder.  \n\nFeel free to use my ph...",
          "license": "CC BY-SA 3.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Mascaron_16_Place_Vend%C3%B4me_Paris.jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Place%20Vend%C3%B4me%20Place%20Vend%C3%B4me%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.867527%2C2.329528&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.867527%2C2.329528&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.867527,2.329528&endname=Place%20Vend%C3%B4me",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d5-4",
        "dayDate": "2026-12-11",
        "time": "14:30",
        "timeStatus": "indicative",
        "durationMinutes": 90,
        "name": "Opéra Garnier",
        "address": "Place de l’Opéra, Paris",
        "coordinates": {
          "lat": 48.871044,
          "lon": 2.332135
        },
        "description": "Scalinata, Grand Foyer, sala se accessibile; prenotare visita.",
        "shortHistory": "Capolavoro neobarocco di Charles Garnier inaugurato nel 1875.",
        "curiosities": [
          "Ispirò il romanzo 'Il Fantasma dell'Opera'; verificare chiusure per prove sul sito ufficiale."
        ],
        "whatToSee": [
          "Scalone d'onore in marmo",
          "Grand Foyer dorato",
          "Sala teatrale (se accessibile, soffitto di Chagall)"
        ],
        "photoSpot": "Gradinata principale dello Scalone d'onore.",
        "entryAndPrice": "Da prenotare (verificare tariffe su operadeparis.fr)",
        "priceStatus": "to_verify",
        "hoursForDate": "10:00–17:00 (ultimo ingresso 16:00)",
        "hoursStatus": "verified",
        "officialUrl": "https://www.operadeparis.fr/",
        "category": "monumento",
        "weather": "indoor",
        "status": "to_book",
        "priority": "alta",
        "nearby": [
          {
            "id": "d5-4-nb-3",
            "name": "Olympia",
            "address": "28 Boulevard des Capucines, Paris",
            "coordinates": {
              "lat": 48.870152,
              "lon": 2.328364
            },
            "distanceMeters": 293,
            "distanceLabel": "293 m (~4 min)",
            "description": "Storico teatro musicale parigino su Boulevard des Capucines.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Olympia%2028%20Boulevard%20des%20Capucines%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.870152%2C2.328364&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.870152%2C2.328364&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.870152,2.328364&endname=Olympia",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d5-4-nb-2",
            "name": "Galerie Vivienne",
            "address": "4 Rue des Petits Champs, Paris",
            "coordinates": {
              "lat": 48.866215,
              "lon": 2.339481
            },
            "distanceMeters": 760,
            "distanceLabel": "760 m (~11 min)",
            "description": "Elegante passaggio coperto ottocentesco con mosaici e librerie.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Galerie_Vivienne%2C_12_March_2015.jpg/960px-Galerie_Vivienne%2C_12_March_2015.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/galerie-vivienne.jpg",
              "author": "Benh LIEU SONG",
              "license": "CC BY-SA 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Galerie_Vivienne,_12_March_2015.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Galerie%20Vivienne%204%20Rue%20des%20Petits%20Champs%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.866215%2C2.339481&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.866215%2C2.339481&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.866215,2.339481&endname=Galerie%20Vivienne",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d5-4-nb-1",
            "name": "Palais Royal",
            "address": "Place du Palais Royal, Paris",
            "coordinates": {
              "lat": 48.862551,
              "lon": 2.336751
            },
            "distanceMeters": 1003,
            "distanceLabel": "1.0 km (~14 min)",
            "description": "Giardino porticato e cortile con le celebri colonne di Buren.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Palais_Royal_et_les_Colonnes_de_Buren.jpg/960px-Palais_Royal_et_les_Colonnes_de_Buren.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/palais-royal.jpg",
              "author": "ros k @ getfunky_paris",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Palais_Royal_et_les_Colonnes_de_Buren.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Palais%20Royal%20Place%20du%20Palais%20Royal%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.862551%2C2.336751&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.862551%2C2.336751&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.862551,2.336751&endname=Palais%20Royal",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Opera_Garnier_Grand_Escalier.jpg/960px-Opera_Garnier_Grand_Escalier.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/opera-garnier.jpg",
          "author": "Benh LIEU SONG",
          "license": "CC BY-SA 3.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Opera_Garnier_Grand_Escalier.jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Op%C3%A9ra%20Garnier%20Place%20de%20l%E2%80%99Op%C3%A9ra%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.871044%2C2.332135&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.871044%2C2.332135&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.871044,2.332135&endname=Op%C3%A9ra%20Garnier",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d5-5",
        "dayDate": "2026-12-11",
        "time": "16:00",
        "timeStatus": "indicative",
        "durationMinutes": 75,
        "name": "Galeries Lafayette",
        "address": "40 Boulevard Haussmann, Paris",
        "coordinates": {
          "lat": 48.873199,
          "lon": 2.332434
        },
        "description": "Cupola, albero e vetrine natalizie; terrazza se aperta.",
        "shortHistory": "Storici grandi magazzini parigini famosi per la cupola Art Nouveau in vetro colorato.",
        "curiosities": [
          "La cupola del 1912 è alta 43 metri."
        ],
        "whatToSee": [
          "Grande albero di Natale sospeso sotto la cupola",
          "Vetrine natalizie su Boulevard Haussmann",
          "Terrazza panoramica (se aperta)"
        ],
        "photoSpot": "Passerella centrale o balconate al 3°–4° piano.",
        "entryAndPrice": "Ingresso gratuito",
        "priceStatus": "verified",
        "hoursForDate": "Venerdì: 10:00–20:30 (verificato)",
        "hoursStatus": "verified",
        "officialUrl": "https://haussmann.galerieslafayette.com/",
        "category": "shopping",
        "weather": "mixed",
        "status": "planned",
        "priority": "alta",
        "nearby": [
          {
            "id": "d5-5-nb-3",
            "name": "Olympia",
            "address": "28 Boulevard des Capucines, Paris",
            "coordinates": {
              "lat": 48.870152,
              "lon": 2.328364
            },
            "distanceMeters": 451,
            "distanceLabel": "451 m (~6 min)",
            "description": "Storico teatro musicale parigino su Boulevard des Capucines.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Olympia%2028%20Boulevard%20des%20Capucines%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.870152%2C2.328364&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.870152%2C2.328364&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.870152,2.328364&endname=Olympia",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d5-5-nb-2",
            "name": "Galerie Vivienne",
            "address": "4 Rue des Petits Champs, Paris",
            "coordinates": {
              "lat": 48.866215,
              "lon": 2.339481
            },
            "distanceMeters": 932,
            "distanceLabel": "932 m (~13 min)",
            "description": "Elegante passaggio coperto ottocentesco con mosaici e librerie.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Galerie_Vivienne%2C_12_March_2015.jpg/960px-Galerie_Vivienne%2C_12_March_2015.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/galerie-vivienne.jpg",
              "author": "Benh LIEU SONG",
              "license": "CC BY-SA 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Galerie_Vivienne,_12_March_2015.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Galerie%20Vivienne%204%20Rue%20des%20Petits%20Champs%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.866215%2C2.339481&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.866215%2C2.339481&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.866215,2.339481&endname=Galerie%20Vivienne",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d5-5-nb-1",
            "name": "Palais Royal",
            "address": "Place du Palais Royal, Paris",
            "coordinates": {
              "lat": 48.862551,
              "lon": 2.336751
            },
            "distanceMeters": 1225,
            "distanceLabel": "1.2 km (~18 min)",
            "description": "Giardino porticato e cortile con le celebri colonne di Buren.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Palais_Royal_et_les_Colonnes_de_Buren.jpg/960px-Palais_Royal_et_les_Colonnes_de_Buren.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/palais-royal.jpg",
              "author": "ros k @ getfunky_paris",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Palais_Royal_et_les_Colonnes_de_Buren.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Palais%20Royal%20Place%20du%20Palais%20Royal%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.862551%2C2.336751&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.862551%2C2.336751&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.862551,2.336751&endname=Palais%20Royal",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Galerie_Lafayette_Haussmann_Dome.jpg/960px-Galerie_Lafayette_Haussmann_Dome.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/galeries-lafayette.jpg",
          "author": "Benh LIEU SONG (Flickr)",
          "license": "CC BY-SA 3.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Galerie_Lafayette_Haussmann_Dome.jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Galeries%20Lafayette%2040%20Boulevard%20Haussmann%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.873199%2C2.332434&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.873199%2C2.332434&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.873199,2.332434&endname=Galeries%20Lafayette",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d5-6",
        "dayDate": "2026-12-11",
        "time": "17:15",
        "timeStatus": "indicative",
        "durationMinutes": 45,
        "name": "Printemps Haussmann",
        "address": "64 Boulevard Haussmann, Paris",
        "coordinates": {
          "lat": 48.873773,
          "lon": 2.328157
        },
        "description": "Vetrine e decorazioni; terrazza facoltativa.",
        "shortHistory": "Elegante grande magazzino adiacente alle Galeries Lafayette con vetrine animate.",
        "curiosities": [
          "Spesso meno affollato delle Galeries Lafayette per godersi i dettagli delle vetrine."
        ],
        "whatToSee": [
          "Vetrine natalizie",
          "Cupola e terrazza"
        ],
        "photoSpot": "Marciapiede di Boulevard Haussmann.",
        "entryAndPrice": "Ingresso gratuito",
        "priceStatus": "verified",
        "hoursForDate": "Venerdì: 10:00–20:00 (verificato)",
        "hoursStatus": "verified",
        "officialUrl": "https://www.printemps.com/",
        "category": "shopping",
        "weather": "mixed",
        "status": "optional",
        "priority": "bassa",
        "nearby": [
          {
            "id": "d5-6-nb-3",
            "name": "Olympia",
            "address": "28 Boulevard des Capucines, Paris",
            "coordinates": {
              "lat": 48.870152,
              "lon": 2.328364
            },
            "distanceMeters": 403,
            "distanceLabel": "403 m (~6 min)",
            "description": "Storico teatro musicale parigino su Boulevard des Capucines.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Olympia%2028%20Boulevard%20des%20Capucines%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.870152%2C2.328364&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.870152%2C2.328364&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.870152,2.328364&endname=Olympia",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d5-6-nb-2",
            "name": "Galerie Vivienne",
            "address": "4 Rue des Petits Champs, Paris",
            "coordinates": {
              "lat": 48.866215,
              "lon": 2.339481
            },
            "distanceMeters": 1180,
            "distanceLabel": "1.2 km (~17 min)",
            "description": "Elegante passaggio coperto ottocentesco con mosaici e librerie.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Galerie_Vivienne%2C_12_March_2015.jpg/960px-Galerie_Vivienne%2C_12_March_2015.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/galerie-vivienne.jpg",
              "author": "Benh LIEU SONG",
              "license": "CC BY-SA 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Galerie_Vivienne,_12_March_2015.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Galerie%20Vivienne%204%20Rue%20des%20Petits%20Champs%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.866215%2C2.339481&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.866215%2C2.339481&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.866215,2.339481&endname=Galerie%20Vivienne",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d5-6-nb-1",
            "name": "Palais Royal",
            "address": "Place du Palais Royal, Paris",
            "coordinates": {
              "lat": 48.862551,
              "lon": 2.336751
            },
            "distanceMeters": 1397,
            "distanceLabel": "1.4 km (~20 min)",
            "description": "Giardino porticato e cortile con le celebri colonne di Buren.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Palais_Royal_et_les_Colonnes_de_Buren.jpg/960px-Palais_Royal_et_les_Colonnes_de_Buren.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/palais-royal.jpg",
              "author": "ros k @ getfunky_paris",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Palais_Royal_et_les_Colonnes_de_Buren.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Palais%20Royal%20Place%20du%20Palais%20Royal%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.862551%2C2.336751&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.862551%2C2.336751&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.862551,2.336751&endname=Palais%20Royal",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Paris_9_-_Printemps_cupola_%282%29.jpg/960px-Paris_9_-_Printemps_cupola_%282%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/printemps-haussmann.jpg",
          "author": "Selbymay",
          "license": "CC BY-SA 3.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris_9_-_Printemps_cupola_(2).jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Printemps%20Haussmann%2064%20Boulevard%20Haussmann%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.873773%2C2.328157&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.873773%2C2.328157&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.873773,2.328157&endname=Printemps%20Haussmann",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d5-7",
        "dayDate": "2026-12-11",
        "time": "18:00",
        "timeStatus": "indicative",
        "durationMinutes": 30,
        "name": "Galeries Lafayette Gourmet",
        "address": "35 Boulevard Haussmann, Paris",
        "coordinates": {
          "lat": 48.873198,
          "lon": 2.330253
        },
        "description": "Macarons, pasticceria e dolci natalizi.",
        "shortHistory": "Padiglione gastronomico dedicato all'alta pasticceria e alle specialità francesi.",
        "curiosities": [
          "Aperto fino alle 21:30 dal lunedì al sabato."
        ],
        "whatToSee": [
          "Macarons, cioccolatini e dolci natalizi"
        ],
        "photoSpot": "Banchi pasticceria al piano terra.",
        "entryAndPrice": "A consumo",
        "priceStatus": "estimate",
        "hoursForDate": "Venerdì: 09:30–21:30 (verificato)",
        "hoursStatus": "verified",
        "officialUrl": "https://haussmann.galerieslafayette.com/",
        "category": "gastronomia",
        "weather": "indoor",
        "status": "optional",
        "priority": "bassa",
        "nearby": [
          {
            "id": "d5-7-nb-3",
            "name": "Olympia",
            "address": "28 Boulevard des Capucines, Paris",
            "coordinates": {
              "lat": 48.870152,
              "lon": 2.328364
            },
            "distanceMeters": 366,
            "distanceLabel": "366 m (~5 min)",
            "description": "Storico teatro musicale parigino su Boulevard des Capucines.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Olympia%2028%20Boulevard%20des%20Capucines%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.870152%2C2.328364&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.870152%2C2.328364&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.870152,2.328364&endname=Olympia",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d5-7-nb-2",
            "name": "Galerie Vivienne",
            "address": "4 Rue des Petits Champs, Paris",
            "coordinates": {
              "lat": 48.866215,
              "lon": 2.339481
            },
            "distanceMeters": 1029,
            "distanceLabel": "1.0 km (~15 min)",
            "description": "Elegante passaggio coperto ottocentesco con mosaici e librerie.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Galerie_Vivienne%2C_12_March_2015.jpg/960px-Galerie_Vivienne%2C_12_March_2015.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/galerie-vivienne.jpg",
              "author": "Benh LIEU SONG",
              "license": "CC BY-SA 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Galerie_Vivienne,_12_March_2015.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Galerie%20Vivienne%204%20Rue%20des%20Petits%20Champs%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.866215%2C2.339481&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.866215%2C2.339481&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.866215,2.339481&endname=Galerie%20Vivienne",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d5-7-nb-1",
            "name": "Palais Royal",
            "address": "Place du Palais Royal, Paris",
            "coordinates": {
              "lat": 48.862551,
              "lon": 2.336751
            },
            "distanceMeters": 1276,
            "distanceLabel": "1.3 km (~18 min)",
            "description": "Giardino porticato e cortile con le celebri colonne di Buren.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Palais_Royal_et_les_Colonnes_de_Buren.jpg/960px-Palais_Royal_et_les_Colonnes_de_Buren.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/palais-royal.jpg",
              "author": "ros k @ getfunky_paris",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Palais_Royal_et_les_Colonnes_de_Buren.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Palais%20Royal%20Place%20du%20Palais%20Royal%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.862551%2C2.336751&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.862551%2C2.336751&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.862551,2.336751&endname=Palais%20Royal",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Galeries%20Lafayette%20Gourmet%2035%20Boulevard%20Haussmann%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.873198%2C2.330253&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.873198%2C2.330253&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.873198,2.330253&endname=Galeries%20Lafayette%20Gourmet",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d5-8",
        "dayDate": "2026-12-11",
        "time": "20:00",
        "timeStatus": "indicative",
        "durationMinutes": 90,
        "name": "Jungle Palace",
        "address": "12 Rue de la Fidélité, Paris",
        "coordinates": {
          "lat": 48.874653,
          "lon": 2.35674
        },
        "description": "Cena immersiva a tema giungla; prenotazione da fare, prezzi da verificare.",
        "shortHistory": "Ristorante immersivo del gruppo Ephemera con proiezioni a 360° e scenografia giungla.",
        "curiosities": [
          "Prenotazione fortemente consigliata per le 20:00 su ephemera-group.com."
        ],
        "whatToSee": [
          "Smash burger (~19 €), enchiladas (~16 €), pasta stracciatella (~15 €)",
          "Mocktail e limonate (~5,50 €)"
        ],
        "photoSpot": "Sala centrale sotto le proiezioni.",
        "entryAndPrice": "Media 30–40 € a persona (piatti 15–22 € verificati)",
        "priceStatus": "verified",
        "hoursForDate": "Cena 20:00 (da prenotare)",
        "hoursStatus": "to_verify",
        "officialUrl": "https://www.ephemera-group.com/",
        "category": "gastronomia",
        "weather": "indoor",
        "status": "to_book",
        "priority": "alta",
        "nearby": [
          {
            "id": "d5-8-nb-2",
            "name": "Galerie Vivienne",
            "address": "4 Rue des Petits Champs, Paris",
            "coordinates": {
              "lat": 48.866215,
              "lon": 2.339481
            },
            "distanceMeters": 1573,
            "distanceLabel": "1.6 km (~22 min)",
            "description": "Elegante passaggio coperto ottocentesco con mosaici e librerie.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Galerie_Vivienne%2C_12_March_2015.jpg/960px-Galerie_Vivienne%2C_12_March_2015.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/galerie-vivienne.jpg",
              "author": "Benh LIEU SONG",
              "license": "CC BY-SA 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Galerie_Vivienne,_12_March_2015.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Galerie%20Vivienne%204%20Rue%20des%20Petits%20Champs%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.866215%2C2.339481&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.866215%2C2.339481&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.866215,2.339481&endname=Galerie%20Vivienne",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d5-8-nb-1",
            "name": "Palais Royal",
            "address": "Place du Palais Royal, Paris",
            "coordinates": {
              "lat": 48.862551,
              "lon": 2.336751
            },
            "distanceMeters": 1987,
            "distanceLabel": "2.0 km (~28 min)",
            "description": "Giardino porticato e cortile con le celebri colonne di Buren.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Palais_Royal_et_les_Colonnes_de_Buren.jpg/960px-Palais_Royal_et_les_Colonnes_de_Buren.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/palais-royal.jpg",
              "author": "ros k @ getfunky_paris",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Palais_Royal_et_les_Colonnes_de_Buren.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Palais%20Royal%20Place%20du%20Palais%20Royal%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.862551%2C2.336751&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.862551%2C2.336751&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.862551,2.336751&endname=Palais%20Royal",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d5-8-nb-3",
            "name": "Olympia",
            "address": "28 Boulevard des Capucines, Paris",
            "coordinates": {
              "lat": 48.870152,
              "lon": 2.328364
            },
            "distanceMeters": 2135,
            "distanceLabel": "2.1 km (~30 min)",
            "description": "Storico teatro musicale parigino su Boulevard des Capucines.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Olympia%2028%20Boulevard%20des%20Capucines%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.870152%2C2.328364&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.870152%2C2.328364&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.870152,2.328364&endname=Olympia",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Jungle%20Palace%2012%20Rue%20de%20la%20Fid%C3%A9lit%C3%A9%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.874653%2C2.35674&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.874653%2C2.35674&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.874653,2.35674&endname=Jungle%20Palace",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      }
    ]
  },
  {
    "date": "2026-12-12",
    "dayNumber": 6,
    "title": "Arrivederci Parigi",
    "subtitle": "Sabato 12 Dicembre · Giorno 6",
    "transport": "Metro 12 Jules Joffrin verso Mairie d’Issy fino a Madeleine, metro 14 verso Aéroport d’Orly.",
    "rain": {
      "light": "Sacro Cuore e caffè",
      "heavy": "Colazione e negozi vicini, anticipo aeroporto"
    },
    "foodIdeas": [
      "Boulangerie Rue Ordener: colazione 12–22 € e panini 10–18 € in due"
    ],
    "activities": [
      {
        "id": "d6-1",
        "dayDate": "2026-12-12",
        "time": "08:00",
        "timeStatus": "indicative",
        "durationMinutes": 45,
        "name": "Colazione Montmartre",
        "address": "Rue Ordener, Paris",
        "coordinates": {
          "lat": 48.89288,
          "lon": 2.34107
        },
        "description": "Ultima colazione seduti; check-out e deposito bagagli da confermare.",
        "shortHistory": "Ultima colazione seduti in quartiere prima del check-out e del deposito bagagli.",
        "curiosities": [
          "Tenere d'occhio l'orologio per rientrare in hotel entro le 11:40."
        ],
        "whatToSee": [
          "Croissant, pain au chocolat, bevande calde",
          "Preparazione panini da asporto"
        ],
        "photoSpot": "Tavolino di Rue Ordener.",
        "entryAndPrice": "Stima 12–22 € in due",
        "priceStatus": "estimate",
        "hoursForDate": "Mattina dalle 08:00",
        "hoursStatus": "to_verify",
        "officialUrl": null,
        "category": "gastronomia",
        "weather": "indoor",
        "status": "planned",
        "priority": "alta",
        "nearby": [
          {
            "id": "d6-1-nb-2",
            "name": "Musée de Montmartre",
            "address": "12 Rue Cortot, Paris",
            "coordinates": {
              "lat": 48.887704,
              "lon": 2.340626
            },
            "distanceMeters": 576,
            "distanceLabel": "576 m (~8 min)",
            "description": "Antico atelier di Renoir con giardini affacciati sui vigneti.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg/960px-Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/musee-de-montmartre.jpg",
              "author": "Kathleen Tyler Conklin",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_de_Montmartre_2,_Paris_July_13,_2006.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20de%20Montmartre%2012%20Rue%20Cortot%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887704,2.340626&endname=Mus%C3%A9e%20de%20Montmartre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d6-1-nb-1",
            "name": "Square Marcel Bleustein Blanchet",
            "address": "Rue du Chevalier de la Barre, Paris",
            "coordinates": {
              "lat": 48.887298,
              "lon": 2.34436
            },
            "distanceMeters": 666,
            "distanceLabel": "666 m (~10 min)",
            "description": "Giardino appartato proprio dietro la cupola del Sacré-Cœur.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Square%20Marcel%20Bleustein%20Blanchet%20Rue%20du%20Chevalier%20de%20la%20Barre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887298%2C2.34436&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887298%2C2.34436&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887298,2.34436&endname=Square%20Marcel%20Bleustein%20Blanchet",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Colazione%20Montmartre%20Rue%20Ordener%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.89288%2C2.34107&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.89288%2C2.34107&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.89288,2.34107&endname=Colazione%20Montmartre",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d6-2",
        "dayDate": "2026-12-12",
        "time": "09:00",
        "timeStatus": "indicative",
        "durationMinutes": 15,
        "name": "Villa Léandre",
        "address": "Villa Léandre, Paris",
        "coordinates": {
          "lat": 48.888285,
          "lon": 2.334881
        },
        "description": "Casette in stile inglese, strada residenziale.",
        "shortHistory": "Vicolo cieco residenziale a Montmartre con villette in stile anglosassone anni '20.",
        "curiosities": [
          "Ricorda più un angolo di Londra che Parigi."
        ],
        "whatToSee": [
          "Casette fiorite e porte colorate",
          "Atmosfera silenziosa"
        ],
        "photoSpot": "Al centro della stradina.",
        "entryAndPrice": "Accesso libero",
        "priceStatus": "verified",
        "hoursForDate": "Sempre accessibile",
        "hoursStatus": "verified",
        "officialUrl": null,
        "category": "quartiere",
        "weather": "outdoor",
        "status": "optional",
        "priority": "bassa",
        "nearby": [
          {
            "id": "d6-2-nb-2",
            "name": "Musée de Montmartre",
            "address": "12 Rue Cortot, Paris",
            "coordinates": {
              "lat": 48.887704,
              "lon": 2.340626
            },
            "distanceMeters": 425,
            "distanceLabel": "425 m (~6 min)",
            "description": "Antico atelier di Renoir con giardini affacciati sui vigneti.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg/960px-Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/musee-de-montmartre.jpg",
              "author": "Kathleen Tyler Conklin",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_de_Montmartre_2,_Paris_July_13,_2006.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20de%20Montmartre%2012%20Rue%20Cortot%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887704,2.340626&endname=Mus%C3%A9e%20de%20Montmartre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d6-2-nb-1",
            "name": "Square Marcel Bleustein Blanchet",
            "address": "Rue du Chevalier de la Barre, Paris",
            "coordinates": {
              "lat": 48.887298,
              "lon": 2.34436
            },
            "distanceMeters": 702,
            "distanceLabel": "702 m (~10 min)",
            "description": "Giardino appartato proprio dietro la cupola del Sacré-Cœur.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Square%20Marcel%20Bleustein%20Blanchet%20Rue%20du%20Chevalier%20de%20la%20Barre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887298%2C2.34436&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887298%2C2.34436&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887298,2.34436&endname=Square%20Marcel%20Bleustein%20Blanchet",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Paris%2C_France%2C_villa_Leandre_Rue_%285%29.jpg/960px-Paris%2C_France%2C_villa_Leandre_Rue_%285%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/villa-leandre.jpg",
          "author": "Britchi Mirela",
          "license": "CC BY-SA 3.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Paris,_France,_villa_Leandre_Rue_(5).jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Villa%20L%C3%A9andre%20Villa%20L%C3%A9andre%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.888285%2C2.334881&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.888285%2C2.334881&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.888285,2.334881&endname=Villa%20L%C3%A9andre",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d6-3",
        "dayDate": "2026-12-12",
        "time": "09:20",
        "timeStatus": "indicative",
        "durationMinutes": 15,
        "name": "Place Dalida",
        "address": "Place Dalida, Paris",
        "coordinates": {
          "lat": 48.888507,
          "lon": 2.337956
        },
        "description": "Recupero foto e rue de l’Abreuvoir.",
        "shortHistory": "Piazzetta dedicata alla celebre cantante Dalida, che visse nella vicina Rue d'Orchampt.",
        "curiosities": [
          "Uno degli scorci più fotografati di Montmartre, soprattutto con la luce del mattino o le luci serali."
        ],
        "whatToSee": [
          "Busto in bronzo di Dalida",
          "Prospettiva romantica su Rue de l'Abreuvoir"
        ],
        "photoSpot": "Inquadratura verso Rue de l'Abreuvoir con la cupola del Sacré-Cœur sullo sfondo.",
        "entryAndPrice": "Accesso libero",
        "priceStatus": "verified",
        "hoursForDate": "Sempre accessibile",
        "hoursStatus": "verified",
        "officialUrl": null,
        "category": "quartiere",
        "weather": "outdoor",
        "status": "optional",
        "priority": "media",
        "nearby": [
          {
            "id": "d6-3-nb-2",
            "name": "Musée de Montmartre",
            "address": "12 Rue Cortot, Paris",
            "coordinates": {
              "lat": 48.887704,
              "lon": 2.340626
            },
            "distanceMeters": 215,
            "distanceLabel": "215 m (~3 min)",
            "description": "Antico atelier di Renoir con giardini affacciati sui vigneti.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg/960px-Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/musee-de-montmartre.jpg",
              "author": "Kathleen Tyler Conklin",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_de_Montmartre_2,_Paris_July_13,_2006.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20de%20Montmartre%2012%20Rue%20Cortot%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887704,2.340626&endname=Mus%C3%A9e%20de%20Montmartre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d6-3-nb-1",
            "name": "Square Marcel Bleustein Blanchet",
            "address": "Rue du Chevalier de la Barre, Paris",
            "coordinates": {
              "lat": 48.887298,
              "lon": 2.34436
            },
            "distanceMeters": 487,
            "distanceLabel": "487 m (~7 min)",
            "description": "Giardino appartato proprio dietro la cupola del Sacré-Cœur.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Square%20Marcel%20Bleustein%20Blanchet%20Rue%20du%20Chevalier%20de%20la%20Barre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887298%2C2.34436&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887298%2C2.34436&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887298,2.34436&endname=Square%20Marcel%20Bleustein%20Blanchet",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Place_Dalida_Montmartre_Paris_France.JPG/960px-Place_Dalida_Montmartre_Paris_France.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/place-dalida.jpg",
          "author": "User: (WT-shared) Riggwelter at  wts wikivoyage",
          "license": "CC BY-SA 4.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Place_Dalida_Montmartre_Paris_France.JPG",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Place%20Dalida%20Place%20Dalida%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.888507%2C2.337956&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.888507%2C2.337956&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.888507,2.337956&endname=Place%20Dalida",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d6-4",
        "dayDate": "2026-12-12",
        "time": "09:35",
        "timeStatus": "indicative",
        "durationMinutes": 10,
        "name": "La Maison Rose",
        "address": "2 Rue de l’Abreuvoir, Paris",
        "coordinates": {
          "lat": 48.887989,
          "lon": 2.339603
        },
        "description": "Foto alla luce del mattino.",
        "shortHistory": "Storica casetta rosa con persiane verdi all'angolo di Rue de l'Abreuvoir, immortalata da Maurice Utrillo.",
        "curiosities": [
          "Fu frequentata da artisti della Belle Époque e delle avanguardie parigine."
        ],
        "whatToSee": [
          "Facciata esterna rosa e verde",
          "Scorcio su Rue des Saules e i vigneti di Montmartre"
        ],
        "photoSpot": "Dall'angolo inferiore di Rue de l'Abreuvoir.",
        "entryAndPrice": "Foto esterna gratuita",
        "priceStatus": "verified",
        "hoursForDate": "Esterno sempre visibile",
        "hoursStatus": "verified",
        "officialUrl": null,
        "category": "monumento",
        "weather": "outdoor",
        "status": "optional",
        "priority": "media",
        "nearby": [
          {
            "id": "d6-4-nb-2",
            "name": "Musée de Montmartre",
            "address": "12 Rue Cortot, Paris",
            "coordinates": {
              "lat": 48.887704,
              "lon": 2.340626
            },
            "distanceMeters": 81,
            "distanceLabel": "81 m (~1 min)",
            "description": "Antico atelier di Renoir con giardini affacciati sui vigneti.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg/960px-Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/musee-de-montmartre.jpg",
              "author": "Kathleen Tyler Conklin",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_de_Montmartre_2,_Paris_July_13,_2006.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20de%20Montmartre%2012%20Rue%20Cortot%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887704,2.340626&endname=Mus%C3%A9e%20de%20Montmartre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d6-4-nb-1",
            "name": "Square Marcel Bleustein Blanchet",
            "address": "Rue du Chevalier de la Barre, Paris",
            "coordinates": {
              "lat": 48.887298,
              "lon": 2.34436
            },
            "distanceMeters": 356,
            "distanceLabel": "356 m (~5 min)",
            "description": "Giardino appartato proprio dietro la cupola del Sacré-Cœur.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Square%20Marcel%20Bleustein%20Blanchet%20Rue%20du%20Chevalier%20de%20la%20Barre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887298%2C2.34436&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887298%2C2.34436&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887298,2.34436&endname=Square%20Marcel%20Bleustein%20Blanchet",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Montmartre_Maison_Rose_002.JPG/960px-Montmartre_Maison_Rose_002.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/la-maison-rose.jpg",
          "author": "Moonik",
          "license": "CC BY-SA 3.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Montmartre_Maison_Rose_002.JPG",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=La%20Maison%20Rose%202%20Rue%20de%20l%E2%80%99Abreuvoir%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887989%2C2.339603&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887989%2C2.339603&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.887989,2.339603&endname=La%20Maison%20Rose",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d6-5",
        "dayDate": "2026-12-12",
        "time": "09:45",
        "timeStatus": "indicative",
        "durationMinutes": 30,
        "name": "Sacré-Cœur",
        "address": "35 Rue du Chevalier de la Barre, Paris",
        "coordinates": {
          "lat": 48.887094,
          "lon": 2.343424
        },
        "description": "Recupero eventuale visita e panorama.",
        "shortHistory": "Basilica romano-bizantina in pietra bianca di Château-Landon sulla sommità della Butte Montmartre.",
        "curiosities": [
          "La pietra bianca si autopulisce con l'acqua piovana rilasciando calcite."
        ],
        "whatToSee": [
          "Mosaico absidale del Cristo in gloria",
          "Navata e atmosfera silenziosa",
          "Belvedere panoramico su Parigi"
        ],
        "photoSpot": "Scalinata panoramica davanti alla facciata.",
        "entryAndPrice": "Ingresso basilica gratuito (cupola a pagamento se desiderata)",
        "priceStatus": "verified",
        "hoursForDate": "Indicativo 06:30–22:30 (da riconfermare)",
        "hoursStatus": "to_verify",
        "officialUrl": "https://www.sacre-coeur-montmartre.com/",
        "category": "monumento",
        "weather": "mixed",
        "status": "optional",
        "priority": "alta",
        "nearby": [
          {
            "id": "d6-5-nb-1",
            "name": "Square Marcel Bleustein Blanchet",
            "address": "Rue du Chevalier de la Barre, Paris",
            "coordinates": {
              "lat": 48.887298,
              "lon": 2.34436
            },
            "distanceMeters": 72,
            "distanceLabel": "72 m (~1 min)",
            "description": "Giardino appartato proprio dietro la cupola del Sacré-Cœur.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Square%20Marcel%20Bleustein%20Blanchet%20Rue%20du%20Chevalier%20de%20la%20Barre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887298%2C2.34436&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887298%2C2.34436&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887298,2.34436&endname=Square%20Marcel%20Bleustein%20Blanchet",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d6-5-nb-2",
            "name": "Musée de Montmartre",
            "address": "12 Rue Cortot, Paris",
            "coordinates": {
              "lat": 48.887704,
              "lon": 2.340626
            },
            "distanceMeters": 216,
            "distanceLabel": "216 m (~3 min)",
            "description": "Antico atelier di Renoir con giardini affacciati sui vigneti.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg/960px-Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/musee-de-montmartre.jpg",
              "author": "Kathleen Tyler Conklin",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_de_Montmartre_2,_Paris_July_13,_2006.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20de%20Montmartre%2012%20Rue%20Cortot%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887704,2.340626&endname=Mus%C3%A9e%20de%20Montmartre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Sacre_Coeur_cor_Jesu-DSC_1455w.jpg/960px-Sacre_Coeur_cor_Jesu-DSC_1455w.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/sacre-cur.jpg",
          "author": "P e z i",
          "license": "CC BY-SA 3.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Sacre_Coeur_cor_Jesu-DSC_1455w.jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Sacr%C3%A9-C%C5%93ur%2035%20Rue%20du%20Chevalier%20de%20la%20Barre%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887094%2C2.343424&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887094%2C2.343424&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.887094,2.343424&endname=Sacr%C3%A9-C%C5%93ur",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d6-6",
        "dayDate": "2026-12-12",
        "time": "10:15",
        "timeStatus": "indicative",
        "durationMinutes": 40,
        "name": "Place du Tertre",
        "address": "Place du Tertre, Paris",
        "coordinates": {
          "lat": 48.886518,
          "lon": 2.340671
        },
        "description": "Piazza degli artisti; ritratto solo con prezzo e durata concordati.",
        "shortHistory": "Storica piazza dei pittori e ritrattisti di Montmartre.",
        "curiosities": [
          "Frequentata un tempo da Picasso, Modigliani e Toulouse-Lautrec."
        ],
        "whatToSee": [
          "Cavalletti all'aperto",
          "Eventuale ritratto concordando prima prezzo e durata"
        ],
        "photoSpot": "Angolo nord della piazza.",
        "entryAndPrice": "Accesso libero (eventuale ritratto 40–100 €)",
        "priceStatus": "estimate",
        "hoursForDate": "Sempre accessibile",
        "hoursStatus": "verified",
        "officialUrl": null,
        "category": "quartiere",
        "weather": "outdoor",
        "status": "optional",
        "priority": "bassa",
        "nearby": [
          {
            "id": "d6-6-nb-2",
            "name": "Musée de Montmartre",
            "address": "12 Rue Cortot, Paris",
            "coordinates": {
              "lat": 48.887704,
              "lon": 2.340626
            },
            "distanceMeters": 132,
            "distanceLabel": "132 m (~2 min)",
            "description": "Antico atelier di Renoir con giardini affacciati sui vigneti.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg/960px-Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/musee-de-montmartre.jpg",
              "author": "Kathleen Tyler Conklin",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_de_Montmartre_2,_Paris_July_13,_2006.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20de%20Montmartre%2012%20Rue%20Cortot%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887704,2.340626&endname=Mus%C3%A9e%20de%20Montmartre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d6-6-nb-1",
            "name": "Square Marcel Bleustein Blanchet",
            "address": "Rue du Chevalier de la Barre, Paris",
            "coordinates": {
              "lat": 48.887298,
              "lon": 2.34436
            },
            "distanceMeters": 283,
            "distanceLabel": "283 m (~4 min)",
            "description": "Giardino appartato proprio dietro la cupola del Sacré-Cœur.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Square%20Marcel%20Bleustein%20Blanchet%20Rue%20du%20Chevalier%20de%20la%20Barre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887298%2C2.34436&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887298%2C2.34436&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887298,2.34436&endname=Square%20Marcel%20Bleustein%20Blanchet",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "verified",
          "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Butte_Montmartre%2C_Place_du_Tertre%2C_Paris.jpg/960px-Butte_Montmartre%2C_Place_du_Tertre%2C_Paris.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "localPath": "/images/places/place-du-tertre.jpg",
          "author": "Britchi Mirela",
          "license": "CC BY-SA 3.0",
          "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
          "commonsUrl": "https://commons.wikimedia.org/wiki/File:Butte_Montmartre,_Place_du_Tertre,_Paris.jpg",
          "caption": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Place%20du%20Tertre%20Place%20du%20Tertre%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.886518%2C2.340671&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.886518%2C2.340671&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.886518,2.340671&endname=Place%20du%20Tertre",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d6-7",
        "dayDate": "2026-12-12",
        "time": "11:15",
        "timeStatus": "indicative",
        "durationMinutes": 45,
        "name": "Hôtel Jardins de Montmartre",
        "address": "131 Rue Ordener, Paris",
        "coordinates": {
          "lat": 48.89288,
          "lon": 2.34107
        },
        "description": "Pranzo da asporto e recupero bagagli entro 11:40.",
        "shortHistory": "Base del soggiorno nel 18° arrondissement, in Rue Ordener a pochi passi da Jules Joffrin (Metro 12).",
        "curiosities": [
          "La Metro 12 collega direttamente Jules Joffrin a Saint-Lazare, Concorde e Madeleine."
        ],
        "whatToSee": [
          "Check-in",
          "Deposito bagagli e verifica orario check-out per sabato 12/12"
        ],
        "photoSpot": "Via tipica parigina su Rue Ordener.",
        "entryAndPrice": "Soggiorno già prenotato (verificare eventuale tassa di soggiorno)",
        "priceStatus": "user_confirmed",
        "hoursForDate": "Check-in stimato 17:15–18:00",
        "hoursStatus": "to_verify",
        "officialUrl": null,
        "category": "hotel",
        "weather": "indoor",
        "status": "planned",
        "priority": "alta",
        "nearby": [
          {
            "id": "d6-7-nb-2",
            "name": "Musée de Montmartre",
            "address": "12 Rue Cortot, Paris",
            "coordinates": {
              "lat": 48.887704,
              "lon": 2.340626
            },
            "distanceMeters": 576,
            "distanceLabel": "576 m (~8 min)",
            "description": "Antico atelier di Renoir con giardini affacciati sui vigneti.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg/960px-Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/musee-de-montmartre.jpg",
              "author": "Kathleen Tyler Conklin",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_de_Montmartre_2,_Paris_July_13,_2006.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20de%20Montmartre%2012%20Rue%20Cortot%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887704,2.340626&endname=Mus%C3%A9e%20de%20Montmartre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d6-7-nb-1",
            "name": "Square Marcel Bleustein Blanchet",
            "address": "Rue du Chevalier de la Barre, Paris",
            "coordinates": {
              "lat": 48.887298,
              "lon": 2.34436
            },
            "distanceMeters": 666,
            "distanceLabel": "666 m (~10 min)",
            "description": "Giardino appartato proprio dietro la cupola del Sacré-Cœur.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Square%20Marcel%20Bleustein%20Blanchet%20Rue%20du%20Chevalier%20de%20la%20Barre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887298%2C2.34436&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887298%2C2.34436&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887298,2.34436&endname=Square%20Marcel%20Bleustein%20Blanchet",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=H%C3%B4tel%20Jardins%20de%20Montmartre%20131%20Rue%20Ordener%2C%20Paris",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.89288%2C2.34107&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.89288%2C2.34107&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.89288,2.34107&endname=H%C3%B4tel%20Jardins%20de%20Montmartre",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d6-8",
        "dayDate": "2026-12-12",
        "time": "12:00",
        "timeStatus": "indicative",
        "durationMinutes": 90,
        "name": "Trasferimento Orly",
        "address": "Aéroport Paris-Orly, France",
        "coordinates": {
          "lat": 48.73118,
          "lon": 2.393586
        },
        "description": "Metro 12 Jules Joffrin–Madeleine, metro 14 Orly. Arrivo stimato 13:15–13:30; terminal da verificare.",
        "shortHistory": "Tragitto in metropolitana: Metro 12 da Jules Joffrin a Madeleine, poi Metro 14 diretta fino ad Aéroport d'Orly.",
        "curiosities": [
          "La linea 14 automatica collega il centro a Orly in circa 25 minuti; verificare eventuali lavori."
        ],
        "whatToSee": [
          "Cambio a Madeleine su Metro 14",
          "Verifica terminal di partenza Wizz Air"
        ],
        "photoSpot": "Arrivo al terminal Orly.",
        "entryAndPrice": "Verificare copertura pass Navigo / biglietto aeroporto",
        "priceStatus": "to_verify",
        "hoursForDate": "Partenza 12:00 (arrivo stimato 13:15–13:30)",
        "hoursStatus": "to_verify",
        "officialUrl": "https://www.ratp.fr/",
        "category": "trasporto",
        "weather": "indoor",
        "status": "planned",
        "priority": "alta",
        "nearby": [
          {
            "id": "d6-8-nb-1",
            "name": "Square Marcel Bleustein Blanchet",
            "address": "Rue du Chevalier de la Barre, Paris",
            "coordinates": {
              "lat": 48.887298,
              "lon": 2.34436
            },
            "distanceMeters": 17730,
            "distanceLabel": "17.7 km (~253 min)",
            "description": "Giardino appartato proprio dietro la cupola del Sacré-Cœur.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Square%20Marcel%20Bleustein%20Blanchet%20Rue%20du%20Chevalier%20de%20la%20Barre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887298%2C2.34436&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887298%2C2.34436&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887298,2.34436&endname=Square%20Marcel%20Bleustein%20Blanchet",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d6-8-nb-2",
            "name": "Musée de Montmartre",
            "address": "12 Rue Cortot, Paris",
            "coordinates": {
              "lat": 48.887704,
              "lon": 2.340626
            },
            "distanceMeters": 17832,
            "distanceLabel": "17.8 km (~255 min)",
            "description": "Antico atelier di Renoir con giardini affacciati sui vigneti.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg/960px-Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/musee-de-montmartre.jpg",
              "author": "Kathleen Tyler Conklin",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_de_Montmartre_2,_Paris_July_13,_2006.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20de%20Montmartre%2012%20Rue%20Cortot%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887704,2.340626&endname=Mus%C3%A9e%20de%20Montmartre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Trasferimento%20Orly%20A%C3%A9roport%20Paris-Orly%2C%20France",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.73118%2C2.393586&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.73118%2C2.393586&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.73118,2.393586&endname=Trasferimento%20Orly",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      },
      {
        "id": "d6-9",
        "dayDate": "2026-12-12",
        "time": "16:40",
        "timeStatus": "user_confirmed",
        "durationMinutes": 0,
        "name": "Volo Wizz Air",
        "address": "Aéroport Paris-Orly, France",
        "coordinates": {
          "lat": 48.73118,
          "lon": 2.393586
        },
        "description": "Volo di ritorno; orario riferito dall’utente.",
        "shortHistory": "Volo di rientro dall'aeroporto di Parigi Orly.",
        "curiosities": [
          "Controllare terminal esatto e franchigia bagaglio sull'app Wizz Air."
        ],
        "whatToSee": [
          "Check-in online",
          "Controlli di sicurezza e imbarco"
        ],
        "photoSpot": "Gate d'imbarco.",
        "entryAndPrice": "Volo già prenotato",
        "priceStatus": "user_confirmed",
        "hoursForDate": "Decollo 16:40 (riferito dalla coppia)",
        "hoursStatus": "verified",
        "officialUrl": "https://wizzair.com/",
        "category": "trasporto",
        "weather": "mixed",
        "status": "confirmed",
        "priority": "alta",
        "nearby": [
          {
            "id": "d6-9-nb-1",
            "name": "Square Marcel Bleustein Blanchet",
            "address": "Rue du Chevalier de la Barre, Paris",
            "coordinates": {
              "lat": 48.887298,
              "lon": 2.34436
            },
            "distanceMeters": 17730,
            "distanceLabel": "17.7 km (~253 min)",
            "description": "Giardino appartato proprio dietro la cupola del Sacré-Cœur.",
            "category": "monumento",
            "photo": {
              "status": "to_source",
              "url": null,
              "localPath": null,
              "author": null,
              "license": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Square%20Marcel%20Bleustein%20Blanchet%20Rue%20du%20Chevalier%20de%20la%20Barre%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887298%2C2.34436&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887298%2C2.34436&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887298,2.34436&endname=Square%20Marcel%20Bleustein%20Blanchet",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          },
          {
            "id": "d6-9-nb-2",
            "name": "Musée de Montmartre",
            "address": "12 Rue Cortot, Paris",
            "coordinates": {
              "lat": 48.887704,
              "lon": 2.340626
            },
            "distanceMeters": 17832,
            "distanceLabel": "17.8 km (~255 min)",
            "description": "Antico atelier di Renoir con giardini affacciati sui vigneti.",
            "category": "monumento",
            "photo": {
              "status": "verified",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg/960px-Mus%C3%A9e_de_Montmartre_2%2C_Paris_July_13%2C_2006.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "localPath": "/images/places/musee-de-montmartre.jpg",
              "author": "Kathleen Tyler Conklin",
              "license": "CC BY 2.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
              "commonsUrl": "https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_de_Montmartre_2,_Paris_July_13,_2006.jpg",
              "caption": null
            },
            "maps": "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20de%20Montmartre%2012%20Rue%20Cortot%2C%20Paris",
            "walking": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=walking",
            "transit": "https://www.google.com/maps/dir/?api=1&destination=48.887704%2C2.340626&travelmode=transit",
            "citymapper": "https://citymapper.com/directions?endcoord=48.887704,2.340626&endname=Mus%C3%A9e%20de%20Montmartre",
            "source": "Base Adresse Nationale (data.gouv.fr)",
            "verifiedAt": "2026-11-25"
          }
        ],
        "photo": {
          "status": "to_source",
          "url": null,
          "localPath": null,
          "author": null,
          "license": null
        },
        "maps": "https://www.google.com/maps/search/?api=1&query=Volo%20Wizz%20Air%20A%C3%A9roport%20Paris-Orly%2C%20France",
        "walking": "https://www.google.com/maps/dir/?api=1&destination=48.73118%2C2.393586&travelmode=walking",
        "transit": "https://www.google.com/maps/dir/?api=1&destination=48.73118%2C2.393586&travelmode=transit",
        "citymapper": "https://citymapper.com/directions?endcoord=48.73118,2.393586&endname=Volo%20Wizz%20Air",
        "source": "Base Adresse Nationale (data.gouv.fr)",
        "verifiedAt": "2026-11-25"
      }
    ]
  }
];

export const RESTAURANTS_DATA: RestaurantCard[] = [
  {
    "id": "rest-bouillon-pigalle",
    "name": "Bouillon Pigalle",
    "dayDates": [
      "2026-12-07"
    ],
    "address": "22 Boulevard de Clichy, 75018 Paris",
    "coordinates": {
      "lat": 48.882583,
      "lon": 2.337451
    },
    "cuisine": "Brasserie tradizionale francese",
    "priceRangePerTwo": "35–48 € in due",
    "priceStatus": "verified",
    "nonAlcoholicNote": "Carafe d'eau gratuita, bibite analcoliche disponibili.",
    "hours": "Tutti i giorni 12:00–24:00 (servizio continuo)",
    "hoursStatus": "verified",
    "specialties": [
      "Soupe à l'oignon",
      "Bœuf bourguignon",
      "Crème brûlée"
    ],
    "menuHighlights": [
      {
        "fr": "Soupe à l'oignon gratinée",
        "it": "Zuppa di cipolle gratinata",
        "price": "~3,90 €"
      },
      {
        "fr": "Bœuf bourguignon",
        "it": "Manzo brasato al borgogna",
        "price": "~12,20 €"
      },
      {
        "fr": "Crème brûlée",
        "it": "Crema catalana francese",
        "price": "~3,80 €"
      }
    ],
    "alternativesNearby": [
      "Le Relais Gascon (40–65 €)",
      "Le Ruisseau (30–45 €, burger)"
    ],
    "bookingNote": "Prenotazione online possibile o fila veloce sul posto.",
    "officialUrl": "https://bouillonlesite.com/",
    "photo": {
      "status": "illustrative",
      "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Soupe_%C3%A0_l%27oignon_01.JPG/960px-Soupe_%C3%A0_l%27oignon_01.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      "localPath": "/images/places/bouillon-pigalle.jpg",
      "author": "Arnaud 25",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "commonsUrl": "https://commons.wikimedia.org/wiki/File:Soupe_%C3%A0_l%27oignon_01.JPG",
      "caption": "Foto illustrativa (Soupe à l'oignon)"
    },
    "maps": "https://www.google.com/maps/search/?api=1&query=Bouillon%20Pigalle%2022%20Boulevard%20de%20Clichy%2C%2075018%20Paris",
    "walking": "https://www.google.com/maps/dir/?api=1&destination=48.882583%2C2.337451&travelmode=walking",
    "transit": "https://www.google.com/maps/dir/?api=1&destination=48.882583%2C2.337451&travelmode=transit",
    "citymapper": "https://citymapper.com/directions?endcoord=48.882583,2.337451&endname=Bouillon%20Pigalle",
    "source": "Base Adresse Nationale (data.gouv.fr)",
    "verifiedAt": "2026-11-25"
  },
  {
    "id": "rest-alexine",
    "name": "Boulangerie Alexine",
    "dayDates": [
      "2026-12-07",
      "2026-12-12"
    ],
    "address": "40 Rue Lepic, 75018 Paris",
    "coordinates": {
      "lat": 48.886041,
      "lon": 2.334618
    },
    "cuisine": "Boulangerie & Pâtisserie (asporto)",
    "priceRangePerTwo": "6–14 € in due",
    "priceStatus": "estimate",
    "nonAlcoholicNote": "Solo asporto (nessun posto a sedere).",
    "hours": "Orario serale/mattutino da verificare sul posto",
    "hoursStatus": "to_verify",
    "specialties": [
      "Baguette tradition",
      "Flan",
      "Éclair",
      "Pain au chocolat"
    ],
    "menuHighlights": [
      {
        "fr": "Pain au chocolat / Croissant",
        "it": "Sfoglia al cioccolato / Cornetto",
        "price": "~1,50–2,50 €"
      },
      {
        "fr": "Flan pâtissier",
        "it": "Torta crema pasticcera",
        "price": "~3,50–4,50 €"
      }
    ],
    "alternativesNearby": [
      "Boulangerie su Rue Ordener vicino all'hotel"
    ],
    "bookingNote": "Nessuna prenotazione (takeaway).",
    "officialUrl": null,
    "photo": {
      "status": "illustrative",
      "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/P1000582_Paris_II_Rue_du_Croissant_reductwk.JPG/960px-P1000582_Paris_II_Rue_du_Croissant_reductwk.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      "localPath": "/images/places/alexine.jpg",
      "author": "Mbzt",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "commonsUrl": "https://commons.wikimedia.org/wiki/File:P1000582_Paris_II_Rue_du_Croissant_reductwk.JPG",
      "caption": "Foto illustrativa (Croissant parigino)"
    },
    "maps": "https://www.google.com/maps/search/?api=1&query=Boulangerie%20Alexine%2040%20Rue%20Lepic%2C%2075018%20Paris",
    "walking": "https://www.google.com/maps/dir/?api=1&destination=48.886041%2C2.334618&travelmode=walking",
    "transit": "https://www.google.com/maps/dir/?api=1&destination=48.886041%2C2.334618&travelmode=transit",
    "citymapper": "https://citymapper.com/directions?endcoord=48.886041,2.334618&endname=Boulangerie%20Alexine",
    "source": "Base Adresse Nationale (data.gouv.fr)",
    "verifiedAt": "2026-11-25"
  },
  {
    "id": "rest-bella-notte",
    "name": "Pizzeria Bella Notte",
    "dayDates": [
      "2026-12-08"
    ],
    "address": "Fantasyland, Disneyland Park, Chessy",
    "coordinates": {
      "lat": 48.869509,
      "lon": 2.777768
    },
    "cuisine": "Quick service italiano a tema",
    "priceRangePerTwo": "24–44 € in due (12–22 € cad.)",
    "priceStatus": "estimate",
    "nonAlcoholicNote": "Acqua e bibite analcoliche incluse nei menu.",
    "hours": "Orari variabili (verificare su app Disneyland Paris)",
    "hoursStatus": "to_verify",
    "specialties": [
      "Menu pizza / pasta",
      "Sala interna riscaldata"
    ],
    "menuHighlights": [],
    "alternativesNearby": [
      "Casa de Coco (Frontierland)",
      "Hakuna Matata (Adventureland)",
      "Victoria's Home-Style (merenda 8–15 € cad.)"
    ],
    "bookingNote": "Servizio rapido senza prenotazione; verificare spettacoli prima di pranzare.",
    "officialUrl": "https://www.disneylandparis.com/",
    "photo": {
      "status": "illustrative",
      "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Disneyland_Paris_-_Paddy_Wagon_-_20150803_09h07_%2810763%29.jpg/960px-Disneyland_Paris_-_Paddy_Wagon_-_20150803_09h07_%2810763%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      "localPath": "/images/places/disneyland-park.jpg",
      "author": "Another one of my pictures:\n\n\n\nThis photograph was taken by Medium6...",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "commonsUrl": "https://commons.wikimedia.org/wiki/File:Disneyland_Paris_-_Paddy_Wagon_-_20150803_09h07_(10763).jpg",
      "caption": "Foto illustrativa Disneyland Park"
    },
    "maps": "https://www.google.com/maps/search/?api=1&query=Pizzeria%20Bella%20Notte%20Fantasyland%2C%20Disneyland%20Park%2C%20Chessy",
    "walking": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=walking",
    "transit": "https://www.google.com/maps/dir/?api=1&destination=48.869509%2C2.777768&travelmode=transit",
    "citymapper": "https://citymapper.com/directions?endcoord=48.869509,2.777768&endname=Pizzeria%20Bella%20Notte",
    "source": "Base Adresse Nationale (data.gouv.fr)",
    "verifiedAt": "2026-11-25"
  },
  {
    "id": "rest-fred",
    "name": "Aux Merveilleux de Fred",
    "dayDates": [
      "2026-12-09"
    ],
    "address": "24 Rue du Pont Louis-Philippe, 75004 Paris",
    "coordinates": {
      "lat": 48.855701,
      "lon": 2.356363
    },
    "cuisine": "Pasticceria artigianale fiamminga",
    "priceRangePerTwo": "6–12 € in due",
    "priceStatus": "estimate",
    "nonAlcoholicNote": "Asporto o consumazione veloce; dolci senza alcol.",
    "hours": "Tutti i giorni 07:30–20:00",
    "hoursStatus": "verified",
    "specialties": [
      "Cramique au chocolat",
      "Mini Merveilleux"
    ],
    "menuHighlights": [
      {
        "fr": "Cramique au chocolat",
        "it": "Brioche soffice con gocce di cioccolato"
      },
      {
        "fr": "Merveilleux",
        "it": "Meringa, panna montata e scaglie di cioccolato"
      }
    ],
    "alternativesNearby": [
      "Botteghe su Île Saint-Louis"
    ],
    "bookingNote": "Nessuna prenotazione necessaria.",
    "officialUrl": "https://auxmerveilleux.fr/",
    "photo": {
      "status": "illustrative",
      "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Galerie_B%C3%A9raudier%2C_p%C3%A2tisserie_Aux_Merveilleux_de_Fred.jpg/960px-Galerie_B%C3%A9raudier%2C_p%C3%A2tisserie_Aux_Merveilleux_de_Fred.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      "localPath": "/images/places/aux-merveilleux-de-fred.jpg",
      "author": "TCY",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "commonsUrl": "https://commons.wikimedia.org/wiki/File:Galerie_B%C3%A9raudier,_p%C3%A2tisserie_Aux_Merveilleux_de_Fred.jpg",
      "caption": "Foto illustrativa (Merveilleux)"
    },
    "maps": "https://www.google.com/maps/search/?api=1&query=Aux%20Merveilleux%20de%20Fred%2024%20Rue%20du%20Pont%20Louis-Philippe%2C%2075004%20Paris",
    "walking": "https://www.google.com/maps/dir/?api=1&destination=48.855701%2C2.356363&travelmode=walking",
    "transit": "https://www.google.com/maps/dir/?api=1&destination=48.855701%2C2.356363&travelmode=transit",
    "citymapper": "https://citymapper.com/directions?endcoord=48.855701,2.356363&endname=Aux%20Merveilleux%20de%20Fred",
    "source": "Base Adresse Nationale (data.gouv.fr)",
    "verifiedAt": "2026-11-25"
  },
  {
    "id": "rest-fallafel",
    "name": "L’As du Fallafel",
    "dayDates": [
      "2026-12-09"
    ],
    "address": "34 Rue des Rosiers, 75004 Paris",
    "coordinates": {
      "lat": 48.857413,
      "lon": 2.359064
    },
    "cuisine": "Cucina mediorientale / Street food",
    "priceRangePerTwo": "20–44 € in due",
    "priceStatus": "estimate",
    "nonAlcoholicNote": "Bibite analcoliche e acqua disponibili.",
    "hours": "Da verificare (chiusura tipica venerdì sera/sabato)",
    "hoursStatus": "to_verify",
    "specialties": [
      "Pita Falafel Special",
      "Melanzane fritte e hummus"
    ],
    "menuHighlights": [
      {
        "fr": "Fallafel Spécial (à emporter / sur place)",
        "it": "Pita con falafel, melanzane, cavolo e salse"
      }
    ],
    "alternativesNearby": [
      "Miznon (22 Rue des Ecouffes)",
      "Mercatino Notre-Dame (20–36 €)"
    ],
    "bookingNote": "Coda veloce per asporto; mercoledì 9 dic aperto (verificare).",
    "officialUrl": null,
    "photo": {
      "status": "illustrative",
      "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Hummus%2C_falafel%2C_pita_bread%2C_and_mafrouka_at_Agasi%2C_Lajpat_Nagar_%28July_2025%29.jpg/960px-Hummus%2C_falafel%2C_pita_bread%2C_and_mafrouka_at_Agasi%2C_Lajpat_Nagar_%28July_2025%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      "localPath": "/images/places/las-du-fallafel.jpg",
      "author": "Contrapunctus-1",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "commonsUrl": "https://commons.wikimedia.org/wiki/File:Hummus,_falafel,_pita_bread,_and_mafrouka_at_Agasi,_Lajpat_Nagar_(July_2025).jpg",
      "caption": "Foto illustrativa (Falafel pita)"
    },
    "maps": "https://www.google.com/maps/search/?api=1&query=L%E2%80%99As%20du%20Fallafel%2034%20Rue%20des%20Rosiers%2C%2075004%20Paris",
    "walking": "https://www.google.com/maps/dir/?api=1&destination=48.857413%2C2.359064&travelmode=walking",
    "transit": "https://www.google.com/maps/dir/?api=1&destination=48.857413%2C2.359064&travelmode=transit",
    "citymapper": "https://citymapper.com/directions?endcoord=48.857413,2.359064&endname=L%E2%80%99As%20du%20Fallafel",
    "source": "Base Adresse Nationale (data.gouv.fr)",
    "verifiedAt": "2026-11-25"
  },
  {
    "id": "rest-galette-cafe",
    "name": "Galette Café",
    "dayDates": [
      "2026-12-10"
    ],
    "address": "2 Rue de l’Université, 75007 Paris",
    "coordinates": {
      "lat": 48.856434,
      "lon": 2.33153
    },
    "cuisine": "Crêperie bretone",
    "priceRangePerTwo": "24–40 € in due",
    "priceStatus": "estimate",
    "nonAlcoholicNote": "Preferenza analcolica: chiedere carafe d'eau o succo di mela bretone (jus de pomme) al posto del sidro.",
    "hours": "Giovedì 12:00–22:30",
    "hoursStatus": "verified",
    "specialties": [
      "Galette Complète (prosciutto, formaggio, uovo)",
      "Crêpe caramello al burro salato"
    ],
    "menuHighlights": [
      {
        "fr": "Galette Complète (jambon, fromage, œuf)",
        "it": "Crespella di grano saraceno con prosciutto, formaggio e uovo"
      },
      {
        "fr": "Crêpe caramel au beurre salé",
        "it": "Crêpe dolce al caramello salato"
      }
    ],
    "alternativesNearby": [
      "Café Campana (Orsay, 30–50 €)",
      "Restaurant Musée d'Orsay (60–90 €)"
    ],
    "bookingNote": "Locale piccolo vicino a Orsay: consigliabile prenotare o arrivare presto.",
    "officialUrl": "https://galettecafe.fr/",
    "photo": {
      "status": "illustrative",
      "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Stack_of_buckwheat_pancakes.jpg/960px-Stack_of_buckwheat_pancakes.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      "localPath": "/images/places/galette-cafe.jpg",
      "author": "Shisma",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "commonsUrl": "https://commons.wikimedia.org/wiki/File:Stack_of_buckwheat_pancakes.jpg",
      "caption": "Foto illustrativa (Galette bretone)"
    },
    "maps": "https://www.google.com/maps/search/?api=1&query=Galette%20Caf%C3%A9%202%20Rue%20de%20l%E2%80%99Universit%C3%A9%2C%2075007%20Paris",
    "walking": "https://www.google.com/maps/dir/?api=1&destination=48.856434%2C2.33153&travelmode=walking",
    "transit": "https://www.google.com/maps/dir/?api=1&destination=48.856434%2C2.33153&travelmode=transit",
    "citymapper": "https://citymapper.com/directions?endcoord=48.856434,2.33153&endname=Galette%20Caf%C3%A9",
    "source": "Base Adresse Nationale (data.gouv.fr)",
    "verifiedAt": "2026-11-25"
  },
  {
    "id": "rest-jungle-palace",
    "name": "Jungle Palace (Ephemera)",
    "dayDates": [
      "2026-12-11"
    ],
    "address": "12 Rue de la Fidélité, 75010 Paris",
    "coordinates": {
      "lat": 48.865084,
      "lon": 2.328431
    },
    "cuisine": "Ristorante immersivo a tema giungla",
    "priceRangePerTwo": "60–80 € in due (media 30–40 € cad.)",
    "priceStatus": "verified",
    "nonAlcoholicNote": "Mocktail e limonate della casa (~5,50 €), nessuna necessità di alcol.",
    "hours": "Cena 20:00 (da prenotare)",
    "hoursStatus": "to_verify",
    "specialties": [
      "Smash Burger",
      "Enchiladas",
      "Pasta stracciatella",
      "Mocktail giungla"
    ],
    "menuHighlights": [
      {
        "fr": "Smash Burger",
        "it": "Doppio smash burger, cheddar e salsa senape-miele",
        "price": "19 €"
      },
      {
        "fr": "Enchiladas mexicaines",
        "it": "Enchiladas chili sin carne e cheddar",
        "price": "16 €"
      },
      {
        "fr": "Jungle Lemonade (20 cl)",
        "it": "Limonata analcolica della casa",
        "price": "5,50 €"
      }
    ],
    "alternativesNearby": [
      "Le Petit Vendôme (15–25 € a pranzo)",
      "Angelina (226 Rue de Rivoli, pausa tè/cioccolata)"
    ],
    "bookingNote": "Prenotazione da effettuare su ephemera-group.com prima della partenza.",
    "officialUrl": "https://www.ephemera-group.com/",
    "photo": {
      "status": "illustrative",
      "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Anetka_%28Lyon%29_-_un_chocolat_chaud_%282%29.jpg/960px-Anetka_%28Lyon%29_-_un_chocolat_chaud_%282%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      "localPath": "/images/places/angelina.jpg",
      "author": "Benoît Prieur",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "commonsUrl": "https://commons.wikimedia.org/wiki/File:Anetka_(Lyon)_-_un_chocolat_chaud_(2).jpg",
      "caption": "Foto illustrativa pausa dolce"
    },
    "maps": "https://www.google.com/maps/search/?api=1&query=Jungle%20Palace%20%28Ephemera%29%2012%20Rue%20de%20la%20Fid%C3%A9lit%C3%A9%2C%2075010%20Paris",
    "walking": "https://www.google.com/maps/dir/?api=1&destination=48.865084%2C2.328431&travelmode=walking",
    "transit": "https://www.google.com/maps/dir/?api=1&destination=48.865084%2C2.328431&travelmode=transit",
    "citymapper": "https://citymapper.com/directions?endcoord=48.865084,2.328431&endname=Jungle%20Palace%20%28Ephemera%29",
    "source": "Base Adresse Nationale (data.gouv.fr)",
    "verifiedAt": "2026-11-25"
  }
];

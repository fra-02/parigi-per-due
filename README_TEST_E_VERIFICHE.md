# Paris à deux — Istruzioni, Report Test e Verifiche Aperte

**Sottotitolo:** *Six jours, deux cœurs, mille souvenirs.*  
**Periodo:** 7–12 dicembre 2026 (`Europe/Paris`)

---

## 1. Avvio, Build e Installazione PWA (Android / iOS)

### Sviluppo e Build locale
```bash
npm install
npm run dev      # server di sviluppo Vite (porta 5173)
npm run build    # typecheck TypeScript (tsc) + build produzione in dist/
npm run preview  # anteprima produzione della PWA con Service Worker
```

### Installazione su smartphone
- **Android (Chrome):** aprire l'app servita in HTTPS (o `localhost`), toccare il menu `⋮` → **Installa app** / **Aggiungi a schermata Home**.
- **iOS (Safari):** aprire l'app in Safari, toccare **Condividi** (`↑`) → **Aggiungi alla schermata Home**.
- **Modalità offline:** dopo il primo caricamento completo, il Service Worker (`public/sw.js`, cache `paris-a-deux-v2`) salva app shell, dati dell'itinerario e le 47 immagini locali in `public/images/places/`. Le tile OpenStreetMap e il meteo live (Open-Meteo) richiedono rete e **non** vengono messi in cache.

---

## 2. Report Test Eseguiti (25 novembre 2026)

| Verifica | Esito | Dettagli |
|---|---|---|
| TypeScript & Build (`npm run build`) | **PASS** | `tsc && vite build` completato con 0 errori (`dist/index.html`, bundle CSS/JS). |
| Integrità ID `ITINERARIO.json` | **PASS** | Tutti i 61 ID (`d1-1` … `d6-9`) preservati 1:1. |
| Coordinate & Link Citymapper | **PASS** | Tutte le 61 tappe e i POI vicini hanno coordinate verificate (BAN `data.gouv.fr` / Photon OSM) e link `citymapper.com/directions?endcoord=lat,lon&endname=...`. |
| Nessuna sovrapposizione prenotazioni | **PASS** | Verifica automatica su tutte le tappe `confirmed` e `booked_time_unknown`. |
| Perimetro Disneyland (8 dic) | **PASS** | Solo Disneyland Park (09:00–21:00 verificato) e LEGO Store Disney Village (10:00–23:00 verificato). |
| Calcolo Budget Residuo | **PASS** | Scenario stime residue = **454,80 €** (target 400–500 €), separato da spese effettive e prepagate. |
| Asset PWA & Offline (`dist/`) | **PASS** | `manifest.webmanifest`, `sw.js` (esclude tile OSM e meteo live), 47 foto Wikimedia Commons con autore e licenza in `dist/images/places/`. |

### Limiti di test in ambiente corrente
- Il test manuale in modalità aereo su dispositivo fisico Android/iOS e l'ispezione visiva su smartphone reale restano da eseguire al momento del deploy HTTPS.

---

## 3. Verifiche Risolte vs Problemi Ancora Aperti

### Verifiche risolte in questa sessione
- **Alexine:** confermata sede in `40 Rue Lepic, 75018 Paris` (solo asporto, metro Blanche).
- **Galette Café:** confermata sede in `2 Rue de l’Université, 75007 Paris` (`galettecafe.fr`, giovedì 12:00–22:30).
- **Aux Merveilleux de Fred:** confermata sede in `24 Rue du Pont Louis-Philippe, 75004 Paris` (`auxmerveilleux.fr`, tutti i giorni 07:30–20:00).
- **Jungle Palace (Ephemera):** confermata sede in `12 Rue de la Fidélité, 75010 Paris`, fascia media 30–40 €/persona, piatti 15–22 €, analcolici 5–5,50 €.
- **Disneyland Park (8 dic 2026):** orario 09:00–21:00; **LEGO Store Disney Village:** 10:00–23:00 (`lego.com`).
- **Musei e Monumenti:** orari dicembre verificati per Sainte-Chapelle (09:00–17:00), Notre-Dame (07:55–19:00, ingresso gratuito), Orangerie (09:00–18:00), Orsay (giovedì 09:30–21:45), Louvre (venerdì 09:00–21:00), Opéra Garnier (10:00–17:00, ultimo ingresso 16:00), Galeries Lafayette (10:00–20:30) e Printemps (10:00–20:00).
- **Mercatini 2026:** confermati Tuileries (14 nov – 3 gen), Notre-Dame (26 nov – 27 dic) e Champs-Élysées (22 nov – 4 gen).

### Elementi ancora da confermare prima/durante il viaggio (a carico della coppia)
1. **Voucher ufficiali & orari esatti:** inserire nella sezione *Salvati → Prenotazioni* gli orari reali e gli allegati PDF/QR di **Sainte-Chapelle**, **Orangerie**, **Orsay**, **Louvre** e **Disneyland Park**.
2. **Prenotazioni mancanti (`to_book`):** prenotare **Opéra Garnier** (`operadeparis.fr`) e **Jungle Palace** (`ephemera-group.com`) per venerdì 11 dicembre, più eventuale fascia gratuita **Notre-Dame** (2–3 giorni prima su `notredamedeparis.fr`).
3. **Trasporti & Lavori RATP / Beauvais:** controllare dal 1° dicembre eventuali lavori su Metro 12/14/RER A (`ratp.fr`), fermata esatta A01 sul voucher Beauvais, terminal Wizz Air a Orly e deposito bagagli in hotel per sabato 12/12.
4. **Spettacoli & Jazz:** verificare orari parate/finale sull'app ufficiale Disneyland Paris il giorno 8 dicembre e programmazione serale di Sunset-Sunside / Caveau de la Huchette per il 9 dicembre.
5. **Foto locali mancanti:** alcune tappe minori o commerciali (es. interni ristoranti specifici, attrazioni Disney senza foto Commons libera) mostrano un placeholder esplicito o foto illustrative di piatti con licenza libera.

import React from 'react';
import { getGoogleMapsUrl, getCitymapperUrl } from '../data/itineraryData';

export const EditorialFoodView: React.FC = () => {
  return (
    <div className="space-y-7 max-w-4xl mx-auto px-4 py-5 animate-fade-in">
      
      {/* Title & Editorial Subtitle (Fedele a Screenshot 3) */}
      <div className="space-y-2 border-b border-[#e5e0d5] pb-4">
        <h1 className="font-editorial-serif text-3xl sm:text-4xl font-bold text-[#1a1918]">
          Mangiare
        </h1>
        <p className="text-xs sm:text-sm text-[#504b42] leading-relaxed max-w-2xl">
          Il pregiudizio italiano sulla cucina francese è vecchio di trent'anni ed è falso a metà.
          Vero: i bistrot turistici con menu in sei lingue sono cari e mediocri. Falso: Parigi ha una cultura del cibo caldo, confortevole e autentico se si sa cosa chiedere. La regola d'oro: <strong>non ordinare un piatto per curiosità antropologica, ordina ciò che vi piace davvero.</strong>
        </p>
      </div>

      {/* Regole d'oro & Consigli pratici (Layout a colonne / blocchi come Screenshot 3) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-[#38342c]">
        
        {/* Blocco 1: Orari */}
        <div className="space-y-1.5">
          <h2 className="font-editorial-serif text-lg font-bold text-[#1a1918]">
            Si cena alle 19:30, non alle 22:00
          </h2>
          <p className="text-xs sm:text-[13px] text-[#4d483e] leading-relaxed">
            Non è un'esagerazione: a Parigi la maggior parte dei bistrot autentici apre la cucina per cena tra le 19:00 e le 19:30, e spesso chiude la presa delle comande verso le 21:30. Se vi presentate alle 22:00 rischiate di trovare la cucina chiusa. Puntate a cenare tra le 19:30 e le 20:00: è l'orario perfetto per mangiare bene e con calma.
          </p>
        </div>

        {/* Blocco 2: Acqua gratis */}
        <div className="space-y-1.5">
          <h2 className="font-editorial-serif text-lg font-bold text-[#1a1918]">
            L'acqua gratis: "Une carafe d'eau"
          </h2>
          <p className="text-xs sm:text-[13px] text-[#4d483e] leading-relaxed">
            Nei ristoranti francesi l'acqua del rubinetto parigina è freschissima, controllata e per legge <strong>obbligatoriamente gratuita</strong>. Non ordinate l'acqua minerale in bottiglia (che costa 6–8€). Dite con naturalezza al cameriere: <em>"Une carafe d'eau, s'il vous plaît"</em> (pronuncia: <em>Ün caràf do, sil vu plè</em>). Vi porteranno una brocca d'acqua fresca gratis.
          </p>
        </div>

        {/* Blocco 3: Come riconoscere la vera boulangerie */}
        <div className="space-y-1.5">
          <h2 className="font-editorial-serif text-lg font-bold text-[#1a1918]">
            Come si riconosce una vera boulangerie
          </h2>
          <p className="text-xs sm:text-[13px] text-[#4d483e] leading-relaxed">
            In Francia la parola <strong>Artisan Boulanger</strong> è protetta dalla legge: solo chi impasta, fa lievitare e inforna il pane e le brioche sul posto può scriverlo sull'insegna. Evitate i chioschi della metro o le catene con prodotti congelati; cercate i forni di quartiere con la scritta dorata "Artisan".
          </p>
        </div>

        {/* Blocco 4: I dolci del viaggio */}
        <div className="space-y-1.5">
          <h2 className="font-editorial-serif text-lg font-bold text-[#1a1918]">
            I dolci: Cramique da Fred e dolcezze calde
          </h2>
          <p className="text-xs sm:text-[13px] text-[#4d483e] leading-relaxed">
            Il dolce simbolo del vostro viaggio è il <strong>cramique al cioccolato</strong> di <em>Aux Merveilleux de Fred</em> (2 Rue Lepic a Montmartre e 24 Rue du Pont Louis-Philippe nel Marais): una soffice brioche arricchita da gocce di cioccolato fondente, sfornata calda davanti ai vostri occhi. Prendete anche un "Merveilleux" mignon (meringa e panna al cioccolato).
          </p>
        </div>

        {/* Blocco 5: Il Jazz Club */}
        <div className="space-y-1.5">
          <h2 className="font-editorial-serif text-lg font-bold text-[#1a1918]">
            Il Jazz Club con posti a sedere (Mercoledì sera)
          </h2>
          <p className="text-xs sm:text-[13px] text-[#4d483e] leading-relaxed">
            Per mercoledì dopo la crociera, evitate le cantine stipate dove si sta in piedi. A soli 6 minuti a piedi da Pont Neuf c'è <strong>Le Duc des Lombards (42 Rue des Lombards)</strong>: ascoltate jazz dal vivo seduti comodamente al vostro tavolo, con atmosfera raccolta e ottimi mocktail analcolici alla frutta. In alternativa, sulla stessa via: <em>Sunset/Sunside</em>.
          </p>
        </div>

        {/* Blocco 6: Da non ordinare */}
        <div className="space-y-1.5">
          <h2 className="font-editorial-serif text-lg font-bold text-[#1a1918]">
            Da non ordinare / Trappole da evitare
          </h2>
          <p className="text-xs sm:text-[13px] text-[#4d483e] leading-relaxed">
            Non fermatevi nei café con camerieri che chiamano dalla strada sul sagrato di Notre-Dame o attorno al Sacré-Cœur: il cibo è precotto e i prezzi sono triplicati. Evitate di ordinare bibite gassate in lattina al tavolo nei grandi viali turistici (possono costare fino a 8€ l'una).
          </p>
        </div>

      </div>

      {/* Ristoranti Quotidiani Consigliati (Schede mirate giorno per giorno) */}
      <div className="border-t border-[#e5e0d5] pt-6 space-y-4">
        <div className="space-y-1">
          <h2 className="font-editorial-serif text-2xl font-bold text-[#1a1918]">
            Dove mangiare giorno per giorno
          </h2>
          <p className="text-xs text-[#706a5e]">
            Pasti comodi lungo il percorso, convenienti, caldi e accoglienti senza attraversare tutta Parigi.
          </p>
        </div>

        <div className="space-y-3">
          
          {/* Lunedì sera: Bouillon Pigalle */}
          <div className="p-3.5 rounded-lg border border-[#e5e0d5] bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-editorial-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#8a4233] text-white">
                  LUNEDÌ CENA
                </span>
                <h3 className="font-editorial-serif font-bold text-base text-[#1a1918]">
                  Bouillon Pigalle (22 Bd de Clichy)
                </h3>
              </div>
              <p className="text-xs text-[#4d483e] pt-1 leading-relaxed">
                Il bouillon più amato di Parigi: boeuf bourguignon, purée maison caldissima, zuppa di cipolle e profiterole gigante a 12–15€ a testa. Ottimi sciroppi analcolici (menta, granatina). Nessuna prenotazione: arrivate alle 19:15 per sedervi subito.
              </p>
            </div>
            <a
              href={getGoogleMapsUrl(48.8826, 2.3372, 'Bouillon Pigalle')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-editorial-mono text-xs text-[#2f5d8a] hover:underline shrink-0"
            >
              maps &gt;
            </a>
          </div>

          {/* Mercoledì pranzo: Le Bistro des Augustins */}
          <div className="p-3.5 rounded-lg border border-[#e5e0d5] bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-editorial-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#355670] text-white">
                  MERCOLEDÌ PRANZO
                </span>
                <h3 className="font-editorial-serif font-bold text-base text-[#1a1918]">
                  Le Bistro des Augustins (39 Quai des Grands Augustins)
                </h3>
              </div>
              <p className="text-xs text-[#4d483e] pt-1 leading-relaxed">
                Bistrot caloroso sul lungosenna a 3 min da Saint-Michel. Celebre per i gratin caldi al formaggio serviti in cocotte a 12–14€: il piatto perfetto per riscaldarsi a dicembre dopo Notre-Dame.
              </p>
            </div>
            <a
              href={getGoogleMapsUrl(48.8538, 2.3435, 'Le Bistro des Augustins')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-editorial-mono text-xs text-[#2f5d8a] hover:underline shrink-0"
            >
              maps &gt;
            </a>
          </div>

          {/* Giovedì pranzo: Les Antiquaires */}
          <div className="p-3.5 rounded-lg border border-[#e5e0d5] bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-editorial-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#626e3c] text-white">
                  GIOVEDÌ PRANZO
                </span>
                <h3 className="font-editorial-serif font-bold text-base text-[#1a1918]">
                  Les Antiquaires (36 Rue du Bac) o Café Campana
                </h3>
              </div>
              <p className="text-xs text-[#4d483e] pt-1 leading-relaxed">
                A 3 minuti a piedi da Orsay: velluti rossi e piatti caldi del giorno in atmosfera raccolta. In alternativa, il Café Campana si trova direttamente al 5° piano del museo dietro l'orologio monumentale.
              </p>
            </div>
            <a
              href={getGoogleMapsUrl(48.8577, 2.3298, 'Les Antiquaires Paris')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-editorial-mono text-xs text-[#2f5d8a] hover:underline shrink-0"
            >
              maps &gt;
            </a>
          </div>

          {/* Giovedì sera: Chalet Champs-Élysées */}
          <div className="p-3.5 rounded-lg border border-[#e5e0d5] bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-editorial-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#626e3c] text-white">
                  GIOVEDÌ CENA
                </span>
                <h3 className="font-editorial-serif font-bold text-base text-[#1a1918]">
                  Chalet gastronomici del Mercatino degli Champs-Élysées
                </h3>
              </div>
              <p className="text-xs text-[#4d483e] pt-1 leading-relaxed">
                Cena informale tra le luminarie del viale: raclette fusa al piatto con patate e baguette, crêpes calde alla Nutella, spätzle e zuppe fumanti. Nessuna prenotazione da inseguire.
              </p>
            </div>
            <a
              href={getGoogleMapsUrl(48.8675, 2.3135, 'Champs Elysees Christmas Market')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-editorial-mono text-xs text-[#2f5d8a] hover:underline shrink-0"
            >
              maps &gt;
            </a>
          </div>

          {/* Venerdì sera: Jungle Palace */}
          <div className="p-3.5 rounded-lg border border-[#e5e0d5] bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-editorial-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#8c652b] text-white">
                  VENERDÌ CENA • ORE 20:00
                </span>
                <h3 className="font-editorial-serif font-bold text-base text-[#1a1918]">
                  Jungle Palace (12 Rue de la Fidélité)
                </h3>
              </div>
              <p className="text-xs text-[#4d483e] pt-1 leading-relaxed">
                La cena speciale del viaggio: ambiente scenografico immersivo nella giungla con video mapping a 360°, suoni esotici e fantastici mocktail analcolici botanici.
              </p>
            </div>
            <a
              href={getGoogleMapsUrl(48.8757, 2.3571, 'Jungle Palace Paris')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-editorial-mono text-xs text-[#2f5d8a] hover:underline shrink-0"
            >
              maps &gt;
            </a>
          </div>

        </div>
      </div>

    </div>
  );
};

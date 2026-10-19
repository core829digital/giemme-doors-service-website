import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Policy sui cookie utilizzati dal sito di ${SITE.name} (Foligno).`,
  alternates: { canonical: "/cookie" },
};

export default function CookiePage() {
  return (
    <LegalPage
      title="Cookie Policy"
      lead="Questa pagina descrive le categorie di cookie utilizzate sul sito di Giemme Doors & Service e spiega come gestirle."
    >
      <h2>1. Cosa sono i cookie</h2>
      <p>
        I cookie sono piccoli file che un sito web può memorizzare sul
        dispositivo dell'utente per garantire la funzionalità o raccogliere
        informazioni di navigazione.
      </p>

      <h2>2. Cookie utilizzati</h2>
      <ul>
        <li>
          <strong>Cookie tecnici / storage essenziale:</strong> eventuali
          preferenze di visualizzazione e sicurezza della sessione, necessari
          al funzionamento del sito. Non richiedono consenso (art. 122.1 Codice
          Privacy).
        </li>
      </ul>
      <p>
        Al momento <strong>il sito non impiega</strong> cookie di profilazione,
        cookies statistici di terze parti (es. Google Analytics) né pixel per
        remarketing.
      </p>

      <h2>3. Cookie di terze parti potenzialmente installati</h2>
      <p>
        Alcuni contenuti di terze parti integrati nel sito (es. la mappa
        Google Maps) possono comportare l'invio di richieste ai server del
        fornitore e l'eventuale salvataggio di cookie tecnici del provider.
        Queste comunicazioni sono regolate dalle informative del provider.
      </p>

      <h2>4. Gestione dei cookie</h2>
      <p>
        Puoi cancellare o bloccare i cookie dalle impostazioni del tuo browser
        (Chrome, Safari, Firefox, Edge). La limitazione dei cookie tecnici può
        compromettere la corretta visualizzazione del sito.
      </p>

      <p>
        Per qualsiasi domanda scrivi ai contatti del Titolare indicati nella{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>
    </LegalPage>
  );
}

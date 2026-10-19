import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termini e Condizioni",
  description: `Termini e condizioni d'uso del sito di ${SITE.name} (Foligno).`,
  alternates: { canonical: "/termini" },
};

export default function TerminiPage() {
  return (
    <LegalPage
      title="Termini e Condizioni"
      lead="Condizioni d'uso del sito web di Giemme Doors & Service. L'utilizzo del sito implica la presa visione e l'accettazione delle condizioni riportate di seguito."
    >
      <h2>1. Natura del sito</h2>
      <p>
        Il sito ha finalità esclusivamente informativa e di presentazione dei
        prodotti e servizi di {SITE.name}. Non costituisce un negozio
        online: l'acquisto e la fornitura avvengono attraverso preventivo
        personalizzato e contratto diretto con il Titolare.
      </p>

      <h2>2. Informazioni sui prodotti</h2>
      <p>
        Le immagini, le illustrazioni e le caratteristiche indicate sono
        esemplificative e non vincolanti: i prodotti reali possono variare per finiture,
        materiali e disponibilità. I dettagli tecnici e commerciali, incluse
        le prestazioni di sicurezza, sono sempre confermati nel preventivo e
        nella scheda tecnica del prodotto acquistato.
      </p>

      <h2>3. Preventivi e contratti</h2>
      <p>
        Le richieste inviate tramite form, WhatsApp o telefono non costituiscono
        proposta contrattuale. Le condizioni economiche e i tempi di consegna
        sono stabiliti nel preventivo firmato, che prevale su ogni informazione
        presente sul sito.
      </p>

      <h2>4. Responsabilità</h2>
      <p>
        Il Titolare si adopera per l'accuratezza delle informazioni pubblicate,
        ma non risponde di errori o omissioni né di danni conseguenti
        all'utilizzo del sito o a sue indisponibilità temporanee. Links a
        siti terzi (es. Instagram) sono forniti per comodità e non
        comportano responsabilità sul loro contenuto.
      </p>

      <h2>5. Proprietà intellettuale</h2>
      <p>
        Tutti i contenuti del sito (testi, grafiche, logo "Giemme Doors &
        Service") sono proprietà del Titolare o di terzi autorizzati e non
        possono essere riprodotti senza autorizzazione scritta.
      </p>

      <h2>6. Legge e foro competente</h2>
      <p>
        Le presenti condizioni sono regolate dalla legge italiana. Per le
        eventuali controversie è competente il Foro di{" "}
        {SITE.address.city}, salvo i casi previsti dalla normativa sulla
        protezione dei consumatori.
      </p>
    </LegalPage>
  );
}

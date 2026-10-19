import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy di ${SITE.name} (Foligno) ai sensi del Regolamento UE 2016/679 (GDPR).`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lead="Informativa ai sensi dell'art. 13 del Regolamento (UE) 2016/679 (GDPR) per i visitatori del sito e per chi invia richieste tramite i moduli di contatto."
    >
      {/* Dati del titolare */}
      <h2>1. Titolare del trattamento</h2>
      <p>
        <strong>{SITE.name}</strong> — {SITE.address.street}, {SITE.address.zip}{" "}
        {SITE.address.city} ({SITE.address.province}). Telefono:{" "}
        <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>. Instagram:{" "}
        <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
          {SITE.instagramHandle}
        </a>
        . Dati societari completi (P. IVA / SDI): disponibile su richiesta e da
        aggiornare in questa sezione.
      </p>

      <h2>2. Dati raccolti</h2>
      <p>A seconda della modalità di contatto, trattiamo i seguenti dati:</p>
      <ul>
        <li>
          <strong>Modulo di contatto sul sito:</strong> nome e cognome, numero di
          telefono, indirizzo email (opzionale) e testo del messaggio.
        </li>
        <li>
          <strong>Contatti tramite WhatsApp:</strong> numero di telefono, nome
          profilo e contenuto della chat, trattati dai provider di
          comunicazione secondo le loro informative.
        </li>
        <li>
          <strong>Dati di navigazione tecnici:</strong> log e dati di connessione
          gestiti dal provider di hosting per finalità di sicurezza.
        </li>
      </ul>

      <h2>3. Finalità e base giuridica</h2>
      <ul>
        <li>
          <strong>Rispondere alle richieste di contatto e preventivi</strong>{" "}
          (art. 6.1.b GDPR — misure precontrattuali / esecuzione richiesta).
        </li>
        <li>
          <strong>Adempimenti legali</strong> (art. 6.1.c GDPR) quali obblighi
          contabili, per quanto applicabile.
        </li>
        <li>
          <strong>Legittimo interesse</strong> (art. 6.1.f GDPR) per la sicurezza
          del sito e la prevenzione di spam.
        </li>
      </ul>

      <h2>4. Modalità e conservazione</h2>
      <p>
        I dati sono trattati con strumenti elettronici, in modo lecito e con le
        misure di sicurezza adeguate, e sono conservati solo per il tempo
        necessario a gestire la richiesta e, in caso di rapporto commerciale,
        per gli obblighi di legge. Le richieste non convertite in ordini vengono
        eliminate o anonimizzate entro 12 mesi.
      </p>

      <h2>5. Diffusione e categorie di destinatari</h2>
      <p>
        I dati non sono ceduti a terzi per finalità di marketing. Possono essere
        trattati da fornitori essenziali (hosting e servizi di backend dei
        form, provider di comunicazione per WhatsApp) in qualità di
        responsabili/persone autorizzate, inclusi eventualmente soggetti extra-UE
        con garanzie adeguate (clausole contrattuali standard).
      </p>

      <h2>6. Cookie</h2>
      <p>
        Il sito non impiega cookie di profilazione o analisi di terze parti.
        Per i dettagli consulta la{" "}
        <a href="/cookie">Cookie Policy</a>.
      </p>

      <h2>7. Diritti dell'interessato</h2>
      <p>
        Ai sensi degli artt. 15–22 GDPR puoi esercitare in qualunque momento i
        diritti di accesso, rettifica, cancellazione, limitazione,
        portabilità e opposizione, scrivendo ai contatti del Titolare indicati
        al punto 1. Hai inoltre il diritto di proporre reclamo al Garante per la
        protezione dei dati personali (
        <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">
          garanteprivacy.it
        </a>
        ).
      </p>
    </LegalPage>
  );
}

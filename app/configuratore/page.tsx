import type { Metadata } from "next";
import {
  MessageCircle,
  MousePointerClick,
  Package,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { ConfiguratorEmbed } from "@/components/ConfiguratorEmbed";
import { Reveal } from "@/components/Reveal";
import { CONFIGURATOR, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Configuratore preventivo online",
  description:
    "Configura i tuoi serramenti: porte da interno e porte blindate, con preventivo online immediato e il supporto di Giemme Doors & Service, Foligno.",
  alternates: { canonical: "/configuratore" },
};

const STEPS = [
  {
    icon: MousePointerClick,
    title: "1 · Scegli e configura",
    text: "Tipo di porta, apertura, misure, finiture e colore: segui i passaggi guidati direttamente qui sotto.",
  },
  {
    icon: Package,
    title: "2 · Preventivo immediato",
    text: "Il configuratore calcola il preventivo in tempo reale, senza stress né attese.",
  },
  {
    icon: Truck,
    title: "3 · Confermiamo insieme",
    text: "Ricevi la tua configurazione da noi: sopralluogo, controllo misure e posa professionale.",
  },
];

const BENEFITS = [
  "Preventivo indicativo immediato",
  "Misure e finiture personalizzabili",
  "Salva e ricevi la configurazione",
  "Supporto diretto di Giemme Doors",
];

export default function ConfiguratorePage() {
  return (
    <main className="relative overflow-hidden pt-28 pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: `${SITE.name} — Configuratore serramenti`,
            applicationCategory: "BusinessApplication",
            url: `${SITE.url}/configuratore`,
            operatingSystem: "Web",
          }),
        }}
      />

      {/* ── sfondo ─────────────────────────────────────────────────────── */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(110%_70%_at_80%_0%,#f8e3e3_0%,#f7f4ef_55%)]" />
        <div className="absolute -top-32 right-[-12%] h-[30rem] w-[30rem] rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute bottom-[-25%] left-[-10%] h-[26rem] w-[26rem] rounded-full bg-navy-500/10 blur-3xl" />
        <svg
          viewBox="0 0 200 200"
          className="animate-spin-slow absolute -left-64 top-40 hidden h-[34rem] w-[34rem] opacity-[0.10] lg:block"
        >
          <circle cx="100" cy="100" r="88" fill="none" stroke="#c23232" strokeWidth="1.6" strokeDasharray="270 70" strokeLinecap="round" />
        </svg>
      </div>

      {/* ── header di pagina ───────────────────────────────────────────── */}
      <section className="container-x relative pt-8 pb-12">
        <Reveal className="max-w-3xl">
          <span className="eyebrow-accent">
            <Sparkles className="h-3.5 w-3.5" />
            Nuovo · Configuratore online
          </span>
          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-navy-700 sm:text-6xl">
            Progetta i tuoi serramenti,{" "}
            <span className="bg-gradient-to-r from-accent-600 via-accent-500 to-navy-500 bg-clip-text text-transparent">
              preventivo in tempo reale.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-800/75">
            Un <strong className="font-semibold text-navy-700">unico strumento</strong> per configurare
            porte da interno e porte blindate certificate: scelta del modello,
            apertura, misure e finiture. Semplice e trasparente:{" "}
            <strong className="font-semibold text-navy-700">tu configuri, noi realizziamo e mettiamo in opera.</strong>
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {BENEFITS.map((b) => (
              <li key={b} className="chip bg-white/80">
                <ShieldCheck className="h-3.5 w-3.5 text-accent-600" />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ── configuratore ──────────────────────────────────────────────── */}
      <section id="configuratore" className="container-x relative pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-accent-600/25 bg-white/80 p-2.5 shadow-[0_40px_90px_-40px_rgb(120_25_25/0.35)] backdrop-blur-xl sm:p-3">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1.5 bg-gradient-to-r from-accent-600 via-accent-500 to-navy-500" />
            <ConfiguratorEmbed />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-5 text-center text-sm text-navy-800/60">
            Preferisci la versione a schermo intero?{" "}
            <a
              href={CONFIGURATOR.singleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent-600 underline decoration-accent-100 decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Apri il configuratore in una pagina dedicata ↗
            </a>
          </p>
        </Reveal>
      </section>

      {/* ── come funziona ──────────────────────────────────────────────── */}
      <section className="relative bg-navy-900 py-20 sm:py-28">
        <div aria-hidden className="absolute inset-0 opacity-60">
          <div className="absolute -top-24 left-[12%] h-80 w-80 rounded-full bg-accent-600/20 blur-3xl" />
          <div className="absolute right-[6%] bottom-0 h-72 w-72 rounded-full bg-taupe-500/20 blur-3xl" />
        </div>
        <div className="container-x relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow !text-taupe-300">Come funziona</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Tre passaggi, un solo interlocutore
            </h2>
          </Reveal>

          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={0.08 * i} as="li">
                <div className="group relative h-full rounded-3xl border border-navy-600/50 bg-navy-800/70 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-accent-500/50">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-600 text-white shadow-[0_10px_26px_-10px_var(--color-accent-600)]">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/65">{s.text}</p>
                  {i < STEPS.length - 1 && (
                    <span aria-hidden className="absolute top-10 -right-3 hidden text-navy-500 md:block">→</span>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.1}>
            <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={`tel:${SITE.phoneRaw}`} className="btn-light">
                <Phone className="h-4 w-4" />
                Aiutami al telefono · {SITE.phone}
              </a>
              <a
                href={`${SITE.whatsapp}?text=${encodeURIComponent(
                  "Buongiorno, vi mando la configurazione creata sul configuratore online."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
              >
                <MessageCircle className="h-4 w-4" />
                Invia la configurazione su WhatsApp
              </a>
            </div>
            <p className="mt-6 text-center text-xs leading-relaxed text-cream/40">
              Nota: il preventivo del configuratore è indicativo. La conferma finale
              avviene insieme a noi, con il controllo misure e sopralluogo.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

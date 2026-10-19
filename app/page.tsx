import {
  Check,
  Hammer,
  Handshake,
  MapPin,
  MessageCircle,
  MousePointerClick,
  Palette,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { DOOR_CAPTIONS, DOOR_VARIANTS, DoorArt } from "@/components/DoorArt";
import { Hero } from "@/components/Hero";
import { InstagramIcon } from "@/components/InstagramIcon";
import { Reveal } from "@/components/Reveal";
import { SITE, WA_DEFAULT, waLink } from "@/lib/site";

const VALUES = [
  {
    icon: Palette,
    title: "Design",
    text: "Collezioni, finiture e materiali scelti per valorizzare ogni ambiente: la porta non è un dettaglio, è parte dell'estetica della casa.",
  },
  {
    icon: ShieldCheck,
    title: "Sicurezza",
    text: "Porte blindate certificate e serrature di qualità: protezione concreta per le persone e cose a te care.",
  },
  {
    icon: Handshake,
    title: "Affidabilità",
    text: "Consulenza onesta, misure precise, posa curata e assistenza nel tempo: un unico interlocutore serio, fino al dopo-vendita.",
  },
];

const PRODUCTS = [
  {
    id: "interne",
    name: "Porte da interno",
    tag: "Estetica su misura",
    lead: "Il benvenuto che ogni stanza merita.",
    text: "Scegliamo con te modelli, vetri, colori e maniglie in abbinamento all'arredamento. Con i sistemi scorrevoli e a filo muro ogni porta si integra perfettamente nella parete.",
    features: [
      "Battente, scorrevoli, filo muro e doppio battente",
      "Verniciature a tinte unite o effetto legno",
      "Maniglie e accessori coordinati con l'arredamento",
      "Misure su progetto e soluzioni per ogni spazio",
    ],
    variant: "scorrevole" as const,
    reversed: false,
  },
  {
    id: "blindate",
    name: "Porte blindate certificate",
    tag: "Sicurezza certificata",
    lead: "La prima difesa della tua casa, invisibile e bella.",
    text: "Proponiamo porte blindate certificate, con struttura armata e serrature di sicurezza: protezione concreta senza rinunciare a un'estetica che si sposa con la casa.",
    features: [
      "Certificate secondo le norme europee antieffrazione",
      "Struttura armata, cilindri di sicurezza e serrature certificate",
      "Finiture coordinate con l'arredamento: sicurezza che non pesa",
      "Sopralluogo, installazione e assistenza a firma Giemme",
    ],
    variant: "blindata" as const,
    reversed: true,
  },
];

const PROCESS = [
  {
    num: "01",
    icon: MessageCircle,
    title: "Consulenza",
    text: "Ascoltiamo le esigenze e la tua visione dello spazio, in showroom o direttamente a casa tua.",
  },
  {
    num: "02",
    icon: Ruler,
    title: "Sopralluogo e misure",
    text: "Rilevamento preciso delle quote: vani, filanti e spessori misurati al millimetro.",
  },
  {
    num: "03",
    icon: Hammer,
    title: "Fornitura e posa",
    text: "Prodotto selezionato e installato dai nostri tecnici, con la cura che merita la tua casa.",
  },
  {
    num: "04",
    icon: Wrench,
    title: "Assistenza",
    text: "Il service in Giemme Doors & Service: manutenzione, regolazioni e garanzia nel tempo.",
  },
];

const GALLERY = DOOR_VARIANTS.map((v) => ({
  variant: v,
  caption: DOOR_CAPTIONS[v],
}));

/* ─────────────────────────────────────────────────────────────────────── */

export default function Home() {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}#business`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phoneRaw,
    image: `${SITE.url}/logo.svg`,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      postalCode: SITE.address.zip,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.province,
      addressCountry: "IT",
    },
    sameAs: [SITE.instagram],
    openingHours: "Mo-Sa 09:00-18:00",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />

      {/* ── marquee ─────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden border-y border-navy-800/40 bg-navy-700 py-4">
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {[0, 1].map((seq) => (
            <ul key={seq} className="flex items-center gap-10" aria-hidden={seq === 1}>
              {[
                "Porte da interno",
                "Porte blindate certificate",
                "Configura il preventivo online",
                "Consulenza personalizzata",
                "Sopralluogo e misure",
                "Posa professionale",
                "Assistenza e manutenzione",
              ].map((t) => (
                <li key={`${seq}-${t}`} className="flex items-center gap-10">
                  <span className="font-display text-sm font-semibold tracking-[0.18em] text-cream/90 uppercase">
                    {t}
                  </span>
                  <Sparkles className="h-4 w-4 text-taupe-300" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* ── chi siamo ───────────────────────────────────────────────────── */}
      <section id="chi-siamo" className="section-pad relative overflow-hidden">
        <div aria-hidden className="absolute top-24 left-[-8%] h-80 w-80 rounded-full border border-taupe-300/30" />
        <div aria-hidden className="absolute top-10 left-[-4%] h-[26rem] w-[26rem] rounded-full border border-taupe-300/20" />
        <div className="container-x relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Chi siamo</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-700 sm:text-4xl">
              Una porta al centro, <span className="text-taupe-500">tutta casa attorno</span>
            </h2>
            <p className="mt-5 leading-relaxed text-navy-800/70">
              A Foligno, in via Giorgio Vasari, assistiamo i clienti nella scelta
              di porte da interno e porte blindate certificate. Siamo il
              punto di contatto tra il mondo artigianale e l'estetica contemporanea:
              <em className="text-navy-700">soluzioni per ogni ambiente</em>, con design, sicurezza e affidabilità.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={0.08 * i}>
                <article className="glass-card group h-full p-8 transition-transform duration-500 hover:-translate-y-1.5">
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-navy-700 text-white transition-transform duration-500 group-hover:rotate-3">
                    {i % 2 === 0 && (
                      <span className="absolute inset-0 rounded-2xl bg-taupe-500/70 blur-md transition-opacity group-hover:opacity-100" style={{ opacity: 0.25 }} />
                    )}
                    <v.icon className="relative h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-bold text-navy-700">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-800/70">{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── prodotti ────────────────────────────────────────────────────── */}
      <section id="prodotti" className="section-pad bg-sand/60">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">I nostri prodotti</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-700 sm:text-4xl">
              Due specialità, una sola cura dei dettagli
            </h2>
          </Reveal>

          <div className="mt-16 space-y-16">
            {PRODUCTS.map((p) => (
              <Reveal key={p.id}>
                <article
                  className={`grid items-center gap-10 lg:grid-cols-2 ${p.reversed ? "lg:[direction:rtl]" : ""}`}
                >
                  {/* visual */}
                  <div className="group relative [direction:ltr]">
                    <div className="glass-card relative overflow-hidden px-6 pt-10 pb-2 sm:px-10">
                      <span className="chip absolute top-6 left-6 bg-white/85">{p.tag}</span>
                      <DoorArt
                        variant={p.variant}
                        className="mx-auto w-full max-w-sm transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div aria-hidden className="absolute -bottom-4 left-8 h-24 w-24 rounded-full bg-taupe-400/20 blur-2xl" />
                  </div>

                  {/* testo */}
                  <div className="[direction:ltr]">
                    <h3 className="font-display text-2xl font-extrabold tracking-tight text-navy-700 sm:text-3xl">
                      {p.name}
                    </h3>
                    <p className="mt-3 font-display text-lg font-semibold text-taupe-600">
                      {p.lead}
                    </p>
                    <p className="mt-4 leading-relaxed text-navy-800/70">{p.text}</p>
                    <ul className="mt-7 space-y-3">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-navy-800/80">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-taupe-500/15 text-taupe-700">
                            <Check className="h-3 w-3" />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link href="#contatti" className="btn-outline">
                        Chiedi informazioni
                        <span aria-hidden>→</span>
                      </Link>
                      <Link href="/configuratore" className="btn-accent !px-6 !py-3">
                        Configura online
                        <span aria-hidden>✦</span>
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── processo ────────────────────────────────────────────────────── */}
      <section id="processo" className="section-pad relative overflow-hidden bg-navy-900 text-cream">
        <div aria-hidden className="absolute inset-0 opacity-60">
          <div className="absolute -top-32 right-[10%] h-96 w-96 rounded-full bg-navy-500/30 blur-3xl" />
          <div className="absolute bottom-0 left-[5%] h-72 w-72 rounded-full bg-taupe-500/20 blur-3xl" />
          <svg viewBox="0 0 200 200" className="animate-spin-slow absolute -left-32 top-1/3 h-96 w-96 opacity-20">
            <circle cx="100" cy="100" r="86" fill="none" stroke="#8a7a68" strokeWidth="1" strokeDasharray="240 70" strokeLinecap="round" />
          </svg>
        </div>

        <div className="container-x relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow !text-taupe-300">Come lavoriamo</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Dal primo contatto alla porta che si chiude <span className="text-taupe-300">…perfetta</span>
            </h2>
          </Reveal>

          <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((s, i) => (
              <Reveal key={s.num} delay={0.07 * i} as="li">
                <div className="group relative h-full rounded-3xl border border-navy-600/50 bg-navy-800/70 p-7 backdrop-blur transition-colors duration-500 hover:border-taupe-400/50">
                  <span className="font-display text-4xl font-extrabold text-navy-500/70 transition-colors group-hover:text-taupe-400/80">
                    {s.num}
                  </span>
                  <span className="mt-5 grid h-11 w-11 place-items-center rounded-xl bg-taupe-500/15 text-taupe-300">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold text-white">{s.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-cream/65">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── galleria nelle soluzioni ────────────────────────────────────── */}
      <section id="galleria" className="section-pad">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Galleria</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-700 sm:text-4xl">
              Tipologie che amiamo installare
            </h2>
            <p className="mt-4 text-sm text-navy-800/60">
              Segui i lavori reali sul nostro{" "}
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-navy-700 underline decoration-taupe-400 underline-offset-4"
              >
                Instagram {SITE.instagramHandle}
              </a>
              .
            </p>
          </Reveal>

          <ul className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-3">
            {GALLERY.map((g, i) => (
              <Reveal key={g.variant} delay={0.05 * (i % 3)} as="li">
                <figure className="group relative cursor-default overflow-hidden rounded-3xl border border-taupe-200 bg-white/70 p-5 shadow-[0_18px_45px_-30px_rgb(30_58_92/0.35)] backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_26px_55px_-28px_rgb(30_58_92/0.45)]">
                  <DoorArt variant={g.variant} className="w-full" />
                  <figcaption className="mt-2 flex items-center justify-between px-1 pb-1">
                    <span className="font-display text-sm font-bold text-navy-700">{g.caption}</span>
                    <span className="text-taupe-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden>
                      →
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-navy-700 px-8 py-16 text-center sm:px-16 sm:py-20">
            <div aria-hidden className="absolute inset-0">
              <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-taupe-400/25 blur-3xl" />
              <svg viewBox="0 0 200 200" className="animate-spin-slow absolute -right-24 -bottom-24 h-80 w-80 opacity-20">
                <circle cx="100" cy="100" r="86" fill="none" stroke="#f7f4ef" strokeWidth="1.2" strokeDasharray="250 60" strokeLinecap="round" />
              </svg>
            </div>
            <div className="relative">
              <p className="eyebrow !text-taupe-300">Configuratore online &amp; consulenza</p>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                La soluzione perfetta per la tua casa esiste. Ti aiutiamo a trovarla.
              </h2>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <a href={`tel:${SITE.phoneRaw}`} className="btn-light">
                  <Phone className="h-4 w-4" />
                  {SITE.phone}
                </a>
                <Link href="/configuratore" className="btn-accent">
                  <MousePointerClick className="h-4 w-4" />
                  Configura il preventivo online
                </Link>
                <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="btn-light !bg-transparent !text-white !shadow-none ring-1 ring-white/40 ring-inset hover:!bg-white/10">
                  <MessageCircle className="h-4 w-4" />
                  Scrivi su WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── contatti ────────────────────────────────────────────────────── */}
      <section id="contatti" className="section-pad">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Contatti</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-700 sm:text-4xl">
              Parliamo del tuo progetto
            </h2>
          </Reveal>

          <div className="mt-14 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal delay={0.08}>
              <div className="space-y-5">
                <div className="glass-card p-7">
                  <ul className="space-y-5 text-sm">
                    <li className="flex items-start gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy-700/10 text-navy-700">
                        <MapPin className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <p className="font-display font-bold text-navy-700">Showroom</p>
                        <p className="mt-1 text-navy-800/70">
                          {SITE.address.street}
                          <br />
                          {SITE.address.zip} {SITE.address.city} ({SITE.address.province})
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy-700/10 text-navy-700">
                        <Phone className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <p className="font-display font-bold text-navy-700">Telefono</p>
                        <a
                          href={`tel:${SITE.phoneRaw}`}
                          className="mt-1 block font-medium text-navy-700 transition-colors hover:text-taupe-600"
                        >
                          {SITE.phone}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy-700/10 text-navy-700">
                        <InstagramIcon className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <p className="font-display font-bold text-navy-700">Instagram</p>
                        <a
                          href={SITE.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 block font-medium text-navy-700 transition-colors hover:text-taupe-600"
                        >
                          {SITE.instagramHandle}
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* mappa */}
                <div className="glass-card overflow-hidden">
                  <iframe
                    title="Mappa — Giemme Doors & Service, Via Giorgio Vasari, Foligno"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      "Via Giorgio Vasari Comparto C, 06035 Foligno PG"
                    )}&z=15&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-64 w-full border-0"
                    allowFullScreen
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <ContactForm
                convexUrl={convexUrl}
                fallbackLink={waLink(
                  "Buongiorno Giemme Doors & Service, vorrei una consulenza per le porte della mia casa."
                )}
              />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

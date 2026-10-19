import { MapPin, Phone, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { InstagramIcon } from "./InstagramIcon";
import { LogoMark } from "./Logo";
import { SITE } from "@/lib/site";

const SECTIONS = [
  { label: "Chi siamo", href: "/#chi-siamo" },
  { label: "Prodotti", href: "/#prodotti" },
  { label: "Come lavoriamo", href: "/#processo" },
  { label: "Galleria", href: "/#galleria" },
  { label: "Contatti", href: "/#contatti" },
  { label: "Configuratore preventivo", href: "/configuratore", accent: true },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookie" },
  { label: "Termini e Condizioni", href: "/termini" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-navy-200">
      {/* decorazioni */}
      <div aria-hidden className="pointer-events-none absolute -top-32 right-[-10%] h-96 w-96 rounded-full border border-navy-600/40" />
      <div aria-hidden className="pointer-events-none absolute -top-20 right-[-6%] h-96 w-96 rounded-full border border-navy-600/30" />
      <div aria-hidden className="pointer-events-none absolute bottom-[-30%] left-[-8%] h-[26rem] w-[26rem] rounded-full bg-taupe-500/10 blur-3xl" />

      <div className="container-x relative py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <LogoMark className="h-12 w-12" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold tracking-[0.22em] text-white">
                  GIEMME
                </span>
                <span className="mt-1 font-display text-[10px] font-semibold tracking-[0.3em] text-taupe-300">
                  DOORS &amp; SERVICE
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-200/70">
              Porte da interno e porte blindate certificate. {SITE.claim}: ti
              aiutiamo a scegliere la soluzione perfetta per la tua casa.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-navy-600/60 text-navy-200 transition-all hover:-translate-y-0.5 hover:border-taupe-300 hover:text-taupe-300"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <span className="chip !border-navy-600/60 !bg-navy-800/60 !text-taupe-300">
                <ShieldCheck className="h-3.5 w-3.5" />
                Prodotti certificati
              </span>
            </div>
          </div>

          {/* sezioni */}
          <nav aria-label="Sezioni del sito">
            <p className="font-display text-xs font-bold tracking-[0.25em] text-taupe-300 uppercase">
              Naviga
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {SECTIONS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={
                      l.accent
                        ? "font-semibold text-accent-500 transition-colors hover:text-accent-500/80"
                        : "text-navy-200/80 transition-colors hover:text-white"
                    }
                  >
                    {l.accent && "● "}
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* legale */}
          <nav aria-label="Pagine legali">
            <p className="font-display text-xs font-bold tracking-[0.25em] text-taupe-300 uppercase">
              Legale
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {LEGAL.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-navy-200/80 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* contatti */}
          <div>
            <p className="font-display text-xs font-bold tracking-[0.25em] text-taupe-300 uppercase">
              Contatti
            </p>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-taupe-400" />
                <span className="text-navy-200/80">
                  {SITE.address.street}
                  <br />
                  {SITE.address.zip} {SITE.address.city} ({SITE.address.province})
                </span>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-center gap-3 text-navy-200/80 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-taupe-400" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-navy-200/80 transition-colors hover:text-white"
                >
                  <InstagramIcon className="h-4 w-4 shrink-0 text-taupe-400" />
                  {SITE.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-navy-600/40 pt-7 text-xs text-navy-200/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name} — {SITE.address.street},{" "}
            {SITE.address.zip} {SITE.address.city} ({SITE.address.province}) · P. IVA: da
            completare
          </p>
          <p>
            Design, sicurezza e affidabilità · Soluzioni per ogni ambiente
          </p>
        </div>
      </div>
    </footer>
  );
}

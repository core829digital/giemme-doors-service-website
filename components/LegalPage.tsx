import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { SITE } from "@/lib/site";

/**
 * Layout condiviso per le pagine legali.
 */
export function LegalPage({
  title,
  lead,
  updated = "Ottobre 2026",
  children,
}: {
  title: string;
  lead: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="relative overflow-hidden pt-32 pb-24">
      {/* sfondo coerente con l'identità */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(110%_70%_at_85%_0%,#ede7db_0%,#f7f4ef_60%)]" />
        <div className="absolute -top-32 right-[-10%] h-[26rem] w-[26rem] rounded-full bg-taupe-500/10 blur-3xl" />
        <svg viewBox="0 0 200 200" className="animate-spin-slow absolute -right-56 top-24 hidden h-[32rem] w-[32rem] opacity-[0.10] md:block">
          <circle cx="100" cy="100" r="88" fill="none" stroke="#1e3a5c" strokeWidth="1.6" strokeDasharray="280 70" strokeLinecap="round" />
        </svg>
      </div>

      <div className="container-x relative max-w-5xl">
        <Reveal>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy-800/60 transition-colors hover:text-navy-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Torna alla home
          </Link>

          <h1 className="mt-8 font-display text-4xl font-extrabold tracking-tight text-navy-700">{title}</h1>
          <p className="mt-4 leading-relaxed text-navy-800/70">{lead}</p>
          <p className="mt-3 text-xs font-semibold tracking-wide text-taupe-600 uppercase">
            {SITE.name} · {SITE.address.street}, {SITE.address.zip} {SITE.address.city} ({SITE.address.province}) · Ultimo aggiornamento: {updated}
          </p>

          <div className="legal mt-10 rounded-3xl border border-taupe-300/60 bg-white/80 p-8 shadow-[0_24px_60px_-32px_rgb(30_58_92/0.25)] backdrop-blur sm:p-10">
            {children}
          </div>
        </Reveal>
      </div>
    </main>
  );
}

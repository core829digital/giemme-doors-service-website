"use client";

import Script from "next/script";
import { MessageCircle, Phone, ShieldAlert } from "lucide-react";
import { useEffect, useState } from "react";
import { CONFIGURATOR, SITE } from "@/lib/site";

/**
 * Integrazione ufficiale OneSpec:
 * - Next.js può iniettare <Script> a fine <body> → per questo usiamo
 *   l'attributo ufficiale `data-target`, che forza il mount dell'iframe
 *   dentro il contenitore #gds-onespec-mount (nella card, non sotto il footer).
 * - Il loader gestisce auto-resize (onespec:resize) e notifica il caricamento
 *   tramite evento DOM (onespec:ready).
 *
 * NB: il widget si carica solo se questo dominio è nell'elenco "Authorised sites"
 * del configuratore (backoffice OneSpec). Se non riceviamo "onespec:ready"
 * entro ~7s mostriamo un fallback utile al visitatore.
 */
export function ConfiguratorEmbed() {
  const [ready, setReady] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    function onReady() {
      setReady(true);
      setChecking(false);
    }
    window.addEventListener("onespec:ready", onReady);

    // Robustezza: se il loader si è già caricato prima che Next inietti il tag,
    // richiamiamo scan() (idempotente: usa data-onespec-done).
    const rescanTimes = [400, 1200, 2500, 4000];
    const timers = rescanTimes.map((ms) =>
      setTimeout(() => {
        const loader = window as unknown as { __onespecLoader?: { scan: () => void } };
        if (loader.__onespecLoader?.scan) loader.__onespecLoader.scan();
      }, ms)
    );

    const t = setTimeout(() => setChecking(false), 7000);
    return () => {
      window.removeEventListener("onespec:ready", onReady);
      timers.forEach(clearTimeout);
      clearTimeout(t);
    };
  }, []);

  return (
    <div>
      {/* Contenitore di mount dell'iframe */}
      <div id="gds-onespec-mount" className="min-h-[640px]">
        {/* Loader ufficiale OneSpec */}
        <Script
          src="https://platform.onespec.eu/embed.js"
          strategy="afterInteractive"
          data-onespec={CONFIGURATOR.publicId}
          data-target="#gds-onespec-mount"
          data-lang="it"
          data-theme="light"
          data-accent="#1e3a5c"
          data-min-height="640"
          data-title="Configuratore preventivo Giemme Doors & Service"
        />
      </div>

      {!ready && (
        <div
          aria-live="polite"
          className={
            checking
              ? "hidden"
              : "rounded-2xl border border-accent-600/30 bg-accent-100/60 p-10 text-center"
          }
        >
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent-600/10 text-accent-700">
            <ShieldAlert className="h-7 w-7" />
          </span>
          <h3 className="mt-5 font-display text-xl font-bold text-navy-700">
            Il configuratore si sta preparando…
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-navy-800/70">
            Se non appare tra qualche istante, dipende dall&apos;
            <strong>autorizzazione del dominio</strong> sul servizio OneSpec
            (sezione <em>Authorised sites</em>). Nel frattempo:
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-outline !px-5 !py-2.5">
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
            <a
              href={`${SITE.whatsapp}?text=${encodeURIComponent(
                "Buongiorno, vorrei configurare i miei serramenti."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent !px-5 !py-2.5"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* stato visivo durante il caricamento */}
      {checking && (
        <div className="animate-float-slow rounded-2xl border border-taupe-300/60 bg-white/60 px-8 py-16 text-center">
          <p className="font-display text-sm font-semibold tracking-[0.25em] text-taupe-600 uppercase">
            Caricamento configuratore…
          </p>
          <div className="mx-auto mt-5 h-1 w-40 overflow-hidden rounded-full bg-taupe-200">
            <div className="h-full w-1/2 animate-[float_1.4s_ease-in-out_infinite] rounded-full bg-navy-600" />
          </div>
        </div>
      )}
    </div>
  );
}

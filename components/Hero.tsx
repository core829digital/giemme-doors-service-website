"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Hammer, MessageCircle, Phone, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { LogoMark } from "./Logo";
import { SITE } from "@/lib/site";

const CHIPS = [
  { icon: Sparkles, label: "Consulenza personalizzata" },
  { icon: ShieldCheck, label: "Prodotti certificati" },
  { icon: Hammer, label: "Posa professionale" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yVisual = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      {/* ── sfondo spaziale ─────────────────────────────────────────────── */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_80%_10%,#ede7db_0%,#f7f4ef_55%)]" />
        <div className="absolute -top-40 right-[-15%] h-[34rem] w-[34rem] rounded-full bg-taupe-500/15 blur-3xl" />
        <div className="absolute bottom-[-30%] left-[-12%] h-[30rem] w-[30rem] rounded-full bg-navy-500/10 blur-3xl" />
        {/* archi di logo ruotanti */}
        <svg
          viewBox="0 0 200 200"
          className="animate-spin-slow absolute -right-40 top-1/2 hidden h-[46rem] w-[46rem] -translate-y-1/2 opacity-[0.16] md:block"
        >
          <circle cx="100" cy="100" r="88" fill="none" stroke="#1e3a5c" strokeWidth="1.6" strokeDasharray="300 80" strokeLinecap="round" />
          <circle cx="100" cy="100" r="74" fill="none" stroke="#8a7a68" strokeWidth="1.4" strokeDasharray="200 110" strokeDashoffset="60" strokeLinecap="round" />
        </svg>
        <svg
          viewBox="0 0 200 200"
          className="animate-spin-slower absolute -left-56 -top-56 hidden h-[38rem] w-[38rem] opacity-[0.12] md:block"
        >
          <circle cx="100" cy="100" r="88" fill="none" stroke="#8a7a68" strokeWidth="1.6" strokeDasharray="220 110" strokeLinecap="round" />
        </svg>
      </div>

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* ── testo ────────────────────────────────────────────────────── */}
        <motion.div style={{ y: yText, opacity: fade }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="chip border-taupe-300/70 bg-white/70"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-taupe-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-taupe-500" />
            </span>
            Foligno · Porte da interno &amp; porte blindate certificate
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-[2.65rem] leading-[1.05] font-extrabold tracking-tight text-navy-700 sm:text-6xl"
          >
            Porte che disegnano la tua casa,{" "}
            <span className="relative whitespace-nowrap">
              <span className="bg-gradient-to-r from-taupe-500 via-taupe-400 to-navy-500 bg-clip-text text-transparent">
                e la proteggono.
              </span>
              <svg
                viewBox="0 0 240 12"
                className="absolute -bottom-2 left-0 w-full text-taupe-400"
                aria-hidden
              >
                <path d="M4 8 C 60 2, 180 2, 236 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-navy-800/75"
          >
            Design, sicurezza e affidabilità: ti aiutiamo a scegliere la
            soluzione perfetta per ogni ambiente, dalla consulenza alla posa
            finale. <strong className="font-semibold text-navy-700">Giemme Doors &amp; Service</strong>, la tua porta verso case più belle e più sicure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link href="#contatti" className="btn-primary group">
              Richiedi una consulenza
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </Link>
            <a href={`tel:${SITE.phoneRaw}`} className="btn-outline">
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Scrivici su WhatsApp"
              className="btn-outline !px-4 !py-3"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.42 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {CHIPS.map((c) => (
              <li key={c.label} className="chip bg-white/80">
                <c.icon className="h-3.5 w-3.5 text-taupe-600" />
                {c.label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* ── visual spaziale ─────────────────────────────────────────── */}
        <motion.div
          style={{ y: yVisual }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="glass-card relative overflow-hidden p-8 sm:p-12">
            {/* anelli interni */}
            <svg
              viewBox="0 0 200 200"
              className="animate-spin-slower pointer-events-none absolute -right-16 -top-16 h-56 w-56 opacity-40"
              aria-hidden
            >
              <circle cx="100" cy="100" r="70" fill="none" stroke="#8a7a68" strokeWidth="1.2" strokeDasharray="180 60" strokeLinecap="round" />
            </svg>
            <div className="animate-float relative">
              <LogoMark className="mx-auto h-56 w-56 sm:h-72 sm:w-72" />
            </div>
            <p className="mt-6 text-center font-display text-[11px] font-semibold tracking-[0.35em] text-taupe-600 uppercase">
              Soluzioni per ogni ambiente
            </p>
            <div className="mx-auto mt-6 grid w-fit grid-cols-3 gap-px overflow-hidden rounded-2xl border border-taupe-200 bg-taupe-200/50">
              {[
                ["Interne", "design su misura"],
                ["Blindate", "certificate"],
                ["Posa", "professionale"],
              ].map(([a, b]) => (
                <div key={a} className="bg-white/70 px-5 py-3.5 text-center">
                  <p className="font-display text-sm font-bold text-navy-700">{a}</p>
                  <p className="mt-0.5 text-[11px] text-navy-800/60">{b}</p>
                </div>
              ))}
            </div>
          </div>

          {/* badge flottante */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="animate-float-slow absolute -bottom-6 -left-2 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/85 px-5 py-3.5 shadow-[0_18px_40px_-18px_rgb(30_58_92/0.35)] backdrop-blur-xl sm:-left-8"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-navy-700 text-white">
              <ShieldCheck className="h-4.5 w-4.5" />
            </span>
            <div className="text-left">
              <p className="font-display text-xs font-bold text-navy-700">Certificazioni europee</p>
              <p className="text-[11px] text-navy-800/60">Sicurezza antieffrazione</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* indicatore scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <div className="flex h-12 w-7 items-start justify-center rounded-full border border-navy-500/30 p-1.5">
          <motion.span
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-navy-500"
          />
        </div>
      </motion.div>
    </section>
  );
}

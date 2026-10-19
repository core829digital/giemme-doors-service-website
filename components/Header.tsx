"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, Phone, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { InstagramIcon } from "./InstagramIcon";
import { LogoMark } from "./Logo";

const NAV = [
  { label: "Chi siamo", href: "/#chi-siamo" },
  { label: "Prodotti", href: "/#prodotti" },
  { label: "Come lavoriamo", href: "/#processo" },
  { label: "Galleria", href: "/#galleria" },
  { label: "Contatti", href: "/#contatti" },
  { label: "Configuratore", href: "/configuratore", accent: true },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-taupe-300/40 bg-cream/85 py-2.5 shadow-[0_10px_40px_-20px_rgb(30_58_92/0.35)] backdrop-blur-xl"
            : "bg-transparent py-4"
        )}
      >
        <div className="container-x flex items-center justify-between">
          <Link href="/" aria-label="Giemme Doors & Service — Home" onClick={() => setOpen(false)}>
            <span className="flex items-center gap-3">
              <LogoMark className="h-11 w-11" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-[17px] font-bold tracking-[0.22em] text-navy-700">
                  GIEMME
                </span>
                <span className="mt-1 font-display text-[9.5px] font-semibold tracking-[0.3em] text-taupe-600">
                  DOORS &amp; SERVICE
                </span>
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) =>
              item.accent ? (
                <a key={item.href} href={item.href} className="nav-pill-accent">
                  <Sparkles className="h-3.5 w-3.5" />
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative rounded-full px-4 py-2 text-sm font-medium text-navy-800/80 transition-colors hover:bg-white/60 hover:text-navy-700"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram di Giemme Doors & Service"
              className="rounded-full border border-taupe-300/60 p-2.5 text-taupe-600 transition-colors hover:border-navy-700/40 hover:text-navy-700"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a href={`tel:${SITE.phoneRaw}`} className="btn-primary !px-5 !py-2.5">
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full border border-taupe-300/60 bg-white/70 text-navy-700 backdrop-blur lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* barra di avanzamento scroll */}
        <motion.div
          style={{ scaleX: progress }}
          className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-navy-700 via-navy-500 to-taupe-400"
        />
      </header>

      {/* menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-4 top-20 z-40 rounded-3xl border border-white/70 bg-cream/95 p-6 shadow-[0_30px_70px_-30px_rgb(16_29_47/0.5)] backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex flex-col">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block border-b border-taupe-300/40 py-3.5 font-display text-lg font-semibold last:border-none",
                      item.accent ? "text-accent-600" : "text-navy-700"
                    )}
                  >
                    {item.label}
                    {item.accent && (
                      <span className="ml-2 rounded-full bg-accent-100 px-2 py-0.5 align-middle text-[10px] font-bold tracking-wide text-accent-700 uppercase">
                        Nuovo
                      </span>
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-5 flex flex-col gap-3">
              <a href={`tel:${SITE.phoneRaw}`} className="btn-primary w-full">
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

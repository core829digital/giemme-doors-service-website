"use client";

import { anyApi } from "convex/server";
import { useMutation } from "convex/react";
import { ArrowRight, CheckCircle2, Loader2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-taupe-300/70 bg-white/80 px-4 py-3 text-sm text-navy-800 placeholder:text-navy-300 focus:border-navy-600 focus:outline-none focus:ring-2 focus:ring-navy-600/20";

const labelClass =
  "mb-1.5 block text-xs font-semibold tracking-wide text-navy-800/70 uppercase";

type Payload = {
  name: string;
  phone: string;
  email?: string;
  message: string;
};

function readPayload(e: FormEvent<HTMLFormElement>): Payload {
  const fd = new FormData(e.currentTarget);
  return {
    name: String(fd.get("name") || "").trim(),
    phone: String(fd.get("phone") || "").trim(),
    email: String(fd.get("email") || "").trim() || undefined,
    message: String(fd.get("message") || "").trim(),
  };
}

function SuccessPanel() {
  return (
    <div className="glass-card flex min-h-72 flex-col items-center justify-center p-10 text-center">
      <span className="grid h-14 w-14 place-items-center rounded-full bg-navy-700/10 text-navy-700">
        <CheckCircle2 className="h-7 w-7" />
      </span>
      <h3 className="mt-5 font-display text-xl font-bold text-navy-700">
        Richiesta inviata!
      </h3>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-navy-800/70">
        Ti risponderemo al più presto. Per risposte immediate, chiamaci al{" "}
        <a
          className="font-semibold text-navy-700 underline underline-offset-2"
          href="tel:+393388869757"
        >
          338 886 9757
        </a>
        .
      </p>
    </div>
  );
}

/**
 * Form contatti a 3 modalità:
 * 1. Convex connesso  → la richiesta finisce nel database Convex.
 * 2. Convex assente   → fallback WhatsApp con messaggio precompilato.
 */
export function ContactForm({
  convexUrl,
  fallbackLink,
}: {
  convexUrl?: string;
  fallbackLink: string;
}) {
  return convexUrl ? (
    <ConvexLeadForm />
  ) : (
    <WhatsAppLeadForm fallbackLink={fallbackLink} />
  );
}

/* ── Modalità Convex ─────────────────────────────────────────────────── */

function ConvexLeadForm() {
  const sendLead = useMutation(anyApi.leads.send as never);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    try {
      await sendLead(readPayload(e) as never);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") return <SuccessPanel />;

  return (
    <BaseForm
      onSubmit={handleSubmit}
      loading={status === "loading"}
      error={status === "error"}
      trailing={
        <p className="text-[11px] leading-relaxed text-navy-800/50">
          Inviando la richiesta accetti la nostra{" "}
          <a href="/privacy" className="underline underline-offset-2 hover:text-navy-700">
            Privacy Policy
          </a>
          . I campi contrassegnati con * sono obbligatori.
        </p>
      }
    />
  );
}

/* ── Fallback WhatsApp ───────────────────────────────────────────────── */

function WhatsAppLeadForm({ fallbackLink }: { fallbackLink: string }) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const p = readPayload(e);
    const text = [
      `Buongiorno Giemme Doors & Service, sono ${p.name}.`,
      p.message,
      `Telefono: ${p.phone}`,
      p.email ? `Email: ${p.email}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`${fallbackLink.split("?")[0]}?text=${encodeURIComponent(text)}`, "_blank");
  }

  return (
    <BaseForm
      onSubmit={handleSubmit}
      loading={false}
      error={false}
      submitLabel="Invia la richiesta via WhatsApp"
      trailing={
        <p className="text-[11px] leading-relaxed text-navy-800/50">
          Il pulsante apre WhatsApp con il messaggio già compilato: devi solo
          premerne l&apos;invio. Inviando la richiesta accetti la nostra{" "}
          <a href="/privacy" className="underline underline-offset-2 hover:text-navy-700">
            Privacy Policy
          </a>
          . I campi contrassegnati con * sono obbligatori.
        </p>
      }
    />
  );
}

/* ── UI condivisa ────────────────────────────────────────────────────── */

function BaseForm({
  onSubmit,
  loading,
  error,
  trailing,
  submitLabel = "Invia la richiesta",
}: {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  error: boolean;
  trailing?: React.ReactNode;
  submitLabel?: string;
}) {
  return (
    <form onSubmit={onSubmit} className="glass-card space-y-5 p-8 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>Nome e cognome *</span>
          <input
            required
            name="name"
            autoComplete="name"
            placeholder="Mario Rossi"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className={labelClass}>Telefono *</span>
          <input
            required
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+39 ..."
            className={inputClass}
          />
        </label>
      </div>

      <label className="block">
        <span className={labelClass}>
          Email{" "}
          <span className="font-normal normal-case opacity-70">(opzionale)</span>
        </span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder="nome@email.com"
          className={inputClass}
        />
      </label>

      <label className="block">
        <span className={labelClass}>Messaggio *</span>
        <textarea
          required
          name="message"
          rows={4}
          placeholder="Raccontaci il tuo progetto: porte da interno, blindate, misure…"
          className={`${inputClass} resize-none`}
        />
      </label>

      {error && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          Si è verificato un errore. Riprova oppure scrivici su WhatsApp o
          chiama il 338 886 9757.
        </p>
      )}

      <div className="flex flex-col gap-4">
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Invio in corso…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              {submitLabel}
            </>
          )}
        </button>
        {!loading && (
          <a
            href="https://wa.me/393388869757"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 text-xs font-medium text-navy-800/60 transition-colors hover:text-navy-700"
          >
            Oppure scrivici subito su WhatsApp
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        )}
        {trailing}
      </div>
    </form>
  );
}

# Giemme Doors & Service — Sito web

Sito ufficiale di **Giemme Doors & Service** (Foligno): porte da interno e porte blindate certificate.

Stack: **Next.js 15 · Tailwind CSS v4 · framer-motion · Convex (contatti) · OneSpec (configuratore)**

## Avvio rapido

```bash
npm install
npm run dev        # sviluppo → http://localhost:3000
npm run build && npm run start   # produzione
```

## Struttura

| Percorso | Descrizione |
|---|---|
| `/` | One-page: Hero, Chi siamo, Prodotti, Come lavoriamo, Galleria, Contatti |
| `/configuratore` | Configuratore preventivo OneSpec (embed ufficiale con auto-resize) |
| `/privacy` `/cookie` `/termini` | Pagine legali (GDPR) |
| `/sitemap.xml` `/robots.txt` | SEO |

## Configuratore OneSpec

Il widget funziona **solo** se il dominio che lo ospita è nell'elenco **Authorised sites**
del configuratore (backofficio OneSpec). Da aggiungere:

- `http://localhost:3000` (test)
- dominio di produzione, es. `https://www.giemmedoors.it`

Config in `lib/site.ts` → `CONFIGURATOR`.

## Convex (opzionale)

Il form contatti usa normalmente il fallback WhatsApp. Per salvare le richieste
in database Convex:

```bash
npx convex dev
# poi crea .env.local con:
NEXT_PUBLIC_CONVEX_URL=https://<deployment>.convex.cloud
```

## Da completare

- Logo ufficiale (vedi `components/Logo.tsx` e `public/logo.svg`)
- P. IVA / dati societari (footer + pagine legali)
- Dominio definitivo in `lib/site.ts`

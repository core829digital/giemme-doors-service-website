/**
 * Shared site constants — single source of truth.
 */
export const SITE = {
  name: "Giemme Doors & Service",
  shortName: "Giemme Doors",
  tagline: "Soluzioni per ogni ambiente",
  claim: "Design, sicurezza e affidabilità",
  description:
    "Porte da interno e porte blindate certificate a Foligno. Design, sicurezza e affidabilità: ti aiutiamo a scegliere la soluzione perfetta per la tua casa.",
  phone: "+39 338 886 9757",
  phoneRaw: "+393388869757",
  whatsapp: "https://wa.me/393388869757",
  instagram: "https://www.instagram.com/giemme_doors_service/",
  instagramHandle: "@giemme_doors_service",
  address: {
    street: "Via Giorgio Vasari snc, Comparto C",
    city: "Foligno",
    zip: "06035",
    province: "PG",
  },
  // Placeholder: sostituire quando disponibile / dati societari reali
  vat: "P. IVA — da completare",
  // Dominio di produzione (aggiornare quando il dominio è definitivo)
  url: "https://www.giemmedoors.it",
} as const;

export const siteUrl = SITE.url;

export function waLink(message: string) {
  return `${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  "Buongiorno Giemme Doors & Service, vorrei una consulenza per le porte della mia casa."
);

/* ── Configuratore OneSpec ────────────────────────────────────────────── */
export const CONFIGURATOR = {
  embedUrl: "https://platform.onespec.eu/w/Nu9dvICSyZ",
  singleUrl: "https://platform.onespec.eu/c/Nu9dvICSyZ",
  publicId: "Nu9dvICSyZ",
  origin: "https://platform.onespec.eu",
} as const;

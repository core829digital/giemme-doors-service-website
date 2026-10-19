/**
 * Illustrazioni SVG stilizzate delle porte — usate in prodotti e galleria.
 * La foglia (.door-leaf) si apre su hover per presentare il prodotto.
 */

type Variant =
  | "battente"
  | "blindata"
  | "scorrevole"
  | "filomuro"
  | "vetro"
  | "doppio";

const PALETTE = {
  nav: "#1e3a5c",
  navLight: "#35608f",
  dark: "#16293f",
  taupe: "#a28f79",
  taupeLight: "#dcd2c2",
  cream: "#f7f4ef",
  sand: "#e5ddd0",
};

function Leaf({
  x,
  w,
  n,
}: {
  x: number;
  w: number;
  n: number;
}) {
  return (
    <g className="door-leaf">
      <rect x={x} y="28" width={w} height="104" rx="2.5" fill={PALETTE.nav} />
      {Array.from({ length: n }).map((_, i) => (
        <line
          key={i}
          x1={x + 4 + i * (((w - 8) / Math.max(n - 1, 1)) || 0)}
          y1="36"
          x2={x + 4 + i * (((w - 8) / Math.max(n - 1, 1)) || 0)}
          y2="124"
          stroke={PALETTE.navLight}
          strokeWidth="1"
          opacity="0.5"
        />
      ))}
      <rect x={x + w + 2} y="66" width="2.5" height="16" rx="1.2" fill={PALETTE.taupe} />
    </g>
  );
}

function Frame({ variant }: { variant: Variant }) {
  switch (variant) {
    case "blindata":
      return (
        <>
          <rect x="14" y="16" width="152" height="128" fill={PALETTE.taupe} />
          <rect x="26" y="28" width="128" height="104" fill={PALETTE.cream} />
          {[
            [20, 22],
            [160, 22],
            [20, 130],
            [160, 130],
            [90, 22],
            [90, 130],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="2.2" fill={PALETTE.taupeLight} opacity="0.9" />
          ))}
          <circle cx="148" cy="60" r="3" fill="none" stroke={PALETTE.taupe} strokeWidth="1.4" />
        </>
      );
    case "scorrevole":
      return <rect x="14" y="16" width="152" height="128" fill={PALETTE.sand} />;
    case "filomuro":
      return <rect x="14" y="16" width="152" height="128" fill={PALETTE.sand} />;
    case "vetro":
      return <rect x="14" y="16" width="152" height="128" fill={PALETTE.sand} />;
    case "doppio":
      return (
        <>
          <path d="M14 144 h48 v-36 a24 24 0 0 1 0 -0.1 Z" fill={PALETTE.taupe} />
          <rect x="14" y="16" width="152" height="128" fill={PALETTE.taupe} />
          <rect x="26" y="28" width="128" height="104" fill={PALETTE.cream} />
        </>
      );
    case "battente":
    default:
      return (
        <>
          <rect x="14" y="16" width="152" height="128" fill={PALETTE.taupe} />
          <rect x="26" y="28" width="128" height="104" fill={PALETTE.cream} />
        </>
      );
  }
}

function DoorArtContent({ variant }: { variant: Variant }) {
  switch (variant) {
    case "blindata":
      return (
        <>
          <Frame variant="blindata" />
          <g className="door-leaf">
            <rect x="30" y="32" width="120" height="96" rx="2" fill={PALETTE.dark} />
            <rect x="38" y="40" width="104" height="34" rx="2" fill="#20415f" />
            <rect x="38" y="82" width="104" height="40" rx="2" fill="#20415f" />
            {/* serratura */}
            <rect x="146" y="60" width="2.2" height="18" fill={PALETTE.taupe} />
            <circle cx="147" cy="58" r="3" fill={PALETTE.taupeLight} />
            {/* maniglia */}
            <rect x="140" y="76" width="14" height="6" rx="3" fill={PALETTE.taupeLight} />
          </g>
          <rect x="160" y="20" width="6" height="116" fill={PALETTE.taupe} />
        </>
      );
    case "scorrevole":
      return (
        <>
          <Frame variant="scorrevole" />
          <line x1="20" y1="24" x2="160" y2="24" stroke={PALETTE.taupe} strokeWidth="3" strokeLinecap="round" />
          <g className="door-leaf" style={{ transformOrigin: "40% 100%" }}>
            <rect x="52" y="26" width="72" height="116" rx="2" fill={PALETTE.nav} />
            <line x1="88" y1="32" x2="88" y2="136" stroke={PALETTE.navLight} strokeWidth="1.4" opacity="0.6" />
            <rect x="118" y="70" width="2.5" height="18" rx="1.2" fill={PALETTE.taupe} />
          </g>
        </>
      );
    case "filomuro":
      return (
        <>
          <Frame variant="filomuro" />
          <g className="door-leaf">
            <rect x="30" y="30" width="118" height="102" rx="1.5" fill={PALETTE.nav} />
            <rect x="138" y="64" width="3" height="20" rx="1.5" fill={PALETTE.taupeLight} />
          </g>
        </>
      );
    case "vetro":
      return (
        <>
          <Frame variant="vetro" />
          <g className="door-leaf">
            <rect x="32" y="30" width="114" height="102" rx="2" fill={PALETTE.nav} opacity="0.14" />
            <rect x="32" y="30" width="114" height="102" rx="2" fill={PALETTE.cream} opacity="0.92" />
            <line x1="60" y1="30" x2="60" y2="132" stroke={PALETTE.taupe} strokeWidth="4" />
            <line x1="88" y1="30" x2="88" y2="132" stroke={PALETTE.taupe} strokeWidth="4" />
            <line x1="116" y1="30" x2="116" y2="132" stroke={PALETTE.taupe} strokeWidth="4" />
            <rect x="138" y="64" width="3" height="20" rx="1.5" fill={PALETTE.taupe} />
          </g>
        </>
      );
    case "doppio":
      return (
        <>
          <Frame variant="doppio" />
          <g className="door-leaf" style={{ transformOrigin: "95% 100%" }}>
            {/* ante sinistra e destra con arco superiore */}
            <path d="M30 132 V58 a29 29 0 0 1 58 0 V132 Z" fill={PALETTE.nav} />
            <path d="M92 132 V58 a29 29 0 0 1 58 0 V132 Z" fill={PALETTE.navLight} />
            <rect x="84" y="64" width="2.5" height="18" rx="1.2" fill={PALETTE.taupe} />
            <rect x="96" y="64" width="2.5" height="18" rx="1.2" fill={PALETTE.taupe} />
          </g>
        </>
      );
    case "battente":
    default:
      return (
        <>
          <Frame variant="battente" />
          <g className="door-leaf">
            <rect x="34" y="34" width="112" height="98" rx="2" fill={PALETTE.nav} />
            <rect x="44" y="44" width="92" height="34" rx="14" fill="#20415f" />
            <rect x="44" y="86" width="92" height="34" rx="14" fill="#20415f" />
            <rect x="138" y="64" width="3" height="20" rx="1.5" fill={PALETTE.taupe} />
          </g>
        </>
      );
  }
}

export function DoorArt({
  variant = "battente",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 180 160"
      role="img"
      aria-hidden
      className={className}
    >
      {/* pavimento */}
      <rect x="0" y="140" width="180" height="4" rx="2" fill={PALETTE.taupeLight} />
      <DoorArtContent variant={variant} />
      {/* skirting */}
      <rect x="0" y="138" width="24" height="4" fill={PALETTE.taupeLight} />
      <rect x="156" y="138" width="24" height="4" fill={PALETTE.taupeLight} />
    </svg>
  );
}

export const DOOR_VARIANTS: Variant[] = [
  "battente",
  "blindata",
  "scorrevole",
  "filomuro",
  "vetro",
  "doppio",
];

export const DOOR_CAPTIONS: Record<Variant, string> = {
  battente: "Battente classica",
  blindata: "Blindata certificata",
  scorrevole: "Scorrevole a scomparsa",
  filomuro: "Filo muro",
  vetro: "Vetro e legno",
  doppio: "Doppio battente",
};

import { cn } from "@/lib/utils";

/**
 * Marchio pittorico del logo Giemme (archi + porta ad arco aperta).
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      role="img"
      aria-label="Logo Giemme Doors & Service"
      className={className}
    >
      <g transform="translate(60 62)">
        <circle
          cx="0"
          cy="-2"
          r="55"
          fill="none"
          stroke="#1e3a5c"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeDasharray="280 66"
          strokeDashoffset="96"
        />
        <circle
          cx="0"
          cy="-2"
          r="49"
          fill="none"
          stroke="#8a7a68"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeDasharray="205 103"
          strokeDashoffset="140"
          opacity="0.9"
        />
        <path
          d="M-22 32 V-17 A22 22 0 0 1 22 -17 V32 Z M-14 32 V-14.5 A14 14 0 0 1 14 -14.5 V32 Z"
          fill="#a28f79"
          fillRule="evenodd"
          opacity="0.95"
        />
        <path d="M-12.5 30 V-13 A12.5 12.5 0 0 1 12.5 -13 V30 Z" fill="#f7f4ef" />
        <g className="door-leaf">
          <path
            d="M-10.8 30 V-10.5 A10.8 10.8 0 0 1 10.8 -10.5 V30 Z"
            fill="#1e3a5c"
          />
          <rect x="5.6" y="1" width="1.8" height="9" rx="0.9" fill="#c4b5a0" />
        </g>
        <path d="M18 2 h5 v30 h-5 Z M18 2 h16 a4 4 0 0 1 4 4 v2 h-20 Z" fill="#a28f79" opacity="0.95" />
      </g>
    </svg>
  );
}

/**
 * Logo completo (icona + wordmark) come testo HTML, adattivo a tema chiaro/scuro.
 */
export function LogoWordmark({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark className="h-11 w-11 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[17px] font-bold tracking-[0.22em]",
            variant === "dark" ? "text-navy-700" : "text-white"
          )}
        >
          GIEMME
        </span>
        <span
          className={cn(
            "mt-1 font-display text-[9.5px] font-semibold tracking-[0.3em]",
            variant === "dark" ? "text-taupe-600" : "text-taupe-300"
          )}
        >
          DOORS &amp; SERVICE
        </span>
      </span>
    </span>
  );
}

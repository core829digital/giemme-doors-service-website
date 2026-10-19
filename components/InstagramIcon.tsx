/**
 * Icona Instagram (outline) — i brand icon non sono più distribuiti da lucide-react.
 * Segue lo stile di lucide: stroke 2, 24x24, currentColor.
 */
export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/**
 * Icona WhatsApp (placeholder conversazione) — uso MessageCircle di lucide nel markup,
 * qui teniamo solo compatibilità futura.
 */
export { MessageCircle as WhatsAppIcon } from "lucide-react";

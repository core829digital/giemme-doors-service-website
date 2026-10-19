"use client";

import { ConvexProvider as ConvexRealProvider, ConvexReactClient } from "convex/react";
import type { ReactNode } from "react";

/**
 * Provider Convex opzionale:
 * - se NEXT_PUBLIC_CONVEX_URL è impostato → il sito usa Convex (form contatti).
 * - altrimenti il provider è trasparente e il form usa il fallback WhatsApp.
 */
export function ConvexProvider({ children }: { children: ReactNode }) {
  const url = process.env.NEXT_PUBLIC_CONVEX_URL;

  if (!url) return <>{children}</>;

  const client = new ConvexReactClient(url);
  return <ConvexRealProvider client={client}>{children}</ConvexRealProvider>;
}

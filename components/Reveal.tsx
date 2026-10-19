"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const VARIANTS: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

/**
 * Wrapper on-scroll: fade + slide + deblur quando l'elemento entra nel viewport.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "span";
}) {
  const M = motion[as];
  return (
    <M
      className={className}
      custom={delay}
      variants={VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </M>
  );
}

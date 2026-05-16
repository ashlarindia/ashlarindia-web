"use client";

import type { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  /** Fire animation every time element enters view, not just once */
  repeat?: boolean;
}

/**
 * Fade-up-on-scroll wrapper. Drop around any element.
 * Used across Hero, Stats, Calculators, etc.
 */
const Reveal: FC<RevealProps> = ({
  children, delay = 0, y = 12, duration = 0.6, className, repeat,
}) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: !repeat, margin: "-80px" }}
    transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default Reveal;
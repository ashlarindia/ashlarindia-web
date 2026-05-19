"use client";

import type { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  repeat?: boolean;
  className?: string;
  /** Use a stronger entrance with scale + blur (default false for backward compat) */
  enhanced?: boolean;
}

const Reveal: FC<RevealProps> = ({
  children,
  delay = 0,
  y = 16,
  duration = 0.65,
  repeat = false,
  className,
  enhanced = true, // Default to enhanced for new sites
}) => (
  <motion.div
    initial={
      enhanced
        ? { opacity: 0, y, scale: 0.97, filter: "blur(6px)" }
        : { opacity: 0, y }
    }
    whileInView={
      enhanced
        ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
        : { opacity: 1, y: 0 }
    }
    viewport={{ once: !repeat, margin: "-80px" }}
    transition={{
      duration,
      ease: [0.16, 1, 0.3, 1],
      delay,
    }}
    className={cn(className)}
  >
    {children}
  </motion.div>
);

export default Reveal;
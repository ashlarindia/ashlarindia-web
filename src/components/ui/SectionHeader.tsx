"use client";

import type { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
  /** Disable the reveal animation if the section already orchestrates it */
  static?: boolean;
}

const SectionHeader: FC<SectionHeaderProps> = ({
  eyebrow, title, description, align = "center", className, static: isStatic,
}) => {
  const content = (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "",
        className,
      )}
    >
      {eyebrow && (
        <span className="text-eyebrow uppercase text-brand-600">{eyebrow}</span>
      )}
      <h2
        className={cn(
          "font-display text-display-lg text-ink-900 text-balance",
          eyebrow ? "mt-4" : "",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-600 text-balance">
          {description}
        </p>
      )}
    </div>
  );

  if (isStatic) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {content}
    </motion.div>
  );
};

export default SectionHeader;
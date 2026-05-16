import type { FC, ReactNode } from "react";
import { cn } from "@/lib/cn";
import Container from "./Container";

type SectionTone = "surface" | "subtle" | "dark" | "transparent";

interface SectionProps {
  children: ReactNode;
  tone?: SectionTone;
  className?: string;
  containerClassName?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  /** Use this to add the bg-dot-grid wash overlay */
  dotted?: boolean;
  /** No container wrapper — for sections that need full-bleed children */
  bare?: boolean;
}

const toneStyles: Record<SectionTone, string> = {
  surface:     "bg-surface",
  subtle:      "bg-surface-subtle",
  dark:        "bg-ink-900 text-ink-100",
  transparent: "",
};

/**
 * Standard section with consistent vertical rhythm.
 * Replaces: <section className="bg-surface py-22 sm:py-30">...</section>
 */
const Section: FC<SectionProps> = ({
  children, tone = "surface", className, containerClassName,
  ariaLabel, ariaLabelledBy, dotted, bare,
}) => (
  <section
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledBy}
    className={cn(
      "relative py-22 sm:py-30",
      toneStyles[tone],
      className,
    )}
  >
    {dotted && (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]"
      />
    )}
    {bare ? children : (
      <Container className={cn("relative", containerClassName)}>{children}</Container>
    )}
  </section>
);

export default Section;
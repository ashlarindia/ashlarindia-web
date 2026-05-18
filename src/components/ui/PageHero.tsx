"use client";

import type { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";
import Container from "./Container";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumbs?: Breadcrumb[];
  /** Quiet wash variant for visual variety across knowledge pages */
  variant?: "default" | "subtle";
  className?: string;
}

/**
 * Standard page hero for inner pages (not the homepage hero).
 * Eyebrow + breadcrumbs + display heading + description.
 * Animated reveal on mount.
 */
const PageHero: FC<PageHeroProps> = ({
  eyebrow,
  title,
  description,
  breadcrumbs,
  variant = "default",
  className,
}) => (
  <section
    className={cn(
      "relative overflow-hidden border-b border-border-subtle",
      variant === "default" ? "bg-surface" : "bg-surface-subtle",
      "pt-12 pb-16 sm:pt-16 sm:pb-20",
      className,
    )}
  >
    {/* Ambient brand wash */}
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -top-32 -right-32 h-[24rem] w-[24rem] rounded-full bg-brand-100/40 blur-3xl" />
      <div className="absolute inset-0 bg-dot-grid opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]" />
    </div>

    <Container className="relative">
      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center gap-1.5 text-xs text-ink-500"
        >
          {breadcrumbs.map((crumb, i) => (
            <span key={`${crumb.label}-${i}`} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={12} className="text-ink-300" aria-hidden="true" />}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="transition-colors hover:text-brand-700"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-medium text-ink-700">{crumb.label}</span>
              )}
            </span>
          ))}
        </motion.nav>
      )}

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className="max-w-3xl"
      >
        {eyebrow && (
          <span className="text-eyebrow uppercase text-brand-600">{eyebrow}</span>
        )}
        <h1
          className={cn(
            "font-display text-display-xl text-ink-900 text-balance",
            eyebrow ? "mt-4" : "",
          )}
        >
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-base leading-relaxed text-ink-600 text-balance sm:text-lg">
            {description}
          </p>
        )}
      </motion.div>
    </Container>
  </section>
);

export default PageHero;
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
  variant?: "default" | "subtle";
  className?: string;
}

/* ============ Animation variants ============ */
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const eyebrowVariants = {
  hidden: { opacity: 0, x: -12 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const titleWordVariants = {
  hidden: { opacity: 0, y: 20, rotateX: -30 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const breadcrumbVariants = {
  hidden: { opacity: 0, y: -8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/* ============ Split title into words for individual animation ============ */
const SplitTitle: FC<{ title: ReactNode }> = ({ title }) => {
  if (typeof title !== "string") {
    return <motion.span variants={fadeUpVariants}>{title}</motion.span>;
  }

  const words = title.split(" ");

  return (
    <motion.span
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
      }}
      className="inline-block"
      style={{ perspective: "1000px" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={titleWordVariants}
          className="inline-block"
          style={{ transformOrigin: "50% 100%" }}
        >
          {word}
          {i < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.span>
  );
};

/* ============ The hero ============ */
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
    {/* ============ Ambient animated background ============ */}
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      {/* Floating brand blob (top-right) — drifts continuously */}
      <motion.div
        className="absolute -top-32 -right-32 h-[24rem] w-[24rem] rounded-full bg-brand-100/40 blur-3xl"
        animate={{
          x: [0, 20, -10, 0],
          y: [0, -15, 10, 0],
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      {/* Floating accent blob (bottom-left) — drifts continuously */}
      <motion.div
        className="absolute -bottom-20 -left-20 h-[18rem] w-[18rem] rounded-full bg-accent-400/15 blur-3xl"
        animate={{
          x: [0, -15, 8, 0],
          y: [0, 12, -8, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 22,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: 2,
        }}
      />

      {/* Dot grid (masked at top edge) */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]" />

      {/* Shimmer line — sweeps across the bottom border every 7s */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-brand-600/40 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "400%" }}
        transition={{
          duration: 4,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 3,
        }}
        style={{ width: "30%" }}
      />
    </div>

    <Container className="relative">
      {/* ============ Breadcrumbs (optional, slide-down entrance) ============ */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <motion.nav
          aria-label="Breadcrumb"
          variants={breadcrumbVariants}
          initial="hidden"
          animate="show"
          className="mb-6 flex items-center gap-1.5 text-xs text-ink-500"
        >
          {breadcrumbs.map((crumb, i) => (
            <span key={`${crumb.label}-${i}`} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight
                  size={12}
                  className="text-ink-300"
                  aria-hidden="true"
                />
              )}
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

      {/* ============ Hero content with staggered reveal ============ */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-3xl"
      >
        {/* Eyebrow with growing accent line */}
        {eyebrow && (
          <motion.div variants={eyebrowVariants} className="flex items-center gap-3">
            <motion.span
              aria-hidden="true"
              className="block h-px bg-brand-600"
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3,
              }}
            />
            <span className="text-eyebrow uppercase text-brand-600">
              {eyebrow}
            </span>
          </motion.div>
        )}

        {/* Title — word by word 3D flip-up reveal */}
        <motion.h1
          variants={fadeUpVariants}
          className={cn(
            "font-display text-display-xl text-ink-900 text-balance",
            eyebrow ? "mt-5" : "",
          )}
        >
          <SplitTitle title={title} />
        </motion.h1>

        {/* Description — fades in with blur unblur */}
        {description && (
          <motion.p
            variants={fadeUpVariants}
            className="mt-5 text-base leading-relaxed text-ink-600 text-balance sm:text-lg"
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </Container>
  </section>
);

export default PageHero;
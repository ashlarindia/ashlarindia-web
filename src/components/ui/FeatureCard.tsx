"use client";

import type { FC, ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { Arrow } from "./ArrowLink";

type IconTone = "brand" | "success" | "amber" | "ink";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  cta?: string;
  tone?: IconTone;
  invertOnHover?: boolean;
  className?: string;
  children?: ReactNode;
}

const toneClasses: Record<IconTone, { base: string; invert: string }> = {
  brand: {
    base: "bg-brand-50 text-brand-700 ring-brand-600/10",
    invert: "group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600",
  },
  success: {
    base: "bg-success/5 text-success ring-success/15",
    invert: "group-hover:bg-success group-hover:text-white group-hover:ring-success",
  },
  amber: {
    base: "bg-amber-50 text-amber-700 ring-amber-600/10",
    invert: "group-hover:bg-amber-600 group-hover:text-white group-hover:ring-amber-600",
  },
  ink: {
    base: "bg-ink-50 text-ink-800 ring-border",
    invert: "group-hover:bg-ink-900 group-hover:text-white group-hover:ring-ink-900",
  },
};

const FeatureCard: FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  href,
  cta = "Learn more",
  tone = "brand",
  invertOnHover = true,
  className,
  children,
}) => {
  const toneCls = toneClasses[tone];

  const content = (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative flex h-full flex-col rounded-xl border border-border bg-surface p-6 overflow-hidden",
        "transition-[border-color,box-shadow] duration-300 ease-out-expo",
        "hover:border-border-strong hover:shadow-lg",
        className,
      )}
    >
      {/* Animated gradient sweep on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-brand-50/50 to-transparent opacity-0 transition-all duration-700 ease-out-expo group-hover:translate-x-full group-hover:opacity-100"
      />

      {/* Radial hover glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(139,47,38,0.05), transparent 60%)",
        }}
      />

      {/* Icon tile with bounce on hover */}
      <motion.div
        whileHover={{ scale: 1.08, rotate: -3 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "relative flex h-11 w-11 items-center justify-center rounded-lg ring-1 ring-inset",
          "transition-colors duration-300 ease-out-expo",
          toneCls.base,
          invertOnHover && toneCls.invert,
        )}
      >
        <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
      </motion.div>

      {/* Content */}
      <div className="relative mt-5">
        <h3 className="font-display text-base font-medium leading-snug tracking-tight text-ink-900 transition-colors duration-200 group-hover:text-brand-700">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-600">{description}</p>
      </div>

      {children && <div className="relative mt-4 flex-1">{children}</div>}

      {/* CTA */}
      {cta && href && (
        <div className="relative mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-brand-600">
          {cta}
          <Arrow />
        </div>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-xl"
      >
        {content}
      </Link>
    );
  }
  return content;
};

export default FeatureCard;
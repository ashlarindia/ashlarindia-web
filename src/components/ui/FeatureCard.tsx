"use client";

import type { FC, ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/cn";
import { Arrow } from "./ArrowLink";

type IconTone = "brand" | "success" | "amber" | "ink";

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  href?: string;
  external?: boolean;
  tone?: IconTone;
  children?: ReactNode;
  cta?: string;
  className?: string;
  invertOnHover?: boolean;
}

const tones: Record<IconTone, { idle: string; hover: string }> = {
  brand: {
    idle: "bg-brand-50 text-brand-700 ring-brand-600/10",
    hover:
      "group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600",
  },

  success: {
    idle: "bg-success/5 text-success ring-success/15",
    hover:
      "group-hover:bg-success group-hover:text-white group-hover:ring-success",
  },

  amber: {
    idle: "bg-amber-50 text-amber-700 ring-amber-600/10",
    hover:
      "group-hover:bg-amber-600 group-hover:text-white group-hover:ring-amber-600",
  },

  ink: {
    idle: "bg-ink-50 text-ink-800 ring-border",
    hover:
      "group-hover:bg-ink-900 group-hover:text-white group-hover:ring-ink-900",
  },
};

const FeatureCard: FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  href,
  external,
  tone = "brand",
  children,
  cta,
  className,
  invertOnHover = true,
}) => {
  const inner = (
    <>
      {icon && (
        <div
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-lg ring-1 ring-inset transition-colors duration-300",
            tones[tone].idle,
            invertOnHover && tones[tone].hover
          )}
        >
          {icon}
        </div>
      )}

      <h3
        className={cn(
          "font-display text-base font-medium leading-snug tracking-tight text-ink-900 transition-colors duration-200",
          href && "group-hover:text-brand-700",
          icon ? "mt-5" : ""
        )}
      >
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-ink-600">
        {description}
      </p>

      {children}

      {cta && (
        <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-brand-600">
          {cta}
          <Arrow />
        </div>
      )}
    </>
  );

  const wrapperCls = cn(
    "group relative flex h-full flex-col rounded-xl border border-border bg-surface p-6",
    "transition-[transform,border-color,box-shadow] duration-300 ease-out-expo",
    "hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md",
    href &&
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2",
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={wrapperCls}
        >
          {inner}
        </a>
      );
    }

    return (
      <Link href={href} className={wrapperCls}>
        {inner}
      </Link>
    );
  }

  return <div className={wrapperCls}>{inner}</div>;
};

export default FeatureCard;
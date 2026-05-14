"use client";

import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Calculator, TrendingUp } from "lucide-react";
import SITE_CONTENT from "@/config/content";

/* ------------------------------------------------------------------ */
/*  Animated counter — eases to target value the first time it enters */
/* ------------------------------------------------------------------ */
const AnimatedNumber: FC<{
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}> = ({ value, prefix = "", suffix = "", decimals = 0, duration = 1200 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(prefersReducedMotion ? value : 0);

  useEffect(() => {
    if (!inView || prefersReducedMotion) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutExpo
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setDisplay(value * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, prefersReducedMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display.toLocaleString("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
};

/* ------------------------------------------------------------------ */
/*  Shared arrow                                                      */
/* ------------------------------------------------------------------ */
const Arrow = () => (
  <svg
    aria-hidden="true"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
  >
    <path
      d="M1 7h12m0 0L7.5 1.5M13 7l-5.5 5.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Calculator card                                                   */
/* ------------------------------------------------------------------ */
interface CalcCardProps {
  href: string;
  icon: typeof Calculator;
  label: string;
  description: string;
  preview: {
    inputLabel: string;
    inputValue: string;
    outputLabel: string;
    outputNode: React.ReactNode;
  };
}

const CalcCard: FC<CalcCardProps> = ({ href, icon: Icon, label, description, preview }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 16 },
      show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
    }}
  >
    <Link
      href={href}
      className={[
        "group relative flex h-full flex-col rounded-xl border border-border bg-surface p-6 sm:p-7",
        "transition-[transform,border-color,box-shadow] duration-300 ease-out-expo",
        "hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2",
      ].join(" ")}
    >
      {/* Header row */}
      <div className="flex items-start gap-4">
        <div
          className={[
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg",
            "bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-600/10",
            "transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600",
          ].join(" ")}
        >
          <Icon size={20} strokeWidth={1.75} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-lg font-medium leading-snug tracking-tight text-ink-900">
            {label}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-ink-600">{description}</p>
        </div>
      </div>

      {/* Preview block */}
      <div className="mt-6 rounded-lg border border-border-subtle bg-surface-subtle p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-ink-400">
              {preview.inputLabel}
            </p>
            <p className="mt-1 text-sm font-medium tabular-nums text-ink-800">
              {preview.inputValue}
            </p>
          </div>
          <div className="border-l border-border-subtle pl-4">
            <p className="text-[11px] font-medium uppercase tracking-wider text-ink-400">
              {preview.outputLabel}
            </p>
            <p className="mt-1 text-sm font-semibold tabular-nums text-brand-700">
              {preview.outputNode}
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-brand-600">
        Open calculator <Arrow />
      </div>
    </Link>
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  Section                                                           */
/* ------------------------------------------------------------------ */
export default function CalculatorsSection() {
  const { calculators } = SITE_CONTENT;

  return (
  <section className="relative bg-surface-subtle pt-0 pb-22 sm:pb-30">
      {/* Background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      <div className="container relative">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-eyebrow uppercase text-brand-600">Smart tools</span>
          <h2 className="mt-4 font-display text-display-lg text-ink-900 text-balance">
            {calculators.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-600 text-balance">
            {calculators.subtitle}
          </p>
        </div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
          }}
          className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2 sm:gap-6"
        >
          <CalcCard
            href="/calculators/brokerage"
            icon={Calculator}
            label={calculators.brokerageLabel}
            description={calculators.brokerageDesc}
            preview={{
              inputLabel: "Trade value",
              inputValue: "₹1,00,000",
              outputLabel: "Brokerage",
              outputNode: <AnimatedNumber value={20} prefix="₹" decimals={0} />,
            }}
          />

          <CalcCard
            href="/calculators/margin"
            icon={TrendingUp}
            label={calculators.marginLabel}
            description={calculators.marginDesc}
            preview={{
              inputLabel: "Capital",
              inputValue: "₹50,000",
              outputLabel: "Buying power",
              outputNode: <AnimatedNumber value={250000} prefix="₹" decimals={0} />,
            }}
          />
        </motion.div>

        {/* Note */}
        {calculators.note && (
          <p className="mx-auto mt-10 max-w-xl text-center text-xs leading-relaxed text-ink-400">
            {calculators.note}
          </p>
        )}
      </div>
    </section>
  );
}
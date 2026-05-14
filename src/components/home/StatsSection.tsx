"use client";

import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import SITE_CONTENT from "@/config/content";

/* ------------------------------------------------------------------ */
/*  Parse a stat string like "50,000+" or "₹2.4Cr" into a numeric     */
/*  prefix, the animated number, and a suffix. Falls back to plain    */
/*  text if no number is detected.                                    */
/* ------------------------------------------------------------------ */
const parseStatValue = (raw: string) => {
  const match = raw.match(/^(\D*)([\d,.]+)(.*)$/);
  if (!match) return { prefix: "", number: null as number | null, suffix: raw, raw };
  const [, prefix, numStr, suffix] = match;
  const number = parseFloat(numStr.replace(/,/g, ""));
  if (Number.isNaN(number)) return { prefix: "", number: null, suffix: raw, raw };
  // Detect decimals in source so we render them back consistently
  const decimals = numStr.includes(".") ? (numStr.split(".")[1]?.length ?? 0) : 0;
  return { prefix, number, suffix, decimals, raw };
};

/* ------------------------------------------------------------------ */
/*  Animated number — rAF easeOutExpo, runs once on view              */
/* ------------------------------------------------------------------ */
const AnimatedStat: FC<{
  prefix: string;
  number: number;
  suffix: string;
  decimals?: number;
  duration?: number;
  inView: boolean;
}> = ({ prefix, number, suffix, decimals = 0, duration = 1800, inView }) => {
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(prefersReducedMotion ? number : 0);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) { setDisplay(number); return; }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setDisplay(number * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, number, duration, prefersReducedMotion]);

  const formatted = display.toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span className="tabular-nums">
      {prefix}{formatted}{suffix}
    </span>
  );
};

/* ------------------------------------------------------------------ */
/*  Section                                                           */
/* ------------------------------------------------------------------ */
export default function StatsSection() {
  const { stats } = SITE_CONTENT;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
   <section className="relative bg-surface-subtle pt-0 pb-22 sm:pb-30">
      {/* Quiet brand wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
      />

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="text-eyebrow uppercase text-brand-600">By the numbers</span>
          <h2 className="mt-4 font-display text-display-lg text-ink-900 text-balance">
            {stats.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-600 text-balance">
            {stats.subtitle}
          </p>
        </motion.div>

        {/* Stats — hairline-divided editorial figures */}
        <div
          ref={ref}
          className="grid grid-cols-2 divide-x divide-y divide-border-subtle overflow-hidden rounded-2xl border border-border bg-surface shadow-xs md:grid-cols-4 md:divide-y-0"
        >
          {stats.items.map((stat, idx) => {
            const parsed = parseStatValue(stat.value);
            return (
              <motion.div
                key={`${stat.label}-${idx}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.08 * idx,
                }}
                className="group relative px-6 py-8 text-center transition-colors duration-300 hover:bg-surface-subtle sm:px-8 sm:py-10"
              >
                {/* Number */}
                <p
                  className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-medium leading-none tracking-tight text-brand-700"
                  aria-label={parsed.raw}
                >
                  {parsed.number !== null ? (
                    <AnimatedStat
                      prefix={parsed.prefix}
                      number={parsed.number}
                      suffix={parsed.suffix}
                      decimals={parsed.decimals}
                      inView={inView}
                    />
                  ) : (
                    parsed.raw
                  )}
                </p>

                {/* Label */}
                <p className="mt-3 text-[11px] font-medium uppercase tracking-wider text-ink-500">
                  {stat.label}
                </p>

                {/* Hover accent — subtle underline appears on hover */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-1/2 h-px w-12 -translate-x-1/2 scale-x-0 bg-brand-600/40 transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
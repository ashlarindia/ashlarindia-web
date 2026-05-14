"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, TrendingUp, TrendingDown, Sparkles } from "lucide-react";
import { TRUST_BADGES, getKycUrl } from "@/data/site-data";

/* ---------- animated counter (rAF + easeOutExpo, once-on-view) ---------- */
const useAnimatedNumber = (
  target: number,
  { decimals = 0, duration = 1400 }: { decimals?: number; duration?: number } = {}
) => {
  const prefersReducedMotion = useReducedMotion();
  const [value, setValue] = useState(prefersReducedMotion ? target : 0);
  useEffect(() => {
    if (prefersReducedMotion) { setValue(target); return; }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setValue(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, prefersReducedMotion]);
  return value.toLocaleString("en-IN", {
    minimumFractionDigits: decimals, maximumFractionDigits: decimals,
  });
};

/* ---------- staggered variants ---------- */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};
const slideIn = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 } },
};

/* ---------- preview ticker rows ---------- */
const tickerData = [
  { sym: "RELIANCE", name: "Reliance Industries", price: 2842.50, change: +1.84, up: true },
  { sym: "TCS",      name: "Tata Consultancy",    price: 3956.10, change: -0.42, up: false },
  { sym: "HDFCBANK", name: "HDFC Bank",           price: 1672.35, change: +0.91, up: true },
];

const PreviewCard = () => {
  const portfolio = useAnimatedNumber(248750, { duration: 1600 });
  const todayPnl  = useAnimatedNumber(3284.50, { decimals: 2, duration: 1800 });
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div ref={ref} variants={slideIn} className="relative">
      {/* Glow layer */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-brand-100/40 via-transparent to-accent-400/20 blur-2xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-xl">
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-border-subtle px-5 py-3.5">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
            </div>
            <span className="ml-2 text-[11px] font-medium text-ink-400">
              Ashlar Trade · Live
            </span>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-medium text-success">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
            </span>
            NSE
          </span>
        </div>

        {/* Portfolio summary */}
        <div className="grid grid-cols-2 gap-px bg-border-subtle">
          <div className="bg-surface px-5 py-4">
            <p className="text-[11px] font-medium uppercase tracking-wider text-ink-400">
              Portfolio
            </p>
            <p className="mt-1 font-display text-2xl font-medium tabular-nums tracking-tight text-ink-900">
              ₹{portfolio}
            </p>
          </div>
          <div className="bg-surface px-5 py-4">
            <p className="text-[11px] font-medium uppercase tracking-wider text-ink-400">
              Today's P&L
            </p>
            <p className="mt-1 flex items-center gap-1 font-display text-2xl font-medium tabular-nums tracking-tight text-success">
              <TrendingUp size={16} strokeWidth={2.25} />
              ₹{todayPnl}
            </p>
          </div>
        </div>

        {/* Ticker list */}
        <div className="divide-y divide-border-subtle">
          {tickerData.map((t, i) => (
            <motion.div
              key={t.sym}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-between px-5 py-3 transition-colors hover:bg-surface-subtle"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-ink-900">{t.sym}</p>
                <p className="truncate text-[11px] text-ink-400">{t.name}</p>
              </div>
              <div className="ml-3 text-right">
                <p className="text-sm font-medium tabular-nums text-ink-900">
                  ₹{t.price.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                </p>
                <p className={`flex items-center justify-end gap-0.5 text-[11px] font-medium tabular-nums ${t.up ? "text-success" : "text-danger"}`}>
                  {t.up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                  {t.up ? "+" : ""}{t.change}%
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="border-t border-border-subtle bg-surface-subtle px-5 py-3">
          <Link
            href="/products"
            className="group flex items-center justify-between text-xs font-medium text-ink-700 hover:text-brand-700"
          >
            <span>Watchlist · 24 stocks</span>
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

/* ---------- hero ---------- */
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface pt-20 pb-22 sm:pt-24 sm:pb-30">
      {/* Ambient brand gradient mesh */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-brand-100/60 blur-3xl" />
        <div className="absolute top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-accent-400/15 blur-3xl" />
        <div className="absolute inset-0 bg-dot-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      </div>

      <div className="container relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10"
        >
          {/* Left: copy */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-ink-600 shadow-xs">
                <Sparkles size={12} className="text-brand-600" strokeWidth={2} />
                SEBI registered · Building trust since 2009
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display text-display-2xl text-ink-900 text-balance"
            >
              Building trust together.{" "}
              <span className="relative inline-block text-brand-700">
                Unlock growth
                <svg
                  aria-hidden="true" viewBox="0 0 300 12" preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2 w-full text-brand-600/30"
                >
                  <motion.path
                    d="M2 8 Q 75 2, 150 6 T 298 5"
                    fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                </svg>
              </span>{" "}
              with Ashlar.
            </motion.h1>

            {/* Subhead */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg"
            >
              Trade equities, derivatives, mutual funds and IPOs on India's most
              trusted investing platform. Open a free demat account in under 5 minutes.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={getKycUrl("hero")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 text-sm font-medium text-white shadow-brand transition-[transform,background-color,box-shadow] duration-300 ease-out-expo hover:-translate-y-0.5 hover:bg-brand-700 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
              >
                Open free demat account
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/products"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-surface px-6 text-sm font-medium text-ink-800 transition-[transform,border-color,box-shadow] duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-border-strong hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
              >
                Explore products
              </Link>
            </motion.div>

            {/* Trust strip */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
              {TRUST_BADGES.slice(0, 4).map((badge) => (
                <div key={badge.text} className="flex items-center gap-1.5">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-success/10">
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M1.5 5L4 7.5L8.5 2.5" stroke="currentColor" className="text-success" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-xs font-medium text-ink-600">{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: live preview */}
          <div className="lg:col-span-5">
            <PreviewCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
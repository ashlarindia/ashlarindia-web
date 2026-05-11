'use client';

import { useEffect, useRef, useState } from 'react';

interface StatItem {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  description: string;
  icon: string;
}

const STATS: StatItem[] = [
  {
    label: 'Years of experience',
    value: 15,
    suffix: '+',
    description: 'Serving investors since 2009',
    icon: '🏛️',
  },
  {
    label: 'Happy clients',
    value: 500,
    suffix: '+',
    description: 'Across India and NRI accounts',
    icon: '👥',
  },
  {
    label: 'Stocks covered',
    value: 5000,
    suffix: '+',
    description: 'NSE, BSE & MCX instruments',
    icon: '📊',
  },
  {
    label: 'Branches',
    value: 50,
    suffix: '+',
    description: 'Pan-India presence',
    icon: '📍',
  },
];

const ANIMATION_DURATION = 1800; // ms
const STEP_INTERVAL      = 16;   // ~60fps

// ── Custom hook: counts up once the ref enters the viewport ──
function useCountUp(target: number, active: boolean): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let current    = 0;
    const steps    = ANIMATION_DURATION / STEP_INTERVAL;
    const increment = target / steps;

    // Ease-out: slow down as it approaches target
    const timer = setInterval(() => {
      current += increment * (1 - current / target / 1.5 + 0.3);
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, STEP_INTERVAL);

    return () => clearInterval(timer);
  }, [target, active]);

  return count;
}

// ── Single stat card ──
function StatCard({ stat, active }: { stat: StatItem; active: boolean }) {
  const count = useCountUp(stat.value, active);

  const formatted =
    stat.value >= 1000
      ? count.toLocaleString('en-IN')
      : count.toString();

  return (
    <div className="flex flex-col items-center text-center px-4 py-6">
      {/* Icon */}
      <div className="text-3xl mb-4" aria-hidden="true">
        {stat.icon}
      </div>

      {/* Animated number */}
      <div className="flex items-baseline justify-center gap-0.5 mb-2">
        {stat.prefix && (
          <span className="text-2xl font-bold text-white">{stat.prefix}</span>
        )}
        <span className="text-4xl sm:text-5xl font-bold text-white font-mono tracking-tight tabular-nums">
          {formatted}
        </span>
        <span className="text-2xl font-bold text-blue-300">{stat.suffix}</span>
      </div>

      {/* Label */}
      <p className="text-sm font-semibold text-blue-100 mb-1">{stat.label}</p>

      {/* Sub-description */}
      <p className="text-xs text-blue-200 opacity-75">{stat.description}</p>
    </div>
  );
}

// ── Main section ──
export default function StatsSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  // ✅ Fix 1: Only start counters when section scrolls into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect(); // Run once only
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 bg-slate-900 overflow-hidden">

      {/* Background accent circles */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600 opacity-10 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500 opacity-10 rounded-full blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section label */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 bg-blue-900/40 border border-blue-800 px-3 py-1 rounded-full mb-4">
            By the numbers
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Trusted by investors across India
          </h2>
        </div>

        {/* Stat cards grid — dividers between columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-700">
          {STATS.map((stat) => (
            // ✅ Fix 2: key on stable name, not array index
            <StatCard key={stat.label} stat={stat} active={active} />
          ))}
        </div>

        {/* Bottom trust row */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-wrap justify-center gap-6">
          {[
            'SEBI Registered broker',
            'NSE & BSE member',
            'CDSL & NSDL depository',
            'ISO 27001 certified',
          ].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-xs text-slate-400"
            >
              <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-400 flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                ✓
              </span>
              {badge}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
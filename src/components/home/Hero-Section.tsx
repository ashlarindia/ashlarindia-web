'use client';

import Link from 'next/link';

interface StatItem {
  value: string;
  label: string;
}

interface TrustBadge {
  text: string;
}

interface TickerItem {
  symbol: string;
  price: string;
  change: string;
  up: boolean;
}

const STATS: StatItem[] = [
  { value: 'Flat ₹10', label: 'Per order brokerage' },
  { value: '15+ Yrs',  label: 'Market experience'   },
  { value: '500+',  label: 'Happy clients'        },
  { value: '₹0',       label: 'Account opening fee'  },
];

const TRUST_BADGES: TrustBadge[] = [
  { text: 'SEBI Registered'       },
  { text: 'NSE & BSE Member'      },
  { text: 'MCX Member'            },
  { text: 'CDSL & NSDL Depository'},
];

const TICKER_ITEMS: TickerItem[] = [
  { symbol: 'NIFTY 50',  price: '22,456.80', change: '+1.24%', up: true  },
  { symbol: 'SENSEX',    price: '73,834.10', change: '+0.97%', up: true  },
  { symbol: 'BANKNIFTY', price: '48,120.55', change: '-0.38%', up: false },
  { symbol: 'NIFTY IT',  price: '33,204.70', change: '+0.61%', up: true  },
  { symbol: 'GOLD',      price: '₹72,340',   change: '+0.44%', up: true  },
  { symbol: 'USD/INR',   price: '83.24',     change: '-0.08%', up: false },
  { symbol: 'NIFTY MID', price: '56,780.50', change: '+0.32%', up: true  },
  { symbol: 'CRUDE OIL', price: '6,148.00',  change: '-0.28%', up: false },
];

// Duplicate items so the marquee loops seamlessly
const TICKER_DOUBLED = [...TICKER_ITEMS, ...TICKER_ITEMS];

export default function HeroSection() {
  return (
    <>
      {/* ── Live Ticker Bar ── */}
      <div className="bg-slate-900 border-b border-slate-700 overflow-hidden">

        {/*
          Keyframe injected via a <style> tag.
          The @keyframes scrolls the inner track by exactly 50% (the width
          of one copy) so the duplicate seamlessly snaps back.
          The group:hover pauses the animation when the user hovers.
        */}
        <style>{`
          @keyframes ticker-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .ticker-track {
            animation: ticker-scroll 30s linear infinite;
          }
          .ticker-wrapper:hover .ticker-track {
            animation-play-state: paused;
          }
        `}</style>

        <div className="flex items-stretch">

          {/* LIVE pill — fixed, never scrolls */}
          <div className="flex-shrink-0 flex items-center gap-2 bg-blue-600 px-4 py-2 z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-white text-xs font-bold tracking-widest uppercase">
              Live
            </span>
          </div>

          {/* Scrolling track wrapper */}
          <div
            className="ticker-wrapper overflow-hidden flex-1 flex items-center"
            aria-label="Live market prices"
          >
            {/* Inner track — doubled for seamless loop */}
            <div className="ticker-track flex items-center whitespace-nowrap w-max">
              {TICKER_DOUBLED.map((item, idx) => (
                <div
                  key={`${item.symbol}-${idx}`}
                  className="flex items-center gap-2 px-5 py-2 flex-shrink-0 border-r border-slate-800 last:border-r-0"
                >
                  {/* Symbol */}
                  <span className="text-slate-400 text-xs font-medium tracking-wide">
                    {item.symbol}
                  </span>

                  {/* Price */}
                  <span className="text-white text-xs font-semibold font-mono">
                    {item.price}
                  </span>

                  {/* Change */}
                  <span
                    className={[
                      'text-xs font-semibold font-mono flex items-center gap-0.5',
                      item.up ? 'text-emerald-400' : 'text-red-400',
                    ].join(' ')}
                  >
                    <span className="text-[10px]">{item.up ? '▲' : '▼'}</span>
                    {item.change}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section className="relative bg-slate-900 overflow-hidden">

        {/* Subtle dot grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Glow orbs */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 opacity-10 rounded-full blur-3xl -translate-y-1/2"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-emerald-500 opacity-10 rounded-full blur-3xl translate-y-1/2"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">

            {/* Top badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-300 text-xs font-medium">
                SEBI Registered · Trusted since 2009
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Trade smarter with{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(90deg, #60a5fa, #34d399)' }}
              >
                Ashlar India
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              India&apos;s most transparent broker — flat ₹10 brokerage, zero hidden
              charges, and a platform built for confident investors.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
              <Link
                href="https://kyc.wisdomcapital.in/?utm_source=ashlarindia&utm_medium=web&utm_campaign=hero"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white text-base font-semibold rounded-xl transition-all duration-150 shadow-lg shadow-blue-900/40"
              >
                Open demat account — free
                <span className="text-lg" aria-hidden="true">→</span>
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 active:scale-[0.98] border border-white/15 hover:border-white/30 text-white text-base font-semibold rounded-xl transition-all duration-150"
              >
                Explore products
              </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-12">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-center"
                >
                  <p className="text-white text-xl font-bold font-mono tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-slate-400 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-3">
              {TRUST_BADGES.map((badge) => (
                <div
                  key={badge.text}
                  className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-4 py-1.5"
                >
                  <span className="text-emerald-400 text-xs font-bold" aria-hidden="true">✓</span>
                  <span className="text-slate-300 text-xs font-medium">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom divider */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-px bg-white/10"
        />
      </section>
    </>
  );
}
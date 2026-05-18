"use client";

import Link from "next/link";
import {
  TrendingUp,
  ShieldCheck,
  BarChart3,
  ArrowUpRight,
  CandlestickChart,
} from "lucide-react";

const features = [
  {
    title: "Futures Trading",
    description:
      "Trade contracts with predefined expiry dates across indices and stocks.",
  },
  {
    title: "Options Trading",
    description:
      "Access flexible trading strategies with calls and puts.",
  },
  {
    title: "Risk Management",
    description:
      "Use hedging strategies to manage market volatility effectively.",
  },
];

const benefits = [
  "Advanced trading platforms",
  "Real-time market tracking",
  "Fast order execution",
  "Secure & reliable systems",
];

export default function FnOPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* HERO */}

      <section className="border-b border-[#eadfda] bg-gradient-to-b from-[#f7f2ef] to-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            {/* LEFT */}

            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
                Futures & Options
              </span>

              <h1 className="mt-5 text-5xl font-bold tracking-tight text-slate-900">
                Discover The Power Of F&O Trading
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Trade futures and options with advanced platforms,
                real-time market access, and expert support from Ashlar
                India.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="https://kyc.wisdomcapital.in/"
                  target="_blank"
                  className="inline-flex items-center rounded-xl bg-[#9B2C1F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7f2318]"
                >
                  Open An Account
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl border border-[#d8c4bd] bg-white px-6 py-3 text-sm font-semibold text-[#9B2C1F] transition hover:border-[#9B2C1F]"
                >
                  Contact Us
                </Link>
              </div>

              {/* APP BUTTONS */}

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#"
                  className="rounded-xl border border-[#d8c4bd] bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-[#9B2C1F]"
                >
                  Get It On Google Play
                </Link>

                <Link
                  href="#"
                  className="rounded-xl border border-[#d8c4bd] bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-[#9B2C1F]"
                >
                  Available On App Store
                </Link>
              </div>
            </div>

            {/* RIGHT CARD */}

            <div className="rounded-[32px] border border-[#eadfda] bg-white p-8 shadow-sm">
              <div className="max-w-md">
                <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
                  Start Trading
                </span>

                <h2 className="mt-4 text-3xl font-bold text-slate-900">
                  Open Your F&O Trading Account
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Begin trading futures and options through a fast and
                  secure onboarding process.
                </p>

                <div className="mt-8 space-y-4">
                  <input
                    type="tel"
                    placeholder="Enter Mobile Number"
                    className="w-full rounded-xl border border-[#d8c4bd] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#9B2C1F]"
                  />

                  <select className="w-full rounded-xl border border-[#d8c4bd] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#9B2C1F]">
                    <option>Disability Status</option>
                    <option>Without Disability</option>
                    <option>With Disability</option>
                  </select>

                  <Link
                    href="https://kyc.wisdomcapital.in/"
                    target="_blank"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#9B2C1F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7f2318]"
                  >
                    Open Account
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
              About F&O
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Trade Derivative Markets With Confidence
            </h2>

            <div className="mt-6 space-y-6 text-slate-600 leading-8">
              <p>
                Futures and options trading allows investors to participate
                in market movements through derivative contracts.
              </p>

              <p>
                F&O trading provides opportunities for hedging, speculation,
                and portfolio diversification across various market
                segments.
              </p>

              <p>
                Access advanced trading tools, live market data, and
                seamless execution through Ashlar India’s trading
                ecosystem.
              </p>
            </div>
          </div>

          {/* FEATURE GRID */}

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <TrendingUp className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Advanced Trading
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Access futures and options across indices and stocks.
              </p>
            </div>

            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <ShieldCheck className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Secure Platform
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Reliable and secure systems for smooth market execution.
              </p>
            </div>

            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1 sm:col-span-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <BarChart3 className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Real-Time Market Access
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Monitor live positions, strategies, and price movements
                efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEGMENTS */}

      <section className="border-y border-[#eadfda] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
              Trading Opportunities
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Explore Futures & Options Segments
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#eadfda] bg-[#fafafa] p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                  <CandlestickChart className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
            Platform Benefits
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            Why Trade F&O With Ashlar India
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {benefits.map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-2xl border border-[#eadfda] bg-white p-6"
            >
              <div className="mt-1 text-[#9B2C1F]">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <p className="text-sm leading-7 text-slate-700">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
"use client";

import Link from "next/link";
import {
  TrendingUp,
  ShieldCheck,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

export default function CommoditiesPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* HERO */}

      <section className="border-b border-[#eadfda] bg-gradient-to-b from-[#f7f2ef] to-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
              Commodity Trading
            </span>

            <h1 className="mt-5 text-5xl font-bold tracking-tight text-slate-900">
              Trade Commodities With Confidence
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Access commodity markets through secure platforms and trade
              across gold, silver, crude oil, natural gas, and agricultural
              commodities with expert support from Ashlar India.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="https://kyc.wisdomcapital.in/"
                target="_blank"
                className="inline-flex items-center rounded-xl bg-[#9B2C1F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7f2318]"
              >
                Open Trading Account
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border border-[#d8c4bd] bg-white px-6 py-3 text-sm font-semibold text-[#9B2C1F] transition hover:border-[#9B2C1F]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
              Market Overview
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Diversify Your Portfolio Through Commodity Markets
            </h2>

            <div className="mt-6 space-y-6 text-slate-600 leading-8">
              <p>
                Commodity trading enables investors to participate in
                agricultural and non-agricultural markets through regulated
                exchanges like MCX and NCDEX.
              </p>

              <p>
                Investors can trade commodities including gold, silver,
                crude oil, natural gas, and agricultural products through
                futures contracts and advanced trading platforms.
              </p>

              <p>
                Commodity markets offer opportunities for diversification,
                hedging against inflation, and managing portfolio risk
                effectively.
              </p>
            </div>
          </div>

          {/* FEATURES */}

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <TrendingUp className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Multiple Commodities
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Trade across metals, energy, and agricultural commodity
                segments.
              </p>
            </div>

            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <ShieldCheck className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Secure Trading
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Access regulated exchanges with secure and reliable trading
                systems.
              </p>
            </div>

            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1 sm:col-span-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <BarChart3 className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Hedging & Diversification
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Commodity trading can help investors diversify portfolios
                and manage market volatility through hedging strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRADING TYPES */}

      <section className="border-y border-[#eadfda] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
              Trading Strategies
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Ways To Participate In Commodity Markets
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-[#eadfda] bg-[#fafafa] p-7">
              <h3 className="text-xl font-semibold text-slate-900">
                Hedging
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Reduce future market risk by taking positions against
                existing exposure in commodities.
              </p>
            </div>

            <div className="rounded-3xl border border-[#eadfda] bg-[#fafafa] p-7">
              <h3 className="text-xl font-semibold text-slate-900">
                Speculation
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Trade based on expected price movements and market trends
                across commodity segments.
              </p>
            </div>

            <div className="rounded-3xl border border-[#eadfda] bg-[#fafafa] p-7">
              <h3 className="text-xl font-semibold text-slate-900">
                Arbitrage
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Capture opportunities arising from price differences across
                markets and contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[32px] border border-[#eadfda] bg-[#fff8f6] px-8 py-14">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
              Start Trading
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Begin Your Commodity Trading Journey
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Open your commodity trading account with Ashlar India and
              access secure platforms, market insights, and expert support.
            </p>

            <div className="mt-10">
              <Link
                href="https://kyc.wisdomcapital.in/"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl bg-[#9B2C1F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7f2318]"
              >
                Open Trading Account
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
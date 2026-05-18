"use client";

import Link from "next/link";
import {
  TrendingUp,
  BarChart3,
  ShieldCheck,
  ArrowUpRight,
  Briefcase,
} from "lucide-react";

const reasons = [
  "Long-term capital appreciation",
  "High liquidity through stock exchanges",
  "Dividend income opportunities",
  "Flexibility across sectors and companies",
];

const segments = [
  {
    title: "Intraday Trading",
    description:
      "Buy and sell securities within the same trading session.",
  },
  {
    title: "Futures",
    description:
      "Trade contracts to buy or sell securities at a future date.",
  },
  {
    title: "Options",
    description:
      "Gain the right to buy or sell without mandatory execution.",
  },
  {
    title: "Delivery Trading",
    description:
      "Invest in stocks for medium and long-term wealth creation.",
  },
];

export default function EquityPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* HERO */}

      <section className="border-b border-[#eadfda] bg-gradient-to-b from-[#f7f2ef] to-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
              Equity Trading
            </span>

            <h1 className="mt-5 text-5xl font-bold tracking-tight text-slate-900">
              Invest In India’s Equity Markets
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Trade and invest in listed companies through reliable equity
              trading platforms with market access across NSE, BSE, and
              other leading exchanges.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="https://kyc.wisdomcapital.in/"
                target="_blank"
                className="inline-flex items-center rounded-xl bg-[#9B2C1F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7f2318]"
              >
                Open Free Account
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
              Equity Market
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Build Long-Term Wealth Through Equities
            </h2>

            <div className="mt-6 space-y-6 text-slate-600 leading-8">
              <p>
                Equity investing allows investors to participate in the
                growth of listed companies through stock ownership.
              </p>

              <p>
                Investors can trade shares through regulated exchanges such
                as NSE and BSE using modern online trading platforms.
              </p>

              <p>
                Equity markets provide opportunities for capital
                appreciation, portfolio diversification, and long-term
                wealth creation.
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
                Growth Potential
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Participate in long-term wealth creation through market
                growth and company performance.
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
                Access secure and regulated equity trading platforms with
                reliable execution.
              </p>
            </div>

            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1 sm:col-span-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <BarChart3 className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Multiple Trading Segments
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Trade across delivery, intraday, futures, and options
                segments through a single platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}

      <section className="border-y border-[#eadfda] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
              Why Invest
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Benefits Of Equity Investing
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-4 rounded-2xl border border-[#eadfda] bg-[#fafafa] p-6"
              >
                <div className="mt-1 text-[#9B2C1F]">
                  <Briefcase className="h-5 w-5" />
                </div>

                <p className="text-sm leading-7 text-slate-700">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEGMENTS */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
            Trading Segments
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            Explore Different Equity Trading Opportunities
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {segments.map((segment) => (
            <div
              key={segment.title}
              className="rounded-3xl border border-[#eadfda] bg-white p-8 transition hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold text-slate-900">
                {segment.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {segment.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[32px] border border-[#eadfda] bg-[#fff8f6] px-8 py-14">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
              Start Investing
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Open Your Equity Trading Account
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Start investing in India’s equity markets with trusted
              platforms, expert support, and seamless account opening.
            </p>

            <div className="mt-10">
              <Link
                href="https://kyc.wisdomcapital.in/"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl bg-[#9B2C1F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7f2318]"
              >
                Open Free Account
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
"use client";

import Link from "next/link";
import {
  Globe2,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
  Landmark,
} from "lucide-react";

const currencyPairs = [
  {
    pair: "USD – INR",
    lot: "1000 USD",
  },
  {
    pair: "EUR – INR",
    lot: "1000 EUR",
  },
  {
    pair: "GBP – INR",
    lot: "1000 GBP",
  },
  {
    pair: "JPY – INR",
    lot: "100000 JPY",
  },
];

export default function CurrencyPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* HERO */}

      <section className="border-b border-[#eadfda] bg-gradient-to-b from-[#f7f2ef] to-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
              Currency Trading
            </span>

            <h1 className="mt-5 text-5xl font-bold tracking-tight text-slate-900">
              Trade Global Currency Markets
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Access currency derivative markets and trade major currency
              pairs through secure exchange platforms with expert support
              from Ashlar India.
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
              Forex Market
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Access Regulated Currency Trading Platforms
            </h2>

            <div className="mt-6 space-y-6 text-slate-600 leading-8">
              <p>
                Currency trading enables investors and businesses to
                participate in the global foreign exchange market through
                regulated exchanges.
              </p>

              <p>
                Exchange traded currency derivatives help traders hedge
                against currency fluctuations and manage exposure to
                international markets.
              </p>

              <p>
                Currency prices are influenced by interest rates,
                inflation, global economic conditions, and market demand.
              </p>
            </div>
          </div>

          {/* FEATURES */}

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <Globe2 className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Global Currency Exposure
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Trade major currency pairs through exchange-driven
                derivative contracts.
              </p>
            </div>

            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <ShieldCheck className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Secure & Regulated
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Access NSE and other regulated exchanges with secure
                trading systems.
              </p>
            </div>

            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1 sm:col-span-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <TrendingUp className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Hedging Opportunities
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Manage currency volatility and protect business exposure
                through derivative trading strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET TYPES */}

      <section className="border-y border-[#eadfda] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
              Market Structure
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Currency Markets In India
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-[#eadfda] bg-[#fafafa] p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <Landmark className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                OTC Market
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Over-the-counter markets involve spot, forward, and swap
                contracts traded through financial intermediaries.
              </p>
            </div>

            <div className="rounded-3xl border border-[#eadfda] bg-[#fafafa] p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <TrendingUp className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                Exchange Traded Market
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Currency futures and options are traded on regulated
                exchanges through standardized contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TABLE */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
            Currency Pairs
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            Approved Trading Pairs & Lot Sizes
          </h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-[#eadfda] bg-white">
          <table className="min-w-full divide-y divide-[#eadfda]">
            <thead className="bg-[#faf4f1]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  Currency Pair
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  Lot Size
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#f1e7e3]">
              {currencyPairs.map((item) => (
                <tr key={item.pair}>
                  <td className="px-6 py-5 text-sm font-medium text-slate-900">
                    {item.pair}
                  </td>

                  <td className="px-6 py-5 text-sm text-slate-600">
                    {item.lot}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[32px] border border-[#eadfda] bg-[#fff8f6] px-8 py-14">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
              Start Trading
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Open Your Currency Trading Account
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Trade currency derivatives with reliable platforms, market
              access, and dedicated support from Ashlar India.
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
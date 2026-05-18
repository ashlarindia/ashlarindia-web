"use client";

import Link from "next/link";
import {
  TrendingUp,
  ShieldCheck,
  BarChart3,
  ArrowUpRight,
  LineChart,
  Wallet,
} from "lucide-react";

const benefits = [
  "Fast and paperless account opening",
  "Secure and reliable trading platform",
  "Real-time market access",
  "Invest across multiple market segments",
];

const features = [
  {
    title: "Equity Investing",
    description:
      "Invest in listed companies and participate in long-term wealth creation.",
  },
  {
    title: "Smart Trading Tools",
    description:
      "Access live charts, advanced orders, and real-time market insights.",
  },
  {
    title: "Portfolio Management",
    description:
      "Track holdings, monitor performance, and manage investments easily.",
  },
];

export default function StocksPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* HERO */}

      <section className="border-b border-[#eadfda] bg-gradient-to-b from-[#f7f2ef] to-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            {/* LEFT */}

            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
                Stock Trading
              </span>

              <h1 className="mt-5 text-5xl font-bold tracking-tight text-slate-900">
                Kickstart Your Journey In Stock Trading
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Open your stock trading account and start investing in
                India’s leading companies with seamless market access and
                reliable trading platforms.
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
            </div>

            {/* RIGHT CARD */}

            <div className="rounded-[32px] border border-[#eadfda] bg-white p-8 shadow-sm">
              <div className="max-w-md">
                <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
                  Start Investing
                </span>

                <h2 className="mt-4 text-3xl font-bold text-slate-900">
                  Open Your Trading Account
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Complete your account opening process quickly and begin
                  trading with ease.
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
              Stock Market
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Invest In India’s Growth Story
            </h2>

            <div className="mt-6 space-y-6 text-slate-600 leading-8">
              <p>
                Stock trading allows investors to buy and sell shares of
                publicly listed companies through regulated exchanges.
              </p>

              <p>
                Investors can build diversified portfolios and participate
                in long-term wealth creation through equity markets.
              </p>

              <p>
                Access real-time market data, advanced tools, and secure
                trading systems through Ashlar India’s platforms.
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
                Market Access
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Trade across major exchanges with seamless execution and
                live market tracking.
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
                Experience secure and reliable trading infrastructure for
                smooth investing.
              </p>
            </div>

            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1 sm:col-span-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <BarChart3 className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Smart Investment Tools
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Use advanced charts, watchlists, and market insights to
                make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section className="border-y border-[#eadfda] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
              Investment Features
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Everything You Need To Start Investing
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-[#eadfda] bg-[#fafafa] p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                  <LineChart className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {feature.description}
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
            Why Choose Us
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            Benefits Of Trading With Ashlar India
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {benefits.map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-2xl border border-[#eadfda] bg-white p-6"
            >
              <div className="mt-1 text-[#9B2C1F]">
                <Wallet className="h-5 w-5" />
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
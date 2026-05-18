"use client";

import Link from "next/link";
import {
  TrendingUp,
  CandlestickChart,
  Coins,
  Globe2,
  Building2,
  PieChart,
  ShieldCheck,
  Landmark,
  Wallet,
  Database,
  ArrowUpRight,
} from "lucide-react";

const products = [
  {
    name: "Equity",
    href: "/products/equity",
    desc: "Stocks & Shares",
    icon: TrendingUp,
  },
  {
    name: "F&O",
    href: "/products/fno",
    desc: "Futures & Options",
    icon: CandlestickChart,
  },
  {
    name: "Commodities",
    href: "/products/commodities",
    desc: "Gold, Silver & More",
    icon: Coins,
  },
  {
    name: "Currency",
    href: "/products/currency",
    desc: "Forex Trading",
    icon: Globe2,
  },
  {
    name: "IPO",
    href: "/products/ipo",
    desc: "Initial Public Offerings",
    icon: Building2,
  },
  {
    name: "Mutual Funds",
    href: "/products/mutual-funds",
    desc: "Systematic Investments",
    icon: PieChart,
  },
  {
    name: "Life Insurance",
    href: "/products/life-insurance",
    desc: "Financial Protection",
    icon: ShieldCheck,
  },
  {
    name: "General Insurance",
    href: "/products/general-insurance",
    desc: "Health, Vehicle & Home",
    icon: ShieldCheck,
  },
  {
    name: "Corporate FDs",
    href: "/products/corporate-fixed-deposits",
    desc: "Fixed Income Products",
    icon: Wallet,
  },
  {
    name: "Bonds",
    href: "/products/bonds",
    desc: "Government Securities",
    icon: Landmark,
  },
  {
    name: "Depository",
    href: "/products/depository-participant",
    desc: "Demat Services",
    icon: Database,
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* HERO */}

      <section className="border-b border-[#eadfda] bg-gradient-to-b from-[#f7f2ef] to-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
              Investment Products
            </span>

            <h1 className="mt-5 text-5xl font-bold tracking-tight text-slate-900">
              Financial Products For Every Investor
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Explore a wide range of investment and financial solutions
              designed to support your trading, investing, and wealth
              creation journey.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <Link
                key={product.href}
                href={product.href}
                className="group rounded-[28px] border border-[#eadfda] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#d5b9b0] hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F] transition group-hover:bg-[#9B2C1F] group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-7 text-2xl font-semibold text-slate-900">
                  {product.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {product.desc}
                </p>

                <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#9B2C1F]">
                  Learn More
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            );
          })}
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
              Open Your Investment Account Today
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Get access to equity, derivatives, IPOs, mutual funds, and
              more through a single investment platform.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="https://kyc.wisdomcapital.in/"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl bg-[#9B2C1F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7f2318]"
              >
                Open Free Account
                <ArrowUpRight className="h-4 w-4" />
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
    </main>
  );
}
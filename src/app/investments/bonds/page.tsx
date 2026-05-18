"use client";

import Link from "next/link";
import {
  Landmark,
  ShieldCheck,
  Wallet,
  ArrowUpRight,
  BadgeCheck,
} from "lucide-react";

const advantages = [
  "Low default risk investment option",
  "High liquidity across government securities",
  "Half-yearly interest payments",
  "Long-term maturity options from 2 to 30 years",
];

const bondTypes = [
  {
    title: "Treasury Bills",
    description:
      "Short-term government securities with maturity periods of less than one year.",
  },
  {
    title: "Government Bonds",
    description:
      "Long-term dated securities issued by the government with fixed or floating interest rates.",
  },
  {
    title: "State Development Loans",
    description:
      "Bonds issued by state governments for raising public funds and development financing.",
  },
];

export default function BondsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* HERO */}

      <section className="border-b border-[#eadfda] bg-gradient-to-b from-[#f7f2ef] to-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
              Government Securities
            </span>

            <h1 className="mt-5 text-5xl font-bold tracking-tight text-slate-900">
              Invest In Bonds & Government Securities
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Explore secure fixed-income investment opportunities through
              government bonds, treasury bills, and other debt securities.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="https://kyc.wisdomcapital.in/"
                target="_blank"
                className="inline-flex items-center rounded-xl bg-[#9B2C1F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7f2318]"
              >
                Open Account
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
              About Bonds
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Stable Fixed Income Investment Solutions
            </h2>

            <div className="mt-6 space-y-6 text-slate-600 leading-8">
              <p>
                Bonds and government securities are fixed-income
                instruments issued to raise capital for public and
                financial development purposes.
              </p>

              <p>
                Treasury bills and dated securities offer investors stable
                returns with varying maturity periods and risk profiles.
              </p>

              <p>
                Government securities are widely considered secure
                investment options with strong liquidity and predictable
                income streams.
              </p>
            </div>
          </div>

          {/* FEATURES */}

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <Landmark className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Government Backed
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Invest in securities issued by central and state
                governments.
              </p>
            </div>

            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <ShieldCheck className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Lower Risk
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Government securities are considered relatively secure
                investment instruments.
              </p>
            </div>

            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1 sm:col-span-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <Wallet className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Fixed Income Returns
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Earn periodic interest payments with defined maturity
                structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES */}

      <section className="border-y border-[#eadfda] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
              Bond Categories
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Types Of Government Securities
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {bondTypes.map((bond) => (
              <div
                key={bond.title}
                className="rounded-3xl border border-[#eadfda] bg-[#fafafa] p-8"
              >
                <h3 className="text-2xl font-semibold text-slate-900">
                  {bond.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {bond.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
            Benefits
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            Advantages Of Investing In Bonds
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {advantages.map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-2xl border border-[#eadfda] bg-white p-6"
            >
              <div className="mt-1 text-[#9B2C1F]">
                <BadgeCheck className="h-5 w-5" />
              </div>

              <p className="text-sm leading-7 text-slate-700">
                {item}
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
              Open Your Investment Account Today
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Invest in government securities and fixed-income products
              with reliable access and expert assistance from Ashlar India.
            </p>

            <div className="mt-10">
              <Link
                href="https://kyc.wisdomcapital.in/"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl bg-[#9B2C1F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7f2318]"
              >
                Open Account
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
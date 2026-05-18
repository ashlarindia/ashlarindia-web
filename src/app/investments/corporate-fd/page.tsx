"use client";

import Link from "next/link";
import {
  Wallet,
  ShieldCheck,
  Landmark,
  ArrowUpRight,
  BadgeCheck,
} from "lucide-react";

const benefits = [
  "Higher interest rates compared to traditional bank FDs",
  "Fixed returns with predefined maturity periods",
  "Nomination facility available",
  "Flexible tenure options for short and medium-term investing",
];

const features = [
  {
    title: "Stable Returns",
    description:
      "Corporate fixed deposits offer predictable returns with fixed maturity structures.",
  },
  {
    title: "Flexible Tenure",
    description:
      "Choose investment durations based on financial goals and liquidity preferences.",
  },
  {
    title: "Simple Investment",
    description:
      "Invest easily through a streamlined process with minimal documentation.",
  },
];

export default function CorporateFDsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* HERO */}

      <section className="border-b border-[#eadfda] bg-gradient-to-b from-[#f7f2ef] to-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
              Fixed Income Investments
            </span>

            <h1 className="mt-5 text-5xl font-bold tracking-tight text-slate-900">
              Corporate Fixed Deposits
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Invest in corporate fixed deposits for stable returns,
              flexible tenures, and fixed-income investment opportunities.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="https://kyc.wisdomcapital.in/"
                target="_blank"
                className="inline-flex items-center rounded-xl bg-[#9B2C1F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7f2318]"
              >
                Invest Now
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
              About Corporate FDs
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Fixed Income Solutions With Assured Returns
            </h2>

            <div className="mt-6 space-y-6 text-slate-600 leading-8">
              <p>
                Corporate fixed deposits are investment instruments issued
                by companies to raise funds for business operations and
                expansion.
              </p>

              <p>
                These deposits generally offer higher interest rates
                compared to traditional bank fixed deposits.
              </p>

              <p>
                Investors can select suitable tenure options based on their
                financial goals and return expectations.
              </p>
            </div>
          </div>

          {/* FEATURES */}

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <Wallet className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Fixed Returns
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Earn predictable returns with predefined maturity periods.
              </p>
            </div>

            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <ShieldCheck className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Secure Investment
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Choose from reputed companies offering fixed deposit
                schemes.
              </p>
            </div>

            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1 sm:col-span-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <Landmark className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Better Interest Rates
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Corporate FDs often provide higher returns compared to
                regular savings instruments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}

      <section className="border-y border-[#eadfda] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
              Investment Benefits
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Why Invest In Corporate Fixed Deposits
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-[#eadfda] bg-[#fafafa] p-8"
              >
                <h3 className="text-2xl font-semibold text-slate-900">
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

      {/* ADVANTAGES */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
            Key Advantages
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            Benefits Of Corporate FD Investments
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {benefits.map((item) => (
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
              Invest In Corporate Fixed Deposits Today
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Explore fixed-income investment opportunities with attractive
              returns and flexible investment tenures.
            </p>

            <div className="mt-10">
              <Link
                href="https://kyc.wisdomcapital.in/"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl bg-[#9B2C1F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7f2318]"
              >
                Invest Now
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
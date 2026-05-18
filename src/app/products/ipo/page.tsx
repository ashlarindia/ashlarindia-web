"use client";

import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
  BadgeCheck,
} from "lucide-react";

const ipoPoints = [
  "Review the company’s business model and growth prospects",
  "Analyze financial performance and company fundamentals",
  "Understand risk factors before investing",
  "Evaluate industry outlook and market conditions",
];

const features = [
  {
    title: "Transparent Process",
    description:
      "IPO applications are regulated under SEBI guidelines to ensure transparency.",
  },
  {
    title: "Growth Opportunities",
    description:
      "Participate in companies seeking expansion and capital growth.",
  },
  {
    title: "Easy Online Access",
    description:
      "Apply for IPOs seamlessly through secure digital platforms.",
  },
];

export default function IPOPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* HERO */}

      <section className="border-b border-[#eadfda] bg-gradient-to-b from-[#f7f2ef] to-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
              Initial Public Offering
            </span>

            <h1 className="mt-5 text-5xl font-bold tracking-tight text-slate-900">
              Invest In Upcoming IPO Opportunities
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Apply for IPOs online and participate in the growth journey
              of companies entering the public markets.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="https://kyc.wisdomcapital.in/"
                target="_blank"
                className="inline-flex items-center rounded-xl bg-[#9B2C1F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7f2318]"
              >
                Apply IPO
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
              About IPOs
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Participate In Public Market Listings
            </h2>

            <div className="mt-6 space-y-6 text-slate-600 leading-8">
              <p>
                An Initial Public Offering (IPO) allows private companies
                to raise capital by offering shares to the public for the
                first time.
              </p>

              <p>
                IPOs provide investors an opportunity to invest in
                companies during their early listing phase on stock
                exchanges.
              </p>

              <p>
                The IPO process is regulated by SEBI to ensure transparency
                and investor protection throughout the offering.
              </p>
            </div>
          </div>

          {/* FEATURES */}

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <Building2 className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Public Listings
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Invest in companies entering stock exchanges through IPO
                offerings.
              </p>
            </div>

            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <ShieldCheck className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Regulated Process
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                IPOs are governed by SEBI guidelines for better investor
                transparency.
              </p>
            </div>

            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1 sm:col-span-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <TrendingUp className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Growth Potential
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Explore opportunities in businesses seeking expansion and
                long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}

      <section className="border-y border-[#eadfda] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
              Before Applying
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Important Factors To Evaluate
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {ipoPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-4 rounded-2xl border border-[#eadfda] bg-[#fafafa] p-6"
              >
                <div className="mt-1 text-[#9B2C1F]">
                  <BadgeCheck className="h-5 w-5" />
                </div>

                <p className="text-sm leading-7 text-slate-700">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
            IPO Benefits
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            Why Apply Through Ashlar India
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-[#eadfda] bg-white p-8 transition hover:-translate-y-1"
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
      </section>

      {/* CTA */}

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[32px] border border-[#eadfda] bg-[#fff8f6] px-8 py-14">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
              Start Investing
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Apply For IPOs Online
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Access upcoming IPOs with a seamless application process and
              reliable investment support from Ashlar India.
            </p>

            <div className="mt-10">
              <Link
                href="https://kyc.wisdomcapital.in/"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl bg-[#9B2C1F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7f2318]"
              >
                Apply IPO
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
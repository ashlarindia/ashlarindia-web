"use client";

import Link from "next/link";
import {
  ShieldCheck,
  HeartPulse,
  Car,
  Home,
  ArrowUpRight,
  BadgeCheck,
} from "lucide-react";

const insuranceTypes = [
  {
    title: "Health Insurance",
    description:
      "Financial protection against medical emergencies and healthcare expenses.",
    icon: HeartPulse,
  },
  {
    title: "Vehicle Insurance",
    description:
      "Coverage against accidental damage, theft, and third-party liabilities.",
    icon: Car,
  },
  {
    title: "Home Insurance",
    description:
      "Protect your property and belongings against fire, theft, and natural risks.",
    icon: Home,
  },
];

const benefits = [
  "Financial protection against unexpected events",
  "Wide range of insurance coverage options",
  "Simple and hassle-free claim support",
  "Customized plans based on your needs",
];

export default function GeneralInsurancePage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* HERO */}

      <section className="border-b border-[#eadfda] bg-gradient-to-b from-[#f7f2ef] to-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
              Insurance Solutions
            </span>

            <h1 className="mt-5 text-5xl font-bold tracking-tight text-slate-900">
              General Insurance Plans
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Protect your health, vehicle, home, and valuable assets with
              comprehensive general insurance solutions tailored to your
              needs.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#quote-form"
                className="inline-flex items-center rounded-xl bg-[#9B2C1F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7f2318]"
              >
                Get A Quote
              </Link>

              <Link
                href="https://kyc.wisdomcapital.in/"
                target="_blank"
                className="inline-flex items-center rounded-xl border border-[#d8c4bd] bg-white px-6 py-3 text-sm font-semibold text-[#9B2C1F] transition hover:border-[#9B2C1F]"
              >
                Open Account
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
              About General Insurance
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Protection Against Everyday Risks
            </h2>

            <div className="mt-6 space-y-6 text-slate-600 leading-8">
              <p>
                General insurance provides financial protection for assets,
                health, liabilities, and unforeseen situations other than
                life coverage.
              </p>

              <p>
                Insurance plans can help reduce financial burden arising
                from accidents, theft, property damage, and medical
                emergencies.
              </p>

              <p>
                Selecting the right insurance policy depends on your
                financial goals, lifestyle, and protection requirements.
              </p>
            </div>
          </div>

          {/* FEATURES */}

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <ShieldCheck className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Financial Security
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Stay protected against unexpected financial losses and
                emergencies.
              </p>
            </div>

            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <HeartPulse className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Health Coverage
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Manage healthcare expenses with suitable insurance plans.
              </p>
            </div>

            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1 sm:col-span-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <Home className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Asset Protection
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Safeguard your home, vehicle, and valuable possessions
                against risks and damages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSURANCE TYPES */}

      <section className="border-y border-[#eadfda] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
              Insurance Categories
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Explore General Insurance Solutions
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {insuranceTypes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-[#eadfda] bg-[#fafafa] p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
            Key Benefits
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            Why Choose General Insurance
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
              Secure Your Future
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Get The Right Insurance Coverage Today
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Explore reliable insurance solutions designed to protect your
              health, assets, and financial well-being.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#quote-form"
                className="inline-flex items-center gap-2 rounded-xl bg-[#9B2C1F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7f2318]"
              >
                Get A Quote
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="https://kyc.wisdomcapital.in/"
                target="_blank"
                className="inline-flex items-center rounded-xl border border-[#d8c4bd] bg-white px-6 py-3 text-sm font-semibold text-[#9B2C1F] transition hover:border-[#9B2C1F]"
              >
                Open Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
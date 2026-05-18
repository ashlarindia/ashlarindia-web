"use client";

import Link from "next/link";
import {
  Shield,
  HeartHandshake,
  Wallet,
  ArrowUpRight,
  BadgeCheck,
} from "lucide-react";

const plans = [
  {
    title: "Term Insurance",
    description:
      "Financial protection for your family against unforeseen situations.",
    icon: Shield,
  },
  {
    title: "Child Plans",
    description:
      "Secure your child’s education and future financial goals.",
    icon: HeartHandshake,
  },
  {
    title: "Retirement Plans",
    description:
      "Build long-term savings and create a steady retirement income.",
    icon: Wallet,
  },
];

const benefits = [
  "Financial security for your dependents",
  "Long-term savings and wealth creation",
  "Retirement and child education planning",
  "Tax-saving opportunities under applicable laws",
];

export default function LifeInsurancePage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* HERO */}

      <section className="border-b border-[#eadfda] bg-gradient-to-b from-[#f7f2ef] to-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
              Financial Protection
            </span>

            <h1 className="mt-5 text-5xl font-bold tracking-tight text-slate-900">
              Life Insurance Solutions
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Protect your family’s future with life insurance plans
              designed for financial security, savings, retirement, and
              long-term wealth planning.
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
              About Life Insurance
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Secure Your Family’s Financial Future
            </h2>

            <div className="mt-6 space-y-6 text-slate-600 leading-8">
              <p>
                Life insurance helps provide financial protection to your
                family in case of unforeseen situations such as death,
                disability, or medical emergencies.
              </p>

              <p>
                Insurance plans can also support long-term financial goals
                including retirement planning, child education, and wealth
                creation.
              </p>

              <p>
                Choosing the right life insurance policy helps ensure your
                dependents remain financially secure in the future.
              </p>
            </div>
          </div>

          {/* FEATURES */}

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <Shield className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Financial Protection
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Secure your family against unexpected financial challenges.
              </p>
            </div>

            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <Wallet className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Long-Term Savings
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Build savings and financial stability through planned
                investments.
              </p>
            </div>

            <div className="rounded-3xl border border-[#eadfda] bg-white p-7 transition hover:-translate-y-1 sm:col-span-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
                <HeartHandshake className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Goal-Based Planning
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Choose plans aligned with retirement, education, and future
                financial goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSURANCE PLANS */}

      <section className="border-y border-[#eadfda] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9B2C1F]">
              Insurance Plans
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Explore Life Insurance Options
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {plans.map((item) => {
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
            Why Choose Life Insurance
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
              Choose The Right Life Insurance Plan
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Explore flexible life insurance solutions designed to protect
              your family and support your long-term financial goals.
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
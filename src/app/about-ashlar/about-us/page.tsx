"use client";

import FadeUp from "@/components/animations/FadeUp";
import PageWrapper from "@/components/animations/PageWrapper";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <PageWrapper>
      <main className="min-h-screen bg-white">

        {/* HERO */}

        <section className="border-b border-slate-200 py-16">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">

            <FadeUp>
              <h1 className="text-5xl font-bold text-[#24324B]">
                About{" "}
                <span className="text-[#9B2C1F]">
                  Us
                </span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="mx-auto mt-5 h-[1px] w-40 bg-slate-200" />
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-8 text-slate-600">
                Ashlar India is a trusted financial services
                company offering trading, investment,
                wealth management, and financial advisory
                solutions to retail and institutional
                investors across India.
              </p>
            </FadeUp>

          </div>
        </section>

        {/* ABOUT CONTENT */}

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">

            <div className="grid gap-10 md:grid-cols-2">

              {/* LEFT */}

              <FadeUp>
                <div>
                  <h2 className="text-3xl font-semibold text-slate-900">
                    Building Trust Through Financial Excellence
                  </h2>

                  <div className="mt-6 space-y-6 text-[15px] leading-8 text-slate-700">

                    <p>
                      Ashlar India provides a complete
                      range of broking and investment
                      services including Equity,
                      Commodities, Currency, Mutual Funds,
                      IPOs, Insurance, Bonds, and Demat
                      Services.
                    </p>

                    <p>
                      Our mission is to simplify investing
                      through technology-driven platforms,
                      transparent pricing, and dedicated
                      client support.
                    </p>

                    <p>
                      With experienced market professionals
                      and advanced trading infrastructure,
                      we help investors make informed
                      financial decisions.
                    </p>

                  </div>
                </div>
              </FadeUp>

              {/* RIGHT */}

              <FadeUp delay={0.2}>
                <div className="rounded-md border border-slate-200 p-8">

                  <h3 className="text-2xl font-semibold text-slate-900">
                    Why Choose Ashlar India?
                  </h3>

                  <div className="mt-8 space-y-5">

                    {[
                      "Advanced Trading Platforms",
                      "Dedicated Customer Support",
                      "Research & Market Insights",
                      "Fast Account Opening",
                      "Secure Trading Infrastructure",
                      "Transparent Pricing",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 border-b border-slate-100 pb-4"
                      >
                        <div className="h-2.5 w-2.5 rounded-full bg-[#9B2C1F]" />

                        <p className="text-[15px] text-slate-700">
                          {item}
                        </p>
                      </div>
                    ))}

                  </div>
                </div>
              </FadeUp>

            </div>
          </div>
        </section>

        {/* VALUES */}

        <section className="border-t border-slate-200 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">

            <FadeUp>
              <div className="text-center">
                <h2 className="text-4xl font-bold text-slate-900">
                  Our Core Values
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-slate-600">
                  We focus on long-term client relationships
                  built on transparency, trust, and service.
                </p>
              </div>
            </FadeUp>

            <div className="mt-14 grid gap-6 md:grid-cols-3">

              {[
                {
                  title: "Trust",
                  desc: "Building lasting relationships through transparency and integrity.",
                },
                {
                  title: "Innovation",
                  desc: "Technology-driven solutions for modern investing needs.",
                },
                {
                  title: "Support",
                  desc: "Dedicated assistance for every stage of your investment journey.",
                },
              ].map((item, index) => (
                <FadeUp key={item.title} delay={index * 0.1}>
                  <div
                    className="
                    rounded-md
                    border
                    border-slate-200
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-md
                  "
                  >
                    <h3 className="text-xl font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-7 text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </FadeUp>
              ))}

            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

            <FadeUp>
              <div className="rounded-md border border-slate-200 bg-slate-50 px-8 py-12">

                <h2 className="text-3xl font-bold text-slate-900">
                  Start Your Investment Journey Today
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-slate-600">
                  Open your trading and demat account with
                  Ashlar India and access a wide range of
                  investment opportunities.
                </p>

                <div className="mt-8">
                  <Link
                    href="https://kyc.wisdomcapital.in/"
                    target="_blank"
                    className="
                      inline-flex
                      rounded-full
                      bg-[#9B2C1F]
                      px-7
                      py-3
                      text-sm
                      font-medium
                      text-white
                      transition-all
                      duration-300
                      hover:scale-[1.03]
                      hover:bg-[#7f2318]
                    "
                  >
                    Open Free Account
                  </Link>
                </div>

              </div>
            </FadeUp>

          </div>
        </section>

      </main>
    </PageWrapper>
  );
}
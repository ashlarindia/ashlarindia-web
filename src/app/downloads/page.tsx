"use client";

import Link from "next/link";
import {
  Smartphone,
  Monitor,
  Globe,
  FileText,
  ShieldCheck,
  WalletCards,
  ArrowUpRight,
  Download,
} from "lucide-react";

import { motion } from "framer-motion";

const resources = [
  {
    title: "Mobile Trading App",
    description:
      "Trade equities, commodities, derivatives, and currencies seamlessly.",
    icon: Smartphone,
    href: "https://play.google.com/store/search?q=wisdom+neo&c=apps&hl=en-IN",
    button: "Download App",
    external: true,
  },
  {
    title: "Desktop Trading Platform",
    description:
      "Advanced desktop software with real-time charts and execution tools.",
    icon: Monitor,
    href: "https://www1.ashlarindia.com/downloads",
    button: "Download Software",
    external: true,
  },
  {
    title: "Web Trading Platform",
    description:
      "Secure browser-based platform for fast and reliable market access.",
    icon: Globe,
    href: "https://trade.wisdomcapital.in/#!/app",
    button: "Launch Platform",
    external: true,
  },
  {
    title: "Mutual Fund App",
    description:
      "Track and invest in mutual funds with an easy-to-use interface.",
    icon: WalletCards,
    href: "https://mf.ashlarindia.com/",
    button: "Explore App",
    external: true,
  },
  {
    title: "KYC Forms",
    description:
      "Download client verification and compliance-related KYC forms.",
    icon: ShieldCheck,
    href: "/downloads/kyc-forms",
    button: "View Forms",
  },
  {
    title: "Account Opening Forms",
    description:
      "Forms for individual, corporate, HUF, and partnership accounts.",
    icon: FileText,
    href: "/downloads/account-forms",
    button: "Download Forms",
  },
];

export default function DownloadsPage() {
  return (
    <main className="bg-[#f8f8f8] text-[#1e293b]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#eadfda] bg-gradient-to-b from-[#f7f2ef] to-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-flex rounded-full border border-[#b98b7d] bg-[#fff7f5] px-4 py-1 text-sm font-medium text-[#9b2c1f]">
              Resource Center
            </span>

            <h1 className="mt-6 text-5xl font-bold tracking-tight text-[#111827]">
              Download Center
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#475569]">
              Access trading platforms, onboarding documents, KYC forms, and
              essential investment resources — all from one secure location.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="https://play.google.com/store/search?q=wisdom+neo&c=apps&hl=en-IN"
                target="_blank"
                className="rounded-xl bg-[#9b2c1f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7f2318]"
              >
                Download Trading App
              </Link>

              <Link
                href="https://trade.wisdomcapital.in/#!/app"
                target="_blank"
                className="rounded-xl border border-[#d6c3bc] bg-white px-6 py-3 text-sm font-semibold text-[#9b2c1f] transition hover:border-[#9b2c1f]"
              >
                Open Web Platform
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9b2c1f]">
              Downloads
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#111827]">
              Trading Platforms & Documents
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-[#eadfda] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#c8a79d]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff4f1] text-[#9b2c1f]">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#111827]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#64748b]">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  target={item.external ? "_blank" : "_self"}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#9b2c1f] transition-all hover:gap-3"
                >
                  {item.button}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FEATURED DOWNLOAD */}
      <section className="border-y border-[#eadfda] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#9b2c1f]">
                Featured Platform
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#111827]">
                Powerful Trading Experience Across Devices
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#64748b]">
                Experience fast order execution, advanced charting, real-time
                tracking, and secure investing with Ashlar India's modern
                trading ecosystem.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="https://play.google.com/store/search?q=wisdom+neo&c=apps&hl=en-IN"
                  target="_blank"
                  className="inline-flex items-center rounded-xl bg-[#9b2c1f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7f2318]"
                >
                  Download Now
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl border border-[#d6c3bc] px-6 py-3 text-sm font-semibold text-[#9b2c1f] transition hover:border-[#9b2c1f]"
                >
                  Contact Support
                </Link>
              </div>
            </div>

            <div className="rounded-[32px] border border-[#eadfda] bg-[#fffaf8] p-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-[#fff1ed] p-3 text-[#9b2c1f]">
                    <Download className="h-6 w-6" />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#111827]">
                      Fast Downloads
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-[#64748b]">
                      Quick access to trading software and onboarding resources.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-[#fff1ed] p-3 text-[#9b2c1f]">
                    <ShieldCheck className="h-6 w-6" />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#111827]">
                      Secure Access
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-[#64748b]">
                      Verified platforms with secure login and compliance-ready
                      documentation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-[#fff1ed] p-3 text-[#9b2c1f]">
                    <Globe className="h-6 w-6" />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#111827]">
                      Multi-Platform Access
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-[#64748b]">
                      Trade seamlessly on mobile, desktop, and web platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="bg-[#faf7f6]">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <p className="text-sm leading-7 text-[#64748b]">
            All downloadable applications and documents are intended for
            registered clients and investors. Please ensure valid supporting
            documents are submitted wherever required.
          </p>
        </div>
      </section>
    </main>
  );
}
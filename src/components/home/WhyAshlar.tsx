"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck, IndianRupee, Headphones, Zap, BarChart2, Lock,
  Globe, Award, Users, Settings, Laptop,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SITE_CONTENT from "@/config/content";

/* ---------------- typed icon registry ---------------- */
const iconMap: Record<string, LucideIcon> = {
  ShieldCheck, IndianRupee, Headphones, Zap, BarChart2, Lock,
  Globe, Award, Users, Settings, Laptop,
};

/* ---------------- motion variants ---------------- */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

/* ---------------- shared arrow ---------------- */
const Arrow: FC = () => (
  <svg
    aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none"
    className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
  >
    <path d="M1 7h12m0 0L7.5 1.5M13 7l-5.5 5.5"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ---------------- feature card (top section) ---------------- */
interface FeatureCardProps {
  icon: LucideIcon | undefined;
  title: string;
  description: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <motion.div variants={item} className="h-full">
    <div
      className={[
        "group relative flex h-full flex-col rounded-xl border border-border bg-surface p-6",
        "transition-[transform,border-color,box-shadow] duration-300 ease-out-expo",
        "hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md",
      ].join(" ")}
    >
      <div
        className={[
          "flex h-11 w-11 items-center justify-center rounded-lg",
          "bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-600/10",
          "transition-colors duration-300",
          "group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600",
        ].join(" ")}
      >
        {Icon && <Icon size={20} strokeWidth={1.75} aria-hidden="true" />}
      </div>
      <h3 className="mt-5 font-display text-base font-medium leading-snug tracking-tight text-ink-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">
        {description}
      </p>
    </div>
  </motion.div>
);

/* ---------------- reason row (second section) ---------------- */
interface ReasonRowProps {
  index: number;
  icon: LucideIcon | undefined;
  title: string;
  description: string;
}

const ReasonRow: FC<ReasonRowProps> = ({ index, icon: Icon, title, description }) => (
  <motion.div variants={item}>
    <div className="group relative flex h-full flex-col rounded-xl border border-border bg-surface p-6 sm:p-7 transition-[transform,border-color,box-shadow] duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-600/10 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
          {Icon && <Icon size={22} strokeWidth={1.75} aria-hidden="true" />}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[11px] font-medium text-ink-400 tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h4 className="font-display text-lg font-medium leading-snug tracking-tight text-ink-900">
              {title}
            </h4>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

/* ================================================================ */
/*                         component                                 */
/* ================================================================ */
export default function WhyAshlar() {
  const { whyAshlar, whyAshlarDetails } = SITE_CONTENT;

  return (
    <>
      {/* ============ Section 1 — Editorial pitch + feature bento ============ */}
   <section className="relative bg-surface-subtle pt-0 pb-22 sm:pb-30">
        <div className="container">
          {/* Header */}
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-eyebrow uppercase text-brand-600">Why Ashlar</span>
            <h2 className="mt-4 font-display text-display-lg text-ink-900 text-balance">
              {whyAshlar.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600 text-balance">
              {whyAshlar.subtitle}
            </p>
          </div>

          {/* Feature grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {whyAshlar.features.map((feature, idx) => (
              <FeatureCard
                key={`${feature.title}-${idx}`}
                icon={iconMap[feature.icon]}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ Section 2 — Differentiators (numbered) ============ */}
      <section className="relative bg-surface-subtle py-22 sm:py-30">
        {/* Quiet background wash */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-dot-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]"
        />

        <div className="container relative">
          {/* Two-column header — copy on left, intro on right */}
          <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-5">
              <span className="text-eyebrow uppercase text-brand-600">How we're different</span>
              <h2 className="mt-4 font-display text-display-lg text-ink-900 text-balance">
                {whyAshlarDetails?.title ?? "Why traders prefer Ashlar"}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base leading-relaxed text-ink-600 lg:text-[17px]">
                {whyAshlarDetails?.description ??
                  "Ashlar has created a niche as a financial service provider and is a trusted name where business is built on long-term client relationships. A single platform for retail and corporate investors — built around service, transparency, and depth of expertise."}
              </p>
            </div>
          </div>

          {/* Reasons grid */}
          {whyAshlarDetails?.reasons && whyAshlarDetails.reasons.length > 0 && (
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="grid gap-4 md:grid-cols-3 md:gap-6"
            >
              {whyAshlarDetails.reasons.map((reason, idx) => (
                <ReasonRow
                  key={`${reason.title}-${idx}`}
                  index={idx}
                  icon={iconMap[reason.icon]}
                  title={reason.title}
                  description={reason.description}
                />
              ))}
            </motion.div>
          )}

          {/* Compact verification footer — replaces the redundant trust-pill row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mt-12 flex flex-col items-center gap-2 border-t border-border-subtle pt-8 sm:flex-row sm:justify-between"
          >
            <div className="flex items-center gap-2 text-xs text-ink-500">
              <ShieldCheck size={14} className="text-success" />
              <span>SEBI-registered · Members of NSE, BSE, MCX, NCDEX · NSDL depository participant</span>
            </div>
            <a
              href="/contact"
              className="group inline-flex items-center gap-1.5 text-xs font-medium text-brand-600 hover:text-brand-700"
            >
              Talk to our team <Arrow />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
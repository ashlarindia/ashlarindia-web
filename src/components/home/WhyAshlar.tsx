"use client";

import type { FC } from "react";
import {
  ShieldCheck, IndianRupee, Headphones, Zap, BarChart2, Lock,
  Globe, Award, Users, Settings, Laptop,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SITE_CONTENT from "@/config/content";
import {
  Section,
  SectionHeader,
  FeatureCard,
  StaggerGrid,
  StaggerItem,
  Reveal,
  ArrowLink,
} from "@/components/ui";

/* ---------------- typed icon registry ---------------- */
const iconMap: Record<string, LucideIcon> = {
  ShieldCheck, IndianRupee, Headphones, Zap, BarChart2, Lock,
  Globe, Award, Users, Settings, Laptop,
};

/* ---------------- reason row (section 2 only — horizontal layout) -------- */
interface ReasonRowProps {
  index: number;
  icon: LucideIcon | undefined;
  title: string;
  description: string;
}

const ReasonRow: FC<ReasonRowProps> = ({ index, icon: Icon, title, description }) => (
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
        <p className="mt-2 text-sm leading-relaxed text-ink-600">{description}</p>
      </div>
    </div>
  </div>
);

/* ================================================================ */
/*                         component                                 */
/* ================================================================ */
export default function WhyAshlar() {
  const { whyAshlar, whyAshlarDetails } = SITE_CONTENT;

  return (
    <>
      {/* ============ Section 1 — Feature bento ============ */}
      <Section tone="subtle" className="pt-0 pb-22 sm:pb-30">
        <SectionHeader
          eyebrow="Why Ashlar"
          title={whyAshlar.title}
          description={whyAshlar.subtitle}
          className="mb-14"
        />

        <StaggerGrid
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.07}
        >
          {whyAshlar.features.map((feature, idx) => (
            <StaggerItem key={`${feature.title}-${idx}`} className="h-full">
              <FeatureCard
                icon={iconMap[feature.icon]}
                title={feature.title}
                description={feature.description}
              />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Section>

      {/* ============ Section 2 — Differentiators (numbered) ============ */}
      <Section tone="subtle" dotted>
        {/* Two-column header — page-specific asymmetric layout, can't use SectionHeader */}
        <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-5">
            <span className="text-eyebrow uppercase text-brand-600">
              How we&apos;re different
            </span>
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
          <StaggerGrid
            className="grid gap-4 md:grid-cols-3 md:gap-6"
            staggerDelay={0.07}
          >
            {whyAshlarDetails.reasons.map((reason, idx) => (
              <StaggerItem key={`${reason.title}-${idx}`}>
                <ReasonRow
                  index={idx}
                  icon={iconMap[reason.icon]}
                  title={reason.title}
                  description={reason.description}
                />
              </StaggerItem>
            ))}
          </StaggerGrid>
        )}

        {/* Verification footer */}
        <Reveal delay={0.2} y={10} duration={0.5} className="mt-12">
          <div className="flex flex-col items-center gap-2 border-t border-border-subtle pt-8 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-2 text-xs text-ink-500">
              <ShieldCheck size={14} className="text-success" />
              <span>
                SEBI-registered · Members of NSE, BSE, MCX, NCDEX · NSDL depository participant
              </span>
            </div>
            <ArrowLink href="/contact" tone="brand" className="text-xs">
              Talk to our team
            </ArrowLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
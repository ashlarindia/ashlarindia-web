"use client";

import type { FC } from "react";
import {
  ShieldCheck,
  IndianRupee,
  Headphones,
  Zap,
  BarChart2,
  Lock,
  Globe,
  Award,
  Users,
  Settings,
  Laptop,
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

/* ---------------- ICON MAP ---------------- */

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  IndianRupee,
  Headphones,
  Zap,
  BarChart2,
  Lock,
  Globe,
  Award,
  Users,
  Settings,
  Laptop,
};

/* ---------------- REASON ROW ---------------- */

interface ReasonRowProps {
  index: number;
  icon?: LucideIcon;
  title: string;
  description: string;
}

const ReasonRow: FC<ReasonRowProps> = ({
  index,
  icon: Icon,
  title,
  description,
}) => (
  <div className="group relative flex h-full flex-col rounded-xl border border-border bg-surface p-6 sm:p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md">
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-600/10 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
        {Icon && (
          <Icon
            size={22}
            strokeWidth={1.75}
            aria-hidden="true"
          />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[11px] font-medium text-ink-400">
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
);

/* ======================================================== */
/*                      COMPONENT                           */
/* ======================================================== */

export default function WhyAshlar() {
  const { whyAshlar, whyAshlarDetails } = SITE_CONTENT;

  return (
    <>
      {/* ================================================= */}
      {/* SECTION 1 */}
      {/* ================================================= */}

      <Section tone="subtle" className="!pt-0 pb-4 sm:pb-6">
        <SectionHeader
          eyebrow="Why Ashlar"
          title={whyAshlar.title}
          description={whyAshlar.subtitle}
          className="mb-6"
        />

        <StaggerGrid
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.07}
        >
          {whyAshlar.features.map((feature, idx) => {
            const Icon = iconMap[feature.icon];

            return (
              <StaggerItem
                key={`${feature.title}-${idx}`}
                className="h-full"
              >
                <FeatureCard
                  icon={
                    Icon ? (
                      <Icon
                        size={20}
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    ) : null
                  }
                  title={feature.title}
                  description={feature.description}
                />
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </Section>

      {/* ================================================= */}
      {/* SECTION 2 */}
      {/* ================================================= */}

      <Section tone="subtle" dotted>
        <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-5">
            <span className="text-eyebrow uppercase text-brand-600">
              How we're different
            </span>

            <h2 className="mt-4 font-display text-display-lg text-ink-900 text-balance">
              {whyAshlarDetails?.title ??
                "Why traders prefer Ashlar"}
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-base leading-relaxed text-ink-600 lg:text-[17px]">
              {whyAshlarDetails?.description ??
                "Ashlar has created a niche as a financial service provider and is a trusted name where business is built on long-term client relationships."}
            </p>
          </div>
        </div>

        {/* REASONS GRID */}

        {whyAshlarDetails?.reasons &&
          whyAshlarDetails.reasons.length > 0 && (
            <StaggerGrid
              className="grid gap-4 md:grid-cols-3 md:gap-6"
              staggerDelay={0.07}
            >
              {whyAshlarDetails.reasons.map((reason, idx) => (
                <StaggerItem
                  key={`${reason.title}-${idx}`}
                >
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

        {/* FOOTER */}

        <Reveal
          delay={0.2}
          y={10}
          duration={0.5}
          className="mt-12"
        >
          <div className="flex flex-col items-center gap-2 border-t border-border-subtle pt-8 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-2 text-xs text-ink-500">
              <ShieldCheck
                size={14}
                className="text-success"
              />

              <span>
                SEBI-registered · Members of NSE, BSE, MCX,
                NCDEX · NSDL depository participant
              </span>
            </div>

            <ArrowLink
              href="/contact"
              tone="brand"
              className="text-xs"
            >
              Talk to our team
            </ArrowLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
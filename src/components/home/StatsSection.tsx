"use client";

import SITE_CONTENT from "@/config/content";
import {
  Section,
  SectionHeader,
  AnimatedNumber,
  StaggerGrid,
  StaggerItem,
} from "@/components/ui";

/* ------------------------------------------------------------------ */
/*  Parse a stat string like "50,000+" or "₹2.4Cr" into a numeric     */
/*  prefix, the animated number, and a suffix.                        */
/* ------------------------------------------------------------------ */
const parseStatValue = (raw: string) => {
  const match = raw.match(/^(\D*)([\d,.]+)(.*)$/);
  if (!match) return { prefix: "", number: null as number | null, suffix: raw, raw };
  const [, prefix, numStr, suffix] = match;
  const number = parseFloat(numStr.replace(/,/g, ""));
  if (Number.isNaN(number)) return { prefix: "", number: null, suffix: raw, raw };
  const decimals = numStr.includes(".") ? (numStr.split(".")[1]?.length ?? 0) : 0;
  return { prefix, number, suffix, decimals, raw };
};

/* ------------------------------------------------------------------ */
/*  Section                                                           */
/* ------------------------------------------------------------------ */
export default function StatsSection() {
  const { stats } = SITE_CONTENT;

  return (
    <Section tone="subtle" className="pt-0 pb-10 sm:pb-12">
      <SectionHeader
        eyebrow="By the numbers"
        title={stats.title}
        description={stats.subtitle}
        className="mb-14"
      />

      {/* Stats panel — hairline-divided editorial figures */}
      <StaggerGrid
        className="grid grid-cols-2 divide-x divide-y divide-border-subtle overflow-hidden rounded-2xl border border-border bg-surface shadow-xs md:grid-cols-4 md:divide-y-0"
        staggerDelay={0.08}
      >
        {stats.items.map((stat, idx) => {
          const parsed = parseStatValue(stat.value);
          return (
            <StaggerItem
              key={`${stat.label}-${idx}`}
              className="group relative px-6 py-8 text-center transition-colors duration-300 hover:bg-surface-subtle sm:px-8 sm:py-10"
            >
              {/* Number */}
              <p
                className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-medium leading-none tracking-tight text-brand-700"
                aria-label={parsed.raw}
              >
                {parsed.number !== null ? (
                  <AnimatedNumber
                    value={parsed.number}
                    prefix={parsed.prefix}
                    suffix={parsed.suffix}
                    decimals={parsed.decimals}
                    duration={1800}
                  />
                ) : (
                  parsed.raw
                )}
              </p>

              {/* Label */}
              <p className="mt-3 text-[11px] font-medium uppercase tracking-wider text-ink-500">
                {stat.label}
              </p>

              {/* Hover accent — subtle underline */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 h-px w-12 -translate-x-1/2 scale-x-0 bg-brand-600/40 transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
              />
            </StaggerItem>
          );
        })}
      </StaggerGrid>
    </Section>
  );
}
"use client";

import type { FC, ReactNode } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Calculator, TrendingUp } from "lucide-react";
import SITE_CONTENT from "@/config/content";
import {
  Section,
  SectionHeader,
  AnimatedNumber,
  StaggerGrid,
  StaggerItem,
  Arrow,
} from "@/components/ui";

/* ------------------------------------------------------------------ */
/*  Calculator card — custom layout (icon+title side-by-side at top)  */
/* ------------------------------------------------------------------ */
interface CalcCardProps {
  href: string;
  icon: LucideIcon;
  label: string;
  description: string;
  preview: {
    inputLabel: string;
    inputValue: string;
    outputLabel: string;
    outputNode: ReactNode;
  };
}

const CalcCard: FC<CalcCardProps> = ({ href, icon: Icon, label, description, preview }) => (
  <Link
    href={href}
    className={[
      "group relative flex h-full flex-col rounded-xl border border-border bg-surface p-6 sm:p-7",
      "transition-[transform,border-color,box-shadow] duration-300 ease-out-expo",
      "hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2",
    ].join(" ")}
  >
    {/* Header row */}
    <div className="flex items-start gap-4">
      <div
        className={[
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg",
          "bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-600/10",
          "transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600",
        ].join(" ")}
      >
        <Icon size={20} strokeWidth={1.75} />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-lg font-medium leading-snug tracking-tight text-ink-900">
          {label}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-ink-600">{description}</p>
      </div>
    </div>

    {/* Preview block */}
    <div className="mt-6 rounded-lg border border-border-subtle bg-surface-subtle p-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wider text-ink-400">
            {preview.inputLabel}
          </p>
          <p className="mt-1 text-sm font-medium tabular-nums text-ink-800">
            {preview.inputValue}
          </p>
        </div>
        <div className="border-l border-border-subtle pl-4">
          <p className="text-[11px] font-medium uppercase tracking-wider text-ink-400">
            {preview.outputLabel}
          </p>
          <p className="mt-1 text-sm font-semibold tabular-nums text-brand-700">
            {preview.outputNode}
          </p>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-brand-600">
      Open calculator <Arrow />
    </div>
  </Link>
);

/* ------------------------------------------------------------------ */
/*  Section                                                           */
/* ------------------------------------------------------------------ */
export default function CalculatorsSection() {
  const { calculators } = SITE_CONTENT;

  return (
    <Section
      tone="subtle"
      dotted
     className="!pt-0 pb- sm:pb-10"
    >
      <SectionHeader
        eyebrow="Smart tools"
        title={calculators.title}
        description={calculators.subtitle}
        className="mb-12"
      />

      <StaggerGrid
        className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2 sm:gap-6"
        staggerDelay={0.1}
      >
        <StaggerItem>
          <CalcCard
            href="/calculators/brokerage"
            icon={Calculator}
            label={calculators.brokerageLabel}
            description={calculators.brokerageDesc}
            preview={{
              inputLabel: "Trade value",
              inputValue: "₹1,00,000",
              outputLabel: "Brokerage",
              outputNode: <AnimatedNumber value={20} prefix="₹" decimals={0} />,
            }}
          />
        </StaggerItem>

        <StaggerItem>
          <CalcCard
            href="/calculators/margin"
            icon={TrendingUp}
            label={calculators.marginLabel}
            description={calculators.marginDesc}
            preview={{
              inputLabel: "Capital",
              inputValue: "₹50,000",
              outputLabel: "Buying power",
              outputNode: <AnimatedNumber value={250000} prefix="₹" decimals={0} />,
            }}
          />
        </StaggerItem>
      </StaggerGrid>

      {calculators.note && (
        <p className="mx-auto mt-10 max-w-xl text-center text-xs leading-relaxed text-ink-400">
          {calculators.note}
        </p>
      )}
    </Section>
  );
}
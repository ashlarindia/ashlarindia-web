"use client";

import type { FC } from "react";
import Link from "next/link";
import {
  TrendingUp, BarChart2, Coins, BadgeDollarSign, Rocket,
  PieChart, ShieldCheck, Landmark, FileText, CreditCard,
  Globe, Smartphone, ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PRODUCTS, getKycUrl } from "@/data/site-data";
import SITE_CONTENT from "@/config/content";
import {
  Section,
  SectionHeader,
  StaggerGrid,
  StaggerItem,
  Reveal,
  Button,
  Arrow,
} from "@/components/ui";

/* ----------------------------- icons ----------------------------- */
const ICON_MAP: Record<string, LucideIcon> = {
  TrendingUp, BarChart2, Coins, BadgeDollarSign, Rocket,
  PieChart, ShieldCheck, Landmark, FileText, CreditCard,
};

/* ----------------------- semantic icon tones --------------------- */
const tones = [
  "bg-brand-50  text-brand-700  ring-brand-600/10",
  "bg-success/5 text-success    ring-success/15",
  "bg-amber-50  text-amber-700  ring-amber-600/10",
  "bg-ink-50    text-ink-800    ring-border",
] as const;

/* --------------------------- product card ------------------------ */
/* Page-specific because it has:                                     */
/* - rotating tone palette by index                                  */
/* - radial gradient glow on hover                                   */
/* - icon translates up independently of card lift                   */
const ProductCard: FC<{
  product: typeof PRODUCTS[0];
  toneIndex: number;
}> = ({ product, toneIndex }) => {
  const Icon = ICON_MAP[product.icon];
  const tone = tones[toneIndex % tones.length];

  return (
    <Link
      href={product.href}
      className={[
        "group relative flex h-full flex-col rounded-xl border border-border bg-surface p-5",
        "transition-[transform,border-color,box-shadow] duration-300 ease-out-expo",
        "hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2",
      ].join(" ")}
    >
      {/* Hover glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(139,47,38,0.06), transparent 60%)",
        }}
      />

      <div className="relative">
        {/* Icon + badge row */}
        <div className="flex items-start justify-between">
          <div
            className={[
              "flex h-11 w-11 items-center justify-center rounded-lg ring-1 ring-inset",
              "transition-transform duration-300 group-hover:-translate-y-0.5",
              tone,
            ].join(" ")}
          >
            {Icon && <Icon size={20} strokeWidth={1.75} aria-hidden="true" />}
          </div>
          {product.badge && (
            <span className="rounded-full bg-brand-600 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white">
              {product.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <h3 className="mt-5 font-display text-base font-medium leading-snug tracking-tight text-ink-900 transition-colors duration-200 group-hover:text-brand-700">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
          {product.description}
        </p>

        <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-brand-600">
          Explore <Arrow />
        </div>
      </div>
    </Link>
  );
};

/* --------------------------- CTA card ---------------------------- */
/* Page-specific: maroon background, light texture, white button     */
const CtaCard: FC<{
  title: string;
  description: string;
  buttonText: string;
}> = ({ title, description, buttonText }) => (
  <div className="relative h-full overflow-hidden rounded-xl bg-brand-700 p-6 text-white">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-50"
      style={{
        background:
          "radial-gradient(60% 80% at 100% 0%, rgba(255,255,255,0.10), transparent 60%), radial-gradient(40% 60% at 0% 100%, rgba(255,255,255,0.06), transparent 60%)",
      }}
    />
    <div className="relative flex h-full flex-col">
      <p className="text-[11px] font-medium uppercase tracking-wider text-brand-100">
        Get started
      </p>
      <h3 className="mt-2 font-display text-xl font-medium leading-snug">
        {title}
      </h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-brand-100/90">
        {description}
      </p>
      <div className="mt-5 sm:mt-auto sm:pt-4">
        <Link
          href={getKycUrl("products")}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex h-10 items-center gap-2 rounded-lg bg-white px-5 text-sm font-medium text-brand-700 transition-[transform,box-shadow] duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-700"
        >
          {buttonText}
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </div>
  </div>
);

/* -------------------------- platform card ------------------------ */
/* Distinct layout: icon-left + content-right, no card lift          */
const PlatformCard: FC<{
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  buttonText: string;
}> = ({ icon: Icon, title, description, href, buttonText }) => (
  <div className="group rounded-xl border border-border bg-surface p-6 transition-[transform,border-color,box-shadow] duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md">
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-600/10 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
        <Icon size={22} strokeWidth={1.75} />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-base font-medium text-ink-900">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{description}</p>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-brand-600 hover:text-brand-700"
        >
          {buttonText} <Arrow />
        </Link>
      </div>
    </div>
  </div>
);

/* ------------------------------ section -------------------------- */
export default function ProductsSection() {
  const { products } = SITE_CONTENT;

  return (
    <Section tone="subtle" className="pt-0 pb-22 sm:pb-30">
      {/* ============ Products bento ============ */}
      <SectionHeader
        eyebrow={products.badge}
        title={products.title}
        description={products.subtitle}
        className="mb-14"
      />

      <StaggerGrid
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        staggerDelay={0.06}
      >
        {PRODUCTS.map((p, i) => (
          <StaggerItem key={p.name} className="h-full">
            <ProductCard product={p} toneIndex={i} />
          </StaggerItem>
        ))}
        <StaggerItem className="sm:col-span-2 lg:col-span-2">
          <CtaCard
            title={products.ctaCard.title}
            description={products.ctaCard.description}
            buttonText={products.ctaCard.buttonText}
          />
        </StaggerItem>
      </StaggerGrid>

      {/* ============ Stats strip ============ */}
      <Reveal className="mt-12">
        <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
          <div className="grid grid-cols-2 divide-x divide-y divide-border-subtle sm:grid-cols-4 sm:divide-y-0">
            {products.highlightStats.map((stat) => (
              <div key={stat.label} className="px-5 py-5 text-center sm:px-6 sm:py-6">
                <p className="font-display text-2xl font-medium tabular-nums tracking-tight text-brand-700 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-ink-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ============ Trading platforms ============ */}
      <div className="mt-20 sm:mt-24">
        <SectionHeader
          eyebrow="Platforms"
          title={products.tradingPlatforms.title}
          description={products.tradingPlatforms.subtitle}
          className="mb-10"
        />

        <StaggerGrid
          className="grid gap-4 md:grid-cols-2 md:gap-6"
          staggerDelay={0.06}
        >
          <StaggerItem>
            <PlatformCard
              icon={Globe}
              title={products.tradingPlatforms.web.title}
              description={products.tradingPlatforms.web.description}
              href={products.tradingPlatforms.web.href}
              buttonText={products.tradingPlatforms.web.buttonText}
            />
          </StaggerItem>
          <StaggerItem>
            <PlatformCard
              icon={Smartphone}
              title={products.tradingPlatforms.mobile.title}
              description={products.tradingPlatforms.mobile.description}
              href={products.tradingPlatforms.mobile.href}
              buttonText={products.tradingPlatforms.mobile.buttonText}
            />
          </StaggerItem>
        </StaggerGrid>
      </div>
    </Section>
  );
}
"use client";

import type { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp, BarChart2, Coins, BadgeDollarSign, Rocket,
  PieChart, ShieldCheck, Landmark, FileText, CreditCard,
  Globe, Smartphone, ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PRODUCTS, getKycUrl } from "@/data/site-data";
import SITE_CONTENT from "@/config/content";

/* ----------------------------- icons ----------------------------- */
const ICON_MAP: Record<string, LucideIcon> = {
  TrendingUp, BarChart2, Coins, BadgeDollarSign, Rocket,
  PieChart, ShieldCheck, Landmark, FileText, CreditCard,
};

/* ----------------------- semantic icon tones --------------------- */
/* Restrained palette mapping — uses our design tokens.             */
/* Cycles based on product index, but skews toward brand for core    */
/* trading products and tones for insurance / IPO / mutual funds.    */
const tones = [
  "bg-brand-50  text-brand-700  ring-brand-600/10",   // primary
  "bg-success/5 text-success    ring-success/15",      // growth/positive
  "bg-amber-50  text-amber-700  ring-amber-600/10",   // attention
  "bg-ink-50    text-ink-800    ring-border",         // neutral
] as const;

/* ----------------------------- motion ---------------------------- */
const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};
const cell = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

/* ----------------------------- arrow ----------------------------- */
const Arrow: FC = () => (
  <svg
    aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none"
    className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
  >
    <path d="M1 7h12m0 0L7.5 1.5M13 7l-5.5 5.5"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* --------------------------- product card ------------------------ */
interface ProductCardProps {
  product: typeof PRODUCTS[0];
  toneIndex: number;
}

const ProductCard: FC<ProductCardProps> = ({ product, toneIndex }) => {
  const Icon = ICON_MAP[product.icon];
  const tone = tones[toneIndex % tones.length];

  return (
    <motion.div variants={cell} className="h-full">
      <Link
        href={product.href}
        className={[
          "group relative flex h-full flex-col rounded-xl border border-border bg-surface p-5",
          "transition-[transform,border-color,box-shadow] duration-300 ease-out-expo",
          "hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2",
        ].join(" ")}
      >
        {/* Hover glow — subtle, brand-toned */}
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

          {/* Persistent CTA — visible on touch + keyboard */}
          <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-brand-600">
            Explore <Arrow />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

/* --------------------------- final CTA card ---------------------- */
const CtaCard: FC<{ title: string; description: string; buttonText: string }> = ({
  title, description, buttonText,
}) => (
  <motion.div variants={cell} className="sm:col-span-2 lg:col-span-2">
    <div className="relative h-full overflow-hidden rounded-xl bg-brand-700 p-6 text-white">
      {/* Texture */}
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
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
);

/* -------------------------- platform card ------------------------ */
interface PlatformCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  buttonText: string;
}

const PlatformCard: FC<PlatformCardProps> = ({ icon: Icon, title, description, href, buttonText }) => (
  <motion.div variants={cell}>
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
  </motion.div>
);

/* ------------------------------ section -------------------------- */
export default function ProductsSection() {
  const { products } = SITE_CONTENT;
  const PlatformsAnimContainer = motion.div;

  return (
   <section className="relative bg-surface-subtle pt-0 pb-22 sm:pb-30">
      <div className="container">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-eyebrow uppercase text-brand-600">{products.badge}</span>
          <h2 className="mt-4 font-display text-display-lg text-ink-900 text-balance">
            {products.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-600 text-balance">
            {products.subtitle}
          </p>
        </div>

        {/* Bento grid: 10 products + 1 CTA card spanning 2 cols */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.name} product={p} toneIndex={i} />
          ))}
          <CtaCard
            title={products.ctaCard.title}
            description={products.ctaCard.description}
            buttonText={products.ctaCard.buttonText}
          />
        </motion.div>

        {/* Stats — light, restrained, brand accent on numbers only */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 overflow-hidden rounded-xl border border-border bg-surface shadow-sm"
        >
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
        </motion.div>

        {/* Trading platforms */}
        <div className="mt-20 sm:mt-24">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-eyebrow uppercase text-brand-600">Platforms</span>
            <h2 className="mt-4 font-display text-display-lg text-ink-900 text-balance">
              {products.tradingPlatforms.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600 text-balance">
              {products.tradingPlatforms.subtitle}
            </p>
          </div>

          <PlatformsAnimContainer
            variants={grid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-4 md:grid-cols-2 md:gap-6"
          >
            <PlatformCard
              icon={Globe}
              title={products.tradingPlatforms.web.title}
              description={products.tradingPlatforms.web.description}
              href={products.tradingPlatforms.web.href}
              buttonText={products.tradingPlatforms.web.buttonText}
            />
            <PlatformCard
              icon={Smartphone}
              title={products.tradingPlatforms.mobile.title}
              description={products.tradingPlatforms.mobile.description}
              href={products.tradingPlatforms.mobile.href}
              buttonText={products.tradingPlatforms.mobile.buttonText}
            />
          </PlatformsAnimContainer>
        </div>
      </div>
    </section>
  );
}
// components/ProductHero.tsx
import Link from "next/link";

interface ProductHeroProps {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function ProductHero({
  eyebrow,
  title,
  highlight,
  description,
  primaryCta = { label: "Open Free Account", href: "/accounts/open-account" },
  secondaryCta = { label: "Talk to an Expert", href: "/supports/contact-us" },
}: ProductHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EEF3FF] to-white">
      {/* subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1E5EFF 1px, transparent 1px), linear-gradient(90deg, #1E5EFF 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1E5EFF] ring-1 ring-[#1E5EFF]/20">
          {eyebrow}
        </span>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-tight text-[#0A1F44] md:text-6xl">
          {title}{" "}
          <span className="text-[#1E5EFF]">{highlight}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          {description}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href={primaryCta.href}
            className="rounded-full bg-[#1E5EFF] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#1E5EFF]/25 transition hover:bg-[#0A1F44]"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-[#0A1F44] transition hover:border-[#1E5EFF] hover:text-[#1E5EFF]"
          >
            {secondaryCta.label} →
          </Link>
        </div>
      </div>
    </section>
  );
}
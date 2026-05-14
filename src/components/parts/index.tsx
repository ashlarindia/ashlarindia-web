// src/components/parts/index.tsx

"use client";

import type { ReactNode } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/* Hero                                                               */
/* ------------------------------------------------------------------ */

interface HeroProps {
  tag: string;
  title: string;
  highlight?: string;
  text: string;
}

export function Hero({
  tag,
  title,
  highlight,
  text,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-28">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      <div className="container relative max-w-5xl">
        <span className="text-eyebrow uppercase text-brand-600">
          {tag}
        </span>

        <h1 className="mt-5 font-display text-display-xl text-ink-900 text-balance">
          {title}{" "}
          {highlight && (
            <span className="text-brand-700">
              {highlight}
            </span>
          )}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-600 text-balance">
          {text}
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Prose                                                              */
/* ------------------------------------------------------------------ */

interface ProseProps {
  children: ReactNode;
}

export function Prose({
  children,
}: ProseProps) {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="container max-w-3xl">
        <div
          className={[
            "prose prose-neutral max-w-none",
            "prose-headings:font-display",
            "prose-headings:text-ink-900",
            "prose-p:text-ink-600",
            "prose-li:text-ink-600",
            "prose-strong:text-ink-900",
            "prose-a:text-brand-700",
            "prose-a:no-underline hover:prose-a:underline",
          ].join(" ")}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Features                                                           */
/* ------------------------------------------------------------------ */

interface FeatureItem {
  t: string;
  d: string;
}

interface FeaturesProps {
  heading: string;
  items: FeatureItem[];
}

export function Features({
  heading,
  items,
}: FeaturesProps) {
  return (
    <section className="bg-surface-subtle py-16 sm:py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-display-md text-ink-900 text-balance">
            {heading}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.t}
              className={[
                "rounded-xl border border-border bg-surface p-6",
                "transition-[transform,border-color,box-shadow] duration-300 ease-out",
                "hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md",
              ].join(" ")}
            >
              <h3 className="font-display text-lg font-medium text-ink-900">
                {item.t}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-ink-600">
                {item.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CTA                                                                */
/* ------------------------------------------------------------------ */

interface CTAProps {
  title: string;
  text: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTA({
  title,
  text,
  buttonText = "Contact us",
  buttonHref = "/contact",
}: CTAProps) {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="container">
        <div className="overflow-hidden rounded-2xl bg-brand-600 px-6 py-14 text-center text-white sm:px-10">
          <h2 className="mx-auto max-w-3xl font-display text-display-md text-balance">
            {title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80">
            {text}
          </p>

          <div className="mt-8">
            <Link
              href={buttonHref}
              className={[
                "inline-flex h-11 items-center justify-center rounded-lg",
                "bg-white px-5 text-sm font-medium text-brand-700",
                "transition-[transform,background-color] duration-300 ease-out",
                "hover:-translate-y-0.5 hover:bg-white/90",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-700",
              ].join(" ")}
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Disclaimer                                                         */
/* ------------------------------------------------------------------ */

interface DisclaimerProps {
  text: string;
}

export function Disclaimer({
  text,
}: DisclaimerProps) {
  return (
    <section className="border-t border-border-subtle bg-surface py-6">
      <div className="container">
        <p className="text-xs leading-relaxed text-ink-400">
          {text}
        </p>
      </div>
    </section>
  );
}
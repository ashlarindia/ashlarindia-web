"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Sparkles } from "lucide-react";
import Image from "next/image";

import { TRUST_BADGES, getKycUrl } from "@/data/site-data";
import { Button } from "@/components/ui";

/* ---------- animation variants (hero-specific) ---------- */
const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const slideIn = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
  },
};

/* ---------- animated rotating words ---------- */
const words = ["Building", "Growing", "Scaling", "Investing", "Trading"];

function HeroTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="font-display text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl lg:text-5xl">
      <span className="block">{"Trust starts with"}</span>

      <span className="mt-2 block h-[60px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="inline-block text-brand-600"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>

      <span className="block">{"with Ashlar."}</span>
    </h1>
  );
}

/* ---------- preview image card (page-specific) ---------- */
const PreviewCard = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div ref={ref} variants={slideIn} className="relative w-full">
      {/* Brand glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-brand-100/40 via-transparent to-accent-400/20 blur-2xl"
      />

      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl">
        <Image
          src="/images/trading-hero.png"
          alt="Ashlar India Trading Illustration"
          width={800}
          height={700}
          className="h-full w-full object-cover"
          priority
        />
      </div>
    </motion.div>
  );
};

/* ---------- hero section ---------- */
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface pb-16 sm:pb-24">
      {/* Ambient brand gradient mesh */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-brand-100/60 blur-3xl" />
        <div className="absolute top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-accent-400/15 blur-3xl" />
        <div className="absolute inset-0 bg-dot-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      </div>

      <div className="container relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid items-center gap-16 lg:grid-cols-12"
        >
          {/* LEFT: copy */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-ink-600 shadow-sm">
                <Sparkles size={12} className="text-brand-600" strokeWidth={2} />
                {"SEBI registered · Building trust since 2009"}
              </span>
            </motion.div>

            {/* Title with rotating word */}
            <motion.div variants={fadeUp} className="mt-6">
              <HeroTitle />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg"
            >
              {"Trade equities, derivatives, mutual funds and IPOs on India's trusted investing platform. Open a free demat account in under 5 minutes."}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Button
                href={getKycUrl("hero")}
                external
                variant="primary"
                size="lg"
                withArrow
              >
                Open free demat account
              </Button>

              <Button href="/products" variant="secondary" size="lg">
                Explore products
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              {TRUST_BADGES.slice(0, 4).map((badge) => (
                <div key={badge.text} className="flex items-center gap-2">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-success/10">
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path
                        d="M1.5 5L4 7.5L8.5 2.5"
                        stroke="currentColor"
                        className="text-success"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-ink-600">{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: image preview */}
          <div className="lg:col-span-5">
            <PreviewCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
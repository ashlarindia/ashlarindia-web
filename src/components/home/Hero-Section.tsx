"use client";

import { motion} from "framer-motion";
import { useEffect, useState, useRef, FormEvent } from "react";
import Image from "next/image";

import { TRUST_BADGES, getKycUrl } from "@/data/site-data";

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

/* ---------- typewriter rotating phrases ---------- */
/* Matches original "Building Trust Together" with cursor animation */
const PHRASES = [
  "Building Trust Together"
 
];

function TypewriterHeading() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = PHRASES[phraseIndex];

    // Typing speed: 70ms per char while typing, 35ms while deleting
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (text.length < currentPhrase.length) {
            setText(currentPhrase.slice(0, text.length + 1));
          } else {
            // Pause at the end of phrase, then start deleting
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          if (text.length > 0) {
            setText(currentPhrase.slice(0, text.length - 1));
          } else {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
          }
        }
      },
      isDeleting ? 35 : 70,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <h1 className="font-display text-3xl font-bold leading-tight text-brand-700 sm:text-4xl lg:text-[2.75rem]">
      <span className="inline-block min-h-[1.2em]">
        {text}
        <span
          className="ml-0.5 inline-block h-[0.85em] w-[2px] -translate-y-[-0.1em] animate-pulse bg-brand-700 align-middle"
          aria-hidden="true"
        />
      </span>
    </h1>
  );
}

/* ---------- preview image card with faded edges ---------- */
const PreviewCard = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div ref={ref} variants={slideIn} className="relative w-full">
      {/* Soft brand glow behind */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-tr from-brand-100/30 via-accent-400/15 to-transparent blur-3xl"
      />

      {/* Image with radial mask for faded edges */}
      <div
        className="relative aspect-[8/7] w-full"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at center, black 50%, transparent 95%)",
          maskImage:
            "radial-gradient(ellipse 70% 70% at center, black 50%, transparent 95%)",
        }}
      >
        <Image
          src="/images/trading-hero.png"
          alt="Ashlar India Trading Illustration"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain object-center"
          priority
        />
      </div>
    </motion.div>
  );
};

/* ---------- mobile signup form ---------- */
function MobileSignupForm() {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"Resident" | "NRI">("Resident");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Redirect to KYC with phone + status params
    const url = `${getKycUrl("hero")}?phone=${encodeURIComponent(phone)}&status=${status}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-stretch"
    >
      <div className="relative flex-1 sm:min-w-[200px]">
        <input
          type="tel"
          inputMode="numeric"
          pattern="[0-9]{10}"
          maxLength={10}
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
          placeholder="Enter your mobile number"
          required
          aria-label="Mobile number"
          className="h-12 w-full rounded-lg border border-border bg-surface px-4 text-sm text-ink-900 placeholder:text-ink-400 transition-[border-color,box-shadow] duration-200 focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-600/10"
        />
      </div>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as "Resident" | "NRI")}
        aria-label="Residency status"
        className="h-12 rounded-lg border border-border bg-surface px-3 text-sm font-medium text-ink-800 transition-[border-color,box-shadow] duration-200 focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-600/10"
      >
        <option value="Resident">{"Resident"}</option>
        <option value="NRI">{"NRI"}</option>
      </select>

      <button
        type="submit"
        className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 text-sm font-semibold text-white shadow-brand transition-[transform,background-color,box-shadow] duration-300 ease-out-expo hover:-translate-y-0.5 hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
      >
        {"Open An Account"}
      </button>
    </form>
  );
}

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

      <div className="container relative pt-8 sm:pt-12">
       

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12"
        >
          {/* LEFT: copy */}
          <div className="lg:col-span-7">
            {/* Typewriter heading — "Building Trust Together" */}
            <motion.div variants={fadeUp}>
              <TypewriterHeading />
            </motion.div>

            {/* Static main heading */}
            <motion.h2
              variants={fadeUp}
              className="mt-5 font-display text-3xl font-bold leading-tight text-ink-900 sm:text-4xl lg:text-[2.5rem]"
            >
              {"Unlock Financial Growth"}
              <br />
              {"with "}
              <span className="text-brand-700">{"Ashlar Group"}</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-ink-600"
            >
              {"Empower Your Wealth Journey: Navigate Markets, Maximize Returns, and Achieve Financial Growth with "}
              <span className="font-semibold text-ink-900">{"Ashlar's Expertise"}</span>
              {"."}
            </motion.p>

            {/* Mobile signup form */}
            <motion.div variants={fadeUp}>
              <MobileSignupForm />
            </motion.div>

          
           
            {/* Trust badges */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border-subtle pt-6"
            >
              {TRUST_BADGES.slice(0, 4).map((badge) => (
                <div key={badge.text} className="flex items-center gap-1.5">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-success/10">
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 10 10"
                      fill="none"
                      aria-hidden="true"
                    >
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
                  <span className="text-xs font-medium text-ink-600">
                    {badge.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: image with faded edges */}
          <div className="lg:col-span-5">
            <PreviewCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
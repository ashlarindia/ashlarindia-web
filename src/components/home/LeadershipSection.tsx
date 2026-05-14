"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { Mail, ShieldCheck } from "lucide-react";
import Image from "next/image";

/* ---------------- data ---------------- */

interface Leader {
  id: number;
  name: string;
  designation: string;
  experience: string;
  bio: string;
  linkedin?: string;
  email: string;
  image: string;
}

interface Registration {
  title: string;
  value: string;
  image: string;
}

const LEADERS: Leader[] = [
  {
    id: 1,
    name: "Mr. Bharat Bansal",
    designation: "Chairman & Managing Director",
    experience: "35+ years",
    bio: "One of the founder directors of the Ashlar Group with extensive experience in capital markets, public issues, commodity trading and financial services.",
    email: "bharat@ashlarindia.com",
    image: "/leadership/BharatBansal.webp",
  },
  {
    id: 2,
    name: "Mr. Sunil Kumar",
    designation: "Whole-time Director",
    experience: "20+ years",
    bio: "Deep experience in financial markets and investor services, with significant contributions to operational efficiency and client servicing.",
    email: "sunil@ashlarindia.com",
    image: "/leadership/SunilKumar.jpeg",
  },
  {
    id: 3,
    name: "Mr. Sudhir Bhalla",
    designation: "Director",
    experience: "17+ years",
    bio: "Responsible for strategic planning, operational management and corporate expansion initiatives across business verticals.",
    email: "sudhir@ashlarindia.com",
    image: "/leadership/SudhirBhalla.jpeg",
  },
  
];

const REGISTRATIONS: Registration[] = [
  {
    title: "SEBI Registration",
    value: "INZ000203739",
    image: "/icons/sebi.png",
  },
  {
    title: "NSE Member",
    value: "13718",
    image: "/icons/nse.png",
  },
  {
    title: "BSE Member",
    value: "3302",
    image: "/icons/bse.png",
  },
  {
    title: "MCX Member",
    value: "56815",
    image: "/icons/mcx.png",
  },
  {
    title: "NCDEX Member",
    value: "01002",
    image: "/icons/ncdex.jfif",
  },
  {
    title: "NSDL DP-ID",
    value: "IN303921",
    image: "/icons/nsdl.jfif",
  },
  {
    title: "SEBI DP Registration",
    value: "IN-DP-2362016",
    image: "/icons/sebi.png",
  },
  {
    title: "CIN",
    value: "U74899UP1994PTC016662",
    image: "/icons/cin.png",
  },
];

/* ---------------- motion ---------------- */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ---------------- icons ---------------- */

const LinkedInIcon: FC<{ size?: number }> = ({
  size = 14,
}) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
  </svg>
);

/* ---------------- leader card ---------------- */

const LeaderCard: FC<{ leader: Leader }> = ({
  leader,
}) => (
  <motion.article
    variants={item}
    className={[
      "group relative flex h-full flex-col rounded-xl border border-border bg-surface p-6",
      "transition-[transform,border-color,box-shadow] duration-300 ease-out",
      "hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md",
    ].join(" ")}
  >
    {/* Profile Image */}
    <div className="mb-5 overflow-hidden rounded-xl">
      <Image
        src={leader.image}
        alt={leader.name}
        width={400}
        height={300}
        className="h-56 w-full object-cover"
      />
    </div>

    {/* Top section */}
    <div className="flex items-center justify-between">
      <h3 className="font-display text-lg font-medium leading-snug tracking-tight text-ink-900">
        {leader.name}
      </h3>

      <span className="rounded-full border border-border-subtle bg-surface-subtle px-2.5 py-0.5 text-[11px] font-medium text-ink-600">
        {leader.experience}
      </span>
    </div>

    <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-brand-600">
      {leader.designation}
    </p>

    {/* Bio */}
    <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">
      {leader.bio}
    </p>

    {/* Contact */}
    <div className="mt-5 flex items-center gap-2 border-t border-border-subtle pt-4">
      {leader.linkedin && (
        <a
          href={leader.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${leader.name} on LinkedIn`}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border-subtle text-ink-400 transition-colors hover:border-brand-600 hover:bg-brand-50 hover:text-brand-700"
        >
          <LinkedInIcon />
        </a>
      )}

      <a
        href={`mailto:${leader.email}`}
        aria-label={`Email ${leader.name}`}
        className="flex h-8 w-8 items-center justify-center rounded-md border border-border-subtle text-ink-400 transition-colors hover:border-brand-600 hover:bg-brand-50 hover:text-brand-700"
      >
        <Mail size={14} strokeWidth={1.75} />
      </a>
    </div>
  </motion.article>
);

/* ---------------- main ---------------- */

export default function LeadershipSection() {
  return (
    <section className="relative bg-surface-subtle pt-0 pb-22 sm:pb-30">
      <div className="container">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-eyebrow uppercase text-brand-600">
            Leadership
          </span>

          <h2 className="mt-4 font-display text-display-lg text-ink-900 text-balance">
            The people behind Ashlar
          </h2>

          <p className="mt-4 text-base leading-relaxed text-ink-600 text-balance">
            Three decades of capital-markets experience,
            focused on one outcome — building durable
            financial trust for every client we serve.
          </p>
        </div>

        {/* Leaders Grid */}
       <motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-80px" }}
  className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
>
  {LEADERS.map((leader) => (
    <LeaderCard
      key={leader.id}
      leader={leader}
    />
  ))}
</motion.div>

        {/* Registrations */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-16 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm"
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-4 border-b border-border-subtle bg-surface-subtle px-6 py-5 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-600/10">
                <ShieldCheck
                  size={18}
                  strokeWidth={1.75}
                />
              </div>

              <div>
                <p className="text-eyebrow uppercase text-brand-600">
                  Verified credentials
                </p>

                <h3 className="font-display text-base font-medium text-ink-900">
                  Regulatory registrations &
                  memberships
                </h3>
              </div>
            </div>
          </div>

          {/* Registration Grid */}
          <div className="grid grid-cols-2 divide-x divide-y divide-border-subtle sm:grid-cols-4">
            {REGISTRATIONS.map((reg) => (
              <div
                key={reg.title}
                className="px-5 py-4 transition-colors hover:bg-surface-subtle sm:px-6 sm:py-5"
              >
                {/* Image */}
                <div className="mb-3 flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border border-border-subtle bg-white">
                  <Image
                    src={reg.image}
                    alt={reg.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <p className="text-[10px] font-medium uppercase tracking-wider text-ink-400">
                  {reg.title}
                </p>

                {/* Value */}
                <p className="mt-1.5 break-all font-mono text-[13px] font-medium tabular-nums text-ink-900">
                  {reg.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import type { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import {
  Section,
  SectionHeader,
  PersonCard,
  StaggerGrid,
  StaggerItem,
  Reveal,
} from "@/components/ui";

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
  { title: "SEBI Registration",    value: "INZ000203739",         image: "/icons/sebi.png" },
  { title: "NSE Member",           value: "13718",                image: "/icons/nse.png" },
  { title: "BSE Member",           value: "3302",                 image: "/icons/bse.png" },
  { title: "MCX Member",           value: "56815",                image: "/icons/mcx.png" },
  { title: "NCDEX Member",         value: "01002",                image: "/icons/ncdex.jfif" },
  { title: "NSDL DP-ID",           value: "IN303921",             image: "/icons/nsdl.jfif" },
  { title: "SEBI DP Registration", value: "IN-DP-2362016",        image: "/icons/sebi.png" },
  { title: "CIN",                  value: "U74899UP1994PTC016662", image: "/icons/cin.png" },
];

/* ---------------- main ---------------- */
export default function LeadershipSection() {
  return (
    <Section tone="subtle" className="pt-0 pb-22 sm:pb-30">
      <SectionHeader
        eyebrow="Leadership"
        title="The people behind Ashlar"
        description="Three decades of capital-markets experience, focused on one outcome — building durable financial trust for every client we serve."
        className="mb-14"
      />

      {/* Leaders grid */}
      <StaggerGrid className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {LEADERS.map((leader) => (
          <StaggerItem key={leader.id}>
            <PersonCard
              name={leader.name}
              designation={leader.designation}
              experience={leader.experience}
              bio={leader.bio}
              email={leader.email}
              linkedin={leader.linkedin}
              image={leader.image}
            />
          </StaggerItem>
        ))}
      </StaggerGrid>

      {/* Registrations panel */}
      <Reveal className="mt-16">
        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between gap-4 border-b border-border-subtle bg-surface-subtle px-6 py-5 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-600/10">
                <ShieldCheck size={18} strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-eyebrow uppercase text-brand-600">
                  Verified credentials
                </p>
                <h3 className="font-display text-base font-medium text-ink-900">
                  Regulatory registrations &amp; memberships
                </h3>
              </div>
            </div>
          </div>

          {/* Registration grid */}
          <div className="grid grid-cols-2 divide-x divide-y divide-border-subtle sm:grid-cols-4">
            {REGISTRATIONS.map((reg) => (
              <div
                key={reg.title}
                className="px-5 py-4 transition-colors hover:bg-surface-subtle sm:px-6 sm:py-5"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border border-border-subtle bg-white">
                  <Image
                    src={reg.image}
                    alt={reg.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-ink-400">
                  {reg.title}
                </p>
                <p className="mt-1.5 break-all font-mono text-[13px] font-medium tabular-nums text-ink-900">
                  {reg.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
import type { Metadata } from "next";
import { User, Building2, Briefcase, ShieldCheck, ExternalLink } from "lucide-react";
import {
  PageHero,
  Section,
  SectionHeader,
  Container,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Escalation Matrix — Ashlar India",
  description: "Formal escalation hierarchy for unresolved complaints, with response timelines and contact details at each level.",
};

const levels = [
  {
    level: "Level 1",
    icon: User,
    title: "Customer Service",
    name: "Mr. Rajesh Kumar",
    designation: "Customer Service Head",
    email: "investorcell@ashlarindia.com",
    phone: "0120-6633205",
    timeline: "7 business days",
  },
  {
    level: "Level 2",
    icon: Briefcase,
    title: "Compliance Officer",
    name: "Ms. Anita Sharma",
    designation: "Compliance Officer",
    email: "compliance@ashlarindia.com",
    phone: "0120-6633231",
    timeline: "10 business days",
  },
  {
    level: "Level 3",
    icon: Building2,
    title: "Director",
    name: "Mr. Bharat Bansal",
    designation: "Managing Director",
    email: "md@ashlarindia.com",
    phone: "0120-6633238",
    timeline: "15 business days",
  },
];

export default function EscalationMatrixPage() {
  return (
    <main>
      <PageHero
        eyebrow="Help & Support"
        title="Escalation matrix"
        description="If your complaint isn't resolved at Level 1, escalate through this hierarchy. Each level has a defined response timeline and dedicated contact."
       
      />

      <Section>
        <SectionHeader
          eyebrow="Three-tier escalation"
          title="Who to contact at each level"
          description="As per SEBI guidelines, unresolved complaints must be escalated through these levels before approaching SEBI directly."
          className="mb-12"
        />

        <div className="space-y-4">
          {levels.map((l, idx) => {
            const Icon = l.icon;
            return (
              <article
                key={l.level}
                className="group relative overflow-hidden rounded-xl border border-border bg-surface p-6 transition-[transform,border-color,box-shadow] duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md sm:p-7"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  {/* Level number */}
                  <div className="flex shrink-0 items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-600/10 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
                      <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <div className="sm:hidden">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-600">
                        {l.level}
                      </p>
                      <h3 className="font-display text-base font-medium text-ink-900">
                        {l.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="hidden sm:block">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-600">
                        {l.level}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-medium tracking-tight text-ink-900">
                        {l.title}
                      </h3>
                    </div>

                    <div className="mt-3 grid gap-3 sm:grid-cols-2 sm:gap-5 sm:border-t sm:border-border-subtle sm:pt-4">
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-wider text-ink-400">
                          {"Name"}
                        </p>
                        <p className="mt-0.5 text-sm font-medium text-ink-900">
                          {l.name}
                        </p>
                        <p className="text-xs text-ink-500">{l.designation}</p>
                      </div>

                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-wider text-ink-400">
                          {"Email"}
                        </p>
                        <a
                          href={`mailto:${l.email}`}
                          className="mt-0.5 block break-all text-sm font-medium text-brand-700 hover:underline"
                        >
                          {l.email}
                        </a>
                      </div>

                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-wider text-ink-400">
                          {"Phone"}
                        </p>
                        <a
                          href={`tel:${l.phone}`}
                          className="mt-0.5 block text-sm font-medium tabular-nums text-ink-800 hover:text-brand-700"
                        >
                          {l.phone}
                        </a>
                      </div>

                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-wider text-ink-400">
                          {"Response timeline"}
                        </p>
                        <p className="mt-0.5 text-sm font-medium text-ink-800">
                          {l.timeline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* SEBI / SCORES band */}
        <div className="mt-12 rounded-xl border border-amber-200/60 bg-amber-50/50 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                <ShieldCheck size={18} strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-800">
                  {"Final escalation — SEBI"}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-amber-900">
                  {"If the matter remains unresolved after Level 3, file a complaint on the SEBI SCORES portal."}
                </p>
              </div>
            </div>
            <a
              href="https://scores.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 self-start whitespace-nowrap rounded-lg border border-amber-700/30 bg-white px-4 py-2 text-sm font-medium text-amber-900 transition-colors hover:bg-amber-50 sm:self-center"
            >
              {"File on SCORES"}
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
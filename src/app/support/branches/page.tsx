"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Search } from "lucide-react";
import {
  PageHero,
  Section,
  StaggerGrid,
  StaggerItem,
  Field,
} from "@/components/ui";

interface Branch {
  id: string;
  city: string;
  state: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  type: "HQ" | "Branch" | "Sub-broker";
}

const BRANCHES: Branch[] = [
  {
    id: "noida-hq",
    city: "Noida",
    state: "Uttar Pradesh",
    name: "Head Office — Noida",
    address: "A-38, Sector 67, Noida — 201301",
    phone: "0120-6633205",
    email: "investorcell@ashlarindia.com",
    hours: "Mon–Sat · 9 AM – 6 PM",
    type: "HQ",
  },
  {
    id: "delhi",
    city: "New Delhi",
    state: "Delhi",
    name: "Delhi Branch",
    address: "Connaught Place, New Delhi — 110001",
    phone: "011-XXXXXXXX",
    email: "delhi@ashlarindia.com",
    hours: "Mon–Fri · 9:30 AM – 6 PM",
    type: "Branch",
  },
  {
    id: "mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    name: "Mumbai Branch",
    address: "Bandra Kurla Complex, Mumbai — 400051",
    phone: "022-XXXXXXXX",
    email: "mumbai@ashlarindia.com",
    hours: "Mon–Fri · 9:30 AM – 6 PM",
    type: "Branch",
  },
  {
    id: "bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    name: "Bengaluru Branch",
    address: "MG Road, Bengaluru — 560001",
    phone: "080-XXXXXXXX",
    email: "bengaluru@ashlarindia.com",
    hours: "Mon–Fri · 9:30 AM – 6 PM",
    type: "Branch",
  },
];

const typeStyles = {
  HQ:        "border-brand-600/20 bg-brand-50 text-brand-700",
  Branch:    "border-success/20 bg-success/5 text-success",
  "Sub-broker": "border-border bg-surface-subtle text-ink-700",
};

export default function BranchesPage() {
  const [query, setQuery] = useState("");

  const filtered = BRANCHES.filter((b) =>
    `${b.city} ${b.state} ${b.name}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <main>
      <PageHero
        eyebrow="Help & Support"
        title="Branch locator"
        description="Visit any Ashlar office for in-person assistance. Search by city or state."
       
      />

      <Section>
        {/* Search */}
        <div className="mx-auto mb-10 max-w-xl">
          <div className="relative">
            <Search
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-400"
              aria-hidden="true"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by city or state…"
              className="block w-full rounded-lg border border-border bg-surface py-3 pl-11 pr-4 text-[15px] text-ink-900 placeholder:text-ink-400 transition-[border-color,box-shadow] duration-200 focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-600/10"
            />
          </div>
        </div>

        {/* Results */}
        {filtered.length > 0 ? (
          <StaggerGrid className="grid gap-4 md:grid-cols-2 md:gap-5">
            {filtered.map((branch) => (
              <StaggerItem key={branch.id} className="h-full">
                <article className="group h-full rounded-xl border border-border bg-surface p-6 transition-[transform,border-color,box-shadow] duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-medium leading-snug text-ink-900">
                        {branch.name}
                      </h3>
                      <p className="mt-0.5 text-sm text-ink-600">
                        {branch.city}, {branch.state}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${typeStyles[branch.type]}`}
                    >
                      {branch.type}
                    </span>
                  </div>

                  <div className="mt-5 space-y-3 border-t border-border-subtle pt-5">
                    <div className="flex items-start gap-3 text-sm">
                      <MapPin size={14} className="mt-0.5 shrink-0 text-ink-400" aria-hidden="true" />
                      <address className="not-italic leading-snug text-ink-700">
                        {branch.address}
                      </address>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone size={14} className="shrink-0 text-ink-400" aria-hidden="true" />
                      <a
                        href={`tel:${branch.phone}`}
                        className="font-medium text-ink-700 transition-colors hover:text-brand-700"
                      >
                        {branch.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Mail size={14} className="shrink-0 text-ink-400" aria-hidden="true" />
                      <a
                        href={`mailto:${branch.email}`}
                        className="break-all font-medium text-ink-700 transition-colors hover:text-brand-700"
                      >
                        {branch.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Clock size={14} className="shrink-0 text-ink-400" aria-hidden="true" />
                      <span className="text-ink-700">{branch.hours}</span>
                    </div>
                  </div>
<a
                  
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700"
                  >
                    {"Get directions →"}
                  </a>
                </article>
              </StaggerItem>
            ))}
          </StaggerGrid>
        ) : (
          <div className="mx-auto max-w-md rounded-xl border border-border bg-surface p-8 text-center">
            <p className="text-sm text-ink-600">
              {"No branches found matching "}
              <span className="font-medium text-ink-900">{`"${query}"`}</span>
              {"."}
            </p>
          </div>
        )}
      </Section>
    </main>
  );
}
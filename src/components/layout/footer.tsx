"use client";

import type { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";
import { getKycUrl } from "@/data/site-data";

/* ---------------- data ---------------- */
const FOOTER_PRODUCTS = [
  { label: "Equity Trading", href: "/products/equity" },
  { label: "F&O", href: "/products/futute-options" },
  { label: "Commodities", href: "/products/commodities" },
  { label: "Currency", href: "/products/currency" },
  { label: "IPO", href: "/products/ipo" },
  { label: "DP Services", href: "/products/dp" },
   { label: "Stocks", href: "/products/stocks" },
];

const FOOTER_ACCOUNTS = [
  { label: "Open Account", href: getKycUrl("footer"), external: true },
  { label: "Re-KYC", href: "/accounts/re-kyc" },
  { label: "KRA Inquiry", href: "/accounts/kra-inquiry" },
  { label: "Freezing & Blocking", href: "/accounts/freeze-blocking" },
  { label: "Fund Transfer", href: "/accounts/fund-transfer" },
  { label: "Pledge & Unpledge", href: "/accounts/pledge-unpledge" },
  { label: "Online Nomination", href: "/accounts/nomination" },
];

const FOOTER_SUPPORT = [
  { label: "Contact us", href: "/supports/contact-us" },
  { label: "Margin calculator", href: "/calculators" },
  { label: "Quick mail", href: "/supports/quick-mail" },
  { label: "Downloads", href: "/supports/downloads" },
  { label: "Complaints", href: "/supports/complaints" },
];

const FOOTER_COMPANY = [
  { label: "About us", href: "/about-ashlar/about-us" },
  { label: "Business partner", href: "/about-ashlar/business-partner" },
  { label: "Announcements", href: "/about-ashlar/announcements" },
  { label: "Careers", href: "/about-ashlar/careers" },
  { label: "Circulars", href: "/about-ashlar/circulars" },
];

const EXCHANGE_LINKS = [
  { label: "SEBI", href: "https://www.sebi.gov.in" },
  { label: "NSE", href: "https://www.nseindia.com" },
  { label: "BSE", href: "https://www.bseindia.com" },
  { label: "MCX", href: "https://www.mcxindia.com" },
  { label: "SCORES", href: "https://scores.gov.in" },
  { label: "Smart ODR", href: "https://smartodr.in" },
  { label: "Investor Education", href: "https://investor.sebi.gov.in" },
  { label: "IRRA", href: "https://irra.nseindia.com" },
];

const LEGAL_LINKS = [
  { label: "Investor Charter", href: "/investor-charter" },
  { label: "For Investors", href: "/for-investors" },
  { label: "Cybersecurity", href: "/cybersecurity" },
  { label: "Escalation Matrix", href: "/escalation-matrix" },
  { label: "Regulatory Info", href: "/regulatory" },
  { label: "Policies", href: "/policies" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy-policy" },
];

/* ---------------- social icons ---------------- */
const SocialIcon: FC<{ name: string }> = ({ name }) => {
  const paths: Record<string, JSX.Element> = {
    Facebook: (
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    ),
    Twitter: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
    LinkedIn: (
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    ),
    Instagram: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.15 0-3.522.012-4.764.068-1.024.047-1.58.218-1.95.362-.49.19-.84.418-1.21.788s-.598.72-.788 1.21c-.144.37-.315.926-.362 1.95-.056 1.242-.068 1.614-.068 4.764s.012 3.522.068 4.764c.047 1.024.218 1.58.362 1.95.19.49.418.84.788 1.21s.72.598 1.21.788c.37.144.926.315 1.95.362 1.242.056 1.614.068 4.764.068s3.522-.012 4.764-.068c1.024-.047 1.58-.218 1.95-.362.49-.19.84-.418 1.21-.788s.598-.72.788-1.21c.144-.37.315-.926.362-1.95.056-1.242.068-1.614.068-4.764s-.012-3.522-.068-4.764c-.047-1.024-.218-1.58-.362-1.95-.19-.49-.418-.84-.788-1.21s-.72-.598-1.21-.788c-.37-.144-.926-.315-1.95-.362-1.242-.056-1.614-.068-4.764-.068zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm6.538-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
    ),
    YouTube: (
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    ),
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="14"
      height="14"
    >
      {paths[name]}
    </svg>
  );
};

const SOCIALS = [
  { name: "Facebook", href: "https://facebook.com/ashlarindia" },
  { name: "Twitter", href: "https://twitter.com/ashlarindia" },
  { name: "LinkedIn", href: "https://linkedin.com/company/ashlarindia" },
  { name: "Instagram", href: "https://instagram.com/ashlarindia" },
  { name: "YouTube", href: "https://youtube.com/@ashlarindia" },
] as const;

/* ---------------- helpers ---------------- */
const FooterLink: FC<{
  href: string;
  external?: boolean;
  children: React.ReactNode;
}> = ({ href, external, children }) =>
  external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[13px] text-ink-100/70 transition-colors hover:text-white"
    >
      {children}
    </a>
  ) : (
    <Link
      href={href}
      className="text-[13px] text-ink-100/70 transition-colors hover:text-white"
    >
      {children}
    </Link>
  );

const ColumnHeading: FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
    {children}
  </h4>
);

/* ---------------- footer ---------------- */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink-900 text-ink-100">
      {/* Accent */}
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-brand-600 to-transparent"
      />

      {/* CTA */}
      <div className="border-b border-white/5">
        <div className="container py-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
          >
            <div>
              <p className="font-display text-lg font-medium tracking-tight text-white sm:text-xl">
                Start investing with India's trusted broker
              </p>

              <p className="mt-1 text-sm text-ink-100/60">
                Open a free demat account in under 5 minutes.
              </p>
            </div>

            <Link
              href={getKycUrl("footer")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-11 shrink-0 items-center gap-2 rounded-lg bg-brand-600 px-5 text-sm font-medium text-white shadow-brand transition-[transform,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900"
            >
              Open free account

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main */}
      <div className="container pb-12 pt-14">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link
              href="/"
              className="inline-flex items-baseline gap-0.5 font-display text-xl font-medium tracking-tight"
            >
              <span className="text-white">Ashlar</span>
              <span className="text-brand-400">.</span>
              <span className="text-ink-100/70">India</span>
            </Link>

            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-ink-100/60">
              SEBI-registered stock broker offering equity, F&O,
              commodities, currency, mutual funds and depository
              services across India since 2009.
            </p>

            {/* Contact */}
            <ul className="mt-6 space-y-2.5 text-[13px] text-ink-100/70">
              <li className="flex items-start gap-2.5">
                <Phone
                  size={14}
                  strokeWidth={1.75}
                  className="mt-0.5 shrink-0 text-ink-100/40"
                />

                <span>
                  <a
                    href="tel:+911206633205"
                    className="transition-colors hover:text-white"
                  >
                    0120-6633205
                  </a>

                  <span className="mx-1.5 text-ink-100/30">
                    ·
                  </span>

                  <span className="text-ink-100/40">
                    Toll-free
                  </span>{" "}

                  <a
                    href="tel:+9118001239343"
                    className="font-medium transition-colors hover:text-white"
                  >
                    1800 123 9343
                  </a>
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <Mail
                  size={14}
                  strokeWidth={1.75}
                  className="mt-0.5 shrink-0 text-ink-100/40"
                />

                <a
                  href="mailto:investorcell@ashlarindia.com"
                  className="transition-colors hover:text-white"
                >
                  investorcell@ashlarindia.com
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin
                  size={14}
                  strokeWidth={1.75}
                  className="mt-0.5 shrink-0 text-ink-100/40"
                />

                <address className="not-italic">
                  A-38, Sector 67, Noida
                  <br />
                  Uttar Pradesh — 201301
                </address>
              </li>
            </ul>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-ink-100/60 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900"
                >
                  <SocialIcon name={s.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="md:col-span-2">
            <ColumnHeading>Products</ColumnHeading>

            <ul className="mt-5 space-y-3">
              {FOOTER_PRODUCTS.map((l) => (
                <li key={l.label}>
                  <FooterLink href={l.href}>
                    {l.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Accounts */}
          <div className="md:col-span-2">
            <ColumnHeading>Account</ColumnHeading>

            <ul className="mt-5 space-y-3">
              {FOOTER_ACCOUNTS.map((l) => (
                <li key={l.label}>
                  <FooterLink
                    href={l.href}
                    external={l.external}
                  >
                    {l.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-2">
            <ColumnHeading>Support</ColumnHeading>

            <ul className="mt-5 space-y-3">
              {FOOTER_SUPPORT.map((l) => (
                <li key={l.label}>
                  <FooterLink href={l.href}>
                    {l.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <ColumnHeading>Company</ColumnHeading>

            <ul className="mt-5 space-y-3">
              {FOOTER_COMPANY.map((l) => (
                <li key={l.label}>
                  <FooterLink href={l.href}>
                    {l.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Exchanges */}
      <div className="border-t border-white/5">
        <div className="container py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-ink-100/40">
            <span className="font-medium uppercase tracking-[0.14em] text-ink-100/60">
              Regulators &amp; exchanges
            </span>

            {EXCHANGE_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="container py-6">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
            <p className="text-[11px] text-ink-100/40">
              © {year} Ashlar Securities Pvt. Ltd. · All rights
              reserved
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
              {LEGAL_LINKS.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-[11px] text-ink-100/50 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Brand line */}
          <p className="mt-5 text-center text-[11px] text-ink-100/40 lg:text-left">
            Wisdom Capital is an online brand of Ashlar Securities
            Pvt. Ltd.{" "}

            <a
              href="https://wisdomcapital.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-100/60 underline-offset-2 transition-colors hover:text-white hover:underline"
            >
              wisdomcapital.in →
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
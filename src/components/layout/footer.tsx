'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

const COLUMNS: FooterColumn[] = [
  {
    heading: 'Products',
    links: [
      { label: 'Equity trading',  href: '/products/equity'       },
      { label: 'F&O',             href: '/products/fno'          },
      { label: 'Commodities',     href: '/products/commodities'  },
      { label: 'Mutual funds',    href: '/products/mutual-funds' },
      { label: 'IPO',             href: '/ipo'                   },
      { label: 'Bonds & NCDs',    href: '/bonds'                 },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About us',        href: '/about'       },
      { label: 'Careers',         href: '/careers'     },
      { label: 'Press',           href: '/press'       },
      { label: 'Partner with us', href: '/partner'     },
      { label: 'Blog',            href: '/blog'        },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Contact us',      href: '/contact'      },
      { label: 'FAQs',            href: '/faqs'         },
      { label: 'Calculators',     href: '/calculators'  },
      { label: 'Disclosures',     href: '/disclosures'  },
      { label: 'Investor charter',href: '/charter'      },
      { label: 'SEBI SCORES',     href: 'https://scores.gov.in', external: true },
    ],
  },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: 'Privacy policy',      href: '/privacy-policy'  },
  { label: 'Terms & conditions',  href: '/terms'           },
  { label: 'Disclosures',         href: '/disclosures'     },
  { label: 'Complaints',          href: '/complaints'      },
];

const TRUST_BADGES = [
  'SEBI Reg: INZ000XXXXXX',
  'NSE & BSE Member',
  'MCX Member',
  'CDSL DP: IN-DP-XXXX',
  'NSDL DP: IN-DP-XXXX',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 mt-auto">

      {/* ── Top CTA strip ── */}
      <div className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-semibold text-base mb-1">
              Start trading with Ashlar Markets today
            </p>
            <p className="text-slate-400 text-sm">
              Zero account opening · Flat ₹10 brokerage · 5-minute KYC
            </p>
          </div>
          <Link
            href="https://kyc.wisdomcapital.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 flex-shrink-0 px-6 py-3 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white text-sm font-semibold rounded-xl transition-all duration-150"
          >
            Open free account →
          </Link>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        <div className="grid gap-10 md:grid-cols-4 mb-12">

          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-white font-bold text-xl tracking-tight">
                Ashlar<span className="text-blue-400">Markets</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              A SEBI registered stock broker offering equity, F&O, commodities,
              currency, and depository services across India.
            </p>

            {/* Contact details */}
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2.5 text-sm">
                <Phone size={14} className="text-blue-400 flex-shrink-0" aria-hidden="true" />
                <span>Toll free: <span className="text-slate-300">1800-123-9343</span></span>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Phone size={14} className="text-blue-400 flex-shrink-0" aria-hidden="true" />
                <span>Direct: <span className="text-slate-300">0120-6633205</span></span>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Mail size={14} className="text-blue-400 flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:support@ashlarmarkets.com"
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-150"
                >
                  support@ashlarmarkets.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <MapPin size={14} className="text-blue-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Noida, Uttar Pradesh, India</span>
              </li>
            </ul>
          </div>

          {/* Nav columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-100 transition-colors duration-150 group"
                    >
                      {link.label}
                      {link.external && (
                        <ExternalLink
                          size={11}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── SEBI registration badges ── */}
        <div className="py-5 border-y border-slate-800 flex flex-wrap gap-2 justify-start">
          {TRUST_BADGES.map((badge) => (
            <span
              key={badge}
              className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-400"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* ── SEBI disclaimer ── */}
        <div className="py-5 border-b border-slate-800">
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Investments in securities market are subject to market risks. Read all the related documents
            carefully before investing. Registration granted by SEBI, membership of BASL (in case of IAs) and
            certification from NISM in no way guarantee performance of the intermediary or provide any assurance
            of returns to investors. Brokerage will not exceed the SEBI prescribed limit.
          </p>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            &copy; {currentYear} Ashlar Markets Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-slate-600 hover:text-slate-300 transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
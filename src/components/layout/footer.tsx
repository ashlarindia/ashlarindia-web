'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ChevronDown, ExternalLink } from 'lucide-react';
import { SITE, getKycUrl } from '@/data/site-data';

const FOOTER_PRODUCTS = [
  { label: 'Equity Trading',   href: '/equity'       },
  { label: 'F&O',              href: '/fo'           },
  { label: 'Commodities',      href: '/commodities'  },
  { label: 'Currency',         href: '/currency'     },
  { label: 'IPO',              href: '/ipo'          },
  { label: 'Mutual Funds',     href: '/mutual-funds' },
  { label: 'Bonds & NCDs',     href: '/bonds'        },
  { label: 'DP Services',      href: '/dp'           },
];

const FOOTER_SUPPORT = [
  { label: 'Contact Us',            href: '/contact'                },
  { label: 'FAQs',                  href: '/faqs'                   },
  { label: 'Brokerage Calculator',  href: '/brokerage-calculator'   },
  { label: 'Margin Calculator',     href: '/margin-calculator'      },
  { label: 'Investor Charter',      href: '/regulatory'             },
  // Fix #16 — correct PDF filename, no spaces
  { label: 'Complaint Filing',      href: '/pdfs/Complaint-Filing.pdf',        external: true },
  // Fix #17
  { label: 'Account Opening Guide', href: '/pdfs/Account-Opening-Guide.pdf',   external: true },
  { label: 'SEBI SCORES',           href: 'https://scores.gov.in',             external: true },
];

const FOOTER_COMPANY = [
  { label: 'About Us',       href: '/about'   },
  { label: 'Careers',        href: '/careers' },
  { label: 'Blog',           href: '/blog'    },
  { label: 'Partner with Us',href: '/partner' },
  { label: 'Regulatory',     href: '/regulatory' },
];

// Fix #20 — all registration numbers visible
const REGISTRATIONS = [
  `SEBI: ${SITE.sebi}`,
  `NSE: ${SITE.nse}`,
  `BSE: ${SITE.bse}`,
  `MCX: ${SITE.mcx}`,
  `NCDEX: ${SITE.ncdex}`,
  `NSDL DP: ${SITE.nsdl}`,
  `CDSL DP: ${SITE.cdsl}`,
  `CIN: ${SITE.cin}`,
];

// Fix #19 — all 5 social icons linked
const SOCIALS = [
  { name: 'Facebook',  href: 'https://facebook.com/ashlarindia',         label: 'Fb'  },
  { name: 'Twitter X', href: 'https://twitter.com/ashlarindia',          label: '𝕏'   },
  { name: 'LinkedIn',  href: 'https://linkedin.com/company/ashlarindia', label: 'in'  },
  { name: 'Instagram', href: 'https://instagram.com/ashlarindia',        label: 'Ig'  },
  { name: 'YouTube',   href: 'https://youtube.com/@ashlarindia',         label: '▶'   },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy',     href: '/privacy-policy'  },
  { label: 'Terms & Conditions', href: '/terms'           },
  { label: 'Disclosures',        href: '/disclosures'     },
  // Fix #16
  { label: 'Complaint Filing',   href: '/pdfs/Complaint-Filing.pdf', external: true },
  // Fix #18 — apostrophe fixed: "For Investors" not "For Investor's"
  { label: 'For Investors',      href: '/regulatory'      },
  // Fix #18 — different destination from "For Investors"
  { label: 'Escalation Matrix',  href: '/contact#escalation' },
];

const SEBI_TEXT = `Investments in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. Brokerage will not exceed the SEBI prescribed limit. Prevent Unauthorised transactions in your account — update your mobile/email with your stock broker/DP. Receive transaction information from Exchange on your mobile/email at end of day. KYC is a one-time exercise — once done through a SEBI registered intermediary, you need not undergo it again. As a business we don't give stock tips and have not authorised anyone to trade on behalf of others. Risk Disclosure: Derivatives are complex instruments and come with a high risk of losing money rapidly due to leverage.`;

export default function Footer() {
  const [disclosureOpen, setDisclosureOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A2E] text-[#8B8B9A]" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* CTA strip */}
      <div className="border-b border-[#2D2D4A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-semibold text-base mb-1">Start trading with Ashlar India today</p>
            <p className="text-[#8B8B9A] text-sm">Zero account opening · Flat ₹10 brokerage · 5-minute KYC</p>
          </div>
          <Link href={getKycUrl('footer')} target="_blank" rel="noopener noreferrer"
            className="flex-shrink-0 px-6 py-3 bg-[#0066CC] hover:bg-[#0052A3] active:scale-[0.98] text-white text-sm font-semibold rounded-xl transition-all duration-150">
            Open Free Account →
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        <div className="grid gap-10 md:grid-cols-4 mb-12">

          {/* Brand column */}
          <div>
            <Link href="/" className="inline-block mb-4 text-xl font-bold text-white">
              Ashlar<span className="text-[#4D9FFF]">India</span>
            </Link>
            {/* Fix #14 — NO "Powered by Wisdom Tree" */}
            <p className="text-sm leading-relaxed mb-5 text-[#8B8B9A]">
              SEBI registered stock broker offering equity, F&O, commodities, currency, and depository services across India since 2009.
            </p>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2.5 text-sm">
                <Phone size={13} className="text-[#4D9FFF] flex-shrink-0" aria-hidden="true" />
                {/* Fix #64 — tel: link works on mobile */}
                <a href={`tel:+91${SITE.tollFree.replace(/-/g, '')}`} className="hover:text-white transition-colors">
                  Toll free: <span className="text-[#D0D0E0] font-semibold">{SITE.tollFree}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Phone size={13} className="text-[#4D9FFF] flex-shrink-0" aria-hidden="true" />
                <a href={`tel:+91${SITE.direct.replace(/-/g, '')}`} className="hover:text-white transition-colors">
                  Direct: <span className="text-[#D0D0E0]">{SITE.direct}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Mail size={13} className="text-[#4D9FFF] flex-shrink-0" aria-hidden="true" />
                {/* Fix #51 — correct email */}
                <a href={`mailto:${SITE.email}`} className="text-[#D0D0E0] hover:text-[#4D9FFF] transition-colors">{SITE.email}</a>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <MapPin size={13} className="text-[#4D9FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                {/* Fix #50 — correct address */}
                <span className="text-[#8B8B9A]">{SITE.address}</span>
              </li>
            </ul>
            {/* Fix #19 — all 5 social icons with links */}
            <div className="mt-6 flex gap-2">
              {SOCIALS.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={`Ashlar India on ${s.name}`}
                  className="w-8 h-8 rounded-lg bg-[#2D2D4A] border border-[#3D3D5A] flex items-center justify-center text-xs text-[#8B8B9A] hover:bg-[#0066CC] hover:border-[#0066CC] hover:text-white transition-all duration-150">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Products</h4>
            <ul className="space-y-3">
              {FOOTER_PRODUCTS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-[#8B8B9A] hover:text-white transition-colors duration-150">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Support</h4>
            <ul className="space-y-3">
              {FOOTER_SUPPORT.map((l) => (
                <li key={l.label}>
                  {'external' in l ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-[#8B8B9A] hover:text-white transition-colors group">
                      {l.label} <ExternalLink size={10} className="opacity-0 group-hover:opacity-100" aria-hidden="true" />
                    </a>
                  ) : (
                    <Link href={l.href} className="text-sm text-[#8B8B9A] hover:text-white transition-colors">{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3">
              {FOOTER_COMPANY.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-[#8B8B9A] hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Fix #20 — SEBI registration badges */}
        <div className="py-5 border-y border-[#2D2D4A] flex flex-wrap gap-2">
          {REGISTRATIONS.map((r) => (
            <span key={r} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#2D2D4A] border border-[#3D3D5A] text-[#8B8B9A]">{r}</span>
          ))}
        </div>

        {/* Fix #15 — Collapsible SEBI disclosures — full text in DOM always */}
        <div className="py-4 border-b border-[#2D2D4A]">
          <button onClick={() => setDisclosureOpen(!disclosureOpen)}
            className="flex items-center justify-between w-full text-left"
            aria-expanded={disclosureOpen}>
            <span className="text-xs font-semibold text-[#5A5A7A] uppercase tracking-wider">SEBI Mandatory Disclosures</span>
            <ChevronDown className={`h-4 w-4 text-[#5A5A7A] transition-transform duration-200 ${disclosureOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>
          {/* Visually hidden but always in DOM for compliance crawlers */}
          <p className={disclosureOpen ? 'mt-3 text-[11px] text-[#5A5A7A] leading-relaxed' : 'sr-only'}>
            {SEBI_TEXT}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#5A5A7A]">© {year} Ashlar India Pvt. Ltd. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {LEGAL_LINKS.map((l) => (
              'external' in l ? (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                  className="text-xs text-[#5A5A7A] hover:text-[#8B8B9A] transition-colors">{l.label}</a>
              ) : (
                <Link key={l.label} href={l.href} className="text-xs text-[#5A5A7A] hover:text-[#8B8B9A] transition-colors">{l.label}</Link>
              )
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
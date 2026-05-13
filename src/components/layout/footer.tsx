'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ChevronDown, ExternalLink } from 'lucide-react';
import { SITE, getKycUrl } from '@/data/site-data';

// Footer Products
const FOOTER_PRODUCTS = [
  { label: 'Equity Trading', href: '/products/equity' },
  { label: 'F&O', href: '/products/fo' },
  { label: 'Commodities', href: '/products/commodities' },
  { label: 'Currency', href: '/products/currency' },
  { label: 'IPO', href: '/products/ipo' },
  { label: 'Mutual Funds', href: '/products/mutual-funds' },
  { label: 'Bonds & NCDs', href: '/products/bonds' },
  { label: 'DP Services', href: '/products/dp' },
];
// Accounts items - Corrected href paths
const FOOTER_ACCOUNTS = [
  { label: 'Open Account', href: getKycUrl('footer'), external: true },
  { label: 'Re-KYC', href: '/accounts/re-kyc' },
  { label: 'KRA Inquiry', href: '/accounts/kra-inquiry' },
  { label: 'Freezing/Blocking', href: '/accounts/freezing-blocking' },
  { label: 'Fund Transfer', href: '/accounts/fund-transfer' },
  { label: 'Pledge/Unpledge', href: '/accounts/pledge-unpledge' },
  { label: 'Online Nomination', href: '/accounts/online-nomination' },
];

// Support items - Corrected href paths
const FOOTER_SUPPORT = [
  { label: 'Contact Us', href: '/supports/contact-us' },
  { label: 'Margin Calculator', href: '/calculators' },
  { label: 'Quick Mail', href: '/supports/quick-mail' },
  { label: 'Downloads', href: '/supports/downloads' },
  { label: 'Complaints', href: '/supports/complaints' },
];

// Company items - Corrected href paths (based on about-ashlar folder)
const FOOTER_COMPANY = [
  { label: 'About Us', href: '/about-ashlar/about-us' },
  { label: 'Business Partner', href: '/about-ashlar/business-partner' },
  { label: 'Announcements', href: '/about-ashlar/announcements' },
  { label: 'Careers', href: '/about-ashlar/careers' },
  { label: 'Circular', href: '/about-ashlar/circulars' },
];
// Social icons
const SOCIALS = [
  { name: 'Facebook', href: 'https://facebook.com/ashlarindia', label: 'Fb' },
  { name: 'Twitter', href: 'https://twitter.com/ashlarindia', label: '𝕏' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ashlarindia', label: 'in' },
  { name: 'Instagram', href: 'https://instagram.com/ashlarindia', label: 'Ig' },
  { name: 'YouTube', href: 'https://youtube.com/@ashlarindia', label: '▶' },
];

// Exchange Links
const EXCHANGE_LINKS = [
  { label: 'SEBI', href: 'https://www.sebi.gov.in' },
  { label: 'NSE', href: 'https://www.nseindia.com' },
  { label: 'BSE', href: 'https://www.bseindia.com' },
  { label: 'MCX', href: 'https://www.mcxindia.com' },
  { label: 'E Voting: Shareholders/Members', href: 'https://www.evotingindia.com' },
  { label: 'SMART ODR', href: 'https://smartodr.in' },
  { label: 'SCORES 2.0', href: 'https://scores.gov.in' },
  { label: 'Investor Education', href: 'https://investor.sebi.gov.in' },
  { label: 'SCORES Mobile App', href: 'https://scores.gov.in' },
  { label: 'IRRA', href: 'https://irra.nseindia.com' },
];

// Registration Numbers
const REGISTRATION_NUMBERS = [
  'Registration No: INZ000203739',
  'Membership- NSE:13718',
  'BSE : 3302',
  'MCX : 56815',
  'NCDEX : 01002',
  'NSDL - DPID : IN303921',
  'SEBI Reg : IN-DP-2362016',
];

// Legal links
const LEGAL_LINKS = [
  { label: 'Investor Charter', href: '/investor-charter' },
  { label: "For Investor's", href: '/for-investors' },
  { label: 'Cybersecurity Awareness Campaign', href: '/cybersecurity' },
  { label: 'Escalation Matrix', href: '/escalation-matrix' },
  { label: 'Regulatory & other info', href: '/regulatory' },
  { label: 'Policies & Procedure', href: '/policies' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'WS Disclaimer', href: '/ws-disclaimer' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

const SEBI_TEXT = `Investments in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. Brokerage will not exceed the SEBI prescribed limit. Prevent Unauthorised transactions in your account — update your mobile/email with your stock broker/DP. Receive transaction information from Exchange on your mobile/email at end of day. KYC is a one-time exercise — once done through a SEBI registered intermediary, you need not undergo it again. As a business we don't give stock tips and have not authorised anyone to trade on behalf of others. Risk Disclosure: Derivatives are complex instruments and come with a high risk of losing money rapidly due to leverage.`;

export default function Footer() {
  const [disclosureOpen, setDisclosureOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A2E] text-[#8B8B9A]" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* NEW: Regulatory Strip - Exchange Links */}
      <div className="bg-[#1A1A2E] border-b border-[#2D2D4A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px]">
            {EXCHANGE_LINKS.map((link, idx) => (
              <React.Fragment key={link.label}>
                {idx > 0 && <span className="text-[#5A5A7A]">|</span>}
                <a 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#8B8B9A] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* NEW: Registration Numbers Bar */}
      <div className="bg-[#1A1A2E] border-b border-[#2D2D4A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10px] text-center">
            {REGISTRATION_NUMBERS.map((num, idx) => (
              <React.Fragment key={num}>
                {idx > 0 && <span className="text-[#5A5A7A]">|</span>}
                <span className="text-[#8B8B9A]">{num}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Phone Numbers Strip */}
      <div className="border-b border-[#2D2D4A] bg-[#1A1A2E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="text-white font-medium">Call Now:</span>
            <a href="tel:+9101206633205" className="text-[#4D9FFF] hover:text-white transition-colors">0120-6633205</a>
            <span className="text-[#5A5A7A]">,</span>
            <a href="tel:+9101206633231" className="text-[#4D9FFF] hover:text-white transition-colors">231</a>
            <span className="text-[#5A5A7A]">,</span>
            <a href="tel:+9101206633238" className="text-[#4D9FFF] hover:text-white transition-colors">238</a>
            <span className="text-white font-medium ml-2">Toll Free:</span>
            <a href="tel:+9118001239343" className="text-[#4D9FFF] hover:text-white transition-colors font-semibold">18001239343</a>
          </div>
          <div className="flex gap-2">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                aria-label={s.name}
                className="w-8 h-8 rounded-lg bg-[#2D2D4A] border border-[#3D3D5A] flex items-center justify-center text-xs text-[#8B8B9A] hover:bg-[#0066CC] hover:border-[#0066CC] hover:text-white transition-all">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main grid - 5 columns */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        <div className="grid gap-8 md:grid-cols-5 mb-12">

          {/* Brand column */}
          <div>
            <Link href="/" className="inline-block mb-4 text-xl font-bold text-white">
              Ashlar<span className="text-[#4D9FFF]">India</span>
            </Link>
            <p className="text-sm leading-relaxed mb-5 text-[#8B8B9A]">
              SEBI registered stock broker offering equity, F&O, commodities, currency, and depository services across India since 2009.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Products</h4>
            <ul className="space-y-3">
              {FOOTER_PRODUCTS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-[#8B8B9A] hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Accounts */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Accounts</h4>
            <ul className="space-y-3">
              {FOOTER_ACCOUNTS.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8B8B9A] hover:text-white transition-colors">
                      {l.label}
                    </a>
                  ) : (
                    <Link href={l.href} className="text-sm text-[#8B8B9A] hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  )}
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
                  <Link href={l.href} className="text-sm text-[#8B8B9A] hover:text-white transition-colors">
                    {l.label}
                  </Link>
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
                  <Link href={l.href} className="text-sm text-[#8B8B9A] hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* NEW: Register Office Address - Updated */}
        <div className="py-5 border-y border-[#2D2D4A] mb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} className="text-[#4D9FFF] flex-shrink-0" />
              <span className="text-[#8B8B9A]">Register Office: A-38, Sector-67, Noida-201301</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone size={16} className="text-[#4D9FFF] flex-shrink-0" />
              <span className="text-[#8B8B9A]">Contact No :- 0120-6633299</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail size={16} className="text-[#4D9FFF] flex-shrink-0" />
              <a href="mailto:investorcell@ashlarindia.com" className="text-[#8B8B9A] hover:text-white transition-colors">investorcell@ashlarindia.com</a>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="py-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
          {LEGAL_LINKS.map((l) => (
            <Link key={l.label} href={l.href} className="text-[10px] text-[#5A5A7A] hover:text-[#8B8B9A] transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* NEW: Wisdom Capital Brand Disclosure */}
        <div className="pt-4 text-center border-t border-[#2D2D4A]">
          <p className="text-[10px] text-[#5A5A7A]">
            Wisdom Capital is an online brand of Ashlar Securities Pvt. Ltd. For more information of the brand visit :{' '}
            <a href="https://wisdomcapital.in" target="_blank" rel="noopener noreferrer" className="text-[#4D9FFF] hover:text-white transition-colors">
              https://wisdomcapital.in
            </a>
          </p>
        </div>

        {/* Collapsible SEBI disclosures */}
        <div className="pt-4">
          <button 
            onClick={() => setDisclosureOpen(!disclosureOpen)}
            className="flex items-center justify-between w-full text-left group"
            aria-expanded={disclosureOpen}>
            <span className="text-xs font-semibold text-[#5A5A7A] uppercase tracking-wider group-hover:text-[#8B8B9A] transition-colors">
              SEBI Mandatory Disclosures & Risk Disclosure
            </span>
            <ChevronDown className={`h-4 w-4 text-[#5A5A7A] transition-transform duration-200 ${disclosureOpen ? 'rotate-180' : ''}`} />
          </button>
          <div className={disclosureOpen ? 'mt-3 text-[11px] text-[#5A5A7A] leading-relaxed space-y-2' : 'sr-only'}>
            <p>{SEBI_TEXT}</p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 text-center">
          <p className="text-[10px] text-[#5A5A7A]">© {year} Ashlar India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Add React import for Fragment
import React from 'react';
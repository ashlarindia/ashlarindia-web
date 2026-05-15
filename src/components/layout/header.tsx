'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown, ExternalLink, Phone } from 'lucide-react';
import {
  NAV_PRODUCTS,
  NAV_INVESTMENT,
  NAV_CALCULATORS,
  LOGIN_OPTIONS,
  SITE,
  getKycUrl,
} from '@/data/site-data';

// ─── Upstox Design Tokens ────────────────────────────────────────────────────
// Purple brand: #5367FF  Text dark: #1B1C31  Subtle bg: #F5F6FF
// Border: #E5E7EB  Muted text: #6B7280

interface NavLink { name: string; href: string; external?: boolean; badge?: string }

/* ── Desktop Dropdown with delay fix ── */
function Dropdown({ label, links, align = 'left', onClose, variant = 'default' }: {
  label: string; links: NavLink[]; align?: 'left' | 'right';
  onClose: () => void; variant?: 'default' | 'outlined';
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const openTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    // Small delay before opening to prevent accidental triggers
    openTimeoutRef.current = setTimeout(() => {
      setOpen(true);
    }, 50);
  };

  const handleMouseLeave = () => {
    // Clear any pending open timeout
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = null;
    }
    // Delay closing to allow moving to dropdown content
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
    };
  }, []);

  const triggerCls = variant === 'outlined'
    ? 'flex items-center gap-1.5 px-5 py-2.5 border-2 border-[#5367FF] text-[#5367FF] rounded-xl text-sm font-semibold hover:bg-[#5367FF] hover:text-white transition-all duration-150'
    : 'flex items-center gap-1 text-sm text-[#374151] hover:text-[#5367FF] font-medium transition-colors duration-150 px-3 py-2 rounded-lg hover:bg-[#F5F6FF]';

  return (
    <div 
      ref={ref} 
      className="relative" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <button className={triggerCls} aria-expanded={open} aria-haspopup="true">
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      <div className={[
        `absolute top-full ${align === 'right' ? 'right-0' : 'left-0'} mt-2 w-56`,
        'bg-white rounded-2xl border border-[#E5E7EB] py-2 shadow-xl shadow-black/8 z-50',
        'transition-all duration-150 origin-top',
        open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none',
      ].join(' ')}>
        {links.map((link) => link.external ? (
          <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer"
            onClick={() => { setOpen(false); onClose(); }}
            className="flex items-center justify-between px-4 py-3 text-sm text-[#374151] hover:text-[#5367FF] hover:bg-[#F5F6FF] transition-colors duration-100 group mx-1 rounded-xl">
            {link.name}
            <ExternalLink size={11} className="text-[#D1D5DB] group-hover:text-[#5367FF]" aria-hidden="true" />
          </a>
        ) : (
          <Link key={link.name} href={link.href} onClick={() => { setOpen(false); onClose(); }}
            className="flex items-center justify-between px-4 py-3 text-sm text-[#374151] hover:text-[#5367FF] hover:bg-[#F5F6FF] transition-colors duration-100 mx-1 rounded-xl">
            {link.name}
            {link.badge && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFF0F0] text-[#EF4444]">{link.badge}</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ── Mobile Accordion ── */
function MobileAccordion({ label, links, onClose, accentClass = 'text-[#1B1C31]' }: {
  label: string; links: NavLink[]; onClose: () => void; accentClass?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#F3F4F6]">
      <button onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between py-4 text-sm font-semibold ${accentClass}`}
        aria-expanded={open}>
        {label}
        <ChevronDown className={`h-4 w-4 text-[#9CA3AF] transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      {open && (
        <div className="pb-3 pl-4">
          {links.map((link) => link.external ? (
            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" onClick={onClose}
              className="flex items-center gap-1.5 py-2.5 text-sm text-[#6B7280] hover:text-[#5367FF]">
              {link.name} <ExternalLink size={11} aria-hidden="true" />
            </a>
          ) : (
            <Link key={link.name} href={link.href} onClick={onClose}
              className="flex items-center justify-between py-2.5 text-sm text-[#6B7280] hover:text-[#5367FF]">
              {link.name}
              {link.badge && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFF0F0] text-[#EF4444]">{link.badge}</span>}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main Header ── */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB]" style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}>

      {/* Slim top bar */}
      <div className="hidden lg:block bg-[#1B1C31]">
        <div className="max-w-7xl mx-auto px-6 py-1.5 flex items-center justify-between">
          <p className="text-[11px] text-[#9CA3AF] font-mono">
            SEBI: {SITE.sebi} · NSE: {SITE.nse} · BSE: {SITE.bse} · MCX: {SITE.mcx}
          </p>
          <a href="tel:+911800123943" className="flex items-center gap-1.5 text-[11px] text-[#9CA3AF] hover:text-white transition-colors duration-150">
            <Phone size={11} aria-hidden="true" />
            Toll Free: <span className="text-white font-semibold ml-1">{SITE.tollFree}</span>
            <span className="text-[#4B5563] mx-2">|</span>
            <span className="font-medium">{SITE.direct}</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[64px]">

         {/* Logo */}
<Link
  href="/"
  onClick={closeMobile}
  className="flex items-center"
>

  <Image
    src="/Ashlar_logo.jpeg"
    alt="Ashlar India"
    width={190}
    height={60}
    priority
    className="h-12 w-auto object-contain"
  />

</Link>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0" aria-label="Main navigation">
            <Link href="/" className="px-3 py-2 text-sm font-medium text-[#374151] hover:text-[#5367FF] rounded-lg hover:bg-[#F5F6FF] transition-colors duration-150">
              Home
            </Link>
            <Dropdown label="Products"    links={NAV_PRODUCTS}    onClose={closeMobile} />
            <Dropdown label="Investment"  links={NAV_INVESTMENT}  onClose={closeMobile} />
            <Link href="/mutual-funds" className="px-3 py-2 text-sm font-medium text-[#374151] hover:text-[#5367FF] rounded-lg hover:bg-[#F5F6FF] transition-colors duration-150">
              Mutual Funds
            </Link>
            <Dropdown label="Calculators" links={NAV_CALCULATORS} onClose={closeMobile} />
            <Link href="/contact" className="px-3 py-2 text-sm font-medium text-[#374151] hover:text-[#5367FF] rounded-lg hover:bg-[#F5F6FF] transition-colors duration-150">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Dropdown label="Login" links={LOGIN_OPTIONS} align="right" onClose={closeMobile} variant="outlined" />
            <Link href={getKycUrl('header')} target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#5367FF] hover:bg-[#4355E8] active:scale-[0.98] text-white text-sm font-semibold rounded-xl transition-all duration-150 shadow-lg shadow-[#5367FF]/25">
              Open Account
            </Link>
          </div>

          <button className="lg:hidden p-2 rounded-xl text-[#374151] hover:bg-[#F5F6FF] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}>
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#F3F4F6] bg-white px-4 py-3 max-h-[80vh] overflow-y-auto">
          <a href="tel:+911800123943"
            className="flex items-center gap-2 py-3.5 text-sm text-[#5367FF] font-semibold border-b border-[#F3F4F6]">
            <Phone size={14} aria-hidden="true" /> {SITE.tollFree}
          </a>
          <div className="border-b border-[#F3F4F6]">
            <Link href="/" onClick={closeMobile} className="block py-4 text-sm font-semibold text-[#1B1C31]">Home</Link>
          </div>
          <MobileAccordion label="Products"    links={NAV_PRODUCTS}    onClose={closeMobile} />
          <MobileAccordion label="Investment"  links={NAV_INVESTMENT}  onClose={closeMobile} />
          <div className="border-b border-[#F3F4F6]">
            <Link href="/mutual-funds" onClick={closeMobile} className="block py-4 text-sm font-semibold text-[#1B1C31]">Mutual Funds</Link>
          </div>
          <MobileAccordion label="Calculators" links={NAV_CALCULATORS} onClose={closeMobile} />
          <div className="border-b border-[#F3F4F6]">
            <Link href="/contact" onClick={closeMobile} className="block py-4 text-sm font-semibold text-[#1B1C31]">Contact</Link>
          </div>
          <MobileAccordion label="Login" links={LOGIN_OPTIONS} onClose={closeMobile} accentClass="text-[#5367FF]" />
          <div className="pt-4 pb-2">
            <Link href={getKycUrl('mobile-header')} target="_blank" rel="noopener noreferrer" onClick={closeMobile}
              className="block text-center py-3.5 bg-[#5367FF] hover:bg-[#4355E8] text-white text-sm font-semibold rounded-xl transition-all duration-150 shadow-lg shadow-[#5367FF]/25">
              Open Free Account →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
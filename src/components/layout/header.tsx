'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ExternalLink, Phone } from 'lucide-react';

// ── Types ────────────────────────────────────────────────────────────────────

interface NavLink {
  name: string;
  href: string;
  external?: boolean;
  badge?: string;
}

// ── Data ─────────────────────────────────────────────────────────────────────

const PRODUCTS: NavLink[] = [
  { name: 'Equity',      href: '/products/equity'      },
  { name: 'F&O',         href: '/products/fno'         },
  { name: 'Commodities', href: '/products/commodities' },
  { name: 'Currency',    href: '/products/currency'    },
  { name: 'IPO',         href: '/products/ipo', badge: 'Hot' },
  { name: 'Bonds',       href: '/products/bonds'       },
];

const INVESTMENT: NavLink[] = [
  { name: 'Mutual Funds',     href: '/mutual-funds'     },
  { name: 'Life Insurance',   href: '/life-insurance'   },
  { name: 'Corporate FDs',    href: '/corporate-fds'    },
  { name: 'Retirement Plans', href: '/retirement-plans' },
  { name: 'Child Plans',      href: '/child-plans'      },
];

// Fix #13 — Both calculators now listed in nav
const CALCULATORS: NavLink[] = [
  { name: 'Brokerage Calculator', href: '/brokerage-calculator' },
  { name: 'Margin Calculator',    href: '/margin-calculator'    },
];

const LOGIN_OPTIONS: NavLink[] = [
  { name: 'Online Trading',  href: 'https://trading.ashlarindia.com',          external: true },
  { name: 'Payment Gateway', href: 'https://ashlarindia.com/fund-transfer',    external: true },
  { name: 'Back Office',     href: 'https://bo.ashlarindia.com/Account/Login', external: true },
  { name: 'Webmail',         href: 'http://mail.ashlarindia.com/',             external: true },
  { name: 'Trading API',     href: 'https://ashlarindia.com/trading-api',      external: true },
];

// Fix #12 — Single consistent phone string
const TOLL_FREE  = '1800 123 9343';
const DIRECT_NO  = '0120-6633205';
const TEL_HREF   = 'tel:+918001239343';

// Fix #63 — Centralised Open Account URL with UTM params per page
export function getOpenAccountUrl(page: string = 'header') {
  return `https://kyc.wisdomcapital.in/?utm_source=ashlarindia&utm_medium=web&utm_campaign=${page}`;
}

// ── Reusable Dropdown ─────────────────────────────────────────────────────────

interface DropdownProps {
  label: string;
  links: NavLink[];
  align?: 'left' | 'right';
  onClose: () => void;
  variant?: 'default' | 'outlined';
}

function Dropdown({ label, links, align = 'left', onClose, variant = 'default' }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref             = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const triggerCls =
    variant === 'outlined'
      ? 'flex items-center gap-1.5 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-600 hover:text-white transition-all duration-150'
      : 'flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900 transition-colors duration-150 font-medium';

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={triggerCls}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      <div
        className={[
          `absolute top-full ${align === 'right' ? 'right-0' : 'left-0'} mt-2`,
          'w-52 bg-white rounded-xl border border-slate-200 py-1.5',
          'shadow-lg shadow-slate-200/60',
          'transition-all duration-150 origin-top z-50',
          open
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-95 pointer-events-none',
        ].join(' ')}
      >
        {links.map((link) =>
          link.external ? (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { setOpen(false); onClose(); }}
              className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-colors duration-100 group"
            >
              {link.name}
              <ExternalLink
                size={11}
                className="text-slate-300 group-hover:text-blue-400"
                aria-hidden="true"
              />
            </a>
          ) : (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => { setOpen(false); onClose(); }}
              className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-colors duration-100"
            >
              {link.name}
              {link.badge && (
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100">
                  {link.badge}
                </span>
              )}
            </Link>
          )
        )}
      </div>
    </div>
  );
}

// ── Mobile Accordion ──────────────────────────────────────────────────────────

interface MobileAccordionProps {
  label: string;
  links: NavLink[];
  onClose: () => void;
  accentClass?: string;
}

function MobileAccordion({ label, links, onClose, accentClass = 'text-slate-700' }: MobileAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-100">
      <button
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between py-3 text-sm font-semibold ${accentClass}`}
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="pb-2 pl-3">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center gap-1.5 py-2 text-sm text-slate-500 hover:text-blue-600"
              >
                {link.name}
                <ExternalLink size={11} aria-hidden="true" />
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between py-2 text-sm text-slate-500 hover:text-blue-600"
              >
                {link.name}
                {link.badge && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">
                    {link.badge}
                  </span>
                )}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

// ── Main Header ───────────────────────────────────────────────────────────────

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">

      {/* Fix #12 — Phone bar: one consistent display, one tel: link */}
      <div className="hidden md:block bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 flex items-center justify-between">
          <p className="text-xs text-slate-400">
            SEBI Reg: INZ000203739 · NSE: 13718 · BSE: 3302 · MCX: 56815
          </p>
          <div className="flex items-center gap-4">
            <a
              href={TEL_HREF}
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors duration-150"
            >
              <Phone size={11} aria-hidden="true" />
              Toll free: <span className="font-semibold">{TOLL_FREE}</span>
              <span className="text-slate-600 mx-1">·</span>
              Direct: <span className="font-semibold">{DIRECT_NO}</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Desktop nav bar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMobile}
            className="flex-shrink-0 text-xl font-bold tracking-tight text-slate-900"
          >
            Ashlar<span className="text-blue-600">Markets</span>
          </Link>

          {/* Desktop nav — single set of links, no duplicate DOM */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-150 rounded-lg hover:bg-slate-100"
            >
              Home
            </Link>

            <Dropdown label="Products"    links={PRODUCTS}     onClose={closeMobile} />
            <Dropdown label="Investment"  links={INVESTMENT}   onClose={closeMobile} />

            <Link
              href="/mutual-funds"
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-150 rounded-lg hover:bg-slate-100"
            >
              Mutual Funds
            </Link>

            {/* Fix #13 — Calculator dropdown with both calculators */}
            <Dropdown label="Calculators" links={CALCULATORS}  onClose={closeMobile} />

            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-150 rounded-lg hover:bg-slate-100"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Dropdown
              label="Login"
              links={LOGIN_OPTIONS}
              align="right"
              onClose={closeMobile}
              variant="outlined"
            />
            {/* Fix #63 — UTM params on Open Account CTA */}
            <Link
              href={getOpenAccountUrl('header')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white text-sm font-semibold rounded-lg transition-all duration-150"
            >
              Open account
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors duration-150"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen
              ? <X className="h-5 w-5" aria-hidden="true" />
              : <Menu className="h-5 w-5" aria-hidden="true" />
            }
          </button>
        </div>
      </div>

      {/* ── Mobile menu panel ── */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-3 max-h-[80vh] overflow-y-auto">

          {/* Fix #12 — Consistent phone in mobile menu */}
          <a
            href={TEL_HREF}
            className="flex items-center gap-2 py-3 text-sm text-blue-600 font-semibold border-b border-slate-100"
          >
            <Phone size={14} aria-hidden="true" />
            Toll free: {TOLL_FREE}
          </a>

          <div className="border-b border-slate-100">
            <Link href="/" onClick={closeMobile} className="block py-3 text-sm font-semibold text-slate-700">
              Home
            </Link>
          </div>

          <MobileAccordion label="Products"    links={PRODUCTS}    onClose={closeMobile} />
          <MobileAccordion label="Investment"  links={INVESTMENT}  onClose={closeMobile} />

          <div className="border-b border-slate-100">
            <Link href="/mutual-funds" onClick={closeMobile} className="block py-3 text-sm font-semibold text-slate-700">
              Mutual Funds
            </Link>
          </div>

          {/* Fix #13 — Calculators in mobile menu too */}
          <MobileAccordion label="Calculators" links={CALCULATORS} onClose={closeMobile} />

          <div className="border-b border-slate-100">
            <Link href="/contact" onClick={closeMobile} className="block py-3 text-sm font-semibold text-slate-700">
              Contact
            </Link>
          </div>

          <MobileAccordion
            label="Login"
            links={LOGIN_OPTIONS}
            onClose={closeMobile}
            accentClass="text-blue-600"
          />

          {/* Fix #63 — UTM params on mobile CTA */}
          <div className="pt-4 pb-2">
            <Link
              href={getOpenAccountUrl('header-mobile')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              className="block text-center py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all duration-150"
            >
              Open free account →
            </Link>
          </div>

        </div>
      )}
    </header>
  );
}
"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown, ExternalLink, Phone, Mail, Home,
  ArrowUpRight, Calendar,
} from "lucide-react";
import { SITE, getKycUrl } from "@/data/site-data";

/* =================================================================
   TYPES
   ================================================================= */
interface NavLink {
  name: string;
  href: string;
  external?: boolean;
  badge?: string;
  description?: string;
}

/* =================================================================
   DATA — Full Lakshmishree-style information architecture
   ================================================================= */

// ──────────── ABOUT US ────────────
const ABOUT_DROPDOWN: NavLink[] = [
  { name: "Company Profile",   href: "/about-ashlar/company-profile" },
  { name: "Founder's Desk",    href: "/about-ashlar/founders-desk" },
  { name: "Management's Desk", href: "/about-ashlar/managements-desk" },
  { name: "Mission & Vision",  href: "/about-ashlar/mission-vision" },
  { name: "Core Values",       href: "/about-ashlar/core-values" },
  { name: "Why Ashlar",        href: "/about-ashlar/why-ashlar" },
  { name: "Leadership Team",   href: "/about-ashlar/leadership" },
  { name: "Awards & Recognition", href: "/about-ashlar/awards" },
  { name: "Careers",           href: "/about-ashlar/careers" },
];

// ──────────── PRODUCTS ────────────
const PRODUCTS_DROPDOWN: NavLink[] = [
  { name: "Equity",        href: "/products/equity",        description: "Cash & delivery trading" },
  { name: "Derivatives",   href: "/products/derivatives",   description: "Futures & Options" },
  { name: "Commodities",   href: "/products/commodities",   description: "MCX & NCDEX trading" },
  { name: "Currency",      href: "/products/currency",      description: "FX & forex pairs" },
  { name: "Mutual Funds",  href: "/products/mutual-funds",  description: "Direct & regular plans" },
  { name: "Insurance",     href: "/products/insurance",     description: "Life & general cover" },
  { name: "IPO",           href: "/products/ipo",           description: "Apply via UPI",  badge: "Live" },
  { name: "DP Services",   href: "/products/dp",            description: "Demat & depository" },
  { name: "Bonds & NCDs",  href: "/products/bonds",         description: "Fixed income securities" },
];

// ──────────── RESEARCH ────────────
const RESEARCH_DROPDOWN: NavLink[] = [
  { name: "Daily Market View",       href: "/research/daily-view" },
  { name: "Stock Recommendations",   href: "/research/recommendations" },
  { name: "Technical Analysis",      href: "/research/technical" },
  { name: "Fundamental Reports",     href: "/research/fundamental" },
  { name: "Sector Reports",          href: "/research/sectors" },
  { name: "IPO Analysis",            href: "/research/ipo-analysis" },
  { name: "Result Updates",          href: "/research/results" },
  { name: "Telegram Channel",        href: "https://t.me/ashlarindia", external: true },
];

// ──────────── TOOLS / CALCULATORS ────────────
const TOOLS_DROPDOWN: NavLink[] = [
  { name: "Brokerage Calculator", href: "/calculators/brokerage" },
  { name: "Margin Calculator",    href: "/calculators/margin" },
  { name: "SIP Calculator",       href: "/calculators/sip" },
  { name: "SIP Planner",          href: "/calculators/sip-planner" },
  { name: "Goal Planner",         href: "/calculators/goal-planner" },
  { name: "Lumpsum Calculator",   href: "/calculators/lumpsum" },
  { name: "PPF Calculator",       href: "/calculators/ppf" },
  { name: "FD Calculator",        href: "/calculators/fd" },
  { name: "All Calculators",      href: "/calculators" },
];

// ──────────── IPO ────────────
const IPO_DROPDOWN: NavLink[] = [
  { name: "Current IPOs",      href: "/ipo/current",      badge: "Live" },
  { name: "Upcoming IPOs",     href: "/ipo/upcoming" },
  { name: "Listed IPOs",       href: "/ipo/listed" },
  { name: "IPO Performance",   href: "/ipo/performance" },
  { name: "SME IPOs",          href: "/ipo/sme" },
  { name: "How to Apply",      href: "/ipo/how-to-apply" },
  { name: "IPO News",          href: "/ipo/news" },
];

// ──────────── DOWNLOADS ────────────
const DOWNLOADS_DROPDOWN: NavLink[] = [
  { name: "Mobile Trading App",  href: "/downloads/mobile-app" },
  { name: "Desktop Application", href: "/downloads/desktop" },
  { name: "Web Trading Platform", href: "https://trading.ashlarindia.com", external: true },
  { name: "Mutual Fund App",     href: "/downloads/mf-app" },
  { name: "KYC Forms",           href: "/downloads/kyc-forms" },
  { name: "Account Opening Forms", href: "/downloads/account-forms" },
  { name: "Margin Documents",    href: "/downloads/margin-docs" },
  { name: "All Downloads",       href: "/downloads" },
];

// ──────────── KNOWLEDGE CENTER ────────────
const KNOWLEDGE_DROPDOWN: NavLink[] = [
  { name: "Blog",                href: "/blog" },
  { name: "Market Glossary",     href: "/knowledge/glossary" },
  { name: "Learn Stock Market",  href: "/knowledge/learn" },
  { name: "Trading Guides",      href: "/knowledge/guides" },
  { name: "Video Tutorials",     href: "/knowledge/videos" },
  { name: "FAQs",                href: "/knowledge/faqs" },
  { name: "Investor Education",  href: "/knowledge/investor-education" },
];

// ──────────── HELP & SUPPORT ────────────
const SUPPORT_DROPDOWN: NavLink[] = [
  { name: "Contact Us",          href: "/contact" },
  { name: "Raise a Ticket",      href: "/support/raise-ticket" },
  { name: "Track Ticket",        href: "/support/track-ticket" },
  { name: "Knowledge Base",      href: "/support/knowledge-base" },
  { name: "Quick Mail",          href: "/support/quick-mail" },
  { name: "Complaints",          href: "/support/complaints" },
  { name: "Branch Locator",      href: "/support/branches" },
  { name: "Escalation Matrix",   href: "/support/escalation" },
];

// ──────────── LOGIN ────────────
const LOGIN_DROPDOWN: NavLink[] = [
  { name: "Web Trading Login",   href: "https://trading.ashlarindia.com", external: true },
  { name: "Back Office Login",   href: "https://backoffice.ashlarindia.com", external: true },
  { name: "Mutual Fund Login",   href: "https://mf.ashlarindia.com", external: true },
  { name: "Partner Login",       href: "https://partners.ashlarindia.com", external: true },
];

// ──────────── UTILITY (top strip) ────────────
const UTILITY_LINKS: NavLink[] = [
  { name: "Get Bank Details",    href: "/account/bank-details" },
  { name: "Re-KYC",              href: "/account/re-kyc" },
  { name: "Media Coverage",      href: "/about-ashlar/media-coverage" },
  { name: "Events",              href: "/about-ashlar/events" },
  { name: "Event Gallery",       href: "/about-ashlar/event-gallery" },
  { name: "Business Partner",    href: "/about-ashlar/business-partner" },
];

/* =================================================================
   HOOKS
   ================================================================= */
const useScrolled = (threshold = 40) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
};

const useFormattedDate = () => {
  const [date, setDate] = useState("");
  useEffect(() => {
    const update = () => {
      setDate(
        new Date().toLocaleDateString("en-IN", {
          weekday: "long", month: "long", day: "numeric", year: "numeric",
        })
      );
    };
    update();
    const interval = setInterval(update, 60_000);
    return () => clearInterval(interval);
  }, []);
  return date;
};

/* =================================================================
   DESKTOP DROPDOWN
   ================================================================= */
interface DropdownProps {
  label: string;
  links: NavLink[];
  align?: "left" | "right";
  onClose: () => void;
  isActive?: boolean;
  tone?: "maroon" | "utility";
  wide?: boolean;
}

function Dropdown({
  label, links, align = "left", onClose, isActive, tone = "maroon", wide = false,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    openTimer.current = setTimeout(() => setOpen(true), 50);
  };
  const handleLeave = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (closeTimer.current) clearTimeout(closeTimer.current);
      if (openTimer.current) clearTimeout(openTimer.current);
    };
  }, []);

  const triggerCls = {
    maroon: [
      "inline-flex h-full items-center gap-1 px-3 text-[13px] font-medium transition-colors duration-200",
      isActive ? "bg-brand-700 text-white" : "text-white/90 hover:bg-brand-700/50 hover:text-white",
      "focus-visible:outline-none focus-visible:bg-brand-700",
    ].join(" "),
    utility: "inline-flex items-center gap-0.5 text-[12px] font-medium text-ink-100/80 transition-colors hover:text-white",
  }[tone];

  const hasDescriptions = links.some((l) => l.description);

  return (
    <div
      ref={containerRef}
      className={tone === "maroon" ? "relative h-full" : "relative"}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={(e) => {
        if (!containerRef.current?.contains(e.relatedTarget as Node)) handleLeave();
      }}
    >
      <button
        type="button"
        className={triggerCls}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <ChevronDown
          size={tone === "utility" ? 11 : 13}
          className={`transition-transform duration-200 ease-out-expo ${open ? "-rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className={[
              "absolute top-full origin-top",
              wide ? "w-[520px]" : hasDescriptions ? "w-80" : "w-60",
              align === "right" ? "right-0" : "left-0",
              "mt-1 rounded-xl border border-border bg-surface p-2 shadow-lg",
              "z-50",
            ].join(" ")}
            role="menu"
          >
            <div className={wide ? "grid grid-cols-2 gap-1" : ""}>
              {links.map((link) =>
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank" rel="noopener noreferrer"
                    onClick={() => { setOpen(false); onClose(); }}
                    className="group flex items-start justify-between gap-2 rounded-lg px-3 py-2 text-[13px] text-ink-700 transition-colors hover:bg-surface-subtle hover:text-ink-900"
                    role="menuitem"
                  >
                    <div className="min-w-0">
                      <p className="font-medium">{link.name}</p>
                      {link.description && (
                        <p className="mt-0.5 text-[11px] text-ink-400">{link.description}</p>
                      )}
                    </div>
                    <ExternalLink size={11} className="mt-1 shrink-0 text-ink-400 transition-colors group-hover:text-brand-600" aria-hidden="true" />
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => { setOpen(false); onClose(); }}
                    className="group flex items-start justify-between gap-2 rounded-lg px-3 py-2 text-[13px] text-ink-700 transition-colors hover:bg-surface-subtle hover:text-ink-900"
                    role="menuitem"
                  >
                    <div className="min-w-0">
                      <p className="font-medium">{link.name}</p>
                      {link.description && (
                        <p className="mt-0.5 text-[11px] text-ink-400">{link.description}</p>
                      )}
                    </div>
                    {link.badge && (
                      <span className="mt-0.5 shrink-0 rounded-full bg-success/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-success">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =================================================================
   MOBILE ACCORDION
   ================================================================= */
function MobileAccordion({
  label, links, onClose,
}: { label: string; links: NavLink[]; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border-subtle">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 text-[15px] font-medium text-ink-900"
      >
        {label}
        <ChevronDown
          size={16}
          className={`text-ink-400 transition-transform duration-200 ease-out-expo ${open ? "-rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.2 },
            }}
            className="overflow-hidden"
          >
            <div className="pb-3 pl-1">
              {links.map((link) =>
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank" rel="noopener noreferrer"
                    onClick={onClose}
                    className="flex items-center justify-between py-2.5 text-sm text-ink-600 hover:text-brand-700"
                  >
                    <span>{link.name}</span>
                    <ExternalLink size={11} className="text-ink-400" aria-hidden="true" />
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center justify-between py-2.5 text-sm text-ink-600 hover:text-brand-700"
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="rounded-full bg-success/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-success">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =================================================================
   HEADER
   ================================================================= */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled(40);
  const pathname = usePathname();
  const formattedDate = useFormattedDate();
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <header className=" top-0 z-50">

      {/* ============ Row 1: Top utility strip (dark) ============ */}
      <div className="hidden bg-ink-900 text-ink-100 lg:block">
        <div className="container flex h-9 items-center justify-between gap-4 text-[12px]">
          <p className="font-medium text-ink-100/70">
            Welcome to <span className="text-white">Ashlar India</span>
            <span className="ml-2 text-ink-100/40">·</span>
            <span className="ml-2 text-ink-100/50">Building trust since 2009</span>
          </p>
          <nav aria-label="Utility" className="flex items-center gap-x-5">
            {UTILITY_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[12px] font-medium text-ink-100/80 transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/support/raise-ticket"
              className="ml-1 inline-flex h-7 items-center rounded-md bg-brand-600 px-3 text-[12px] font-medium text-white transition-colors hover:bg-brand-700"
            >
              Raise a Ticket
            </Link>
          </nav>
        </div>
      </div>

      {/* ============ Row 2: Brand row (white, glassmorphic on scroll) ============ */}
      <div
        className={[
          "border-b transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ease-out-expo",
          scrolled
            ? "border-border-subtle bg-surface/85 shadow-xs backdrop-blur-md"
            : "border-transparent bg-surface",
        ].join(" ")}
      >
        <div className="container flex h-16 items-center justify-between gap-6">
          <Link
            href="/"
            onClick={closeMobile}
            className="flex shrink-0 items-baseline font-display text-2xl font-medium tracking-tight"
            aria-label="Ashlar India — home"
          >
            <span className="text-ink-900">Ashlar</span>
            <span className="text-brand-600">.</span>
            <span className="text-ink-500">India</span>
          </Link>
<div className="flex items-center gap-6">

  {/* PHONE */}
  <a
    href={`tel:${SITE.direct}`}
    className="hidden items-center gap-2 text-sm text-ink-700 transition-colors hover:text-brand-700 md:inline-flex"
  >
    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
      <Phone size={14} strokeWidth={1.75} />
    </span>

    <span className="flex flex-col leading-tight">
      <span className="text-[10px] uppercase tracking-wider text-ink-400">
        Call us
      </span>

      <span className="font-medium tabular-nums">
        {SITE.direct}
      </span>
    </span>
  </a>

  {/* EMAIL */}
  <a
    href="mailto:info@ashlarindia.com"
    className="hidden items-center gap-2 text-sm text-ink-700 transition-colors hover:text-brand-700 md:inline-flex"
  >
    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
      <Mail size={14} strokeWidth={1.75} />
    </span>

    <span className="flex flex-col leading-tight">
      <span className="text-[10px] uppercase tracking-wider text-ink-400">
        Email
      </span>

      <span className="font-medium">
        info@ashlarindia.com
      </span>
    </span>
  </a>

  {/* MOBILE MENU BUTTON */}
  <button
    type="button"
    className="rounded-lg p-2 text-ink-700 transition-colors hover:bg-surface-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 lg:hidden"
    onClick={() => setMobileOpen((v) => !v)}
    aria-label={mobileOpen ? "Close menu" : "Open menu"}
    aria-expanded={mobileOpen}
  >
    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
  </button>

</div>
        </div>
      </div>

      {/* ============ Row 3: Maroon main nav ============ */}
      <div className="hidden bg-brand-600 lg:block">
        <div className="container">
          <nav className="flex h-11 items-center" aria-label="Main">
            <Link
              href="/"
              className={[
                "inline-flex h-full items-center gap-1.5 px-3 text-[13px] font-medium transition-colors duration-200",
                isActive("/") ? "bg-brand-700 text-white" : "text-white/90 hover:bg-brand-700/50 hover:text-white",
              ].join(" ")}
              aria-label="Home"
            >
              <Home size={14} strokeWidth={2} />
              <span>Home</span>
            </Link>

            <Dropdown label="About"        links={ABOUT_DROPDOWN}      onClose={closeMobile} isActive={isActive("/about-ashlar")} tone="maroon" />
            <Dropdown label="Products"     links={PRODUCTS_DROPDOWN}   onClose={closeMobile} isActive={isActive("/products")}      tone="maroon" wide />
            <Dropdown label="Research"     links={RESEARCH_DROPDOWN}   onClose={closeMobile} isActive={isActive("/research")}      tone="maroon" />
            <Dropdown label="IPO"          links={IPO_DROPDOWN}        onClose={closeMobile} isActive={isActive("/ipo")}           tone="maroon" />
            <Dropdown label="Tools"        links={TOOLS_DROPDOWN}      onClose={closeMobile} isActive={isActive("/calculators")}   tone="maroon" />
            <Dropdown label="Downloads"    links={DOWNLOADS_DROPDOWN}  onClose={closeMobile} isActive={isActive("/downloads")}     tone="maroon" />
            <Dropdown label="Knowledge"    links={KNOWLEDGE_DROPDOWN}  onClose={closeMobile} isActive={isActive("/knowledge") || isActive("/blog")} tone="maroon" />
            <Dropdown label="Help"         links={SUPPORT_DROPDOWN}    onClose={closeMobile} isActive={isActive("/support") || isActive("/contact")} tone="maroon" />

            <div className="ml-auto flex h-full items-center">
              <Link
                href={getKycUrl("header")}
                target="_blank" rel="noopener noreferrer"
                className="group inline-flex h-full items-center gap-1.5 bg-accent-500 px-4 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-accent-600"
              >
                Invest Now
                <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Dropdown label="Login" links={LOGIN_DROPDOWN} align="right" onClose={closeMobile} tone="maroon" />
            </div>
          </nav>
        </div>
      </div>

      {/* ============ Row 4: Live ticker + date ============ */}
      <div className="hidden border-b border-border-subtle bg-surface-subtle lg:block">
        <div className="container flex h-8 items-center justify-between text-[11px]">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-blue-200 bg-blue-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-blue-700">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600" />
              BSE
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-700">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-600" />
              NSE
            </span>
            <span className="ml-3 hidden text-ink-500 sm:inline">
              SEBI · {SITE.sebi}
              <span className="mx-1.5 text-ink-300">·</span>
              MCX · {SITE.mcx}
            </span>
          </div>
          <div className="flex items-center gap-2 text-ink-500">
            <Calendar size={11} aria-hidden="true" />
            <time className="font-medium tabular-nums">{formattedDate}</time>
          </div>
        </div>
      </div>

      {/* ============ Mobile drawer ============ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobile}
              className="fixed inset-0 top-16 z-40 bg-ink-900/40 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
            />
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-0 top-16 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-border-subtle bg-surface lg:hidden"
            >
              <div className="container py-2">
                <a
  href={`tel:${SITE.tollFree.replace(/\s/g, "")}`}
  onClick={closeMobile}
  className="mb-1 flex items-center gap-3 rounded-lg bg-brand-50 px-3 py-3 text-sm font-medium text-brand-700"
>
  <Phone size={14} aria-hidden="true" />

  <span>Toll-free</span>

  <span className="ml-auto font-semibold tabular-nums">
    {SITE.tollFree}
  </span>
</a>

                <Link href="/" onClick={closeMobile} className="block border-b border-border-subtle py-4 text-[15px] font-medium text-ink-900">
                  Home
                </Link>

                <MobileAccordion label="About"      links={ABOUT_DROPDOWN}     onClose={closeMobile} />
                <MobileAccordion label="Products"   links={PRODUCTS_DROPDOWN}  onClose={closeMobile} />
                <MobileAccordion label="Research"   links={RESEARCH_DROPDOWN}  onClose={closeMobile} />
                <MobileAccordion label="IPO"        links={IPO_DROPDOWN}       onClose={closeMobile} />
                <MobileAccordion label="Tools"      links={TOOLS_DROPDOWN}     onClose={closeMobile} />
                <MobileAccordion label="Downloads"  links={DOWNLOADS_DROPDOWN} onClose={closeMobile} />
                <MobileAccordion label="Knowledge"  links={KNOWLEDGE_DROPDOWN} onClose={closeMobile} />
                <MobileAccordion label="Help"       links={SUPPORT_DROPDOWN}   onClose={closeMobile} />

                <p className="mt-6 mb-2 text-[11px] font-semibold uppercase tracking-wider text-ink-400">
                  Quick links
                </p>
                {UTILITY_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMobile}
                    className="block border-b border-border-subtle py-3 text-sm text-ink-700"
                  >
                    {link.name}
                  </Link>
                ))}
                <MobileAccordion label="Login" links={LOGIN_DROPDOWN} onClose={closeMobile} />

                <div className="mt-5 mb-3 grid gap-2">
                  <Link
                    href={getKycUrl("mobile-header")}
                    target="_blank" rel="noopener noreferrer"
                    onClick={closeMobile}
                    className="flex h-12 items-center justify-center gap-2 rounded-lg bg-accent-500 px-5 text-sm font-semibold text-white"
                  >
                    Invest Now
                    <ArrowUpRight size={15} />
                  </Link>
                  <Link
                    href="/support/raise-ticket"
                    onClick={closeMobile}
                    className="flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 text-sm font-medium text-ink-800"
                  >
                    Raise a Ticket
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
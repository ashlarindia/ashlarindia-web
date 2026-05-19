"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ExternalLink,
  Phone,
  Mail,
  Home,
  ArrowUpRight,
} from "lucide-react";
import { SITE, getKycUrl } from "@/data/site-data";
import { Container, Button } from "@/components/ui";

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
   DATA — Full information architecture
   ================================================================= */

// const ABOUT_DROPDOWN: NavLink[] = [
//   { name: "Company Profile",      href: "/about-ashlar/company-profile" },
//   { name: "Founder's Desk",       href: "/about-ashlar/founders-desk" },
//   { name: "Management's Desk",    href: "/about-ashlar/managements-desk" },
//   { name: "Mission & Vision",     href: "/about-ashlar/mission-vision" },
//   { name: "Core Values",          href: "/about-ashlar/core-values" },
//   { name: "Why Ashlar",           href: "/about-ashlar/why-ashlar" },
//   { name: "Leadership Team",      href: "/about-ashlar/leadership" },
//   { name: "Awards & Recognition", href: "/about-ashlar/awards" },
//   { name: "Careers",              href: "/about-ashlar/careers" },
// ];

const PRODUCTS_DROPDOWN: NavLink[] = [
  {
    name: "Equity",
    href: "/products/equity",
    description: "Cash & delivery trading",
  },
  {
    name: "Commodities",
    href: "/products/commodities",
    description: "MCX & NCDEX trading",
  },
  {
    name: "Currency",
    href: "/products/currency",
    description: "FX & forex pairs",
  },
  {
    name: "IPO",
    href: "/products/ipo",
    description: "Apply via UPI",
    badge: "Live",
  },
  {
    name: "DP Services",
    href: "/products/dp",
    description: "Demat & depository",
  },
  {
    name: "Bonds & NCDs",
    href: "/investments/bonds",
    description: "Fixed income securities",
  },
  {
    name: "Future & Options",
    href: "/products/futute-options",
    description: "Future Options & securities",
  },
];
const MF_DROPDOWN: NavLink[] = [
  {
    name: "Mutual Funds",
    href: "https://mf.ashlarindia.com/",
    description: "Invest in diversified mutual fund schemes",
  },
  {
    name: "Dematerialize Mutual Fund Units",
    href: "https://eservices.nsdl.com/cas-stmt-mf-conv/?src=dp&guid=Si2nFq1V",
    description: "Convert mutual fund holdings into demat format",
    external: true,
  },
];
const INVESTMENTS_DROPDOWN: NavLink[] = [
  {
    name: "General Insurance",
    href: "/investments/general-insurance",
    description: "Health, vehicle & asset protection",
  },
  {
    name: "Life Insurance",
    href: "/investments/life-insurance",
    description: "Long-term financial security plans",
  },
  {
    name: "Corporate FD's",
    href: "/investments/corporate-fd",
    description: "Fixed income investment products",
  },
  {
    name: "Bonds",
    href: "/investments/bonds",
    description: "Government & corporate securities",
    badge: "Popular",
  },
];
// const RESEARCH_DROPDOWN: NavLink[] = [
//   { name: "Daily Market View",     href: "/research/daily-view" },
//   { name: "Stock Recommendations", href: "/research/recommendations" },
//   { name: "Technical Analysis",    href: "/research/technical" },
//   { name: "Fundamental Reports",   href: "/research/fundamental" },
//   { name: "Sector Reports",        href: "/research/sectors" },
//   { name: "IPO Analysis",          href: "/research/ipo-analysis" },
//   { name: "Result Updates",        href: "/research/results" },
//   { name: "Telegram Channel",      href: "https://t.me/ashlarindia", external: true },
// ];

const TOOLS_DROPDOWN: NavLink[] = [
  { name: "Brokerage Calculator", href: "/calculators" },
  { name: "Margin Calculator", href: "/calculators" },
];

const IPO_DROPDOWN: NavLink[] = [
  { name: "Apply IPOs", href: "https://wisdomcapital.in/ipo" },
];

const DOWNLOADS_DROPDOWN: NavLink[] = [
  {
    name: "Mobile Trading App",
    href: "https://play.google.com/store/search?q=wisdom+neo&c=apps&hl=en-IN",
  },
  {
    name: "Desktop Application",
    href: "https://www1.ashlarindia.com/downloads",
  },
  {
    name: "Web Trading Platform",
    href: "https://trade.wisdomcapital.in/#!/app",
    external: true,
  },
  { name: "Mutual Fund App", href: "https://mf.ashlarindia.com/" },
  { name: "KYC Forms", href: "/downloads/kyc-forms" },
  { name: "Account Opening Forms", href: "/downloads/account-forms" },
  { name: "Margin Documents", href: "/downloads/margin-docs" },
  { name: "All Downloads", href: "/downloads" },
];

const KNOWLEDGE_DROPDOWN: NavLink[] = [
  { name: "Blog", href: "/knowledge/Blog" },
  { name: "Market Glossary", href: "/knowledge/Market-Glossary" },
  { name: "Learn Stock Market", href: "/knowledge/Learn-Stock-Market" },
  { name: "Trading Guides", href: "/knowledge/Trading-Guides" },
  { name: "Video Tutorials", href: "/knowledge/Video-Tutorials" },
  { name: "FAQs", href: "/knowledge/FAQs" },
  { name: "Investor Education", href: "/knowledge/Investor-Education" },
];

const SUPPORT_DROPDOWN: NavLink[] = [
  { name: "Contact Us", href: "/supports/contact-us" },
  { name: "Raise a Ticket", href: "/support/raise-ticket" },
  { name: "Track Ticket", href: "/support/track-ticket" },

  { name: "Quick Mail", href: "/support/quick-mail" },
  { name: "Complaints", href: "/support/complaints" },
  { name: "Branch Locator", href: "/support/branches" },
  { name: "Escalation Matrix", href: "/support/escalation" },
];

const LOGIN_DROPDOWN: NavLink[] = [
  {
    name: "Online Trading Login",
    href: "https://trade.wisdomcapital.in/#!/app",
    external: true,
  },
  {
    name: "Payment Gateway",
    href: "/login-options/payment-gateway/",
    external: true,
  },
  {
    name: "Back Office Login",
    href: "https://bo.ashlarindia.com/Account/Login",
    external: true,
  },
  {
    name: "WebMail Login",
    href: "http://mail.ashlarindia.com/",
    external: true,
  },
  { name: "Trading API", href: "/login-options/trading-api/", external: true },
];

const UTILITY_LINKS: NavLink[] = [
  { name: "Get Bank Details", href: "/account/bank-details" },
  { name: "Re-KYC", href: "/account/re-kyc" },
  { name: "Media Coverage", href: "/about-ashlar/media-coverage" },
  { name: "Events", href: "/about-ashlar/events" },
  { name: "Gallery", href: "/about-ashlar/event-gallery" },
  { name: "Business Partner", href: "/about-ashlar/business-partner" },
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
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
      );
    };
    update();
    const interval = setInterval(update, 60_000);
    return () => clearInterval(interval);
  }, []);
  return date;
};

/* =================================================================
   CONTACT BADGE — phone + email card in brand row
   ================================================================= */
const ContactBadge = ({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
}) => (
  <a
    href={href}
    className="hidden items-center gap-2 text-sm text-ink-700 transition-colors hover:text-brand-700 md:inline-flex"
  >
    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
      <Icon size={14} strokeWidth={1.75} />
    </span>
    <span className="flex flex-col leading-tight">
      <span className="text-[10px] uppercase tracking-wider text-ink-400">
        {label}
      </span>
      <span className="font-medium tabular-nums">{value}</span>
    </span>
  </a>
);

/* =================================================================
   DESKTOP DROPDOWN
   ================================================================= */
interface DropdownProps {
  label: string;
  links: NavLink[];
  align?: "left" | "right";
  onClose: () => void;
  isActive?: boolean;
  wide?: boolean;
}

function Dropdown({
  label,
  links,
  align = "left",
  onClose,
  isActive,
  wide = false,
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
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (closeTimer.current) clearTimeout(closeTimer.current);
      if (openTimer.current) clearTimeout(openTimer.current);
    };
  }, []);

  const triggerCls = [
    "inline-flex h-full items-center gap-1 px-3 text-[13px] font-medium transition-colors duration-200",
    isActive
      ? "bg-brand-700 text-white"
      : "text-white/90 hover:bg-brand-700/50 hover:text-white",
    "focus-visible:outline-none focus-visible:bg-brand-700",
  ].join(" ");

  const hasDescriptions = links.some((l) => l.description);

  return (
    <div
      ref={containerRef}
      className="relative h-full"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={(e) => {
        if (!containerRef.current?.contains(e.relatedTarget as Node))
          handleLeave();
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
          size={13}
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
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      setOpen(false);
                      onClose();
                    }}
                    className="group flex items-start justify-between gap-2 rounded-lg px-3 py-2 text-[13px] text-ink-700 transition-colors hover:bg-surface-subtle hover:text-ink-900"
                    role="menuitem"
                  >
                    <div className="min-w-0">
                      <p className="font-medium">{link.name}</p>
                      {link.description && (
                        <p className="mt-0.5 text-[11px] text-ink-400">
                          {link.description}
                        </p>
                      )}
                    </div>
                    <ExternalLink
                      size={11}
                      className="mt-1 shrink-0 text-ink-400 transition-colors group-hover:text-brand-600"
                      aria-hidden="true"
                    />
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setOpen(false);
                      onClose();
                    }}
                    className="group flex items-start justify-between gap-2 rounded-lg px-3 py-2 text-[13px] text-ink-700 transition-colors hover:bg-surface-subtle hover:text-ink-900"
                    role="menuitem"
                  >
                    <div className="min-w-0">
                      <p className="font-medium">{link.name}</p>
                      {link.description && (
                        <p className="mt-0.5 text-[11px] text-ink-400">
                          {link.description}
                        </p>
                      )}
                    </div>
                    {link.badge && (
                      <span className="mt-0.5 shrink-0 rounded-full bg-success/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-success">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                ),
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
  label,
  links,
  onClose,
}: {
  label: string;
  links: NavLink[];
  onClose: () => void;
}) {
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
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="flex items-center justify-between py-2.5 text-sm text-ink-600 hover:text-brand-700"
                  >
                    <span>{link.name}</span>
                    <ExternalLink
                      size={11}
                      className="text-ink-400"
                      aria-hidden="true"
                    />
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
                ),
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

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <header className="top-0 z-50">
      {/* ============ Row 1: Top utility strip (dark) ============ */}
      <div className="hidden bg-ink-900 text-ink-100 lg:block">
        <Container>
          <div className="flex h-9 items-center justify-between gap-4 text-[12px]">
            <p className="font-medium text-ink-100/70">
              {"Welcome to "}
              <span className="text-white">{"Ashlar India"}</span>
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
                {"Raise a Ticket"}
              </Link>
            </nav>
          </div>
        </Container>
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
        <Container>
          <div className="flex h-16 items-center justify-between gap-6">
            {/* Logo */}
            <Link
              href="/"
              onClick={closeMobile}
              className="flex shrink-0 items-center gap-2"
              aria-label="Ashlar India — home"
            >
              <div className="relative h-48 w-80 flex items-center justify-center">
                <Image
                  src="/logo-img2.png"
                  alt="Ashlar India Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Right cluster: phone + email + mobile menu */}
            <div className="flex items-center gap-6">
              <ContactBadge
                icon={Phone}
                label="Call us"
                value={SITE.direct}
                href={`tel:${SITE.direct}`}
              />
              <ContactBadge
                icon={Mail}
                label="Email"
                value="info@ashlarindia.com"
                href="mailto:info@ashlarindia.com"
              />

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
        </Container>
      </div>

      {/* ============ Row 3: Maroon main nav ============ */}
      <div className="hidden bg-brand-600 lg:block">
        <Container>
          <nav className="flex h-11 items-center" aria-label="Main">
            <Link
              href="/"
              className={[
                "inline-flex h-full items-center gap-1.5 px-3 text-[13px] font-medium transition-colors duration-200",
                isActive("/")
                  ? "bg-brand-700 text-white"
                  : "text-white/90 hover:bg-brand-700/50 hover:text-white",
              ].join(" ")}
              aria-label="Home"
            >
              <Home size={14} strokeWidth={2} aria-hidden="true" />
              <span>{"Home"}</span>
            </Link>

            {/* <Dropdown label="About"     links={ABOUT_DROPDOWN}     onClose={closeMobile} isActive={isActive("/about-ashlar")} /> */}
            <Dropdown
              label="Products"
              links={PRODUCTS_DROPDOWN}
              onClose={closeMobile}
              isActive={isActive("/products")}
              wide
            />
            <Dropdown
              label="Investments"
              links={INVESTMENTS_DROPDOWN}
              onClose={closeMobile}
              isActive={isActive("/investments")}
              wide
            />
            <Dropdown
              label="Mutual Funds"
              links={MF_DROPDOWN}
              onClose={closeMobile}
              isActive={isActive("/mutual-funds")}
              wide
            />
            {/* <Dropdown label="Research"  links={RESEARCH_DROPDOWN}  onClose={closeMobile} isActive={isActive("/research")} /> */}
            <Dropdown
              label="IPO"
              links={IPO_DROPDOWN}
              onClose={closeMobile}
              isActive={isActive("/ipo")}
            />
            <Dropdown
              label="Tools"
              links={TOOLS_DROPDOWN}
              onClose={closeMobile}
              isActive={isActive("/calculators")}
            />
            <Dropdown
              label="Downloads"
              links={DOWNLOADS_DROPDOWN}
              onClose={closeMobile}
              isActive={isActive("/downloads")}
            />
            <Dropdown
              label="Knowledge"
              links={KNOWLEDGE_DROPDOWN}
              onClose={closeMobile}
              isActive={isActive("/knowledge") || isActive("/blog")}
            />
            <Dropdown
              label="Help"
              links={SUPPORT_DROPDOWN}
              onClose={closeMobile}
              isActive={isActive("/support") || isActive("/contact")}
            />

            <div className="ml-auto flex h-full items-center">
              <a
                href={getKycUrl("header")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-full items-center gap-1.5 bg-accent-500 px-4 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-accent-600"
              >
                {"Invest Now"}
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <Dropdown
                label="Login"
                links={LOGIN_DROPDOWN}
                align="right"
                onClose={closeMobile}
              />
            </div>
          </nav>
        </Container>
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
              <Container>
                <div className="py-2">
                  <a
                    href={`tel:${SITE.tollFree.replace(/\s/g, "")}`}
                    onClick={closeMobile}
                    className="mb-1 flex items-center gap-3 rounded-lg bg-brand-50 px-3 py-3 text-sm font-medium text-brand-700"
                  >
                    <Phone size={14} aria-hidden="true" />
                    <span>{"Toll-free"}</span>
                    <span className="ml-auto font-semibold tabular-nums">
                      {SITE.tollFree}
                    </span>
                  </a>

                  <Link
                    href="/"
                    onClick={closeMobile}
                    className="block border-b border-border-subtle py-4 text-[15px] font-medium text-ink-900"
                  >
                    {"Home"}
                  </Link>

                  {/* <MobileAccordion label="About"     links={ABOUT_DROPDOWN}     onClose={closeMobile} /> */}
                  <MobileAccordion
                    label="Products"
                    links={PRODUCTS_DROPDOWN}
                    onClose={closeMobile}
                  />
                  {/* <MobileAccordion label="Research"  links={RESEARCH_DROPDOWN}  onClose={closeMobile} /> */}
                  <MobileAccordion
                    label="Investments"
                    links={INVESTMENTS_DROPDOWN}
                    onClose={closeMobile}
                  />
                  <MobileAccordion
                    label="Mutual Funds"
                    links={MF_DROPDOWN}
                    onClose={closeMobile}
                  />
                  <MobileAccordion
                    label="IPO"
                    links={IPO_DROPDOWN}
                    onClose={closeMobile}
                  />
                  <MobileAccordion
                    label="Tools"
                    links={TOOLS_DROPDOWN}
                    onClose={closeMobile}
                  />
                  <MobileAccordion
                    label="Downloads"
                    links={DOWNLOADS_DROPDOWN}
                    onClose={closeMobile}
                  />
                  <MobileAccordion
                    label="Knowledge"
                    links={KNOWLEDGE_DROPDOWN}
                    onClose={closeMobile}
                  />
                  <MobileAccordion
                    label="Help"
                    links={SUPPORT_DROPDOWN}
                    onClose={closeMobile}
                  />

                  <p className="mt-6 mb-2 text-[11px] font-semibold uppercase tracking-wider text-ink-400">
                    {"Quick links"}
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
                  <MobileAccordion
                    label="Login"
                    links={LOGIN_DROPDOWN}
                    onClose={closeMobile}
                  />

                  <div className="mt-5 mb-3 grid gap-2">
                    <Button
                      href={getKycUrl("mobile-header")}
                      external
                      variant="accent"
                      size="lg"
                      fullWidth
                      withArrow
                    >
                      {"Invest Now"}
                    </Button>
                    <Button
                      href="/support/raise-ticket"
                      variant="secondary"
                      size="md"
                      fullWidth
                    >
                      {"Raise a Ticket"}
                    </Button>
                  </div>
                </div>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

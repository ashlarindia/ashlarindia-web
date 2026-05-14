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
  ArrowUpRight,
} from "lucide-react";

import {
  NAV_PRODUCTS,
  NAV_INVESTMENT,
  NAV_CALCULATORS,
  LOGIN_OPTIONS,
  SITE,
  getKycUrl,
} from "@/data/site-data";

/* ---------------- types ---------------- */
interface NavLink {
  name: string;
  href: string;
  external?: boolean;
  badge?: string;
}

/* ---------------- data ---------------- */
const MUTUAL_FUNDS_ITEMS: NavLink[] = [
  {
    name: "Mutual Funds",
    href: "/mutual-funds/mutual-fund",
  },
  {
    name: "Dematerialize MF Units",
    href: "/mutual-funds/demat",
  },
];

/* ---------------- scroll hook ---------------- */
const useScrolled = (threshold = 16) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [threshold]);

  return scrolled;
};

/* ---------------- dropdown ---------------- */
interface DropdownProps {
  label: string;
  links: NavLink[];
  align?: "left" | "right";
  onClose: () => void;
  variant?: "default" | "outlined";
  isActive?: boolean;
}

function Dropdown({
  label,
  links,
  align = "left",
  onClose,
  variant = "default",
  isActive,
}: DropdownProps) {
  const [open, setOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const triggerBase =
    "inline-flex items-center gap-1 rounded-lg text-sm font-medium transition-colors duration-200";

  const triggerCls =
    variant === "outlined"
      ? `${triggerBase} h-9 border border-border bg-surface px-4 text-ink-800 hover:border-border-strong hover:bg-surface-muted`
      : `${triggerBase} h-9 px-3 ${
          isActive
            ? "text-brand-700"
            : "text-ink-700 hover:text-ink-900"
        }`;

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={triggerCls}
        onClick={() => setOpen((v) => !v)}
      >
        {label}

        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ease-out ${
            open ? "-rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -6,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -4,
              scale: 0.98,
            }}
            transition={{
              duration: 0.18,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={[
              "absolute top-full mt-2 w-64 origin-top",
              align === "right"
                ? "right-0"
                : "left-0",
              "z-50 rounded-xl border border-border bg-surface p-1.5 shadow-lg",
            ].join(" ")}
          >
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
                  className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm text-ink-700 transition-colors hover:bg-surface-subtle hover:text-ink-900"
                >
                  <span>{link.name}</span>

                  <ExternalLink
                    size={12}
                    className="text-ink-400 transition-colors group-hover:text-brand-600"
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
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-ink-700 transition-colors hover:bg-surface-subtle hover:text-ink-900"
                >
                  <span>{link.name}</span>

                  {link.badge && (
                    <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-medium text-brand-700">
                      {link.badge}
                    </span>
                  )}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- mobile accordion ---------------- */
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
        className="flex w-full items-center justify-between py-4 text-[15px] font-medium text-ink-900"
      >
        {label}

        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ease-out ${
            open ? "-rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
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
                      <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-medium text-brand-700">
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

/* ---------------- header ---------------- */
export default function Header() {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  const scrolled = useScrolled(16);

  const pathname = usePathname();

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href ||
    (href !== "/" &&
      pathname?.startsWith(href));

  return (
    <header className="sticky top-0 z-50">
      {/* Top Strip */}
      <div className="hidden bg-ink-900 text-ink-100/70 lg:block">
        <div className="container flex h-8 items-center justify-between text-[11px]">
          <p className="font-mono tabular-nums tracking-wide">
            SEBI · {SITE.sebi}

            <span className="mx-1.5 text-ink-100/30">
              ·
            </span>

            NSE · {SITE.nse}

            <span className="mx-1.5 text-ink-100/30">
              ·
            </span>

            BSE · {SITE.bse}

            <span className="mx-1.5 text-ink-100/30">
              ·
            </span>

            MCX · {SITE.mcx}
          </p>

          <a
            href={`tel:${SITE.tollFree.replace(
              /\s/g,
              ""
            )}`}
            className="flex items-center gap-2 text-ink-100/70 transition-colors hover:text-white"
          >
            <Phone size={11} />

            <span>Toll-free</span>

            <span className="font-medium text-white">
              {SITE.tollFree}
            </span>

            <span className="mx-1 text-ink-100/30">
              ·
            </span>

            <span>{SITE.direct}</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={[
          "border-b transition-all duration-300 ease-out",
          scrolled
            ? "border-border-subtle bg-surface/80 shadow-xs backdrop-blur-md"
            : "border-transparent bg-surface",
        ].join(" ")}
      >
        <div className="container flex h-16 items-center justify-between gap-6">
          {/* Logo */}
          <Link
  href="/"
  className="flex shrink-0 items-center"
>
 <div className="relative h-16 w-[260px] sm:h-40 sm:w-[300px]">
  <Image
    src="/logo-new.png"
    alt="Ashlar"
    fill
    sizes="(max-width: 768px) 320px, 420px"
    priority
    className="object-contain"
  />
</div>
</Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            <Link
              href="/"
              className={[
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200",
                isActive("/")
                  ? "text-brand-700"
                  : "text-ink-700 hover:text-ink-900",
              ].join(" ")}
            >
              Home
            </Link>

            <Dropdown
              label="Products"
              links={NAV_PRODUCTS}
              onClose={closeMobile}
              isActive={isActive("/products")}
            />

            <Dropdown
              label="Investment"
              links={NAV_INVESTMENT}
              onClose={closeMobile}
              isActive={isActive("/investment")}
            />

            <Dropdown
              label="Mutual Funds"
              links={MUTUAL_FUNDS_ITEMS}
              onClose={closeMobile}
              isActive={isActive("/mutual-funds")}
            />

            <Dropdown
              label="Calculators"
              links={NAV_CALCULATORS}
              onClose={closeMobile}
              isActive={isActive("/calculators")}
            />

            <Link
              href="/contact"
              className={[
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200",
                isActive("/contact")
                  ? "text-brand-700"
                  : "text-ink-700 hover:text-ink-900",
              ].join(" ")}
            >
              Contact
            </Link>
          </nav>

          {/* Right */}
          <div className="hidden items-center gap-2 lg:flex">
            <Dropdown
              label="Login"
              links={LOGIN_OPTIONS}
              align="right"
              onClose={closeMobile}
              variant="outlined"
            />

            <Link
              href={getKycUrl("header")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-9 items-center gap-1.5 rounded-lg bg-brand-600 px-4 text-sm font-medium text-white shadow-brand transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Open account

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Mobile Trigger */}
          <button
            type="button"
            className="rounded-lg p-2 text-ink-700 transition-colors hover:bg-surface-subtle lg:hidden"
            onClick={() =>
              setMobileOpen((v) => !v)
            }
          >
            {mobileOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
              className="fixed inset-0 top-16 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              initial={{
                opacity: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              transition={{
                duration: 0.25,
              }}
              className="fixed inset-x-0 top-16 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-border-subtle bg-surface lg:hidden"
            >
              <div className="container py-2">
                <a
                  href={`tel:${SITE.tollFree.replace(
                    /\s/g,
                    ""
                  )}`}
                  onClick={closeMobile}
                  className="mb-1 flex items-center gap-3 rounded-lg bg-brand-50 px-3 py-3 text-sm font-medium text-brand-700"
                >
                  <Phone size={14} />

                  <span>Toll-free</span>

                  <span className="ml-auto font-semibold tabular-nums">
                    {SITE.tollFree}
                  </span>
                </a>

                <Link
                  href="/"
                  onClick={closeMobile}
                  className="block border-b border-border-subtle py-4 text-[15px] font-medium text-ink-900"
                >
                  Home
                </Link>

                <MobileAccordion
                  label="Products"
                  links={NAV_PRODUCTS}
                  onClose={closeMobile}
                />

                <MobileAccordion
                  label="Investment"
                  links={NAV_INVESTMENT}
                  onClose={closeMobile}
                />

                <MobileAccordion
                  label="Mutual Funds"
                  links={MUTUAL_FUNDS_ITEMS}
                  onClose={closeMobile}
                />

                <MobileAccordion
                  label="Calculators"
                  links={NAV_CALCULATORS}
                  onClose={closeMobile}
                />

                <Link
                  href="/contact"
                  onClick={closeMobile}
                  className="block border-b border-border-subtle py-4 text-[15px] font-medium text-ink-900"
                >
                  Contact
                </Link>

                <MobileAccordion
                  label="Login"
                  links={LOGIN_OPTIONS}
                  onClose={closeMobile}
                />

                <div className="mb-3 mt-5">
                  <Link
                    href={getKycUrl(
                      "mobile-header"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobile}
                    className="flex h-12 items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 text-sm font-medium text-white shadow-brand"
                  >
                    Open free account

                    <ArrowUpRight size={15} />
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
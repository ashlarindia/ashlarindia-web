"use client";

import type { FC, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

interface ArrowLinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
  tone?: "brand" | "ink" | "white";
}

const Arrow: FC<{ size?: number }> = ({ size = 14 }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
  >
    <path
      d="M1 7h12m0 0L7.5 1.5M13 7l-5.5 5.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const tones = {
  brand: "text-brand-600 hover:text-brand-700",
  ink: "text-ink-700 hover:text-ink-900",
  white: "text-white/80 hover:text-white",
};

/**
 * The "Read more →" / "Explore →" pattern.
 * Used 12+ times across the site.
 */
const ArrowLink: FC<ArrowLinkProps> = ({
  href,
  children,
  external,
  className,
  tone = "brand",
}) => {
  const cls = cn(
    "group inline-flex items-center gap-1.5 text-sm font-medium transition-colors",
    tones[tone],
    className,
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        <Arrow />
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      <Arrow />
    </Link>
  );
};

export default ArrowLink;
export { Arrow };
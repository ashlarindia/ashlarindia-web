import type { FC, ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeTone = "brand" | "success" | "amber" | "ink" | "danger";
type BadgeSize = "sm" | "md";

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  size?: BadgeSize;
  className?: string;
  withDot?: boolean;
}

const tones: Record<BadgeTone, string> = {
  brand:   "border-brand-600/20 bg-brand-50 text-brand-700",
  success: "border-success/20 bg-success/5 text-success",
  amber:   "border-amber-600/20 bg-amber-50 text-amber-700",
  ink:     "border-border bg-ink-50 text-ink-800",
  danger:  "border-danger/20 bg-danger/5 text-danger",
};

const dotTones: Record<BadgeTone, string> = {
  brand: "bg-brand-600", success: "bg-success", amber: "bg-amber-600",
  ink: "bg-ink-400", danger: "bg-danger",
};

const sizes: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-[10px]",
  md: "px-2.5 py-0.5 text-[11px]",
};

const Badge: FC<BadgeProps> = ({ children, tone = "brand", size = "md", className, withDot }) => (
  <span
    className={cn(
      "inline-flex items-center gap-1.5 rounded-full border font-medium",
      tones[tone], sizes[size], className,
    )}
  >
    {withDot && <span className={cn("h-1.5 w-1.5 rounded-full", dotTones[tone])} aria-hidden="true" />}
    {children}
  </span>
);

export default Badge;
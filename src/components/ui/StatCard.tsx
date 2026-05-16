import type { FC } from "react";
import { cn } from "@/lib/cn";
import AnimatedNumber from "./motion/AnimatedNumber";

interface StatCardProps {
  /** Numeric value to animate. */
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  /** Render as a string (no count-up) — for non-numeric stats like "24/7" */
  staticValue?: string;
  className?: string;
  align?: "center" | "left";
}

const StatCard: FC<StatCardProps> = ({
  value, prefix, suffix, decimals, label, staticValue, className, align = "center",
}) => (
  <div className={cn("group relative px-6 py-8 sm:px-8 sm:py-10", align === "center" && "text-center", className)}>
    <p className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-medium leading-none tracking-tight text-brand-700">
      {staticValue ?? (
        <AnimatedNumber
          value={value}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
        />
      )}
    </p>
    <p className="mt-3 text-[11px] font-medium uppercase tracking-wider text-ink-500">
      {label}
    </p>
  </div>
);

export default StatCard;
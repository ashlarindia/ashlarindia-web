"use client";

import type { FC, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowUpRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "accent";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  withArrow?: boolean;
  fullWidth?: boolean;
}

interface AsLink extends BaseProps {
  href: string;
  external?: boolean;
  onClick?: never;
  disabled?: never;
  type?: never;
}

interface AsButton extends BaseProps {
  href?: never;
  external?: never;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

type ButtonProps = AsLink | AsButton;

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand-600 text-white shadow-brand hover:-translate-y-0.5 hover:bg-brand-700 active:translate-y-0",
  secondary: "border border-border bg-surface text-ink-800 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-sm",
  ghost: "text-ink-700 hover:bg-surface-subtle hover:text-ink-900",
  accent: "bg-accent-500 text-white hover:bg-accent-600",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-6 text-sm",
};

const base = cn(
  "group inline-flex items-center justify-center gap-1.5 rounded-lg font-medium",
  "transition-[transform,background-color,border-color,box-shadow,color] duration-300 ease-out-expo",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2",
  "disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0",
);

const Button: FC<ButtonProps> = ({
  children, variant = "primary", size = "md", className,
  withArrow = false, fullWidth, ...rest
}) => {
  const cls = cn(base, variants[variant], sizes[size], fullWidth && "w-full", className);

  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowUpRight
          size={size === "sm" ? 13 : 15}
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if ("href" in rest && rest.href) {
    if (rest.external) {
      return (
        <a href={rest.href} target="_blank" rel="noopener noreferrer" className={cls}>
          {content}
        </a>
      );
    }
    return <Link href={rest.href} className={cls}>{content}</Link>;
  }

  return (
    <button
      type={rest.type ?? "button"}
      onClick={rest.onClick}
      disabled={rest.disabled}
      className={cls}
    >
      {content}
    </button>
  );
};

export default Button;
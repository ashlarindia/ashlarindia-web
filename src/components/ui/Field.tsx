"use client";

import type { ChangeEvent, FC } from "react";
import { cn } from "@/lib/cn";

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
  rows?: number;
  maxLength?: number;
  inputMode?: "text" | "email" | "tel" | "numeric" | "search" | "url";
  className?: string;
  disabled?: boolean;
}

const baseInput = cn(
  "block w-full rounded-lg border border-border bg-surface px-4 py-3 text-[15px] text-ink-900",
  "placeholder:text-ink-400 transition-[border-color,box-shadow] duration-200",
  "focus:outline-none focus:border-brand-600 focus:ring-4 focus:ring-brand-600/10",
  "disabled:cursor-not-allowed disabled:opacity-60",
);

const Field: FC<FieldProps> = ({
  label, name, type = "text", required, value, placeholder,
  onChange, textarea, rows = 5, maxLength, inputMode, className, disabled,
}) => (
  <label className={cn("block", className)}>
    <span className="mb-1.5 flex items-center gap-1 text-xs font-medium text-ink-600">
      {label}
      {required && <span aria-hidden="true" className="text-brand-600">*</span>}
    </span>
    {textarea ? (
      <textarea
        name={name} required={required} rows={rows} value={value}
        placeholder={placeholder} maxLength={maxLength} onChange={onChange}
        disabled={disabled}
        className={cn(baseInput, "resize-none")}
      />
    ) : (
      <input
        type={type} name={name} required={required} value={value}
        placeholder={placeholder} onChange={onChange} inputMode={inputMode}
        disabled={disabled}
        className={baseInput}
      />
    )}
    {textarea && maxLength && (
      <span className="mt-1 block text-right text-[11px] tabular-nums text-ink-400">
        {value.length} / {maxLength}
      </span>
    )}
  </label>
);

export default Field;
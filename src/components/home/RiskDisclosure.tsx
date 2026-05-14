"use client";

import type { FC } from "react";
import { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, ChevronDown, ShieldCheck } from "lucide-react";
import SITE_CONTENT from "@/config/content";

export default function RiskDisclosure() {
  const { riskDisclosure } = SITE_CONTENT;
  const [isExpanded, setIsExpanded] = useState(false);
  const panelId = useId();

  return (
    <section
      aria-labelledby={`${panelId}-title`}
      className="border-y border-border-subtle bg-surface-subtle"
    >
      <div className="container py-5">
        {/* Toggle header — full-width, single affordance */}
        <button
          type="button"
          onClick={() => setIsExpanded((v) => !v)}
          aria-expanded={isExpanded}
          aria-controls={`${panelId}-panel`}
          className={[
            "group flex w-full items-start justify-between gap-4 rounded-lg",
            "text-left transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-subtle",
          ].join(" ")}
        >
          <div className="flex min-w-0 flex-1 items-start gap-3">
            {/* Icon — quiet amber tile */}
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100/70 text-amber-700 ring-1 ring-inset ring-amber-600/15">
              <AlertTriangle size={15} strokeWidth={1.75} />
            </div>

            <div className="min-w-0 flex-1">
              <p
                id={`${panelId}-title`}
                className="text-[13px] font-semibold tracking-tight text-ink-900"
              >
                {riskDisclosure.title}
              </p>

              {/* Inline summary — always visible, truncated by CSS, not JS */}
              <p
                className={[
                  "mt-1 text-[13px] leading-relaxed text-ink-600",
                  // Clamp to one line on mobile, two on sm+; full text when expanded
                  isExpanded ? "" : "line-clamp-1 sm:line-clamp-2",
                ].join(" ")}
              >
                <span className="font-medium text-ink-800">
                  {riskDisclosure.disclaimer.prefix}
                </span>{" "}
                {riskDisclosure.disclaimer.text}
              </p>
            </div>
          </div>

          {/* Chevron — rotates instead of swapping icons */}
          <div className="mt-1 flex shrink-0 items-center gap-1.5 text-xs font-medium text-ink-500 transition-colors group-hover:text-ink-800">
            <span className="hidden sm:inline">
              {isExpanded ? "Show less" : "Read more"}
            </span>
            <ChevronDown
              size={16}
              className={[
                "transition-transform duration-300 ease-out-expo",
                isExpanded ? "-rotate-180" : "rotate-0",
              ].join(" ")}
            />
          </div>
        </button>

        {/* Expandable panel */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              id={`${panelId}-panel`}
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
              }}
              className="overflow-hidden"
            >
              <div className="mt-5 grid gap-5 border-t border-border-subtle pt-5 lg:grid-cols-12 lg:gap-8">
                {/* Numbered risk bullets */}
                <ol className="space-y-2.5 lg:col-span-8">
                  {riskDisclosure.bullets.map((bullet: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-[13px] leading-relaxed text-ink-600">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-surface font-mono text-[10px] font-medium tabular-nums text-ink-500 ring-1 ring-inset ring-border-subtle">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-pretty">{bullet}</span>
                    </li>
                  ))}
                </ol>

                {/* Side panel: source + statutory disclaimer */}
                <aside className="space-y-4 lg:col-span-4">
                  <div className="rounded-lg border border-border bg-surface p-4">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={14} className="text-success" />
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">
                        Statutory notice
                      </p>
                    </div>
                    <p className="mt-2 text-[12px] leading-relaxed text-ink-600">
                      <span className="font-medium text-ink-800">
                        {riskDisclosure.disclaimer.prefix}
                      </span>{" "}
                      {riskDisclosure.disclaimer.text}
                    </p>
                  </div>

                  {riskDisclosure.source && (
                    <p className="text-[11px] leading-relaxed text-ink-400">
                      {riskDisclosure.source}
                    </p>
                  )}
                </aside>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
"use client";

import type { FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Arrow } from "./ArrowLink";
import Badge from "./Badge";

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  category?: string;
  categoryTone?: "brand" | "success" | "ink" | "amber";
  readTime?: string;
  featured?: boolean;
  locale?: string;
  className?: string;
}

const ArticleCard: FC<ArticleCardProps> = ({
  slug, title, excerpt, date, category, categoryTone = "brand",
  readTime, featured, locale = "en-IN", className,
}) => {
  const formattedDate = new Date(date).toLocaleDateString(locale, {
    day: "numeric", month: "short", year: "numeric",
  });

  return (
    <article className={cn("h-full", className)}>
      <Link
        href={`/blog/${slug}`}
        className={cn(
          "group relative flex h-full flex-col rounded-xl border border-border bg-surface",
          "transition-[transform,border-color,box-shadow] duration-300 ease-out-expo",
          "hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2",
          featured ? "p-7 lg:p-8" : "p-6",
        )}
      >
        <div className="mb-5 flex items-center gap-3">
          {category && <Badge tone={categoryTone}>{category}</Badge>}
          <span className="h-1 w-1 rounded-full bg-ink-200" aria-hidden="true" />
          <time dateTime={date} className="text-xs text-ink-400">{formattedDate}</time>
        </div>

        <h3 className={cn(
          "font-display font-medium tracking-tight text-ink-900 text-balance",
          "transition-colors duration-200 group-hover:text-brand-700",
          featured ? "text-2xl lg:text-[28px] leading-[1.2]" : "text-lg leading-snug",
        )}>
          {title}
        </h3>

        <p className={cn("mt-3 flex-1 text-ink-600 leading-relaxed", featured ? "text-[15px]" : "text-sm")}>
          {excerpt}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-border-subtle pt-4">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600">
            Read article <Arrow />
          </span>
          {readTime && <span className="text-xs text-ink-400">{readTime}</span>}
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;
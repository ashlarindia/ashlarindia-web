import type { Metadata } from "next";
import { Play } from "lucide-react";
import {
  PageHero,
  Section,
  StaggerGrid,
  StaggerItem,
  Badge,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Video Tutorials — Ashlar India",
  description: "Platform walkthroughs and educational trading videos.",
};

const videos = [
  {
    title: "Platform walkthrough",
    description: "Full tour of the Ashlar trading platform — orders, watchlists, charts, and more.",
    duration: "4:32",
    category: "Tutorial",
  },
  {
    title: "How to buy your first stock",
    description: "A step-by-step walkthrough of placing your very first trade.",
    duration: "3:15",
    category: "Beginner",
  },
  {
    title: "IPO application process",
    description: "How to apply for an IPO via UPI in under two minutes, end-to-end.",
    duration: "2:48",
    category: "IPO",
  },
  {
    title: "Reading candlestick charts",
    description: "Visual breakdown of the most common candlestick patterns traders watch.",
    duration: "6:10",
    category: "Analysis",
  },
];

export default function VideosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Watch & Learn"
        title="Video tutorials"
        description="Short, focused videos covering platform features, trading basics, and visual concept explainers."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Knowledge", href: "/knowledge" },
          { label: "Videos" },
        ]}
      />

      <Section>
        <StaggerGrid className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {videos.map((video) => (
            <StaggerItem key={video.title} className="h-full">
              <div className="group h-full overflow-hidden rounded-xl border border-border bg-surface transition-[transform,border-color,box-shadow] duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md">
                {/* Thumbnail placeholder with play button */}
                <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-brand-100 to-brand-50">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-dot-grid opacity-20"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-brand transition-transform duration-300 ease-out-expo group-hover:scale-110">
                      <Play size={20} strokeWidth={2.25} className="ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute right-3 top-3">
                    <Badge tone="ink" size="sm">
                      {video.duration}
                    </Badge>
                  </div>
                </div>

                <div className="p-5">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-brand-600">
                    {video.category}
                  </span>
                  <h3 className="mt-2 font-display text-base font-medium leading-snug tracking-tight text-ink-900">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {video.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Section>
    </main>
  );
}
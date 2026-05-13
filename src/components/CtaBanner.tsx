// components/CtaBanner.tsx
import Link from "next/link";

interface CtaBannerProps {
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
}

export default function CtaBanner({
  title,
  subtitle,
  primaryCta = { label: "Open Account in 5 Minutes", href: "/accounts/open-account" },
}: CtaBannerProps) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-[#0A1F44] px-8 py-14 md:px-14 md:py-16">
          {/* decorative circles */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#1E5EFF]/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-[#1E5EFF]/20 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
                {title}
              </h2>
              <p className="mt-3 text-base text-blue-100/80">{subtitle}</p>
            </div>
            <Link
              href={primaryCta.href}
              className="shrink-0 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0A1F44] transition hover:bg-[#1E5EFF] hover:text-white"
            >
              {primaryCta.label} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
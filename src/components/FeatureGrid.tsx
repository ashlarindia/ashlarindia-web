// components/FeatureGrid.tsx
interface Feature {
  icon: string; // emoji or short string
  title: string;
  description: string;
}

interface FeatureGridProps {
  heading: string;
  subheading?: string;
  features: Feature[];
}

export default function FeatureGrid({ heading, subheading, features }: FeatureGridProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-[#0A1F44] md:text-4xl">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-4 text-lg text-slate-600">{subheading}</p>
          )}
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#1E5EFF]/40 hover:shadow-xl hover:shadow-[#1E5EFF]/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF3FF] text-2xl">
                {f.icon}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-[#0A1F44]">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

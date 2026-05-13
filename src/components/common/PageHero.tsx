// ================================
// FILE: src/components/common/PageHero.tsx
// ================================

interface PageHeroProps {
  title: string;
  subtitle: string;
}

export default function PageHero({
  title,
  subtitle,
}: PageHeroProps) {
  return (
    <section className="bg-[#0b1023] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          {title}
        </h1>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-8">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
// ================================
// FILE: src/components/common/ContentSection.tsx
// ================================

interface ContentSectionProps {
  heading: string;
  content: string;
}

export default function ContentSection({
  heading,
  content,
}: ContentSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#0b1023] mb-6">
          {heading}
        </h2>

        <p className="text-gray-700 leading-8 text-lg whitespace-pre-line">
          {content}
        </p>
      </div>
    </section>
  );
}
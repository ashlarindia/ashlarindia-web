// src/components/parts/index.tsx

import React from "react";


// ======================================================
// HERO
// ======================================================

interface HeroProps {
  tag?: string;
  title: string;
  highlight?: string;
  text: string;
}

export function Hero({
  tag,
  title,
  highlight,
  text,
}: HeroProps) {
  return (
    <section className="bg-[#0b1023] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {tag && (
          <p className="text-blue-400 mb-5 uppercase tracking-wider">
            {tag}
          </p>
        )}

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          {title}{" "}

          {highlight && (
            <span className="text-blue-500">
              {highlight}
            </span>
          )}
        </h1>

        <p className="text-lg text-gray-300 max-w-3xl leading-8">
          {text}
        </p>

      </div>
    </section>
  );
}



// ======================================================
// PROSE
// ======================================================

interface ProseProps {
  children: React.ReactNode;
}

export function Prose({ children }: ProseProps) {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
}



// ======================================================
// FEATURES
// ======================================================

interface FeatureItem {
  t: string;
  d: string;
}

interface FeaturesProps {
  heading?: string;
  items: FeatureItem[];
}

export function Features({
  heading,
  items,
}: FeaturesProps) {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {heading && (
          <h2 className="text-4xl font-bold text-center mb-14">
            {heading}
          </h2>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
            >

              <h3 className="text-2xl font-semibold mb-4 text-[#0b1023]">
                {item.t}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.d}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}



// ======================================================
// CTA
// ======================================================

interface CTAProps {
  title: string;
  text: string;
}

export function CTA({
  title,
  text,
}: CTAProps) {
  return (
    <section className="py-24 bg-[#0b1023] text-white text-center">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {title}
        </h2>

        <p className="text-lg text-gray-300 mb-10">
          {text}
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 transition px-10 py-4 rounded-xl text-lg font-medium">
          Open Account
        </button>

      </div>

    </section>
  );
}



// ======================================================
// DISCLAIMER
// ======================================================

interface DisclaimerProps {
  text: string;
}

export function Disclaimer({
  text,
}: DisclaimerProps) {
  return (
    <section className="border-t py-8 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <p className="text-sm text-gray-500 leading-7 text-center">
          {text}
        </p>

      </div>

    </section>
  );
}
'use client';

import { useEffect, useState } from 'react';

const stats = [
  { label: 'Happy Clients', value: 50000, suffix: '+' },
  { label: 'Years of Experience', value: 10, suffix: '+' },
  { label: 'Products', value: 20, suffix: '+' },
  { label: 'Branches', value: 50, suffix: '+' },
];

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500 text-white"
>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-bold mb-2">
                {stat.value.toLocaleString('en-IN')}{stat.suffix}
              </div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
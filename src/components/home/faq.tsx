'use client';

import { useState } from 'react';

const faqs = [
  { q: 'How to open a demat account?', a: 'You can open online in 5 minutes with PAN and Aadhar.' },
  { q: 'What are the charges?', a: 'Brokerage starts at just ₹10 per trade. No hidden charges.' },
  { q: 'Is Ashlar India SEBI registered?', a: 'Yes, we are a SEBI registered stock broker.' },
  { q: 'How to withdraw money?', a: 'You can withdraw money anytime to your bank account.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border rounded-lg">
              <button 
                className="w-full p-4 text-left font-semibold flex justify-between"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.q}
                <span>{openIndex === i ? '▲' : '▼'}</span>
              </button>
              {openIndex === i && (
                <div className="p-4 pt-0 text-gray-600">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
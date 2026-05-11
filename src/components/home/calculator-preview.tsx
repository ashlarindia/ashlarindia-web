'use client';

import { useState } from 'react';

export default function CalculatorPreview() {
  const [investment, setInvestment] = useState(10000);
  const [years, setYears] = useState(5);
  const rate = 12; // 12% expected return

  const finalAmount = investment * Math.pow(1 + rate / 100, years);

  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Investment Calculator</h2>
        <p className="text-gray-600 text-center mb-8">Calculate your returns</p>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="mb-4">
            <label className="block mb-2">Investment Amount: ₹{investment}</label>
            <input 
              type="range" 
              min="1000" 
              max="100000" 
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2">Time Period: {years} years</label>
            <input 
              type="range" 
              min="1" 
              max="20" 
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div className="mt-6 p-4 bg-green-50 rounded">
            <p className="text-lg font-bold">Estimated Returns:</p>
            <p className="text-2xl text-green-600">₹{Math.round(finalAmount).toLocaleString('en-IN')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
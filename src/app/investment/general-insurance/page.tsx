'use client';

import Link from 'next/link';

export default function GeneralInsurancePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">General Insurance</h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Apart from life insurance, any other insurance product falls in the category of General Insurance. There are specialized insurance options including Health Insurance and Liability Insurance to cover for any medical treatment and legal complications respectively. You can insure your possessions against any kind of damage caused due to fire or theft. Opt for accidental insurance to cover against any damage caused in case of an accident.
          </p>

          <p>
            While buying General Insurance of any kind it is of great importance to assess your needs in an intelligent manner. Without an analysis of what you actually need, it would not be wise to invest in any insurance product. When buying Health Insurance it is important to consider what diseases it covers against and whether it suits your individual profile. It is also important to consider the repute of the insurance provider and its track record to ensure you do not face any problems later in settlement. For Liability Insurance also, you need to consider all aspects while buying insurance cover.
          </p>

          <p>
            When buying an option to protect your home, car or any other possessions, it is imperative to think about exactly what you would need to cover against any mishap. It should be taken as a general dictum while buying insurance that buying a policy without proper planning and thought can lead to a dissatisfaction outcome.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link 
            href="#quote-form" 
            className="inline-block px-6 py-2 bg-[#0066CC] text-white rounded hover:bg-[#0052A3] transition mr-4"
          >
            Get a Quote
          </Link>
          <Link 
            href="https://kyc.wisdomcapital.in/" 
            target="_blank"
            className="inline-block px-6 py-2 border border-[#0066CC] text-[#0066CC] rounded hover:bg-[#0066CC] hover:text-white transition"
          >
            Open Account
          </Link>
        </div>
      </div>
    </div>
  );
}
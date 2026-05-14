'use client';

import Link from 'next/link';

export default function IPOPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        
        <h1 className="text-3xl font-bold text-gray-900 mb-6">IPO</h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            An Initial Public Offering (IPO) is made when an unlisted company seeks a fresh issue of shares for raising capital for investment or expansion of business. The company decides at what price it would offer the shares to investors and they are traded at a designated stock exchange for an initial period of 3 days to 21 days. In case of government financial institutions, the minimum period is 3 days and the maximum period of initial public offer is up to 10 days.
          </p>

          <p>
            The company has to abide by a number of regulations formulated by SEBI, which oversees the whole process to ensure greater transparency keeping public interests in mind.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Investors should remember these points before applying for an IPO:</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>An objective assessment of the company and its track record</li>
            <li>Products or services offered by the company and its future growth prospects</li>
            <li>Past financial deals or mergers, break-ups or financial issues of the company, if any</li>
            <li>Other risk factors associated with the products, services or other aspects of the company</li>
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link 
            href="https://kyc.wisdomcapital.in/" 
            target="_blank"
            className="inline-block px-6 py-2 bg-[#0066CC] text-white rounded-lg hover:bg-[#0052A3] transition"
          >
            Apply IPO
          </Link>
        </div>
      </div>
    </div>
  );
}
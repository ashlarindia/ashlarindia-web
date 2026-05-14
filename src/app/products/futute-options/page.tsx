'use client';

import Link from 'next/link';

export default function FnOPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Discover the Power of F&O Trading</h1>
        
        <p className="text-gray-700 mb-6 leading-relaxed">
          Step into the world of futures trading and unlock a realm of exciting opportunities
        </p>

        <div className="space-y-4 mb-8">
          <div>
            <input 
              type="tel" 
              placeholder="Enter Your Mobile No." 
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <select className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg">
              <option>Disability Status</option>
              <option>Without Disability</option>
              <option>With Disability</option>
            </select>
          </div>
          <div>
            <Link 
              href="https://kyc.wisdomcapital.in/" 
              target="_blank"
              className="inline-block px-6 py-2 bg-[#0066CC] text-white rounded-lg hover:bg-[#0052A3] transition"
            >
              Open An Account
            </Link>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <Link href="#" className="inline-block px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
            GET IT ON Google Play
          </Link>
          <Link href="#" className="inline-block px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
            Available on the App Store
          </Link>
        </div>
      </div>
    </div>
  );
}
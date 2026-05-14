'use client';

import Link from 'next/link';

export default function BondsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Bonds</h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Bonds or government securities represent one of the best investment options available in the market. A government security is a financial instrument issued by the Central or State Governments. Only Central Government of India holds the power to issue both treasury bills and bonds or dated securities. State Governments are empowered to issue only bonds or dated securities, also known as State Development Loans (SDLs).
          </p>

          <p>
            Treasury bills represent short-term securities with a maturity period of less than one year and Government bonds or dated securities have a maturity period of one year or longer. Also known as T-bills, treasury bills are short term debt instruments with maturity period of less than a year. These are zero-coupon securities which are issued at a discount on face value and can be redeemed at face value at the date of maturity. There are no interest payments made on these securities before maturity but the difference between discounted value at the time of purchase and the face value represents the accumulated interest on them.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Government Dated Securities</h2>

          <p>
            There can be different types of government dated securities including fixed rate or floating rate bonds, zero coupon bonds, capital indexed bonds, bonds with call/put options, and special securities.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">The advantages of investing in government securities are:</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>No tax deduction at source</li>
            <li>There is no default risk involved</li>
            <li>Offers a high level of liquidity</li>
            <li>Interest payments paid on half-yearly basis</li>
            <li>Maturity could range from 2-30 years and securities can be redeemed at face value at the date of maturity</li>
          </ul>

          <p>
            Essentially, bonds can be issued by the government to raise funds for raising a public loan or to reduce fiscal deficit. The price at which a bond is issued is known as its face value and the rate of interest accumulated on it during the specified period of maturity is known as coupon rate.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link 
            href="https://kyc.wisdomcapital.in/" 
            target="_blank"
            className="inline-block px-6 py-2 bg-[#0066CC] text-white rounded hover:bg-[#0052A3] transition"
          >
            Open Account
          </Link>
        </div>
      </div>
    </div>
  );
}
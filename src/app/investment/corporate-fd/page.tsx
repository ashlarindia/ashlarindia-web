'use client';

import Link from 'next/link';

export default function CorporateFDsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Corporate Fixed Deposits</h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Fixed deposits present an attractive investment option for investors with assured returns and a fixed maturity period. Banks are the largest issuers of fixed deposits in India and they gain the trust of their investors based on their repute as financial institutions. Apart from banks, corporations also issue fixed deposit schemes to raise capital for investments in business activities. These corporate fixed deposits offer a higher rate of interest and guaranteed return at the date of maturity. However, there is also an element of risk involved because if the company faces financial problems, then secured creditors would have to be paid first before investors can get the interest on their fixed deposits.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Here are some of the benefits of investing in corporate fixed deposits:</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Interest rates on corporate fixed deposits are higher than bank fixed deposits</li>
            <li>Corporate fixed deposits are non-transferable in nature. Even if the FD receipt is lost, it cannot be misused and the FD holder can intimate the company to issue a duplicate receipt.</li>
            <li>Income tax would not be deducted at source if the income from interest is only upto 5000 INR in a financial year. If the income is more than 5000 INR, one can spread it in more than one company to keep income from one company below this limit.</li>
            <li>A prospective investor can study a company's growth, repute and reliability before making a fixed deposit.</li>
            <li>It is advisable to invest in corporate fixed deposits for the tenure of 1-3 years in keeping with the rate of interest. Making a short-term deposit would help switch to another company if the need arises.</li>
            <li>Nomination facility is available.</li>
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link 
            href="https://kyc.wisdomcapital.in/" 
            target="_blank"
            className="inline-block px-6 py-2 bg-[#0066CC] text-white rounded hover:bg-[#0052A3] transition"
          >
            Invest Now
          </Link>
        </div>
      </div>
    </div>
  );
}
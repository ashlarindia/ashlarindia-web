'use client';

import Link from 'next/link';

export default function LifeInsurancePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Life Insurance</h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Life insurance is meant to provide a family with financial protection in case of sudden demise or disability suffered by an earning member. Apart from this primary function, life insurance can also be used for tax-savings and wealth generation. There are different types of life insurance policies available to meet individual needs of the policybuyer. You can also fund your child's education and career by making a wise investment in a child plan which meets your needs. Basically, this product is meant to work as a contingency plan, whether it is against, death, disability, disease or even financial need.
          </p>

          <p>
            It is also important to consider your financial objectives while choosing your life insurance policy otherwise you might end up with an option which does not meet your needs in an effective manner. It is important to consider it as a risk management tool and not just another financial instrument. If you choose a policy which does not meet the needs of your dependents in case of your demise, then it would be of little use. An objective assessment of the future needs of your dependents is also critical in choosing what kind of life cover you need.
          </p>

          <p>
            If you have no dependents, even then life insurance can be useful to meet any debts or medical bills. You can also opt for retirement planning options to ensure you have a regular income post-retirement instead of leaving it unplanned. To secure your future, you can also opt for a savings plan which suits your personal needs.
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
'use client';

import Link from 'next/link';

export default function DPServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Depository Participant</h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            A depository is a place where something is deposit for storage and security in electronic form through registered Depository Participants. Basically, it's an institution that functions like a bank, similarly some bank hold the fund of investors, likewise, depository keep an account for investors securities (share, mutual fund debentures etc) hold by them in a dematerialized form. A frequent of services is offered to investors by Depository Participants on behalf of the depository.
          </p>

          <p>
            Banks, financial institutions, stock-brokers or clearing houses can be a Depository Participant in India by registering with Central Depository Services (India) Limited (CDSL) and National Securities Depository Limited (NSDL). Therefore, both of these depositories are registered with Securities and Exchange Board of India (SEBI).
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">An investor can open a Beneficial Owner (BO) account with a Depository Participant (DP) to avail of the depository services. The services provided by a Depository Participant (DP) and its benefits are listed below:</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Dematerialization of physical securities into electronic form</li>
            <li>Rematerialization of electronic securities into physical form</li>
            <li>Transfer of securities without any delay and without any need for stamp duty</li>
            <li>Change of beneficial ownership</li>
            <li>Settlement of trades</li>
            <li>A better method for storage of securities after dematerialization in electronic form</li>
            <li>It also prevents the risk of bad delivery, theft, forgery or delays associated with physical securities</li>
            <li>Lower charges for each transaction unlike physical securities</li>
            <li>Any shares arising out of bonus, split, consolidation or merger are credited into the Demat account of the investor automatically</li>
            <li>In case of change of address effected with DP, it is automatically registered with the firms whose shares an investor owns, thus eliminating the need for a lengthy procedure</li>
            <li>Greater transparency in management of securities</li>
          </ul>

          <p>
            The storage of securities in electronic form allows easier access, high level of convenience in handling of securities and ease of access which has led a greater number of investors to opt for depository services to achieve a high level of competence in trading and management of securities.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link 
            href="https://kyc.wisdomcapital.in/" 
            target="_blank"
            className="inline-block px-6 py-2 bg-[#0066CC] text-white rounded hover:bg-[#0052A3] transition"
          >
            Open Demat Account
          </Link>
        </div>
      </div>
    </div>
  );
}
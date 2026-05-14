'use client';

import Link from 'next/link';

export default function CurrencyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Currency</h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            The foreign exchange market is a financial market where foreign currencies are traded (bought and sold) frequently by commercial banks, foreign exchange brokers, multi-national corporations or individuals through a huge electronic network. Not only a few currencies but the foreign exchange market trades, exchanges and converts a large number of foreign currencies. Currency prices are usually influenced by a number of factors, some of which could be interest rates, inflation, and political and economic conditions of the country.
          </p>

          <p>
            Due to the involvement of a large number of foreign currencies, a high level of volatility is created in the foreign exchange market which causes a situation of emergence in the currency futures market in India. National Stock Exchange (NSE), Bombay Stock Exchange (BSE), MCX Stock Exchange (MCX-SX) and United Stock Exchange (USE) are the major currency exchanges in India through which banking institutions, importers and exporters can trade in currency derivatives. Therefore, this allows them the chance for hedging against the risk of currency volatility which is especially valuable for import and export businesses.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">The Forex market in India can be divided into two categories:</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Over-the-Counter (OTC) Market</strong> where spot, forwards and swaps are traded. An OTC market does not have any centralized exchange and operates through a network of intermediaries for trading derivatives.</li>
            <li><strong>Exchange traded currency market</strong> where only futures and options are traded. The introduction of exchange traded currency derivatives in India made it possible for individuals and retail investors to trade in the Indian Forex Market.</li>
          </ul>

          <p>
            Currently, Forex trading is allowed only on four major currency pairs in India. There are certain specifications within which trading can be carried out and any of these currency pairs can be traded only in keeping with minimum lot size. Additionally, there is usually a twelve month contract for the purpose with a pre-specified maturity date.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Find all the relevant information in tabular form here:</h2>

          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Currency Pair</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Lot Size</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 px-4 py-2">USD – INR</td><td className="border border-gray-300 px-4 py-2">1000 USD</td></tr>
              <tr><td className="border border-gray-300 px-4 py-2">EUR – INR</td><td className="border border-gray-300 px-4 py-2">1000 EUR</td></tr>
              <tr><td className="border border-gray-300 px-4 py-2">GBP – INR</td><td className="border border-gray-300 px-4 py-2">1000 GBP</td></tr>
              <tr><td className="border border-gray-300 px-4 py-2">JPY – INR</td><td className="border border-gray-300 px-4 py-2">100000 JPY</td></tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link 
            href="https://kyc.wisdomcapital.in/" 
            target="_blank"
            className="inline-block px-6 py-2 bg-[#0066CC] text-white rounded-lg hover:bg-[#0052A3] transition"
          >
            Open Trading Account
          </Link>
        </div>
      </div>
    </div>
  );
}
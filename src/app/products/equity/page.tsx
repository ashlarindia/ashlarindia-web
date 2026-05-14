'use client';

import Link from 'next/link';

export default function EquityPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        
        {/* Hero */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Equity</h1>
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Equity market gives companies a medium to increase desirable capital and give investors an opportunity for profit by allowing those companies' stock share to be traded through stock exchanges that include National Stock Exchange (NSE), Bombay Stock Exchange (BSE) and MCX Stock Exchange (MCX-SX) in India. Basically, it represents ownership of stockholders in a company. In future if the company performs well, then stockholder lies in accumulating profits through grow in the value of stocks. Often, Investment in equity offers promising returns based on how-well you select your stocks and the competence with which you hold-up.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Here are few reasons why you should consider investing in equities:</h2>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Capital growth in the long term based on boost in market price of the shares</li>
            <li>High level of liquidity</li>
            <li>Dividends paid by the company to shareholders based on annual profits</li>
            <li>The kind of flexibility afforded to investors in choice of companies, number of shares, price and form of transaction.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Investors can also trade in equities in the secondary market in numerous segments as explained below:</h2>
          
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Intra Day Trading</strong> – Buying/Selling of securities takes place on the same trading day</li>
            <li><strong>Futures</strong> – Investors reach an agreement to buy or sell at an agreed price at a future date</li>
            <li><strong>Option</strong> – It is a contract which gives the right to an investor to buy or sell at a later date without the obligation to do so</li>
            <li><strong>Delivery Based Transactions</strong> – It involves buying at a low price and selling at a high price at a later date</li>
          </ul>

          <p>
            Moreover, before buying a stock in various companies an investor should understand its basic functioning, future growth prospects and nature of business to make sure it is a praiseworthy investment. Meanwhile, we must realize that market volatility can be somewhat high in the short-term which can bring more risks than opportunities for novice investors. Instead of buying share of one companies split your investment in various companies on the basis past and current performance, so that you ease the chances of sudden loss and could anticipate for the excellent growth in future. Ashlar India, brings a dedicated team of experts to assist our valuable clients to ensure outstanding returns to meet their expectations.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link 
            href="https://kyc.wisdomcapital.in/" 
            target="_blank"
            className="inline-block px-6 py-2 bg-[#0066CC] text-white rounded hover:bg-[#0052A3] transition"
          >
            Open Free Account
          </Link>
        </div>
      </div>
    </div>
  );
}
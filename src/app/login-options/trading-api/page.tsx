"use client";

import Link from "next/link";

export default function TradingApiPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        {/* TITLE */}

        <div className="text-center">
          <p className="text-sm text-slate-600">
            ASHLAR SECURITIES brings to you best in class Trading APIs
          </p>

          <h1 className="mt-3 text-5xl font-bold text-slate-900">
            Trading{" "}
            <span className="text-[#9B2C1F]">
              API
            </span>
          </h1>

          <p className="mt-4 text-sm text-slate-600">
            Trade on your own trading platform while using our REST API
          </p>

          <div className="mx-auto mt-6 h-[2px] w-40 bg-slate-200" />
        </div>

        {/* WHAT IS API */}

        <div className="mt-14">
          <h2 className="text-2xl font-semibold text-slate-900">
            What are ASHLAR APIs?
          </h2>

          <div className="mt-5 space-y-5 text-sm leading-7 text-slate-700">
            <p>
              ASHLAR API is a Trading API based on REST
              architecture. You can build your own trading
              or investment platform, integrate with our
              systems, and create a smooth trading
              experience using our APIs.
            </p>

            <p>
              Executing orders in real time, monitoring
              positions, and managing portfolios becomes
              easier with our API infrastructure.
              Customized interfaces and trading tools allow
              traders to create personalized trading
              experiences.
            </p>
          </div>
        </div>

        {/* API TYPES */}

        <div className="mt-14">
          <h2 className="text-2xl font-semibold text-slate-900">
            Two Types of APIs Available
          </h2>

          <div className="mt-8 space-y-8">
            {/* TRADING API */}

            <div className="rounded-md border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Trading API
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-700">
                Trading APIs help users place orders,
                monitor positions, and manage portfolios
                directly from their own trading systems.
              </p>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>
                  Real-time order execution
                </li>

                <li>
                  Portfolio & position management
                </li>

                <li>
                  Custom trading platform integration
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="https://ashlarindia.com/xts-trading-front-end-api/"
                  target="_blank"
                  className="text-sm font-medium text-[#9B2C1F] underline"
                >
                  Trading API Documentation
                </Link>

                <Link
                  href="https://trade.wisdomcapital.in/dashboard#!/login"
                  target="_blank"
                  className="text-sm font-medium text-[#9B2C1F] underline"
                >
                  API Sign Up
                </Link>
              </div>
            </div>

            {/* MARKET DATA API */}

            <div className="rounded-md border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Market Data API
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-700">
                Market Data APIs provide access to live
                market quotes, streaming data, and market
                symbols linked to exchanges.
              </p>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>
                  Real-time market data
                </li>

                <li>
                  HTTP streaming support
                </li>

                <li>
                  Symbol and quote access
                </li>
              </ul>

              <div className="mt-6">
                <Link
                  href="https://ashlarindia.com/xts-market-data-front-end-api/"
                  target="_blank"
                  className="text-sm font-medium text-[#9B2C1F] underline"
                >
                  Market Data API Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* HOW API WORKS */}

        <div className="mt-14">
          <h2 className="text-2xl font-semibold text-slate-900">
            How do these APIs work?
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-700">
            Users need an active Equity trading account
            with ASHLAR to generate API authentication
            keys. Once the developer account is activated,
            API access can be used instantly. A flat fee
            structure applies for API access.
          </p>
        </div>

        {/* NON DEVELOPERS */}

        <div className="mt-14">
          <h2 className="text-2xl font-semibold text-slate-900">
            Can non-developers use these APIs?
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-700">
            Yes. Traders can share their trading logic
            with software developers who can build tools
            and strategies using languages like Python,
            Java, .NET, C++, Excel VBA and more.
          </p>

          <p className="mt-5 text-sm leading-7 text-slate-700">
            APIs can also integrate with platforms like
            NinjaTrader and Amibroker.
          </p>
        </div>

        {/* SIMULATION */}

        <div className="mt-14">
          <h2 className="text-2xl font-semibold text-slate-900">
            Simulation Trading
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-700">
            Ashlar provides simulation trading support
            before users go live with their strategies.
          </p>

          <p className="mt-4 text-sm">
            Contact:
            <a
              href="mailto:itsupport@ashlarindia.com"
              className="ml-2 text-[#9B2C1F] underline"
            >
              itsupport@ashlarindia.com
            </a>
          </p>
        </div>

        {/* BENEFITS */}

        <div className="mt-14">
          <h2 className="text-2xl font-semibold text-slate-900">
            Key Benefits of ASHLAR API
          </h2>

          <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
            <li>
              Build your own trading interface
            </li>

            <li>
              Test your programs in simulation mode
            </li>

            <li>
              Secure and efficient API architecture
            </li>

            <li>
              Multiple language compatibility
            </li>

            <li>
              Personalized developer support
            </li>
          </ul>
        </div>

        {/* API DOC */}

        <div className="mt-14">
          <h2 className="text-2xl font-semibold text-slate-900">
            API Documentation
          </h2>

          <div className="mt-5">
            <Link
              href="https://ashlarindia.com/xtsapi/"
              target="_blank"
              className="text-sm font-medium text-[#9B2C1F] underline"
            >
              Trading API Documentation
            </Link>
          </div>
        </div>

        {/* CTA */}

        <div className="mt-16 rounded-md border border-slate-200 bg-slate-50 px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Open Your Account Today For Instant
                Market Access!
              </h3>
            </div>

            <Link
              href="https://trade.wisdomcapital.in/dashboard#!/login"
              target="_blank"
              className="rounded-full bg-[#9B2C1F] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#7f2318]"
            >
              Open Account Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
"use client";

import Link from "next/link";

export default function FreezingBlockingPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        
        {/* Heading */}

        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#24324B]">
            Freezing &{" "}
            <span className="text-[#B53328]">
              Blocking
            </span>
          </h1>

          <div className="mx-auto mt-5 h-[1px] w-80 bg-slate-200" />
        </div>

        {/* Main Content */}

        <div className="mt-16 text-[15px] leading-9 text-black">
          <p>
            Facility of voluntary freezing/blocking of Trading Accounts by Clients.
            We do hereby inform and notify you that we have made a policy in
            accordance with the provisions of SEBI Circular no.
            SEBI/HO/MIRSD/POD-1/P/CIR/2024/4 dated January 12, 2024 and
            NSE Circular No. NSE/INSP/61529 dated April 08, 2024 on
            "Framework for Trading Members to provide the facility of voluntary
            freezing/blocking the online access of the trading account of clients."
            Further, we have formulated the policy and process in line with the
            framework as prescribed by Exchange that forms part of our Risk
            Management Policy.
          </p>

          <p className="mt-10">
            In further to this, with effect from 01.07.2024 we make available to
            the Clients two modes of communications through which Client may
            request for voluntary freezing/blocking the online access of trading
            account on account of suspicious activities and details thereof are
            given as follows:
          </p>

          {/* Contact Details */}

          <div className="mt-10 space-y-3">
            <p>
              Dedicated email id -{" "}
              <a
                href="mailto:stoptrade@ashlarindia.com"
                className="text-[#4A7CFF]"
              >
                stoptrade@ashlarindia.com
              </a>
            </p>

            <p>
              CALL on:{" "}
              <a
                href="tel:01206633205"
                className="text-[#4A7CFF]"
              >
                0120-6633205 / 231
              </a>
            </p>
          </div>

          {/* Bottom Content */}

          <div className="mt-14">
            <p>
              The Client may send his/her request for voluntary
              freezing/blocking the online access of trading account at email id
              :-{" "}
              <a
                href="mailto:stoptrade@ashlarindia.com"
                className="text-[#4A7CFF]"
              >
                stoptrade@ashlarindia.com
              </a>{" "}
              from his/her registered email id, and/or sending Call from
              his/her registered mobile number with us on{" "}
              <a
                href="tel:01206633205"
                className="text-[#4A7CFF]"
              >
                0120-6633205/231
              </a>{" "}
              in between 09:00 am to 05:00 pm
            </p>

            {/* PDF BUTTON */}

            <div className="mt-8">
              <Link
                href="/pdf/freezing-blocking-policy.pdf"
                target="_blank"
                className="font-semibold text-[#4A7CFF] hover:underline"
              >
                For more details, click here
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
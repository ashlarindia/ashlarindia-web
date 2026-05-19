"use client";

import Link from "next/link";

const kycStatus = [
  {
    status: "Registered",
    meaning: "KYC is registered successfully",
    action: "No action required",
  },
  {
    status: "Under Process",
    meaning:
      "KYC verification is under review and may take a few working days.",
    action: "Wait for KYC verification to complete",
  },
  {
    status: "On Hold / Rejected",
    meaning:
      "KYC documents are incomplete, mismatched, or require correction.",
    action:
      "Submit updated PAN, address proof, and corrected KYC details.",
  },
];

export default function KRAInquiryPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        {/* TITLE */}

        <div className="text-center">
          <h1 className="text-5xl font-bold text-slate-900">
            KRA{" "}
            <span className="text-[#9B2C1F]">
              Inquiry
            </span>
          </h1>

          <div className="mx-auto mt-6 h-[2px] w-40 bg-slate-200" />
        </div>

        {/* ABOUT */}

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-slate-900">
            What is KYC/KRA and how to check its status?
          </h2>

          <div className="mt-8 space-y-6 text-sm leading-8 text-slate-700">
            <p>
              KRA provides centralization of KYC records
              in the securities market. Once a client
              completes KYC with a SEBI registered
              intermediary, the same KYC can be accessed
              by other SEBI registered intermediaries.
            </p>

            <p>
              Investors opening trading, demat, or mutual
              fund accounts must complete KYC verification
              by submitting PAN, address proof, and
              supporting documents.
            </p>

            <p>
              If any KYC details change, clients should
              update the information by submitting a KYC
              modification request with valid supporting
              documents.
            </p>
          </div>
        </div>

        {/* STEPS */}

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-slate-900">
            Steps to Check Your KYC Status
          </h2>

          <ul className="mt-8 list-disc space-y-4 pl-6 text-sm leading-7 text-slate-700">
            <li>
              Visit the official CVL KRA website.
            </li>

            <li>
              Enter your 10-digit PAN number and Captcha.
            </li>

            <li>
              Click on Submit to view your KYC status.
            </li>

            <li>
              Your status may appear as Registered,
              Validated, Under Process, or On Hold.
            </li>
          </ul>

          <div className="mt-8">
            <Link
              href="https://www.cvlkra.com/"
              target="_blank"
              className="inline-flex rounded-full bg-[#9B2C1F] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#7f2318]"
            >
              Check KYC Status
            </Link>
          </div>
        </div>

        {/* TABLE */}

        <div className="mt-20">
          <h2 className="text-3xl font-semibold text-slate-900">
            What does each KYC status imply?
          </h2>

          <div className="mt-8 overflow-hidden rounded-md border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-5 py-4 text-left font-semibold text-slate-900">
                    Status
                  </th>

                  <th className="px-5 py-4 text-left font-semibold text-slate-900">
                    What Does It Mean?
                  </th>

                  <th className="px-5 py-4 text-left font-semibold text-slate-900">
                    Required Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {kycStatus.map((item) => (
                  <tr
                    key={item.status}
                    className="border-t border-slate-200"
                  >
                    <td className="px-5 py-5 font-medium text-slate-900">
                      {item.status}
                    </td>

                    <td className="px-5 py-5 text-slate-700">
                      {item.meaning}
                    </td>

                    <td className="px-5 py-5 text-slate-700">
                      {item.action}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* KRA LINKS */}

        <div className="mt-14">
          <h2 className="text-3xl font-semibold text-slate-900">
            KRA Websites
          </h2>

          <div className="mt-6 flex flex-wrap gap-4">
            {[
              {
                name: "CVL KRA",
                href: "https://www.cvlkra.com/",
              },
              {
                name: "NDML",
                href: "https://kra.ndml.in/",
              },
              {
                name: "CAMS",
                href: "https://www.camskra.com/",
              },
              {
                name: "Karvy",
                href: "https://www.karvykra.com/",
              },
              {
                name: "DOTEX",
                href: "https://www.nsekra.com/",
              },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                className="rounded-md border border-slate-200 px-5 py-3 text-sm font-medium text-[#9B2C1F] transition hover:bg-slate-50"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* SUPPORT */}

        <div className="mt-16 rounded-md border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-semibold text-slate-900">
            Need Help?
          </h2>

          <div className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
            <p>
              If you face difficulties while checking or
              updating your KYC details, contact our
              support team.
            </p>

            <p>
              Phone:
              <span className="ml-2 font-medium">
                0120-6633231 / 232 / 218
              </span>
            </p>

            <p>
              Email:
              <a
                href="mailto:kra@ashlarindia.com"
                className="ml-2 text-[#9B2C1F] underline"
              >
                kra@ashlarindia.com
              </a>
            </p>
          </div>
        </div>

        {/* NOTE */}

        <div className="mt-10 rounded-md border border-[#eadfda] bg-[#fff8f6] p-5">
          <p className="text-sm leading-7 text-slate-700">
            NOTE: If your account has remained inactive
            for a long period, KYC details may need to be
            updated again before trading or investing.
          </p>
        </div>
      </section>
    </main>
  );
}
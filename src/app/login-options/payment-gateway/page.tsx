"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FundTransferPage() {
  const [activeTab, setActiveTab] = useState<
    "deposit" | "withdraw"
  >("deposit");

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {/* HEADING */}

        <div className="text-center">
          <h1 className="text-5xl font-bold text-slate-900">
            Fund{" "}
            <span className="text-[#9B2C1F]">
              Transfer
            </span>
          </h1>

          <div className="mx-auto mt-5 h-[2px] w-40 bg-slate-200" />
        </div>

        {/* TABS */}

        <div className="mt-12 flex gap-4">
          <button
            onClick={() => setActiveTab("deposit")}
            className={`rounded-md px-6 py-3 text-sm font-medium transition ${
              activeTab === "deposit"
                ? "bg-[#9B2C1F] text-white"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            Deposit Funds
          </button>

          <button
            onClick={() => setActiveTab("withdraw")}
            className={`rounded-md px-6 py-3 text-sm font-medium transition ${
              activeTab === "withdraw"
                ? "bg-[#9B2C1F] text-white"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            Withdraw Funds
          </button>
        </div>

        {/* DEPOSIT TAB */}

        {activeTab === "deposit" && (
          <div className="mt-14">
            <h2 className="text-2xl font-semibold text-slate-900">
              Mode of Fund Transfer
            </h2>

            {/* UPI */}

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-slate-900">
                UPI
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-700">
                The UPI method is the fastest way to
                deposit money into client trading account.
                Client can instantly transfer money from
                registered bank account using UPI for free.
              </p>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>
                  Client fund transfer UPI ID:
                  <strong>
                    {" "}
                    ASHL54ClientCode@HDFCBANK
                  </strong>
                </li>

                <li>
                  UPI ID:
                  <strong>
                    {" "}
                    ashlar.brk@validhdfc
                  </strong>
                </li>
              </ul>

              {/* QR IMAGE */}

              <div className="mt-8">
                <p className="mb-3 text-sm font-medium text-slate-800">
                  QR Code For Payment
                </p>

                <div className="flex h-[220px] w-[220px] items-center justify-center border border-slate-300 bg-slate-50">
                  {/* Replace with your actual QR image */}

                  <Image
                    src="/images/qr-code.png"
                    alt="QR Code"
                    width={220}
                    height={220}
                    className="object-contain"
                  />

                  {/* If image not available remove Image and use this:
                  <span className="text-sm text-slate-400">
                    QR Code Image
                  </span>
                  */}
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-700">
                Verify the account registered name as{" "}
                <strong>
                  “Ashlar Securities Pvt Ltd USCABA”
                </strong>{" "}
                before making payment.
              </p>
            </div>

            {/* PAYMENT GATEWAY */}

            <div className="mt-14">
              <h3 className="text-lg font-semibold text-slate-900">
                Instant Payment Gateway
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-700">
                Funds can be transferred instantly through
                ATOM from WISDOMNEO trading app.
                ₹10 + 18% GST will be charged for such
                transfers.
              </p>

              <div className="mt-6">
                <Link
                  href="http://fundtransfer.ashlarindia.com:9002/fundtransfer.aspx"
                  target="_blank"
                  className="inline-flex rounded-full bg-[#9B2C1F] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#7f2318]"
                >
                  Click here for Online Payment
                </Link>
              </div>
            </div>

            {/* BANK DETAILS */}

            <div className="mt-16">
              <h2 className="text-2xl font-semibold text-slate-900">
                IMPS / NEFT / RTGS Transfer
              </h2>

              <div className="mt-8 overflow-hidden rounded-md border border-slate-200">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b">
                      <td className="bg-slate-50 px-4 py-4 font-medium">
                        Bank Name
                      </td>

                      <td className="px-4 py-4">
                        HDFC BANK LTD.
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="bg-slate-50 px-4 py-4 font-medium">
                        Beneficiary Account Name
                      </td>

                      <td className="px-4 py-4">
                        ASHLAR SECURITIES PVT. LTD
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="bg-slate-50 px-4 py-4 font-medium">
                        Account Number
                      </td>

                      <td className="px-4 py-4">
                        00030340043554
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="bg-slate-50 px-4 py-4 font-medium">
                        Account Type
                      </td>

                      <td className="px-4 py-4">
                        Current Account
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="bg-slate-50 px-4 py-4 font-medium">
                        Branch
                      </td>

                      <td className="px-4 py-4">
                        Kailash Building 26, K.G Marg
                        New Delhi-110001
                      </td>
                    </tr>

                    <tr>
                      <td className="bg-slate-50 px-4 py-4 font-medium">
                        IFSC Code
                      </td>

                      <td className="px-4 py-4">
                        HDFC0000003
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* NOTES */}

              <ul className="mt-8 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                <li>
                  Kindly ensure correct account details are
                  entered before transfer.
                </li>

                <li>
                  Transfer funds only from the registered
                  bank account linked with Ashlar.
                </li>

                <li>
                  Ashlar does not accept deposits via cash
                  or Demand Draft (DD).
                </li>
              </ul>
            </div>

            {/* CHARGES */}

            <div className="mt-16">
              <h2 className="text-2xl font-semibold text-slate-900">
                Charges and Time Taken to Update Funds
              </h2>

              <div className="mt-8 overflow-hidden rounded-md border border-slate-200">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-4 text-left font-medium">
                        Method
                      </th>

                      <th className="px-4 py-4 text-left font-medium">
                        Time Taken
                      </th>

                      <th className="px-4 py-4 text-left font-medium">
                        Charges
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-t">
                      <td className="px-4 py-4">
                        UPI
                      </td>

                      <td className="px-4 py-4">
                        Instant
                      </td>

                      <td className="px-4 py-4">
                        Free
                      </td>
                    </tr>

                    <tr className="border-t">
                      <td className="px-4 py-4">
                        Payment Gateway
                      </td>

                      <td className="px-4 py-4">
                        Instant
                      </td>

                      <td className="px-4 py-4">
                        ₹10 + 18% GST
                      </td>
                    </tr>

                    <tr className="border-t">
                      <td className="px-4 py-4">
                        NEFT/RTGS
                      </td>

                      <td className="px-4 py-4">
                        Within 2 hours
                      </td>

                      <td className="px-4 py-4">
                        Bank charges may apply
                      </td>
                    </tr>

                    <tr className="border-t">
                      <td className="px-4 py-4">
                        IMPS
                      </td>

                      <td className="px-4 py-4">
                        Within 10 minutes
                      </td>

                      <td className="px-4 py-4">
                        Free at Ashlar
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-8 text-sm leading-7 text-slate-700">
                Ashlar staff never ask for Client ID,
                Password, OTP or personal banking details.
              </p>
            </div>
          </div>
        )}

        {/* WITHDRAW TAB */}

        {activeTab === "withdraw" && (
          <div className="mt-14">
            <h2 className="text-2xl font-semibold text-slate-900">
              Withdraw Funds
            </h2>

            <ul className="mt-8 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>
                From Trading App
              </li>

              <li>
                From Online Backoffice
              </li>

              <li>
                By calling Ashlar customer care from your
                registered mobile number
              </li>

              <li>
                By email from your registered email ID
              </li>

              <li>
                Withdrawal requests before 3 PM are
                processed on the same working day.
              </li>

              <li>
                For delays contact:
                fundsout@ashlarindia.com
              </li>
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}
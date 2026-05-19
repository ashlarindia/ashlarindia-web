"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import {
  FileText,
  Bell,
  Landmark,
  BarChart3,
  Download,
  ExternalLink,
} from "lucide-react";

import Button from "@/components/ui/Button";

const tabs = [
  {
    id: "circular",
    name: "Circular",
    icon: FileText,
  },
  {
    id: "investor",
    name: "Investor Update",
    icon: Bell,
  },
  {
    id: "nse",
    name: "NSE",
    icon: Landmark,
  },
  {
    id: "bse",
    name: "BSE",
    icon: BarChart3,
  },
  {
    id: "mcx",
    name: "MCX",
    icon: Landmark,
  },
];
const circularData = {
  circular: [
    {
      date: "05 Sep 2024",
      title: "Suspension of Trading in TATAMTRDVR",
      description: "Suspension of trading in TATAMTRDVR",
      file: "/pdf/TATAMTRDVR.pdf",
    },

    {
      date: "25 Sep 2024",
      title: "MCX Transaction Charges Revised",
      description:
        "Transaction charges revised from October 01, 2024",
      file: "/pdf/MCX-Transaction-Charges.pdf",
    },

    {
      date: "18 Sep 2024",
      title: "Changes in STT Rates",
      description:
        "Changes in Securities Transaction Tax effective October 2024",
      file: "/pdf/STT-Rate-Changes.pdf",
    },

    {
      date: "29 Jul 2024",
      title: "Collateral & Exposure Norms",
      description:
        "Updated framework for acceptable collateral and exposure",
      file: "/pdf/Collateral-Exposure-Norms.pdf",
    },

    {
      date: "10 Jul 2024",
      title: "SEBI Trading Preferences",
      description:
        "SEBI Trading Preferences update",
      file: "/pdf/SEBI-Trading-Preferences.pdf",
    },

    {
      date: "04 Aug 2023",
      title: "Up-streaming of Client Funds",
      description:
        "SEBI circular regarding upstreaming of client funds",
      file: "/pdf/Upstreaming-Client-Funds.pdf",
    },

    {
      date: "09 Jun 2023",
      title: "SEBI Risk Disclosure",
      description:
        "Risk disclosure in Equity Futures & Options Segment",
      file: "/pdf/SEBI-Risk-Disclosure.pdf",
    },

    {
      date: "02 Feb 2023",
      title: "T+1 Rolling Settlement",
      description:
        "Optional T+1 rolling settlement circular",
      file: "/pdf/T1-Rolling-Settlement.pdf",
    },

    {
      date: "25 Jan 2023",
      title: "NSDL Revised DIS & Annexure",
      description:
        "NSDL amendment related circular",
      file: "/pdf/NSDL-Revised-DIS.pdf",
    },

    {
      date: "18 Jan 2023",
      title: "Account Client Fund Updation",
      description:
        "Funds update process circular",
      file: "/pdf/Account-Client-Fund-Updation.pdf",
    },

    {
      date: "01 Nov 2022",
      title: "Guidelines for Online Closure of Demat Accounts",
      description:
        "Online demat closure process guidelines",
      file: "/pdf/Demat-Closure-Guidelines.pdf",
    },

    {
      date: "15 Oct 2022",
      title: "Globe Shortage Policy",
      description:
        "Updated globe shortage policy",
      file: "/pdf/Globe-Shortage-Policy.pdf",
    },

    {
      date: "06 Sep 2022",
      title: "NSDL Circular",
      description:
        "Partial amendment in opening of demat account",
      file: "/pdf/NSDL-Circular.pdf",
    },

    {
      date: "28 Apr 2022",
      title: "Annexure B Including DP",
      description:
        "Annexure B including DP circular",
      file: "/pdf/Annexure-B-DP.pdf",
    },

    {
      date: "16 Mar 2022",
      title: "MCX Transaction Fees",
      description:
        "MCX transaction fees on option contracts",
      file: "/pdf/MCX-Transaction-Fees-2022.pdf",
    },

    {
      date: "03 Mar 2022",
      title: "Investor Charter Details",
      description:
        "Investor charter details circular",
      file: "/pdf/Investor-Charter-Details.pdf",
    },

    {
      date: "06 Jan 2022",
      title: "Investor Charter – Depository",
      description:
        "Designated Depository Participants circular",
      file: "/pdf/Investor-Charter-Depository.pdf",
    },

    {
      date: "31 Dec 2021",
      title: "Investor Charter – Stock Brokers",
      description:
        "Investor charter for stock brokers",
      file: "/pdf/Investor-Charter-Stock-Brokers.pdf",
    },

    {
      date: "18 Nov 2021",
      title: "Segregation & Monitoring of Collateral",
      description:
        "Collateral segregation circular",
      file: "/pdf/Collateral-Monitoring.pdf",
    },

    {
      date: "30 Aug 2021",
      title: "Surveillance Policy",
      description:
        "Updated surveillance policy",
      file: "/pdf/Surveillance-Policy.pdf",
    },

    {
      date: "16 Aug 2021",
      title:
        "Settlement of Running Account of Client Funds",
      description:
        "Settlement of client funds with trading member",
      file: "/pdf/Settlement-Client-Funds.pdf",
    },

    {
      date: "16 Aug 2021",
      title:
        "Nomination for Eligible Trading & Demat Accounts",
      description:
        "Nomination guidelines circular",
      file: "/pdf/Nomination-Demat-Accounts.pdf",
    },

    {
      date: "16 Aug 2021",
      title:
        "Mandatory Fields in Unique Client Code",
      description:
        "UCC mandatory information circular",
      file: "/pdf/UCC-Mandatory-Fields.pdf",
    },

    {
      date: "04 Mar 2021",
      title: "Consent Letter",
      description:
        "Client consent letter circular",
      file: "/pdf/Consent-Letter.pdf",
    },

    {
      date: "04 Mar 2021",
      title: "Client Guidance",
      description:
        "Client guidance circular",
      file: "/pdf/Client-Guidance.pdf",
    },

    {
      date: "28 Aug 2020",
      title:
        "Guidelines for Pledge/Unpledge & Margin",
      description:
        "Margin pledge guidelines",
      file: "/pdf/Pledge-Unpledge-Margin.pdf",
    },

    {
      date: "27 Aug 2020",
      title:
        "Margin Pledge & Unpledge Process",
      description:
        "Updated margin pledge process",
      file: "/pdf/Margin-Pledge-Process.pdf",
    },

    {
      date: "27 Jul 2020",
      title:
        "Margin Requirement or Pledge Repledge",
      description:
        "Margin repledge circular",
      file: "/pdf/Margin-Repledge.pdf",
    },

    {
      date: "23 Jul 2020",
      title: "Margin Reporting in Cash Segment",
      description:
        "Collection of reporting margin in cash segment",
      file: "/pdf/Margin-Reporting-Cash-Segment.pdf",
    },

    {
      date: "22 Jul 2020",
      title: "Ban Period Penalty",
      description:
        "Ban period penalty circular",
      file: "/pdf/Ban-Period-Penalty.pdf",
    },

    {
      date: "08 Jan 2020",
      title: "SEBI Stamp Duty Collection",
      description:
        "SEBI Rules & Act circular",
      file: "/pdf/SEBI-Stamp-Duty.pdf",
    },

    {
      date: "21 Oct 2019",
      title: "Muhurat Trading",
      description:
        "Muhurat trading circular",
      file: "/pdf/Muhurat-Trading.pdf",
    },

    {
      date: "06 May 2019",
      title: "Extended Live Trading Session",
      description:
        "Extended live trading session circular",
      file: "/pdf/Extended-Live-Trading.pdf",
    },

    {
      date: "10 Apr 2019",
      title: "Stamp Duty",
      description:
        "Stamp duty changes circular",
      file: "/pdf/Stamp-Duty.pdf",
    },

    {
      date: "22 Feb 2019",
      title:
        "Policy for Shortages in Obligation",
      description:
        "Policy for shortages arising out of internal netting of trades",
      file: "/pdf/Shortages-Obligation-Policy.pdf",
    },
  ],

  investor: [
    {
      date: "26 Sep 2022",
      title:
        "Settlement of Running Account of Client’s Funds lying with Trading Member (TM)",
      file: "/pdf/investor-update/26-sep-2022.pdf",
    },
  ],

  nse: [
    {
      title: "Announcement",
      link: "https://www.nseindia.com/companies-listing/corporate-filings-announcements",
    },

    {
      title: "Corporate Actions",
      link: "https://www.nseindia.com/companies-listing/corporate-filings-actions",
    },

    {
      title: "Circular",
      link: "https://www.nseindia.com/resources/exchange-communication-circulars",
    },
  ],

  bse: [
    {
      title: "Notice",
      link: "https://www.bseindia.com/markets/MarketInfo/NoticesCirculars.aspx?id=0",
    },
  ],

  mcx: [
    {
      title: "Circular",
      link: "https://www.mcxindia.com/circulars/all-circulars",
    },
  ],
};

export default function CircularPage() {
  const [activeTab, setActiveTab] = useState("circular");

  return (
    <main className="min-h-screen bg-[#faf8f6] py-14">

      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* HERO */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center"
        >

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e9d7d0] bg-white px-5 py-2 text-sm font-medium text-[#b12a24] shadow-sm">
            <FileText size={15} />
            Regulatory & Exchange Updates
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-[#2A394E] md:text-5xl">
            Circular{" "}
            <span className="text-[#b12a24]">
              Information
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-500">
            Stay updated with SEBI notifications, exchange circulars,
            investor updates and important compliance announcements.
          </p>

        </motion.div>

        {/* TABS */}

        <div className="grid gap-4 md:grid-cols-5">

          {tabs.map((tab) => {
            const Icon = tab.icon;

            const active = activeTab === tab.id;

            return (
              <motion.button
                key={tab.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex h-[72px] items-center gap-3 rounded-2xl border px-5 transition-all duration-300 ${
                  active
                    ? "border-[#b12a24] bg-[#fff7f5]"
                    : "border-[#ebe4de] bg-white hover:border-[#d7c8bf]"
                }`}
              >

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    active
                      ? "bg-[#b12a24]"
                      : "bg-[#f7f3f0]"
                  }`}
                >
                  <Icon
                    size={18}
                    className={
                      active
                        ? "text-white"
                        : "text-[#b12a24]"
                    }
                  />
                </div>

                <span
                  className={`text-sm font-semibold ${
                    active
                      ? "text-[#b12a24]"
                      : "text-[#2A394E]"
                  }`}
                >
                  {tab.name}
                </span>

              </motion.button>
            );
          })}

        </div>

        {/* CONTENT */}

        <AnimatePresence mode="wait">

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 overflow-hidden rounded-3xl border border-[#ece5df] bg-white shadow-sm"
          >

            {/* CIRCULAR */}

            {activeTab === "circular" && (
              <div>

                <div className="grid grid-cols-12 border-b border-[#f0e7e2] bg-[#fff8f6] px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#7b4b43]">

                  <div className="col-span-2">
                    Date
                  </div>

                  <div className="col-span-4">
                    Title
                  </div>

                  <div className="col-span-4">
                    Description
                  </div>

                  <div className="col-span-2 text-center">
                    Action
                  </div>

                </div>

                {circularData.circular.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="grid grid-cols-12 items-center border-b border-[#f3ece7] px-6 py-5 transition hover:bg-[#fcfaf8]"
                  >

                    <div className="col-span-2 text-sm text-slate-600">
                      {item.date}
                    </div>

                    <div className="col-span-4 text-sm font-semibold text-[#2A394E]">
                      {item.title}
                    </div>

                    <div className="col-span-4 text-sm text-slate-500">
                      {item.description}
                    </div>

                    <div className="col-span-2 flex justify-center">
                      <Link href={item.file} target="_blank">

                        <Button className="h-10 rounded-full bg-[#9f2d22] px-5 text-sm hover:bg-[#842319]">
                          <span className="flex items-center gap-2">
                            <Download size={15} />
                            Download
                          </span>
                        </Button>

                      </Link>
                    </div>

                  </motion.div>
                ))}

              </div>
            )}

            {/* INVESTOR UPDATE */}

            {activeTab === "investor" && (
              <div>

                <div className="grid grid-cols-12 border-b border-[#f0e7e2] bg-[#fff8f6] px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#7b4b43]">

                  <div className="col-span-2">
                    Date
                  </div>

                  <div className="col-span-8">
                    Title
                  </div>

                  <div className="col-span-2 text-center">
                    Action
                  </div>

                </div>

                {circularData.investor.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-12 items-center border-b border-[#f3ece7] px-6 py-5 hover:bg-[#fcfaf8]"
                  >

                    <div className="col-span-2 text-sm text-slate-600">
                      {item.date}
                    </div>

                    <div className="col-span-8 text-sm font-semibold text-[#2A394E]">
                      {item.title}
                    </div>

                    <div className="col-span-2 flex justify-center">
                      <Link href={item.file} target="_blank">

                        <Button className="h-10 rounded-full bg-[#9f2d22] px-5 text-sm hover:bg-[#842319]">
                          <span className="flex items-center gap-2">
                            <Download size={15} />
                            Download
                          </span>
                        </Button>

                      </Link>
                    </div>

                  </div>
                ))}

              </div>
            )}

            {/* NSE / BSE / MCX */}

            {(activeTab === "nse" ||
              activeTab === "bse" ||
              activeTab === "mcx") && (
              <div>

                <div className="grid grid-cols-12 border-b border-[#f0e7e2] bg-[#fff8f6] px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#7b4b43]">

                  <div className="col-span-9">
                    Title
                  </div>

                  <div className="col-span-3 text-center">
                    Action
                  </div>

                </div>

                {circularData[
                  activeTab as "nse" | "bse" | "mcx"
                ].map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-12 items-center border-b border-[#f3ece7] px-6 py-5 hover:bg-[#fcfaf8]"
                  >

                    <div className="col-span-9 text-sm font-semibold text-[#2A394E]">
                      {item.title}
                    </div>

                    <div className="col-span-3 flex justify-center">

                      <Link
                        href={item.link}
                        target="_blank"
                      >

                        <Button className="h-10 rounded-full bg-[#9f2d22] px-5 text-sm hover:bg-[#842319]">
                          <span className="flex items-center gap-2">
                            <ExternalLink size={15} />
                            Open
                          </span>
                        </Button>

                      </Link>

                    </div>

                  </div>
                ))}

              </div>
            )}

          </motion.div>

        </AnimatePresence>

      </div>

    </main>
  );
}
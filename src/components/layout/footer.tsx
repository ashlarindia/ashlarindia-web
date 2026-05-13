'use client';

import Link from 'next/link';
import { useState } from 'react';

import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ExternalLink,
} from 'lucide-react';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6';

import { SITE, getKycUrl } from '@/data/site-data';

const PRODUCTS = [
  'Equity',
  'F&O',
  'Commodity',
  'Currency',
  'IPO',
  'Mutual Funds',
];

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <footer className="bg-[#071028] text-gray-300 border-t border-slate-800">

      {/* CTA */}
      <div className="border-b border-slate-800 bg-gradient-to-r from-[#081225] to-[#0B1733]">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">

          <div>
            <h2 className="text-3xl font-bold text-white mb-3">
              Start Investing with Ashlar India
            </h2>

            <p className="text-slate-400">
              Open your demat account in minutes and trade with confidence.
            </p>
          </div>

          <Link
            href={getKycUrl('footer')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold shadow-lg hover:scale-105"
          >
            Open Free Account
          </Link>

        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* BRAND */}
          <div>

            <h2 className="text-4xl font-bold text-white mb-6">
              Ashlar<span className="text-blue-500">India</span>
            </h2>

            <p className="leading-8 text-slate-400 mb-8">
              SEBI registered stock broker offering equity, derivatives,
              commodity and currency trading solutions across India.
            </p>

            <div className="space-y-5 text-sm">

              <a
                href={`tel:${SITE.tollFree.replace(/-/g, '')}`}
                className="flex items-center gap-3 hover:text-white transition"
              >
                <Phone size={18} />
                {SITE.tollFree}
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 hover:text-white transition"
              >
                <Mail size={18} />
                {SITE.email}
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1" />
                <span>{SITE.address}</span>
              </div>

            </div>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-10">

              <a
                href="https://facebook.com/ashlarindia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com/ashlarindia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-pink-600 transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="https://linkedin.com/company/ashlarindia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-blue-700 transition flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://youtube.com/@ashlarindia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-red-600 transition flex items-center justify-center"
              >
                <FaYoutube />
              </a>

              <a
                href="https://twitter.com/ashlarindia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-slate-700 transition flex items-center justify-center"
              >
                <FaXTwitter />
              </a>

            </div>

          </div>

          {/* PRODUCTS */}
          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Products
            </h3>

            <ul className="space-y-4">

              {PRODUCTS.map((item) => (
                <li key={item}>
                  <Link href="/" className="hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* SUPPORT */}
          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Support
            </h3>

            <ul className="space-y-4">

              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link href="/faqs" className="hover:text-white transition">
                  FAQs
                </Link>
              </li>

              <li>
                <Link
                  href="/brokerage-calculator"
                  className="hover:text-white transition"
                >
                  Brokerage Calculator
                </Link>
              </li>

              <li>
                <a
                  href="https://scores.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  SEBI SCORES
                  <ExternalLink size={14} />
                </a>
              </li>

            </ul>

          </div>

          {/* OFFICE */}
          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Office Address
            </h3>

            <div className="space-y-5 text-sm leading-7">

              <p>
                <span className="font-semibold text-white">
                  Corporate Address:
                </span>
                <br />
                1D, A-1, Sector-10,
                <br />
                Noida, Uttar Pradesh - 201301
              </p>

              <p>
                <span className="font-semibold text-white">
                  Landline:
                </span>
                <br />
                0120-6633205
              </p>

              <p>
                <span className="font-semibold text-white">
                  Email:
                </span>
                <br />
                compliance@ashlarindia.com
              </p>

            </div>

          </div>

        </div>

        {/* LEGAL LINKS */}
        <div className="border-t border-slate-800 mt-16 pt-10 text-center">

          <div className="flex flex-wrap justify-center gap-3 text-sm font-medium leading-8 text-slate-300">

            <Link href="/investor-charter" className="hover:text-white">
              Investor Charter
            </Link>

            |

            <Link href="/cyber-security" className="hover:text-white">
              Cybersecurity Awareness Campaign
            </Link>

            |

            <Link href="/escalation-matrix" className="hover:text-white">
              Escalation Matrix
            </Link>

            |

            <Link href="/regulatory" className="hover:text-white">
              Regulatory & other info
            </Link>

            |

            <Link href="/policies" className="hover:text-white">
              Policies & Procedure
            </Link>

            |

            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>

            |

            <Link href="/disclaimer" className="hover:text-white">
              Disclaimer
            </Link>

            |

            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>

          </div>

        </div>

        {/* DISCLOSURE */}
        <div className="border-t border-slate-800 mt-10 pt-10">

          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-between w-full"
          >

            <span className="text-2xl font-semibold text-white">
              Risk Disclosure & Attention Investors
            </span>

            <ChevronDown
              className={`transition duration-300 ${
                open ? 'rotate-180' : ''
              }`}
            />

          </button>

          {open && (

            <div className="mt-10 text-sm leading-8 text-slate-300 space-y-8">

              <div>

                <h3 className="text-white text-xl font-semibold mb-5">
                  Risk Disclosure
                </h3>

                <p>
                  Stock Brokers can accept securities as margin from clients
                  only by way of pledge in the depository system w.e.f.
                  September 1, 2020.
                </p>

                <p>
                  Update your mobile number & email ID with your stock
                  broker/depository participant and receive OTP directly from
                  depository on your email id and/or mobile number to create pledge.
                </p>

                <p>
                  Check your securities / MF / bonds in the consolidated account
                  statement issued by NSDL/CDSL every month.
                </p>

                <p>
                  Investments in securities market are subject to market risks,
                  read all related documents carefully before investing.
                </p>

              </div>

              <div>

                <h3 className="text-white text-xl font-semibold mb-5">
                  Attention Investors
                </h3>

                <ol className="list-decimal pl-5 space-y-3">

                  <li>
                    Prevent Unauthorized transactions in your account.
                  </li>

                  <li>
                    Receive transaction alerts directly from exchange.
                  </li>

                  <li>
                    KYC is one time exercise while dealing in securities markets.
                  </li>

                  <li>
                    Investors should avoid unauthorized investment schemes.
                  </li>

                  <li>
                    Investors are requested not to transfer funds
                    to unknown bank accounts.
                  </li>

                  <li>
                    Investor awareness regarding fraudsters and fake tips.
                  </li>

                </ol>

              </div>

              <div>

                <h3 className="text-white text-xl font-semibold mb-5">
                  Important Exchange Information
                </h3>

                <p>
                  Clients are required to inform us of any short sale
                  transactions executed on a Trading Day.
                </p>

                <p>
                  Short selling is permitted only in securities eligible
                  under Futures & Options (F&O).
                </p>

                <p>
                  For any clarification, you may contact our support team.
                </p>

              </div>

            </div>

          )}

        </div>

        {/* REGISTRATION */}
        <div className="border-t border-slate-800 mt-12 pt-10 text-center text-sm leading-8 text-slate-400">

          <p>
            SEBI | NSE | BSE | MCX | E-Voting: Shareholders/Members |
            SMART ODR | SCORES 2.0 | Investor Education |
            SCORES Mobile App | IRRA
          </p>

          <p>
            Registration No: INZ000203739 |
            NSE: 13718 |
            BSE: 3302 |
            MCX: 56815 |
            NCDEX: 01002 |
            NSDL - DPID: IN303921 |
            SEBI Reg: IN-DP-2362016
          </p>

          <p>
            Ashlar Securities Pvt. Ltd. |
            Sector-67, Noida - 201301
          </p>

          <p>
            Contact No: 0120-6633205,231 |
            Email: investorcell@ashlarindia.com
          </p>

          <p>
            Wisdom Capital is an online brand of Ashlar Securities Pvt. Ltd.
          </p>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">

          <p className="text-sm text-slate-500">
            © 2026 Ashlar India Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6 text-sm">

            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>

            <Link href="/disclosures" className="hover:text-white">
              Disclosures
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}
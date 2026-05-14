'use client';

import Link from 'next/link';

import {
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#cf2e2e] text-white text-sm">

      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-8">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ABOUT */}
          <div>

            <h3 className="font-bold text-lg mb-5">
              About Ashlar
            </h3>

            <ul className="space-y-2 text-[13px]">

              <li>
                <Link href="/about-us" className="hover:underline">
                  » About Us
                </Link>
              </li>

              <li>
                <Link href="/business-partner" className="hover:underline">
                  » Business Partner
                </Link>
              </li>

              <li>
                <Link href="/announcements" className="hover:underline">
                  » Announcements
                </Link>
              </li>

              <li>
                <Link href="/careers" className="hover:underline">
                  » Careers
                </Link>
              </li>

              <li>
                <Link href="/circular" className="hover:underline">
                  » Circular
                </Link>
              </li>

            </ul>

          </div>

          {/* SUPPORT */}
          <div>

            <h3 className="font-bold text-lg mb-5">
              Support
            </h3>

            <ul className="space-y-2 text-[13px]">

              <li>
                <Link href="/contact" className="hover:underline">
                  » Contact Us
                </Link>
              </li>

              <li>
                <Link href="/margin-calculator" className="hover:underline">
                  » Margin Calculator
                </Link>
              </li>

              <li>
                <Link href="/quick-mail" className="hover:underline">
                  » Quick Mail
                </Link>
              </li>

              <li>
                <Link href="/downloads" className="hover:underline">
                  » Downloads
                </Link>
              </li>

              <li>
                <Link href="/complaints" className="hover:underline">
                  » Complaints
                </Link>
              </li>

            </ul>

          </div>

          {/* ACCOUNTS */}
          <div>

            <h3 className="font-bold text-lg mb-5">
              Accounts
            </h3>

            <ul className="space-y-2 text-[13px]">

              <li>
                <Link href="/open-account" className="hover:underline">
                  » Open Account
                </Link>
              </li>

              <li>
                <Link href="/re-kyc" className="hover:underline">
                  » Re-KYC
                </Link>
              </li>

              <li>
                <Link href="/kra-inquiry" className="hover:underline">
                  » KRA Inquiry
                </Link>
              </li>

              <li>
                <Link href="/freeze-blocking" className="hover:underline">
                  » Freezing/Blocking
                </Link>
              </li>

              <li>
                <Link href="/fund-transfer" className="hover:underline">
                  » Fund Transfer
                </Link>
              </li>

              <li>
                <Link href="/pledge-unpledge" className="hover:underline">
                  » Pledge/Un-Pledge
                </Link>
              </li>

              <li>
                <Link href="/nomination" className="hover:underline">
                  » Nomination
                </Link>
              </li>

            </ul>

          </div>

          {/* OFFICE */}
          <div>

            <h3 className="font-bold text-lg mb-5">
              Office Address Details
            </h3>

            <div className="space-y-3 text-[13px] leading-6">

              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />

                <span>
                  Corporate Address : 1D, A-1, Sector-10,
                  Noida, Uttar Pradesh India - 201301
                </span>
              </p>

              <p className="flex items-center gap-2">
                <Phone size={16} />

                <a
                  href="tel:01206633205"
                  className="hover:underline"
                >
                  Landline No : 0120-6633205
                </a>
              </p>

              <p className="flex items-center gap-2">
                <Mail size={16} />

                <a
                  href="mailto:compliance@ashlarindia.com"
                  className="hover:underline"
                >
                  compliance@ashlarindia.com
                </a>
              </p>

            </div>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-5 text-lg">

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

        </div>

        {/* TOP LINKS */}
        <div className="border-t border-white/40 mt-10 pt-5 text-center text-[12px] leading-7">

          <Link href="/investor-charter" className="hover:underline">
            Investor Charter
          </Link>

          {' | '}

          <Link href="/cyber-security" className="hover:underline">
            Investor Cybersecurity Awareness Campaign
          </Link>

          {' | '}

          <Link href="/escalation-matrix" className="hover:underline">
            Escalation Matrix
          </Link>

          {' | '}

          <Link href="/regulatory" className="hover:underline">
            Regulatory & Other Info
          </Link>

          {' | '}

          <Link href="/policies" className="hover:underline">
            Policies & Procedure
          </Link>

          {' | '}

          <Link href="/terms" className="hover:underline">
            Terms & Conditions
          </Link>

          {' | '}

          <Link href="/disclaimer" className="hover:underline">
            Disclaimer
          </Link>

          {' | '}

          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>

        </div>

        {/* RISK DISCLOSURE */}
        <div className="border-t border-white/40 mt-5 pt-5 text-[11px] leading-6">

          <h3 className="font-bold text-sm mb-4">
            Risk Disclosure :
          </h3>

          <p>
            Stock Brokers can accept securities as margin from clients
            only by way of pledge in the depository system w.e.f.
            September 1, 2020.
          </p>

          <p className="mt-3">
            Update your mobile number & email Id with your stock
            broker/depository participant and receive OTP directly
            from depository.
          </p>

          <p className="mt-3">
            Check your Securities /MF/ Bonds in the consolidated
            account statement issued by NSDL/CDSL every month.
          </p>

          <p className="mt-3">
            Investments in securities market are subject to
            market risks.
          </p>

          {/* ATTENTION */}
          <div className="mt-6">

            <h3 className="font-bold text-sm mb-4">
              Attention Investors
            </h3>

            <div className="space-y-3 text-[11px] leading-6">

              <p>
                1. Stock Brokers can accept securities as margin
                from clients only by way of pledge in the
                depository system.
              </p>

              <p>
                2. Update your email id and mobile number
                with your stock broker.
              </p>

              <p>
                3. Check your securities / MF / bonds in
                consolidated account statement.
              </p>

              <p>
                4. Prevent Unauthorized transactions
                in your account.
              </p>

              <p>
                5. Receive information of your transactions
                directly from Exchange.
              </p>

              <p>
                6. KYC is one time exercise while dealing
                in securities market.
              </p>

              <p>
                7. Beware of fraudsters collecting
                customer data.
              </p>

              <p>
                8. Avoid unauthorized investment schemes
                and fake trading tips.
              </p>

              <p>
                9. For any clarification, contact support team.
              </p>

            </div>

          </div>

        </div>

        {/* REGISTRATION */}
        <div className="border-t border-white/40 mt-6 pt-5 text-center text-[11px] leading-6">

          <p className="flex flex-wrap justify-center gap-2">

            <a
              href="https://www.sebi.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              SEBI
            </a>

            <span>|</span>

            <a
              href="https://www.nseindia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              NSE
            </a>

            <span>|</span>

            <a
              href="https://www.bseindia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              BSE
            </a>

            <span>|</span>

            <a
              href="https://www.mcxindia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              MCX
            </a>

            <span>|</span>

            <a
              href="https://www.evoting.nsdl.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              E Voting
            </a>

            <span>|</span>

            <a
              href="https://smartodr.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              SMART ODR
            </a>

            <span>|</span>

            <a
              href="https://scores.sebi.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              SCORES 2.0
            </a>

            <span>|</span>

            <a
              href="https://investor.sebi.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Investor Education
            </a>

            <span>|</span>

            <a
              href="https://scores.sebi.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              SCORES Mobile App
            </a>

            <span>|</span>

            <a
              href="https://www.cdslindia.com/Footer/grievances.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              IRRA
            </a>

          </p>

          <p className="mt-3">
            Registration No: INZ000203739 Membership- NSE:13718 |
            BSE:3302 | MCX:56815 | NCDEX:01002 |
            NSDL - DPID : IN303921 |
            SEBI Reg : IN-DP-2362016
          </p>

          <p className="mt-3">
            Register Office: A-38, Sector-67, Noida-201301
          </p>

          <p className="mt-3">

            Contact No :

            <a
              href="tel:01206633298"
              className="ml-1 hover:underline"
            >
              0120-6633298
            </a>

            {' | '}

            Email :

            <a
              href="mailto:investorsec@ashlarindia.com"
              className="ml-1 hover:underline"
            >
              investorsec@ashlarindia.com
            </a>

          </p>

          <p className="mt-3">
            Wisdom Capital is an online brand of
            Ashlar Securities Pvt. Ltd.
          </p>
        </div>
      </div>

    </footer>
  );
}
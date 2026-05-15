import Link from 'next/link';
import Image from 'next/image';

import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6';

const aboutLinks = [
  { name: 'About Us', href: '/about-us' },
  { name: 'Business Partner', href: '/business-partner' },
  { name: 'Announcements', href: '/announcements' },
  { name: 'Careers', href: '/careers' },
  { name: 'Circular', href: '/circular' },
];

const supportLinks = [
  { name: 'Contact Us', href: '/contact' },
  { name: 'Margin Calculator', href: '/margin-calculator' },
  { name: 'Quick Mail', href: '/quick-mail' },
  { name: 'Downloads', href: '/downloads' },
  { name: 'Complaints', href: '/complaints' },
];

const accountLinks = [
  { name: 'Open Account', href: '/open-account' },
  { name: 'Re-KYC', href: '/re-kyc' },
  { name: 'KRA Inquiry', href: '/kra-inquiry' },
  { name: 'Freezing/Blocking', href: '/freeze-blocking' },
  { name: 'Fund Transfer', href: '/fund-transfer' },
  { name: 'Pledge/Un-Pledge', href: '/pledge-unpledge' },
  { name: 'Nomination', href: '/nomination' },
];

const socialLinks = [
  { Icon: FaXTwitter, link: 'https://twitter.com', label: 'Twitter / X' },
  { Icon: FaFacebookF, link: 'https://facebook.com', label: 'Facebook' },
  { Icon: FaLinkedinIn, link: 'https://linkedin.com', label: 'LinkedIn' },
  { Icon: FaInstagram, link: 'https://instagram.com', label: 'Instagram' },
  { Icon: FaYoutube, link: 'https://youtube.com', label: 'YouTube' },
];

const investorLinks = [
  { name: 'Investor Charter', href: '/investor-charter' },
  { name: 'For Investor\u2019s', href: '/for-investors' },
  { name: 'Cybersecurity Awareness Campaign', href: '/cyber-security' },
  { name: 'Escalation Matrix', href: '/escalation-matrix' },
  { name: 'Regulatory & other info', href: '/regulatory-info' },
  { name: 'Policies & Procedure', href: '/policies-procedure' },
  { name: 'Terms & Conditions', href: '/terms-conditions' },
  { name: 'Disclaimer', href: '/disclaimer' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
];

const externalLinks = [
  { name: 'SEBI', href: 'https://www.sebi.gov.in/' },
  { name: 'NSE', href: 'https://www.nseindia.com/' },
  { name: 'BSE', href: 'https://www.bseindia.com/' },
  { name: 'MCX', href: 'https://www.mcxindia.com/' },
  { name: 'E Voting: Shareholders/Members', href: 'https://www.evoting.nsdl.com/' },
  { name: 'SMART ODR', href: 'https://smartodr.in/' },
  { name: 'SCORES 2.0', href: 'https://scores.sebi.gov.in/' },
  { name: 'Investor Education', href: 'https://investor.sebi.gov.in/' },
  { name: 'SCORES Mobile App', href: 'https://scores.sebi.gov.in/' },
  { name: 'IRRA', href: 'https://www.cdslindia.com/Footer/grievances.aspx' },
];

function LinkColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-8">{title}</h3>
      <ul className="space-y-4 text-[15px] text-slate-300">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex items-center gap-2 hover:text-red-400 transition-all duration-300"
            >
              <ArrowUpRight
                size={15}
                className="group-hover:translate-x-1 transition-all"
              />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#030712] text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-250px] left-[-250px] w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-250px] right-[-250px] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* MAIN */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-12">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          <LinkColumn title="About Ashlar" links={aboutLinks} />
          <LinkColumn title="Support" links={supportLinks} />
          <LinkColumn title="Accounts" links={accountLinks} />

          {/* OFFICE */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Office Address Details</h3>

            <div className="space-y-6">
              {/* ADDRESS */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-red-500/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-red-400" />
                </div>
                <div className="text-slate-300 leading-7 text-[15px]">
                  Corporate Address :
                  <br />
                  1D, A-1, Sector-10,
                  <br />
                  Noida, Uttar Pradesh
                  <br />
                  India - 201301
                </div>
              </div>

              {/* PHONE */}
              <a
                href="tel:01206633205"
                className="group flex items-center gap-4 hover:text-red-400 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-red-500/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-red-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Landline No</p>
                  <p className="font-semibold text-[15px]">0120-6633205</p>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:compliance@ashlarindia.com"
                className="group flex items-center gap-4 hover:text-red-400 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-red-500/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-red-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-slate-400 text-sm">Email Address</p>
                  <p className="font-semibold text-[15px] break-all">
                    compliance@ashlarindia.com
                  </p>
                </div>
              </a>
            </div>

            {/* SOCIAL */}
            <div className="flex flex-wrap gap-4 mt-10">
              {socialLinks.map(({ Icon, link, label }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-red-500 hover:border-red-500 hover:scale-110 transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RISK DISCLOSURE */}
        <div className="border-t border-white/10 mt-16 pt-10">
          <div className="flex items-center gap-3 mb-8">
            <ShieldCheck className="text-red-400" />
            <h3 className="text-2xl font-bold">Risk Disclosure</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 text-slate-300 text-[14px] leading-8">
            <div className="space-y-4">
              <p>
                Stock Brokers can accept securities as margin from clients only by way of pledge in the depository system.
              </p>
              <p>
                Update your mobile number &amp; email ID with your stock broker and receive OTP directly from depository.
              </p>
              <p>
                Check your Securities / MF / Bonds in the consolidated account statement issued monthly.
              </p>
            </div>

            <div className="space-y-4">
              <p>Investments in securities market are subject to market risks.</p>
              <p>Beware of fraudsters collecting customer data and fake tips.</p>
              <p>KYC is a one time exercise while dealing in securities market.</p>
            </div>
          </div>
        </div>

        {/* INVESTOR LINKS */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-center text-[13px] md:text-[15px] font-semibold text-white leading-8">
            {investorLinks.map((item, index) => (
              <span key={item.href} className="flex items-center gap-2">
                <Link
                  href={item.href}
                  className="hover:text-yellow-300 transition-all"
                >
                  {item.name}
                </Link>
                {index < investorLinks.length - 1 && (
                  <span aria-hidden="true">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* RED SECTION */}
      <div className="bg-gradient-to-b from-[#d93434] via-[#cf2e2e] to-[#b71c1c] py-10 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          {/* TOP LINKS */}
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-white text-[13px] md:text-[15px] font-semibold">
            {externalLinks.map((item, index) => (
              <span key={`${item.name}-${index}`} className="flex items-center gap-3">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300"
                >
                  {item.name}
                </a>
                {index < externalLinks.length - 1 && (
                  <span aria-hidden="true">|</span>
                )}
              </span>
            ))}
          </div>

          {/* REGISTRATION */}
          <div className="mt-6 text-white text-[12px] md:text-[14px] font-medium leading-8">
            <p>
              Registration No: INZ000203739 Membership- NSE:13718 | BSE : 3302 |
              MCX : 56815 | NCDEX : 01002 | NSDL - DPID : IN303921 | SEBI Reg :
              IN-DP-2362016
            </p>
            <p>Register Office: A-38, Sector-67, Noida-201301</p>
          </div>

          {/* CONTACT */}
          <p className="mt-5 text-center text-white text-[14px] md:text-[15px] font-medium">
            Contact No :
            <a
              href="tel:01206633299"
              className="ml-2 underline hover:text-yellow-300 transition-all"
            >
              0120-6633299
            </a>
            {' | '}
            Email :
            <a
              href="mailto:investorcell@ashlarindia.com"
              className="ml-2 underline hover:text-yellow-300 transition-all"
            >
              investorcell@ashlarindia.com
            </a>
          </p>

          {/* BRAND */}
          <p className="mt-5 text-center text-white text-[13px] md:text-[14px] font-medium">
            Wisdom Capital is an online brand of Ashlar Securities Pvt. Ltd. For
            more information visit :
            <a
              href="https://wisdomcapital.in"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-yellow-300 transition-all ml-1"
            >
              https://wisdomcapital.in
            </a>
          </p>
        </div>
      </div>

   {/* COPYRIGHT */}
<div className="bg-black border-t border-white/10 py-4 px-6">

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center">

    {/* COPYRIGHT */}
    <p className="text-[13px] text-white font-medium whitespace-nowrap">
      Copyright © Ashlar Securities
    </p>

    {/* DIVIDER */}
    <div className="hidden md:block h-4 w-[1px] bg-white/20" />

    {/* POWERED BY */}
    <div className="flex items-center gap-3">

      <span className="text-white/70 text-[13px]">
        Powered by
      </span>

      {/* LOGO ONLY CLICKABLE */}
      <a
        href="https://wisdomcapital.in"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center transition-all duration-300 hover:scale-105"
      >

        <Image
          src="/wisdom-logo.png"
          alt="Wisdom Capital"
          width={140}
          height={40}
          priority
          className="h-8 w-auto object-contain"
        />

      </a>

    </div>

    {/* DIVIDER */}
    <div className="hidden md:block h-4 w-[1px] bg-white/20" />

    {/* RIGHTS */}
    <p className="text-[13px] text-white font-medium whitespace-nowrap">
      All Rights Reserved
    </p>

  </div>

</div>
    </footer>
  );
}

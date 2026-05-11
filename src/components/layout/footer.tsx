'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300 pt-16 pb-8 mt-auto">
      <div className="container-shell">
        <div className="grid gap-8 md:grid-cols-4 mb-12">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">
              Ashlar<span className="text-brand-orange">Markets</span>
            </h3>
            <p className="text-sm">SEBI Registered Stock Broker | CDSL & NSDL Depository Participant</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products/equity" className="hover:text-brand-orange">Equity</Link></li>
              <li><Link href="/products/fno" className="hover:text-brand-orange">F&O</Link></li>
              <li><Link href="/products/commodities" className="hover:text-brand-orange">Commodities</Link></li>
              <li><Link href="/products/mutual-funds" className="hover:text-brand-orange">Mutual Funds</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-brand-orange">Contact Us</Link></li>
              <li><Link href="/faqs" className="hover:text-brand-orange">FAQs</Link></li>
              <li><Link href="/calculators" className="hover:text-brand-orange">Calculators</Link></li>
              <li><Link href="/disclosures" className="hover:text-brand-orange">Disclosures</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Toll Free: 1800-123-9343</li>
              <li>Phone: 0120-6633205</li>
              <li>Email: support@ashlarmarkets.com</li>
              <li>Noida, Uttar Pradesh, India</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-sm">
          <p>&copy; 2024 Ashlar Markets. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link href="/privacy-policy" className="hover:text-brand-orange">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-orange">Terms & Conditions</Link>
            <Link href="/disclosures" className="hover:text-brand-orange">Disclosures</Link>
            <Link href="/complaints" className="hover:text-brand-orange">Complaints</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const products = [
  { name: 'Equity', href: '/products/equity' },
  { name: 'F&O', href: '/products/fno' },
  { name: 'Commodities', href: '/products/commodities' },
  { name: 'Currency', href: '/products/currency' },
  { name: 'IPO', href: '/products/ipo' },
  { name: 'Bonds', href: '/products/bonds' },
];

const investment = [
  { name: 'Mutual Funds', href: '/mutual-funds' },
  { name: 'Life Insurance', href: '/life-insurance' },
  { name: 'Corporate FDs', href: '/corporate-fds' },
  { name: 'Retirement Plans', href: '/retirement-plans' },
  { name: 'Child Plans', href: '/child-plans' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [investmentOpen, setInvestmentOpen] = useState(false);

  const closeAll = () => {
    setProductsOpen(false);
    setInvestmentOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" onClick={closeAll} className="text-2xl font-bold">
            Ashlar<span className="text-orange-600">Markets</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            
            {/* Home */}
            <Link href="/" className="text-slate-600 hover:text-orange-600">
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center gap-1 text-slate-600 hover:text-orange-600">
                Products
                <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border py-2">
                  {products.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      onClick={closeAll}
                      className="block px-4 py-2 text-sm text-slate-600 hover:text-orange-600 hover:bg-slate-50"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Investment Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setInvestmentOpen(true)}
              onMouseLeave={() => setInvestmentOpen(false)}
            >
              <button className="flex items-center gap-1 text-slate-600 hover:text-orange-600">
                Investment
                <ChevronDown className={`h-4 w-4 transition-transform ${investmentOpen ? 'rotate-180' : ''}`} />
              </button>

              {investmentOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border py-2">
                  {investment.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeAll}
                      className="block px-4 py-2 text-sm text-slate-600 hover:text-orange-600 hover:bg-slate-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mutual Fund */}
            <Link href="/mutual-funds" className="text-slate-600 hover:text-orange-600">
              Mutual Fund
            </Link>

            {/* Calculator */}
            <Link href="/calculators" className="text-slate-600 hover:text-orange-600">
              Calculator
            </Link>

            {/* Contact Us */}
            <Link href="/contact" className="text-slate-600 hover:text-orange-600">
              Contact Us
            </Link>

            {/* Login Button */}
            <Link
              href="/login"
              className="px-5 py-2 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-600 hover:text-white transition"
            >
              Login
            </Link>

            {/* Open Account Button */}
            <Link
              href="/open-account"
              className="px-5 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
            >
              Open Account
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t space-y-2">
            
            <Link href="/" onClick={closeAll} className="block py-2 text-slate-600">
              Home
            </Link>

            {/* Mobile Products */}
            <button onClick={() => setProductsOpen(!productsOpen)} className="flex w-full justify-between py-2 text-slate-600">
              Products
              <ChevronDown className={`h-4 w-4 ${productsOpen ? 'rotate-180' : ''}`} />
            </button>
            {productsOpen && (
              <div className="pl-4 space-y-1">
                {products.map((product) => (
                  <Link key={product.href} href={product.href} onClick={closeAll} className="block py-2 text-sm text-slate-600">
                    {product.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Mobile Investment */}
            <button onClick={() => setInvestmentOpen(!investmentOpen)} className="flex w-full justify-between py-2 text-slate-600">
              Investment
              <ChevronDown className={`h-4 w-4 ${investmentOpen ? 'rotate-180' : ''}`} />
            </button>
            {investmentOpen && (
              <div className="pl-4 space-y-1">
                {investment.map((item) => (
                  <Link key={item.href} href={item.href} onClick={closeAll} className="block py-2 text-sm text-slate-600">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/mutual-funds" onClick={closeAll} className="block py-2 text-slate-600">
              Mutual Fund
            </Link>

            <Link href="/calculators" onClick={closeAll} className="block py-2 text-slate-600">
              Calculator
            </Link>

            <Link href="/contact" onClick={closeAll} className="block py-2 text-slate-600">
              Contact Us
            </Link>

            <Link href="/login" onClick={closeAll} className="block text-center py-2 border border-orange-600 text-orange-600 rounded-lg">
              Login
            </Link>

            <Link href="/open-account" onClick={closeAll} className="block text-center py-2 bg-orange-600 text-white rounded-lg">
              Open Account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
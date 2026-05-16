import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PiggyBank, TrendingUp, Calendar, Shield } from 'lucide-react';

export const metadata = {
  title: 'Mutual Funds | Ashlar Markets',
  description: 'Invest in direct mutual funds with zero commission. SIP and lump sum investment options available.',
};

export default function MutualFundsPage() {
  return (
    <div className="container-shell ">
     

      <div className="grid gap-8 lg:grid-cols-2 items-start mb-12">
        <div>
         
          <h1 className="text-4xl font-bold text-brand-navy mb-4">Mutual Funds</h1>
          <p className="text-slate-600 mb-6">
            Invest in direct mutual funds with zero commission. Choose from 2000+ funds across all categories - 
            Equity, Debt, Hybrid, and Tax-saving funds.
          </p>
          <Button className="bg-brand-orange hover:bg-brand-orange/90">Start SIP</Button>
        </div>
        <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-3xl text-center">
          <p className="text-2xl font-bold text-brand-orange">Start SIP from ₹500</p>
          <p className="text-sm text-slate-500 mt-2">Zero commission | Direct plans</p>
        </div>
      </div>

      <div className="text-center p-8 bg-gradient-to-r from-brand-orange/10 to-orange-50 rounded-3xl">
        <h3 className="text-2xl font-bold text-brand-navy mb-2">Start Your Investment Journey</h3>
        <p className="text-slate-600 mb-4">Choose from 2000+ mutual funds with free advisory</p>
        <Button className="bg-brand-orange hover:bg-brand-orange/90">Explore Mutual Funds</Button>
      </div>
    </div>
  );
}

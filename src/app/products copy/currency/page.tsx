import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Landmark, Globe, TrendingUp, Shield } from 'lucide-react';

export const metadata = {
  title: 'Currency Trading | Ashlar Markets',
  description: 'Trade Forex pairs on NSE & BSE. Hedge currency risk with futures and options.',
};

export default function CurrencyPage() {
  return (
    <div className="container-shell section-space">
     

      <div className="grid gap-8 lg:grid-cols-2 items-start mb-12">
        <div>
         
          <h1 className="text-4xl font-bold text-brand-navy mb-4">Currency Trading</h1>
          <p className="text-slate-600 mb-6">
            Trade major currency pairs including USD/INR, EUR/INR, GBP/INR, and JPY/INR. 
            Perfect for hedging currency risk or speculation.
          </p>
          <Button className="bg-brand-orange hover:bg-brand-orange/90">Start Forex Trading</Button>
        </div>
        <div className="grid gap-4">
          <Card className="card-surface">
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <span className="font-semibold">USD/INR</span>
                <span className="text-brand-orange">83.45</span>
              </div>
            </CardContent>
          </Card>
          <Card className="card-surface">
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <span className="font-semibold">EUR/INR</span>
                <span className="text-brand-orange">89.23</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="text-center p-8 bg-gradient-to-r from-brand-orange/10 to-orange-50 rounded-3xl">
        <h3 className="text-2xl font-bold text-brand-navy mb-2">Start Currency Trading</h3>
        <p className="text-slate-600 mb-4">Low spreads and competitive margin rates</p>
        <Button className="bg-brand-orange hover:bg-brand-orange/90">Open Currency Account</Button>
      </div>
    </div>
  );
}
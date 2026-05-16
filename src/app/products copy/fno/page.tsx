import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, TrendingUp, Shield, Zap, DollarSign, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'F&O Trading | Ashlar Markets',
  description: 'Trade Futures & Options on NSE. Hedge your portfolio or speculate with advanced F&O tools.',
};

export default function FnOPage() {
  return (
    <div className="container-shell ">
      

      <div className="grid gap-8 lg:grid-cols-2 items-start mb-12">
        <div>
        
          <h1 className="text-4xl font-bold text-brand-navy mb-4">
            Futures & Options<br />
            <span className="text-brand-orange">Trading</span>
          </h1>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Trade Futures & Options on NSE with advanced tools, real-time Greeks, and multi-leg strategy support. 
            Perfect for hedging and speculation.
          </p>
          <div className="flex gap-4">
            <Button className="bg-brand-orange hover:bg-brand-orange/90">Start Trading</Button>
            <Button variant="outline">Learn Strategies</Button>
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl text-center">
          <p className="text-slate-500 mb-2">Margin Required</p>
          <p className="text-4xl font-bold text-brand-orange">From ₹10,000</p>
          <p className="text-sm text-slate-500 mt-2">For Nifty F&O trading</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-12">
        <Card className="card-surface">
          <CardContent className="pt-6">
            <BarChart3 className="h-8 w-8 text-purple-600 mb-3" />
            <h3 className="font-bold text-brand-navy mb-2">Index Options</h3>
            <p className="text-sm text-slate-600">Nifty & Bank Nifty options with multiple expiries</p>
          </CardContent>
        </Card>
        <Card className="card-surface">
          <CardContent className="pt-6">
            <TrendingUp className="h-8 w-8 text-purple-600 mb-3" />
            <h3 className="font-bold text-brand-navy mb-2">Stock F&O</h3>
            <p className="text-sm text-slate-600">200+ stocks available for F&O trading</p>
          </CardContent>
        </Card>
        <Card className="card-surface">
          <CardContent className="pt-6">
            <Shield className="h-8 w-8 text-purple-600 mb-3" />
            <h3 className="font-bold text-brand-navy mb-2">Hedging Tools</h3>
            <p className="text-sm text-slate-600">Protect your portfolio from market volatility</p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center p-8 bg-gradient-to-r from-brand-orange/10 to-orange-50 rounded-3xl">
        <h3 className="text-2xl font-bold text-brand-navy mb-2">Start F&O Trading Today</h3>
        <p className="text-slate-600 mb-4">Get advanced charting, options chain, and real-time Greeks</p>
        <Button className="bg-brand-orange hover:bg-brand-orange/90">Open F&O Trading Account</Button>
      </div>
    </div>
  );
}
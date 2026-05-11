import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, TrendingUp, Calendar, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'IPO Investments | Ashlar Markets',
  description: 'Invest in upcoming and ongoing IPOs. Apply for IPOs online with ASBA facility.',
};

export default function IPOPage() {
  const upcomingIPOs = [
    { name: 'Tata Technologies', date: 'Nov 22-24, 2024', price: '₹450-475' },
    { name: 'IREDA', date: 'Nov 21-23, 2024', price: '₹30-32' },
    { name: 'Gandhar Oil', date: 'Nov 22-24, 2024', price: '₹160-169' },
  ];

  return (
    <div className="container-shell section-space">
      

      <div className="text-center mb-12">
        <div className="eyebrow mx-auto w-fit mb-4">Public Issues</div>
        <h1 className="section-title mb-6">IPO Investments</h1>
        <p className="section-copy mx-auto">
          Invest in upcoming and ongoing IPOs. Apply online with ASBA facility and get allotment directly in your Demat account.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-brand-navy mb-6">Upcoming IPOs</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {upcomingIPOs.map((ipo, idx) => (
            <Card key={idx} className="card-surface">
              <CardContent className="pt-6">
                <h3 className="font-bold text-brand-navy mb-2">{ipo.name}</h3>
                <p className="text-sm text-slate-600">Open: {ipo.date}</p>
                <p className="text-sm text-brand-orange font-semibold mt-2">Price: {ipo.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center p-8 bg-gradient-to-r from-brand-orange/10 to-orange-50 rounded-3xl">
        <h3 className="text-2xl font-bold text-brand-navy mb-2">Apply for IPOs Online</h3>
        <p className="text-slate-600 mb-4">Get IPO alerts and apply with just a few clicks</p>
        <Button className="bg-brand-orange hover:bg-brand-orange/90">View All IPOs</Button>
      </div>
    </div>
  );
}
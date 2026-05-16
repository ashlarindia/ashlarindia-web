import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Bitcoin, Factory, Leaf, Droplet, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Commodities Trading | Ashlar Markets',
  description: 'Trade Gold, Silver, Crude Oil, and other commodities on MCX. Diversify your portfolio with commodity trading.',
};

export default function CommoditiesPage() {
  return (
    <>
    

      <div className="text-center mb-12">
        
        <h1 className="section-title mb-6">Commodities Trading</h1>
        <p className="section-copy mx-auto">
          Trade Gold, Silver, Crude Oil, and other commodities on MCX. Diversify your portfolio and hedge against inflation.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4 mb-12">
        <Card className="card-surface text-center">
          <CardContent className="pt-6">
            <Bitcoin className="h-10 w-10 text-amber-600 mx-auto mb-3" />
            <h3 className="font-bold">Bullion</h3>
            <p className="text-sm text-slate-600">Gold & Silver</p>
          </CardContent>
        </Card>
        <Card className="card-surface text-center">
          <CardContent className="pt-6">
            <Factory className="h-10 w-10 text-slate-600 mx-auto mb-3" />
            <h3 className="font-bold">Metals</h3>
            <p className="text-sm text-slate-600">Copper, Zinc, Lead</p>
          </CardContent>
        </Card>
        <Card className="card-surface text-center">
          <CardContent className="pt-6">
            <Droplet className="h-10 w-10 text-blue-600 mx-auto mb-3" />
            <h3 className="font-bold">Energy</h3>
            <p className="text-sm text-slate-600">Crude Oil, Natural Gas</p>
          </CardContent>
        </Card>
        <Card className="card-surface text-center">
          <CardContent className="pt-6">
            <Leaf className="h-10 w-10 text-green-600 mx-auto mb-3" />
            <h3 className="font-bold">Agri</h3>
            <p className="text-sm text-slate-600">Cotton, Guar, Mentha Oil</p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center p-8 bg-gradient-to-r from-brand-orange/10 to-orange-50 rounded-3xl">
        <h3 className="text-2xl font-bold text-brand-navy mb-2">Start Commodity Trading</h3>
        <p className="text-slate-600 mb-4">Competitive margins and real-time MCX data</p>
        <Button className="bg-brand-orange hover:bg-brand-orange/90">Open Commodity Account</Button>
      </div>
    </>
  );
}

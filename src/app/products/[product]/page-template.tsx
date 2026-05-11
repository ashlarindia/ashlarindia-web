import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PRODUCT_ICON } from 'lucide-react';

export const metadata = {
  title: 'PRODUCT_NAME | Ashlar Markets',
  description: 'PRODUCT_DESCRIPTION',
};

export default function ProductPage() {
  return (
    <div className="container-shell section-space">
     

      <div className="text-center mb-12">
        <div className="eyebrow mx-auto w-fit mb-4">CATEGORY</div>
        <h1 className="section-title mb-6">PRODUCT_NAME</h1>
        <p className="section-copy mx-auto">
          PRODUCT_DESCRIPTION
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-brand-navy mb-4">Why Choose PRODUCT_NAME?</h2>
          <p className="text-slate-600 mb-6">CONTENT_HERE</p>
          <Button className="bg-brand-orange hover:bg-brand-orange/90">
            Get Started
          </Button>
        </div>
        <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl">
          <h3 className="font-bold text-brand-navy mb-3">Key Benefits</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              Benefit 1
            </li>
            <li className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              Benefit 2
            </li>
            <li className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              Benefit 3
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center p-8 bg-gradient-to-r from-brand-orange/10 to-orange-50 rounded-3xl">
        <h3 className="text-2xl font-bold text-brand-navy mb-2">
          Ready to Get Started?
        </h3>
        <Button className="bg-brand-orange hover:bg-brand-orange/90">
          Open Account Now
        </Button>
      </div>
    </div>
  );
}

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Shield, Calendar, DollarSign, FileText, Star } from 'lucide-react';

export const metadata = {
  title: 'Corporate Fixed Deposits | Ashlar Markets',
  description: 'Higher interest rates with assured returns. Invest in corporate FDs for better returns than bank FDs.',
};

export default function CorporateFDsPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Higher Interest Rates',
      description: 'Interest rates on corporate fixed deposits are higher than bank fixed deposits',
    },
    {
      icon: Shield,
      title: 'Secure Investment',
      description: 'Non-transferable nature ensures safety even if FD receipt is lost',
    },
    {
      icon: DollarSign,
      title: 'Tax Benefits',
      description: 'No TDS if interest income is up to ₹5000 in a financial year',
    },
    {
      icon: Calendar,
      title: 'Flexible Tenure',
      description: 'Ideal tenure of 1-3 years for optimal returns',
    },
    {
      icon: FileText,
      title: 'Research Opportunity',
      description: 'Study company growth and reliability before investing',
    },
    {
      icon: Star,
      title: 'Nomination Facility',
      description: 'Nomination facility available for smooth succession',
    },
  ];

  return (
    <div className="container-shell section-space">
    
      <div className="mb-12 text-center">
        <div className="eyebrow mx-auto w-fit mb-4">Fixed Income</div>
        <h1 className="section-title mb-6">Corporate Fixed Deposits</h1>
        <p className="section-copy mx-auto">
          Fixed deposits present an attractive investment option with assured returns and fixed maturity period. 
          Corporate FDs offer higher interest rates than bank FDs.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <Card className="card-surface">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-navy">Understanding Corporate FDs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <p>
                Banks are the largest issuers of fixed deposits in India and they gain the trust of their investors based on their repute. 
                Apart from banks, corporations also issue fixed deposit schemes to raise capital for investments in business activities.
              </p>
              <p>
                These corporate fixed deposits offer a higher rate of interest and guaranteed return at the date of maturity. 
                However, there is also an element of risk involved because if the company faces financial problems, 
                secured creditors would have to be paid first before investors can get the interest on their fixed deposits.
              </p>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Benefits of Corporate FDs</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <Card key={index} className="card-surface">
                  <CardContent className="pt-6">
                    <benefit.icon className="h-10 w-10 text-brand-orange mb-4" />
                    <h3 className="font-bold text-brand-navy mb-2">{benefit.title}</h3>
                    <p className="text-sm text-slate-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="card-surface bg-amber-50 border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-800">Important Note</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-700">
                A prospective investor should study a company growth, repute and reliability before making a fixed deposit. 
                It is advisable to invest in corporate fixed deposits for the tenure of 1-3 years to maintain flexibility.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="card-surface sticky top-24">
            <CardHeader>
              <CardTitle className="text-brand-navy">Calculate Your Returns</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Investment Amount</label>
                <input type="number" placeholder="₹ 50,000" className="w-full rounded-lg border border-slate-200 p-2" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Tenure (Years)</label>
                <select className="w-full rounded-lg border border-slate-200 p-2">
                  <option>1 Year</option>
                  <option>2 Years</option>
                  <option>3 Years</option>
                  <option>5 Years</option>
                </select>
              </div>
              <Button className="w-full bg-brand-orange hover:bg-brand-orange/90">
                Calculate Returns
              </Button>
              <div className="pt-4 border-t border-slate-200">
                <p className="text-sm text-slate-600 text-center">
                  Expected Returns: <span className="font-bold text-brand-orange">8.5% - 9.5% p.a.</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
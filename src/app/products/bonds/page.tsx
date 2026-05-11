import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Landmark, TrendingUp, Shield, DollarSign, Calendar, Receipt } from 'lucide-react';

export const metadata = {
  title: 'Bonds & Government Securities | Ashlar Markets',
  description: 'Invest in government bonds, treasury bills, and dated securities with zero default risk.',
};

export default function BondsPage() {
  const advantages = [
    {
      icon: Receipt,
      title: 'No Tax Deduction at Source',
      description: 'TDS is not applicable on government securities',
    },
    {
      icon: Shield,
      title: 'Zero Default Risk',
      description: 'Government backed securities with highest safety',
    },
    {
      icon: TrendingUp,
      title: 'High Liquidity',
      description: 'Easy to buy and sell in secondary market',
    },
    {
      icon: Calendar,
      title: 'Regular Interest',
      description: 'Interest payments on half-yearly basis',
    },
    {
      icon: DollarSign,
      title: 'Flexible Maturity',
      description: 'Maturity from 2-30 years to suit your needs',
    },
  ];

  return (
    <div className="container-shell section-space">
      

      <div className="mb-12 text-center">
        <div className="eyebrow mx-auto w-fit mb-4">Government Securities</div>
        <h1 className="section-title mb-6">Bonds & Government Securities</h1>
        <p className="section-copy mx-auto">
          Government securities represent one of the best investment options available with 
          zero default risk and attractive returns.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <Card className="card-surface">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-navy">Understanding Government Securities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <p>
                A government security is a financial instrument issued by the Central or State Governments. 
                Only Central Government of India holds the power to issue both treasury bills and bonds or dated securities. 
                State Governments are empowered to issue only bonds or dated securities, also known as State Development Loans (SDLs).
              </p>
              <p>
                Treasury bills represent short-term securities with a maturity period of less than one year. 
                Government bonds or dated securities have a maturity period of one year or longer.
              </p>
              <p>
                Treasury bills are zero-coupon securities issued at a discount on face value and redeemed at face value at maturity. 
                The difference between discounted value and face value represents the accumulated interest.
              </p>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Types of Government Securities</h2>
            <div className="grid gap-4">
              <Card className="card-surface">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-brand-navy mb-2">Treasury Bills (T-bills)</h3>
                  <p className="text-slate-600">Short-term securities with maturity less than one year. Zero-coupon bonds issued at discount.</p>
                </CardContent>
              </Card>
              <Card className="card-surface">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-brand-navy mb-2">Government Dated Securities</h3>
                  <p className="text-slate-600">Fixed rate bonds, floating rate bonds, zero coupon bonds, capital indexed bonds, and bonds with call/put options.</p>
                </CardContent>
              </Card>
              <Card className="card-surface">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-brand-navy mb-2">State Development Loans (SDLs)</h3>
                  <p className="text-slate-600">Bonds issued by state governments for raising public loans.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Advantages of Government Securities</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {advantages.map((adv, index) => (
                <Card key={index} className="card-surface">
                  <CardContent className="pt-6">
                    <adv.icon className="h-10 w-10 text-brand-orange mb-4" />
                    <h3 className="font-bold text-brand-navy mb-2">{adv.title}</h3>
                    <p className="text-sm text-slate-600">{adv.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card className="card-surface sticky top-24">
            <CardHeader>
              <CardTitle className="text-brand-navy">Start Investing in Bonds</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-brand-orange hover:bg-brand-orange/90">
                Open Demat Account
              </Button>
              <Button variant="outline" className="w-full">
                View Current Yields
              </Button>
              <div className="pt-4 text-center">
                <p className="text-sm text-slate-500">Current G-Sec Yields</p>
                <p className="text-xl font-bold text-brand-orange">7.2% - 7.8%</p>
                <p className="text-xs text-slate-500 mt-2">*Rates subject to change</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Car, Home, Heart, Building2, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'General Insurance | Ashlar Markets',
  description: 'Health, vehicle, home, and liability insurance to protect what matters most.',
};

export default function GeneralInsurancePage() {
  const insuranceTypes = [
    { icon: Heart, title: 'Health Insurance', description: 'Coverage for medical treatments and hospitalization' },
    { icon: Car, title: 'Vehicle Insurance', description: 'Protection for your car against accidents and theft' },
    { icon: Home, title: 'Home Insurance', description: 'Cover your home against fire, theft, and natural disasters' },
    { icon: Building2, title: 'Liability Insurance', description: 'Legal protection against third-party claims' },
    { icon: AlertTriangle, title: 'Accident Insurance', description: 'Coverage for accidental injuries and disability' },
    { icon: Shield, title: 'Travel Insurance', description: 'Protection during domestic and international travel' },
  ];

  return (
    <div className="container-shell section-space">
     
      <div className="mb-12 text-center">
        <div className="eyebrow mx-auto w-fit mb-4">Comprehensive Coverage</div>
        <h1 className="section-title mb-6">General Insurance</h1>
        <p className="section-copy mx-auto">
          Apart from life insurance, any other insurance product falls in the category of General Insurance. 
          From health to vehicle, protect everything that matters to you.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <Card className="card-surface">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-navy">Why General Insurance?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <p>
                There are specialized insurance options including Health Insurance and Liability Insurance to cover 
                medical treatment and legal complications respectively. You can insure your possessions against 
                any kind of damage caused due to fire or theft.
              </p>
              <p>
                While buying General Insurance of any kind, it is of great importance to assess your needs intelligently. 
                Without an analysis of what you actually need, it would not be wise to invest in any insurance product.
              </p>
              <p>
                When buying Health Insurance, it is important to consider what diseases it covers and whether it suits your profile. 
                It is also important to consider the repute of the insurance provider and its track record to ensure 
                you do not face problems later in settlement.
              </p>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Insurance Types We Offer</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {insuranceTypes.map((type, index) => (
                <Card key={index} className="card-surface hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <type.icon className="h-8 w-8 text-brand-orange mb-3" />
                    <h3 className="font-semibold text-brand-navy mb-1">{type.title}</h3>
                    <p className="text-sm text-slate-600">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card className="card-surface sticky top-24 bg-gradient-to-br from-brand-orange/5 to-transparent">
            <CardHeader>
              <CardTitle className="text-brand-navy">Need Assistance?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-brand-orange hover:bg-brand-orange/90">
                Get a Quote
              </Button>
              <Button variant="outline" className="w-full">
                Compare Policies
              </Button>
              <div className="pt-4 text-center text-sm text-slate-600">
                <p>Toll Free: 1800-123-9343</p>
                <p className="mt-2">Email: insurance@ashlarmarkets.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Shield, PiggyBank, Users, Heart, Briefcase } from 'lucide-react';

export const metadata = {
  title: 'Life Insurance | Ashlar Markets',
  description: 'Financial protection for your family with life insurance. Tax savings, wealth generation, and retirement planning options.',
};

export default function LifeInsurancePage() {
  const benefits = [
    {
      icon: Shield,
      title: 'Financial Protection',
      description: 'Secure your family\'s future in case of sudden demise or disability',
    },
    {
      icon: PiggyBank,
      title: 'Tax Savings',
      description: 'Save taxes while building wealth for the future',
    },
    {
      icon: Users,
      title: 'Child Education',
      description: 'Fund your child\'s education and career with child plans',
    },
    {
      icon: Heart,
      title: 'Contingency Planning',
      description: 'Protection against death, disability, disease, and financial needs',
    },
    {
      icon: Briefcase,
      title: 'Retirement Planning',
      description: 'Ensure regular income post-retirement',
    },
  ];

  return (
    <div className="container-shell section-space">
      {/* Breadcrumb */}
      

      {/* Hero Section */}
      <div className="mb-16 text-center">
        <div className="eyebrow mx-auto w-fit mb-4">Financial Security</div>
        <h1 className="section-title mb-6">Life Insurance</h1>
        <p className="section-copy mx-auto">
          Life insurance provides your family with financial protection in case of sudden demise or disability. 
          Beyond protection, it offers tax savings and wealth generation opportunities.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-12 lg:grid-cols-3">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="card-surface">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-navy">Understanding Life Insurance</CardTitle>
              <CardDescription className="text-base text-slate-600">
                A comprehensive guide to life insurance and its benefits
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <p>
                Life insurance is meant to provide a family with financial protection in case of sudden demise or disability suffered by an earning member. 
                Apart from this primary function, life insurance can also be used for tax-savings and wealth generation.
              </p>
              <p>
                There are different types of life insurance policies available to meet individual needs of the policy buyer. 
                You can also fund your child's education and career by making a wise investment in a child plan which meets your needs. 
                Basically, this product is meant to work as a contingency plan, whether it is against death, disability, disease, or even financial need.
              </p>
              <p>
                It is also important to consider your financial objectives while choosing your life insurance policy otherwise you might end up with an option which does not meet your needs effectively. 
                It is important to consider it as a risk management tool and not just another financial instrument.
              </p>
              <p>
                If you have no dependents, even then life insurance can be useful to meet any debts or medical bills. 
                You can also opt for retirement planning options to ensure you have a regular income post-retirement.
              </p>
            </CardContent>
          </Card>

          {/* Benefits Grid */}
          <div>
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Key Benefits</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <Card key={index} className="card-surface hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <benefit.icon className="h-10 w-10 text-brand-orange mb-4" />
                    <h3 className="font-bold text-brand-navy mb-2">{benefit.title}</h3>
                    <p className="text-sm text-slate-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - CTA Sidebar */}
        <div className="lg:col-span-1">
          <Card className="card-surface sticky top-24 bg-gradient-to-br from-brand-orange/5 to-transparent">
            <CardHeader>
              <CardTitle className="text-brand-navy">Get Started Today</CardTitle>
              <CardDescription>
                Protect your family's financial future
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-brand-orange hover:bg-brand-orange/90">
                Get a Quote
              </Button>
              <Button variant="outline" className="w-full">
                Talk to an Expert
              </Button>
              <div className="pt-4 text-sm text-slate-600">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Free consultation
                </p>
                <p className="flex items-center gap-2 mt-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Compare plans
                </p>
                <p className="flex items-center gap-2 mt-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  No obligation
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
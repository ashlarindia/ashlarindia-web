import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Shield, RefreshCw, Network, Zap, FileCheck } from 'lucide-react';

export const metadata = {
  title: 'Depository Participant | Demat Services | Ashlar Markets',
  description: 'Open Demat account with CDSL & NSDL registered Depository Participant. Dematerialization, rematerialization, and secure securities management.',
};

export default function DepositoryParticipantPage() {
  const services = [
    {
      icon: Database,
      title: 'Dematerialization',
      description: 'Convert physical securities into electronic form',
    },
    {
      icon: RefreshCw,
      title: 'Rematerialization',
      description: 'Convert electronic securities back to physical form',
    },
    {
      icon: Network,
      title: 'Transfer of Securities',
      description: 'Instant transfer without stamp duty',
    },
    {
      icon: FileCheck,
      title: 'Change of Ownership',
      description: 'Seamless beneficial ownership transfer',
    },
    {
      icon: Zap,
      title: 'Settlement of Trades',
      description: 'Quick and efficient trade settlement',
    },
    {
      icon: Shield,
      title: 'Secure Storage',
      description: 'Better method for storing securities electronically',
    },
  ];

  return (
    <div className="container-shell section-space">
      

      <div className="mb-12 text-center">
        <div className="eyebrow mx-auto w-fit mb-4">Demat Services</div>
        <h1 className="section-title mb-6">Depository Participant</h1>
        <p className="section-copy mx-auto">
          Open a Beneficial Owner (BO) account with Ashlar Markets, a registered Depository Participant 
          with CDSL and NSDL, to avail of comprehensive depository services.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <Card className="card-surface">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-navy">What is a Depository?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <p>
                A depository is a place where securities are deposited for storage and security in electronic form through registered Depository Participants. 
                It's an institution that functions like a bank - while banks hold funds, depositories keep accounts for investors' securities 
                (shares, mutual funds, debentures, etc.) in dematerialized form.
              </p>
              <p>
                Banks, financial institutions, stock-brokers, and clearing houses can be Depository Participants in India by registering with 
                <span className="font-semibold text-brand-orange"> Central Depository Services (India) Limited (CDSL)</span> and 
                <span className="font-semibold text-brand-orange"> National Securities Depository Limited (NSDL)</span>.
              </p>
              <p>
                Both depositories are registered with Securities and Exchange Board of India (SEBI), ensuring complete regulatory compliance and investor protection.
              </p>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-2xl font-bold text-brand-navy mb-6">DP Services & Benefits</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service, index) => (
                <Card key={index} className="card-surface hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <service.icon className="h-10 w-10 text-brand-orange mb-4" />
                    <h3 className="font-bold text-brand-navy mb-2">{service.title}</h3>
                    <p className="text-sm text-slate-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="card-surface bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Additional Benefits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-green-700">
              <p>✓ Prevents risk of bad delivery, theft, forgery, or delays associated with physical securities</p>
              <p>✓ Lower charges for each transaction compared to physical securities</p>
              <p>✓ Automatic credit of bonus, split, consolidation, or merger shares into Demat account</p>
              <p>✓ Single address change updates across all held companies automatically</p>
              <p>✓ Greater transparency in securities management</p>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="card-surface sticky top-24 bg-gradient-to-br from-brand-orange/5 to-transparent">
            <CardHeader>
              <CardTitle className="text-brand-navy">Open Demat Account</CardTitle>
              <p className="text-sm text-slate-600">Free AMC for first year</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-brand-orange hover:bg-brand-orange/90">
                Open Instant Demat Account
              </Button>
              <Button variant="outline" className="w-full">
                Calculate Account Charges
              </Button>
              <div className="pt-4 border-t border-slate-200">
                <div className="flex justify-between text-sm mb-2">
                  <span>Account Opening:</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Annual Maintenance:</span>
                  <span className="font-semibold">₹0 (First Year)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>CDSL/NSDL Regd.:</span>
                  <span className="font-semibold text-green-600">✓ Yes</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
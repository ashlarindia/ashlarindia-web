'use client';

import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  RefreshCw, 
  Headphones, 
  Shield, 
  Settings, 
  Users, 
  Database, 
  Briefcase,
  TrendingUp
} from 'lucide-react';
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

// Generate random math captcha
const generateCaptcha = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const isAddition = Math.random() > 0.5;
  
  if (isAddition) {
    return { question: `${num1} + ${num2}`, answer: num1 + num2 };
  } else {
    if (num1 >= num2) {
      return { question: `${num1} - ${num2}`, answer: num1 - num2 };
    } else {
      return { question: `${num2} - ${num1}`, answer: num2 - num1 };
    }
  }
};

// Department Contact Data
const DEPARTMENTS = [
  {
    icon: Headphones,
    title: 'Help Desk',
    phone: '0120-6633205, 231, 238',
    email: 'care@ashlarindia.com',
    timing: 'Mon-Sat, 9 AM - 6 PM',
  },
  {
    icon: TrendingUp,
    title: 'Trading',
    phone: '0120-6633211/12/13/14, 7290024281, 8448392584, 8448392583, 9540173336',
    email: 'trading@ashlarindia.com',
    timing: 'Mon-Fri, 9:15 AM - 3:30 PM',
  },
  {
    icon: Shield,
    title: 'Risk Management Service (RMS)',
    phone: '0120-6633207/08/09/10, 8448392585',
    email: 'rms@ashlarindia.com',
    timing: 'Mon-Fri, 9 AM - 5 PM',
  },
  {
    icon: Users,
    title: 'Accounts',
    phone: '0120-6633220/22',
    email: 'fundsout@ashlarindia.com',
    timing: 'Mon-Sat, 10 AM - 6 PM',
  },
  {
    icon: Briefcase,
    title: 'Sales Support',
    phone: '0120-6633238',
    email: 'b2b@ashlarindia.com',
    timing: 'Mon-Sat, 10 AM - 7 PM',
  },
  {
    icon: Database,
    title: 'IT Support',
    phone: '0120-6633228/16/17, 7290054834',
    email: 'itsupport@ashlarindia.com',
    timing: '24x7',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [captcha, setCaptcha] = useState(() => generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setCaptcha(generateCaptcha());
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCaptchaInput(e.target.value);
    if (captchaError) setCaptchaError(false);
  };

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput('');
    setCaptchaError(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (parseInt(captchaInput) !== captcha.answer) {
      setCaptchaError(true);
      return;
    }
    
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData(INITIAL_FORM);
        setCaptchaInput('');
        setCaptcha(generateCaptcha());
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
     

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Call Now and Toll Free Banner */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8 text-center">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Get in Touch</h2>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <div>
                <span className="text-gray-500">Call Now:</span>
                <span className="font-semibold text-gray-900 ml-2">0120-6633205, 231, 238</span>
              </div>
              <div>
                <span className="text-gray-500">Toll Free:</span>
                <span className="font-semibold text-gray-900 ml-2">18001239343</span>
              </div>
            </div>
          </div>

          {/* Department Contacts Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Department Wise Contacts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DEPARTMENTS.map((dept, idx) => {
                const Icon = dept.icon;
                return (
                  <div key={idx} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Icon size={20} className="text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900">{dept.title}</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600 break-words">
                        <span className="font-medium">Phone:</span> {dept.phone}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Email:</span>{' '}
                        <a href={`mailto:${dept.email}`} className="text-blue-600 hover:underline">{dept.email}</a>
                      </p>
                      <p className="text-sm text-gray-500">
                        <span className="font-medium">Timing:</span> {dept.timing}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
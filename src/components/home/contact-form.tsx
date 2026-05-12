'use client';

import { useState, ChangeEvent, FormEvent, useEffect } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormField {
  id: keyof FormData;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const FIELDS: FormField[] = [
  { id: 'name',    label: 'Full name',      type: 'text',  placeholder: 'Enter your full name', required: true },
  { id: 'email',   label: 'Email address',  type: 'email', placeholder: 'your@email.com',       required: true },
  { id: 'phone',   label: 'Phone number',   type: 'tel',   placeholder: '+91 XXXXX XXXXX',      required: true },
  { id: 'subject', label: 'Subject',        type: 'text',  placeholder: 'How can we help you?', required: true },
];

const CONTACT_INFO = [
  { icon: '📞', label: 'Call us', value: '0120-6633299', sub: 'Mon–Sat, 9 AM – 6 PM' },
  { icon: '✉️', label: 'Email us', value: 'investorcell@ashlarindia.com', sub: 'Reply within 24 hours' },
  { icon: '📍', label: 'Head office', value: 'A-38, Sector-10, Noida-201301', sub: 'Sector-10, Noida' },
];

// Generate random math captcha
const generateCaptcha = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const isAddition = Math.random() > 0.5;
  
  if (isAddition) {
    return { question: `${num1} + ${num2}`, answer: num1 + num2 };
  } else {
    // Ensure num1 >= num2 for subtraction to avoid negatives
    if (num1 >= num2) {
      return { question: `${num1} - ${num2}`, answer: num1 - num2 };
    } else {
      return { question: `${num2} - ${num1}`, answer: num2 - num1 };
    }
  }
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [captcha, setCaptcha] = useState(() => generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState(false);
  const [phoneForCall, setPhoneForCall] = useState('');
  const [showCallbackMsg, setShowCallbackMsg] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Fix hydration
  useEffect(() => {
    setIsMounted(true);
    // Regenerate captcha on client only
    setCaptcha(generateCaptcha());
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
    
    // Validate captcha
    if (parseInt(captchaInput) !== captcha.answer) {
      setCaptchaError(true);
      return;
    }
    
    setStatus('loading');
    try {
      // Replace with your actual API endpoint
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
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleCallRequest = (e: FormEvent) => {
    e.preventDefault();
    if (phoneForCall.length >= 10) {
      setShowCallbackMsg(true);
      setTimeout(() => setShowCallbackMsg(false), 5000);
    }
  };

  // Don't render on server to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Get in Touch
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto">
            Have a question? We're here to help you with your trading journey
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Left Side - Contact Info & Callback Section */}
          <div className="lg:col-span-2">
            {/* Contact Cards */}
            <div className="space-y-4 mb-6">
              {CONTACT_INFO.map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl border border-gray-200 p-5 flex items-start gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-gray-900">{item.value}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Callback Request Section - Like Lakshmishree */}
            <div className="bg-gray-900 rounded-xl p-6 text-white">
              {!showCallbackMsg ? (
                <>
                  <h3 className="text-lg font-bold mb-3">Please enter your phone number</h3>
                  <p className="text-gray-300 text-sm mb-4">and we call you back soon</p>
                  <form onSubmit={handleCallRequest} className="space-y-3">
                    <input
                      type="tel"
                      value={phoneForCall}
                      onChange={(e) => setPhoneForCall(e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-2 rounded-lg text-gray-900 text-sm"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold transition-colors"
                    >
                      Request Callback
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="text-4xl mb-3">📞</div>
                  <h3 className="text-lg font-bold mb-2">We are calling you to {phoneForCall}</h3>
                  <p className="text-gray-300 text-sm">Thank you. We'll call you back soon.</p>
                </div>
              )}
            </div>

            {/* SEBI Notice - Compliance */}
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-xs font-semibold text-amber-800 mb-1">SEBI Investor Helpline</p>
              <p className="text-sm font-bold text-amber-900">1800 266 7575</p>
              <p className="text-xs text-amber-700 mt-1">
                For grievance escalation, contact SEBI SCORES portal at{' '}
                <span className="font-semibold">scores.gov.in</span>
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="h-1 w-full bg-blue-600" />
              
              <div className="p-6 md:p-8">
                {/* Success Message */}
                {status === 'success' && (
                  <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm font-semibold text-green-800">✓ Message sent successfully</p>
                    <p className="text-xs text-green-700 mt-1">
                      Our support team will get back to you within one business day.
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {status === 'error' && (
                  <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-sm font-semibold text-red-800">Something went wrong</p>
                    <p className="text-xs text-red-700 mt-1">
                      Please try again or email us directly at investorcell@ashlarindia.com
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    {FIELDS.slice(0, 2).map((field) => (
                      <div key={field.id}>
                        <label htmlFor={field.id} className="block text-xs font-semibold text-gray-700 mb-1.5">
                          {field.label} {field.required && <span className="text-red-500">*</span>}
                        </label>
                        <input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                          value={formData[field.id]}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                          className="w-full px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all disabled:opacity-50"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Phone & Subject */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    {FIELDS.slice(2, 4).map((field) => (
                      <div key={field.id}>
                        <label htmlFor={field.id} className="block text-xs font-semibold text-gray-700 mb-1.5">
                          {field.label} {field.required && <span className="text-red-500">*</span>}
                        </label>
                        <input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                          value={formData[field.id]}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                          className="w-full px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all disabled:opacity-50"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Message */}
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Please describe your query in detail..."
                      value={formData.message}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className="w-full px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all resize-none disabled:opacity-50"
                    />
                  </div>

                  {/* Math CAPTCHA */}
                  <div className="mb-6">
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Verify you are human <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-100 border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-mono font-semibold">
                        {captcha.question} = ?
                      </div>
                      <input
                        type="text"
                        value={captchaInput}
                        onChange={handleCaptchaChange}
                        placeholder="Enter answer"
                        className="w-24 px-3 py-2.5 text-sm text-gray-900 text-center bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={status === 'loading'}
                      />
                      <button
                        type="button"
                        onClick={refreshCaptcha}
                        className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
                        aria-label="Refresh captcha"
                      >
                        ↻
                      </button>
                    </div>
                    {captchaError && (
                      <p className="text-xs text-red-500 mt-1">Incorrect answer. Please try again.</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all disabled:opacity-60"
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-400 mt-4">
                    By submitting, you agree to our{' '}
                    <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                    We never share your data.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
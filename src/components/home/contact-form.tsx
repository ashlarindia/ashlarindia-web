'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

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
  pattern?: string;
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
  { id: 'name',    label: 'Full name',      type: 'text',  placeholder: 'Rahul Sharma',            required: true  },
  { id: 'email',   label: 'Email address',  type: 'email', placeholder: 'rahul@example.com',       required: true  },
  { id: 'phone',   label: 'Phone number',   type: 'tel',   placeholder: '+91 98765 43210',         required: false, pattern: '[0-9+\\s]{10,14}' },
  { id: 'subject', label: 'Subject',        type: 'text',  placeholder: 'Account opening query',   required: true  },
];

const CONTACT_INFO = [
  { icon: '📞', label: 'Call us',     value: '0120-6633299',          sub: 'Mon–Sat, 9 AM – 6 PM' },
  { icon: '✉️', label: 'Email us',    value: 'investorcell@ashlarindia.com',       sub: 'Reply within 24 hours' },
  { icon: '📍', label: 'Head office', value: 'A-38, Sector-10, Noida-201301 ',      sub: 'Sector-10, Noida-201301' },
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus]     = useState<SubmitStatus>('idle');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // Replace with your actual API call
      await new Promise((res) => setTimeout(res, 1200));
      setStatus('success');
      setFormData(INITIAL_FORM);
    } catch {
      setStatus('error');
    }
  };

  const isLoading = status === 'loading';

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            Get in touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            We&apos;re here to help
          </h2>
          <p className="text-slate-500 text-base max-w-md mx-auto">
            Have a question about your account, trading, or our products? Our
            team responds within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* ── Left: contact info ── */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {CONTACT_INFO.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl border border-slate-200 p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-slate-900">{item.value}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}

            {/* SEBI notice */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <p className="text-xs font-semibold text-amber-800 mb-1">SEBI investor helpline</p>
              <p className="text-sm font-bold text-amber-900">1800 266 7575</p>
              <p className="text-xs text-amber-700 mt-1">
                For grievance escalation, contact SEBI SCORES portal at{' '}
                <span className="font-semibold">scores.gov.in</span>
              </p>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">

              {/* Top accent */}
              <div className="h-1 w-full bg-blue-600" />

              <div className="p-7">

                {/* Success state */}
                {status === 'success' && (
                  <div className="mb-6 flex items-start gap-3 bg-teal-50 border border-teal-200 rounded-xl p-4">
                    <span className="text-teal-600 text-lg mt-0.5">✓</span>
                    <div>
                      <p className="text-sm font-semibold text-teal-800">Message sent successfully</p>
                      <p className="text-xs text-teal-700 mt-0.5">
                        Our support team will get back to you within one business day.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error state */}
                {status === 'error' && (
                  <div className="mb-6 flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                    <span className="text-red-500 text-lg mt-0.5">!</span>
                    <div>
                      <p className="text-sm font-semibold text-red-800">Something went wrong</p>
                      <p className="text-xs text-red-700 mt-0.5">
                        Please try again or email us directly at support@finvest.in
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>

                  {/* Top two fields side by side */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    {FIELDS.slice(0, 2).map((field) => (
                      <div key={field.id}>
                        <label
                          htmlFor={field.id}
                          className="block text-xs font-semibold text-slate-700 mb-1.5"
                        >
                          {field.label}
                          {field.required && (
                            <span className="text-red-500 ml-0.5">*</span>
                          )}
                        </label>
                        <input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                          value={formData[field.id]}
                          onChange={handleChange}
                          disabled={isLoading}
                          className="w-full px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-150 disabled:opacity-50"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Phone + Subject side by side */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    {FIELDS.slice(2, 4).map((field) => (
                      <div key={field.id}>
                        <label
                          htmlFor={field.id}
                          className="block text-xs font-semibold text-slate-700 mb-1.5"
                        >
                          {field.label}
                          {field.required && (
                            <span className="text-red-500 ml-0.5">*</span>
                          )}
                        </label>
                        <input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                          pattern={field.pattern}
                          value={formData[field.id]}
                          onChange={handleChange}
                          disabled={isLoading}
                          className="w-full px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-150 disabled:opacity-50"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Describe your query in detail so we can help you faster…"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="w-full px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-150 resize-none disabled:opacity-50"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white text-sm font-semibold rounded-xl transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send message
                        <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400 mt-4">
                    By submitting, you agree to our{' '}
                    <span className="text-blue-600 cursor-pointer hover:underline">Privacy Policy</span>.
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
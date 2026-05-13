'use client';

import { useState } from 'react';
import { Download, FileText, File, FileSpreadsheet, ChevronDown, ChevronUp, ExternalLink, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

export default function DownloadsPage() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    app: true,
    forms: false,
    brochures: false,
    policies: false,
    software: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // Downloads data
  const downloads = {
    app: [
      { 
        title: 'Ashlar India Mobile App - Android', 
        description: 'Trade on the go with our Android mobile application. Get real-time market data, place orders, and track your portfolio.',
        type: 'apk',
        size: '25 MB',
        version: 'v4.2.1',
        downloadUrl: '/downloads/ashlar-india-android.apk',
        lastUpdated: 'March 15, 2024'
      },
      { 
        title: 'Ashlar India Mobile App - iOS', 
        description: 'Download our iOS app for iPhone and iPad. Seamless trading experience on Apple devices.',
        type: 'app',
        size: '48 MB',
        version: 'v4.2.1',
        downloadUrl: 'https://apps.apple.com/in/app/ashlar-india/id123456789',
        external: true,
        lastUpdated: 'March 15, 2024'
      }
    ],
    forms: [
      { 
        title: 'Demat Account Opening Form', 
        description: 'Complete offline account opening form. Fill, sign, and submit to our nearest branch.',
        type: 'pdf',
        size: '2.5 MB',
        downloadUrl: '/pdfs/Demat-Account-Opening-Form.pdf',
        lastUpdated: 'January 2024'
      },
      { 
        title: 'Trading Account Application Form', 
        description: 'Trading account application form for offline submission.',
        type: 'pdf',
        size: '1.8 MB',
        downloadUrl: '/pdfs/Trading-Account-Application-Form.pdf',
        lastUpdated: 'January 2024'
      },
      { 
        title: 'KYC Form - Individual', 
        description: 'Know Your Customer (KYC) form for individual investors.',
        type: 'pdf',
        size: '1.2 MB',
        downloadUrl: '/pdfs/KYC-Form-Individual.pdf',
        lastUpdated: 'December 2023'
      },
      { 
        title: 'KYC Form - Non-Individual', 
        description: 'KYC form for corporate, partnership firms, and other entities.',
        type: 'pdf',
        size: '1.5 MB',
        downloadUrl: '/pdfs/KYC-Form-Non-Individual.pdf',
        lastUpdated: 'December 2023'
      },
      { 
        title: 'Nomination Form', 
        description: 'Register or update your nominee details using this form.',
        type: 'pdf',
        size: '1.1 MB',
        downloadUrl: '/pdfs/Nomination-Form.pdf',
        lastUpdated: 'February 2024'
      },
      { 
        title: 'Re-KYC Form', 
        description: 'Update your KYC details using this form.',
        type: 'pdf',
        size: '1.3 MB',
        downloadUrl: '/pdfs/Re-KYC-Form.pdf',
        lastUpdated: 'March 2024'
      }
    ],
    brochures: [
      { 
        title: 'Ashlar India - Company Brochure', 
        description: 'Learn about our products, services, and why you should trade with us.',
        type: 'pdf',
        size: '4.2 MB',
        downloadUrl: '/pdfs/Ashlar-India-Brochure.pdf',
        lastUpdated: 'January 2024'
      },
      { 
        title: 'Trading Platforms Guide', 
        description: 'Complete guide to using our web and mobile trading platforms.',
        type: 'pdf',
        size: '3.8 MB',
        downloadUrl: '/pdfs/Trading-Platforms-Guide.pdf',
        lastUpdated: 'February 2024'
      },
      { 
        title: 'Product Brochure - Equity & Derivatives', 
        description: 'Detailed information about equity and derivatives trading.',
        type: 'pdf',
        size: '3.2 MB',
        downloadUrl: '/pdfs/Equity-Derivatives-Brochure.pdf',
        lastUpdated: 'December 2023'
      }
    ],
    policies: [
      { 
        title: 'Investor Charter', 
        description: 'Your rights and responsibilities as an investor with Ashlar India.',
        type: 'pdf',
        size: '1.5 MB',
        downloadUrl: '/pdfs/Investor-Charter.pdf',
        lastUpdated: 'January 2024'
      },
      { 
        title: 'Best Execution Policy', 
        description: 'Our policy on order execution and best practices.',
        type: 'pdf',
        size: '1.2 MB',
        downloadUrl: '/pdfs/Best-Execution-Policy.pdf',
        lastUpdated: 'January 2024'
      },
      { 
        title: 'Conflict of Interest Policy', 
        description: 'Disclosure of conflicts of interest and mitigation measures.',
        type: 'pdf',
        size: '1.1 MB',
        downloadUrl: '/pdfs/Conflict-of-Interest-Policy.pdf',
        lastUpdated: 'January 2024'
      },
      { 
        title: 'Privacy Policy', 
        description: 'How we collect, use, and protect your personal information.',
        type: 'pdf',
        size: '1.4 MB',
        downloadUrl: '/pdfs/Privacy-Policy.pdf',
        lastUpdated: 'March 2024'
      },
      { 
        title: 'Terms & Conditions', 
        description: 'Terms and conditions for using our trading platforms and services.',
        type: 'pdf',
        size: '2.1 MB',
        downloadUrl: '/pdfs/Terms-Conditions.pdf',
        lastUpdated: 'March 2024'
      }
    ],
    software: [
      { 
        title: 'Ashlar India Web Trading Platform', 
        description: 'Access our web-based trading platform. No download required.',
        type: 'web',
        size: 'N/A',
        downloadUrl: 'https://trading.ashlarindia.com',
        external: true,
        lastUpdated: 'Always Updated'
      },
      { 
        title: 'API Documentation', 
        description: 'Developer documentation for our trading API.',
        type: 'pdf',
        size: '3.5 MB',
        downloadUrl: '/pdfs/API-Documentation.pdf',
        lastUpdated: 'February 2024'
      }
    ]
  };

  const getIcon = (type: string) => {
    switch(type) {
      case 'pdf': return <FileText size={20} />;
      case 'apk': return <File size={20} />;
      case 'app': return <File size={20} />;
      case 'web': return <ExternalLink size={20} />;
      default: return <FileSpreadsheet size={20} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A1A2E] to-[#2D2D4A] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Downloads</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Download important forms, applications, and resources
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        
        {/* Quick Contact Bar */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8 grid md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Phone size={18} className="text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Call for Assistance</p>
              <a href="tel:+911206633299" className="text-sm font-semibold text-gray-900">0120-6633299</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Mail size={18} className="text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Email Support</p>
              <a href="mailto:support@ashlarindia.com" className="text-sm font-semibold text-gray-900">support@ashlarindia.com</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Clock size={18} className="text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Support Hours</p>
              <p className="text-sm font-semibold text-gray-900">Mon-Sat, 9 AM - 6 PM</p>
            </div>
          </div>
        </div>

        {/* Downloads Sections */}
        <div className="space-y-6">
          
          {/* Mobile App */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <button
              onClick={() => toggleSection('app')}
              className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <File size={20} className="text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Mobile Apps</h2>
              </div>
              {openSections.app ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openSections.app && (
              <div className="p-6 space-y-4">
                {downloads.app.map((item, idx) => (
                  <div key={idx} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {getIcon(item.type)}
                          <h3 className="font-semibold text-gray-900">{item.title}</h3>
                          {item.version && <span className="text-xs text-gray-400">v{item.version}</span>}
                        </div>
                        <p className="text-sm text-gray-500 mb-2">{item.description}</p>
                        <div className="flex gap-4 text-xs text-gray-400">
                          <span>Size: {item.size}</span>
                          <span>Updated: {item.lastUpdated}</span>
                        </div>
                      </div>
                      <a
                        href={item.downloadUrl}
                        target={item.external ? '_blank' : '_self'}
                        rel={item.external ? 'noopener noreferrer' : ''}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                      >
                        <Download size={16} /> Download
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Forms */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <button
              onClick={() => toggleSection('forms')}
              className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <FileText size={20} className="text-green-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Account Forms</h2>
              </div>
              {openSections.forms ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openSections.forms && (
              <div className="p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {downloads.forms.map((item, idx) => (
                    <div key={idx} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {getIcon(item.type)}
                            <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                          </div>
                          <p className="text-xs text-gray-500 mb-2">{item.description}</p>
                          <div className="flex justify-between text-xs text-gray-400">
                            <span>{item.size}</span>
                            <span>Updated: {item.lastUpdated}</span>
                          </div>
                        </div>
                        <a
                          href={item.downloadUrl}
                          className="flex-shrink-0 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium hover:bg-blue-600 hover:text-white transition-colors"
                        >
                          <Download size={14} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Brochures */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <button
              onClick={() => toggleSection('brochures')}
              className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FileText size={20} className="text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Brochures & Guides</h2>
              </div>
              {openSections.brochures ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openSections.brochures && (
              <div className="p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {downloads.brochures.map((item, idx) => (
                    <div key={idx} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                          <p className="text-xs text-gray-500 mb-2">{item.description}</p>
                          <div className="flex justify-between text-xs text-gray-400">
                            <span>{item.size}</span>
                            <span>Updated: {item.lastUpdated}</span>
                          </div>
                        </div>
                        <a href={item.downloadUrl} className="flex-shrink-0 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium hover:bg-blue-600 hover:text-white transition-colors">
                          <Download size={14} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Policies */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <button
              onClick={() => toggleSection('policies')}
              className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FileText size={20} className="text-orange-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Policies & Disclosures</h2>
              </div>
              {openSections.policies ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openSections.policies && (
              <div className="p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {downloads.policies.map((item, idx) => (
                    <div key={idx} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                          <p className="text-xs text-gray-500 mb-2">{item.description}</p>
                          <div className="flex justify-between text-xs text-gray-400">
                            <span>{item.size}</span>
                            <span>Updated: {item.lastUpdated}</span>
                          </div>
                        </div>
                        <a href={item.downloadUrl} className="flex-shrink-0 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium hover:bg-blue-600 hover:text-white transition-colors">
                          <Download size={14} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Software & API */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <button
              onClick={() => toggleSection('software')}
              className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <File size={20} className="text-teal-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Software & API</h2>
              </div>
              {openSections.software ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openSections.software && (
              <div className="p-6 space-y-4">
                {downloads.software.map((item, idx) => (
                  <div key={idx} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {getIcon(item.type)}
                          <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">{item.description}</p>
                        <div className="text-xs text-gray-400">Updated: {item.lastUpdated}</div>
                      </div>
                      <a
                        href={item.downloadUrl}
                        target={item.external ? '_blank' : '_self'}
                        rel={item.external ? 'noopener noreferrer' : ''}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                      >
                        {item.external ? <ExternalLink size={16} /> : <Download size={16} />}
                        {item.external ? 'Access' : 'Download'}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Need Help Section */}
        <div className="mt-10 bg-blue-50 rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help Finding a Document?</h3>
          <p className="text-gray-600 mb-4">Contact our support team and we'll email you the required form or document.</p>
          <Link href="/supports/contact-us" className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
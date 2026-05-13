'use client';

import { useState } from 'react';
import { AlertTriangle, Shield, Mail, Phone } from 'lucide-react';

export default function ComplaintsPage() {
  const [complaintType, setComplaintType] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Grievance Redressal</h1>
        <p className="text-gray-500 mb-8">We take your complaints seriously. Here's how to escalate.</p>

        {/* Escalation Matrix */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <h2 className="text-xl font-semibold text-gray-900 p-6 border-b border-gray-200">Escalation Matrix</h2>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Level</th>
                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Contact Person</th>
                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Contact</th>
                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Response Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-6 text-gray-600">Level 1</td>
                <td className="py-3 px-6 text-gray-900">Customer Support</td>
                <td className="py-3 px-6">
                  <a href="mailto:support@ashlarindia.com" className="text-blue-600">support@ashlarindia.com</a>
                </td>
                <td className="py-3 px-6 text-gray-600">24 hours</td>
               </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-6 text-gray-600">Level 2</td>
                <td className="py-3 px-6 text-gray-900">Compliance Officer</td>
                <td className="py-3 px-6">
                  <a href="mailto:compliance@ashlarindia.com" className="text-blue-600">compliance@ashlarindia.com</a>
                </td>
                <td className="py-3 px-6 text-gray-600">48 hours</td>
               </tr>
              <tr>
                <td className="py-3 px-6 text-gray-600">Level 3</td>
                <td className="py-3 px-6 text-gray-900">SEBI SCORES</td>
                <td className="py-3 px-6">
                  <a href="https://scores.gov.in" target="_blank" className="text-blue-600">scores.gov.in</a>
                </td>
                <td className="py-3 px-6 text-gray-600">As per SEBI</td>
               </tr>
            </tbody>
           </table>
        </div>

        {/* SEBI Notice */}
        <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle size={20} className="text-yellow-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-yellow-800 mb-1">SEBI Investor Helpline</p>
              <p className="text-sm text-yellow-700">
                If your complaint is not resolved within 30 days, you can lodge a complaint with SEBI SCORES portal.
              </p>
              <p className="text-sm text-yellow-700 mt-2">
                Call: 1800-266-7575 | Visit: scores.gov.in
              </p>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <Mail size={24} className="text-blue-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Email Your Complaint</h3>
            <p className="text-sm text-gray-500 mb-3">Send detailed complaint to:</p>
            <a href="mailto:compliance@ashlarindia.com" className="text-blue-600 font-medium">compliance@ashlarindia.com</a>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <Phone size={24} className="text-blue-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Call Our Grievance Cell</h3>
            <p className="text-sm text-gray-500 mb-3">Speak to our compliance officer:</p>
            <a href="tel:+911206633299" className="text-blue-600 font-medium">0120-6633299</a>
          </div>
        </div>
      </div>
    </div>
  );
}
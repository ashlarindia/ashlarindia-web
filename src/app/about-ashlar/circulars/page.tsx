'use client';

export default function CircularsPage() {
  const circulars = [
    {
      id: 1,
      title: 'SEBI Circular: Revision in Risk Management Framework',
      date: 'March 10, 2024',
      downloadLink: '/pdfs/sebi-circular-risk-management.pdf'
    },
    {
      id: 2,
      title: 'Exchange Notice: Trading Hours Changes for Ramzan',
      date: 'March 5, 2024',
      downloadLink: '/pdfs/trading-hours-ramzan.pdf'
    },
    {
      id: 3,
      title: 'NSE Circular: New Margin Requirements for F&O',
      date: 'February 28, 2024',
      downloadLink: '/pdfs/nse-margin-requirements.pdf'
    },
    {
      id: 4,
      title: 'BSE Circular: Changes in Transaction Charges',
      date: 'February 20, 2024',
      downloadLink: '/pdfs/bse-transaction-charges.pdf'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Circulars</h1>
        <p className="text-gray-500 mb-8">Important regulatory and exchange circulars</p>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Title</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Date</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Download</th>
              </tr>
            </thead>
            <tbody>
              {circulars.map((circular) => (
                <tr key={circular.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-800">{circular.title}</td>
                  <td className="py-4 px-6 text-gray-500 text-sm">{circular.date}</td>
                  <td className="py-4 px-6">
                    <a href={circular.downloadLink} className="text-blue-600 hover:text-blue-700 text-sm">
                      Download PDF →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
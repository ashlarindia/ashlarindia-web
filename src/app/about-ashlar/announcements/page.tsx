'use client';

export default function AnnouncementsPage() {
  const announcements = [
    {
      id: 1,
      title: 'SEBI Circular: New Margin Rules Effective from March 2024',
      date: 'March 15, 2024',
      category: 'Regulatory',
      summary: 'SEBI has introduced new margin requirements for intraday trading...'
    },
    {
      id: 2,
      title: 'Trading Holiday on Holi - March 25, 2024',
      date: 'March 10, 2024',
      category: 'Exchange Holiday',
      summary: 'All markets will remain closed on March 25, 2024 on account of Holi.'
    },
    {
      id: 3,
      title: 'New Feature: Instant Fund Transfer Now Available',
      date: 'March 5, 2024',
      category: 'Platform Update',
      summary: 'Transfer funds instantly from your bank account to trading account 24x7.'
    },
    {
      id: 4,
      title: 'Upcoming IPO: Bharat Electronics Limited',
      date: 'March 1, 2024',
      category: 'IPO Alert',
      summary: 'IPO opens on March 20, 2024. Price band ₹80-₹85 per share.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Announcements</h1>
        <p className="text-gray-500 mb-8">Latest updates and important notifications from Ashlar India</p>
        
        <div className="space-y-4">
          {announcements.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700">{item.category}</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">{item.summary}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{item.date}</span>
                <button className="text-sm text-blue-600 hover:text-blue-700">Read More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
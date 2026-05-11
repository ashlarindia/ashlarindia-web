const blogs = [
  { title: 'How to Start Trading', date: 'Jan 15, 2024', excerpt: 'Beginner guide to stock market trading...' },
  { title: 'Top 10 Stocks for 2024', date: 'Jan 10, 2024', excerpt: 'Best stocks to invest this year...' },
  { title: 'Understanding F&O Trading', date: 'Jan 5, 2024', excerpt: 'Complete guide to futures and options...' },
];

export default function Blog() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Latest from Blog</h2>
        <p className="text-gray-600 text-center mb-12">Stay updated with market insights</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-6">
                <p className="text-orange-600 text-sm mb-2">{blog.date}</p>
                <h3 className="font-bold text-xl mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <button className="text-orange-600 font-semibold">Read More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
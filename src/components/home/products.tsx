const products = [
  'Equity Trading',
  'Futures & Options',
  'Commodities',
  'Currency Trading',
  'IPO Investing',
  'Mutual Funds',
  'Life Insurance',
  'Corporate FD',
  'Bonds',
  'Demat Account'
];

export default function Products() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Products</h2>
        <p className="text-gray-600 text-center mb-12">Explore our wide range of financial products</p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {products.map((product, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow text-center hover:shadow-lg transition">
              {product}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const features = [
  { title: 'SEBI Registered', desc: 'Trusted and regulated broker' },
  { title: 'Low Brokerage', desc: 'Starting at just ₹10 per trade' },
  { title: '24/7 Support', desc: 'Customer support anytime' },
  { title: 'Fast Account Opening', desc: 'Open account in 5 minutes' }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Why Choose Ashlar India?</h2>
        <p className="text-gray-600 text-center mb-12">We make trading simple and affordable</p>
        
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="text-center p-6 border rounded-lg">
              <div className="text-3xl mb-3">✓</div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
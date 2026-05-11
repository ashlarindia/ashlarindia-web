const testimonials = [
  { name: 'Rajesh Kumar', text: 'Great platform! Easy to use and excellent support.', rating: 5 },
  { name: 'Priya Singh', text: 'Best brokerage rates in India. Highly recommended!', rating: 5 },
  { name: 'Amit Patel', text: 'Fast account opening and smooth trading experience.', rating: 4 },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">What Our Clients Say</h2>
        <p className="text-gray-600 text-center mb-12">Trusted by 50,000+ investors</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <div className="text-yellow-400 mb-2">{"★".repeat(testimonial.rating)}</div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-bold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
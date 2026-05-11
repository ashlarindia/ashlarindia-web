
import Hero from '@/components/home/hero';
import MarketTicker from '@/components/home/market-ticker';
import Products from '@/components/home/products';
import WhyChooseUs from '@/components/home/why-choose-us';
import CalculatorPreview from '@/components/home/calculator-preview';
import Testimonials from '@/components/home/testimonials';
import FAQ from '@/components/home/faq';
import Stats from '@/components/home/stats';
import Blog from '@/components/home/blog';
import ContactForm from '@/components/home/contact-form';

export default function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
      <MarketTicker />
      <Hero />
      <Stats />
      <Products />
      <WhyChooseUs />
      <CalculatorPreview />
      <Testimonials />
      <FAQ />
      <Blog />
      <ContactForm />
      {/* <Footer /> */}
    </>
  );
}
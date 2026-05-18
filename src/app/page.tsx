// import MarketTicker from '@/components/home/MarketTicker';
import HeroSection from '@/components/home/Hero-Section';
import StatsSection from '@/components/home/StatsSection';
import ProductsSection from '@/components/home/productsSection';
import CalculatorsSection from '@/components/home/CalculatorWidget';
import WhyAshlar from '@/components/home/WhyAshlar';
import ContactForm from '@/components/home/contact-form';
import RiskDisclosure from '@/components/home/RiskDisclosure'; // New component
import LeadershipSection from '@/components/home/LeadershipSection';
import Blog from '@/components/home/blog';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ProductsSection />
      <CalculatorsSection />
      <WhyAshlar />
      <Blog />
      <LeadershipSection/>
      <ContactForm />
      <RiskDisclosure/>
    </main>
  );
}
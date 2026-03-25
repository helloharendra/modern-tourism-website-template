import { Hero } from '@/components/hero';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FeaturedDestinations } from '@/components/featured-destinations';
import { TestimonialsCarousel } from '@/components/testimonials-carousel';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { StatsSection } from '@/components/stats-section';
import { ScrollToTop } from '@/components/scroll-to-top';
import { BenefitsSection } from '@/components/benefits-section';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <StatsSection />
      <FeaturedDestinations />
      <BenefitsSection />
      <TestimonialsCarousel />
      <NewsletterSignup />
      <Footer />
      <ScrollToTop />
    </main>
  );
}

import { Hero } from '@/src/app/components/Hero';
import { AboutPreview } from '@/src/app/components/AboutPreview';
import { PortfolioPreview } from '@/src/app/components/PortfolioPreview';
import { ServicesPreview } from '@/src/app/components/ServicesPreview';
import { ContactPreview } from '@/src/app/components/ContactPreview';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <PortfolioPreview />
      <ServicesPreview />
      <ContactPreview />
    </>
  );
}

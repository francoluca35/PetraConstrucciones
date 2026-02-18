import { Hero } from '../components/Hero';
import { AboutPreview } from '../components/AboutPreview';
import { GalleryPreview } from '../components/GalleryPreview';
import { PortfolioPreview } from '../components/PortfolioPreview';
import { ContactPreview } from '../components/ContactPreview';

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <GalleryPreview />
      <PortfolioPage />
    
     <ContactPreview />
    </>
  );
}
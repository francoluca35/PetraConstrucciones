import { Hero } from '@/src/app/components/Hero';
import { AboutPreview } from '@/src/app/components/AboutPreview';
import { GalleryPreview } from '@/src/app/components/GalleryPreview';
import { PortfolioPreview } from '@/src/app/components/PortfolioPreview';
import { ContactPreview } from '@/src/app/components/ContactPreview';

export default function HomePage() {
  return (
    <>
      {/* <Hero />
      <AboutPreview />
      <GalleryPreview /> */}
      <PortfolioPreview />
      {/* <ContactPreview /> */}
    </>
  );
}

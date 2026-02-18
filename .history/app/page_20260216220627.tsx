import { Hero } from '@/src/app/components/Hero';
import { AboutPreview } from '@/src/app/components/AboutPreview';
import { GalleryPreview } from '@/src/app/components/GalleryPreview';
import { PortfolioPreview } from '@/src/app/components/PortfolioPreview';
import { ContactPreview } from '@/src/app/components/ContactPreview';
import { PortfolioPage } from '@/src/app/pages/PortfolioPage';

export default function HomePage() {
  return (
    <>
      {/* Sección principal: solo portfolio visible. Descomentar en feature branches cuando estén listas. */}
       <Hero /> 
      <AboutPreview /> 
      <GalleryPreview /> 
      <PortfolioPage />
      {/* <PortfolioPreview /> */}
      {/* <ContactPreview /> */}
    </>
  );
}

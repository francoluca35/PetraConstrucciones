import { Hero } from '@/src/app/components/Hero';
import { AboutPreview } from '@/src/app/components/AboutPreview';

import { PortfolioPreview } from '@/src/app/components/PortfolioPreview';
import { ContactPreview } from '@/src/app/components/ContactPreview';

export default function HomePage() {
return (
  <>
    {/* Sección principal: solo portfolio visible. Descomentar en feature branches cuando estén listas. */}
      <Hero /> 
    <AboutPreview /> 
    <PortfolioPreview />
    <ContactPreview />
  </>
);
}

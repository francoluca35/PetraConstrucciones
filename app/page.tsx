import dynamic from 'next/dynamic';
import { Hero } from '@/src/app/components/Hero';

const AboutPreview = dynamic(
  () => import('@/src/app/components/AboutPreview').then((m) => ({ default: m.AboutPreview })),
  { ssr: true }
);

const PortfolioPreview = dynamic(
  () => import('@/src/app/components/PortfolioPreview').then((m) => ({ default: m.PortfolioPreview })),
  { ssr: true }
);

const ServicesPreview = dynamic(
  () => import('@/src/app/components/ServicesPreview').then((m) => ({ default: m.ServicesPreview })),
  { ssr: true }
);

const ContactPreview = dynamic(
  () => import('@/src/app/components/ContactPreview').then((m) => ({ default: m.ContactPreview })),
  { ssr: true }
);

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

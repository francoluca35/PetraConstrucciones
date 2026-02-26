'use client';

import dynamic from 'next/dynamic';
import { ScrollToTop } from '@/src/app/components/ScrollToTop';

const Navbar = dynamic(
  () => import('@/src/app/components/Navbar').then((m) => ({ default: m.Navbar })),
  { ssr: true }
);

const Footer = dynamic(
  () => import('@/src/app/components/Footer').then((m) => ({ default: m.Footer })),
  { ssr: true }
);

const BackToTop = dynamic(
  () => import('@/src/app/components/BackToTop').then((m) => ({ default: m.BackToTop })),
  { ssr: true }
);

const WhatsAppFloating = dynamic(
  () => import('@/src/app/components/WhatsAppFloating').then((m) => ({ default: m.WhatsAppFloating })),
  { ssr: true }
);

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <BackToTop />
      <ScrollToTop />
      <WhatsAppFloating />
    </>
  );
}

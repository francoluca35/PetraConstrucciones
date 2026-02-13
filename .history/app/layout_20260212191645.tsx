import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/src/app/components/Navbar';
import { Footer } from '@/src/app/components/Footer';
import { BackToTop } from '@/src/app/components/BackToTop';
import { ScrollToTop } from '@/src/app/components/ScrollToTop';

export const metadata: Metadata = {
  title: 'PetraConstrucciones - Excelencia en Construcción',
  description:
    'PetraConstrucciones - Líderes en construcción residencial, comercial e industrial. Más de 20 años transformando proyectos en realidad con excelencia e innovación.',
  keywords:
    'construcción, construcciones, obras, edificios, viviendas, proyectos, arquitectura, PetraConstrucciones, construcción Madrid, constructora',
  openGraph: {
    title: 'PetraConstrucciones - Excelencia en Construcción',
    description:
      'Líderes en construcción residencial, comercial e industrial. Más de 20 años transformando proyectos en realidad.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col antialiased">
        {/* <Navbar /> */}
        <main className="flex-grow">{children}</main>
        <Footer />
        <BackToTop />
        <ScrollToTop />
      </body>
    </html>
  );
}

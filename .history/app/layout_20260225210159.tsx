import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/src/app/components/Navbar';
import { Footer } from '@/src/app/components/Footer';
import { BackToTop } from '@/src/app/components/BackToTop';
import { ScrollToTop } from '@/src/app/components/ScrollToTop';
import { WhatsAppFloating } from '@/src/app/components/WhatsAppFloating';
import { ClientProviders } from '@/src/app/components/ClientProviders';

export const metadata: Metadata = {
  title: 'Conesa constructora estrategia S.A - Excelencia en Construcción',
  description:
    'Conesa constructora estrategia S.A - Líderes en construcción residencial, comercial e industrial. Más de 20 años transformando proyectos en realidad con excelencia e innovación.',
  keywords:
    'construcción, construcciones, obras, edificios, viviendas, proyectos, arquitectura, Petra Construcciones, construcción Mérida, Yucatán, México, constructora',
  icons: {
    icon: '/Assets/favicon.ico',
    apple: '/Assets/favicon.ico',
  },
  openGraph: {
    title: 'Conesa constructora estrategia S.A - Excelencia en Construcción',
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
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <ClientProviders>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <BackToTop />
          <ScrollToTop />
          <WhatsAppFloating />
        </ClientProviders>
      </body>
    </html>
  );
}

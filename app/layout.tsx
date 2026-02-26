import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/src/app/components/Navbar';
import { Footer } from '@/src/app/components/Footer';
import { BackToTop } from '@/src/app/components/BackToTop';
import { ScrollToTop } from '@/src/app/components/ScrollToTop';
import { WhatsAppFloating } from '@/src/app/components/WhatsAppFloating';
import { ClientProviders } from '@/src/app/components/ClientProviders';

const SITE_URL = 'https://www.constructoraconesa.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Constructora Estrategia Conesa S.A. - Excelencia en Construcción',
    template: '%s | Constructora Estrategia Conesa S.A.',
  },
  description:
    'Constructora Estrategia Conesa S.A. - Líderes en construcción residencial, comercial e industrial. Más de 20 años transformando proyectos en realidad con excelencia e innovación. Mérida, Yucatán, México.',
  keywords:
    'construcción, construcciones, obras, edificios, viviendas, proyectos, arquitectura, Constructora Estrategia Conesa, construcción Mérida, Yucatán, México, constructora',
  icons: {
    icon: '/Assets/favicon.ico',
    apple: '/Assets/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: SITE_URL,
    siteName: 'Constructora Estrategia Conesa S.A.',
    title: 'Constructora Estrategia Conesa S.A. - Excelencia en Construcción',
    description:
      'Líderes en construcción residencial, comercial e industrial. Más de 20 años transformando proyectos en realidad. Mérida, Yucatán.',
    images: [{ url: '/Assets/logo-pagina.png', width: 1200, height: 630, alt: 'Constructora Estrategia Conesa S.A.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Constructora Estrategia Conesa S.A. - Excelencia en Construcción',
    description: 'Líderes en construcción residencial, comercial e industrial. Mérida, Yucatán, México.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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

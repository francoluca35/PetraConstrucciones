import type { Metadata } from 'next';
import './globals.css';
import { AppShell } from '@/src/app/components/AppShell';
import { ClientProviders } from '@/src/app/components/ClientProviders';
import { StructuredData } from '@/src/app/components/StructuredData';

const SITE_URL = 'https://www.constructoraconesa.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Constructora en Mérida, Yucatán | Casas, Oficinas y Piscinas | Constructora Estrategia Conesa S.A.',
    template: '%s | Constructora en Mérida',
  },
  description:
    'Empresa constructora en Mérida, Yucatán. Construcción de casas, oficinas y piscinas. Casas llave en mano Mérida, construcción residencial y comercial. +17 años de experiencia en Yucatán y península.',
  keywords:
    'constructora en Mérida Yucatán, construcción de casas en Mérida, empresa constructora Mérida México, construcción de piscinas en Mérida, casas llave en mano Mérida, construcción residencial Mérida, construcción comercial Yucatán, Constructora Estrategia Conesa',
  icons: {
    icon: '/Assets/favicon.avif',
    apple: '/Assets/favicon.avif',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: SITE_URL,
    siteName: 'Constructora en Mérida, Yucatán | Constructora Estrategia Conesa S.A.',
    title: 'Constructora en Mérida, Yucatán | Casas, Oficinas y Piscinas',
    description:
      'Constructora en Mérida, Yucatán. Construcción de casas, oficinas y piscinas. Casas llave en mano. +17 años en Yucatán.',
    images: [{ url: '/Assets/logo-pagina.avif', width: 1200, height: 630, alt: 'Constructora en Mérida Yucatán - Constructora Estrategia Conesa S.A.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Constructora en Mérida, Yucatán | Casas, Oficinas y Piscinas',
    description: 'Empresa constructora Mérida México. Construcción de casas y piscinas. Yucatán.',
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
      <head>
        <link rel="preload" href="/fonts/good-times-rg.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/911v2.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {/* Hace el CSS principal no bloqueante: media=print hasta que cargue, luego media=all (~120ms ahorro en LCP) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function u(){var s=document.querySelectorAll('link[rel="stylesheet"][href*="/_next/static/css"]');s.forEach(function(l){if(l.getAttribute('data-nb'))return;l.setAttribute('data-nb','1');l.media='print';l.onload=function(){this.media='all';};if(l.sheet)l.media='all';});}u();if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',u);})();`,
          }}
        />
        <StructuredData />
        <ClientProviders>
          <AppShell>{children}</AppShell>
        </ClientProviders>
      </body>
    </html>
  );
}

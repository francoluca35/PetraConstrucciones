import type { Metadata } from 'next';
import './globals.css';
import { AppShell } from '@/src/app/components/AppShell';
import { ClientProviders } from '@/src/app/components/ClientProviders';
import { StructuredData } from '@/src/app/components/StructuredData';
import { BreadcrumbStructuredData } from '@/src/app/components/BreadcrumbStructuredData';
import { SITE_URL } from '@/src/lib/site';

const DEFAULT_TITLE = 'Conesa Constructora en Mérida | Casas, Oficinas, Piscinas y Remodelaciones';
const DEFAULT_DESCRIPTION =
  'Constructora en Mérida: casas llave en mano, oficinas, albercas chukum y remodelaciones. +17 años. Presupuesto cerrado. Conkal, Cholul, Temozón. ¿Cuánto cuesta construir? Cotiza hoy sin compromiso.';
const DEFAULT_KEYWORDS =
  'constructora en Mérida, mejores constructoras en Mérida, constructoras confiables Yucatán, directorio de constructoras en Mérida, construcción de casas Mérida, casas llave en mano Mérida, cuánto cuesta construir una casa en Mérida 2025, construcción de oficinas Mérida, construcción de piscinas Mérida, albercas Mérida, albercas chukum Yucatán, piscinas estilo cenote Mérida, remodelación de casas en Mérida, reformas integrales Mérida, remodelación casas antiguas Mérida, obras civiles Mérida, obras municipales Yucatán, infraestructura Mérida, constructora Estrategia Conesa, construcción residencial comercial Mérida, construcción de bodegas Mérida, naves industriales sureste, parques industriales Yucatán, plusvalía Mérida, seguridad Mérida construcción, arquitectura sostenible Mérida, casas ecológicas Yucatán, Tren Maya impacto inmobiliario Mérida, Conkal Cholul Temozón Progreso Dzityá, CMIC construcción Yucatán, constructora cerca de mí Mérida, presupuesto construcción casa Mérida, permisos remodelar casa Yucatán';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: '%s | Conesa Constructora Mérida',
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  icons: {
    icon: '/Assets/favicon.avif',
    apple: '/Assets/favicon.avif',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: SITE_URL,
    siteName: 'Constructora Estrategia Conesa S.A. - Mérida, Yucatán',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: '/Assets/logo-pagina.avif', width: 1200, height: 630, alt: 'Constructora en Mérida Yucatán - Constructora Estrategia Conesa S.A.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  // Verificación Google Search Console: añade GOOGLE_SITE_VERIFICATION en .env.local con el código que te da Google.
  ...(process.env.GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  }),
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
        {/* CSS no bloqueante en móvil: aplica aunque el link se inyecte después (streaming). MutationObserver + ejecución inmediata. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function u(){var s=document.querySelectorAll('link[rel="stylesheet"][href*="/_next/static/css"]');s.forEach(function(l){if(l.getAttribute('data-nb'))return;l.setAttribute('data-nb','1');l.media='print';l.onload=function(){this.media='all';};if(l.sheet)l.media='all';});}u();document.addEventListener('DOMContentLoaded',u);var o=new MutationObserver(u);o.observe(document.documentElement,{childList:true,subtree:true});setTimeout(function(){o.disconnect();},8000);})();`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <StructuredData />
        <BreadcrumbStructuredData />
        <ClientProviders>
          <AppShell>{children}</AppShell>
        </ClientProviders>
      </body>
    </html>
  );
}

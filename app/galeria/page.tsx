import type { Metadata } from 'next';
import { GalleryPage } from '@/src/app/pages/GalleryPage';
import { SITE_URL } from '@/src/lib/site';

export const metadata: Metadata = {
  title: 'Galería de Obras | Constructora Mérida, Yucatán',
  description:
    'Galería de proyectos de construcción en Mérida, Yucatán. Fotos de casas, oficinas, piscinas y obras civiles. Constructora Estrategia Conesa S.A.',
  keywords:
    'galería construcción Mérida, fotos obras Yucatán, proyectos constructora Mérida, imágenes construcción residencial Mérida, fotos piscinas albercas Yucatán, obras realizadas Mérida, portfolio visual constructora, fotos casas oficinas piscinas Mérida, referencias construcción península, antes después remodelación Mérida, fotos edificios corporativos Yucatán, imágenes obras civiles Mérida',
  openGraph: {
    title: 'Galería de Obras | Constructora Mérida, Yucatán',
    description: 'Fotos de casas, oficinas, piscinas y obras. Constructora Estrategia Conesa S.A.',
    url: `${SITE_URL}/galeria`,
    siteName: 'Constructora Estrategia Conesa S.A.',
    locale: 'es_MX',
  },
  twitter: { card: 'summary_large_image', title: 'Galería | Constructora Mérida', description: 'Proyectos de construcción en Yucatán.' },
  alternates: { canonical: `${SITE_URL}/galeria` },
};

export default function Page() {
  return <GalleryPage />;
}

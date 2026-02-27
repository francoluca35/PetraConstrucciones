import type { Metadata } from 'next';
import { AboutPage } from '@/src/app/pages/AboutPage';
import { SITE_URL } from '@/src/lib/site';

export const metadata: Metadata = {
  title: 'Quiénes Somos | Constructora en Mérida, Yucatán',
  description:
    'Constructora Estrategia Conesa S.A. en Mérida, Yucatán. +17 años construyendo casas, oficinas y piscinas en la península. Equipo profesional, valores y compromiso con la calidad.',
  keywords:
    'constructora Mérida, sobre nosotros, equipo construcción Yucatán, historia Constructora Conesa, ingeniería civil Mérida, experiencia construcción Yucatán, Constructora Estrategia Conesa, valores empresa construcción, CMIC Cámara Industria Construcción Yucatán, trayectoria constructora península Mérida, ingeniero civil Tecnológico Mérida, más de 17 años construyendo Mérida, misión visión constructora Yucatán, referencias constructora Mérida',
  openGraph: {
    title: 'Quiénes Somos | Constructora en Mérida, Yucatán',
    description: 'Constructora Estrategia Conesa S.A. +17 años en Mérida. Equipo profesional y compromiso con la calidad.',
    url: `${SITE_URL}/quienes-somos`,
    siteName: 'Constructora Estrategia Conesa S.A.',
    locale: 'es_MX',
  },
  twitter: { card: 'summary_large_image', title: 'Quiénes Somos | Constructora Mérida', description: '+17 años construyendo en Yucatán.' },
  alternates: { canonical: `${SITE_URL}/quienes-somos` },
};

export default function Page() {
  return <AboutPage />;
}

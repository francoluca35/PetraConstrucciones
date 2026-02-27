import type { Metadata } from 'next';
import { PortfolioPage } from '@/src/app/pages/PortfolioPage';
import { SITE_URL } from '@/src/lib/site';

export const metadata: Metadata = {
  title: 'Portfolio de Proyectos | Constructora en Mérida',
  description:
    'Portfolio de construcción residencial y comercial en Mérida, Yucatán. Casas, oficinas, piscinas. Proyectos realizados por Constructora Conesa.',
  keywords:
    'portfolio construcción Mérida, proyectos realizados Yucatán, obras constructora Mérida, proyectos residenciales Mérida, construcción casas oficinas Yucatán, referencias construcción Mérida, desarrollos residenciales Mérida, proyectos llave en mano realizados Conesa, casas unifamiliares oficinas piscinas Yucatán, megaestructuras construcción península, proyectos usos mixtos Mérida, construcción residencial comercial industrial Mérida',
  openGraph: {
    title: 'Portfolio de Proyectos | Constructora en Mérida',
    description: 'Casas, oficinas, piscinas. Proyectos realizados por Constructora Conesa en Yucatán.',
    url: `${SITE_URL}/portfolio`,
    siteName: 'Constructora Estrategia Conesa S.A.',
    locale: 'es_MX',
  },
  twitter: { card: 'summary_large_image', title: 'Portfolio | Constructora Mérida', description: 'Proyectos residenciales y comerciales en Yucatán.' },
  alternates: { canonical: `${SITE_URL}/portfolio` },
};

export default function Page() {
  return <PortfolioPage />;
}

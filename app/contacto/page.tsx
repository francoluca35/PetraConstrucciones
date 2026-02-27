import type { Metadata } from 'next';
import { ContactPage } from '@/src/app/pages/ContactPage';
import { SITE_URL } from '@/src/lib/site';

export const metadata: Metadata = {
  title: 'Contacto | Constructora Mérida, Yucatán',
  description:
    'Contacto Constructora Estrategia Conesa S.A. Mérida, Yucatán. Presupuesto sin compromiso. Construcción de casas, oficinas y piscinas. Consultoría gratuita. Teléfono, email y oficinas.',
  keywords:
    'contacto constructora Mérida, presupuesto construcción Yucatán, consultoría obras Mérida, cotización construcción Mérida, Constructora Conesa contacto, solicitar presupuesto construcción Mérida, consultoría gratuita construcción Yucatán, teléfono constructora Mérida, email constructora Conesa, oficinas Constructora Estrategia Conesa Mérida, cotiza tu proyecto construcción Mérida, presupuesto sin compromiso construcción casa oficina piscina Mérida, Habitissimo Buscatán constructora Mérida',
  openGraph: {
    title: 'Contacto | Constructora Mérida, Yucatán',
    description: 'Contacto Constructora Estrategia Conesa S.A. Mérida. Presupuesto sin compromiso. Consultoría gratuita.',
    url: `${SITE_URL}/contacto`,
    siteName: 'Constructora Estrategia Conesa S.A.',
    locale: 'es_MX',
  },
  twitter: { card: 'summary_large_image', title: 'Contacto | Constructora Mérida', description: 'Presupuesto sin compromiso. Consultoría gratuita.' },
  alternates: { canonical: `${SITE_URL}/contacto` },
};

export default function Page() {
  return <ContactPage />;
}

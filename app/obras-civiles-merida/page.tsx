import type { Metadata } from 'next';
import { ServicePageLayout } from '@/src/app/components/ServicePageLayout';
import { SITE_URL } from '@/src/lib/site';

export const metadata: Metadata = {
  title: 'Obras Civiles en Mérida | Infraestructura y Desarrollo Urbano',
  description:
    'Obras civiles e infraestructura en Mérida, Yucatán. Carreteras, urbanización, redes de servicios. Infraestructura con los más altos estándares. Desarrollo urbano sostenible. +25 obras. Constructora Conesa.',
  keywords:
    'obras civiles Mérida, infraestructura Yucatán, construcción civil Mérida, desarrollo urbano Yucatán, ingeniería civil Mérida, urbanización Mérida, obras infraestructura Yucatán, construcción carreteras Mérida, obra civil pesada sureste, Tren Maya impacto inmobiliario Mérida, expansión Puerto de Progreso, viaductos movilidad Mérida, redes agua drenaje Yucatán, pavimentación urbanización Mérida, infraestructura masiva península, desarrollo urbano sostenible Yucatán, conectividad energía construcción México',
  openGraph: {
    title: 'Obras Civiles en Mérida | Infraestructura',
    description: 'Carreteras, urbanización, redes. Desarrollo urbano sostenible. +25 obras. Constructora Conesa.',
    url: `${SITE_URL}/obras-civiles-merida`,
    locale: 'es_MX',
  },
  twitter: { card: 'summary_large_image', title: 'Obras Civiles Mérida', description: 'Infraestructura y desarrollo urbano.' },
  alternates: { canonical: `${SITE_URL}/obras-civiles-merida` },
};

export default function ObrasCivilesMeridaPage() {
  return (
    <ServicePageLayout
      hero={{
        badge: 'Infraestructura',
        badgeIcon: 'Landmark',
        title: 'Obras civiles en Mérida, Yucatán',
        subtitle: 'Infraestructura con los más altos estándares. Compromiso con el desarrollo urbano sostenible de la península. +25 obras civiles completadas.',
        imageSrc: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd',
        imageAlt: 'Obra civil e infraestructura Mérida Yucatán - Constructora Conesa',
      }}
      intro="En Constructora Estrategia Conesa S.A. ejecutamos obras civiles en Mérida, Yucatán y la península. Carreteras, puentes, redes de agua y drenaje, obras de urbanización, pavimentación y proyectos de infraestructura con los más altos estándares de calidad y seguridad. Más de 17 años como constructora en Mérida. Compromiso con el desarrollo urbano sostenible. Rigor técnico y plazos definidos en cada obra civil."
      sections={[
        {
          title: 'Infraestructura y desarrollo urbano en Yucatán',
          content:
            'Obras civiles en Mérida, Yucatán: urbanización de fraccionamientos, pavimentación, redes de servicios, obras de drenaje y agua potable. Construcción civil con estándares de calidad y normativa vigente. Constructora en Mérida con experiencia en proyectos de infraestructura para desarrolladores, gobiernos y sector privado. Desarrollo urbano sostenible en la península de Yucatán.',
          imageSrc: '/Assets/about.avif',
          imageAlt: 'Obra de infraestructura Mérida - Constructora Conesa',
        },
        {
          title: 'Experiencia y capacidad técnica',
          content:
            'Más de 25 obras civiles completadas. Constructora en Mérida, Yucatán con equipo técnico y maquinaria para proyectos de mediana y gran escala. Calidad y seguridad en cada proyecto. Presupuestos claros y plazos cumplidos. Obras civiles en Mérida, Conkal, Progreso y toda la península.',
          imageSrc: '/Assets/about-3.avif',
          imageAlt: 'Constructora obras civiles Yucatán - Conesa',
          imageRight: true,
        },
      ]}
      benefits={[
        {
          title: '+25 obras civiles',
          description: 'Más de 25 proyectos de infraestructura y obras civiles completados en Mérida, Yucatán.',
        },
        {
          title: 'Urbanización',
          description: 'Obras de urbanización, pavimentación y redes de servicios en Mérida y la península.',
        },
        {
          title: 'Estándares de calidad',
          description: 'Infraestructura con los más altos estándares. Constructora civil en Mérida responsable.',
        },
        {
          title: 'Desarrollo sostenible',
          description: 'Compromiso con el desarrollo urbano sostenible de Yucatán.',
        },
        {
          title: 'Plazos definidos',
          description: 'Obras civiles en Mérida con cronograma claro y cumplimiento de plazos.',
        },
        {
          title: 'Rigor técnico',
          description: 'Equipo técnico y experiencia en construcción civil. Presupuestos serios.',
        },
      ]}
      ctaText="Solicitar presupuesto para obras civiles"
    />
  );
}

import type { Metadata } from 'next';
import { ServicePageLayout } from '@/src/app/components/ServicePageLayout';
import { SITE_URL } from '@/src/lib/site';

export const metadata: Metadata = {
  title: 'Construcción de Albercas en Mérida | Piscinas Chukum y Estilo Cenote',
  description:
    'Diseño y construcción de albercas en Mérida con acabado Chukum. Piscinas estilo cenote, sistemas de filtrado e iluminación LED. Especialistas en Yucatán. +80 albercas. Cotiza sin compromiso.',
  keywords:
    'construcción de albercas Mérida, construcción de piscinas Mérida, albercas chukum Yucatán, piscinas estilo cenote Mérida, diseño albercas Mérida, precios construcción piscinas Mérida, albercas modernas casas Mérida, mantenimiento albercas Yucatán, acabado Chukum o mosaico veneciano albercas, diseño albercas estilo cenote, sistemas filtrado iluminación LED piscinas Mérida, bombas calor albercas Yucatán, piscinas prefabricadas instalación rápida Mérida, construcción piscinas 7 días Mérida, albercas para casas pequeñas Mérida, render 3D diseño piscina Mérida, tratamiento agua piscinas Yucatán',
  openGraph: {
    title: 'Construcción de Albercas en Mérida | Piscinas Chukum',
    description: 'Albercas estilo cenote con acabado Chukum. +80 piscinas en Yucatán. Constructora Conesa.',
    url: `${SITE_URL}/construccion-de-piscinas-merida`,
    locale: 'es_MX',
  },
  twitter: { card: 'summary_large_image', title: 'Albercas y Piscinas Mérida', description: 'Acabado Chukum y estilo cenote. +80 piscinas.' },
  alternates: { canonical: `${SITE_URL}/construccion-de-piscinas-merida` },
};

export default function ConstruccionPiscinasMeridaPage() {
  return (
    <ServicePageLayout
      hero={{
        badge: 'Piscinas residenciales',
        badgeIcon: 'Waves',
        title: 'Construcción de piscinas en Mérida, Yucatán',
        subtitle: 'Diseño y obra de piscinas con acabados de calidad. Adaptadas al clima y al estilo de vida de Yucatán. Más de 80 piscinas construidas en la península.',
        imageSrc: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7',
        imageAlt: 'Piscina residencial Mérida Yucatán - construcción de piscinas Constructora Conesa',
      }}
      intro="Somos especialistas en construcción de piscinas en Mérida, Yucatán. Diseñamos y construimos piscinas residenciales con acabados de calidad para hogares en Mérida, Conkal, Cholul, Temozón y la península. Obras con estándares de seguridad y durabilidad. Más de 80 piscinas construidas. Piscinas a medida, diseños integrados al jardín y al clima de Yucatán. Cotización de construcción de piscina en Mérida sin compromiso."
      sections={[
        {
          title: 'Piscinas residenciales en Mérida y zona norte',
          content:
            'Construcción de piscinas en Mérida, Yucatán para casas y residencias. Piscinas de concreto, acabados en loseta o pintura, diseños rectangulares, libres o con forma. Instalación de equipo de filtrado, iluminación y escalones de seguridad. Atendemos Mérida, Conkal, Cholul, Temozón, Progreso y alrededores. Piscinas residenciales adaptadas al clima de Yucatán.',
          imageSrc: 'https://images.unsplash.com/photo-1585951237313-1979e4df7385',
          imageAlt: 'Piscina residencial construcción Mérida Yucatán',
        },
        {
          title: 'Diseño e integración con tu proyecto',
          content:
            'Diseñamos piscinas que se integran a tu casa y jardín en Mérida. Desde piscinas pequeñas hasta albercas de gran formato. Constructora en Mérida con experiencia en obra de piscinas: excavación, estructura, impermeabilización y acabados. Presupuesto de construcción de piscina en Mérida con detalle de materiales y mano de obra.',
          imageSrc: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
          imageAlt: 'Diseño piscina residencial Yucatán - Constructora Conesa',
          imageRight: true,
        },
      ]}
      benefits={[
        {
          title: '+80 piscinas construidas',
          description: 'Más de 80 piscinas residenciales completadas en Mérida, Yucatán y la península. Experiencia comprobada.',
        },
        {
          title: 'Acabados de calidad',
          description: 'Construcción de piscinas en Mérida con materiales y acabados duraderos. Loseta, pintura epóxica o recubrimiento de calidad.',
        },
        {
          title: 'Diseño a medida',
          description: 'Piscinas diseñadas según tu espacio y gusto. Formas, tamaños y equipamiento a tu medida en Mérida.',
        },
        {
          title: 'Clima Yucatán',
          description: 'Piscinas adaptadas al clima de Mérida y Yucatán. Resistencia al sol y al uso intensivo.',
        },
        {
          title: 'Seguridad y normativa',
          description: 'Obra de piscinas con estándares de seguridad y durabilidad. Constructora en Mérida responsable.',
        },
        {
          title: 'Presupuesto sin compromiso',
          description: 'Cotización detallada para construir tu piscina en Mérida. Sin compromiso.',
        },
      ]}
      ctaText="Cotizar construcción de piscina en Mérida"
    />
  );
}

import type { Metadata } from 'next';
import { ServicePageLayout } from '@/src/app/components/ServicePageLayout';
import { SITE_URL } from '@/src/lib/site';

export const metadata: Metadata = {
  title: 'Remodelación de Casas en Mérida | Reformas Integrales | Constructora Conesa',
  description:
    'Transforma tu hogar con expertos en rediseño y remodelación en Mérida. Fachadas, interiores y ampliaciones con acabados de primera. Presupuesto cerrado. +200 renovaciones. Permisos remodelar casa Yucatán.',
  keywords:
    'remodelación de casas en Mérida, remodelaciones Mérida, reformas integrales Mérida Yucatán, empresas remodelación Mérida, rediseño interiores residencial Mérida, remodelación casas antiguas Yucatán, ampliación terrazas norte Mérida, reformas oficinas centro Mérida, qué permisos necesito para remodelar mi casa en Yucatán, trámites Ayuntamiento Mérida remodelación, remodelación de lujo Mérida, diseño interiores Mérida, reforma cocina baño Mérida, ampliación casa Mérida, renovación vivienda Yucatán, remodelación Ciudad Caucel Mérida, reformas centro histórico Mérida, arquitectura bioclimática remodelación Yucatán',
  openGraph: {
    title: 'Remodelación de Casas en Mérida | Reformas Integrales',
    description: 'Rediseño, fachadas, ampliaciones. Presupuesto cerrado. +200 renovaciones. Constructora Conesa.',
    url: `${SITE_URL}/remodelaciones-merida`,
    locale: 'es_MX',
  },
  twitter: { card: 'summary_large_image', title: 'Remodelaciones Mérida', description: 'Reformas integrales. Acabados de primera.' },
  alternates: { canonical: `${SITE_URL}/remodelaciones-merida` },
};

export default function RemodelacionesMeridaPage() {
  return (
    <ServicePageLayout
      hero={{
        badge: 'Reformas integrales',
        badgeIcon: 'Hammer',
        title: 'Remodelaciones en Mérida, Yucatán',
        subtitle: 'Transformamos espacios existentes en ambientes modernos. Presupuesto cerrado, plazos definidos y más de 200 renovaciones completadas en la península.',
        imageSrc: '/Assets/about.avif',
        imageAlt: 'Obra de remodelación Mérida Yucatán - Constructora Conesa',
      }}
      intro="Ofrecemos remodelaciones y reformas integrales en Mérida, Yucatán. Renovación de viviendas, ampliaciones, actualización de instalaciones eléctricas e hidráulicas, y mejoras estéticas. Trabajamos en Mérida, Conkal, Cholul, Temozón y zona norte de Yucatán. Más de 200 renovaciones completadas. Constructora en Mérida con experiencia en transformar espacios: de la idea al resultado final con presupuesto cerrado."
      sections={[
        {
          title: 'Reformas integrales en Mérida y zona norte',
          content:
            'Remodelaciones en Mérida, Yucatán para casas, departamentos y locales. Reformas de cocinas, baños, recámaras y áreas comunes. Ampliaciones, cambio de pisos, pintura, instalaciones nuevas y demoliciones controladas. Constructora en Mérida que gestiona tu reforma de principio a fin. Presupuesto cerrado y plazos acordados. Renovación integral preservando la esencia de tu espacio.',
          imageSrc: '/Assets/service.avif',
          imageAlt: 'Reforma integral vivienda Mérida - Constructora Conesa',
        },
        {
          title: 'De la idea al resultado final',
          content:
            'Gestionamos tu remodelación en Mérida, Yucatán de principio a fin. Asesoría en diseño, permisos si aplican, compra de materiales y coordinación de oficios. Más de 17 años de experiencia en la península. Reformas en Mérida, Conkal, Cholul, Temozón y Progreso. Transformamos espacios existentes en ambientes contemporáneos con calidad y compromiso.',
          imageSrc: '/Assets/about-3.avif',
          imageAlt: 'Proyecto de remodelación Yucatán - Constructora Conesa',
          imageRight: true,
        },
      ]}
      benefits={[
        {
          title: '+200 renovaciones',
          description: 'Más de 200 proyectos de remodelación y reformas completados en Mérida, Yucatán.',
        },
        {
          title: 'Presupuesto cerrado',
          description: 'Remodelaciones en Mérida con presupuesto cerrado. Sin sorpresas en el costo final.',
        },
        {
          title: 'Reformas integrales',
          description: 'Cocinas, baños, ampliaciones, instalaciones. Reforma integral de tu vivienda en Mérida.',
        },
        {
          title: 'Plazos definidos',
          description: 'Cronograma claro para tu remodelación en Mérida. Cumplimiento de fechas.',
        },
        {
          title: 'Calidad en acabados',
          description: 'Materiales y mano de obra de calidad. Remodelaciones en Yucatán que perduran.',
        },
        {
          title: 'Una sola empresa',
          description: 'Constructora en Mérida que coordina todo: albañilería, electricidad, plomería y acabados.',
        },
      ]}
      ctaText="Solicitar presupuesto de remodelación en Mérida"
    />
  );
}

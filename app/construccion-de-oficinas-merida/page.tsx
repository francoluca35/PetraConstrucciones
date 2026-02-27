import type { Metadata } from 'next';
import { ServicePageLayout } from '@/src/app/components/ServicePageLayout';
import { SITE_URL } from '@/src/lib/site';

export const metadata: Metadata = {
  title: 'Construcción de Oficinas en Mérida | Edificios Corporativos y Naves',
  description:
    'Construcción de oficinas y edificios corporativos en Mérida, Yucatán. Naves industriales, estructuras metálicas y fachadas ventiladas. +45 empresas. Obra en plazo récord. Constructora Conesa.',
  keywords:
    'construcción de oficinas Mérida, edificios corporativos Mérida Yucatán, naves industriales Mérida, construcción bodegas Mérida, estructuras metálicas industriales Yucatán, oficinas corporativas premium Mérida, constructora comercial Mérida, parques industriales sureste, rascacielos oficinas Mérida, construcción oficinas plazo récord Mérida, fachadas ventiladas edificios Yucatán, estructura acero oficinas Mérida, nave industrial Yucatán, bodega Mérida constructora, edificio corporativo llave en mano Mérida, tecnología anticalor edificios Mérida, estándares internacionales construcción comercial Yucatán, modelo BIM proyectos residenciales comerciales',
  openGraph: {
    title: 'Construcción de Oficinas en Mérida | Edificios y Naves',
    description: 'Oficinas corporativas y naves industriales. Estructura de acero. +45 empresas. Constructora Conesa.',
    url: `${SITE_URL}/construccion-de-oficinas-merida`,
    locale: 'es_MX',
  },
  twitter: { card: 'summary_large_image', title: 'Oficinas y Naves Industriales Mérida', description: 'Edificios corporativos. Plazo récord.' },
  alternates: { canonical: `${SITE_URL}/construccion-de-oficinas-merida` },
};

export default function ConstruccionOficinasMeridaPage() {
  return (
    <ServicePageLayout
      hero={{
        badge: 'Comercial e industrial',
        badgeIcon: 'Building2',
        title: 'Construcción de oficinas en Mérida, Yucatán',
        subtitle: 'Edificios corporativos y espacios comerciales. Estructura de acero, fachadas ventiladas y estándares internacionales. Obras ejecutadas en plazo récord.',
        imageSrc: '/Assets/oficinas.avif',
        imageAlt: 'Construcción de oficinas en Mérida, Yucatán - Constructora Conesa',
      }}
      intro="Constructora en Mérida, Yucatán especializada en construcción de oficinas, edificios corporativos y espacios comerciales. Desarrollamos proyectos con estructura de acero, fachadas ventiladas, naves industriales y edificios de oficinas en Mérida y la península. Más de 17 años como empresa constructora en Mérida, México. Construcción comercial e industrial con plazos garantizados y calidad de primer nivel."
      sections={[
        {
          title: 'Edificios corporativos y oficinas en Mérida',
          content:
            'Construcción de oficinas en Mérida, Yucatán con estándares internacionales. Edificios corporativos, espacios de coworking, oficinas ejecutivas y plantas industriales. Estructura de acero, fachadas ventiladas, instalaciones eléctricas y HVAC. Constructora comercial Mérida con experiencia en proyectos de mediana y gran escala. Obras ejecutadas en plazo récord.',
          imageSrc: '/Assets/Proyecto-2/casa-moderna-merida-1.avif',
          imageAlt: 'Edificio y construcción comercial Mérida Yucatán',
        },
        {
          title: 'Constructora industrial y comercial en Yucatán',
          content:
            'Naves industriales, bodegas, centros de distribución y edificios de oficinas en Mérida y la península. Constructora en Mérida, México con capacidad para proyectos comerciales e industriales. Más de 45 empresas confían en nosotros. Presupuesto y plazos claros desde el inicio.',
          imageSrc: '/Assets/about.avif',
          imageAlt: 'Obra de construcción comercial Mérida - Constructora Conesa',
          imageRight: true,
        },
      ]}
      benefits={[
        {
          title: 'Estructura de acero',
          description: 'Construcción de oficinas en Mérida con estructura metálica cuando el proyecto lo requiere. Rapidez y resistencia.',
        },
        {
          title: 'Plazos garantizados',
          description: 'Obras ejecutadas en plazo récord. Constructora en Mérida con compromiso de entrega en tiempo y forma.',
        },
        {
          title: '+45 empresas',
          description: 'Más de 45 empresas y proyectos comerciales completados en Mérida, Yucatán y la península.',
        },
        {
          title: 'Estándares internacionales',
          description: 'Edificios corporativos y oficinas en Mérida con normas de calidad y seguridad de primer nivel.',
        },
        {
          title: 'Fachadas y diseño',
          description: 'Fachadas ventiladas, diseño arquitectónico y acabados profesionales para tu edificio en Mérida.',
        },
        {
          title: 'Presupuesto claro',
          description: 'Cotización detallada para construcción de oficinas en Mérida. Sin cargos ocultos.',
        },
      ]}
      ctaText="Presupuesto construcción de oficinas en Mérida"
    />
  );
}

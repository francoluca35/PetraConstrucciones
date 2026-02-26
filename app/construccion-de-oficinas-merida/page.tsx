import { ServicePageLayout } from '@/src/app/components/ServicePageLayout';

export const metadata = {
  title: 'Construcción de Oficinas en Mérida, Yucatán | Edificios Corporativos | Constructora Conesa',
  description:
    'Construcción de oficinas y edificios corporativos en Mérida, Yucatán. Empresa constructora Mérida México. Espacios comerciales, naves industriales y estructuras de acero. Constructora Estrategia Conesa S.A. +17 años.',
  keywords:
    'construcción de oficinas en Mérida, edificios corporativos Mérida Yucatán, constructora comercial Mérida, oficinas Mérida México, naves industriales Yucatán, construcción comercial Mérida, edificios de oficinas Mérida, constructora industrial Yucatán',
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

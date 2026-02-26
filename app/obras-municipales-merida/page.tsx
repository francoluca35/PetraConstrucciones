import { ServicePageLayout } from '@/src/app/components/ServicePageLayout';

export const metadata = {
  title: 'Obras Municipales en Mérida, Yucatán | Infraestructura Pública | Constructora Conesa',
  description:
    'Obras y proyectos municipales en Mérida, Yucatán. Constructora Estrategia Conesa S.A. Infraestructura pública, pavimentación, edificios municipales. Gestión de obra para municipios y entes públicos. +20 obras.',
  keywords:
    'obras municipales Mérida, infraestructura pública Yucatán, construcción municipal Mérida, proyectos gobierno Yucatán, constructora obras públicas, licitaciones Mérida, obra pública Yucatán',
};

export default function ObrasMunicipalesMeridaPage() {
  return (
    <ServicePageLayout
      hero={{
        badge: 'Sector público',
        badgeIcon: 'Building2',
        title: 'Obras municipales en Mérida, Yucatán',
        subtitle: 'Proyectos y ejecución para entes públicos. Infraestructura pública y gestión de obra para municipios. +20 obras municipales completadas.',
        imageSrc: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5',
        imageAlt: 'Obra municipal e infraestructura pública Mérida Yucatán - Constructora Conesa',
      }}
      intro="Constructora Estrategia Conesa S.A. ejecuta obras municipales en Mérida, Yucatán y la península. Pavimentación, espacios públicos, edificios municipales, redes de agua y drenaje, y proyectos licitados con transparencia y cumplimiento de plazos. Más de 20 obras municipales completadas. Conocemos los procesos administrativos y de licitación para que tu proyecto avance con seguridad."
      sections={[
        {
          title: 'Infraestructura pública y proyectos municipales',
          content:
            'Obras municipales en Mérida, Yucatán: pavimentación, plazas públicas, edificios de gobierno, redes de agua potable y drenaje, obras de alumbrado y proyectos licitados. Constructora en Mérida con experiencia en sector público. Gestión de obra para municipios y entes públicos. Documentación y seguimiento en orden. Cumplimiento de plazos y normativa.',
          imageSrc: '/Assets/about-3.avif',
          imageAlt: 'Proyecto municipal Mérida - Constructora Conesa',
        },
        {
          title: 'Gestión y ejecución de proyectos públicos',
          content:
            'Más de 17 años de experiencia y más de 20 obras municipales completadas en Yucatán. Conocemos los procesos de licitación, contratación y entrega-recepción. Constructora en Mérida que trabaja con transparencia y rigor. Infraestructura pública con calidad y plazos cumplidos. Atención a municipios de Mérida y la península.',
          imageSrc: '/Assets/about.avif',
          imageAlt: 'Obra pública Yucatán - Constructora Conesa',
          imageRight: true,
        },
      ]}
      benefits={[
        {
          title: '+20 obras municipales',
          description: 'Más de 20 proyectos municipales y de obra pública completados en Mérida, Yucatán.',
        },
        {
          title: 'Licitaciones',
          description: 'Experiencia en procesos de licitación y contratación con el sector público.',
        },
        {
          title: 'Documentación en orden',
          description: 'Gestión administrativa y documental para obras municipales. Seguimiento y entrega-recepción.',
        },
        {
          title: 'Infraestructura pública',
          description: 'Pavimentación, edificios, redes. Obras municipales en Mérida con estándares de calidad.',
        },
        {
          title: 'Plazos cumplidos',
          description: 'Compromiso con plazos y presupuestos en obras para municipios.',
        },
        {
          title: 'Transparencia',
          description: 'Constructora en Mérida con trayectoria seria en sector público.',
        },
      ]}
      ctaText="Solicitar presupuesto para obras municipales"
    />
  );
}

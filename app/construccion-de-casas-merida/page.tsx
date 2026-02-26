import { ServicePageLayout } from '@/src/app/components/ServicePageLayout';

export const metadata = {
  title: 'Construcción de Casas en Mérida, Yucatán | Casas Llave en Mano | Constructora Conesa',
  description:
    'Construcción de casas en Mérida, Yucatán. Casas llave en mano, viviendas unifamiliares, residenciales y construcción desde cero. Constructora Estrategia Conesa S.A. +17 años en Yucatán. Presupuesto cerrado, Conkal, Cholul, Temozón.',
  keywords:
    'construcción de casas en Mérida, casas llave en mano Mérida, construir casa Mérida Yucatán, constructora residencial Mérida, viviendas unifamiliares Yucatán, construcción de casas Conkal Cholul Temozón, constructora Mérida México, presupuesto construcción casa Mérida',
};

export default function ConstruccionCasasMeridaPage() {
  return (
    <ServicePageLayout
      hero={{
        badge: 'Residencial',
        badgeIcon: 'Home',
        title: 'Construcción de casas en Mérida, Yucatán',
        subtitle: 'Proyectos llave en mano en Mérida, Conkal, Cholul, Temozón y la península. +17 años construyendo hogares con presupuesto cerrado y plazos definidos.',
        imageSrc: '/Assets/Proyecto-1/casa-moderna-merida-yucatan-1.avif',
        imageAlt: 'Casa moderna construida en Mérida, Yucatán - Constructora Conesa',
      }}
      intro="En Constructora Estrategia Conesa S.A. nos especializamos en la construcción de casas en Mérida, Yucatán. Desarrollamos viviendas unifamiliares, casas residenciales y proyectos llave en mano con la máxima calidad. Construcción de casas desde cero, ampliaciones y obras por metro cuadrado en Mérida, Conkal, Cholul, Dzityá, Temozón, Progreso y toda la península de Yucatán. Empresa constructora Mérida con más de 17 años de experiencia."
      sections={[
        {
          title: 'Casas llave en mano en Mérida y zona norte',
          content:
            'Construcción de casas llave en mano en Mérida, Yucatán: desde el diseño y los planos hasta la entrega final con acabados de primera. Gestionamos permisos, materiales y mano de obra. Construcción residencial en Mérida, Conkal, Cholul, Temozón, Progreso y Dzityá. Presupuesto cerrado y plazos acordados. Constructora en Mérida especializada en vivienda unifamiliar y residencial.',
          imageSrc: '/Assets/Proyecto-3/casa-moderna-mexico-1.avif',
          imageAlt: 'Vivienda unifamiliar Mérida Yucatán - construcción llave en mano',
        },
        {
          title: 'Zonas donde construimos en Yucatán',
          content:
            'Trabajamos en Mérida y zona metropolitana: norte de Mérida, Conkal, Cholul, Dzityá, Temozón Norte, Progreso y toda la península de Yucatán. Construcción de casas en Mérida capital, zonas residenciales y desarrollos. Constructora en Yucatán con experiencia en clima y suelo local. Obra nueva, ampliaciones y construcción por etapas.',
          imageSrc: '/Assets/home.webp',
          imageAlt: 'Construcción residencial Mérida Yucatán - Constructora Conesa',
          imageRight: true,
        },
      ]}
      benefits={[
        {
          title: 'Presupuesto cerrado',
          description: 'Construcción de casas en Mérida con presupuesto cerrado y sin sorpresas. Precio acordado desde el inicio para tu tranquilidad.',
        },
        {
          title: 'Llave en mano',
          description: 'Proyectos llave en mano en Mérida: diseño, permisos, construcción y entrega. Una sola empresa para todo el proceso.',
        },
        {
          title: '+17 años en Yucatán',
          description: 'Constructora en Mérida, Yucatán con más de 17 años construyendo casas, viviendas y obras residenciales en la península.',
        },
        {
          title: 'Calidad y plazos',
          description: 'Materiales de primera y plazos definidos. Construcción de casas en Mérida con estándares de calidad y cumplimiento.',
        },
        {
          title: 'Cobertura península',
          description: 'Construimos en Mérida, Conkal, Cholul, Temozón, Progreso, Dzityá y alrededores. Constructora residencial en Yucatán.',
        },
        {
          title: 'Acompañamiento total',
          description: 'Desde el primer contacto hasta la entrega de llaves. Asesoría en diseño, permisos y construcción de tu casa en Mérida.',
        },
      ]}
      ctaText="Solicitar presupuesto para construir mi casa en Mérida"
    />
  );
}

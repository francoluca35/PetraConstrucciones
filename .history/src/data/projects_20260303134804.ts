export interface Project {
  slug: string;
  label: string;
  image: string;
  gallery?: string[];
  video?: string;
  category?: string;
  description: string;
  location?: string;
  year?: string;
  features?: string[];
}

export const projects: Project[] = [
  {
    slug: 'lote-43',
    label: 'RESIDENCIA YUCATAN',
    image: '/Assets/Proyecto-3/casa-moderna-mexico-1.avif',
    gallery: [
      '/Assets/Proyecto-3/casa-moderna-mexico-1.avif',
      '/Assets/Proyecto-3/casa-moderna-mexico-2.avif',
      '/Assets/Proyecto-3/casa-moderna-mexico-3.avif',


    ],
    category: 'Residencial',
    description: 'Vivienda unifamiliar de diseño contemporáneo con acabados de primera calidad. Espacios amplios y luminosos integrados con el entorno natural.',
    location: 'Merida, Mexico',
    year: '2025',
    features: ['350m² construidos', 'Jardín privado', 'Piscina', 'Domótica completa'],
  },
  {
    slug: 'ResidenciaMerida',
    label: 'RESIDENCIA MERIDA',
    image: '/Assets/Proyecto-1/casa-moderna-merida-yucatan-1.avif',
    gallery: [
      '/Assets/Proyecto-1/casa-moderna-merida-yucatan-1.avif',
      '/Assets/Proyecto-1/casa-moderna-merida-yucatan-frente-1.avif',
      '/Assets/Proyecto-1/casa-moderna-merida-yucatan-living-1.avif',
      '/Assets/Proyecto-1/casa-moderna-merida-yucatan-Baño-1.avif',

      '/Assets/Proyecto-1/casa-moderna-merida-yucatan-2.avif',

    ],
    category: 'Residencial',
    description: 'Casa moderna con líneas arquitectónicas definidas. Excelente integración entre interior y exterior.',
    location: 'Mérida, Yucatán, México',
    year: '2024',
    features: ['280m²', 'Terraza panorámica', 'Garaje doble', 'Certificación energética A'],
  },
  {
    slug: 'lote-101',
    label: 'OFICINAS EN MERIDA',
    image: '/Assets/Proyecto-2/frente.png',
    gallery: [
      '/Assets/Proyecto-2/frente.png',
      '/Assets/Proyecto-2/frente2.png',
      '/Assets/Proyecto-2/frente3.png',
      '/Assets/Proyecto-2/lateral.jpeg',
      '/Assets/Proyecto-2/laterald.jpeg',
      '/Assets/Proyecto-2/laterali.jpeg',
      '/Assets/Proyecto-2/fondo.jpeg',
    ],
    category: 'Oficinas',
    description: 'El proyecto se caracteriza por una volumetría horizontal limpia y equilibrada, donde predominan líneas rectas, planos puros y una composición arquitectónica sobria. La fachada combina muros blancos, revestimientos pétreos naturales, elementos de vidrio y detalles metálicos, generando una imagen institucional elegante y atemporal.',
    location: 'Merida, Mexico',
    year: '2024',
    features: ['700m²', 'Fachada ventilada', 'Parking'],
  },
 
  {
    slug: 'proyecto-residencial',
    label: 'RESIDENCIA MX',
    image: '/Assets/Proyecto-6/casa-moderna-mexico-yucatan-merida-frente.avif',
    gallery: [
      '/Assets/Proyecto-6/casa-moderna-mexico-yucatan-merida-frente.avif',
      '/Assets/Proyecto-6/casa-moderna-mexico-merida-yucatan-trasero.avif',
    ],
    category: 'Residencial',
    description: 'Villa de lujo con Piscina. Acabados premium y diseño exclusivo.',
    location: 'Chicxulub, Yucatán, México',
    year: '2024',
    features: ['450m²', 'Piscina infinity', 'Home cinema', 'Bodega'],
  },
  {
    slug: 'edificio-one-rose',
    label: 'RESIDENCIA GUADALAJARA',
    image: '/Assets/Proyecto-5/casa-moderna-mexico-tijuana-1.avif',
    gallery: [
      '/Assets/Proyecto-5/casa-moderna-mexico-tijuana-1.avif',
      '/Assets/Proyecto-5/casa-moderna-mexico-tijuana-2.avif',
      '/Assets/Proyecto-5/casa-moderna-mexico-tijuana-3.avif',
    
    ],
    category: 'Residencial',
    description: 'Residencia moderna, en la montaña de Merida, Yucatan, Mexico.',
    location: 'Merida, Mexico',
    year: '2024',
    features: ['Amplio terreno', 'Gimnasio', 'Piscina', 'Jardín'],
  },
  {
    slug: 'piscinas',
    label: 'PISCINAS',
    image: '/Assets/Proyecto-7/patio.png',
    video: '/Assets/Proyecto-7/video.mp4',
    gallery: [

      '/Assets/Proyecto-7/patio.png',
      '/Assets/Proyecto-7/3.jpg',
      '/Assets/Proyecto-7/4.jpg',

    ],
    category: 'Piscinas',
    description: 'Algunas de nuestras piscinas',
    location: 'Mérida, Yucatán, México',
    year: '2024',
    features: ['Piscina climatizada', 'Luces internas'],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

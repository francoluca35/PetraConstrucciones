export interface Project {
  slug: string;
  label: string;
  image: string;
  gallery?: string[];
  category?: string;
  description: string;
  location?: string;
  year?: string;
  features?: string[];
}

export const projects: Project[] = [
  {
    slug: 'lote-43',
    label: 'LOTE 43',
    image: 'https://images.unsplash.com/photo-1679364297777-1db77b6199be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MDg1Njk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1679364297777-1db77b6199be?w=800&q=80',
      'https://images.unsplash.com/photo-1684691376857-5dfb87f6bc65?w=800&q=80',
      'https://images.unsplash.com/photo-1742415106160-594d07f6cc23?w=800&q=80',
      'https://images.unsplash.com/photo-1718209962486-4f91ce71886b?w=800&q=80',
      'https://images.unsplash.com/photo-1769721209842-e46c60e7fbf9?w=800&q=80',
    ],
    category: 'Residencial',
    description: 'Vivienda unifamiliar de diseño contemporáneo con acabados de primera calidad. Espacios amplios y luminosos integrados con el entorno natural.',
    location: 'Madrid, España',
    year: '2024',
    features: ['350m² construidos', 'Jardín privado', 'Piscina', 'Domótica completa'],
  },
  {
    slug: 'ResidenciaMerida',
    label: 'RESIDENCIA MERIDA',
    image: '/Assets/Proyecto-1/frente-1.jpeg',
    gallery: [
      '/Assets/Proyecto-1/frente-1.jpeg',
      '/Assets/Proyecto-1/living-1.jpg',
      '/Assets/Proyecto-1/Baño-1.jpg',
      '/Assets/Proyecto-1/exterior-terraza.jpg',
      '/Assets/Proyecto-1/patio-trasero.jpeg',
    ],
    category: 'Residencial',
    description: 'Casa moderna con líneas arquitectónicas definidas. Excelente integración entre interior y exterior.',
    location: 'Barcelona, España',
    year: '2024',
    features: ['280m²', 'Terraza panorámica', 'Garaje doble', 'Certificación energética A'],
  },
  {
    slug: 'lote-101',
    label: 'LOTE 101',
    image: '/Assets/Proyecto-2/1.png',
    gallery: [
      '/Assets/Proyecto-2/1.png',
      '/Assets/Proyecto-2/2.png',
      
    ],
    category: 'Comercial',
    description: 'Proyecto de construcción comercial con estructura de acero. Obra ejecutada en plazo récord.',
    location: 'Valencia, España',
    year: '2023',
    features: ['2.500m²', 'Estructura metálica', 'Fachada ventilada', 'Parking subterráneo'],
  },
  {
    slug: 'proyecto-2015',
    label: '2015',
    image: 'https://images.unsplash.com/photo-1769721209842-e46c60e7fbf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzA3NDIzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1769721209842-e46c60e7fbf9?w=800&q=80',
      'https://images.unsplash.com/photo-1679364297777-1db77b6199be?w=800&q=80',
      'https://images.unsplash.com/photo-1684691376857-5dfb87f6bc65?w=800&q=80',
      'https://images.unsplash.com/photo-1673978484308-6f32e2c4a984?w=800&q=80',
      'https://images.unsplash.com/photo-1718209962486-4f91ce71886b?w=800&q=80',
    ],
    category: 'Residencial',
    description: 'Edificio residencial de 12 viviendas con zonas comunes. Diseño sostenible y eficiencia energética.',
    location: 'Sevilla, España',
    year: '2023',
    features: ['12 viviendas', 'Azotea comunitaria', 'Ascensores', 'Iluminación LED'],
  },
  {
    slug: 'proyecto-5723',
    label: '5723',
    image: 'https://images.unsplash.com/photo-1684691376857-5dfb87f6bc65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzA4NTY5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1684691376857-5dfb87f6bc65?w=800&q=80',
      'https://images.unsplash.com/photo-1679364297777-1db77b6199be?w=800&q=80',
      'https://images.unsplash.com/photo-1769721209842-e46c60e7fbf9?w=800&q=80',
      'https://images.unsplash.com/photo-1718209962486-4f91ce71886b?w=800&q=80',
      'https://images.unsplash.com/photo-1742415106160-594d07f6cc23?w=800&q=80',
    ],
    category: 'Residencial',
    description: 'Villa de lujo con vistas al mar. Acabados premium y diseño exclusivo.',
    location: 'Marbella, España',
    year: '2024',
    features: ['450m²', 'Piscina infinity', 'Home cinema', 'Bodega'],
  },
  {
    slug: 'proyecto-2040',
    label: '2040',
    image: 'https://images.unsplash.com/photo-1718209962486-4f91ce71886b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0ZWFtJTIwd29ya2Vyc3xlbnwxfHx8fDE3NzA4NTY5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1718209962486-4f91ce71886b?w=800&q=80',
      'https://images.unsplash.com/photo-1673978484308-6f32e2c4a984?w=800&q=80',
      'https://images.unsplash.com/photo-1769721209842-e46c60e7fbf9?w=800&q=80',
      'https://images.unsplash.com/photo-1679364297777-1db77b6199be?w=800&q=80',
      'https://images.unsplash.com/photo-1684691376857-5dfb87f6bc65?w=800&q=80',
    ],
    category: 'Industrial',
    description: 'Nave industrial con sistemas de climatización y automatización. Proyecto llave en mano.',
    location: 'Zaragoza, España',
    year: '2023',
    features: ['5.000m²', 'Climatización industrial', 'Muelles de carga', 'Oficinas anexas'],
  },
  {
    slug: 'proyecto-5020-1',
    label: '5020/1',
    image: 'https://images.unsplash.com/photo-1742415106160-594d07f6cc23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBibHVlcHJpbnQlMjBwbGFuc3xlbnwxfHx8fDE3NzA3NjU0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1742415106160-594d07f6cc23?w=800&q=80',
      'https://images.unsplash.com/photo-1673978484308-6f32e2c4a984?w=800&q=80',
      'https://images.unsplash.com/photo-1769721209842-e46c60e7fbf9?w=800&q=80',
      'https://images.unsplash.com/photo-1679364297777-1db77b6199be?w=800&q=80',
      'https://images.unsplash.com/photo-1718209962486-4f91ce71886b?w=800&q=80',
    ],
    category: 'Diseño',
    description: 'Proyecto de reforma integral con rediseño arquitectónico. Rehabilitación sostenible.',
    location: 'Bilbao, España',
    year: '2024',
    features: ['Rehabilitación', 'Diseño bioclimático', 'Materiales ecológicos', 'Ahorro energético 40%'],
  },
  {
    slug: 'proyecto-2017-2',
    label: '2017/2',
    image: 'https://images.unsplash.com/photo-1673978484308-6f32e2c4a984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MDg1Njk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1673978484308-6f32e2c4a984?w=800&q=80',
      'https://images.unsplash.com/photo-1769721209842-e46c60e7fbf9?w=800&q=80',
      'https://images.unsplash.com/photo-1679364297777-1db77b6199be?w=800&q=80',
      'https://images.unsplash.com/photo-1718209962486-4f91ce71886b?w=800&q=80',
      'https://images.unsplash.com/photo-1684691376857-5dfb87f6bc65?w=800&q=80',
    ],
    category: 'Comercial',
    description: 'Centro comercial con múltiples locales y zona de restauración. Estructura modular.',
    location: 'Murcia, España',
    year: '2023',
    features: ['3.200m²', '20 locales', 'Parking 150 plazas', 'Zona gastronómica'],
  },
  {
    slug: 'edificio-one-rose',
    label: 'EDIFICIO ONE ROSE',
    image: 'https://images.unsplash.com/photo-1679364297777-1db77b6199be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MDg1Njk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1679364297777-1db77b6199be?w=800&q=80',
      'https://images.unsplash.com/photo-1769721209842-e46c60e7fbf9?w=800&q=80',
      'https://images.unsplash.com/photo-1684691376857-5dfb87f6bc65?w=800&q=80',
      'https://images.unsplash.com/photo-1718209962486-4f91ce71886b?w=800&q=80',
      'https://images.unsplash.com/photo-1742415106160-594d07f6cc23?w=800&q=80',
    ],
    category: 'Residencial',
    description: 'Torre residencial de lujo con 24 apartamentos. Vista 360° y amenities premium.',
    location: 'Madrid, España',
    year: '2024',
    features: ['24 apartamentos', 'Gimnasio', 'Piscina cubierta', 'Conserjería 24h'],
  },
  {
    slug: 'proyecto-3022',
    label: '3022',
    image: 'https://images.unsplash.com/photo-1769721209842-e46c60e7fbf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzA3NDIzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1769721209842-e46c60e7fbf9?w=800&q=80',
      'https://images.unsplash.com/photo-1684691376857-5dfb87f6bc65?w=800&q=80',
      'https://images.unsplash.com/photo-1679364297777-1db77b6199be?w=800&q=80',
      'https://images.unsplash.com/photo-1673978484308-6f32e2c4a984?w=800&q=80',
      'https://images.unsplash.com/photo-1718209962486-4f91ce71886b?w=800&q=80',
    ],
    category: 'Residencial',
    description: 'Urbanización de 8 viviendas pareadas. Entorno natural y diseño contemporáneo.',
    location: 'Málaga, España',
    year: '2024',
    features: ['8 viviendas', 'Zonas verdes', 'Piscina comunitaria', 'Seguridad privada'],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.constructoraconesa.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/quienes-somos',
    '/portfolio',
    '/galeria',
    '/contacto',
    '/construccion-de-casas-merida',
    '/construccion-de-piscinas-merida',
    '/construccion-de-oficinas-merida',
    '/remodelaciones-merida',
  ];

  return routes.map((route) => ({
    url: route ? `${SITE_URL}/${route.replace(/^\//, '')}` : SITE_URL,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}

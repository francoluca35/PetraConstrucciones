import type { MetadataRoute } from 'next';
import { projects } from '@/src/data/projects';
import { SITE_URL } from '@/src/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/quienes-somos',
    '/portfolio',
    '/galeria',
    '/contacto',
    '/construccion-de-casas-merida',
    '/construccion-de-piscinas-merida',
    '/construccion-de-oficinas-merida',
    '/remodelaciones-merida',
    '/obras-civiles-merida',
    '/obras-municipales-merida',
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: route ? `${SITE_URL}/${route.replace(/^\//, '')}` : SITE_URL,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  const portfolioEntries = projects.map((p) => ({
    url: `${SITE_URL}/portfolio/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...portfolioEntries];
}

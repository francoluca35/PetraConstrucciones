'use client';

import { usePathname } from 'next/navigation';
import { SITE_URL } from '@/src/lib/site';

const pathToName: Record<string, string> = {
  '/quienes-somos': 'Quiénes somos',
  '/portfolio': 'Portfolio',
  '/galeria': 'Galería',
  '/contacto': 'Contacto',
  '/construccion-de-casas-merida': 'Construcción de casas',
  '/construccion-de-piscinas-merida': 'Construcción de piscinas',
  '/construccion-de-oficinas-merida': 'Construcción de oficinas',
  '/remodelaciones-merida': 'Remodelaciones',
  '/obras-civiles-merida': 'Obras civiles',
  '/obras-municipales-merida': 'Obras municipales',
};

export function BreadcrumbStructuredData() {
  const pathname = usePathname();
  if (pathname === '/') return null;
  const segments = pathname.split('/').filter(Boolean);
  const items: { name: string; url: string }[] = [{ name: 'Inicio', url: SITE_URL }];
  let acc = '';
  for (let i = 0; i < segments.length; i++) {
    acc += `/${segments[i]}`;
    const name = pathToName[acc] ?? (i === segments.length - 1 && pathname.startsWith('/portfolio/') ? 'Proyecto' : segments[i]);
    items.push({ name, url: `${SITE_URL}${acc}` });
  }
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
    />
  );
}

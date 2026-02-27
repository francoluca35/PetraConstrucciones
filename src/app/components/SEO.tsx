'use client';

/**
 * =============================================================================
 * RESUMEN SEO - TODO LO IMPLEMENTADO EN EL PROYECTO
 * =============================================================================
 *
 * 1. LAYOUT GLOBAL (app/layout.tsx)
 *    - metadataBase: https://www.constructoraconesa.com
 *    - title default + template '%s | Constructora en Mérida'
 *    - description, keywords (constructora Mérida, casas, oficinas, piscinas, llave en mano)
 *    - openGraph: type website, locale es_MX, url, siteName, title, description, images (logo 1200x630)
 *    - twitter: card summary_large_image, title, description
 *    - robots: index true, follow true, googleBot index/follow
 *    - icons: favicon.ico
 *
 * 2. COMPONENTE SEO (este archivo) - SEO dinámico por ruta (client)
 *    - Por pathname actualiza: document.title, meta description, meta keywords
 *    - og:title, og:description
 *    - link canonical (baseUrl + pathname, sin trailing slash)
 *    - Rutas mapeadas: / → home, /quienes-somos → about, /galeria → gallery, /portfolio → portfolio, /contacto → contact
 *    - Textos por ruta e idioma vía i18n: seo.{prefix}.title, .description, .keywords (ES/EN)
 *
 * 3. TRADUCCIONES SEO (src/i18n/translations.ts)
 *    - seo.default, seo.home, seo.about, seo.gallery, seo.portfolio, seo.contact
 *    - Cada uno: title, description, keywords (es + en)
 *
 * 4. STRUCTURED DATA (src/app/components/StructuredData.tsx)
 *    - JSON-LD LocalBusiness + ConstructionCompany: name, description, url, telephone, email, address (Mérida), geo, areaServed (Mérida, Conkal, Cholul, Temozón, Progreso, Dzityá), priceRange, openingHours, sameAs (Instagram), hasOfferCatalog (casas, oficinas, piscinas, llave en mano, remodelaciones)
 *    - JSON-LD WebSite: name, description, publisher, inLanguage es-MX, SearchAction (target /contacto?q=)
 *
 * 5. SITEMAP (app/sitemap.ts)
 *    - Rutas: '', /quienes-somos, /portfolio, /galeria, /contacto, /construccion-de-casas-merida, /construccion-de-piscinas-merida, /construccion-de-oficinas-merida, /remodelaciones-merida, /obras-civiles-merida, /obras-municipales-merida
 *    - lastModified: new Date(), changeFrequency (home weekly, resto monthly), priority (home 1, resto 0.8)
 *
 * 6. ROBOTS (app/robots.ts)
 *    - userAgent *, allow /, disallow /api/ y /_next/
 *    - sitemap: SITE_URL/sitemap.xml, host: SITE_URL
 *
 * 7. METADATA POR PÁGINA (Next.js metadata / generateMetadata)
 *    - app/quienes-somos/page.tsx: title, description, keywords
 *    - app/contacto/page.tsx: title, description, keywords
 *    - app/galeria/page.tsx: title, description, keywords
 *    - app/portfolio/page.tsx: title, description, keywords
 *    - app/portfolio/[slug]/page.tsx: generateMetadata → title "{project.label} | Constructora Conesa - Mérida", description del proyecto
 *    - app/construccion-de-casas-merida/page.tsx: title, description, keywords
 *    - app/construccion-de-piscinas-merida, construccion-de-oficinas-merida, remodelaciones-merida: metadata export
 *
 * 8. H1 Y CONTENIDO (Hero, páginas de servicio)
 *    - Hero: H1 único para SEO "constructora Mérida Yucatán" (visible)
 *    - Páginas de servicio: H1 por página (ej. "Construcción de casas en Mérida, Yucatán")
 *
 * =============================================================================
 */

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/src/context/LanguageContext';

const pathToSeoPrefix: Record<string, string> = {
  '/': 'home',
  '/quienes-somos': 'about',
  '/galeria': 'gallery',
  '/portfolio': 'portfolio',
  '/contacto': 'contact',
};

export function SEO() {
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const prefix = pathToSeoPrefix[pathname] ?? 'default';
    const title = t(`seo.${prefix}.title`);
    const description = t(`seo.${prefix}.description`);
    const keywords = t(`seo.${prefix}.keywords`);

    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', description);

    const baseUrl = 'https://www.constructoraconesa.com';
    const canonicalHref = `${baseUrl}${pathname === '/' ? '' : pathname}`.replace(/\/$/, '') || baseUrl;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalHref);
  }, [pathname, t]);

  return null;
}

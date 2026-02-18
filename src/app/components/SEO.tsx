'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const defaultSEO = {
  title: 'PetraConstrucciones - Excelencia en Construcción',
  description: 'PetraConstrucciones - Líderes en construcción residencial, comercial e industrial. Más de 20 años transformando proyectos en realidad con excelencia e innovación.',
  keywords: 'construcción, construcciones, obras, edificios, viviendas, proyectos, arquitectura, PetraConstrucciones, construcción Mérida, Yucatán, México, constructora',
};

const pageSEO: Record<string, SEOProps> = {
  '/': {
    title: 'PetraConstrucciones - Construyendo el Futuro',
    description: 'Empresa líder en construcción con más de 20 años de experiencia. Proyectos residenciales, comerciales e industriales de alta calidad.',
    keywords: 'construcción, constructora, obras, edificios, viviendas, PetraConstrucciones',
  },
  '/quienes-somos': {
    title: 'Quiénes Somos - PetraConstrucciones',
    description: 'Conoce la historia, valores y equipo de PetraConstrucciones. Más de 20 años construyendo con pasión y compromiso.',
    keywords: 'sobre nosotros, equipo construcción, historia PetraConstrucciones, valores empresa',
  },
  '/galeria': {
    title: 'Galería - PetraConstrucciones',
    description: 'Explora nuestra galería de proyectos destacados. Imágenes de construcciones residenciales, comerciales e industriales.',
    keywords: 'galería construcción, fotos proyectos, imágenes obras, portfolio visual',
  },
  '/portfolio': {
    title: 'Portfolio - PetraConstrucciones',
    description: 'Descubre nuestros proyectos más destacados: torres residenciales, viviendas unifamiliares, espacios comerciales y más.',
    keywords: 'portfolio construcción, proyectos realizados, obras terminadas, referencias',
  },
  '/contacto': {
    title: 'Contacto - PetraConstrucciones',
    description: 'Contáctanos para tu próximo proyecto. Consultoría gratuita. Teléfono, email y oficinas en Mérida, Yucatán, México.',
    keywords: 'contacto construcción, presupuesto construcción, consultoría obras, contactar PetraConstrucciones',
  },
};

export function SEO() {
  const pathname = usePathname();

  useEffect(() => {
    const seo = pageSEO[pathname] || defaultSEO;
    
    // Update title
    document.title = seo.title || defaultSEO.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seo.description || defaultSEO.description);
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', seo.keywords || defaultSEO.keywords);

    // Update Open Graph tags for social media
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', seo.title || defaultSEO.title);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', seo.description || defaultSEO.description);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);
  }, [pathname]);

  return null;
}

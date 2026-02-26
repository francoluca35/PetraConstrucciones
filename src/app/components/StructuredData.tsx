const SITE_URL = 'https://www.constructoraconesa.com';

export function StructuredData() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ConstructionCompany'],
    '@id': `${SITE_URL}/#company`,
    name: 'Constructora Estrategia Conesa S.A.',
    alternateName: 'Constructora Conesa',
    description:
      'Empresa constructora en Mérida, Yucatán. Construcción de casas, oficinas y piscinas. Casas llave en mano. Especialistas en construcción residencial y comercial en Mérida y península de Yucatán.',
    url: SITE_URL,
    telephone: '+52 999 994 4498',
    email: 'proyectos@conesaconstructora.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle 32-A por 9 y 11, Col. Maya',
      addressLocality: 'Mérida',
      addressRegion: 'Yucatán',
      addressCountry: 'MX',
      postalCode: '97150',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 20.9674,
      longitude: -89.5926,
    },
    areaServed: [
      { '@type': 'City', name: 'Mérida', containedInPlace: { '@type': 'State', name: 'Yucatán' } },
      { '@type': 'City', name: 'Conkal' },
      { '@type': 'City', name: 'Cholul' },
      { '@type': 'City', name: 'Temozón' },
      { '@type': 'City', name: 'Progreso' },
      { '@type': 'City', name: 'Dzityá' },
    ],
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      'https://www.instagram.com/conesa.constructora/',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de construcción en Mérida',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Construcción de casas en Mérida' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Construcción de oficinas Mérida Yucatán' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Construcción de piscinas en Mérida' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Casas llave en mano Mérida' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Remodelaciones Mérida' },
        },
      ],
    },
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Constructora Estrategia Conesa S.A. - Mérida, Yucatán',
    description: 'Constructora en Mérida, Yucatán. Casas, oficinas, piscinas. Construcción llave en mano.',
    publisher: { '@id': `${SITE_URL}/#company` },
    inLanguage: 'es-MX',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/contacto?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}

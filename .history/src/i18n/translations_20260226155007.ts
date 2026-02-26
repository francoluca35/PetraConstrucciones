export type Locale = 'es' | 'en';

/** Carga las traducciones del idioma. ES está en el bundle principal; EN se carga solo al cambiar a inglés. */
export function loadTranslations(locale: Locale): Promise<Record<string, string>> {
  if (locale === 'es') {
    return import('./translations.es').then((m) => m.default);
  }
  return import('./translations.en').then((m) => m.default);
}

export function getHeroPrefix(_locale: Locale): string {
  return 'CONSTRUCTORA ESTRATEGIA\nCONESA S.A.';
}

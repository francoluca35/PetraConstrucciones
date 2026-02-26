'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Locale, loadTranslations } from '@/src/i18n/translations';
import translationsEs from '@/src/i18n/translations.es';

const STORAGE_KEY = 'conesa-locale';

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const defaultContext: LanguageContextType = {
  locale: 'es',
  setLocale: () => {},
  t: (key: string) => key,
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es');
  const [dict, setDict] = useState<Record<string, string>>(translationsEs);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored === 'es' || stored === 'en') setLocaleState(stored);
    } catch {
      // ignore
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (locale === 'es') {
      setDict(translationsEs);
      return;
    }
    loadTranslations('en').then(setDict);
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = next === 'es' ? 'es' : 'en';
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      return dict[key] ?? translationsEs[key] ?? key;
    },
    [dict]
  );

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale === 'es' ? 'es' : 'en';
  }, [mounted, locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) return defaultContext;
  return ctx;
}

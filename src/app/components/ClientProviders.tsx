'use client';

import { LanguageProvider } from '@/src/context/LanguageContext';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}

'use client';

import { LanguageProvider } from '@/src/context/LanguageContext';
import { PagePreloader } from '@/src/app/components/PagePreloader';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <PagePreloader />
      {children}
    </LanguageProvider>
  );
}

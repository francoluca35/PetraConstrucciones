import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Página no encontrada',
  description: 'La página que buscas no existe.',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 bg-[var(--petra-navy)] text-white">
      <h1 className="text-4xl md:text-6xl font-bold">404</h1>
      <p className="text-lg text-white/90">Página no encontrada</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--petra-gold)] text-[var(--petra-navy)] font-semibold rounded-sm hover:opacity-90 transition-opacity"
      >
        Volver al inicio
      </Link>
    </div>
  );
}

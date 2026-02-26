import Link from 'next/link';
import { Waves, Droplets, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Construcción de Piscinas en Mérida, Yucatán',
  description:
    'Construcción de piscinas en Mérida, Yucatán. Diseño y obra de piscinas residenciales. Constructora Estrategia Conesa S.A. Especialistas en piscinas en Yucatán.',
  keywords:
    'construcción de piscinas en Mérida, piscinas Mérida Yucatán, construir piscina Mérida, precio piscinas Mérida',
};

export default function ConstruccionPiscinasMeridaPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="relative bg-[var(--petra-navy)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(160deg,var(--petra-navy)_0%,#0c4a6e_40%,#0f172a_100%)]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/30 rounded-full -translate-y-1/2 blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--petra-gold)]/20 text-[var(--petra-gold)] text-sm font-medium px-4 py-1.5 mb-6 border border-[var(--petra-gold)]/30">
            <Waves className="w-4 h-4" />
            <span>Piscinas residenciales</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.1]">
            Construcción de piscinas en Mérida, Yucatán
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            Diseño y obra de piscinas con acabados de calidad. Adaptadas al clima y al estilo de vida de Yucatán.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 md:-mt-16">
        <div className="grid gap-6 md:gap-8">
          <article className="rounded-2xl bg-white p-6 md:p-8 shadow-xl shadow-black/5 border border-neutral-100">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--petra-navy)] mb-4 flex items-center gap-3">
              <span className="w-1 h-8 rounded-full bg-[var(--petra-gold)]" />
              Piscinas residenciales en Mérida
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Somos especialistas en construcción de piscinas en Mérida, Yucatán. Diseñamos y construimos piscinas residenciales con acabados de calidad para hogares en Mérida, Conkal, Cholul, Temozón y la península. Obras con estándares de seguridad y durabilidad.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-6 md:p-8 shadow-xl shadow-black/5 border border-neutral-100">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--petra-navy)] mb-4 flex items-center gap-3">
              <span className="w-1 h-8 rounded-full bg-[var(--petra-gold)]" />
              Cobertura en Yucatán
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Atendemos construcción de piscinas en Mérida y alrededores: zona norte de Mérida, Conkal, Cholul, Progreso y más localidades de Yucatán.
            </p>
            <div className="mt-4 flex items-center gap-2 text-[var(--petra-gold)] font-medium">
              <Droplets className="w-5 h-5" />
              <span>Diseños integrados al entorno</span>
            </div>
          </article>
        </div>

        <div className="mt-12 md:mt-16 pb-20 text-center">
          <Link
            href="/contacto"
            className="group inline-flex items-center gap-3 bg-[var(--petra-gold)] text-[var(--petra-navy)] font-semibold px-8 py-4 rounded-xl hover:bg-[var(--petra-gold-light)] transition-all duration-300 shadow-lg shadow-[var(--petra-gold)]/20 hover:shadow-xl hover:shadow-[var(--petra-gold)]/30 hover:-translate-y-0.5"
          >
            Cotizar construcción de piscina en Mérida
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}

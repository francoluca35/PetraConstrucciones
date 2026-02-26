import Link from 'next/link';
import { Hammer, Sparkles, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Remodelaciones en Mérida, Yucatán',
  description:
    'Remodelaciones y renovaciones en Mérida, Yucatán. Constructora Estrategia Conesa S.A. Reformas integrales, ampliaciones y mejoras en viviendas y locales.',
  keywords:
    'remodelaciones Mérida, reformas Mérida Yucatán, renovación casas Mérida, constructora remodelaciones Yucatán',
};

export default function RemodelacionesMeridaPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="relative bg-[var(--petra-navy)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--petra-navy)_0%,#1c1917_50%,#0f172a_100%)]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 w-[90%] h-80 bg-[var(--petra-gold)]/20 rounded-b-[50%] -translate-x-1/2 blur-2xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--petra-gold)]/20 text-[var(--petra-gold)] text-sm font-medium px-4 py-1.5 mb-6 border border-[var(--petra-gold)]/30">
            <Hammer className="w-4 h-4" />
            <span>Reformas integrales</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.1]">
            Remodelaciones en Mérida, Yucatán
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            Transformamos espacios existentes en ambientes modernos. Presupuesto cerrado y plazos definidos.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 md:-mt-16">
        <div className="grid gap-6 md:gap-8">
          <article className="rounded-2xl bg-white p-6 md:p-8 shadow-xl shadow-black/5 border border-neutral-100">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--petra-navy)] mb-4 flex items-center gap-3">
              <span className="w-1 h-8 rounded-full bg-[var(--petra-gold)]" />
              Reformas integrales en Mérida
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Ofrecemos remodelaciones y reformas integrales en Mérida, Yucatán. Renovación de viviendas, ampliaciones, actualización de instalaciones y mejoras estéticas. Trabajamos en Mérida, Conkal, Cholul, Temozón y zona norte de Yucatán.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-6 md:p-8 shadow-xl shadow-black/5 border border-neutral-100">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--petra-navy)] mb-4 flex items-center gap-3">
              <span className="w-1 h-8 rounded-full bg-[var(--petra-gold)]" />
              Proyectos llave en mano en Yucatán
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Gestionamos tu remodelación de principio a fin en Mérida, Yucatán. Constructora Estrategia Conesa S.A. con más de 17 años de experiencia en la península.
            </p>
            <div className="mt-4 flex items-center gap-2 text-[var(--petra-gold)] font-medium">
              <Sparkles className="w-5 h-5" />
              <span>De la idea al resultado final</span>
            </div>
          </article>
        </div>

        <div className="mt-12 md:mt-16 pb-20 text-center">
          <Link
            href="/contacto"
            className="group inline-flex items-center gap-3 bg-[var(--petra-gold)] text-[var(--petra-navy)] font-semibold px-8 py-4 rounded-xl hover:bg-[var(--petra-gold-light)] transition-all duration-300 shadow-lg shadow-[var(--petra-gold)]/20 hover:shadow-xl hover:shadow-[var(--petra-gold)]/30 hover:-translate-y-0.5"
          >
            Solicitar presupuesto de remodelación en Mérida
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}

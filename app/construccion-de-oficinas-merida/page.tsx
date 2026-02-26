import Link from 'next/link';
import { Building2, Briefcase, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Construcción de Oficinas en Mérida, Yucatán',
  description:
    'Construcción de oficinas y edificios corporativos en Mérida, Yucatán. Empresa constructora Mérida México. Constructora Estrategia Conesa S.A.',
  keywords:
    'construcción de oficinas en Mérida, edificios corporativos Mérida Yucatán, constructora comercial Mérida, oficinas Mérida México',
};

export default function ConstruccionOficinasMeridaPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="relative bg-[var(--petra-navy)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--petra-navy)_0%,#1e293b_50%,#0f172a_100%)]" />
        <div className="absolute inset-0 opacity-15">
          <div className="absolute bottom-0 left-0 w-[70%] h-96 bg-[var(--petra-gold)] rounded-tr-[100%] max-w-xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--petra-gold)]/20 text-[var(--petra-gold)] text-sm font-medium px-4 py-1.5 mb-6 border border-[var(--petra-gold)]/30">
            <Building2 className="w-4 h-4" />
            <span>Comercial e industrial</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.1]">
            Construcción de oficinas en Mérida, Yucatán
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            Edificios corporativos y espacios comerciales. Estructura de acero, fachadas ventiladas y estándares internacionales.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 md:-mt-16">
        <div className="grid gap-6 md:gap-8">
          <article className="rounded-2xl bg-white p-6 md:p-8 shadow-xl shadow-black/5 border border-neutral-100">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--petra-navy)] mb-4 flex items-center gap-3">
              <span className="w-1 h-8 rounded-full bg-[var(--petra-gold)]" />
              Edificios corporativos en Mérida
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Constructora en Mérida, Yucatán especializada en construcción de oficinas y edificios corporativos. Desarrollamos espacios comerciales e industriales con estructura de acero, fachadas ventiladas y plazos garantizados.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-6 md:p-8 shadow-xl shadow-black/5 border border-neutral-100">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--petra-navy)] mb-4 flex items-center gap-3">
              <span className="w-1 h-8 rounded-full bg-[var(--petra-gold)]" />
              Empresa constructora Mérida, México
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Más de 17 años como empresa constructora en Mérida, Yucatán. Oficinas, naves industriales y proyectos comerciales en la península de Yucatán.
            </p>
            <div className="mt-4 flex items-center gap-2 text-[var(--petra-gold)] font-medium">
              <Briefcase className="w-5 h-5" />
              <span>Obras ejecutadas en plazo récord</span>
            </div>
          </article>
        </div>

        <div className="mt-12 md:mt-16 pb-20 text-center">
          <Link
            href="/contacto"
            className="group inline-flex items-center gap-3 bg-[var(--petra-gold)] text-[var(--petra-navy)] font-semibold px-8 py-4 rounded-xl hover:bg-[var(--petra-gold-light)] transition-all duration-300 shadow-lg shadow-[var(--petra-gold)]/20 hover:shadow-xl hover:shadow-[var(--petra-gold)]/30 hover:-translate-y-0.5"
          >
            Presupuesto construcción de oficinas en Mérida
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}

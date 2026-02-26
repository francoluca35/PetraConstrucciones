import Link from 'next/link';
import { Home, MapPin, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Construcción de Casas en Mérida, Yucatán',
  description:
    'Construcción de casas en Mérida, Yucatán. Casas llave en mano, viviendas unifamiliares y residenciales. Constructora Estrategia Conesa S.A. +17 años en Yucatán.',
  keywords:
    'construcción de casas en Mérida, casas llave en mano Mérida, construir casa Mérida Yucatán, constructora residencial Mérida',
};

export default function ConstruccionCasasMeridaPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="relative bg-[var(--petra-navy)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--petra-navy)_0%,var(--petra-navy-dark)_50%,#0f172a_100%)]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[80%] h-full bg-[var(--petra-gold)] rounded-bl-[100%] max-w-2xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--petra-gold)]/20 text-[var(--petra-gold)] text-sm font-medium px-4 py-1.5 mb-6 border border-[var(--petra-gold)]/30">
            <Home className="w-4 h-4" />
            <span>Residencial</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.1]">
            Construcción de casas en Mérida, Yucatán
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            Proyectos <strong className="text-[var(--petra-gold)]">llave en mano</strong> en Mérida, Conkal, Cholul, Temozón y la península. +17 años construyendo hogares.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 md:-mt-16">
        <div className="grid gap-6 md:gap-8">
          <article className="rounded-2xl bg-white p-6 md:p-8 shadow-xl shadow-black/5 border border-neutral-100">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--petra-navy)] mb-4 flex items-center gap-3">
              <span className="w-1 h-8 rounded-full bg-[var(--petra-gold)]" />
              Casas llave en mano en Mérida
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              En Constructora Estrategia Conesa S.A. nos especializamos en la construcción de casas en Mérida, Yucatán. Desarrollamos viviendas unifamiliares y residenciales con la máxima calidad. Desde el diseño hasta la entrega final, acompañamos tu proyecto.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-6 md:p-8 shadow-xl shadow-black/5 border border-neutral-100">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--petra-navy)] mb-4 flex items-center gap-3">
              <span className="w-1 h-8 rounded-full bg-[var(--petra-gold)]" />
              Zonas donde construimos
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Trabajamos en Mérida y zona norte: Conkal, Cholul, Dzityá, Temozón, Progreso y toda la península de Yucatán.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Mérida', 'Conkal', 'Cholul', 'Temozón', 'Progreso', 'Dzityá'].map((zona) => (
                <span
                  key={zona}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[var(--petra-navy)]/5 text-[var(--petra-navy)] text-sm font-medium px-3 py-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-[var(--petra-gold)]" />
                  {zona}
                </span>
              ))}
            </div>
          </article>
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 pb-20 text-center">
          <Link
            href="/contacto"
            className="group inline-flex items-center gap-3 bg-[var(--petra-gold)] text-[var(--petra-navy)] font-semibold px-8 py-4 rounded-xl hover:bg-[var(--petra-gold-light)] transition-all duration-300 shadow-lg shadow-[var(--petra-gold)]/20 hover:shadow-xl hover:shadow-[var(--petra-gold)]/30 hover:-translate-y-0.5"
          >
            Solicitar presupuesto para construir en Mérida
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}

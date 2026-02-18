'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/src/data/projects';

export function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero: imagen con degradado - se extiende hasta arriba para navbar transparente */}
      <section className="relative h-[55vh] min-h-[320px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Assets/Proyecto-5/1.jpg"
            alt="Petra Construcciones"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white"
            aria-hidden
          />
        </div>
      </section>

      {/* Título: PROYECTOS PETRA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-medium text-center tracking-tight"
        >
          <span className="text-[#283777]">PROYECTOS </span>
          <span className="text-[var(--mavic-gold)]">PETRA</span>
        </motion.h2>
      </section>

      {/* Grilla: 1 col hasta lg, después 2 columnas escalonadas; carteles debajo hasta lg para que no se corten */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group ${index % 2 === 1 ? 'lg:mt-16' : ''}`}
            >
              <Link href={`/portfolio/${project.slug}`} className="block pt-4 pb-6">
                <div className="relative aspect-[4/3] overflow-visible cursor-pointer">
                  <div className="absolute inset-0 overflow-hidden rounded-sm">
                    <Image
                      src={project.image}
                      alt={project.label}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  {/* Solo desktop grande: caja mitad en imagen, mitad afuera */}
                  <div className="absolute bottom-4 left-0 -translate-x-1/2 z-10 w-max hidden lg:block">
                    <div className="px-5 py-3 bg-white text-center shadow-sm">
                      <p className="text-xs uppercase tracking-wider text-[#4A9EBB] font-medium">
                        {project.category || 'PROYECTO'}
                      </p>
                      <p className="text-lg xl:text-xl font-bold uppercase text-[var(--mavic-navy)] tracking-tight">
                        {project.label}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Tablets y móvil (< lg): texto debajo de la imagen, siempre visible */}
                <div className="mt-4 lg:hidden">
                  <p className="text-xs uppercase tracking-wider text-[#4A9EBB] font-medium">
                    {project.category || 'PROYECTO'}
                  </p>
                  <p className="text-xl font-bold uppercase text-[var(--mavic-navy)] tracking-tight mt-0.5">
                    {project.label}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Línea divisoria */}
      <div className="max-w-6xl mx-auto px-4">
        <hr className="border-t-2 border-[var(--mavic-gold)]" />
      </div>

      {/* Sección PRESUPUESTO CERRADO */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-medium text-center tracking-tight mb-10"
        >
          <span className="text-[var(--mavic-navy)]">PRESUPUESTO </span>
          <span className="text-[var(--mavic-gold)]">CERRADO</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-[var(--mavic-navy)]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700"
          >
            <p>
              Trabajamos con presupuesto cerrado para que conozcas desde el primer día el costo total de tu obra. Sin sorpresas ni gastos ocultos: el precio acordado es el precio final.
            </p>
            <p>
              Nuestro equipo define cada partida con transparencia y te entrega un detalle claro antes de comenzar. Así podés planificar tu inversión con seguridad y confianza.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700"
          >
            <p>
              La metodología de presupuesto cerrado nos permite optimizar plazos y recursos, y a vos te garantiza que el proyecto se mantiene dentro de lo pactado. Cualquier variante se cotiza por separado y se acuerda antes de ejecutarla.
            </p>
            <p>
              Si querés avanzar con tu proyecto con total claridad, contactanos y te enviamos una propuesta con presupuesto cerrado sin compromiso.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 bg-[var(--mavic-navy)] text-white font-medium rounded-lg hover:bg-[var(--mavic-navy-dark)] transition-colors"
          >
            Solicitar presupuesto
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

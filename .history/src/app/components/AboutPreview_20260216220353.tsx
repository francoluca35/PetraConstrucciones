'use client';

import { motion } from 'motion/react';
import { ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

export function AboutPreview() {
  return (
    <section className="py-16 md:py-20 bg-[#f8f8f8] border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="text-[var(--mavic-gold)]" size={28} />
            <h2 className="text-2xl md:text-3xl text-[var(--mavic-navy)] font-semibold">
              Nuestra <span className="text-[var(--mavic-gold)]">Historia</span>
            </h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Con más de 17 años de experiencia en gerencia de mantenimiento y coordinación de obras,
            Petra Construcciones nace del compromiso de llevar servicios de construcción en general
            a Mérida y la península. Desde obras en el Aeropuerto Internacional hasta viviendas y
            proyectos residenciales en la playa y la ciudad, nuestra trayectoria se basa en
            profesionalismo, calidad y entrega a tiempo.
          </p>
          <Link
            href="/quienes-somos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--mavic-navy)] text-white font-medium rounded-lg hover:bg-[var(--mavic-navy)]/90 transition-colors group"
          >
            Conocer Quiénes Somos
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

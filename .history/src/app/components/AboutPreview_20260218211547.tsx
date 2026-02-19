'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/src/context/LanguageContext';

export function AboutPreview() {
  const { t } = useLanguage();

  return (
    <section className="py-0 pb-16 md:pb-24 overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-[55vh] md:min-h-[60vh]">
        {/* Columna izquierda: fondo oscuro, texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[var(--petra-navy)] text-white flex flex-col justify-center px-8 py-16 md:py-20 lg:px-12 xl:px-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-3">
            {t('about.previewHeadline1')}{' '}
            <span className="text-[var(--petra-gold)]">{t('about.previewHeadline2')}</span>
          </h2>
          <p className="text-[var(--petra-gold)] font-medium text-sm md:text-base tracking-wide mb-6">
            {t('about.previewServices')}
          </p>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4">
            {t('about.previewP1')}
          </p>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8">
            {t('about.previewP2')}
          </p>
          <Link
            href="/quienes-somos"
            className="group inline-flex items-center gap-2 text-white font-semibold tracking-wide border-b-2 border-[var(--petra-gold)] pb-1 w-fit hover:text-[var(--petra-gold)] transition-colors"
          >
            {t('about.seeMore')}
            <ArrowRight size={18} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Columna derecha: imagen */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative min-h-[280px] md:min-h-full"
        >
          <img
            src="/Assets/about.jpg"
            alt="Trabajo en obra - Petra Construcciones"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

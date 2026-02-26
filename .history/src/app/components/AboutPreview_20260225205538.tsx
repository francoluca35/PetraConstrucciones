'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/src/context/LanguageContext';

const aboutImages = [
  { src: '/Assets/about.jpg', alt: 'Trabajo en obra - Conesa constructora' },

  { src: '/Assets/about-3.jpg', alt: 'Proyecto - Conesa constructora' },
];

const AUTOPLAY_MS = 4000;
const WHATSAPP_NUMBER = '5491131199872';

export function AboutPreview() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % aboutImages.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="overflow-hidden bg-[var(--petra-navy)]">
      <div className="grid md:grid-cols-2 min-h-[60vh] md:min-h-[70vh]">
        {/* Columna izquierda: fondo oscuro, texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[var(--petra-navy)] text-white flex flex-col justify-center px-8 py-16 md:py-20 lg:px-12 xl:px-16"
        >
          <p className="text-xs uppercase tracking-widest text-[var(--petra-gold)] mb-2">
            {t('about.socialProof')}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-3">
            {t('about.previewHeadline1')}{' '}
            <span className="text-[var(--petra-gold)]">{t('about.previewHeadline2')}</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--petra-gold)] mb-6" />
          <p className="text-[var(--petra-gold)] font-medium text-sm md:text-base tracking-wide mb-6">
            {t('about.previewServices')}
          </p>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4">
            {t('about.previewP1')}
          </p>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
            {t('about.previewP2')}
          </p>
          <Link
            href="/quienes-somos"
            className="group inline-flex items-center gap-2 text-white font-semibold tracking-wide border-b-2 border-[var(--petra-gold)] pb-1 w-fit hover:text-[var(--petra-gold)] transition-colors"
          >
            {t('about.seeMore')}
            <ArrowRight size={18} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t('about.whatsappMessage'))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center bg-[var(--petra-gold)] text-[var(--petra-navy)] font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-all w-fit"
          >
            {t('about.ctaPrimary')}
          </a>
        </motion.div>

        {/* Columna derecha: carrusel de 3 fotos */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative min-h-[280px] md:min-h-full overflow-hidden"
        >
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 z-0 [&:last-child]:z-10"
            >
              <img
                src={aboutImages[currentIndex].src}
                alt={aboutImages[currentIndex].alt}
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>
          {/* Overlay suave: transición sin tapar tanto la foto */}
          <div
            className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[var(--petra-navy)]/45 via-[var(--petra-navy)]/10 to-transparent"
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  );
}

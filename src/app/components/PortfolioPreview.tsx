'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/src/context/LanguageContext';

const portfolioItems = [
  { slug: 'lote-43', title: 'Residencia Yucatan', categoryKey: 'portfolio.category.residential', image: '/Assets/Proyecto-3/casa-moderna-mexico-1.avif', descriptionKey: 'portfolio.desc.lote43', alt: 'Construcción de vivienda residencial en Mérida, Yucatán - Lote 43' },
  { slug: 'ResidenciaMerida', title: 'Residencia Mérida', categoryKey: 'portfolio.category.residential', image: '/Assets/Proyecto-1/casa-moderna-merida-yucatan-1.avif', descriptionKey: 'portfolio.desc.merida', alt: 'Casa moderna construida en Mérida, Yucatán - Residencia Mérida' },
  { slug: 'lote-101', title: 'Oficinas en Merida', categoryKey: 'portfolio.category.offices', image: '/Assets/Proyecto-2/casa-moderna-merida-1.avif', descriptionKey: 'portfolio.desc.lote101', alt: 'Construcción de oficinas en Mérida, Yucatán - Lote 101' },
];

const AUTOPLAY_MS = 6000;

export function PortfolioPreview() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  const goTo = (index: number) => {
    setCurrentIndex((index + portfolioItems.length) % portfolioItems.length);
  };

  const item = portfolioItems[currentIndex];
  const indexStr = String(currentIndex + 1).padStart(2, '0');
  const totalStr = String(portfolioItems.length).padStart(2, '0');

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Título de sección: mismo peso que About, Contact, Servicios */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-8 md:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-semibold text-[var(--petra-navy)] leading-tight tracking-tight mb-3">
            {t('portfolio.our')} <span className="text-[var(--petra-gold)]">{t('portfolio.title')}</span>
          </h2>
          <div className="w-16 h-0.5 bg-[var(--petra-gold)] mx-auto mb-4" aria-hidden />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>
      </div>

      {/* Layout asimétrico: imagen (55%) | panel (45%) en desktop */}
      <div
        className="relative flex flex-col lg:flex-row min-h-[85vh] lg:min-h-[78vh]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Columna imagen: full height, con recorte diagonal hacia el panel en desktop */}
        <div className="relative w-full lg:w-[55%] min-h-[50vh] lg:min-h-0 flex-shrink-0">
          <Link href={`/portfolio/${item.slug}`} className="group block absolute inset-0">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                  priority={currentIndex === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent lg:to-black/20" aria-hidden />
                {/* Número gigante de fondo: atmósfera editorial */}
                <span
                  className="absolute top-8 left-6 md:left-10 text-[clamp(6rem,18vw,14rem)] font-bold leading-none text-white/[0.06] select-none pointer-events-none"
                  aria-hidden
                >
                  {indexStr}
                </span>
              </motion.div>
            </AnimatePresence>
          </Link>
          {/* Borde dorado sutil en el borde derecho (donde se encuentra con el panel) */}
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--petra-gold)]/25 to-transparent hidden lg:block" aria-hidden />
        </div>

        {/* Columna panel: fondo blanco, contenido vertical */}
        <div className="relative flex flex-col justify-between w-full lg:w-[45%] bg-white px-6 sm:px-10 lg:px-14 py-10 lg:py-16">
          <div>
            {/* Contador 01 / 03 */}
            <div className="flex items-center gap-3 mb-8 lg:mb-12">
              <span className="text-[var(--petra-gold)] font-mono text-2xl md:text-3xl tabular-nums tracking-tight">
                {indexStr}
              </span>
              <span className="text-gray-300 font-mono text-xl">/</span>
              <span className="text-gray-400 font-mono text-xl tabular-nums">{totalStr}</span>
            </div>

            {/* Categoría + línea */}
            <p className="text-[var(--petra-gold)] text-xs uppercase tracking-[0.3em] font-medium mb-3">
              {t(item.categoryKey)}
            </p>
            <div className="w-12 h-px bg-[var(--petra-gold)]/60 mb-6" aria-hidden />

            {/* Título del proyecto: grande, impacto */}
            <AnimatePresence mode="wait">
              <motion.h3
                key={currentIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-[var(--petra-navy)] leading-[1.1] tracking-tight max-w-lg"
              >
                {item.title}
              </motion.h3>
            </AnimatePresence>

            {/* Descripción */}
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-gray-600 text-base md:text-lg mt-5 max-w-md leading-relaxed"
              >
                {t(item.descriptionKey)}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Navegación + CTA */}
          <div className="mt-10 lg:mt-0 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            {/* Flechas + indicadores */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => goTo(currentIndex - 1)}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-[var(--petra-navy)] hover:border-[var(--petra-gold)]/60 hover:text-[var(--petra-gold)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--petra-gold)] focus:ring-offset-2 focus:ring-offset-white"
                aria-label={t('portfolio.prev')}
              >
                <ChevronLeft size={22} strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={() => goTo(currentIndex + 1)}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-[var(--petra-navy)] hover:border-[var(--petra-gold)]/60 hover:text-[var(--petra-gold)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--petra-gold)] focus:ring-offset-2 focus:ring-offset-white"
                aria-label={t('portfolio.next')}
              >
                <ChevronRight size={22} strokeWidth={2} />
              </button>
              <div className="flex gap-1.5 ml-2">
                {portfolioItems.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === currentIndex ? 'w-6 bg-[var(--petra-gold)]' : 'w-1 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Ir a proyecto ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Link al proyecto */}
            <Link
              href={`/portfolio/${item.slug}`}
              className="group inline-flex items-center gap-3 text-[var(--petra-gold)] font-semibold tracking-wide hover:gap-5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--petra-gold)] focus:ring-offset-2 focus:ring-offset-white"
            >
              <span className="border-b-2 border-current pb-0.5">
                {t('portfolio.viewProject')}
              </span>
              <ArrowRight size={20} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Barra "Ver todo el portfolio": corte entre secciones oscuras */}
      <div className="relative border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm tracking-wide">
            {t('portfolio.subtitle')}
          </p>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--petra-navy)] text-[var(--petra-navy)] font-semibold tracking-wide hover:bg-[var(--petra-navy)] hover:text-white transition-all duration-300"
          >
            {t('portfolio.seeMore')}
            <ArrowRight size={18} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}

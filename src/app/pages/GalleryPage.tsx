'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';

type GalleryItem = {
  url: string;
  titleKey: string;
  category: string;
  categoryKey: string;
  type?: 'image' | 'video';
};

const galleryImages: GalleryItem[] = [
  { url: '/Assets/Proyecto-1/casa-moderna-merida-yucatan-frente-1.avif', titleKey: 'galleryPage.imgTitle1', category: 'Residencial', categoryKey: 'galleryPage.filterResidential' },
  { url: '/Assets/Proyecto-2/casa-moderna-merida-1.avif', titleKey: 'galleryPage.imgTitle2', category: 'Comercial', categoryKey: 'galleryPage.filterCommercial' },
  { url: '/Assets/Proyecto-3/casa-moderna-mexico-1.avif', titleKey: 'galleryPage.imgTitle3', category: 'Residencial', categoryKey: 'galleryPage.filterResidential' },
  { url: '/Assets/Proyecto-4/casa-moderna-mexico-merida-patio-trasero.avif', titleKey: 'galleryPage.imgTitle4', category: 'Residencial', categoryKey: 'galleryPage.filterResidential' },
  { url: '/Assets/Proyecto-5/casa-moderna-mexico-tijuana-1.avif', titleKey: 'galleryPage.imgTitle5', category: 'Diseño', categoryKey: 'galleryPage.filterDesign' },
  { url: '/Assets/piscina-foto.png', titleKey: 'galleryPage.imgTitle6', category: 'Residencial', categoryKey: 'galleryPage.filterResidential' },
  { url: '/Assets/piscina.mp4', titleKey: 'galleryPage.imgTitle7', category: 'Residencial', categoryKey: 'galleryPage.filterResidential', type: 'video' },
];

const CATEGORY_KEYS = ['galleryPage.filterAll', 'galleryPage.filterResidential', 'galleryPage.filterCommercial', 'galleryPage.filterDesign', 'galleryPage.filterTeam'] as const;
const CATEGORY_VALUES = ['Todos', 'Residencial', 'Comercial', 'Diseño', 'Equipo'];

export function GalleryPage() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('Todos');

  const filteredImages = filter === 'Todos'
    ? galleryImages
    : galleryImages.filter((img) => img.category === filter);

  const goPrev = useCallback(() => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
  }, [selectedImage, filteredImages.length]);

  const goNext = useCallback(() => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % filteredImages.length);
  }, [selectedImage, filteredImages.length]);

  useEffect(() => {
    if (selectedImage === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedImage, goPrev, goNext]);

  return (
    <div className="min-h-screen bg-[#0a0a0b]">
      {/* Hero — refinado, premium */}
      <section className="relative flex min-h-[45vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1673978484308-6f32e2c4a984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt={t('galleryPage.heroAlt')}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--petra-navy)]/85" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 px-4 text-center"
        >
          <p className="mb-2 text-sm uppercase tracking-[0.35em] text-white/80">
            {t('galleryPage.our')}
          </p>
          <h1 className="text-4xl font-light tracking-wide text-white sm:text-5xl md:text-6xl">
            {t('galleryPage.title')}
          </h1>
          <div className="mx-auto mt-4 h-px w-16 bg-[var(--petra-gold)]" />
          <p className="mx-auto mt-6 max-w-xl text-base text-white/90 md:text-lg">
            {t('galleryPage.subtitle')}
          </p>
        </motion.div>
      </section>

      {/* Filtros — minimalistas, elegantes */}
      <section className="sticky top-20 z-40 border-b border-white/5 bg-[#0a0a0b]/95 py-5 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
            {CATEGORY_VALUES.map((category, i) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-[var(--petra-gold)] text-[var(--petra-navy)]'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {t(CATEGORY_KEYS[i])}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid — mucho aire, hover sutil */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          {filteredImages.map((image, index) => (
            <motion.button
              key={`${image.url}-${index}`}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white/5 text-left focus:outline-none focus:ring-2 focus:ring-[var(--petra-gold)] focus:ring-offset-2 focus:ring-offset-[#0a0a0b]"
              onClick={() => setSelectedImage(filteredImages.indexOf(image))}
            >
              {image.type === 'video' ? (
                <video
                  src={image.url}
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  aria-label={t(image.titleKey)}
                />
              ) : (
                <img
                  src={image.url}
                  alt={t(image.titleKey)}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="h-px w-12 bg-[var(--petra-gold)] mb-3" />
                <p className="text-lg font-medium text-white">{t(image.titleKey)}</p>
                <span className="mt-1 inline-block text-xs uppercase tracking-wider text-[var(--petra-gold)]">
                  {t(image.categoryKey)}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Lightbox — experiencia premium */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col bg-black"
          >
            {/* Barra superior: cerrar */}
            <div className="flex shrink-0 items-center justify-between px-4 py-4 md:px-6">
              <span className="text-sm text-white/50">
                {selectedImage + 1} / {filteredImages.length}
              </span>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-[var(--petra-gold)] hover:bg-[var(--petra-gold)]/10 hover:text-[var(--petra-gold)] focus:outline-none focus:ring-2 focus:ring-[var(--petra-gold)]"
                aria-label="Cerrar"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            {/* Imagen centrada + flechas */}
            <div className="relative flex flex-1 items-center justify-center p-4 md:p-8">
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-[var(--petra-gold)] hover:text-[var(--petra-gold)] md:left-6"
                aria-label="Anterior"
              >
                <ChevronLeft size={28} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-[var(--petra-gold)] hover:text-[var(--petra-gold)] md:right-6"
                aria-label="Siguiente"
              >
                <ChevronRight size={28} strokeWidth={1.5} />
              </button>

              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="flex max-h-[70vh] w-full max-w-5xl items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {filteredImages[selectedImage].type === 'video' ? (
                  <video
                    src={filteredImages[selectedImage].url}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="max-h-[70vh] w-auto max-w-full object-contain"
                    aria-label={t(filteredImages[selectedImage].titleKey)}
                  />
                ) : (
                  <img
                    src={filteredImages[selectedImage].url}
                    alt={t(filteredImages[selectedImage].titleKey)}
                    className="max-h-[70vh] w-auto max-w-full object-contain"
                  />
                )}
              </motion.div>
            </div>

            {/* Pie: título y categoría */}
            <div className="shrink-0 border-t border-white/10 px-4 py-5 md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--petra-gold)]">
                  {t(filteredImages[selectedImage].categoryKey)}
                </p>
                <h2 className="mt-1 text-xl font-light text-white md:text-2xl">
                  {t(filteredImages[selectedImage].titleKey)}
                </h2>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1769721209842-e46c60e7fbf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Construcción Moderna 1',
    category: 'Residencial',
  },
  {
    url: 'https://images.unsplash.com/photo-1673978484308-6f32e2c4a984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Sitio de Construcción',
    category: 'Comercial',
  },
  {
    url: 'https://images.unsplash.com/photo-1679364297777-1db77b6199be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Edificio de Lujo',
    category: 'Residencial',
  },
  {
    url: 'https://images.unsplash.com/photo-1684691376857-5dfb87f6bc65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Casa Moderna',
    category: 'Residencial',
  },
  {
    url: 'https://images.unsplash.com/photo-1742415106160-594d07f6cc23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Planos Arquitectónicos',
    category: 'Diseño',
  },
  {
    url: 'https://images.unsplash.com/photo-1718209962486-4f91ce71886b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Equipo de Trabajo',
    category: 'Equipo',
  },
];

const AUTOPLAY_MS = 5000;

export function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % galleryImages.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, []);

  const goPrev = () => setCurrentIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const goNext = () => setCurrentIndex((i) => (i + 1) % galleryImages.length);

  return (
    <div className="pt-20">
      {/* Carrusel a pantalla completa — ocupa toda la sección */}
      <section className="relative w-full min-h-[calc(100vh-5rem)] overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={galleryImages[currentIndex].url}
              alt={galleryImages[currentIndex].title}
              className="w-full h-full object-cover"
            />
            {/* Overlay suave para legibilidad */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"
              aria-hidden
            />

            {/* Botón Ver Más dentro de la imagen — abajo al centro */}
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end p-8 md:p-12 pb-24 md:pb-28">
              <p className="text-white/90 text-sm uppercase tracking-wider mb-2">
                {galleryImages[currentIndex].category}
              </p>
              <p className="text-white text-xl md:text-2xl font-semibold mb-6">
                {galleryImages[currentIndex].title}
              </p>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--petra-gold)] text-white font-semibold rounded-lg hover:bg-[var(--petra-gold-light)] hover:text-[var(--petra-navy)] transition-colors group"
              >
                Ver Más
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Flechas del carrusel */}
        <button
          type="button"
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          type="button"
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
          aria-label="Siguiente"
        >
          <ChevronRight size={28} />
        </button>

        {/* Indicadores (puntos) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {galleryImages.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === currentIndex ? 'bg-[var(--petra-gold)] scale-125' : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Ir a imagen ${i + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

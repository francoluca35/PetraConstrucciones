'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1673978484308-6f32e2c4a984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Construcción Moderna',
  },
  {
    url: 'https://images.unsplash.com/photo-1679364297777-1db77b6199be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Casa en suburbios',
  },
  {
    url: 'https://images.unsplash.com/photo-1684691376857-5dfb87f6bc65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Casas Modernas',
  },
  {
    url: '/Assets/plano.png',
    title: 'Diseño Arquitectónico',
  },
];

const AUTOPLAY_MS = 5000;

export function GalleryPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef<number>(Date.now());
  const frameRef = useRef<number>(0);

  useEffect(() => {
    startTimeRef.current = Date.now();
    setProgress(0);
  }, [currentIndex]);

  useEffect(() => {
    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const p = Math.min(elapsed / AUTOPLAY_MS, 1);
      setProgress(p);
      if (p >= 1) {
        setCurrentIndex((i) => (i + 1) % galleryImages.length);
        startTimeRef.current = Date.now();
      }
      frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [currentIndex]);

  return (
    <section className="relative w-full min-h-[75vh] overflow-hidden bg-gray-900">
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
          {/* Sin bloque oscuro: texto directo sobre la imagen, esquina inferior derecha */}
          <div className="absolute bottom-0 right-0 text-right p-6 md:p-10 pb-24 md:pb-28">
            <p className="text-white text-2xl md:text-3xl font-semibold tracking-tight mb-1 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
              {galleryImages[currentIndex].title}
            </p>
            <p className="text-white/90 text-sm md:text-base mb-4 [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]">
              Petra Construcciones · Galería
            </p>
            <Link
              href="/galeria"
              className="inline-flex items-center gap-1.5 text-white text-sm font-medium border-b border-white/80 pb-0.5 hover:border-[var(--petra-gold)] hover:text-[var(--petra-gold)] transition-colors group"
            >
              Ver más
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Líneas de carga: una por slide, la activa se llena hasta el cambio */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2 w-full max-w-[280px] px-4">
        {galleryImages.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrentIndex(i)}
            className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden min-w-0"
            aria-label={`Ir a imagen ${i + 1}`}
          >
            <div
              className="h-full bg-white rounded-full transition-none"
              style={{
                width: i < currentIndex ? '100%' : i === currentIndex ? `${progress * 100}%` : '0%',
              }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

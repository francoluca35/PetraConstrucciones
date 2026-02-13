'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, MapPin, Calendar, CheckCircle, LayoutGrid, X } from 'lucide-react';
import type { Project } from '@/src/data/projects';

interface ProjectDetailClientProps {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}

export function ProjectDetailClient({ project, prevProject, nextProject }: ProjectDetailClientProps) {
  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [lightboxOpen]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goToSlide = (index: number) => {
    setCurrentIndex((index + images.length) % images.length);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero: imagen del proyecto seleccionado */}
      <section className="relative h-[55vh] min-h-[320px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.label}
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

        {/* Botón volver */}
        {/* <div className="absolute top-4 left-4 z-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-[var(--mavic-navy)] font-medium rounded-lg hover:bg-white transition-colors"
          >
            <ArrowLeft size={20} />
            Volver al portfolio
          </Link>
        </div> */}

        {/* Título sobre la imagen */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {project.category && (
              <span className="inline-block px-3 py-1 bg-[var(--mavic-gold)] text-white text-sm font-medium rounded-full mb-3">
                {project.category}
              </span>
            )}
            <h1
              className="text-4xl md:text-5xl font-bold text-[var(--mavic-navy)]"
              style={{ fontFamily: "'Good Times', sans-serif" }}
            >
              {project.label}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Galería grande con auto-slide y lightbox al hacer clic */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 rounded-lg">
            <button
              type="button"
              onClick={() => openLightbox(currentIndex)}
              className="absolute inset-0 w-full h-full cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[var(--mavic-gold)] focus:ring-inset"
              aria-label="Ver imagen completa"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentIndex]}
                    alt={`${project.label} - imagen ${currentIndex + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                </motion.div>
              </AnimatePresence>
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); goToSlide(currentIndex - 1); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
                  aria-label="Imagen anterior"
                >
                  <ArrowLeft size={20} className="text-[var(--mavic-navy)]" />
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); goToSlide(currentIndex + 1); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
                  aria-label="Siguiente imagen"
                >
                  <ArrowRight size={20} className="text-[var(--mavic-navy)]" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                      className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? 'bg-[var(--mavic-gold)]' : 'bg-white/70 hover:bg-white'}`}
                      aria-label={`Ir a imagen ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </motion.div>
      </section>

      {/* Lightbox: imagen completa al hacer clic */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white hover:text-[var(--mavic-gold)] transition-colors"
              aria-label="Cerrar"
            >
              <X size={28} />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentIndex]}
                alt={`${project.label} - imagen ${currentIndex + 1}`}
                width={1920}
                height={1080}
                className="w-full h-auto max-h-[85vh] object-contain"
                sizes="100vw"
              />

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => goToSlide(currentIndex - 1)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                  >
                    <ArrowLeft size={24} />
                  </button>
                  <button
                    type="button"
                    onClick={() => goToSlide(currentIndex + 1)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                  >
                    <ArrowRight size={24} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
                    {currentIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenido */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-8"
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {project.description}
          </p>

          {(project.location || project.year) && (
            <div className="flex flex-wrap gap-6 text-gray-600">
              {project.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="text-[var(--mavic-gold)]" size={22} />
                  <span>{project.location}</span>
                </div>
              )}
              {project.year && (
                <div className="flex items-center gap-2">
                  <Calendar className="text-[var(--mavic-gold)]" size={22} />
                  <span>{project.year}</span>
                </div>
              )}
            </div>
          )}

          {project.features && project.features.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-[var(--mavic-navy)] mb-4">
                Características principales
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <CheckCircle
                      className="text-[var(--mavic-gold)] flex-shrink-0"
                      size={20}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-8">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--mavic-navy)] text-white font-medium rounded-lg hover:bg-[var(--mavic-navy-dark)] transition-colors"
            >
              Solicitar presupuesto para un proyecto similar
              <ArrowLeft className="rotate-180" size={18} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Navegación entre proyectos */}
      <section className="border-t border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between text-gray-600" aria-label="Navegación entre proyectos">
            {prevProject ? (
              <Link
                href={`/portfolio/${prevProject.slug}`}
                className="flex items-center gap-2 hover:text-[var(--mavic-navy)] transition-colors group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Proyectos</span>
              </Link>
            ) : (
              <Link
                href="/portfolio"
                className="flex items-center gap-2 text-gray-400 hover:text-[var(--mavic-navy)] transition-colors group"
              >
                <ArrowLeft size={20} />
                <span className="font-medium">Proyectos</span>
              </Link>
            )}

            <Link
              href="/portfolio"
              className="flex items-center justify-center w-12 h-12 text-gray-600 hover:text-[var(--mavic-navy)] hover:bg-gray-100 rounded-lg transition-colors"
              title="Ver todos los proyectos"
              aria-label="Ver todos los proyectos"
            >
              <LayoutGrid size={24} />
            </Link>

            {nextProject ? (
              <Link
                href={`/portfolio/${nextProject.slug}`}
                className="flex items-center gap-2 hover:text-[var(--mavic-navy)] transition-colors group"
              >
                <span className="font-medium">Siguiente</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <span className="text-gray-400 cursor-default flex items-center gap-2">
                <span className="font-medium">Siguiente</span>
                <ArrowRight size={20} />
              </span>
            )}
          </nav>
        </div>
      </section>
    </div>
  );
}

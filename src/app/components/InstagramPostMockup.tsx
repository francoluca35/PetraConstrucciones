'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, MessageCircle, Send, MoreHorizontal } from 'lucide-react';
import { projects } from '@/src/data/projects';

const projectImages = projects
  .slice(0, 4)
  .flatMap((p) => (p.gallery?.length ? p.gallery[0] : p.image));

export function InstagramPostMockup() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = projectImages.length ? projectImages : ['/Assets/service.jpg'];

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div
      className="relative w-full max-w-[320px] mx-auto rounded-xl overflow-hidden shadow-2xl border border-[#262626] bg-[#000]"
      aria-hidden
    >
      {/* Header del post: usuario + menú */}
      <div className="flex items-center justify-between px-3 py-2.5 bg-[#000] border-b border-[#262626]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-[#2d2d2d] flex-shrink-0 ring-1 ring-[#363636]">
            <img src="/Assets/sigla2.png" alt="" className="w-full h-full object-cover" />
          </div>
          <a
            href="https://www.instagram.com/petra.construcciones/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white hover:opacity-80 transition-opacity"
          >
            petra.construcciones
          </a>
        </div>
        <button type="button" className="p-1 text-white/90" aria-hidden>
          <MoreHorizontal size={20} strokeWidth={2} />
        </button>
      </div>

      {/* Área de la imagen del posteo — fotos de proyectos */}
      <div className="relative aspect-square w-full bg-[#1a1a1a]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={images[currentIndex]}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Acciones: like, comentar, compartir */}
      <div className="flex items-center gap-4 px-3 py-2.5 bg-[#000] border-b border-[#262626]">
        <button type="button" className="text-red-500" aria-hidden>
          <Heart size={24} strokeWidth={2} fill="currentColor" />
        </button>
        <button type="button" className="text-white/90" aria-hidden>
          <MessageCircle size={24} strokeWidth={2} />
        </button>
        <button type="button" className="text-white/90" aria-hidden>
          <Send size={22} strokeWidth={2} />
        </button>
      </div>

      {/* Pie: likes + caption */}
      <div className="px-3 py-2 bg-[#000] text-sm text-white/90">
        <p className="font-semibold">Me gusta</p>
        <p>
          <span className="font-semibold">petra.construcciones</span>{' '}
          <span className="text-white/80">Construcción y diseño en Mérida</span>
        </p>
      </div>
    </div>
  );
}

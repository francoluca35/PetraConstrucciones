'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1769721209842-e46c60e7fbf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzA3NDIzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Construcción Moderna 1',
    category: 'Residencial',
  },
  {
    url: 'https://images.unsplash.com/photo-1673978484308-6f32e2c4a984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MDg1Njk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Sitio de Construcción',
    category: 'Comercial',
  },
  {
    url: 'https://images.unsplash.com/photo-1679364297777-1db77b6199be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MDg1Njk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Edificio de Lujo',
    category: 'Residencial',
  },
  {
    url: 'https://images.unsplash.com/photo-1684691376857-5dfb87f6bc65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzA4NTY5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Casa Moderna',
    category: 'Residencial',
  },
  {
    url: 'https://images.unsplash.com/photo-1742415106160-594d07f6cc23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBibHVlcHJpbnQlMjBwbGFuc3xlbnwxfHx8fDE3NzA3NjU0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Planos Arquitectónicos',
    category: 'Diseño',
  },
  {
    url: 'https://images.unsplash.com/photo-1718209962486-4f91ce71886b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0ZWFtJTIwd29ya2Vyc3xlbnwxfHx8fDE3NzA4NTY5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Equipo de Trabajo',
    category: 'Equipo',
  },
];

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('Todos');

  const categories = ['Todos', 'Residencial', 'Comercial', 'Diseño', 'Equipo'];

  const filteredImages = filter === 'Todos' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1673978484308-6f32e2c4a984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MDg1Njk4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Galería"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--petra-navy)]/80"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl mb-4">
            Nuestra <span className="text-[var(--petra-gold)]">Galería</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explora nuestros proyectos más destacados
          </p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === category
                    ? 'bg-[var(--petra-gold)] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer h-80"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--petra-navy)]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-white text-xl mb-2">{image.title}</p>
                  <span className="inline-block bg-[var(--petra-gold)] text-white px-3 py-1 rounded-full text-sm w-fit">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-[var(--petra-gold)] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedImage].url}
                alt={filteredImages[selectedImage].title}
                className="w-full h-auto rounded-lg"
              />
              <div className="text-center mt-4">
                <h3 className="text-white text-2xl mb-2">
                  {filteredImages[selectedImage].title}
                </h3>
                <span className="inline-block bg-[var(--petra-gold)] text-white px-4 py-2 rounded-full">
                  {filteredImages[selectedImage].category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

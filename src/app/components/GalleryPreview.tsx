import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1673978484308-6f32e2c4a984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MDg1Njk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Construcción Moderna',
  },
  {
    url: 'https://images.unsplash.com/photo-1679364297777-1db77b6199be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MDg1Njk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Edificios de Lujo',
  },
  {
    url: 'https://images.unsplash.com/photo-1684691376857-5dfb87f6bc65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzA4NTY5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Casas Modernas',
  },
  {
    url: 'https://images.unsplash.com/photo-1742415106160-594d07f6cc23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBibHVlcHJpbnQlMjBwbGFuc3xlbnwxfHx8fDE3NzA3NjU0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Diseño Arquitectónico',
  },
];

export function GalleryPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-[var(--mavic-navy)] mb-4">
            Nuestra <span className="text-[var(--mavic-gold)]">Galería</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre algunos de nuestros proyectos más destacados
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer h-64"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--mavic-navy)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/galeria"
            className="inline-flex items-center px-6 py-3 bg-[var(--mavic-gold)] text-white rounded-lg hover:bg-[var(--mavic-gold-light)] transition-colors group"
          >
            Ver Más
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

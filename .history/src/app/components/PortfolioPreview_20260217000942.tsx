'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const portfolioItems = [
  {
    title: 'Torres Residenciales',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1679364297777-1db77b6199be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Complejos residenciales de lujo',
  },
  {
    title: 'Viviendas Unifamiliares',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1684691376857-5dfb87f6bc65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Diseños personalizados y modernos',
  },
  {
    title: 'Espacios Comerciales',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1673978484308-6f32e2c4a984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Proyectos comerciales e industriales',
  },
];

export function PortfolioPreview() {
  return (
    <section className="bg-white">
      {/* Título */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl text-[var(--petra-navy)] mb-3">
            Nuestro <span className="text-[var(--petra-gold)]">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proyectos que definen la excelencia en construcción
          </p>
        </motion.div>
      </div>

      {/* Tres columnas a ancho completo — imagen entera + etiqueta abajo */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="group relative min-h-[50vh] md:min-h-[70vh] overflow-hidden"
          >
            <Link href="/portfolio" className="block absolute inset-0">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Marca de agua: logo en esquina superior derecha */}
              <div
                className="absolute top-6 right-6 w-20 md:w-28 h-auto opacity-20 pointer-events-none select-none"
                aria-hidden
              >
                <img
                  src="/Assets/sigla.png"
                  alt=""
                  className="w-full h-auto"
                />
              </div>
              {/* Gradiente inferior para legibilidad del texto */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                aria-hidden
              />
              {/* Etiqueta al pie */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-white/80 text-sm uppercase tracking-wider mb-1">
                  {item.category}
                </p>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm mt-1 max-w-xs">
                  {item.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Botón Ver Más */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
         <Link
              href="/portfolio"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5  border-2 border-[#2c3e50] text-[#2c3e50] font-semibold tracking-wide overflow-hidden"
            >
              {/* Relleno que “carga” de izquierda a derecha al hacer hover */}
              <span
                className="absolute left-0 top-0 h-full w-0 bg-[#1f252b] transition-[width] duration-500 ease-out group-hover:w-full"
                aria-hidden
              />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Ver más
              </span>
              <ArrowRight size={18} strokeWidth={2.5} className="relative z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
            </Link>
        </motion.div>
      </div>
    </section>
  );
}

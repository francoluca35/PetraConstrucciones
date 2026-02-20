'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/src/context/LanguageContext';

const portfolioItems = [
  { slug: 'lote-43', title: 'Lote 43', categoryKey: 'portfolio.category.residential', image: '/Assets/Proyecto-3/1.png', descriptionKey: 'portfolio.desc.lote43' },
  { slug: 'ResidenciaMerida', title: 'Residencia Mérida', categoryKey: 'portfolio.category.residential', image: '/Assets/Proyecto-1/frente-1.png', descriptionKey: 'portfolio.desc.merida' },
  { slug: 'proyecto-5020-1', title: '5020/1', categoryKey: 'portfolio.category.design', image: '/Assets/Proyecto-4/1.png', descriptionKey: 'portfolio.desc.5020' },
];

export function PortfolioPreview() {
  const { t } = useLanguage();
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl text-[var(--petra-navy)] mb-3">
            {t('portfolio.our')} <span className="text-[var(--petra-gold)]">{t('portfolio.title')}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
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
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative min-h-[50vh] md:min-h-[70vh] overflow-hidden"
          >
            <Link href={`/portfolio/${item.slug}`} className="block absolute inset-0">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
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
                  {t(item.categoryKey)}
                </p>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm mt-1 max-w-xs">
                  {t(item.descriptionKey)}
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
                className="absolute left-0 top-0 h-full w-0 bg-[#222222] transition-[width] duration-500 ease-out group-hover:w-full"
                aria-hidden
              />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                {t('portfolio.seeMore')}
              </span>
              <ArrowRight size={18} strokeWidth={2.5} className="relative z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
            </Link>
        </motion.div>
      </div>
    </section>
  );
}

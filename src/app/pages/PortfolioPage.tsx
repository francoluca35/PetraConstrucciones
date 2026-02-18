'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/src/data/projects';
import { useLanguage } from '@/src/context/LanguageContext';

const categoryToKey: Record<string, string> = {
  Residencial: 'portfolio.category.residential',
  Oficinas: 'portfolio.category.offices',
  Diseño: 'portfolio.category.design',
};

export function PortfolioPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-white">
      {/* Hero: imagen con degradado - se extiende hasta arriba para navbar transparente */}
      <section className="relative h-[55vh] min-h-[320px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Assets/Proyecto-5/1.jpg"
            alt="Petra Construcciones"
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
      </section>

      {/* Título: PROYECTOS PETRA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-medium text-center tracking-tight"
        >
          <span className="text-[#283777]">{t('portfolioPage.title').split(' ')[0]} </span>
          <span className="text-[var(--petra-gold)]">{t('portfolioPage.title').split(' ').slice(1).join(' ')}</span>
        </motion.h2>
      </section>

      {/* Grilla: 1 col hasta lg, después 2 columnas escalonadas; carteles debajo hasta lg para que no se corten */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group ${index % 2 === 1 ? 'lg:mt-16' : ''}`}
            >
              <Link href={`/portfolio/${project.slug}`} className="block pt-4 pb-6">
                <div className="relative aspect-[4/3] overflow-visible cursor-pointer">
                  <div className="absolute inset-0 overflow-hidden rounded-sm">
                    <Image
                      src={project.image}
                      alt={project.label}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  {/* Solo desktop grande: caja mitad en imagen, mitad afuera */}
                  <div className="absolute bottom-4 left-0 -translate-x-1/2 z-10 w-max hidden lg:block">
                    <div className="px-5 py-3 bg-white text-center shadow-sm">
                      <p className="text-xs uppercase tracking-wider text-[#4A9EBB] font-medium">
                        {project.category ? t(categoryToKey[project.category] ?? 'portfolioPage.categoryProject') : t('portfolioPage.categoryProject')}
                      </p>
                      <p className="text-lg xl:text-xl font-bold uppercase text-[var(--petra-navy)] tracking-tight">
                        {project.label}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Tablets y móvil (< lg): texto debajo de la imagen, siempre visible */}
                <div className="mt-4 lg:hidden">
                  <p className="text-xs uppercase tracking-wider text-[#4A9EBB] font-medium">
                    {project.category ? t(categoryToKey[project.category] ?? 'portfolioPage.categoryProject') : t('portfolioPage.categoryProject')}
                  </p>
                  <p className="text-xl font-bold uppercase text-[var(--petra-navy)] tracking-tight mt-0.5">
                    {project.label}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Línea divisoria */}
      <div className="max-w-6xl mx-auto px-4">
        <hr className="border-t-2 border-[var(--petra-gold)]" />
      </div>

      {/* Sección PRESUPUESTO CERRADO */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-medium text-center tracking-tight mb-10"
        >
          <span className="text-[var(--petra-navy)]">{t('portfolioPage.budgetTitlePrefix')}</span>
          <span className="text-[var(--petra-gold)]">{t('portfolioPage.budgetTitleSuffix')}</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-[var(--petra-navy)]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700"
          >
            <p>{t('portfolioPage.budgetP1')}</p>
            <p>{t('portfolioPage.budgetP2')}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700"
          >
            <p>{t('portfolioPage.budgetP3')}</p>
            <p>{t('portfolioPage.budgetP4')}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 bg-[var(--petra-navy)] text-white font-medium rounded-lg hover:bg-[var(--petra-navy-dark)] transition-colors"
          >
            {t('portfolioPage.requestQuote')}
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

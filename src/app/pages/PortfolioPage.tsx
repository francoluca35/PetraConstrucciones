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
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero premium: imagen + overlay oscuro + título centrado */}
      <section className="relative h-[50vh] min-h-[340px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Assets/Proyecto-5/casa-moderna-mexico-tijuana-1.avif"
            alt="Conesa constructora"
            fill
            className="object-cover transition-transform duration-700"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"
            aria-hidden
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" aria-hidden />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"
        >
          <div className="h-px w-20 bg-[var(--petra-gold)] mb-4" aria-hidden />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight">
            <span className="text-white/95">{t('portfolioPage.title').split(' ')[0]} </span>
            <span className="text-[var(--petra-gold)]">{t('portfolioPage.title').split(' ').slice(1).join(' ')}</span>
          </h1>
        </motion.div>
      </section>

      {/* Grilla proyectos: cards con borde dorado al hover */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`group ${index % 2 === 1 ? 'lg:mt-20' : ''}`}
            >
              <Link href={`/portfolio/${project.slug}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[var(--petra-navy)] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]">
                  <Image
                    src={project.image}
                    alt={project.label}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--petra-gold)]/50 transition-colors duration-500" aria-hidden />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden />
                  {/* Etiqueta desktop: mitad fuera */}
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0 z-10 w-max">
                    <div className="px-6 py-4 bg-white/95 backdrop-blur-sm shadow-xl border-l-4 border-[var(--petra-gold)]">
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--petra-gold)] font-semibold">
                        {project.category ? t(categoryToKey[project.category] ?? 'portfolioPage.categoryProject') : t('portfolioPage.categoryProject')}
                      </p>
                      <p className="text-lg xl:text-xl font-bold text-[var(--petra-navy)] tracking-tight mt-0.5">
                        {project.label}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Móvil/tablet: texto debajo */}
                <div className="mt-5 lg:hidden">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--petra-gold)] font-semibold">
                    {project.category ? t(categoryToKey[project.category] ?? 'portfolioPage.categoryProject') : t('portfolioPage.categoryProject')}
                  </p>
                  <p className="text-xl font-bold text-[var(--petra-navy)] tracking-tight mt-1">
                    {project.label}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Divisor dorado */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex gap-1 py-2">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--petra-gold)] to-transparent" />
          <div className="w-2 h-px bg-[var(--petra-gold)]" />
        </div>
      </div>

      {/* Presupuesto cerrado: bloque premium */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center tracking-tight mb-4"
        >
          <span className="text-[var(--petra-navy)]">{t('portfolioPage.budgetTitlePrefix')}</span>
          <span className="text-[var(--petra-gold)]">{t('portfolioPage.budgetTitleSuffix')}</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-24 h-0.5 bg-[var(--petra-gold)] mx-auto mb-14"
          aria-hidden
        />

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 text-[var(--petra-navy)]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-base md:text-lg leading-relaxed text-gray-700"
          >
            <p>{t('portfolioPage.budgetP1')}</p>
            <p>{t('portfolioPage.budgetP2')}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-base md:text-lg leading-relaxed text-gray-700"
          >
            <p>{t('portfolioPage.budgetP3')}</p>
            <p>{t('portfolioPage.budgetP4')}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <Link
            href="/contacto"
            className="group relative inline-flex items-center justify-center overflow-hidden border-2 border-[var(--petra-gold)] bg-transparent px-10 py-4 font-semibold tracking-wide text-[var(--petra-navy)] transition-all duration-300 hover:bg-[var(--petra-gold)] hover:text-[var(--petra-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--petra-gold)] focus:ring-offset-2"
          >
            <span className="relative z-10">{t('portfolioPage.requestQuote')}</span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

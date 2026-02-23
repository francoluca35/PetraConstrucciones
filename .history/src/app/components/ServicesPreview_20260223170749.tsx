'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight, Home, Building2, Waves, Landmark, Hammer } from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';

const CARD_KEYS = [
  { title: 'services.card2.title', desc: 'services.card2.desc', stats: 'services.card2.stats', imgPos: 'object-top', color: 'from-amber-500/20 to-orange-600/20', icon: Home },
  { title: 'services.card3.title', desc: 'services.card3.desc', stats: 'services.card3.stats', imgPos: 'object-center', color: 'from-blue-500/20 to-indigo-600/20', icon: Building2 },
  { title: 'services.card4.title', desc: 'services.card4.desc', stats: 'services.card4.stats', imgPos: 'object-bottom', color: 'from-cyan-500/20 to-blue-600/20', icon: Waves },
  { title: 'services.card5.title', desc: 'services.card5.desc', stats: 'services.card5.stats', imgPos: 'object-center', color: 'from-stone-500/20 to-neutral-600/20', icon: Landmark },
  { title: 'services.card6.title', desc: 'services.card6.desc', stats: 'services.card6.stats', imgPos: 'object-top', color: 'from-slate-500/20 to-neutral-600/20', icon: Building2 },
  { title: 'services.card7.title', desc: 'services.card7.desc', stats: 'services.card7.stats', imgPos: 'object-center', color: 'from-emerald-500/20 to-teal-600/20', icon: Hammer },
] as const;

const WHATSAPP_NUMBER = '5491131199872';

export function ServicesPreview() {
  const { t } = useLanguage();

  return (
    <section
      id="servicios"
      className="relative bg-neutral-950 py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <div className="text-center">
            <span className="text-[--petra-gold] text-sm uppercase tracking-[0.3em] font-medium mb-4 inline-block">
              {t('services.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-light max-w-3xl mx-auto">
              {t('services.heading')}{' '}
              <span className="italic text-amber-500">{t('services.headingItalic')}</span>
            </h2>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARD_KEYS.map((card, index) => (
            <ServiceCard key={card.title} card={card} index={index} t={t} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-6 md:p-8 bg-neutral-900/50 backdrop-blur-sm rounded-2xl border border-neutral-800">
            <div className="text-left">
              <p className="text-white text-xl mb-1 font-medium">{t('services.ctaTitle')}</p>
              <p className="text-neutral-400 text-sm">{t('services.ctaSubtitle')}</p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t('about.whatsappMessage'))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-medium rounded-full transition-all duration-300 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-neutral-950"
              aria-label={t('services.requestQuote')}
            >
              {t('services.requestQuote')}
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  card,
  index,
  t,
}: {
  card: (typeof CARD_KEYS)[number];
  index: number;
  t: (key: string) => string;
}) {
  const Icon = card.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-colors duration-500"
    >
      {/* Image / visual area */}
      <div className="relative h-64 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10`}
          aria-hidden
        />
        <div className="absolute inset-0 bg-neutral-800">
          <img
            src="/Assets/service.jpg"
            alt=""
            className={`absolute inset-0 w-full h-full object-cover ${card.imgPos} opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700`}
          />
          <div className="absolute inset-0 flex items-center justify-center text-neutral-600">
            <Icon className="w-16 h-16 opacity-30 group-hover:opacity-0 transition-opacity duration-500" />
          </div>
        </div>
        <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" aria-hidden />
        <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-medium border border-white/20">
            {t(card.stats)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 relative">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-neutral-800 rounded-xl group-hover:bg-amber-500/10 transition-colors duration-300">
            <Icon className="w-6 h-6 text-neutral-300 group-hover:text-amber-500 transition-colors" />
          </div>
          <Link
            href="/contacto"
            className="text-neutral-600 hover:text-amber-500 transition-colors duration-300 focus:outline-none focus:text-amber-500"
            aria-label={t('services.seeMore')}
          >
            <ArrowUpRight className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-amber-500 transition-colors duration-300">
          {t(card.title)}
        </h3>

        <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3 group-hover:text-neutral-300 transition-colors">
          {t(card.desc)}
        </p>

        <div
          className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-700 ease-out"
          aria-hidden
        />
      </div>
    </motion.article>
  );
}

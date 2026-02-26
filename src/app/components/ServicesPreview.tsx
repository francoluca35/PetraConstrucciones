'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowUpRight, Home, Building2, Waves, Landmark, Hammer } from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';

const SERVICE_IMAGES = {
  viviendas: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
  oficinas: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
  piscinas: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7',
  civiles: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd',
  municipales: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5',
  remodelaciones: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8',
} as const;

const CARD_KEYS = [
  { title: 'services.card2.title', desc: 'services.card2.desc', stats: 'services.card2.stats', imgPos: 'object-center', image: SERVICE_IMAGES.viviendas, color: 'from-amber-500/20 to-orange-600/20', icon: Home, servicePage: '/construccion-de-casas-merida' },
  { title: 'services.card3.title', desc: 'services.card3.desc', stats: 'services.card3.stats', imgPos: 'object-center', image: SERVICE_IMAGES.oficinas, color: 'from-blue-500/20 to-indigo-600/20', icon: Building2, servicePage: '/construccion-de-oficinas-merida' },
  { title: 'services.card4.title', desc: 'services.card4.desc', stats: 'services.card4.stats', imgPos: 'object-center', image: SERVICE_IMAGES.piscinas, color: 'from-cyan-500/20 to-blue-600/20', icon: Waves, servicePage: '/construccion-de-piscinas-merida' },
  { title: 'services.card5.title', desc: 'services.card5.desc', stats: 'services.card5.stats', imgPos: 'object-center', image: SERVICE_IMAGES.civiles, color: 'from-stone-500/20 to-neutral-600/20', icon: Landmark, servicePage: '/obras-civiles-merida' },
  { title: 'services.card6.title', desc: 'services.card6.desc', stats: 'services.card6.stats', imgPos: 'object-center', image: SERVICE_IMAGES.municipales, color: 'from-slate-500/20 to-neutral-600/20', icon: Building2, servicePage: '/obras-municipales-merida' },
  { title: 'services.card7.title', desc: 'services.card7.desc', stats: 'services.card7.stats', imgPos: 'object-center', image: SERVICE_IMAGES.remodelaciones, color: 'from-emerald-500/20 to-teal-600/20', icon: Hammer, servicePage: '/remodelaciones-merida' },
] as const;

const WHATSAPP_NUMBER = '5491131199872';

export function ServicesPreview() {
  const { t } = useLanguage();

  return (
    <section
      id="servicios"
      className="relative bg-[var(--petra-navy)] py-28 md:py-36 overflow-hidden"
    >
      {/* Background: orbes dorados suaves */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/4 w-[28rem] h-[28rem] bg-[var(--petra-gold)]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] bg-[var(--petra-gold-dark)]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] bg-[var(--petra-gold)]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-20 md:mb-24"
        >
          <div className="text-center">
            <span className="text-[var(--petra-gold)] text-xs uppercase tracking-[0.35em] font-semibold mb-5 inline-block">
              {t('services.badge')}
            </span>
            <div className="flex justify-center gap-1 mb-5">
              <div className="w-16 h-px bg-[var(--petra-gold)]/60" />
              <div className="w-8 h-px bg-[var(--petra-gold)]/40" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] text-white leading-tight font-light max-w-3xl mx-auto tracking-tight">
              {t('services.heading')}{' '}
              <span className="italic text-[var(--petra-gold)]">{t('services.headingItalic')}</span>
            </h2>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CARD_KEYS.map((card, index) => (
            <ServiceCard key={card.title} card={card} index={index} t={t} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 md:mt-24 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 p-8 md:p-10 bg-white/5 backdrop-blur-md rounded-sm border border-[var(--petra-gold)]/20 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)]">
            <div className="text-left">
              <p className="text-white text-xl md:text-2xl font-semibold tracking-tight mb-1">{t('services.ctaTitle')}</p>
              <p className="text-white/60 text-sm md:text-base">{t('services.ctaSubtitle')}</p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t('about.whatsappMessage'))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-[var(--petra-gold)] hover:bg-[var(--petra-gold-light)] text-[var(--petra-navy)] font-semibold rounded-sm transition-all duration-300 whitespace-nowrap shadow-[0_0_24px_rgba(201,169,97,0.3)] hover:shadow-[0_0_32px_rgba(201,169,97,0.4)] focus:outline-none focus:ring-2 focus:ring-[var(--petra-gold)] focus:ring-offset-2 focus:ring-offset-[var(--petra-navy)]"
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
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[var(--petra-gold)]/40 transition-all duration-500 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]"
    >
      <Link href={card.servicePage} className="block relative aspect-[4/5] min-h-[320px] md:min-h-[380px]">
        {/* Imagen a toda la card */}
        <div className="absolute inset-0 bg-neutral-900">
          <Image
            src={card.image}
            alt={`${t(card.title)} en Mérida, Yucatán - Constructora Estrategia Conesa S.A.`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
            className={`object-cover ${card.imgPos} opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700`}
          />
        </div>

        {/* Overlay gradiente fijo abajo: todo el contenido aquí */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/95 from-40% via-black/50 to-transparent"
          aria-hidden
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <div className="w-12 h-px bg-[var(--petra-gold)]/80 mb-4" aria-hidden />
          <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight tracking-tight mb-2 group-hover:text-[var(--petra-gold)] transition-colors duration-300">
            {t(card.title)}
          </h3>
          <p className="text-white/80 text-sm leading-relaxed line-clamp-2 mb-4">
            {t(card.desc)}
          </p>
          <div className="flex items-center justify-between gap-4">
            <span className="text-[var(--petra-gold)]/90 text-xs font-medium uppercase tracking-wider">
              {t(card.stats)}
            </span>
            <span className="inline-flex items-center gap-1 text-white font-medium text-sm group-hover:text-[var(--petra-gold)] transition-colors">
              {t('services.seeMore')}
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Home, Building2, Waves, Landmark, Hammer, ArrowRight } from 'lucide-react';

export type ServiceSection = {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  imageRight?: boolean;
};

export type ServiceBenefit = {
  title: string;
  description: string;
};

const BADGE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building2,
  Waves,
  Landmark,
  Hammer,
};

type ServicePageLayoutProps = {
  hero: {
    badge: string;
    badgeIcon: string;
    title: string;
    subtitle: string;
    imageSrc: string;
    imageAlt: string;
  };
  intro?: string;
  sections: ServiceSection[];
  benefits: ServiceBenefit[];
  ctaText: string;
};

export function ServicePageLayout({ hero, intro, sections, benefits, ctaText }: ServicePageLayoutProps) {
  const { badge, badgeIcon, title, subtitle, imageSrc, imageAlt } = hero;
  const BadgeIcon = BADGE_ICONS[badgeIcon] ?? Building2;

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero con imagen de fondo */}
      <section className="relative min-h-[50vh] md:min-h-[55vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--petra-navy)] via-[var(--petra-navy)]/80 to-[var(--petra-navy)]/40" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 pt-24">
          <div className="inline-flex items-center gap-2 rounded-sm bg-[var(--petra-gold)]/20 text-[var(--petra-gold)] text-sm font-semibold px-4 py-2 mb-6 border border-[var(--petra-gold)]/40">
            <BadgeIcon className="w-4 h-4" />
            <span>{badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.1]">
            {title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Intro opcional */}
      {intro && (
        <section className="relative py-12 md:py-16 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {intro}
            </p>
          </div>
        </section>
      )}

      {/* Bloques imagen + texto alternados */}
      {sections.map((section, i) => (
        <section
          key={i}
          className={`relative py-16 md:py-24 ${i % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'}`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                section.imageRight ? 'md:grid-flow-dense' : ''
              }`}
            >
              <div className={section.imageRight ? 'md:col-start-2' : ''}>
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl bg-gray-200">
                  <Image
                    src={section.imageSrc}
                    alt={section.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className={section.imageRight ? 'md:col-start-1 md:row-start-1' : ''}>
                <div className="w-12 h-0.5 bg-[var(--petra-gold)] mb-6" aria-hidden />
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--petra-navy)] tracking-tight mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {section.content}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Grid de beneficios / keywords */}
      <section className="relative py-16 md:py-24 bg-[var(--petra-navy)] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
            Por qué elegirnos
          </h2>
          <p className="text-white/70 text-lg mb-12 max-w-2xl">
            Constructora Estrategia Conesa S.A. en Mérida, Yucatán: experiencia, calidad y compromiso en cada proyecto.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="rounded-sm border border-white/10 bg-white/5 p-6 md:p-8 hover:border-[var(--petra-gold)]/40 transition-colors"
              >
                <h3 className="text-lg font-semibold text-[var(--petra-gold)] mb-2">
                  {b.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/contacto"
            className="group inline-flex items-center gap-3 bg-[var(--petra-gold)] text-[var(--petra-navy)] font-semibold px-8 py-4 rounded-sm hover:bg-[var(--petra-gold-light)] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/src/context/LanguageContext';
import { getHeroPrefix, getHeroRotatingSubtitles } from '@/src/i18n/translations';

const titleClass = 'block text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-7xl';
const subtitleClass = 'block text-lg font-medium tracking-wide text-white/90 sm:text-xl md:text-2xl';

function HeroTypewriter({
  prefix,
  rotatingSubtitles,
  delay = 0,
  typeSpeed = 75,
  eraseSpeed = 45,
  holdAfterPrefix = 600,
  holdAfterType = 2200,
  holdAfterErase = 600,
}: {
  prefix: string;
  rotatingSubtitles: string[];
  delay?: number;
  typeSpeed?: number;
  eraseSpeed?: number;
  holdAfterPrefix?: number;
  holdAfterType?: number;
  holdAfterErase?: number;
}) {
  const [started, setStarted] = useState(false);
  const [phase, setPhase] = useState<'prefix' | 'prefixDone' | 'rotating'>('prefix');
  const [prefixLen, setPrefixLen] = useState(0);
  const [rotIndex, setRotIndex] = useState(0);
  const [rotLen, setRotLen] = useState(0);
  const [rotPhase, setRotPhase] = useState<'typing' | 'hold' | 'erasing' | 'holdErased'>('typing');
  const currentSub = rotatingSubtitles[rotIndex] ?? rotatingSubtitles[0];

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  // Fase 1: escribir el prefijo (PETRA + CONSTRUCCIONES) una sola vez
  useEffect(() => {
    if (!started || phase !== 'prefix') return;
    if (prefixLen >= prefix.length) {
      setPhase('prefixDone');
      return;
    }
    const t = setTimeout(() => setPrefixLen((n) => n + 1), typeSpeed);
    return () => clearTimeout(t);
  }, [started, phase, prefixLen, prefix.length, typeSpeed]);

  // Tras terminar el prefijo, esperar un poco y pasar a rotar subtítulos
  useEffect(() => {
    if (phase !== 'prefixDone') return;
    const t = setTimeout(() => setPhase('rotating'), holdAfterPrefix);
    return () => clearTimeout(t);
  }, [phase, holdAfterPrefix]);

  // Fase 2: loop infinito solo con los dos subtítulos
  useEffect(() => {
    if (phase !== 'rotating' || rotatingSubtitles.length === 0) return;

    if (rotPhase === 'typing') {
      if (rotLen >= currentSub.length) {
        setRotPhase('hold');
        return;
      }
      const t = setTimeout(() => setRotLen((n) => n + 1), typeSpeed);
      return () => clearTimeout(t);
    }

    if (rotPhase === 'hold') {
      const t = setTimeout(() => setRotPhase('erasing'), holdAfterType);
      return () => clearTimeout(t);
    }

    if (rotPhase === 'erasing') {
      if (rotLen <= 0) {
        setRotPhase('holdErased');
        return;
      }
      const t = setTimeout(() => setRotLen((n) => n - 1), eraseSpeed);
      return () => clearTimeout(t);
    }

    if (rotPhase === 'holdErased') {
      const t = setTimeout(() => {
        setRotIndex((i) => (i + 1) % rotatingSubtitles.length);
        setRotPhase('typing');
      }, holdAfterErase);
      return () => clearTimeout(t);
    }
  }, [phase, rotPhase, rotLen, currentSub.length, rotatingSubtitles.length, typeSpeed, eraseSpeed, holdAfterType, holdAfterErase]);

  const prefixVisible = prefix.slice(0, prefixLen);
  const prefixLines = prefixVisible.split('\n');
  const showPrefixCursor = phase === 'prefix' && prefixLen < prefix.length;
  const subVisible = currentSub.slice(0, rotLen);
  const showSubCursor = phase === 'rotating' && rotPhase === 'typing' && rotLen < currentSub.length;

  return (
    <>
      <h1 className="mb-0 text-left font-bold uppercase leading-[1.1] text-white">
        {prefixLines[0] !== undefined && (
          <span className={titleClass}>
            {prefixLines[0]}
            {prefixLines.length === 1 && showPrefixCursor && <span className="animate-pulse">|</span>}
          </span>
        )}
        {prefixLines[1] !== undefined && (
          <span className={titleClass}>
            {prefixLines[1]}
            {prefixLines.length === 2 && showPrefixCursor && <span className="animate-pulse">|</span>}
          </span>
        )}
      </h1>
      {(phase === 'rotating' || rotLen > 0) && (
        <p className="mb-3 mt-1 text-left text-white/90">
          <span className={subtitleClass}>
            {subVisible}
            {showSubCursor && <span className="animate-pulse">|</span>}
          </span>
        </p>
      )}
    </>
  );
}

const STATS = [
  { value: 300, labelKey: 'hero.stats.works' },
  { value: 600000, labelKey: 'hero.stats.sqm', format: (n: number) => n.toLocaleString('es-AR') },
  { value: 10, labelKey: 'hero.stats.years' },
];

function CountUp({ target, format, duration = 2 }: { target: number; format?: (n: number) => string; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const formatter = format ?? ((n: number) => String(Math.round(n)));

  useEffect(() => {
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (progress === 1 ? 0 : Math.pow(2, -10 * progress));
      const current = Math.round(0 + (target - 0) * eased);
      setDisplay(current);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [target, duration]);

  return <>{formatter(display)}</>;
}

const BG_IMAGES_MOBILE: { src: string; objectPosClass?: string }[] = [
  { src: '/Assets/home-mobile.png', objectPosClass: 'object-center' },
  { src: '/Assets/home-m.png', objectPosClass: 'object-center' },
  { src: '/Assets/home-m3.jpg', objectPosClass: 'object-center' },
];

const BG_IMAGES_DESKTOP: { src: string; objectPosClass?: string }[] = [
  { src: '/Assets/home.png', objectPosClass: 'object-[center_40%] md:object-center' },
  { src: '/Assets/home-2.jpeg', objectPosClass: 'object-[center_40%] md:object-[70%_center]' },
  { src: '/Assets/home-3.png', objectPosClass: 'object-[center_40%] md:object-center' },
];

const SLIDE_DURATION_MS = 5000;

export function Hero() {
  const { locale, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden">
      {/* Carrusel mobile/tablet - imágenes verticales */}
      <div className="absolute inset-0 lg:hidden">
        {BG_IMAGES_MOBILE.map((img, i) => (
          <div
            key={img.src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === activeIndex ? 1 : 0, zIndex: i }}
          >
            <Image
              src={img.src}
              alt=""
              fill
              className={`object-cover ${img.objectPosClass ?? 'object-center'}`}
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(135deg, rgba(20,18,16,0.85) 0%, rgba(35,30,28,0.75) 50%, rgba(25,22,20,0.9) 100%)',
          }}
        />
      </div>

      {/* Carrusel desktop - pantallas grandes */}
      <div className="absolute inset-0 hidden lg:block">
        {BG_IMAGES_DESKTOP.map((img, i) => (
          <div
            key={img.src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === activeIndex ? 1 : 0, zIndex: i }}
          >
            <Image
              src={img.src}
              alt=""
              fill
              className={`object-cover ${img.objectPosClass ?? 'object-center'}`}
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(135deg, rgba(20,18,16,0.85) 0%, rgba(35,30,28,0.75) 50%, rgba(25,22,20,0.9) 40%)',
          }}
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-1 flex-col justify-end px-6 pb-22 pt-20 md:px-12 md:pb-56 md:pt-24 lg:px-16 lg:pb-56 lg:pt-24">
        {/* Título principal - efecto máquina de escribir en bucle infinito */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4"
        >
          <HeroTypewriter
            prefix={getHeroPrefix(locale)}
            rotatingSubtitles={getHeroRotatingSubtitles(locale)}
            delay={500}
            typeSpeed={75}
            eraseSpeed={45}
            holdAfterPrefix={600}
            holdAfterType={2200}
            holdAfterErase={600}
          />
        </motion.div>

        {/* Botón Contactanos + Estadísticas al lado - alineados a la misma altura */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-12 md:gap-16 lg:gap-20"
        >
          <Link
            href="/contacto"
            className="inline-flex shrink-0 items-center bg-white px-8 py-3 font-semibold text-[#1a1918] transition-colors hover:bg-[#E5C337] hover:text-[#283777]"
          >
            {t('hero.contactBtn')}
          </Link>
          {/* <div className="flex flex-wrap items-end gap-10 md:gap-14 lg:gap-20">
            {STATS.map((stat, i) => (
              <div key={i} className="flex flex-col items-start">
                <span className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                  +<CountUp target={stat.value} format={stat.format} />
                </span>
                <span className="mt-1 text-xs font-medium uppercase tracking-wider text-white/90">
                  {t(stat.labelKey)}
                </span>
              </div>
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

const HERO_FULL_TEXT = 'PETRA\nCONSTRUCCIONES\nconstruyendo tus sueños';

function TypewriterLoop({
  fullText = HERO_FULL_TEXT,
  delay = 0,
  typeSpeed = 75,
  eraseSpeed = 45,
  holdAfterType = 2200,
  holdAfterErase = 600,
}: {
  fullText?: string;
  delay?: number;
  typeSpeed?: number;
  eraseSpeed?: number;
  holdAfterType?: number;
  holdAfterErase?: number;
}) {
  const [visibleLength, setVisibleLength] = useState(0);
  const [phase, setPhase] = useState<'idle' | 'typing' | 'hold' | 'erasing' | 'holdErased'>('idle');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (phase === 'idle') {
      setPhase('typing');
      return;
    }

    if (phase === 'typing') {
      if (visibleLength >= fullText.length) {
        setPhase('hold');
        return;
      }
      const t = setTimeout(() => setVisibleLength((n) => n + 1), typeSpeed);
      return () => clearTimeout(t);
    }

    if (phase === 'hold') {
      const t = setTimeout(() => {
        setPhase('erasing');
      }, holdAfterType);
      return () => clearTimeout(t);
    }

    if (phase === 'erasing') {
      if (visibleLength <= 0) {
        setPhase('holdErased');
        return;
      }
      const t = setTimeout(() => setVisibleLength((n) => n - 1), eraseSpeed);
      return () => clearTimeout(t);
    }

    if (phase === 'holdErased') {
      const t = setTimeout(() => {
        setPhase('typing');
      }, holdAfterErase);
      return () => clearTimeout(t);
    }
  }, [started, phase, visibleLength, fullText.length, typeSpeed, eraseSpeed, holdAfterType, holdAfterErase]);

  const visible = fullText.slice(0, visibleLength);
  const lines = visible.split('\n');
  const titleClass = 'block text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-7xl';
  const subtitleClass = 'block text-lg font-medium tracking-wide text-white/90 sm:text-xl md:text-2xl';
  const showCursor = visibleLength < fullText.length;

  return (
    <>
      <h1 className="mb-0 text-left font-bold uppercase leading-[1.1] text-white">
        {lines[0] !== undefined && (
          <span className={titleClass}>
            {lines[0]}
            {lines.length === 1 && showCursor && <span className="animate-pulse">|</span>}
          </span>
        )}
        {lines[1] !== undefined && (
          <span className={titleClass}>
            {lines[1]}
            {lines.length === 2 && showCursor && <span className="animate-pulse">|</span>}
          </span>
        )}
      </h1>
      {lines[2] !== undefined && (
        <p className="mb-8 mt-2 text-left text-white/90">
          <span className={subtitleClass}>
            {lines[2]}
            {showCursor && <span className="animate-pulse">|</span>}
          </span>
        </p>
      )}
    </>
  );
}

const STATS = [
  { value: 300, label: 'OBRAS REALIZADAS' },
  { value: 600000, label: 'M² CONSTRUIDOS', format: (n: number) => n.toLocaleString('es-AR') },
  { value: 10, label: 'AÑOS DE EXPERIENCIA' },
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
  { src: '/Assets/home-m1.jpg', objectPosClass: 'object-center' },
  { src: '/Assets/home-m.jpg', objectPosClass: 'object-center' },
  { src: '/Assets/home-m3.jpg', objectPosClass: 'object-center' },
];

const BG_IMAGES_DESKTOP: { src: string; objectPosClass?: string }[] = [
  { src: '/Assets/home.jpg', objectPosClass: 'object-[center_40%] md:object-center' },
  { src: '/Assets/home-2.jpeg', objectPosClass: 'object-[center_40%] md:object-[70%_center]' },
  { src: '/Assets/home-3.png', objectPosClass: 'object-[center_40%] md:object-center' },
];

const SLIDE_DURATION_MS = 5000;

export function Hero() {
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
            background: 'linear-gradient(135deg, rgba(20,18,16,0.85) 0%, rgba(35,30,28,0.75) 50%, rgba(25,22,20,0.9) 100%)',
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
          className="mb-8"
        >
          <TypewriterLoop delay={500} typeSpeed={75} eraseSpeed={45} holdAfterType={2200} holdAfterErase={600} />
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
            Contactanos
          </Link>
          <div className="flex flex-wrap items-end gap-10 md:gap-14 lg:gap-20">
            {STATS.map((stat, i) => (
              <div key={i} className="flex flex-col items-start">
                <span className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                  +<CountUp target={stat.value} format={stat.format} />
                </span>
                <span className="mt-1 text-xs font-medium uppercase tracking-wider text-white/90">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

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

const BG_IMAGE = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80';

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden">
      {/* Imagen de fondo - textura industrial/túnel */}
      <div className="absolute inset-0">
        <Image
          src={BG_IMAGE}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay oscuro para legibilidad */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(20,18,16,0.85) 0%, rgba(35,30,28,0.75) 50%, rgba(25,22,20,0.9) 100%)',
          }}
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-1 flex-col justify-end px-6 pb-22 pt-24 md:px-12 md:pb-56 lg:px-16 lg:pb-56">
        {/* Título principal - 2 líneas como en la imagen */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 text-left font-bold uppercase leading-[1.1] text-white"
        >
          <span className="block text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            PETRA
          </span>
          <span className="block text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            CONSTRUCCIONES
          </span>
        </motion.h1>

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

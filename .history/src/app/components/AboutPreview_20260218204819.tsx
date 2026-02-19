'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Award, Users, Target, Shield } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/src/context/LanguageContext';

const values = [
  { icon: Award, labelKey: 'about.values.excellence' },
  { icon: Users, labelKey: 'about.values.team' },
  { icon: Target, labelKey: 'about.values.precision' },
  { icon: Shield, labelKey: 'about.values.safety' },
];

export function AboutPreview() {
  const { t } = useLanguage();
  const [showLogoOverlay, setShowLogoOverlay] = useState(false);

  useEffect(() => {
    let showT: ReturnType<typeof setTimeout>;
    let hideT: ReturnType<typeof setTimeout>;
    const show = () => {
      setShowLogoOverlay(true);
      hideT = setTimeout(hide, 2800);
    };
    const hide = () => {
      setShowLogoOverlay(false);
      showT = setTimeout(show, 4500);
    };
    showT = setTimeout(show, 1800);
    return () => {
      clearTimeout(showT);
      clearTimeout(hideT);
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden">
              <img
                src="/Assets/about.jpg"
                alt="Trabajo en obra - Petra Construcciones"
                className="w-full h-auto object-cover shadow-2xl"
              />
              {/* Logo que se muestra de a ratos sobre la imagen */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none"
                initial={false}
                animate={{ opacity: showLogoOverlay ? 1 : 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <img
                  src="/Assets/about-texto.png"
                  alt="Petra Construcciones"
                  className=" h-auto object-contain drop-shadow-2xl"
                />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[var(--petra-gold)] rounded-lg -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl text-[var(--petra-navy)] mb-6">
              {t('about.title').split(' ').slice(0, -1).join(' ')} <span className="text-[var(--petra-gold)]">{t('about.heading')}</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {t('about.lead')}
            </p>
            <p className="text-lg text-gray-600 mb-8">
              {t('about.lead2')}
            </p>

            {/* 4 círculos con valores */}
            <div className="flex flex-wrap gap-6 md:gap-8 mb-8">
              {values.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.labelKey}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[var(--petra-gold)] flex items-center justify-center mb-2">
                      <Icon className="text-white" size={26} />
                    </div>
                    <span className="text-sm font-medium text-[var(--petra-navy)] text-center">
                      {t(item.labelKey)}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <Link
              href="/quienes-somos"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5  border-2 border-[#2c3e50] text-[#2c3e50] font-semibold tracking-wide overflow-hidden"
            >
              {/* Relleno que “carga” de izquierda a derecha al hacer hover */}
              <span
                className="absolute left-0 top-0 h-full w-0 bg-[#222222] transition-[width] duration-500 ease-out group-hover:w-full"
                aria-hidden
              />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                {t('about.seeMore')}
              </span>
              <ArrowRight size={18} strokeWidth={2.5} className="relative z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

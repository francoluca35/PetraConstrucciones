'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/src/context/LanguageContext';
import { InstagramPostMockup } from './InstagramPostMockup';

export function ContactPreview() {
  const { t } = useLanguage();
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Líneas abstractas de fondo */}
      <div className="absolute inset-0 opacity-[0.22]" aria-hidden>
        <svg className="w-full h-full text-[var(--petra-navy)]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-lines-diag" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="80" y2="80" stroke="currentColor" strokeWidth="1" />
              <line x1="40" y1="0" x2="120" y2="80" stroke="currentColor" strokeWidth="1" />
            </pattern>
            <pattern id="contact-lines-h" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
              <line x1="0" y1="10" x2="100" y2="10" stroke="currentColor" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-lines-diag)" />
          <rect width="100%" height="100%" fill="url(#contact-lines-h)" opacity="0.7" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--petra-gold)]/5 via-transparent to-transparent pointer-events-none" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl text-[var(--petra-navy)] mb-6">
              {t('contact.heading')} <span className="text-[var(--petra-gold)]">{t('contact.title')}</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('contact.lead')}
            </p>

            <div className="space-y-4 mb-8">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center text-[var(--petra-navy)]"
              >
                <div className="w-12 h-12 bg-[var(--petra-gold-dark)] rounded-full flex items-center justify-center mr-4 text-[var(--petra-navy)]">
                  <Phone size={20} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 uppercase tracking-wide">Teléfono</p>
                  <p className="text-lg font-medium">+34 123 456 789</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center text-[var(--petra-navy)]"
              >
                <div className="w-12 h-12 bg-[var(--petra-gold-dark)] rounded-full flex items-center justify-center mr-4 text-[var(--petra-navy)]">
                  <Mail size={20} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 uppercase tracking-wide">Email</p>
                  <p className="text-lg font-medium">cipronet@hotmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center text-[var(--petra-navy)]"
              >
                <div className="w-12 h-12 bg-[var(--petra-gold-dark)] rounded-full flex items-center justify-center mr-4 text-[var(--petra-navy)]">
                  <MapPin size={20} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 uppercase tracking-wide">Dirección</p>
                  <p className="text-lg font-medium">Calle 32-A por 9 y 11, Col. Maya, Mérida, Yucatán, México</p>
                </div>
              </motion.div>
            </div>

           <Link
              href="/contacto"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[var(--petra-navy)] text-[var(--petra-navy)] font-semibold tracking-wide overflow-hidden bg-transparent"
            >
              {/* Relleno que “carga” de izquierda a derecha al hacer hover */}
              <span
                className="absolute left-0 top-0 h-full w-0 bg-[var(--petra-gold)] transition-[width] duration-500 ease-out group-hover:w-full"
                aria-hidden
              />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--petra-navy)]">
                {t('contact.seeMore')}
              </span>
              <ArrowRight size={18} strokeWidth={2.5} className="relative z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--petra-navy)]" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <InstagramPostMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

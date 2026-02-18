'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ContactPreview() {
  return (
    <section className="relative py-20 bg-[var(--petra-navy)] overflow-hidden">
      {/* Líneas abstractas de fondo */}
      <div className="absolute inset-0 opacity-[0.06]" aria-hidden>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-lines-diag" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="80" y2="80" stroke="white" strokeWidth="0.5" />
              <line x1="40" y1="0" x2="120" y2="80" stroke="white" strokeWidth="0.5" />
            </pattern>
            <pattern id="contact-lines-h" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
              <line x1="0" y1="10" x2="100" y2="10" stroke="white" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-lines-diag)" />
          <rect width="100%" height="100%" fill="url(#contact-lines-h)" opacity="0.5" />
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
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Hablemos de tu <span className="text-[var(--petra-gold)]">Proyecto</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              ¿Tienes un proyecto en mente? Nuestro equipo está listo para ayudarte a hacerlo realidad. 
              Contáctanos y recibe una consultoría gratuita.
            </p>

            <div className="space-y-4 mb-8">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center text-white"
              >
                <div className="w-12 h-12 bg-[var(--petra-gold)] rounded-full flex items-center justify-center mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Teléfono</p>
                  <p className="text-lg">+34 123 456 789</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center text-white"
              >
                <div className="w-12 h-12 bg-[var(--petra-gold)] rounded-full flex items-center justify-center mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg">cipronet@hotmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center text-white"
              >
                <div className="w-12 h-12 bg-[var(--petra-gold)] rounded-full flex items-center justify-center mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Dirección</p>
                  <p className="text-lg">Calle 32-A por 9 y 11, Col. Maya, Mérida, Yucatán, México</p>
                </div>
              </motion.div>
            </div>

            <Link
              href="/contacto"
              className="inline-flex items-center px-6 py-3 bg-[var(--petra-gold)] text-white rounded-lg hover:bg-[var(--petra-gold-light)] transition-colors group"
            >
              Ver Más
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-lg shadow-2xl p-8">
              <h3 className="text-2xl text-[var(--petra-navy)] mb-6">Solicita Información</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--petra-gold)]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--petra-gold)]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--petra-gold)]"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Mensaje"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--petra-gold)] resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[var(--petra-navy)] text-white rounded-lg hover:bg-[var(--petra-navy-dark)] transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

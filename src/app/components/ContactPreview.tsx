import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ContactPreview() {
  return (
    <section className="py-20 bg-[var(--mavic-navy)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Hablemos de tu <span className="text-[var(--mavic-gold)]">Proyecto</span>
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
                <div className="w-12 h-12 bg-[var(--mavic-gold)] rounded-full flex items-center justify-center mr-4">
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
                <div className="w-12 h-12 bg-[var(--mavic-gold)] rounded-full flex items-center justify-center mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg">info@mavicconstrucciones.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center text-white"
              >
                <div className="w-12 h-12 bg-[var(--mavic-gold)] rounded-full flex items-center justify-center mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Dirección</p>
                  <p className="text-lg">Calle Principal 123, Madrid</p>
                </div>
              </motion.div>
            </div>

            <Link
              to="/contacto"
              className="inline-flex items-center px-6 py-3 bg-[var(--mavic-gold)] text-white rounded-lg hover:bg-[var(--mavic-gold-light)] transition-colors group"
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
              <h3 className="text-2xl text-[var(--mavic-navy)] mb-6">Solicita Información</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--mavic-gold)]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--mavic-gold)]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--mavic-gold)]"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Mensaje"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--mavic-gold)] resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[var(--mavic-navy)] text-white rounded-lg hover:bg-[var(--mavic-navy-dark)] transition-colors"
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

'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-[var(--mavic-navy)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  justify-center items-center">
          {/* Logo y descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image src="/logo.png" alt="PetraConstrucciones" width={160} height={64} className="h-16 w-auto mb-4" />
            <p className="text-gray-300 text-sm">
              Construyendo el futuro con excelencia, innovación y compromiso. Tu proyecto, nuestra pasión.
            </p>
          </motion.div>

          {/* Enlaces rápidos */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-[var(--mavic-gold)] mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-[var(--mavic-gold)] transition-colors">Home</Link></li>
              <li><Link href="/quienes-somos" className="text-gray-300 hover:text-[var(--mavic-gold)] transition-colors">Quiénes Somos</Link></li>
              <li><Link href="/galeria" className="text-gray-300 hover:text-[var(--mavic-gold)] transition-colors">Galería</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-[var(--mavic-gold)] transition-colors">Portfolio</Link></li>
              <li><Link href="/contacto" className="text-gray-300 hover:text-[var(--mavic-gold)] transition-colors">Contacto</Link></li>
            </ul>
          </motion.div> */}

          {/* Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-[var(--mavic-gold)] mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Phone size={18} className="mr-2 text-[var(--mavic-gold)]" />
                <span className="text-sm">+34 123 456 789</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail size={18} className="mr-2 text-[var(--mavic-gold)]" />
                <span className="text-sm">info@petraconstrucciones.com</span>
              </li>
              <li className="flex items-start text-gray-300">
                <MapPin size={18} className="mr-2 mt-1 text-[var(--mavic-gold)] flex-shrink-0" />
                <span className="text-sm">Calle Principal 123, 28001 Madrid, España</span>
              </li>
            </ul>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-[var(--mavic-gold)] mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-[var(--mavic-gold)] rounded-full flex items-center justify-center hover:bg-[var(--mavic-gold-light)] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[var(--mavic-gold)] rounded-full flex items-center justify-center hover:bg-[var(--mavic-gold-light)] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[var(--mavic-gold)] rounded-full flex items-center justify-center hover:bg-[var(--mavic-gold-light)] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400">
                Horario: Lun-Vie 9:00 - 18:00
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} PetraConstrucciones. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}

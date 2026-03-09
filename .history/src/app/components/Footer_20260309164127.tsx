'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/src/context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer id="page-footer" className="bg-[var(--petra-navy)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image src="/Assets/logo-pagina.avif" alt="Conesa constructora" width={160} height={64} className="h-16 w-auto mb-4" />
            <p className="text-gray-300 text-sm">
              {t('footer.tagline')}
            </p>
          </motion.div>

          {/* Enlaces rápidos */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-[var(--petra-gold)] mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-[var(--petra-gold)] transition-colors">Home</Link></li>
              <li><Link href="/quienes-somos" className="text-gray-300 hover:text-[var(--petra-gold)] transition-colors">Quiénes Somos</Link></li>
              <li><Link href="/galeria" className="text-gray-300 hover:text-[var(--petra-gold)] transition-colors">Galería</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-[var(--petra-gold)] transition-colors">Portfolio</Link></li>
              <li><Link href="/contacto" className="text-gray-300 hover:text-[var(--petra-gold)] transition-colors">Contacto</Link></li>
            </ul>
          </motion.div> */}

          {/* Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-[var(--petra-gold)] mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Phone size={18} className="mr-2 text-[var(--petra-gold)]" />
                <span className="text-sm">+52 999 994 4498</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail size={18} className="mr-2 text-[var(--petra-gold)]" />
                <a href="mailto:consultas@constructoraconesa.com" className="text-sm hover:text-[var(--petra-gold)] hover:underline transition-colors">consultas@constructoraconesa.com</a>
              </li>
              <li className="flex items-start text-gray-300">
                <MapPin size={18} className="mr-2 mt-1 text-[var(--petra-gold)] flex-shrink-0" />
                <span className="text-sm">Calle 11,Numero 607 Colonia Maya, 97134 Mérida, Yuc., México</span>
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
            <h3 className="text-[var(--petra-gold)] mb-4">{t('footer.follow')}</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61587767558603"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 min-w-[44px] min-h-[44px] bg-[var(--petra-gold)] rounded-full flex items-center justify-center hover:bg-[var(--petra-gold-light)] transition-colors"
                aria-label="Conesa Constructora en Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-11 h-11 min-w-[44px] min-h-[44px] bg-[var(--petra-gold)] rounded-full flex items-center justify-center hover:bg-[var(--petra-gold-light)] transition-colors"
                aria-label="Conesa Constructora en Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-11 h-11 min-w-[44px] min-h-[44px] bg-[var(--petra-gold)] rounded-full flex items-center justify-center hover:bg-[var(--petra-gold-light)] transition-colors"
                aria-label="Conesa Constructora en LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400">
                {t('footer.hours')}
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
<p className="text-sm text-gray-500">
  © {new Date().getFullYear()} <span className="font-semibold text-[#E5C337]">Conesa constructora</span>. {t('footer.rights')}
  <br className="sm:hidden" />
  <span className="opacity-80"> {t('footer.by')}{' '}
    <a href="https://deamondd.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline text-[var(--petra-gold)]">DeamonDD</a>
  </span>
</p>

        </motion.div>
      </div>
    </footer>
  );
}

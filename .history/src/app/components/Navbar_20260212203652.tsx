'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

const logo = '/Assets/logo-pagina.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    // { name: 'Home', path: '/' },
    // { name: 'Quiénes Somos', path: '/quienes-somos' },
    // { name: 'Galería', path: '/galeria' },
    { name: 'Portfolio', path: '/portfolio' },
    // { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[var(--mavic-navy)] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center leading-none"
            >
              <span
                className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-[#283777] tracking-[0.1em]"
                style={{ fontFamily: "'Good Times', sans-serif" }}
              >
                Petra
              </span>
              <span
                className="inline-block text-[15px] md:text-xs uppercase font-bold text-[#E5C337] mt-1.5 tracking-[.4em] origin-center"
                style={{ fontFamily: "'911', sans-serif", transform: 'scaleX(1.1) scaleY(1.6)' }}
              >
                Construcciones
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="relative group"
              >
                <span className="text-white hover:text-[var(--mavic-gold)] transition-colors duration-300">
                  {link.name}
                </span>
                {pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--mavic-gold)]"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--mavic-navy-dark)] overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    pathname === link.path
                      ? 'bg-[var(--mavic-gold)] text-white'
                      : 'text-white hover:bg-[var(--mavic-gold)]/20'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

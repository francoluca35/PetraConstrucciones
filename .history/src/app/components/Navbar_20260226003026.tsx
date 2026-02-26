'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { useLanguage } from '@/src/context/LanguageContext';

const SIGLA = '/Assets/sigladef1.png';
const SIGLA_MOBILE = '/Assets/logo-pagina.png';

// Fases: sigla 5s → transición a texto → texto 10s → transición a sigla → repeat
const SIGLA_DURATION = 5000;
const TEXT_HOLD_DURATION = 10000;
const TRANSITION_DURATION = 1500;

const MOBILE_BREAKPOINT = 768;

export function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const [phase, setPhase] = useState<'sigla' | 'toText' | 'text' | 'toSigla'>('sigla');

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Ciclo infinito: sigla → texto → sigla
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    const runCycle = () => {
      setPhase('sigla');
      timers.push(setTimeout(() => {
        setPhase('toText');
        timers.push(setTimeout(() => {
          setPhase('text');
          timers.push(setTimeout(() => {
            setPhase('toSigla');
            timers.push(setTimeout(runCycle, TRANSITION_DURATION));
          }, TEXT_HOLD_DURATION));
        }, TRANSITION_DURATION));
      }, SIGLA_DURATION));
    };

    runCycle();
    return () => timers.forEach(clearTimeout);
  }, []);

  const navLinks = [
    { nameKey: 'nav.home', path: '/' },
    { nameKey: 'nav.about', path: '/quienes-somos' },
    { nameKey: 'nav.portfolio', path: '/portfolio' },
    { nameKey: 'nav.contact', path: '/contacto' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[var(--petra-navy)] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:px-12 xl:px-8">
        <div className="flex justify-between items-center h-20 min-h-[88px] md:min-h-[96px]">
          {/* Logo */}
          <Link href="/" className="flex items-center min-h-[60px] w-[220px] shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative flex flex-col items-center justify-center leading-none w-full"
            >
              {/* Sigla: visible 5s, se desvanece en toText, reaparece en toSigla */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  opacity: phase === 'sigla' ? 1 : phase === 'toText' ? 0 : phase === 'toSigla' ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <Image
                  src={isMobile ? SIGLA_MOBILE : SIGLA}
                  alt="Conesa constructora"
                  width={200}
                  height={72}
                  className="h-[4.75rem] w-auto object-contain md:h-20"
                />
              </motion.div>

              {/* Texto: aparece desde P y S, desaparece desde A y C */}
              {(phase === 'toText' || phase === 'text' || phase === 'toSigla') && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="relative z-10 flex flex-col items-center leading-none"
                >
                  {/* Conesa: aparece desde C, desaparece desde A - misma velocidad en apertura y cierre */}
                  <span
                    className="flex text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-[#283777] tracking-[0.1em]"
                    style={{ fontFamily: "'Good Times', sans-serif", textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                  >
                    {'Conesa'.split('').map((letter, i) => {
                      const letterDuration = 0.35;
                      const letterStagger = 0.08;
                      return (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{
                            opacity: phase === 'toText' || phase === 'text' ? 1 : 0,
                            x: phase === 'toText' || phase === 'text' ? 0 : -12,
                          }}
                          transition={{
                            duration: letterDuration,
                            delay: phase === 'toText' ? i * letterStagger : phase === 'toSigla' ? (4 - i) * letterStagger : 0,
                            ease: 'easeOut',
                          }}
                        >
                          {letter}
                        </motion.span>
                      );
                    })}
                  </span>
                  {/* Constructora: aparece desde S, desaparece desde C - misma velocidad en apertura y cierre */}
                  <span
                    className="inline-flex text-xs sm:text-sm md:text-base uppercase font-bold text-[#E5C337] mt-1.1 tracking-[.15em] sm:tracking-[.25em] md:tracking-[.4em] origin-center overflow-visible whitespace-nowrap [transform:scaleX(0.92)_scaleY(2.5)] md:[transform:scaleX(1.1)_scaleY(2.5)]"
                    style={{ fontFamily: "'911', sans-serif" }}
                  >
                    {'Constructora'.split('').map((letter, i) => {
                      const total = 14;
                      const letterDuration = 0.35;
                      const letterStagger = 0.05;
                      const appearDelay = 0.5 + (total - i) * letterStagger; // S primero
                      const disappearDelay = i * letterStagger; // C primero
                      return (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, x: 8 }}
                          animate={{
                            opacity: phase === 'toText' || phase === 'text' ? 1 : 0,
                            x: phase === 'toText' || phase === 'text' ? 0 : 8,
                          }}
                          transition={{
                            duration: letterDuration,
                            delay: phase === 'toText' ? appearDelay : phase === 'toSigla' ? disappearDelay : 0,
                            ease: 'easeOut',
                          }}
                        >
                          {letter}
                        </motion.span>
                      );
                    })}
                  </span>
                </motion.div>
              )}
            </motion.div>
          </Link>

          {/* Desktop Navigation + Language switcher */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="relative group"
                >
                  <span className="text-white hover:text-[var(--petra-gold)] transition-colors duration-300">
                    {t(link.nameKey)}
                  </span>
                  {pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--petra-gold)]"
                    />
                  )}
                </Link>
              ))}
            </div>
            {/* Banderas en círculo: México (ES) y USA (EN) */}
            <div className="flex items-center gap-2 pl-2 border-l border-white/30">
              <button
                type="button"
                onClick={() => setLocale('es')}
                className={`rounded-full w-9 h-9 flex items-center justify-center overflow-hidden border-2 transition-all focus:outline-none focus:ring-2 focus:ring-[var(--petra-gold)] focus:ring-offset-2 focus:ring-offset-transparent ${
                  locale === 'es' ? 'border-[var(--petra-gold)] ring-2 ring-[var(--petra-gold)]' : 'border-white/40 hover:border-white/70'
                }`}
                aria-label="Español (México)"
                title="Español"
              >
                <img src="https://flagcdn.com/w40/mx.png" alt="" className="w-full h-full object-cover" />
              </button>
              <button
                type="button"
                onClick={() => setLocale('en')}
                className={`rounded-full w-9 h-9 flex items-center justify-center overflow-hidden border-2 transition-all focus:outline-none focus:ring-2 focus:ring-[var(--petra-gold)] focus:ring-offset-2 focus:ring-offset-transparent ${
                  locale === 'en' ? 'border-[var(--petra-gold)] ring-2 ring-[var(--petra-gold)]' : 'border-white/40 hover:border-white/70'
                }`}
                aria-label="English (USA)"
                title="English"
              >
                <img src="https://flagcdn.com/w40/us.png" alt="" className="w-full h-full object-cover" />
              </button>
            </div>
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

      {/* Mobile Navigation - full screen, desliza hacia abajo */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="nav-fullscreen"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-[var(--petra-navy)] md:hidden"
          >
            {/* Header: logo centrado + X derecha */}
            <div className="relative flex items-center justify-center px-6 pt-12 pb-6">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex flex-col items-center">
                <Image
                  src={SIGLA_MOBILE}
                  alt="Conesa constructora"
                  width={200}
                  height={80}
                  className="h-24 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-6 top-12 flex h-10 w-10 items-center justify-center text-zinc-200 hover:text-[#E5C337] transition-colors "
                aria-label={t('nav.closeMenu')}
              >
                <X size={24} strokeWidth={2} />
              </button>
            </div>

            {/* Links apilados verticalmente, centrados y grandes */}
            <nav className="flex flex-1 flex-col items-center justify-center gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="flex justify-center"
                >
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-4xl font-medium tracking-wide transition-colors ${
                      pathname === link.path ? 'text-[#283777] underline underline-offset-9 decoration-[#E5C337]' : 'text-zinc-200 hover:text-[#E5C337]'
                    }`}
                  >
                    {t(link.nameKey)}
                  </Link>
                </motion.div>
              ))}
            </nav>
            {/* Banderas idioma en móvil */}
            <div className="flex items-center justify-center gap-3 pb-12">
              <button
                type="button"
                onClick={() => { setLocale('es'); setIsOpen(false); }}
                className={`rounded-full w-12 h-12 flex items-center justify-center overflow-hidden border-2 transition-all ${
                  locale === 'es' ? 'border-[var(--petra-gold)] ring-2 ring-[var(--petra-gold)]' : 'border-white/40'
                }`}
                aria-label="Español (México)"
              >
                <img src="https://flagcdn.com/w40/mx.png" alt="" className="w-full h-full object-cover" />
              </button>
              <button
                type="button"
                onClick={() => { setLocale('en'); setIsOpen(false); }}
                className={`rounded-full w-12 h-12 flex items-center justify-center overflow-hidden border-2 transition-all ${
                  locale === 'en' ? 'border-[var(--petra-gold)] ring-2 ring-[var(--petra-gold)]' : 'border-white/40'
                }`}
                aria-label="English (USA)"
              >
                <img src="https://flagcdn.com/w40/us.png" alt="" className="w-full h-full object-cover" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

const MIN_DISPLAY_MS = 1600;
const SPLIT_DURATION_MS = 1200;
const EXIT_DURATION_MS = SPLIT_DURATION_MS + 100;

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

function PreloaderContent({ isExiting }: { isExiting: boolean }) {
  return (
    <div className="flex flex-col items-center gap-10">
      <motion.div
        className="relative"
        initial={{ filter: 'blur(8px)' }}
        animate={{
          filter: 'blur(0px)',
          transition: { duration: 0.8, delay: 0.15 },
        }}
      >
        <Image
          src="/Assets/sigla1.avif"
          alt="Conesa Constructora"
          width={180}
          height={120}
          className="h-auto w-[140px] object-contain sm:w-[180px]"
          priority
          unoptimized={false}
        />
      </motion.div>
      <div className="h-[2px] w-48 overflow-hidden rounded-full bg-white/10 sm:w-56">
        <motion.div
          className="h-full rounded-full bg-[var(--petra-gold)]"
          initial={{ width: '0%' }}
          animate={{
            width: isExiting ? '100%' : '85%',
            transition: {
              width: {
                duration: isExiting ? 0.35 : 1.4,
                ease: isExiting ? [0.4, 0, 0.2, 1] : [0.25, 0.46, 0.45, 0.94],
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export function PagePreloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let done = false;
    const start = Date.now();

    const tryFinish = () => {
      if (done) return;
      const elapsed = Date.now() - start;
      if (elapsed >= MIN_DISPLAY_MS) {
        done = true;
        setIsExiting(true);
      }
    };

    const onLoad = () => {
      tryFinish();
    };

    if (typeof window === 'undefined') return;

    if (document.readyState === 'complete') {
      const t = setTimeout(tryFinish, MIN_DISPLAY_MS);
      return () => clearTimeout(t);
    }

    window.addEventListener('load', onLoad);
    const minTimer = setTimeout(tryFinish, MIN_DISPLAY_MS);

    return () => {
      window.removeEventListener('load', onLoad);
      clearTimeout(minTimer);
    };
  }, []);

  useEffect(() => {
    if (!isExiting) return;
    const t = setTimeout(() => setIsLoading(false), EXIT_DURATION_MS);
    return () => clearTimeout(t);
  }, [isExiting]);

  const splitTransition = {
    duration: SPLIT_DURATION_MS / 1000,
    ease: easeOutExpo,
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex overflow-hidden">
          {/* Left half: muestra la parte izquierda del logo (0–50vw del contenido centrado) */}
          <motion.div
            className="absolute left-0 top-0 h-full w-1/2 overflow-hidden bg-[var(--petra-navy)]"
            initial={{ x: 0 }}
            animate={{ x: isExiting ? '-100%' : 0 }}
            transition={splitTransition}
          >
            <div className="flex h-full w-[100vw] items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                }}
              >
                <PreloaderContent isExiting={isExiting} />
              </motion.div>
            </div>
          </motion.div>

          {/* Right half: muestra la parte derecha del logo (50–100vw del contenido centrado) */}
          <motion.div
            className="absolute left-1/2 top-0 h-full w-1/2 overflow-hidden bg-[var(--petra-navy)]"
            initial={{ x: 0 }}
            animate={{ x: isExiting ? '100%' : 0 }}
            transition={splitTransition}
          >
            <div
              className="flex h-full w-[100vw] items-center justify-center"
              style={{ marginLeft: '-50vw' }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                }}
              >
                <PreloaderContent isExiting={isExiting} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const QUOTE = '"La idea no es vivir para siempre, la idea es crear algo que sí lo haga"';
const ATTRIBUTION = 'ANDY WARHOL';
const HEADING = 'CONSTRUIMOS PROYECTOS TRASCENDENTALES';
const DESCRIPTION =
  'En Petra Construcciones tenemos el compromiso de cubrir todas las facetas de la construcción, desde la concepción y el diseño arquitectónico, el análisis y la viabilidad del proyecto, pasando por la ejecución de los trabajos, la coordinación de subcontratistas, la administración de la obra hasta la entrega final con excelencia.';

const IMAGE_MAIN = '/Assets/Proyecto-1/frente-1.jpeg';
const IMAGE_SIDEBAR = '/Assets/Proyecto-5/1.jpg';

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#f7f6f3] lg:flex-row">
      {/* Contenido izquierdo - principal */}
      <div className="flex flex-1 flex-col px-6 py-12 lg:px-12 lg:py-16 xl:px-16">
        <div className="flex max-w-2xl flex-col gap-8 lg:gap-10">
          {/* Cita */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-extralight italic font-bold leading-relaxed text-[#9a9996]"
            style={{ fontFamily: 'kale', fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
          >
            {QUOTE}
          </motion.blockquote>
          <motion.cite
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="not-italic text-sm font-medium uppercase tracking-wider text-black"
          >
            {ATTRIBUTION}
          </motion.cite>

          {/* Imagen horizontal - edificio con árboles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[16/10] w-full overflow-hidden"
          >
            <Image
              src={IMAGE_MAIN}
              alt="Proyecto arquitectónico Petra Construcciones"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 65vw"
              priority
            />
          </motion.div>

          {/* Título y descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-xl font-bold uppercase tracking-wide text-black lg:text-2xl">
              {HEADING}
            </h2>
            <p className="max-w-xl leading-relaxed text-[#6b6b6b]">
              {DESCRIPTION}
            </p>
            <Link
              href="/portfolio"
              className="mt-2 inline-flex w-fit items-center gap-2 border-b-2 border-black pb-1 text-sm font-medium uppercase tracking-wider text-black transition-opacity hover:opacity-70"
            >
              Ver proyectos
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Panel derecho - imagen vertical (desktop) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative hidden w-[35%] shrink-0 lg:block xl:w-[40%]"
      >
        <div className="sticky top-0 h-screen w-full">
          <Image
            src={IMAGE_SIDEBAR}
            alt="Arquitectura moderna Petra Construcciones"
            fill
            className="object-cover"
            sizes="40vw"
            priority
          />
        </div>
      </motion.div>

      {/* Imagen lateral en móvil - debajo del contenido en columna */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative aspect-[4/5] w-full shrink-0 lg:hidden"
      >
        <Image
          src={IMAGE_SIDEBAR}
          alt="Arquitectura moderna Petra Construcciones"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
    </section>
  );
}

'use client';

import { motion } from 'motion/react';
import { ArrowRight, Award, Users, Target, Shield } from 'lucide-react';
import Link from 'next/link';

const values = [
  { icon: Award, label: 'Excelencia' },
  { icon: Users, label: 'Equipo' },
  { icon: Target, label: 'Precisión' },
  { icon: Shield, label: 'Seguridad' },
];

export function AboutPreview() {
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
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1718209962486-4f91ce71886b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Equipo Petra Construcciones"
                className="rounded-lg shadow-2xl"
              />
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
              Quiénes <span className="text-[var(--petra-gold)]">Somos</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Con más de 17 años de experiencia, Petra Construcciones se ha consolidado como líder 
              en proyectos residenciales, comerciales e industriales en Mérida y la península.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nuestro equipo trabaja con dedicación y compromiso para transformar tus ideas en 
              realidad, garantizando la máxima calidad en cada detalle.
            </p>

            {/* 4 círculos con valores */}
            <div className="flex flex-wrap gap-6 md:gap-8 mb-8">
              {values.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
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
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <Link
              href="/quienes-somos"
              className="inline-flex items-center gap-2 px-8 py-3.5  border-2 border-[var(--petra-navy)] text-[var(--petra-navy)] bg-transparent font-semibold tracking-wide hover:bg-[var(--petra-navy)] hover:text-white transition-all duration-300 group"
            >
              <span>Ver más</span>
              <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

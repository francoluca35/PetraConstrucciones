'use client';

import { motion } from 'motion/react';
import { Award, Users, Target, Shield } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Comprometidos con los más altos estándares de calidad en cada proyecto',
  },
  {
    icon: Users,
    title: 'Equipo Profesional',
    description: 'Profesionales altamente cualificados con años de experiencia',
  },
  {
    icon: Target,
    title: 'Precisión',
    description: 'Cumplimiento de plazos y presupuestos con total transparencia',
  },
  {
    icon: Shield,
    title: 'Seguridad',
    description: 'Máximas medidas de seguridad en todos nuestros proyectos',
  },
];

const stats = [
  { number: '20+', label: 'Años de Experiencia' },
  { number: '500+', label: 'Proyectos Completados' },
  { number: '98%', label: 'Clientes Satisfechos' },
  { number: '150+', label: 'Profesionales' },
];

export function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1718209962486-4f91ce71886b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0ZWFtJTIwd29ya2Vyc3xlbnwxfHx8fDE3NzA4NTY5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Equipo PetraConstrucciones"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--mavic-navy)]/80"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl mb-4">
            Quiénes <span className="text-[var(--mavic-gold)]">Somos</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Líderes en construcción con pasión por la excelencia
          </p>
        </motion.div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl text-[var(--mavic-navy)] mb-6">Nuestra Historia</h2>
              <p className="text-lg text-gray-600 mb-4">
                Fundada en 2004, PetraConstrucciones nació del sueño de un grupo de arquitectos 
                e ingenieros con una visión común: transformar el sector de la construcción mediante 
                la innovación, la calidad y el compromiso con el cliente.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                A lo largo de más de dos décadas, hemos crecido desde un pequeño equipo local hasta 
                convertirnos en una empresa líder reconocida por nuestra capacidad para ejecutar 
                proyectos complejos con precisión y eficiencia.
              </p>
              <p className="text-lg text-gray-600">
                Hoy, PetraConstrucciones es sinónimo de confianza, calidad y excelencia en cada 
                proyecto que emprendemos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1742415106160-594d07f6cc23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBibHVlcHJpbnQlMjBwbGFuc3xlbnwxfHx8fDE3NzA3NjU0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Historia PetraConstrucciones"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-[var(--mavic-navy)] mb-4">
              Nuestros <span className="text-[var(--mavic-gold)]">Valores</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada una de nuestras acciones
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg p-6 shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-[var(--mavic-gold)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl text-[var(--mavic-navy)] mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-20 bg-[var(--mavic-navy)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl text-[var(--mavic-gold)] mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[var(--mavic-navy)] text-white rounded-lg p-8"
            >
              <h3 className="text-3xl text-[var(--mavic-gold)] mb-4">Nuestra Misión</h3>
              <p className="text-lg">
                Proporcionar servicios de construcción de la más alta calidad, superando las 
                expectativas de nuestros clientes mediante la innovación, el profesionalismo y 
                el compromiso con la excelencia en cada proyecto que emprendemos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[var(--mavic-gold)] text-white rounded-lg p-8"
            >
              <h3 className="text-3xl text-[var(--mavic-navy)] mb-4">Nuestra Visión</h3>
              <p className="text-lg">
                Ser la empresa de construcción líder reconocida por nuestra innovación, 
                sostenibilidad y compromiso con la calidad, transformando espacios y mejorando 
                la vida de las personas a través de proyectos excepcionales.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

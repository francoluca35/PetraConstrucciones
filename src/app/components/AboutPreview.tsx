import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
                src="https://images.unsplash.com/photo-1718209962486-4f91ce71886b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0ZWFtJTIwd29ya2Vyc3xlbnwxfHx8fDE3NzA4NTY5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Equipo PetraConstrucciones"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[var(--mavic-gold)] rounded-lg -z-10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl text-[var(--mavic-navy)] mb-6">
              Quiénes <span className="text-[var(--mavic-gold)]">Somos</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Con más de 20 años de experiencia en el sector de la construcción, PetraConstrucciones 
              se ha consolidado como líder en proyectos residenciales, comerciales e industriales.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nuestro equipo de profesionales altamente cualificados trabaja con dedicación y 
              compromiso para transformar tus ideas en realidad, garantizando la máxima calidad 
              en cada detalle.
            </p>
            <Link
              to="/quienes-somos"
              className="inline-flex items-center px-6 py-3 bg-[var(--mavic-navy)] text-white rounded-lg hover:bg-[var(--mavic-navy-dark)] transition-colors group"
            >
              Ver Más
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

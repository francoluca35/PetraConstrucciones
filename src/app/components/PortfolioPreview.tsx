import { motion } from 'motion/react';
import { ArrowRight, Building2, Home, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';

const portfolioItems = [
  {
    title: 'Torres Residenciales',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1679364297777-1db77b6199be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MDg1Njk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Building2,
    description: 'Complejos residenciales de lujo',
  },
  {
    title: 'Viviendas Unifamiliares',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1684691376857-5dfb87f6bc65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzA4NTY5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Home,
    description: 'Diseños personalizados y modernos',
  },
  {
    title: 'Espacios Comerciales',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1673978484308-6f32e2c4a984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MDg1Njk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Factory,
    description: 'Proyectos comerciales e industriales',
  },
];

export function PortfolioPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-[var(--mavic-navy)] mb-4">
            Nuestro <span className="text-[var(--mavic-gold)]">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proyectos que definen la excelencia en construcción
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {portfolioItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-[var(--mavic-gold)] text-white px-4 py-1 rounded-full text-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Icon className="text-[var(--mavic-gold)] mr-2" size={24} />
                    <h3 className="text-xl text-[var(--mavic-navy)]">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center px-6 py-3 bg-[var(--mavic-navy)] text-white rounded-lg hover:bg-[var(--mavic-navy-dark)] transition-colors group"
          >
            Ver Más
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Building2, Home, Factory, Calendar, MapPin, CheckCircle } from 'lucide-react';

const projects = [
  {
    title: 'Torres Residenciales Vista Mar',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1679364297777-1db77b6199be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MDg1Njk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Building2,
    description: 'Complejo residencial de lujo con 120 apartamentos distribuidos en dos torres de 15 plantas.',
    location: 'Madrid, España',
    year: '2023',
    features: ['120 Apartamentos', 'Piscina Infinity', 'Gimnasio', 'Parking Subterráneo'],
  },
  {
    title: 'Villa Mediterránea',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1684691376857-5dfb87f6bc65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzA4NTY5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Home,
    description: 'Vivienda unifamiliar de diseño contemporáneo con acabados de primera calidad.',
    location: 'Marbella, España',
    year: '2024',
    features: ['500m² Construidos', 'Jardín Privado', 'Piscina', 'Domótica'],
  },
  {
    title: 'Centro Comercial Plaza Nueva',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1673978484308-6f32e2c4a984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MDg1Njk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Factory,
    description: 'Moderno centro comercial con 80 locales y zona de restauración.',
    location: 'Valencia, España',
    year: '2023',
    features: ['15,000m²', '80 Locales', 'Parking 500 plazas', 'Zona Restauración'],
  },
  {
    title: 'Residencial Las Colinas',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1769721209842-e46c60e7fbf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzA3NDIzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Building2,
    description: 'Urbanización residencial con 45 viviendas pareadas en entorno natural.',
    location: 'Sevilla, España',
    year: '2024',
    features: ['45 Viviendas', 'Zonas Verdes', 'Piscina Comunitaria', 'Seguridad 24h'],
  },
  {
    title: 'Casa Modular Sostenible',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1684691376857-5dfb87f6bc65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzA4NTY5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Home,
    description: 'Vivienda ecológica con certificación energética A y paneles solares.',
    location: 'Barcelona, España',
    year: '2024',
    features: ['Energía Solar', 'Certificación A', 'Reciclaje Agua', 'Bajo Consumo'],
  },
  {
    title: 'Nave Industrial LogiPark',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1673978484308-6f32e2c4a984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MDg1Njk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Factory,
    description: 'Complejo logístico de última generación con sistemas automatizados.',
    location: 'Zaragoza, España',
    year: '2023',
    features: ['25,000m²', 'Sistemas Automatizados', 'Cámaras Frigoríficas', 'Muelles de Carga'],
  },
];

export function PortfolioPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1769721209842-e46c60e7fbf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzA3NDIzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Portfolio"
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
            Nuestro <span className="text-[var(--mavic-gold)]">Portfolio</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Proyectos que definen la excelencia en construcción
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? 'md:grid-flow-dense' : ''}`}
                >
                  <div className={`${!isEven ? 'md:col-start-2' : ''}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative overflow-hidden rounded-lg shadow-2xl group"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-[var(--mavic-gold)] text-white px-4 py-2 rounded-full">
                        {project.category}
                      </div>
                    </motion.div>
                  </div>

                  <div className={`${!isEven ? 'md:col-start-1 md:row-start-1' : ''}`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[var(--mavic-gold)] rounded-full flex items-center justify-center mr-4">
                        <Icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-3xl text-[var(--mavic-navy)]">{project.title}</h3>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-6">{project.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-gray-700">
                        <MapPin className="text-[var(--mavic-gold)] mr-2" size={20} />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Calendar className="text-[var(--mavic-gold)] mr-2" size={20} />
                        <span>{project.year}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-lg text-[var(--mavic-navy)] mb-3">Características Principales:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-gray-600">
                            <CheckCircle className="text-[var(--mavic-gold)] mr-2 flex-shrink-0" size={18} />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[var(--mavic-navy)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-6">
              ¿Listo para tu próximo <span className="text-[var(--mavic-gold)]">proyecto</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contáctanos y hagamos realidad tu visión
            </p>
            <a
              href="/contacto"
              className="inline-block px-8 py-4 bg-[var(--mavic-gold)] text-white rounded-lg hover:bg-[var(--mavic-gold-light)] transition-colors"
            >
              Solicitar Presupuesto
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

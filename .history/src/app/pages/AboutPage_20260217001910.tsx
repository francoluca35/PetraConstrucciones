'use client';

import { motion } from 'motion/react';
import {
  Award,
  Users,
  Target,
  Shield,
  Building2,
  GraduationCap,
  Briefcase,
  FileCheck,
  Mail,
  Phone,
  MapPin,
  Wrench,
  Ruler,
  ArrowRight,
} from 'lucide-react';

const values = [
  { icon: Award, title: 'Excelencia', description: 'Comprometidos con los más altos estándares de calidad en cada proyecto' },
  { icon: Users, title: 'Equipo Profesional', description: 'Profesionales con años de experiencia en construcción y mantenimiento' },
  { icon: Target, title: 'Precisión', description: 'Cumplimiento de plazos y presupuestos con total transparencia' },
  { icon: Shield, title: 'Seguridad', description: 'Máximas medidas de seguridad en todos nuestros proyectos' },
];

const company = {
  name: 'ING. CARLOS IVÁN PIMENTEL RODRÍGUEZ',
  legalName: 'Servicios de Construcción en General',
  rfc: 'R.F.C. PIRC 681008 2E4',
  address: 'Calle 32-A por 9 y 11 No. 607-A, Col. Maya, 97134 Mérida, Yucatán',
};

const profile = {
  name: 'Ing. Carlos Iván Pimentel Rodríguez',
  cedula: 'Cédula Profesional 2813323',
  phone: '+52 999 994 4498',
  email: 'cipronet@hotmail.com',
  age: '56 años',
};

const resume = {
  summary: `La Gerencia de Mantenimiento con más de 17 años de experiencia planificando, desarrollando e implementando programas y procesos, gestión, diseño y proyectos. Coordinación, Supervisión de Obras y Mantenimiento de Mobiliario, Inmuebles y Parque Vehicular del Aeropuerto Internacional de la Ciudad de Mérida, Yucatán, México.
  Profesional creativo con amplia experiencia en proyectos desde la concepción del desarrollo garantizando el soporte de Servicios de Operación y Conservación de las Instalaciones del Aeropuerto dentro y fuera de las actuaciones contempladas en el Plan Maestro de Desarrollo y Plan de Negocio.`,
  formation: [
    'Ingeniero Civil egresado del Tecnológico de Mérida, Yucatán, México',
    'Especialización en Carreteras, Universidad Politécnica de Madrid',
    'Certificado en Mantenimiento de Pavimentos de Aeródromos, Aeropuertos Argentinos',
  ],
  experience: {
    title: 'Gerente de Mantenimiento en el Aeropuerto de la Ciudad de Mérida, Yucatán, México (2005 - 2023)',
    items: [
      'Procesos administrativos',
      'Coordinación de mantenimiento de trabajos de maquinarias diversas',
      'Licitaciones',
      'Coordinación de mantenimientos en general de edificios y maquinarias, así como terracerías y pavimentaciones',
    ],
  },
};

const obras = [
  { inicio: '15 ene 1997', fin: '15 nov 2003', obra: 'Mantenimiento, conservación y construcción en general en edificio principal y pistas en el Aeropuerto Internacional de Mérida' },
  { inicio: '01 ene 2002', fin: '30 dic 2002', obra: 'Construcción de Restaurante Talavera' },
  { inicio: '15 sep 2002', fin: '15 sep 2008', obra: 'Restauración y remodelación de restaurantes en Telchac Puerto' },
  { inicio: '27 may 2008', fin: '25 jul 2008', obra: 'Excavación de zanjas para agua potable' },
  { inicio: '01 oct 2010', fin: '30 mar 2013', obra: 'Construcción de edificio de oficinas corporativas en la Col. Maya' },
  { inicio: '14 abr 2013', fin: '20 may 2013', obra: 'Mantenimiento correctivo a diversas puertas y ventanas' },
  { inicio: '22 may 2013', fin: '03 sep 2013', obra: 'Excavación de zanjas 0.30 x 0.40 m para líneas de transmisión en diversos puntos de Yucatán y Campeche' },
  { inicio: '21 oct 2013', fin: '12 dic 2013', obra: 'Suministro y colocación de muros de tablaroca y puertas de aluminio' },
  { inicio: '28 oct 2013', fin: '12 ene 2014', obra: 'Trabajos de reparación de instalaciones eléctricas (incluye suministro y colocación de equipos)' },
  { inicio: '10 feb 2014', fin: '20 feb 2014', obra: 'Excavación de descargas domiciliarias y zanjas de agua potable en el fraccionamiento Altabrisa, Mérida' },
  { inicio: '03 feb 2014', fin: '20 feb 2014', obra: 'Excavación de zanjas para riego en la localidad de Baca' },
  { inicio: '01 mar 2014', fin: '30 dic 2015', obra: 'Excavación de zanjas 0.30 x 0.50 m y 0.30 x 0.80 m para electrificación en el fraccionamiento Pedregales' },
  { inicio: '01 mar 2014', fin: '30 dic 2015', obra: 'Construcción de casas habitación en Mérida y alrededores' },
  { inicio: '15 ene 2016', fin: '30 nov 2017', obra: 'Construcción de casa habitación en Árborea' },
  { inicio: '15 ene 2018', fin: '30 nov 2018', obra: 'Departamento en zona residencial de Conkal' },
  { inicio: '15 ene 2019', fin: '15 abr 2020', obra: 'Construcción de casa en la playa de Chicxulub' },
  { inicio: '15 ene 2021', fin: 'A la fecha', obra: 'Construcción y remodelación de casas en la playa y en Mérida' },
];

const mision = `Realizar o supervisar toda clase de construcciones, edificaciones y urbanizaciones, así como fraccionar, edificar y dotar de servicios, ya sea por cuenta propia o a través de terceros. Proporcionar servicios de construcción de la más alta calidad, con profesionalismo y compromiso con la excelencia en cada proyecto.`;

const vision = `Ser la empresa de construcción de referencia en Yucatán, reconocida por nuestra experiencia en mantenimiento de infraestructura, gestión de proyectos y capacidad para ejecutar obras residenciales, comerciales e industriales con los más altos estándares de calidad y seguridad.`;

const servicios = [
  'Construcción y supervisión de obras en general, edificaciones y urbanizaciones',
  'Elaboración de planos, proyectos, maquetas, cálculos arquitectónicos y avalúo de bienes inmuebles',
  'Adquisición y enajenación de terrenos, fincas, construcciones e inmuebles',
  'Compra y venta de materiales de construcción',
  'Mantenimiento de edificios, maquinarias, terracerías y pavimentaciones',
  'Coordinación de licitaciones y procesos administrativos',
];

const sectionTitleClass = 'text-2xl font-semibold text-[var(--petra-navy)] mb-6 flex items-center gap-2';
const sectionContainerClass = 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8';

export function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[260px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/Assets/1.jpg" alt="Petra Construcciones" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[var(--petra-navy)]/80" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white px-4 pt-16"
        >
          <h1 className="text-4xl md:text-5xl font-semibold mb-3">
            Quiénes <span className="text-[var(--petra-gold)]">Somos</span>
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto opacity-95">
            Servicios de construcción en general con más de 17 años de experiencia en Mérida, Yucatán
          </p>
        </motion.div>
      </section>

      {/* 1. La constructora Petra */}
      <section className="py-14 bg-white">
        <div className={sectionContainerClass}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 text-[var(--petra-gold)] mb-4">
              <Building2 size={22} />
              <span className="text-sm font-semibold uppercase tracking-wider">La constructora</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--petra-navy)] mb-4">
              Petra Construcciones
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Con más de 10 años en el rubro, <strong className="text-[var(--petra-navy)]">Petra</strong> se especializa en construcciones desde cero, reformas integrales, construcción y reparación de piscinas, y obras por metro cuadrado. Calidad, compromiso y experiencia en cada proyecto.
            </p>
            <a
              href="#servicios"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5  border-2 border-[#080808] text-[#1c1d1e] font-semibold tracking-wide overflow-hidden"
            >
              <span
                className="absolute left-0 top-0 h-full w-0 bg-[#2a2a2a] transition-[width] duration-500 ease-out group-hover:w-full"
                aria-hidden
              />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Conoce nuestros servicios
              </span>
              <ArrowRight size={18} strokeWidth={2.5} className="relative z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Resumen profesional — tarjeta única */}
      <section className="py-14 bg-gray-50">
        <div className={sectionContainerClass}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={sectionTitleClass}
          >
            <Briefcase className="text-[var(--petra-gold)]" size={28} />
            Resumen profesional
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
          >
            {/* Bloque superior: foto + nombre + texto */}
            <div className="flex flex-col md:flex-row">
              {/* Foto a la izquierda */}
              <div className="md:w-[280px] flex-shrink-0 group">
                <div className="aspect-[3/4] md:aspect-auto md:h-full min-h-[280px] md:min-h-[320px] relative overflow-hidden">
                  <img
                    src="/Assets/ing.png"
                    alt="Ing. Carlos Iván Pimentel Rodríguez"
                    className="absolute inset-0 w-full h-full object-cover object-top grayscale group-hover:grayscale-0 active:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" />
                </div>
              </div>
              {/* Contenido a la derecha */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-semibold text-[var(--petra-navy)] mb-1">
                  {profile.name}
                </h3>
                <p className="text-sm text-[var(--petra-gold)] font-medium mb-6">
                  Ingeniero Civil · Más de 17 años de experiencia
                </p>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  {resume.summary.split(/\s{2,}/).map((paragraph, i) => (
                    <p key={i}>{paragraph.trim()}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Barra inferior: contacto + firma */}
            <div className="border-t border-gray-100 bg-gray-50/80 px-6 py-5 md:px-10 md:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-[var(--petra-navy)] hover:text-[var(--petra-gold)]">
                  <Phone size={18} className="text-[var(--petra-gold)]" />
                  {profile.phone}
                </a>
                <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-[var(--petra-navy)] hover:text-[var(--petra-gold)]">
                  <Mail size={18} className="text-[var(--petra-gold)]" />
                  {profile.email}
                </a>
                <span className="text-gray-500">{profile.cedula}</span>
                <span className="text-gray-500">Edad: {profile.age}</span>
              </div>
              <div className="hidden md:flex flex-shrink-0 items-center justify-end">
                <img src="/Assets/firma.png" alt="Firma" className="max-h-16 md:max-h-20 w-auto object-contain" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Trayectoria: Formación + Experiencia */}
      <section className="py-14 bg-white">
        <div className={sectionContainerClass}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-[var(--petra-navy)] mb-8 flex items-center gap-2"
          >
            <GraduationCap className="text-[var(--petra-gold)]" size={24} />
            Trayectoria
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-10 md:gap-14">
            <div>
              <h3 className="text-lg font-semibold text-[var(--petra-navy)] mb-4">Formación académica</h3>
              <ul className="space-y-3">
                {resume.formation.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--petra-gold)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--petra-navy)] mb-3">Experiencia profesional</h3>
              <p className="text-[var(--petra-navy)] font-medium mb-4">{resume.experience.title}</p>
              <ul className="space-y-2">
                {resume.experience.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--petra-gold)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Obras ejecutadas */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={sectionTitleClass}
          >
            <FileCheck className="text-[var(--petra-gold)]" size={28} />
            Obras ejecutadas
          </motion.h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="bg-[var(--petra-navy)] text-white">
                  <th className="px-4 py-3 font-semibold">Fecha inicio</th>
                  <th className="px-4 py-3 font-semibold">Fecha fin</th>
                  <th className="px-4 py-3 font-semibold">Obra</th>
                </tr>
              </thead>
              <tbody>
                {obras.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{row.inicio}</td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{row.fin}</td>
                    <td className="px-4 py-3 text-gray-800">{row.obra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Misión y Visión */}
      <section className="py-14 bg-white">
        <div className={sectionContainerClass}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={sectionTitleClass}
          >
            <Target className="text-[var(--petra-gold)]" size={28} />
            Misión y visión
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[var(--petra-navy)] text-white rounded-xl p-8">
              <h3 className="text-lg font-semibold text-[var(--petra-gold)] mb-3">Misión</h3>
              <p className="text-gray-200 leading-relaxed text-sm md:text-base">{mision}</p>
            </div>
            <div className="bg-gray-50 border border-[var(--petra-gold)]/20 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-[var(--petra-gold)] mb-3">Visión</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">{vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Servicios */}
      <section id="servicios" className="py-14 bg-gray-50 scroll-mt-24">
        <div className={sectionContainerClass}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={sectionTitleClass}
          >
            <Wrench className="text-[var(--petra-gold)]" size={28} />
            Servicios que brindamos
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {servicios.map((s, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                <Ruler className="text-[var(--petra-gold)] flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700 text-sm md:text-base">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Valores */}
      <section className="py-14 bg-white">
        <div className={sectionContainerClass}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-[var(--petra-navy)] mb-8 text-center"
          >
            Nuestros <span className="text-[var(--petra-gold)]">valores</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-center"
                >
                  <div className="w-12 h-12 bg-[var(--petra-gold)] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold text-[var(--petra-navy)] mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

  
    </div>
  );
}

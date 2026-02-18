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
} from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Comprometidos con los más altos estándares de calidad en cada proyecto',
  },
  {
    icon: Users,
    title: 'Equipo Profesional',
    description: 'Profesionales con años de experiencia en construcción y mantenimiento',
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

export function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Assets/1.jpg"
            alt="Equipo Petra Construcciones"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--petra-navy)]/80" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white px-4 pt-16"
        >
          <h1 className="text-4xl md:text-5xl mb-4">
            Quiénes <span className="text-[var(--petra-gold)]">Somos</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Servicios de construcción en general con más de 17 años de experiencia en Mérida, Yucatán
          </p>
        </motion.div>
      </section>

      {/* Datos de la empresa */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-2 text-[var(--petra-gold)] mb-2">
              <Building2 size={20} />
              <span className="text-sm font-semibold uppercase tracking-wider">Empresa</span>
            </div>
            <h2 className="text-2xl md:text-3xl text-[var(--petra-navy)] font-semibold mb-1">
              {company.name}
            </h2>
            <p className="text-lg text-gray-600 mb-2">{company.legalName}</p>
            <p className="text-sm text-gray-500 mb-2">{company.rfc}</p>
            <p className="flex items-center gap-2 text-gray-600 text-sm">
              <MapPin size={16} className="flex-shrink-0" />
              {company.address}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resumen profesional y perfil */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl text-[var(--petra-navy)] mb-4 flex items-center gap-2">
              <Briefcase className="text-[var(--petra-gold)]" size={28} />
              Resumen profesional
            </h2>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed mb-8">
              {resume.summary}
            </p>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-[var(--petra-navy)] mb-4">{profile.name}</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-[var(--petra-gold)]" />
                  <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="hover:text-[var(--petra-gold)]">
                    {profile.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-[var(--petra-gold)]" />
                  <a href={`mailto:${profile.email}`} className="hover:text-[var(--petra-gold)]">
                    {profile.email}
                  </a>
                </li>
                <li>{profile.cedula}</li>
                <li>Edad: {profile.age}</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Formación */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl text-[var(--petra-navy)] mb-6 flex items-center gap-2"
          >
            <GraduationCap className="text-[var(--petra-gold)]" size={28} />
            Formación académica
          </motion.h2>
          <ul className="space-y-3">
            {resume.formation.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 text-gray-700"
              >
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--petra-gold)] flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Experiencia profesional */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl text-[var(--petra-navy)] mb-4 flex items-center gap-2"
          >
            <Briefcase className="text-[var(--petra-gold)]" size={28} />
            Experiencia profesional y técnica
          </motion.h2>
          <p className="text-lg font-medium text-[var(--petra-navy)] mb-4">{resume.experience.title}</p>
          <ul className="space-y-2">
            {resume.experience.items.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 text-gray-700"
              >
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--petra-gold)] flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Obras ejecutadas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl text-[var(--petra-navy)] mb-8 flex items-center gap-2"
          >
            <FileCheck className="text-[var(--petra-gold)]" size={28} />
            Obras ejecutadas
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="overflow-x-auto rounded-lg border border-gray-200"
          >
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
                  <tr
                    key={i}
                    className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{row.inicio}</td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{row.fin}</td>
                    <td className="px-4 py-3 text-gray-800">{row.obra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[var(--petra-navy)] text-white rounded-xl p-8"
            >
              <h3 className="text-xl text-[var(--petra-gold)] mb-4">Misión</h3>
              <p className="text-gray-200 leading-relaxed">{mision}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-[var(--petra-gold)]/30 text-[var(--petra-navy)] rounded-xl p-8"
            >
              <h3 className="text-xl text-[var(--petra-gold)] mb-4">Visión</h3>
              <p className="text-gray-700 leading-relaxed">{vision}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Servicios que brindamos */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl text-[var(--petra-navy)] mb-6 flex items-center gap-2"
          >
            <Wrench className="text-[var(--petra-gold)]" size={28} />
            Servicios que brindamos
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {servicios.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100"
              >
                <Ruler className="text-[var(--petra-gold)] flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">{s}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl text-[var(--petra-navy)] mb-8 text-center"
          >
            Nuestros <span className="text-[var(--petra-gold)]">valores</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center"
                >
                  <div className="w-12 h-12 bg-[var(--petra-gold)] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold text-[var(--petra-navy)] mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contacto destacado */}
      <section className="py-12 bg-[var(--petra-navy)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold mb-2">{profile.name}</h3>
          <p className="text-gray-300 text-sm mb-4">{profile.cedula}</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 text-[var(--petra-gold)] hover:underline"
            >
              <Phone size={18} />
              {profile.phone}
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-[var(--petra-gold)] hover:underline"
            >
              <Mail size={18} />
              {profile.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

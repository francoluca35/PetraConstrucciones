'use client';

import { motion } from 'motion/react';
import { useLanguage } from '@/src/context/LanguageContext';
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

const valueKeys = [
  { icon: Award, titleKey: 'aboutPage.value1Title', descKey: 'aboutPage.value1Desc' },
  { icon: Users, titleKey: 'aboutPage.value2Title', descKey: 'aboutPage.value2Desc' },
  { icon: Target, titleKey: 'aboutPage.value3Title', descKey: 'aboutPage.value3Desc' },
  { icon: Shield, titleKey: 'aboutPage.value4Title', descKey: 'aboutPage.value4Desc' },
];

const company = {
  name: 'ING. CARLOS IVÁN PIMENTEL RODRÍGUEZ',
  legalName: 'Servicios de Construcción en General',
  rfc: 'R.F.C. PIRC 681008 2E4',
  address: 'Calle 32-A por 9 y 11 No. 607-A, Col. Maya, 97134 Mérida, Yucatán',
};

const profile = {
  name: 'Ing. Carlos Iván Pimentel Rodríguez',
  cedulaNumber: '2813323',
  phone: '+52 999 994 4498',
  email: 'cipronet@hotmail.com',
};

const formationKeys = ['aboutPage.formation1', 'aboutPage.formation2', 'aboutPage.formation3'] as const;
const expKeys = ['aboutPage.exp1', 'aboutPage.exp2', 'aboutPage.exp3', 'aboutPage.exp4'] as const;

const obrasData = [
  { inicio: '15 ene 1997', fin: '15 nov 2003' },
  { inicio: '01 ene 2002', fin: '30 dic 2002' },
  { inicio: '15 sep 2002', fin: '15 sep 2008' },
  { inicio: '27 may 2008', fin: '25 jul 2008' },
  { inicio: '01 oct 2010', fin: '30 mar 2013' },
  { inicio: '14 abr 2013', fin: '20 may 2013' },
  { inicio: '22 may 2013', fin: '03 sep 2013' },
  { inicio: '21 oct 2013', fin: '12 dic 2013' },
  { inicio: '28 oct 2013', fin: '12 ene 2014' },
  { inicio: '10 feb 2014', fin: '20 feb 2014' },
  { inicio: '03 feb 2014', fin: '20 feb 2014' },
  { inicio: '01 mar 2014', fin: '30 dic 2015' },
  { inicio: '01 mar 2014', fin: '30 dic 2015' },
  { inicio: '15 ene 2016', fin: '30 nov 2017' },
  { inicio: '15 ene 2018', fin: '30 nov 2018' },
  { inicio: '15 ene 2019', fin: '15 abr 2020' },
  { inicio: '15 ene 2021', fin: 'A la fecha' },
];
const obraTextKeys = ['aboutPage.obra1', 'aboutPage.obra2', 'aboutPage.obra3', 'aboutPage.obra4', 'aboutPage.obra5', 'aboutPage.obra6', 'aboutPage.obra7', 'aboutPage.obra8', 'aboutPage.obra9', 'aboutPage.obra10', 'aboutPage.obra11', 'aboutPage.obra12', 'aboutPage.obra13', 'aboutPage.obra14', 'aboutPage.obra15', 'aboutPage.obra16', 'aboutPage.obra17', 'aboutPage.obra17'];

const servicioKeys = ['aboutPage.servicio1', 'aboutPage.servicio2', 'aboutPage.servicio3', 'aboutPage.servicio4', 'aboutPage.servicio5', 'aboutPage.servicio6'] as const;

const sectionTitleClass = 'text-2xl font-semibold text-[var(--petra-navy)] mb-6 flex items-center gap-2';
const sectionContainerClass = 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8';

export function AboutPage() {
  const { t } = useLanguage();
  return (
    <div>
      <section className="relative h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: 'easeOut' }}
        >
          <img src="/Assets/1.jpg" alt="Petra Construcciones" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[var(--petra-navy)]/75" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 text-center text-white px-4 pt-16"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('aboutPage.hero').split(' ').slice(0, -1).join(' ')} <span className="text-[var(--petra-gold)]">{t('aboutPage.hero').split(' ').slice(-1)[0]}</span>
          </motion.h1>
          <motion.p
            className="text-base md:text-lg max-w-xl mx-auto opacity-95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {t('aboutPage.heroSub')}
          </motion.p>
        </motion.div>
      </section>

      {/* 1. La constructora Petra */}
      <section className="py-14 bg-white">
        <div className={sectionContainerClass}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* <div className="inline-flex items-center gap-2 text-[var(--petra-gold)] mb-4">
              <Building2 size={22} />
              <span className="text-sm font-semibold uppercase tracking-wider">{t('aboutPage.builder')}</span>
            </div> */}
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--petra-navy)] mb-4">
              Petra Construcciones
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {t('aboutPage.companyLead')}
            </p>
            <motion.a
              href="#servicios"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#080808] text-[#1c1d1e] font-semibold tracking-wide overflow-hidden rounded-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span
                className="absolute left-0 top-0 h-full w-0 bg-[#2a2a2a] transition-[width] duration-500 ease-out group-hover:w-full"
                aria-hidden
              />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                {t('aboutPage.ourServices')}
              </span>
              <ArrowRight size={18} strokeWidth={2.5} className="relative z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* 2. Resumen profesional — tarjeta única */}
      <section className="py-14 bg-gray-50">
        <div className={sectionContainerClass}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className={sectionTitleClass}
          >
            <Briefcase className="text-[var(--petra-gold)]" size={28} />
            {t('aboutPage.resume')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-shadow duration-300 hover:shadow-xl"
          >
            {/* Bloque superior: foto + nombre + texto */}
            <div className="flex flex-col md:flex-row">
              {/* Foto a la izquierda */}
              <div className="md:w-[280px] flex-shrink-0 group">
                <motion.div
                  className="aspect-[3/4] md:aspect-auto md:h-full min-h-[280px] md:min-h-[320px] relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/Assets/ing.jpg"
                    alt="Ing. Carlos Iván Pimentel Rodríguez"
                    className="absolute inset-0 w-full h-full object-cover object-top grayscale group-hover:grayscale-0 active:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" />
                </motion.div>
              </div>
              {/* Contenido a la derecha */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-semibold text-[var(--petra-navy)] mb-1">
                  {profile.name}
                </h3>
                <p className="text-sm text-[var(--petra-gold)] font-medium mb-6">
                  {t('aboutPage.civilEngineer')}
                </p>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>{t('aboutPage.resumeP1')}</p>
                  <p>{t('aboutPage.resumeP2')}</p>
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
                <span className="text-gray-500">{t('aboutPage.cedulaLabel')} {profile.cedulaNumber}</span>
                <span className="text-gray-500">{t('aboutPage.ageLabel')} {t('aboutPage.profileAge')}</span>
              </div>
              <div className="hidden md:flex flex-shrink-0 items-center justify-end">
                <img src="/Assets/firma.png" alt={t('aboutPage.signature')} className="max-h-16 md:max-h-20 w-auto object-contain" />
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
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold text-[var(--petra-navy)] mb-8 flex items-center gap-2"
          >
            <GraduationCap className="text-[var(--petra-gold)]" size={24} />
            {t('aboutPage.trajectory')}
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 gap-10 md:gap-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
              hidden: {},
            }}
          >
            <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 16 } }} transition={{ duration: 0.4 }}>
              <h3 className="text-lg font-semibold text-[var(--petra-navy)] mb-4">{t('aboutPage.formation')}</h3>
              <ul className="space-y-3">
                {formationKeys.map((key, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--petra-gold)] flex-shrink-0" />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 16 } }} transition={{ duration: 0.4 }}>
              <h3 className="text-lg font-semibold text-[var(--petra-navy)] mb-3">{t('aboutPage.experience')}</h3>
              <p className="text-[var(--petra-navy)] font-medium mb-4">{t('aboutPage.expTitle')}</p>
              <ul className="space-y-2">
                {expKeys.map((key, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--petra-gold)] flex-shrink-0" />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Obras ejecutadas — línea de tiempo */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className={sectionTitleClass}
          >
            <FileCheck className="text-[var(--petra-gold)]" size={28} />
            {t('aboutPage.works')}
          </motion.h2>

          <div className="relative">
            {/* Línea vertical */}
            <div
              className="absolute left-[11px] sm:left-4 top-0 bottom-0 w-0.5 bg-[var(--petra-gold)]/40"
              aria-hidden
            />

            <ul className="space-y-6">
              {obrasData.map((row, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="relative flex gap-4 sm:gap-6"
                >
                  {/* Punto en la línea */}
                  <div
                    className="relative z-10 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--petra-gold)] ring-4 ring-gray-50 mt-0.5"
                    aria-hidden
                  />

                  {/* Contenido */}
                  <div className="flex-1 min-w-0 pb-1">
                    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--petra-gold)] mb-1">
                        {row.inicio} — {row.fin === 'A la fecha' ? t('aboutPage.toDate') : row.fin}
                      </p>
                      <p className="text-sm text-gray-800 leading-relaxed">
                        {t(obraTextKeys[i])}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Misión y Visión */}
      <section className="py-14 bg-white">
        <div className={sectionContainerClass}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className={sectionTitleClass}
          >
            <Target className="text-[var(--petra-gold)]" size={28} />
            {t('aboutPage.missionVision')}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="bg-[var(--petra-navy)] text-white rounded-xl p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <h3 className="text-lg font-semibold text-[var(--petra-gold)] mb-3">{t('aboutPage.mission')}</h3>
              <p className="text-gray-200 leading-relaxed text-sm md:text-base">{t('aboutPage.misionText')}</p>
            </motion.div>
            <motion.div
              className="bg-gray-50 border border-[var(--petra-gold)]/20 rounded-xl p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <h3 className="text-lg font-semibold text-[var(--petra-gold)] mb-3">{t('aboutPage.vision')}</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">{t('aboutPage.visionText')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Servicios */}
      <section id="servicios" className="py-14 bg-gray-50 scroll-mt-24">
        <div className={sectionContainerClass}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className={sectionTitleClass}
          >
            <Wrench className="text-[var(--petra-gold)]" size={28} />
            {t('aboutPage.services')}
          </motion.h2>
          <motion.div
            className="grid sm:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              visible: { transition: { staggerChildren: 0.06 } },
              hidden: {},
            }}
          >
            {servicioKeys.map((key, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm cursor-default"
                variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 12 } }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4, boxShadow: '0 10px 25px -5px rgb(0 0 0 / 0.1)' }}
              >
                <Ruler className="text-[var(--petra-gold)] flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700 text-sm md:text-base">{t(key)}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Valores */}
      <section className="py-14 bg-white">
        <div className={sectionContainerClass}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold text-[var(--petra-navy)] mb-8 text-center"
          >
            {t('aboutPage.ourValues').split(' ').slice(0, -1).join(' ')} <span className="text-[var(--petra-gold)]">{t('aboutPage.ourValues').split(' ').slice(-1)[0]}</span>
          </motion.h2>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {},
            }}
          >
            {valueKeys.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-center"
                  variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    className="w-12 h-12 bg-[var(--petra-gold)] rounded-full flex items-center justify-center mx-auto mb-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="text-white" size={24} />
                  </motion.div>
                  <h3 className="font-semibold text-[var(--petra-navy)] mb-2">{t(value.titleKey)}</h3>
                  <p className="text-sm text-gray-600">{t(value.descKey)}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

  
    </div>
  );
}

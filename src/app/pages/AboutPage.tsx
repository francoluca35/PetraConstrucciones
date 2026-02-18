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
            {t('aboutPage.hero').split(' ').slice(0, -1).join(' ')} <span className="text-[var(--petra-gold)]">{t('aboutPage.hero').split(' ').slice(-1)[0]}</span>
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto opacity-95">
            {t('aboutPage.heroSub')}
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
              <span className="text-sm font-semibold uppercase tracking-wider">{t('aboutPage.builder')}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--petra-navy)] mb-4">
              Petra Construcciones
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {t('aboutPage.companyLead')}
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
                {t('aboutPage.ourServices')}
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
            {t('aboutPage.resume')}
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
            viewport={{ once: true }}
            className="text-xl font-semibold text-[var(--petra-navy)] mb-8 flex items-center gap-2"
          >
            <GraduationCap className="text-[var(--petra-gold)]" size={24} />
            {t('aboutPage.trajectory')}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-10 md:gap-14">
            <div>
              <h3 className="text-lg font-semibold text-[var(--petra-navy)] mb-4">{t('aboutPage.formation')}</h3>
              <ul className="space-y-3">
                {formationKeys.map((key, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--petra-gold)] flex-shrink-0" />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>
            <div>
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
            {t('aboutPage.works')}
          </motion.h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="bg-[var(--petra-navy)] text-white">
                  <th className="px-4 py-3 font-semibold">{t('aboutPage.worksStart')}</th>
                  <th className="px-4 py-3 font-semibold">{t('aboutPage.worksEnd')}</th>
                  <th className="px-4 py-3 font-semibold">{t('aboutPage.worksName')}</th>
                </tr>
              </thead>
              <tbody>
                {obrasData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{row.inicio}</td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{row.fin === 'A la fecha' ? t('aboutPage.toDate') : row.fin}</td>
                    <td className="px-4 py-3 text-gray-800">{t(obraTextKeys[i])}</td>
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
            {t('aboutPage.missionVision')}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[var(--petra-navy)] text-white rounded-xl p-8">
              <h3 className="text-lg font-semibold text-[var(--petra-gold)] mb-3">{t('aboutPage.mission')}</h3>
              <p className="text-gray-200 leading-relaxed text-sm md:text-base">{t('aboutPage.misionText')}</p>
            </div>
            <div className="bg-gray-50 border border-[var(--petra-gold)]/20 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-[var(--petra-gold)] mb-3">{t('aboutPage.vision')}</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">{t('aboutPage.visionText')}</p>
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
            {t('aboutPage.services')}
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {servicioKeys.map((key, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                <Ruler className="text-[var(--petra-gold)] flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700 text-sm md:text-base">{t(key)}</span>
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
            {t('aboutPage.ourValues').split(' ').slice(0, -1).join(' ')} <span className="text-[var(--petra-gold)]">{t('aboutPage.ourValues').split(' ').slice(-1)[0]}</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueKeys.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-center"
                >
                  <div className="w-12 h-12 bg-[var(--petra-gold)] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold text-[var(--petra-navy)] mb-2">{t(value.titleKey)}</h3>
                  <p className="text-sm text-gray-600">{t(value.descKey)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

  
    </div>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
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
} from 'lucide-react';

const valueKeys = [
  { icon: Award, titleKey: 'aboutPage.value1Title', descKey: 'aboutPage.value1Desc' },
  { icon: Users, titleKey: 'aboutPage.value2Title', descKey: 'aboutPage.value2Desc' },
  { icon: Target, titleKey: 'aboutPage.value3Title', descKey: 'aboutPage.value3Desc' },
  { icon: Shield, titleKey: 'aboutPage.value4Title', descKey: 'aboutPage.value4Desc' },
];

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

const OBRAS_INICIALES = 6;

export function AboutPage() {
  const { t } = useLanguage();
  const [verMasObras, setVerMasObras] = useState(false);
  const obrasMostradas = verMasObras ? obrasData : obrasData.slice(0, OBRAS_INICIALES);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero — impacto fuerte */}
      <section className="relative flex min-h-[55vh] flex-col items-center justify-center overflow-hidden bg-[var(--petra-navy)] px-4 py-28">
        <div className="absolute inset-0">
          <img src="/Assets/quienes-somos.jpg" alt="" className="h-full w-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--petra-navy)]/90 to-[var(--petra-navy)]" />
        </div>
        <motion.div
          className="relative z-10 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {t('aboutPage.hero').split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-[var(--petra-gold)]">{t('aboutPage.hero').split(' ').slice(-1)[0]}</span>
          </h1>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[var(--petra-gold)]" />
          <motion.p
            className="mt-6 text-lg text-white/90 sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {t('aboutPage.heroSub')}
          </motion.p>
        </motion.div>
      </section>

      {/* Franja de impacto — 17+ años */}
      <motion.section
        className="bg-[var(--petra-gold)] py-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 px-4">
          <Building2 className="text-[var(--petra-navy)]" size={28} />
          <p className="text-lg font-bold uppercase tracking-widest text-[var(--petra-navy)] sm:text-xl">
            {t('aboutPage.introBadge')}
          </p>
        </div>
      </motion.section>

      {/* Intro empresa — bloque oscuro que resalta */}
      <section className="bg-[var(--petra-navy)] px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            className="text-3xl font-bold text-white sm:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Constructora Estrategia Conesa S.A.
          </motion.h2>
          <motion.div
            className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-[var(--petra-gold)]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          />
          <motion.p
            className="mt-8 whitespace-pre-line text-left text-gray-300 leading-relaxed sm:text-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('aboutPage.companyLead')}
          </motion.p>
        </div>
      </section>

      {/* Resumen profesional — tarjeta con borde dorado */}
      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="mb-10 flex items-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--petra-gold)] text-white">
              <Briefcase size={24} />
            </span>
            <h2 className="text-2xl font-bold text-[var(--petra-navy)]">{t('aboutPage.resume')}</h2>
          </motion.div>

          <motion.article
            className="overflow-hidden rounded-2xl border-2 border-[var(--petra-gold)]/30 bg-white shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="border-l-4 border-[var(--petra-gold)] bg-gray-50/50 p-6 sm:p-10">
              <h3 className="text-xl font-bold text-[var(--petra-navy)] sm:text-2xl">{profile.name}</h3>
              <p className="mt-2 text-base font-semibold text-[var(--petra-gold)]">{t('aboutPage.civilEngineer')}</p>
              <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
                <p>{t('aboutPage.resumeP1')}</p>
                <p>{t('aboutPage.resumeP2')}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-6 border-t-2 border-gray-100 bg-white px-6 py-5 sm:px-10">
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 font-medium text-[var(--petra-navy)] transition-colors hover:text-[var(--petra-gold)]"
              >
                <Phone size={20} className="text-[var(--petra-gold)]" />
                {profile.phone}
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 font-medium text-[var(--petra-navy)] transition-colors hover:text-[var(--petra-gold)]"
              >
                <Mail size={20} className="text-[var(--petra-gold)]" />
                {profile.email}
              </a>
              <span className="text-gray-500">{t('aboutPage.cedulaLabel')} {profile.cedulaNumber}</span>
              <span className="text-gray-500">{t('aboutPage.ageLabel')} {t('aboutPage.profileAge')}</span>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Trayectoria — dos bloques con color */}
      <section className="bg-gray-100 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="mb-10 flex items-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--petra-navy)] text-[var(--petra-gold)]">
              <GraduationCap size={24} />
            </span>
            <h2 className="text-2xl font-bold text-[var(--petra-navy)]">{t('aboutPage.trajectory')}</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              className="rounded-2xl border-l-4 border-[var(--petra-gold)] bg-white p-6 shadow-lg"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-lg font-bold text-[var(--petra-navy)]">{t('aboutPage.formation')}</h3>
              <ul className="mt-4 space-y-3">
                {formationKeys.map((key, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--petra-gold)]" />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="rounded-2xl border-l-4 border-[var(--petra-navy)] bg-white p-6 shadow-lg"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-lg font-bold text-[var(--petra-navy)]">{t('aboutPage.experience')}</h3>
              <p className="mt-2 font-semibold text-[var(--petra-navy)]">{t('aboutPage.expTitle')}</p>
              <ul className="mt-4 space-y-2">
                {expKeys.map((key, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--petra-gold)]" />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Obras ejecutadas — grid con acento */}
      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="mb-10 flex items-center justify-between gap-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--petra-gold)] text-white">
                <FileCheck size={24} />
              </span>
              <h2 className="text-2xl font-bold text-[var(--petra-navy)]">{t('aboutPage.works')}</h2>
            </div>
            <span className="rounded-full bg-[var(--petra-gold)] px-4 py-1.5 text-sm font-bold text-[var(--petra-navy)]">
              {obrasData.length} proyectos
            </span>
          </motion.div>

          <motion.div
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={{ visible: { transition: { staggerChildren: 0.03 } }, hidden: {} }}
          >
            {obrasMostradas.map((row, i) => (
              <motion.div
                key={i}
                variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 10 } }}
                transition={{ duration: 0.3 }}
                className="rounded-xl border-2 border-gray-200 bg-gray-50/80 px-4 py-4 transition-all hover:border-[var(--petra-gold)]/50 hover:shadow-md"
              >
                <span className="inline-block rounded bg-[var(--petra-gold)]/20 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-[var(--petra-gold)]">
                  {row.inicio} — {row.fin === 'A la fecha' ? t('aboutPage.toDate') : row.fin}
                </span>
                <p className="mt-2 text-sm font-medium text-gray-800 leading-snug">{t(obraTextKeys[i])}</p>
              </motion.div>
            ))}
          </motion.div>

          {obrasData.length > OBRAS_INICIALES && (
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <button
                type="button"
                onClick={() => setVerMasObras(!verMasObras)}
                className="rounded-xl border-2 border-[var(--petra-gold)] bg-white px-8 py-3 font-bold text-[var(--petra-navy)] transition-colors hover:bg-[var(--petra-gold)] hover:text-white"
              >
                {verMasObras ? t('aboutPage.seeLess') : t('aboutPage.seeMore')}
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Misión — full width con imagen de fondo */}
      <section className="relative min-h-[420px] overflow-hidden px-4 py-16 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src="/Assets/fondo-pabout.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[var(--petra-navy)]/80" aria-hidden />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.h2
            className="text-2xl font-bold text-[var(--petra-gold)] sm:text-3xl"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {t('aboutPage.missionVision')}
          </motion.h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <motion.div
              className="rounded-2xl border-2 border-[var(--petra-gold)]/40 bg-[var(--petra-navy)] p-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl font-bold text-[var(--petra-gold)]">{t('aboutPage.mission')}</h3>
              <p className="mt-4 leading-relaxed text-gray-200">{t('aboutPage.misionText')}</p>
            </motion.div>
            <motion.div
              className="rounded-2xl border-2 border-[var(--petra-gold)]/40 bg-white/5 p-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-[var(--petra-gold)]">{t('aboutPage.vision')}</h3>
              <p className="mt-4 leading-relaxed text-gray-200">{t('aboutPage.visionText')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores — franja con iconos grandes */}
      {/* <section className="bg-[var(--petra-gold)]/10 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            className="text-center text-2xl font-bold text-[var(--petra-navy)] sm:text-3xl"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {t('aboutPage.ourValues').split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-[var(--petra-gold)]">{t('aboutPage.ourValues').split(' ').slice(-1)[0]}</span>
          </motion.h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valueKeys.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="rounded-2xl border-2 border-[var(--petra-gold)]/30 bg-white p-6 text-center shadow-lg transition-all hover:border-[var(--petra-gold)] hover:shadow-xl"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--petra-gold)] text-white">
                    <Icon size={32} />
                  </div>
                  <h3 className="font-bold text-[var(--petra-navy)]">{t(value.titleKey)}</h3>
                  <p className="mt-2 text-sm text-gray-600">{t(value.descKey)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section> */}
    </div>
  );
}

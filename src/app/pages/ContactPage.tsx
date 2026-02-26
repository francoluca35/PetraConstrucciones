'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';

export function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-[#fafafa]">
      {/* Hero premium */}
      <section className="relative h-[45vh] min-h-[300px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Assets/contacto.avif"
            alt="Contacto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[var(--petra-navy)]" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--petra-navy)] to-transparent" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"
        >
          <div className="h-px w-20 bg-[var(--petra-gold)] mb-4" aria-hidden />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight">
            <span className="text-[var(--petra-gold)]">{t('contactPage.hero')}</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl mt-3 max-w-2xl">
            {t('contactPage.heroSub')}
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 lg:gap-20">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl text-[var(--petra-navy)] mb-3 tracking-tight">
                {t('contactPage.infoTitlePrefix')}<span className="text-[var(--petra-gold)]">{t('contactPage.infoTitleGold')}</span>
              </h2>
              <div className="w-16 h-0.5 bg-[var(--petra-gold)] mb-8" aria-hidden />
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                {t('contactPage.infoLead')}
              </p>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:border-[var(--petra-gold)]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 border-2 border-[var(--petra-gold)] bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-[var(--petra-gold)]">
                    <Phone size={22} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--petra-navy)] mb-1 uppercase tracking-wide">{t('contactPage.phone')}</h3>
                    <p className="text-gray-600">+52 999 994 4498</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:border-[var(--petra-gold)]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 border-2 border-[var(--petra-gold)] bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-[var(--petra-gold)]">
                    <Mail size={22} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--petra-navy)] mb-1 uppercase tracking-wide">{t('contactPage.email')}</h3>
                    <p className="text-gray-600">cipronet@hotmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:border-[var(--petra-gold)]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 border-2 border-[var(--petra-gold)] bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-[var(--petra-gold)]">
                    <MapPin size={22} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--petra-navy)] mb-1 uppercase tracking-wide">{t('contactPage.address')}</h3>
                    <p className="text-gray-600">Calle 32-A por 9 y 11 No. 607-A</p>
                    <p className="text-gray-600">Col. Maya, 97134 Mérida, Yucatán, México</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:border-[var(--petra-gold)]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 border-2 border-[var(--petra-gold)] bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-[var(--petra-gold)]">
                    <Clock size={22} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--petra-navy)] mb-1 uppercase tracking-wide">{t('contactPage.schedule')}</h3>
                    <p className="text-gray-600">{t('contactPage.scheduleWeek')}</p>
                    <p className="text-gray-600">{t('contactPage.scheduleSat')}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-10 bg-[var(--petra-gold)] rounded-full" />
                  <h3 className="text-2xl md:text-3xl font-semibold text-[var(--petra-navy)] tracking-tight">{t('contactPage.formTitle')}</h3>
                </div>
                
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-xl mb-6 text-sm font-medium"
                  >
                    {t('contactPage.success')}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-slate-600 text-sm font-medium mb-1.5">{t('contactPage.name')}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--petra-gold)]/60 focus:border-[var(--petra-gold)] transition-all"
                      placeholder={t('contactPage.namePlaceholder')}
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 text-sm font-medium mb-1.5">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--petra-gold)]/60 focus:border-[var(--petra-gold)] transition-all"
                      placeholder={t('contactPage.emailPlaceholder')}
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 text-sm font-medium mb-1.5">{t('contactPage.phone')} *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--petra-gold)]/60 focus:border-[var(--petra-gold)] transition-all"
                      placeholder={t('contactPage.phonePlaceholder')}
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 text-sm font-medium mb-1.5">{t('contactPage.subject')}</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[var(--petra-gold)]/60 focus:border-[var(--petra-gold)] transition-all"
                    >
                      <option value="">{t('contactPage.subjectPlaceholder')}</option>
                      <option value="presupuesto">{t('contactPage.subjectBudget')}</option>
                      <option value="consulta">{t('contactPage.subjectGeneral')}</option>
                      <option value="proyecto">{t('contactPage.subjectProject')}</option>
                      <option value="otro">{t('contactPage.subjectOther')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-600 text-sm font-medium mb-1.5">{t('contactPage.message')}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--petra-gold)]/60 focus:border-[var(--petra-gold)] resize-none transition-all"
                      placeholder={t('contactPage.messagePlaceholder')}
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full px-6 py-4 bg-[var(--petra-navy)] text-white rounded-xl font-semibold hover:bg-[var(--petra-navy)]/90 shadow-[0_8px_24px_rgba(15,15,15,0.25)] hover:shadow-[0_0_24px_rgba(201,169,97,0.2)] border-2 border-transparent hover:border-[var(--petra-gold)]/30 transition-all flex items-center justify-center group"
                  >
                    <span>{t('contactPage.send')}</span>
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="w-16 h-0.5 bg-[var(--petra-gold)] mx-auto mb-4" aria-hidden />
            <h2 className="text-4xl md:text-5xl text-[var(--petra-navy)] tracking-tight">
              {t('contactPage.mapTitle').split(' ').slice(0, -1).join(' ')} <span className="text-[var(--petra-gold)]">Mérida</span>
            </h2>
          </motion.div>
          <div className="w-full h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119303.4715!2d-89.616!3d20.9674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56715f83c7584d%3A0x5e8a8b7c9d0e1f2a!2sM%C3%A9rida%2C%20Yucat%C3%A1n%2C%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Conesa constructora - Mérida, Yucatán, México"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

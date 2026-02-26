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
    <div>
      {/* Hero Section - se extiende hasta arriba para navbar transparente */}
      <section className="relative h-[50vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
           src="/Assets/contacto.jpg"
            alt="Contacto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--petra-navy)]/80"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white px-4 pt-16"
        >
          <h1 className="text-5xl md:text-6xl mb-4">
            <span className="text-[var(--petra-gold)]">{t('contactPage.hero')}</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('contactPage.heroSub')}
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl text-[var(--petra-navy)] mb-6">
                {t('contactPage.infoTitlePrefix')}<span className="text-[var(--petra-gold)]">{t('contactPage.infoTitleGold')}</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('contactPage.infoLead')}
              </p>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start bg-gray-50 p-6 rounded-lg"
                >
                  <div className="w-12 h-12 bg-[var(--petra-gold)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[var(--petra-navy)] mb-1">{t('contactPage.phone')}</h3>
                    <p className="text-gray-600">+34 123 456 789</p>
                    <p className="text-gray-600">+34 987 654 321</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start bg-gray-50 p-6 rounded-lg"
                >
                  <div className="w-12 h-12 bg-[var(--petra-gold)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[var(--petra-navy)] mb-1">{t('contactPage.email')}</h3>
                    <p className="text-gray-600">cipronet@hotmail.com</p>
                    <p className="text-gray-600">proyectos@conesaconstructora.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start bg-gray-50 p-6 rounded-lg"
                >
                  <div className="w-12 h-12 bg-[var(--petra-gold)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[var(--petra-navy)] mb-1">{t('contactPage.address')}</h3>
                    <p className="text-gray-600">Calle 32-A por 9 y 11 No. 607-A</p>
                    <p className="text-gray-600">Col. Maya, 97134 Mérida, Yucatán, México</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start bg-gray-50 p-6 rounded-lg"
                >
                  <div className="w-12 h-12 bg-[var(--petra-gold)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[var(--petra-navy)] mb-1">{t('contactPage.schedule')}</h3>
                    <p className="text-gray-600">{t('contactPage.scheduleWeek')}</p>
                    <p className="text-gray-600">{t('contactPage.scheduleSat')}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-100/95 border border-slate-200/60 rounded-2xl shadow-xl p-8 md:p-10">
                <h3 className="text-3xl font-semibold text-slate-800 mb-6">{t('contactPage.formTitle')}</h3>
                
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
                    className="w-full px-6 py-4 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-700 shadow-lg shadow-slate-800/20 transition-all flex items-center justify-center group"
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl text-[var(--petra-navy)] mb-4">
              {t('contactPage.mapTitle').split(' ').slice(0, -1).join(' ')} <span className="text-[var(--petra-gold)]">Mérida</span>
            </h2>
          </motion.div>
          <div className="w-full h-96 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
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

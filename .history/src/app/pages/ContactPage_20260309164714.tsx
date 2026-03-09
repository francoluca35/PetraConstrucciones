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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || 'No se pudo enviar el mensaje. Intenta nuevamente.');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Ocurrió un error inesperado.';
      setError(msg);
    } finally {
      setLoading(false);
    }
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
                    <p className="text-gray-600">+52 999 118 7418</p>
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
                    <a href="mailto:consultas@constructoraconesa.com" className="text-gray-600 hover:text-[var(--petra-gold)] hover:underline transition-colors">consultas@constructoraconesa.com</a>
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
                    <p className="text-gray-600">Calle 11,Numero 607 Colonia Maya, 97134 Mérida, México</p>
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
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl mb-6 text-sm font-medium"
                  >
                    {error}
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
                    disabled={loading}
                    className="w-full px-6 py-4 bg-[var(--petra-navy)] text-white rounded-xl font-semibold hover:bg-[var(--petra-navy)]/90 shadow-[0_8px_24px_rgba(15,15,15,0.25)] hover:shadow-[0_0_24px_rgba(201,169,97,0.2)] border-2 border-transparent hover:border-[var(--petra-gold)]/30 transition-all flex items-center justify-center group disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span>{loading ? 'Enviando…' : t('contactPage.send')}</span>
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </motion.button>
                  <p className="text-sm text-slate-500 mt-3 text-center">
                    {t('contactPage.responseTime')}
                  </p>
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
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391.4741632151787!2d-89.57742711640567!3d21.018629550014786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f567738ad5d265b%3A0x562b51bb789b0127!2sCONSTRUCTORA%20ESTRATEGIA%20CONESA%20S.A.!5e0!3m2!1ses!2sar!4v1773085618181!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

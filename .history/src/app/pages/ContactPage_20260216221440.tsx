'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export function ContactPage() {
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
           src="/Assets/contact.jpg"
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
            <span className="text-[var(--petra-gold)]">Contacto</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Estamos aquí para ayudarte con tu proyecto
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
                Información de <span className="text-[var(--petra-gold)]">Contacto</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ponte en contacto con nosotros a través de cualquiera de estos medios. 
                Nuestro equipo estará encantado de atenderte y resolver todas tus dudas.
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
                    <h3 className="text-lg text-[var(--petra-navy)] mb-1">Teléfono</h3>
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
                    <h3 className="text-lg text-[var(--petra-navy)] mb-1">Email</h3>
                    <p className="text-gray-600">cipronet@hotmail.com</p>
                    <p className="text-gray-600">proyectos@petraconstrucciones.com</p>
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
                    <h3 className="text-lg text-[var(--petra-navy)] mb-1">Dirección</h3>
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
                    <h3 className="text-lg text-[var(--petra-navy)] mb-1">Horario</h3>
                    <p className="text-gray-600">Lunes - Viernes: 9:00 - 18:00</p>
                    <p className="text-gray-600">Sábados: 10:00 - 14:00</p>
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
              <div className="bg-gray-50 rounded-lg shadow-xl p-8">
                <h3 className="text-3xl text-[var(--petra-navy)] mb-6">Envíanos un Mensaje</h3>
                
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6"
                  >
                    ¡Mensaje enviado con éxito! Te contactaremos pronto.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Nombre Completo *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--petra-gold)] transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--petra-gold)] transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Teléfono *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--petra-gold)] transition-all"
                      placeholder="+34 123 456 789"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Asunto *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--petra-gold)] transition-all"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="presupuesto">Solicitud de Presupuesto</option>
                      <option value="consulta">Consulta General</option>
                      <option value="proyecto">Nuevo Proyecto</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Mensaje *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--petra-gold)] resize-none transition-all"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-6 py-4 bg-[var(--petra-navy)] text-white rounded-lg hover:bg-[var(--petra-navy-dark)] transition-colors flex items-center justify-center group"
                  >
                    <span>Enviar Mensaje</span>
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
              Encuéntranos en <span className="text-[var(--petra-gold)]">Mérida</span>
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
              title="Petra Construcciones - Mérida, Yucatán, México"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

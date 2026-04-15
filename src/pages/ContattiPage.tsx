import { useState, type FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ContattiPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    messaggio: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="bg-[var(--color-arch-black)]">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <img 
          src="/images/contact_dome.png" 
          alt="Contatti Sinergie SRL" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm font-semibold tracking-widest uppercase mb-4 flex items-center justify-center gap-4 opacity-70">
              <span className="w-2 h-2 bg-white rounded-full" />
              CONTATTI
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter">
              CONTATTACI
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 md:py-24 lg:py-32 px-6 md:px-8">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Contact Info */}
            <div ref={ref}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-sm font-semibold tracking-widest uppercase mb-4 flex items-center gap-4 text-white/70">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  I NOSTRI CONTATTI
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-8 md:mb-12 text-white">
                  RESTIAMO IN CONTATTO
                </h2>
              </motion.div>
              
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-2xl">📍</span>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-white/70">Sede Principale</h3>
                    <p className="text-base md:text-lg text-white font-medium">Viale Argini — Lagione 48<br/>Via Lagione 46</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-2xl">📍</span>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-white/70">Sede Secondaria</h3>
                    <p className="text-base md:text-lg text-white font-medium">Viale Argini/Baronessa — Corso Maggiore 88</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-2xl">📞</span>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-white/70">Telefono</h3>
                    <a href="tel:3465389178" className="text-lg md:text-xl font-black hover:text-gray-300 text-white">346/5389178</a>
                    <p className="text-sm text-white/50">(anche WhatsApp)</p>
                    <a href="tel:011350606" className="text-base md:text-lg font-bold hover:text-gray-300 text-white/70 block mt-2">01 35 06 06</a>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-2xl">✉️</span>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-white/70">Email</h3>
                    <a href="mailto:service@sinergie.srl" className="text-lg md:text-xl font-black hover:text-gray-300 text-white">service@sinergie.srl</a>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-2xl">🕐</span>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-white/70">Assistenza</h3>
                    <p className="text-lg md:text-xl font-black text-white">7 giorni su 7</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-sm font-semibold tracking-widest uppercase mb-4 flex items-center gap-4 text-white/70">
                <span className="w-2 h-2 bg-white rounded-full" />
                SCRIVICI
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-8 md:mb-12 text-white">
                COMPILA IL MODULO
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-3 text-white/70">Nome e Cognome *</label>
                  <input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    className="w-full px-5 py-4 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-white outline-none transition-colors text-base md:text-lg font-medium"
                    placeholder="Inserisci il tuo nome"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-3 text-white/70">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-5 py-4 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-white outline-none transition-colors text-base md:text-lg font-medium"
                    placeholder="Inserisci la tua email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-3 text-white/70">Telefono</label>
                  <input
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                    className="w-full px-5 py-4 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-white outline-none transition-colors text-base md:text-lg font-medium"
                    placeholder="Inserisci il tuo telefono"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-3 text-white/70">Messaggio *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.messaggio}
                    onChange={(e) => setFormData({...formData, messaggio: e.target.value})}
                    className="w-full px-5 py-4 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-white outline-none transition-colors resize-none text-base md:text-lg font-medium"
                    placeholder="Descrivi il tuo progetto..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-white text-black font-black uppercase tracking-wider text-base md:text-lg rounded-full hover:bg-gray-200 transition-colors"
                >
                  Invia Messaggio
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[300px] md:h-[400px] lg:h-[500px] w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.5!2d7.6!3d45.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDAwJzAwLjAiTiA3wrAzNicwLjAiVw!5e0!3m2!1sit!2sit!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sinergie SRL - Mappa"
        />
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-[var(--color-arch-black)] border-t border-white/10">
        <div className="max-w-[1920px] mx-auto text-center">
          <div className="text-sm font-semibold tracking-widest uppercase mb-4 flex items-center justify-center gap-4 text-white/70">
            <span className="w-2 h-2 bg-white rounded-full" />
            PREFERISCI CHIAMARE?
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 md:mb-8 text-white">
            SIAMO A DISPOSIZIONE
          </h2>
          <p className="text-lg md:text-xl mb-8 md:mb-12 text-white/70">
            Rispondiamo 7 giorni su 7, anche su WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <a 
              href="tel:3465389178" 
              className="inline-flex items-center justify-center gap-3 px-8 md:px-12 py-4 md:py-5 bg-white text-black font-black uppercase tracking-wider text-sm md:text-base rounded-full hover:bg-gray-200 transition-colors"
            >
              <span>📞</span> 346/5389178
            </a>
            <a 
              href="https://wa.me/393465389178" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 md:px-12 py-4 md:py-5 bg-green-500 text-white font-black uppercase tracking-wider text-sm md:text-base rounded-full hover:bg-green-600 transition-colors"
            >
              <span>💬</span> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContattiPage;
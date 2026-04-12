import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ChiSiamoPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="pt-24 md:pt-32 bg-[var(--color-arch-white)]">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 px-6 md:px-8 bg-[var(--color-arch-black)] text-white">
        <div className="max-w-[1920px] mx-auto">
          <div className="text-sm font-semibold tracking-widest uppercase mb-4 flex items-center gap-4 opacity-70">
            <span className="w-2 h-2 bg-white rounded-full" />
            CHI SIAMO
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-6">
            LA NOSTRA STORIA
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-2xl opacity-90">
            Dal 1997 trasformiamo i sogni dei nostri clienti in realtà concrete.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 lg:py-32 px-6 md:px-8">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-5 relative h-[40vh] md:h-[50vh] lg:h-[70vh] overflow-hidden">
            <motion.img 
              ref={ref}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              src="/images/1.avif" 
              alt="Sinergie SRL - Il Nostro Team" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-6 md:mb-8">
                DAL 1997 COSTRUIAMO SOGNI
              </h2>
              
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-600 font-medium max-w-xl">
                <p>
                  Sinergie SRL nasce nel 1997 con un obiettivo chiaro: trasformare i sogni dei nostri clienti in realtà concrete. 
                  In oltre 27 anni di attività abbiamo completato centinaia di interventi nell'area metropolitana, 
                  costruendo un'esperienza che si traduce in qualità, affidabilità e rispetto per ogni cliente.
                </p>
                <p>
                  La nostra missione è semplice: lavoriamo nelle case dei nostri clienti come se fossero le nostre. 
                  Questo principio guida ogni nostro intervento, dalla più piccola riparazione alla ristrutturazione più complessa.
                </p>
                <p className="font-black text-xl">
                  "Il futuro appartiene a coloro che credono nella bellezza dei propri sogni"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-[var(--color-arch-black)] text-white">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <span className="block text-4xl md:text-6xl lg:text-7xl font-black">27+</span>
              <span className="text-sm md:text-base font-semibold tracking-wider uppercase opacity-70">Anni di Esperienza</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-6xl lg:text-7xl font-black">500+</span>
              <span className="text-sm md:text-base font-semibold tracking-wider uppercase opacity-70">Progetti Completati</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-6xl lg:text-7xl font-black">7/7</span>
              <span className="text-sm md:text-base font-semibold tracking-wider uppercase opacity-70">Assistenza</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-6xl lg:text-7xl font-black">100%</span>
              <span className="text-sm md:text-base font-semibold tracking-wider uppercase opacity-70">Clienti Soddisfatti</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 lg:py-32 px-6 md:px-8">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h3 className="text-sm font-semibold tracking-widest uppercase mb-4 flex items-center gap-4 opacity-70">
                <span className="w-2 h-2 bg-black rounded-full" />
                LA NOSTRA MISSIONE
              </h3>
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter">
                Lavoriamo come a casa nostra
              </h4>
            </div>
            <div>
              <p className="text-base md:text-lg text-gray-600">
                Ci impegniamo ogni giorno per offrire il miglior servizio possibile ai nostri clienti. 
                Rispetto degli spazi, puntualità nelle consegne e attenzione ai dettagli sono i principi 
                che guidano il nostro lavoro. Ogni progetto è un'opportunità per creare qualcosa di straordinario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-[var(--color-arch-black)] text-white">
        <div className="max-w-[1920px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">
            VISITA I NOSTRI LAVORI
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Scopri alcuni dei progetti che ci rendono orgogliosi.
          </p>
          <a 
            href="#lavori" 
            className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[var(--color-arch-white)] text-[var(--color-arch-black)] font-bold uppercase tracking-wider text-sm md:text-base rounded-full hover:bg-gray-200 transition-colors"
          >
            Vedi i Nostri Lavori →
          </a>
        </div>
      </section>
    </div>
  );
};

export default ChiSiamoPage;
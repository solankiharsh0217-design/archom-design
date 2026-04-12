import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="chi-siamo" className="w-full bg-[var(--color-arch-white)] py-16 md:py-24 lg:py-32 px-6 md:px-8">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        
        {/* Left Column - Image */}
        <div className="col-span-1 lg:col-span-5 relative h-[40vh] md:h-[50vh] lg:h-[70vh] overflow-hidden">
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

        {/* Right Column - Text Content */}
        <div className="col-span-1 lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-sm font-semibold tracking-widest uppercase mb-4 md:mb-6 lg:mb-8 opacity-70 flex items-center gap-4">
              <span className="w-2 h-2 bg-black rounded-full" />
              CHI SIAMO
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 md:mb-8 lg:mb-12 tracking-tighter uppercase leading-[0.9]">
              DA OLTRE 27 ANNI COSTRUIAMO SOGNI
            </h2>

            <div className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl text-[var(--color-arch-gray)] font-medium max-w-xl">
              <p>
                Da oltre 27 anni realizziamo ristrutturazioni e impianti per privati e aziende nell'area metropolitana. 
                Lavoriamo nelle case dei nostri clienti come se fossero le nostre.
              </p>
              <p>
                Il futuro appartiene a coloro che credono nella bellezza dei propri sogni. 
                Voi lo immaginate, noi lo rendiamo realtà.
              </p>
            </div>

            <div className="mt-8 md:mt-12 lg:mt-16 flex flex-wrap gap-6 md:gap-8">
              <div className="text-center">
                <span className="block text-3xl md:text-4xl lg:text-5xl font-black">27+</span>
                <span className="text-xs md:text-sm font-semibold tracking-wider uppercase">Anni di Esperienza</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl md:text-4xl lg:text-5xl font-black">7/7</span>
                <span className="text-xs md:text-sm font-semibold tracking-wider uppercase">Assistenza</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl md:text-4xl lg:text-5xl font-black">✓</span>
                <span className="text-xs md:text-sm font-semibold tracking-wider uppercase">Preventivo Gratuito</span>
              </div>
            </div>

            <button className="mt-8 md:mt-12 group relative flex items-center gap-4 md:gap-6 px-6 md:px-8 py-3 md:py-4 bg-black text-white rounded-full overflow-hidden hover:bg-gray-900 transition-colors">
              <span className="relative z-10 font-bold uppercase tracking-widest text-xs md:text-sm">Scopri la Nostra Storia</span>
              <div className="w-2 h-2 bg-white rounded-full transition-transform group-hover:scale-[3]" />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
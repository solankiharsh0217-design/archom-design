import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20vh", "20vh"]);

  return (
    <section 
      ref={container} 
      id="contatti" 
      className="relative w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] overflow-hidden bg-[var(--color-arch-black)]"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[140%] -top-[20%]">
        <img 
          src="/images/contact_dome.png" 
          alt="Sinergie SRL - Costruzioni" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 md:px-8 py-16 md:py-24 text-white text-center">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-4 md:mb-6">
          HAI UN PROGETTO IN MENTE?
        </h2>
        <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-12 max-w-xl md:max-w-2xl opacity-90">
          Contattaci per un preventivo gratuito. Rispondiamo anche su WhatsApp.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
          <a 
            href="tel:3465389178" 
            className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-[var(--color-arch-white)] text-[var(--color-arch-black)] font-bold uppercase tracking-wider text-sm md:text-base rounded-full hover:bg-gray-200 transition-colors"
          >
            <span>📞</span> 346/5389178
          </a>
          <a 
            href="mailto:service@sinergie.srl" 
            className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 border-2 border-white text-[var(--color-arch-white)] font-bold uppercase tracking-wider text-sm md:text-base rounded-full hover:bg-white hover:text-black transition-colors"
          >
            <span>✉️</span> Scrivici
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
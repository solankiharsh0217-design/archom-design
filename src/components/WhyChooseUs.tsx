import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const whyChooseUs = [
  {
    title: 'Esperienza dal 1997',
    description: 'Oltre due decenni di cantieri completati con successo'
  },
  {
    title: 'Assistenza 7 giorni su 7',
    description: 'Sempre disponibili, anche su WhatsApp'
  },
  {
    title: 'Preventivo gratuito',
    description: 'Sopralluogo e stima senza impegno'
  },
  {
    title: 'Lavoriamo come a casa nostra',
    description: 'Rispetto degli spazi e puntualità garantiti'
  }
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="perche-sceglierci" className="w-full bg-[var(--color-arch-white)] py-16 md:py-24 lg:py-32 px-6 md:px-8">
      <div className="max-w-[1920px] mx-auto">
        
        <div className="mb-12 md:mb-16 lg:mb-24">
          <div className="text-sm font-semibold tracking-widest uppercase mb-4 flex items-center gap-4 opacity-70">
            <span className="w-2 h-2 bg-black rounded-full" />
            PERCHÉ SCEGLIERCI
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tighter">
            LA TUA SODDISFAZIONE È LA NOSTRA PRIORITÀ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-6 md:p-8 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
            >
              <span className="block text-4xl md:text-5xl lg:text-6xl font-black mb-4 group-hover:text-white">0{index + 1}</span>
              <h3 className="text-lg md:text-xl lg:text-2xl font-black uppercase tracking-tighter mb-3">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
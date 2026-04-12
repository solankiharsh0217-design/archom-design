import { useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 40, rotateX: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { duration: 0.9, ease: "easeOut" } 
    }
  };

  return (
    <section 
      ref={container} 
      id="home" 
      className="relative w-full h-screen overflow-hidden bg-[var(--color-arch-black)]"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.15 }}
          transition={{ duration: 20, ease: "easeOut" }}
          src="/images/hero_brutalist.png" 
          alt="Sinergie SRL - Costruzioni e Ristrutturazioni" 
          className="w-full h-full object-cover object-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-arch-black)] via-black/30 to-black/50" />
      </motion.div>

      <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-8 pb-8 md:pb-12 pt-[20vh] text-white">
        
        <motion.div
           variants={containerVariants}
           initial="hidden"
           animate="show"
           className="w-full md:w-[90%] lg:w-3/4 flex flex-col"
           style={{ perspective: "1000px" }}
        >
          <motion.div variants={textVariants} className="overflow-hidden">
            <h1 className="text-mega text-4xl md:text-6xl lg:text-8xl text-[var(--color-arch-white)]">DAL 1997</h1>
          </motion.div>
          <motion.div variants={textVariants} className="overflow-hidden">
            <h1 className="text-mega text-4xl md:text-6xl lg:text-8xl text-[var(--color-arch-white)]">COSTRUIAMO I</h1>
          </motion.div>
          <motion.div variants={textVariants} className="overflow-hidden">
            <h1 className="text-mega text-4xl md:text-6xl lg:text-8xl text-[var(--color-arch-white)]">VOSTRI SOGNI</h1>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-6 md:mt-8 flex flex-col md:flex-row gap-4 md:gap-6"
        >
          <a 
            href="#contatti" 
            className="inline-block px-6 md:px-8 py-3 md:py-4 bg-[var(--color-arch-white)] text-[var(--color-arch-black)] font-bold uppercase tracking-wider text-sm md:text-base rounded-full hover:bg-gray-200 transition-colors text-center"
          >
            Richiedi un Preventivo →
          </a>
          <a 
            href="#lavori" 
            className="inline-block px-6 md:px-8 py-3 md:py-4 border-2 border-white text-[var(--color-arch-white)] font-bold uppercase tracking-wider text-sm md:text-base rounded-full hover:bg-white hover:text-black transition-colors text-center"
          >
            Scopri i Nostri Lavori →
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 md:bottom-8 right-6 md:right-8 lg:bottom-12 lg:right-12 flex flex-col items-center gap-3 md:gap-4"
        >
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-gray-300 font-display rotate-90 translate-y-[-15px] md:translate-y-[-20px]">
            SCROLL
          </span>
          <div className="w-[1px] h-12 md:h-16 bg-gray-600 relative overflow-hidden">
            <motion.div 
              initial={{ y: "-100%" }}
              animate={{ y: "100%" }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 w-full h-full bg-white"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
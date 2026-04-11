import { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Framer motion variants for staggered text
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
      transition: { duration: 0.9, ease: [0.33, 1, 0.68, 1] } 
    }
  };

  return (
    <section 
      ref={container} 
      id="home" 
      className="relative w-full h-screen overflow-hidden bg-[var(--color-arch-black)]"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        {/* Slow zoom inward effect on load (Ken Burns) */}
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.15 }}
          transition={{ duration: 20, ease: "easeOut" }}
          src="/images/hero_brutalist.png" 
          alt="Brutalist architectural home" 
          className="w-full h-full object-cover object-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-arch-black)] via-black/20 to-black/60 opacity-80" />
      </motion.div>

      <div className="relative z-10 flex flex-col justify-end h-full p-8 pb-12 pt-[20vh] max-w-[1920px] mx-auto text-white">
        
        <motion.div
           variants={containerVariants}
           initial="hidden"
           animate="show"
           className="w-full md:w-[85%] lg:w-3/4 flex flex-col"
           style={{ perspective: "1000px" }}
        >
          <motion.div variants={textVariants} className="overflow-hidden">
            <h1 className="text-mega text-[var(--color-arch-white)]">BUILT</h1>
          </motion.div>
          <motion.div variants={textVariants} className="overflow-hidden">
            <h1 className="text-mega text-[var(--color-arch-white)]">DIFFERENT,</h1>
          </motion.div>
          <motion.div variants={textVariants} className="overflow-hidden">
            <h1 className="text-mega text-[var(--color-arch-white)]">BUILT TO LAST</h1>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 flex flex-col items-center gap-4"
        >
          <span className="text-xs font-bold tracking-widest text-gray-400 font-display rotate-90 translate-y-[-20px]">
            SCROLL
          </span>
          <div className="w-[1px] h-16 bg-gray-700 relative overflow-hidden">
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
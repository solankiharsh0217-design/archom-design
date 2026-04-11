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
      id="contact" 
      className="relative w-full h-[80vh] overflow-hidden bg-[var(--color-arch-black)]"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[140%] -top-[20%]">
        <img 
          src="/images/contact_dome.png" 
          alt="Cathedral Dome Interior" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full px-8 text-white">
        <h2 className="text-6xl md:text-[8rem] font-black tracking-tighter uppercase text-center mb-12">
          LET'S BUILD<br/>TOGETHER
        </h2>
        
        <button className="group relative flex items-center gap-6 px-10 py-5 bg-[var(--color-arch-white)] text-[var(--color-arch-black)] rounded-full overflow-hidden hover:bg-gray-200 transition-colors">
          <span className="relative z-10 font-bold uppercase tracking-widest text-sm">SEND US AN ENQUIRY</span>
        </button>
      </div>
    </section>
  );
};

export default Contact;
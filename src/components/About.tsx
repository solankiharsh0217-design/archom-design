import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="studio" className="w-full bg-[var(--color-arch-white)] py-32 px-8">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        
        {/* Left Column - Image */}
        <div className="col-span-1 lg:col-span-5 relative h-[60vh] lg:h-[80vh] overflow-hidden">
          <motion.img 
            ref={ref}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            src="/images/about_workspace.png" 
            alt="Architect Workspace" 
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
            <div className="text-sm font-semibold tracking-widest uppercase mb-8 opacity-70 flex items-center gap-4">
              <span className="w-2 h-2 bg-black rounded-full" />
              OUR STUDIO
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.9]">
              DESIGN YOU <br /> CAN FEEL
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-[var(--color-arch-gray)] font-medium max-w-xl">
              <p>
                We do not just construct buildings; we shape environments.
                Every structure is a dialogue between material and space, born from a brutalist ethos that favors truth over ornamentation.
              </p>
              <p>
                Rooted in monolithic forms and structural honesty, our spaces are designed to endure, inspire, and challenge expectations.
              </p>
            </div>

            <button className="mt-16 group relative flex items-center gap-6 px-8 py-4 bg-black text-white rounded-full overflow-hidden hover:bg-gray-900 transition-colors">
              <span className="relative z-10 font-bold uppercase tracking-widest text-sm">EXPLORE MORE ABOUT US</span>
              <div className="w-2 h-2 bg-white rounded-full transition-transform group-hover:scale-[3]" />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
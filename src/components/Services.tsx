import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: '01',
    title: 'Architectural Design',
    description: 'We conceive structures from the ground up, honoring material truth and spatial integrity. Our approach creates powerful, enduring forms.'
  },
  {
    id: '02',
    title: 'Interior Spaces',
    description: 'Transitioning the brutalist philosophy inward, we craft stark yet deeply atmospheric interiors that manipulate light and shadow.'
  },
  {
    id: '03',
    title: 'Urban Planning',
    description: 'Scaling our vision to the city level, we design entire districts that integrate monolithic architecture with functional brutalism.'
  }
];

const Services = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>('01');

  return (
    <section id="services" className="w-full bg-[var(--color-arch-black)] text-[var(--color-arch-white)] py-32 px-8 min-h-screen">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        
        {/* Left Column - Sticky Image & CTA */}
        <div className="h-full relative">
          <div className="sticky top-32 lg:h-[70vh] flex flex-col justify-between">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter w-2/3">
              SHAPING THE HORIZON
            </h2>
            
            <div className="mt-16 bg-[var(--color-arch-white)] w-full aspect-video p-1">
              <img 
                src="/images/IjTsCTG466nJ99Pl5SLqhrVhA.avif" 
                alt="Service showcase" 
                className="w-full h-full object-cover object-[center_bottom] brightness-75"
              />
            </div>
            
            <button className="mt-8 flex items-center justify-between w-full py-6 border-b border-[var(--color-arch-gray)] hover:border-[var(--color-arch-white)] transition-colors group">
              <span className="text-lg font-bold tracking-widest uppercase">Start Your Next Project</span>
              <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Right Column - Accordion */}
        <div className="flex flex-col justify-center h-full">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="border-b border-[var(--color-arch-gray)]"
            >
              <button
                className="w-full py-8 lg:py-16 flex items-center justify-between text-left group"
                onClick={() => setActiveAccordion(activeAccordion === service.id ? null : service.id)}
              >
                <div className="flex items-center gap-8">
                  <span className={`text-xl lg:text-3xl font-display transition-colors ${activeAccordion === service.id ? 'text-[var(--color-arch-white)]' : 'text-gray-500'}`}>
                    {service.id}/
                  </span>
                  <span className={`text-3xl lg:text-6xl font-black uppercase tracking-tighter group-hover:text-[var(--color-arch-lightgray)] transition-colors ${activeAccordion === service.id ? 'text-[var(--color-arch-white)]' : 'text-gray-500'}`}>
                    {service.title}
                  </span>
                </div>
              </button>

              <AnimatePresence>
                {activeAccordion === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-16 pt-4 pl-16 lg:pl-24 max-w-xl text-lg lg:text-xl text-gray-400">
                      {service.description}
                      <div className="mt-8">
                        <button className="text-sm font-bold tracking-widest uppercase border border-[var(--color-arch-gray)] hover:border-white px-6 py-3 rounded-full transition-colors hidden lg:inline-block">
                          GET STARTED
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
  '/images/about_workspace.png',
  '/images/portfolio_building.png',
  '/images/about_workspace.png',
  '/images/portfolio_building.png',
  '/images/about_workspace.png',
];

const Gallery = () => {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section id="gallery" className="w-full bg-[var(--color-arch-black)] text-[var(--color-arch-white)] py-32 overflow-hidden">
      
      <div className="max-w-[1920px] mx-auto px-8 mb-16 flex justify-between items-end">
        <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-black uppercase tracking-tighter leading-none text-transparent [-webkit-text-stroke:2px_var(--color-arch-white)]">
          THE <br/> COLLECTION
        </h2>
        
        <button className="hidden md:flex items-center gap-6 px-8 py-4 bg-white text-black rounded-full overflow-hidden hover:bg-gray-200 transition-colors">
          <span className="font-bold uppercase tracking-widest text-sm">VIEW ALL</span>
        </button>
      </div>

      <motion.div ref={carousel} className="cursor-grab overflow-hidden active:cursor-grabbing px-8">
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-8"
        >
          {images.map((img, index) => (
            <motion.div 
              key={index} 
              className="min-w-[70vw] md:min-w-[40vw] lg:min-w-[30vw] h-[50vh] lg:h-[70vh]"
            >
              <img 
                src={img} 
                alt={`Collection item ${index + 1}`} 
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-700 pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Gallery;
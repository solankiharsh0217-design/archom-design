import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  { id: 1, name: 'Ristrutturazione Completa', year: '2024', image: '/images/1.avif' },
  { id: 2, name: 'Impianto Fotovoltaico', year: '2024', image: '/images/2.avif' },
  { id: 3, name: 'Bagno Moderno', year: '2023', image: '/images/x6yC9EkhN2AKECOLr6FgD3VpeI.avif' },
  { id: 4, name: 'Cucina Nuova', year: '2023', image: '/images/DWkmatJGj3XD7iXhiYdI70dERNo.avif' }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const xOffset = index % 2 === 0 ? "-90%" : "90%";
  const x = useTransform(scrollYProgress, [0.2, 0.75], ["0%", xOffset]);
  const scale = useTransform(scrollYProgress, [0.2, 0.75], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <motion.div 
      ref={cardRef}
      style={{ x, scale, opacity }}
      className="w-full max-w-2xl mx-auto relative z-10 will-change-transform"
    >
      <div className="overflow-hidden bg-[var(--color-arch-lightgray)] w-full aspect-[4/5] md:aspect-video relative shadow-2xl">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-all duration-700"
        />
      </div>
      <div className="mt-3 md:mt-4 flex justify-between items-end border-b-2 border-black pb-2 bg-[var(--color-arch-white)]">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tighter">{project.name}</h3>
        <span className="text-sm md:text-lg font-bold">{project.year}</span>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <section id="lavori" className="relative w-full bg-[var(--color-arch-white)] pt-16 md:pt-24 lg:pt-32 pb-32 md:pb-48 lg:pb-64">
      
      {/* 
        The Heading:
        Now locked to the top just underneath the navbar logic.
        Sits securely throughout the massive height of the section.
      */}
      <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none z-20 mix-blend-difference text-white">
        <div className="sticky top-20 md:top-24 lg:top-32 w-full flex flex-col items-center justify-start">
          <div className="text-xs font-bold tracking-widest uppercase mb-3 md:mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full block" />
            GALLERY
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl text-center leading-[0.85] font-black tracking-tighter">
            I NOSTRI<br/>LAVORI
          </h2>
        </div>
      </div>

      {/* 
        The Images Track
        Extensive vertical gaps so only one massive image interacts at a time.
      */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-8 pt-[25vh] md:pt-[28vh] lg:pt-[30vh] flex flex-col gap-[60vh] md:gap-[70vh] lg:gap-[75vh]">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>

    </section>
  );
};

export default Portfolio;
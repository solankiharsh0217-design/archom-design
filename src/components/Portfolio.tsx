import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  { id: 1, name: 'Elysian Spire', year: '2025', image: '/images/portfolio_building.png' },
  { id: 2, name: 'Solara Pavilion', year: '2024', image: '/images/hero_brutalist.png' },
  { id: 3, name: 'Nebura Heights', year: '2016', image: '/images/about_workspace.png' },
  { id: 4, name: 'Etoile Grand', year: '2020', image: '/images/contact_dome.png' }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Track this card's trajectory from absolute bottom of screen to absolute top
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Slow, synchronized divergence:
  // Instead of violently snapping sideways, the images gradually push outwards 
  // as they ascend, completing their split right as they join the header near the top.
  const xOffset = index % 2 === 0 ? "-90%" : "90%";
  
  // Starts diverging gradually after fully entering the screen (0.2)
  // Reaches maximum divergence near the top threshold (0.75) where the heading is!
  const x = useTransform(scrollYProgress, [0.2, 0.75], ["0%", xOffset]);
  const scale = useTransform(scrollYProgress, [0.2, 0.75], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]); // fade slightly as it leaves

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
          className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
        />
      </div>
      <div className="mt-4 flex justify-between items-end border-b-2 border-black pb-2 bg-[var(--color-arch-white)]">
        <h3 className="text-3xl font-black uppercase tracking-tighter">{project.name}</h3>
        <span className="text-lg font-bold">{project.year}</span>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <section id="projects" className="relative w-full bg-[var(--color-arch-white)] pt-32 pb-64">
      
      {/* 
        The Heading:
        Now locked to the top just underneath the navbar logic.
        Sits securely throughout the massive height of the section.
      */}
      <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none z-20 mix-blend-difference text-white">
        <div className="sticky top-24 lg:top-32 w-full flex flex-col items-center justify-start">
          <div className="text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full block" />
            PROJECTS
          </div>
          <h2 className="text-6xl md:text-8xl lg:text-9xl text-center leading-[0.85] font-black tracking-tighter">
            SELECTED<br/>PROJECTS
          </h2>
        </div>
      </div>

      {/* 
        The Images Track
        Extensive vertical gaps so only one massive image interacts at a time.
      */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-8 pt-[30vh] flex flex-col gap-[75vh]">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>

    </section>
  );
};

export default Portfolio;
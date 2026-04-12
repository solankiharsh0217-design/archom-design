import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { id: '01', title: 'DISCOVERY & VISION', img: '/images/gnTOjNhe2Q616OKGknCOzIfQ.avif' },
  { id: '02', title: 'CONCEPT & DESIGN', img: '/images/niManU1zLj9iNWkoC4SXUZwuaK8.avif' },
  { id: '03', title: 'COLLABORATION & BUILD', img: '/images/doZoqR7KksNcu3aswTZTcawiIU.avif' },
  { id: '04', title: 'DELIVERY & IMPACT', img: '/images/PjHJMX19p4rUgEbsFA6rEDDges.avif' }
];

const ProcessStep = ({ step, index }: { step: typeof steps[0], index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"]
  });
  
  // Parallax the image slightly slower than the text
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="relative w-full border-t-2 border-black py-16 lg:py-32 flex flex-col lg:flex-row items-center gap-16 group">
      
      {/* Massive Typography */}
      <div className="w-full lg:w-2/3 flex items-start gap-8 z-10">
        <span className="text-6xl font-display text-gray-300 group-hover:text-black transition-colors">{step.id}/</span>
        <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-black uppercase tracking-tighter leading-[0.85] text-transparent [-webkit-text-stroke:2px_black] group-hover:text-black group-hover:[-webkit-text-stroke:0px] transition-all duration-500 cursor-default">
          {step.title}
        </h2>
      </div>

      {/* Floating Image mapped alternatively */}
      <div className={`w-full lg:w-1/3 h-[400px] overflow-hidden ${index % 2 === 0 ? 'lg:order-last' : 'lg:-order-1'}`}>
        <motion.img 
          style={{ y: yImage }}
          src={step.img} 
          alt={step.title}
          className="w-full h-[120%] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-105"
        />
      </div>

    </div>
  );
};

const Process = () => {
  return (
    <section className="w-full bg-[var(--color-arch-white)] py-32 px-8 overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        
        <div className="mb-32">
          <h2 className="text-sm font-semibold tracking-widest uppercase mb-8 opacity-70 flex items-center gap-4">
            <span className="w-2 h-2 bg-black rounded-full" />
            OUR PROCESS
          </h2>
        </div>

        <div className="flex flex-col">
          {steps.map((step, index) => (
            <ProcessStep key={step.id} step={step} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
import { motion } from 'framer-motion';

const journals = [
  {
    id: 1,
    date: 'OCT 12, 2026',
    title: 'Spaces That Breathe',
    image: '/images/hero_brutalist.png',
  },
  {
    id: 2,
    date: 'NOV 05, 2026',
    title: 'Monolithic Materiality',
    image: '/images/about_workspace.png',
  },
  {
    id: 3,
    date: 'JAN 22, 2027',
    title: 'The Brutalist Dialogue',
    image: '/images/portfolio_building.png',
  }
];

const Journals = () => {
  return (
    <section id="journals" className="w-full bg-[var(--color-arch-white)] py-32 px-8">
      <div className="max-w-[1920px] mx-auto">
        
        <div className="mb-32">
          <h2 className="text-sm font-semibold tracking-widest uppercase mb-8 opacity-70 flex items-center gap-4">
            <span className="w-2 h-2 bg-black rounded-full" />
            JOURNALS & INSIGHTS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {journals.map((journal) => (
            <motion.div 
              key={journal.id} 
              className="group cursor-pointer"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            >
              <div className="w-full aspect-[4/5] overflow-hidden mb-6 relative">
                <img 
                  src={journal.image} 
                  alt={journal.title} 
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold tracking-widest text-[#777] font-display">
                  {journal.date}
                </span>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">
                  {journal.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Journals;
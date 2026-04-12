import { useState } from 'react';
import { motion } from 'framer-motion';

const works = [
  { id: 1, title: 'Ristrutturazione Appartamento', category: 'Ristrutturazioni', image: '/images/1.avif' },
  { id: 2, title: 'Impianto Fotovoltaico Villa', category: 'Impianti', image: '/images/2.avif' },
  { id: 3, title: 'Bagno Moderno', category: 'Bagni', image: '/images/x6yC9EkhN2AKECOLr6FgD3VpeI.avif' },
  { id: 4, title: 'Cucina Completa', category: 'Ristrutturazioni', image: '/images/DWkmatJGj3XD7iXhiYdI70dERNo.avif' },
  { id: 5, title: 'Impianto Idraulico', category: 'Impianti', image: '/images/hDRGGfmOv0QBfU3D207pf7ngiWE.avif' },
  { id: 6, title: 'Ristrutturazione Esterna', category: 'Ristrutturazioni', image: '/images/gnTOjNhe2Q616OKGknCOzIfQ.avif' }
];

const categories = ['Tutti', 'Bagni', 'Ristrutturazioni', 'Impianti'];

const LavoriPage = () => {
  const [activeCategory, setActiveCategory] = useState('Tutti');

  const filteredWorks = activeCategory === 'Tutti' 
    ? works 
    : works.filter(work => work.category === activeCategory);

  return (
    <div className="bg-[var(--color-arch-black)]">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <img 
          src="/images/2.avif" 
          alt="I Nostri Lavori Sinergie SRL" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm font-semibold tracking-widest uppercase mb-4 flex items-center justify-center gap-4 opacity-70">
              <span className="w-2 h-2 bg-white rounded-full" />
              GALLERY
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter">
              I NOSTRI LAVORI
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-3 md:py-4 px-6 md:px-8 border-b border-white/20 sticky top-16 bg-[var(--color-arch-black)] z-30">
        <div className="max-w-[1920px] mx-auto flex flex-wrap gap-4 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm font-bold uppercase tracking-wider rounded-full transition-all ${
                activeCategory === category 
                  ? 'bg-white text-black' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 lg:py-32 px-6 md:px-8">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden aspect-[4/3] mb-4">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-bold tracking-wider text-white/50 uppercase">{work.category}</span>
                    <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter mt-1 text-white">{work.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-[var(--color-arch-white)]">
        <div className="max-w-[1920px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-black">
            HAI UN PROGETTO IN MENTE?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-600">
            Contattaci per realizzare il tuo sogno.
          </p>
          <a 
            href="/contatti" 
            className="inline-block px-8 md:px-12 py-4 md:py-5 bg-black text-white font-bold uppercase tracking-wider text-sm md:text-base rounded-full hover:bg-gray-900 transition-colors"
          >
            Contattaci →
          </a>
        </div>
      </section>
    </div>
  );
};

export default LavoriPage;
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Marco B.',
    text: 'Professionalità e puntualità eccezionali. Hanno ristrutturato il nostro bagno in tempi record.',
    rating: 5
  },
  {
    id: 2,
    name: 'Giulia R.',
    text: 'Personale gentile e disponibile. Consigliatissimi per qualsiasi lavoro edile.',
    rating: 5
  },
  {
    id: 3,
    name: 'Andrea M.',
    text: 'Esperienza fantastica. Hanno seguito il progetto dalla A alla Z con grande competenza.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonianze" className="w-full bg-[var(--color-arch-black)] text-[var(--color-arch-white)] py-16 md:py-24 lg:py-32 px-6 md:px-8">
      <div className="max-w-[1920px] mx-auto">
        
        <div className="mb-12 md:mb-16 lg:mb-24">
          <div className="text-sm font-semibold tracking-widest uppercase mb-4 flex items-center gap-4 opacity-70">
            <span className="w-2 h-2 bg-white rounded-full" />
            RECENSIONI
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tighter">
            COSA DICONO DI NOI
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[var(--color-arch-gray)] p-6 md:p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-base md:text-lg text-gray-300 mb-6 italic">
                "{testimonial.text}"
              </p>
              <p className="text-sm font-bold uppercase tracking-wider">
                {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
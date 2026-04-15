import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: '01',
    title: 'Ristrutturazioni Parziali e Totali',
    description: 'Interveniamo su bagni, cucine, interni ed esterni. Ristrutturazione completa o parziale su misura per ogni esigenza.',
    icon: '🏠'
  },
  {
    id: '02',
    title: 'Nuove Costruzioni',
    description: 'Realizziamo nuove costruzioni di ogni dimensione, dalle piccole abitazioni ai grandi progetti. Seguiamo ogni fase del processo costruttivo.',
    icon: '🏗️'
  },
  {
    id: '03',
    title: 'Impianti Idrico-Sanitari',
    description: 'Installazione, sostituzione e manutenzione di impianti idraulici e sanitari. La nostra specializzazione principale.',
    icon: '🔧'
  },
  {
    id: '04',
    title: 'Installazione Impianti Fotovoltaici',
    description: 'Forniamo e installiamo pannelli fotovoltaici per abitazioni e attività commerciali, riducendo i costi energetici.',
    icon: '☀️'
  },
  {
    id: '05',
    title: 'Manutenzione Caldaie',
    description: 'Manutenzione ordinaria e straordinaria, revisione e sostituzione di caldeie tradizionali, a pellet e ibride. Redazione di perizie termotecniche.',
    icon: '🔥'
  },
  {
    id: '06',
    title: 'Rifacimento Tetti e Bonifica',
    description: 'Ristrutturiamo completamente qualsiasi tipologia di tetto di qualsiasi dimensione. Eseguiamo bonifica da eternit e amianto in totale sicurezza.',
    icon: '🏠'
  },
  {
    id: '07',
    title: 'Assistenza Pratiche Comunali e Catastali',
    description: 'Supporto tecnico per pratiche comunali e catastali, inclusi cambi di destinazione d\'uso. Gestiamo tutta la burocrazia per te.',
    icon: '📋'
  },
  {
    id: '08',
    title: 'Noleggio e Installazione Ponteggi',
    description: 'Noleggio e installazione professionale di ponteggi e parapetti per lavori edili di ogni tipo. Sicurezza garantita.',
    icon: '🪜'
  },
  {
    id: '09',
    title: 'Realizzazione Aree Verdi',
    description: 'Progettazione e realizzazione di aree verdi, giardini e spazi esterni. Installazione di sistemi di irrigazione automatici.',
    icon: '🌳'
  },
  {
    id: '10',
    title: 'Lavori di Fabbro',
    description: 'Creazione di nuove recinzioni, cancelli, cancellini e strutture metalliche su misura. Lavori di precisione e alta qualità.',
    icon: '⚙️'
  },
  {
    id: '11',
    title: 'Disotturazioni e Spurghi',
    description: 'Interventi rapidi per disotturazione e spurgo di tombini, wc, lavandini e condotte. Servizio disponibile anche per emergenze.',
    icon: '🚿'
  },
  {
    id: '12',
    title: 'Progettazione e Redazione',
    description: 'Supporto alla progettazione per interventi nell\'area metropolitana. Dall\'idea al cantiere, ti seguiamo in ogni fase.',
    icon: '📐'
  },
  {
    id: '13',
    title: 'Manutenzione Generale',
    description: 'Interventi di manutenzione ordinaria su impianti, strutture e finiture per privati e condomini.',
    icon: '🔧'
  }
];

const Services = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>('01');

  return (
    <section id="servizi" className="w-full bg-[var(--color-arch-black)] text-[var(--color-arch-white)] py-16 md:py-24 lg:py-32 px-6 md:px-8 overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16 lg:mb-24">
          <div className="text-sm font-semibold tracking-widest uppercase mb-4 flex items-center gap-4 opacity-70">
            <span className="w-2 h-2 bg-white rounded-full" />
            I NOSTRI SERVIZI
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tighter">
            COSTRUIAMO IL TUO FUTURO
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-[var(--color-arch-gray)] p-6 md:p-8 cursor-pointer"
              onClick={() => setActiveAccordion(activeAccordion === service.id ? null : service.id)}
            >
              <div className="text-3xl md:text-4xl mb-4">{service.icon}</div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs md:text-sm font-display text-gray-400">{service.id}/</span>
                <h3 className="text-lg md:text-xl lg:text-2xl font-black uppercase tracking-tighter">
                  {service.title}
                </h3>
              </div>
              
              <AnimatePresence>
                {activeAccordion === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm md:text-base text-gray-300 pt-2">
                      {service.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className={`mt-4 text-xs font-bold tracking-wider uppercase transition-transform duration-300 ${activeAccordion === service.id ? 'rotate-180' : ''}`}>
                {activeAccordion === service.id ? 'CHIUDI' : 'SCOPRI DI PIÙ'} →
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 lg:mt-24">
          <button className="group relative flex items-center justify-center gap-4 px-8 md:px-12 py-4 md:py-5 bg-[var(--color-arch-white)] text-[var(--color-arch-black)] rounded-full overflow-hidden hover:bg-gray-200 transition-colors">
            <span className="relative z-10 font-bold uppercase tracking-widest text-sm md:text-base">Tutti i Servizi</span>
            <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;
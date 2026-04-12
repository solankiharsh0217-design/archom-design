import { motion } from 'framer-motion';

const servicesPage = [
  {
    id: '01',
    title: 'Ristrutturazioni Parziali e Totali',
    description: 'Interveniamo su bagni, cucine, interni ed esterni. Ristrutturazione completa o parziale su misura per ogni esigenza. Il nostro team di esperti ti segue dalla progettazione alla consegna.',
    features: ['Ristrutturazione bagni', 'Ristrutturazione cucine', 'Interni ed esterni', 'Progettazione personalizzata']
  },
  {
    id: '02',
    title: 'Impianti Idrico-Sanitari',
    description: 'Installazione, sostituzione e manutenzione di impianti idraulici e sanitari. La nostra specializzazione principale con esperienza ventennale.',
    features: ['Installazione impianti', 'Sostituzione tubature', 'Manutenzione ordinaria', 'Installazione sanitari']
  },
  {
    id: '03',
    title: 'Installazione Impianti Fotovoltaici',
    description: 'Forniamo e installiamo pannelli fotovoltaici per abitazioni e attività commerciali, riducendo i costi energetici.',
    features: ['Consulenza energetica', 'Installazione pannelli', 'Gestione pratiche', 'Manutenzione impianti']
  },
  {
    id: '04',
    title: 'Manutenzione Caldaie',
    description: 'Manutenzione ordinaria e straordinaria, revisione e sostituzione caldaie di ogni marca e tipologia. Servizio rapido e professionale.',
    features: ['Manutenzione ordinaria', 'Revisione caldaie', 'Sostituzione caldaie', 'Assistenza 7/7']
  },
  {
    id: '05',
    title: 'Progettazione e Redazione',
    description: 'Supporto alla progettazione per interventi nell\'area metropolitana. Dall\'idea al cantiere, ti seguiamo in ogni fase.',
    features: ['Progettazione architettonica', 'Redazione pratiche', 'Direzione lavori', 'Consulenza tecnica']
  },
  {
    id: '06',
    title: 'Manutenzione Generale',
    description: 'Interventi di manutenzione ordinaria su impianti, strutture e finiture per privati e condomini.',
    features: ['Manutenzione impianti', 'Riparazioni strutturali', 'Finiture interne', 'Servizio condomini']
  }
];

const ServiziPage = () => {
  return (
    <div className="bg-[var(--color-arch-black)]">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <img 
          src="/images/1.avif" 
          alt="Servizi Sinergie SRL" 
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
              I NOSTRI SERVIZI
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter">
              COSTRUIAMO IL TUO FUTURO
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 lg:py-32 px-6 md:px-8">
        <div className="max-w-[1920px] mx-auto">
          <div className="space-y-8 md:space-y-12">
            {servicesPage.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 border-b border-white/20 pb-8 lg:pb-12"
              >
                <div className="lg:col-span-2">
                  <span className="text-5xl md:text-7xl font-black text-white/20">{service.id}</span>
                </div>
                <div className="lg:col-span-10">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-4 text-white">
                    {service.title}
                  </h2>
                  <p className="text-base md:text-lg text-gray-300 mb-6 max-w-3xl">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="px-4 py-2 bg-white/10 text-xs font-bold uppercase tracking-wider text-white">
                        {feature}
                      </span>
                    ))}
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
            PRONTO A REALIZZARE IL TUO PROGETTO?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-600">
            Richiedi un preventivo gratuito. Rispondiamo 7 giorni su 7.
          </p>
          <a 
            href="/contatti" 
            className="inline-block px-8 md:px-12 py-4 md:py-5 bg-black text-white font-bold uppercase tracking-wider text-sm md:text-base rounded-full hover:bg-gray-900 transition-colors"
          >
            Richiedi un Preventivo Gratuito →
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServiziPage;
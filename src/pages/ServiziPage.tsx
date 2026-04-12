import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const servicesPage = [
  {
    id: '01',
    title: 'Ristrutturazioni Parziali e Totali',
    description: 'Interveniamo su bagni, cucine, interni ed esterni. Ristrutturazione completa o parziale su misura per ogni esigenza. Il nostro team di esperti ti segue dalla progettazione alla consegna, garantendo massima qualità e rispetto dei tempi concordati.',
    features: ['Ristrutturazione bagni', 'Ristrutturazione cucine', 'Interni ed esterni', 'Progettazione personalizzata']
  },
  {
    id: '02',
    title: 'Impianti Idrico-Sanitari',
    description: 'Installazione, sostituzione e manutenzione di impianti idraulici e sanitari. La nostra specializzazione principale. Lavoriamo con le migliori marche per garantire affidabilità e durata nel tempo.',
    features: ['Installazione impianti', 'Sostituzione tubature', 'Manutenzione ordinaria', 'Installazione sanitari']
  },
  {
    id: '03',
    title: 'Installazione Impianti Fotovoltaici',
    description: 'Forniamo e installiamo pannelli fotovoltaici per abitazioni e attività commerciali, riducendo i costi energetici. Un team specializzato ti segue in tutte le fasi, dalla consulenza all\'installazione.',
    features: ['Consulenza energetica', 'Installazione pannelli', 'Gestione pratiche', 'Manutenzione impianti']
  },
  {
    id: '04',
    title: 'Manutenzione Caldaie',
    description: 'Manutenzione ordinaria e straordinaria, revisione e sostituzione caldaie di ogni marca e tipologia. Servizio rapido e professionale disponibile 7 giorni su 7.',
    features: ['Manutenzione ordinaria', 'Revisione caldaie', 'Sostituzione caldaie', 'Assistenza 7/7']
  },
  {
    id: '05',
    title: 'Progettazione e Redazione',
    description: 'Supporto alla progettazione per interventi nell\'area metropolitana. Dall\'idea al cantiere, ti seguiamo in ogni fase. Collaboriamo con architetti e ingegneri per realizzare i tuoi progetti.',
    features: ['Progettazione architettonica', 'Redazione pratiche', 'Direzione lavori', 'Consulenza tecnica']
  },
  {
    id: '06',
    title: 'Manutenzione Generale',
    description: 'Interventi di manutenzione ordinaria su impianti, strutture e finiture per privati e condomini. Servizio completo per mantenere il tuo immobile in perfette condizioni.',
    features: ['Manutenzione impianti', 'Riparazioni strutturali', 'Finiture interne', 'Servizio condomini']
  }
];

const ServiziPage = () => {
  return (
    <div className="pt-24 md:pt-32 bg-[var(--color-arch-white)]">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 px-6 md:px-8 bg-[var(--color-arch-black)] text-white">
        <div className="max-w-[1920px] mx-auto">
          <div className="text-sm font-semibold tracking-widest uppercase mb-4 flex items-center gap-4 opacity-70">
            <span className="w-2 h-2 bg-white rounded-full" />
            I NOSTRI SERVIZI
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-6">
            COSTRUIAMO IL TUO FUTURO
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-2xl opacity-90">
            Offriamo una gamma completa di servizi di ristrutturazione, impiantistica e manutenzione per privati, condomini e aziende.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 lg:py-32 px-6 md:px-8">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 gap-8 md:gap-12">
            {servicesPage.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 border-b border-gray-200 pb-8 lg:pb-12"
              >
                <div className="lg:col-span-2">
                  <span className="text-4xl md:text-6xl font-black text-gray-200">{service.id}</span>
                </div>
                <div className="lg:col-span-10">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-4">
                    {service.title}
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 mb-6 max-w-3xl">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="px-4 py-2 bg-gray-100 text-xs font-bold uppercase tracking-wider">
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
      <section className="py-16 md:py-24 px-6 md:px-8 bg-[var(--color-arch-black)] text-white">
        <div className="max-w-[1920px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">
            PRONTO A REALIZZARE IL TUO PROGETTO?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Richiedi un preventivo gratuito. Rispondiamo 7 giorni su 7.
          </p>
          <a 
            href="#contatti" 
            className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[var(--color-arch-white)] text-[var(--color-arch-black)] font-bold uppercase tracking-wider text-sm md:text-base rounded-full hover:bg-gray-200 transition-colors"
          >
            Richiedi un Preventivo Gratuito →
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServiziPage;
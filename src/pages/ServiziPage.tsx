import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const servicesPage: Service[] = [
  {
    id: '01',
    title: 'Ristrutturazioni Parziali e Totali',
    description: 'Interveniamo su bagni, cucine, interni ed esterni. Ristrutturazione completa o parziale su misura per ogni esigenza.',
    features: ['Ristrutturazione bagni', 'Ristrutturazione cucine', 'Interni ed esterni', 'Progettazione'],
    image: '/images/1.avif'
  },
  {
    id: '02',
    title: 'Nuove Costruzioni',
    description: 'Realizziamo nuove costruzioni di ogni dimensione, dalle piccole abitazioni ai grandi progetti.',
    features: ['Progettazione', 'Costruzione chiavi in mano', 'Grandi progetti', 'Abitazioni'],
    image: '/images/2.avif'
  },
  {
    id: '03',
    title: 'Impianti Idrico-Sanitari',
    description: 'Installazione, sostituzione e manutenzione di impianti idraulici e sanitari. La nostra specializzazione principale.',
    features: ['Installazione', 'Sostituzione tubature', 'Manutenzione', 'Sanitari'],
    image: '/images/portfolio_building.png'
  },
  {
    id: '04',
    title: 'Installazione Impianti Fotovoltaici',
    description: 'Forniamo e installiamo pannelli fotovoltaici per abitazioni e attività commerciali.',
    features: ['Consulenza energetica', 'Pannelli solari', 'Gestione pratiche', 'Manutenzione'],
    image: '/images/hero_brutalist.png'
  },
  {
    id: '05',
    title: 'Manutenzione Caldaie',
    description: 'Manutenzione ordinaria e straordinaria, caldaie tradizionali, a pellet e ibride. Redazione perizie termotecniche.',
    features: ['Manutenzione', 'Caldaie pellet', 'Caldaie ibride', 'Perizie termotecniche'],
    image: '/images/contact_dome.png'
  },
  {
    id: '06',
    title: 'Rifacimento Tetti e Bonifica',
    description: 'Ristrutturiamo completamente qualsiasi tipologia di tetto. Bonifica da eternit e amianto.',
    features: ['Rifacimento tetti', 'Bonifica amianto', 'Bonifica eternit', 'Sicurezza'],
    image: '/images/about_workspace.png'
  },
  {
    id: '07',
    title: 'Assistenza Pratiche Comunali e Catastali',
    description: 'Supporto tecnico per pratiche comunali e catastali, inclusi cambi di destinazione d\'uso.',
    features: ['Pratiche comunali', 'Pratiche catastali', 'Cambio destinazione uso', 'Burocrazia'],
    image: '/images/jzASxALajnk3J40K71ug7AoDDMw.avif'
  },
  {
    id: '08',
    title: 'Noleggio e Installazione Ponteggi',
    description: 'Noleggio e installazione professionale di ponteggi e parapetti per lavori edili.',
    features: ['Ponteggi', 'Parapetti', 'Installazione', 'Sicurezza'],
    image: '/images/niManU1zLj9iNWkoC4SXUZwuaK8.avif'
  },
  {
    id: '09',
    title: 'Realizzazione Aree Verdi',
    description: 'Progettazione e realizzazione di aree verdi con sistemi di irrigazione automatici.',
    features: ['Giardini', 'Aree verdi', 'Irrigazione', 'Progettazione'],
    image: '/images/gnTOjNhe2Q616OKGknCOzIfQ.avif'
  },
  {
    id: '10',
    title: 'Lavori di Fabbro',
    description: 'Creazione di recinzioni, cancelli, cancellini e strutture metalliche su misura.',
    features: ['Recinzioni', 'Cancelli', 'Cancellini', 'Strutture metalliche'],
    image: '/images/hDRGGfmOv0QBfU3D207pf7ngiWE.avif'
  },
  {
    id: '11',
    title: 'Disotturazioni e Spurghi',
    description: 'Interventi rapidi per disotturazione e spurgo di tombini, wc, lavandini e condotte.',
    features: ['Disotturazione', 'Spurghi', 'Emergenze', 'Condotte'],
    image: '/images/doZoqR7KksNcu3aswTZTcawiIU.avif'
  },
  {
    id: '12',
    title: 'Progettazione e Redazione',
    description: 'Supporto alla progettazione per interventi. Dall\'idea al cantiere, ti seguiamo in ogni fase.',
    features: ['Progettazione', 'Redazione pratiche', 'Direzione lavori', 'Consulenza'],
    image: '/images/DWkmatJGj3XD7iXhiYdI70dERNo.avif'
  },
  {
    id: '13',
    title: 'Manutenzione Generale',
    description: 'Interventi di manutenzione ordinaria su impianti, strutture e finiture per privati e condomini.',
    features: ['Manutenzione impianti', 'Riparazioni', 'Finiture', 'Condomini'],
    image: '/images/IjTsCTG466nJ99Pl5SLqhrVhA.avif'
  }
];

interface ServiceSectionProps {
  service: Service;
  index: number;
}

const ServiceSection = ({ service, index }: ServiceSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  return (
    <section 
      ref={ref} 
      className="min-h-screen flex items-center justify-center py-24 px-6 md:px-8 relative overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-arch-black)] via-transparent to-[var(--color-arch-black)]" />
      </motion.div>

      <div className="relative z-10 max-w-[1920px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-8 md:mb-12 relative"
        >
          <span className="text-6xl md:text-8xl lg:text-9xl font-black text-white/10 absolute left-1/2 -translate-x-1/2 top-0">
            {service.id}
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white relative z-10 pt-8">
            {service.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-[var(--color-arch-gray)] p-6 md:p-10 lg:p-14 rounded-lg max-w-4xl mx-auto backdrop-blur-sm border border-white/10"
        >
          <p className="text-base md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 text-center font-medium leading-relaxed">
            {service.description}
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {service.features.map((feature, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                viewport={{ once: true }}
                className="px-5 py-3 bg-white/10 text-sm md:text-base font-bold uppercase tracking-wider text-white rounded-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-all cursor-default"
              >
                {feature}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12"
        >
          <a 
            href="/contatti"
            className="inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 bg-white text-black font-black uppercase tracking-wider text-sm md:text-base rounded-full hover:bg-gray-200 transition-colors"
          >
            Richiedi Informazioni →
          </a>
        </motion.div>
      </div>

      {index < servicesPage.length - 1 && (
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-white/40 text-3xl">↓</span>
        </motion.div>
      )}
    </section>
  );
};

const ServiziPage = () => {
  return (
    <div className="bg-[var(--color-arch-black)]">
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

      <div className="relative">
        {servicesPage.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}
      </div>

      <section className="py-24 md:py-32 px-6 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/contact_dome.png" alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-[1920px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 md:mb-8 text-white">
              PRONTO A REALIZZARE IL TUO PROGETTO?
            </h2>
            <p className="text-lg md:text-xl mb-8 md:mb-12 text-white/70">
              Rispondiamo 7 giorni su 7. Richiedi un preventivo gratuito.
            </p>
            <a 
              href="/contatti" 
              className="inline-block px-10 md:px-16 py-5 md:py-6 bg-white text-black font-black uppercase tracking-wider text-base md:text-lg rounded-full hover:bg-gray-200 transition-colors"
            >
              Richiedi un Preventivo Gratuito →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiziPage;
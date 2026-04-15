import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-[var(--color-arch-black)] text-[var(--color-arch-white)] py-12 md:py-16 lg:py-24 px-6 md:px-8 border-t border-[#222]">
      <div className="max-w-[1920px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16 lg:mb-24">
          {/* Logo Column */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="text-2xl md:text-3xl lg:text-4xl font-sans font-black tracking-tighter block mb-3 md:mb-4">SINERGIE SRL</Link>
            <p className="text-sm md:text-base text-gray-400 font-medium max-w-xs">
              Dal 1997, costruiamo i vostri sogni. Voi lo immaginate, noi lo rendiamo realtà.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-xs md:text-sm font-bold tracking-widest text-[#555] mb-4 md:mb-6 uppercase">Navigazione</h3>
            <ul className="space-y-2 md:space-y-3 font-semibold text-gray-300">
              <li><Link to="/" className="hover:text-white transition-colors text-sm md:text-base">Home</Link></li>
              <li><Link to="/servizi" className="hover:text-white transition-colors text-sm md:text-base">Servizi</Link></li>
              <li><Link to="/lavori" className="hover:text-white transition-colors text-sm md:text-base">I Nostri Lavori</Link></li>
              <li><Link to="/chi-siamo" className="hover:text-white transition-colors text-sm md:text-base">Chi Siamo</Link></li>
              <li><Link to="/contatti" className="hover:text-white transition-colors text-sm md:text-base">Contatti</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-xs md:text-sm font-bold tracking-widest text-[#555] mb-4 md:mb-6 uppercase">Contatti</h3>
            <ul className="space-y-2 md:space-y-3 font-semibold text-gray-300 text-sm md:text-base">
              <li>Viale Argini — Lagione 48</li>
              <li>Via Lagione 46</li>
              <li>Corso Maggiore 88</li>
              <li className="mt-4">
                <a href="tel:3465389178" className="hover:text-white transition-colors">346/5389178</a>
              </li>
              <li>
                <a href="tel:011350606" className="hover:text-white transition-colors">01 35 06 06</a>
              </li>
              <li>
                <a href="mailto:service@sinergie.srl" className="hover:text-white transition-colors">service@sinergie.srl</a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-xs md:text-sm font-bold tracking-widest text-[#555] mb-4 md:mb-6 uppercase">Servizi</h3>
            <ul className="space-y-2 md:space-y-3 font-semibold text-gray-300 text-sm md:text-base">
              <li>Ristrutturazioni</li>
              <li>Impianti Idrico-Sanitari</li>
              <li>Fotovoltaico</li>
              <li>Manutenzione Caldaie</li>
              <li>Progettazione</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative pt-6 md:pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center text-xs font-bold tracking-widest text-[#555]">
          <p>© 2025 SINERGIE SRL — P.IVA [DA CONFERMARE]</p>
          <Link to="/" className="mt-2 md:mt-0 hover:text-white transition-colors">TORNA SU ↑</Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
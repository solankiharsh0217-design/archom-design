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
            <h3 className="text-xs md:text-sm font-bold tracking-widest text-[#555] mb-4 md:mb-6 uppercase">Sedi Principali</h3>
            <ul className="space-y-2 md:space-y-3 font-semibold text-gray-300 text-sm md:text-base">
              <li>Via Canazza 46 — Legnano MI</li>
              <li>Viale dei Cerri 89 — Cerro Maggiore MI</li>
            </ul>
            <h3 className="text-xs md:text-sm font-bold tracking-widest text-[#555] mb-4 md:mb-6 uppercase mt-6">Telefono</h3>
            <ul className="space-y-2 md:space-y-3 font-semibold text-gray-300 text-sm md:text-base">
              <li>
                <a href="tel:3465389178" className="hover:text-white transition-colors">346/5389178</a>
              </li>
              <li>
                <a href="tel:0331514686" className="hover:text-white transition-colors">0331/514686</a>
              </li>
            </ul>
            <h3 className="text-xs md:text-sm font-bold tracking-widest text-[#555] mb-4 md:mb-6 uppercase mt-6">Email</h3>
            <ul className="space-y-2 md:space-y-3 font-semibold text-gray-300 text-sm md:text-base">
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

          {/* Partners Column */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-xs md:text-sm font-bold tracking-widest text-[#555] mb-4 md:mb-6 uppercase">Partner</h3>
            <ul className="space-y-2 md:space-y-3 font-semibold text-gray-300 text-sm md:text-base">
              <li>Moldil — L'alternativa al Vespaio ventilato</li>
              <li>VF Partner — Il green del futuro</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative pt-6 md:pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center text-xs font-bold tracking-widest text-[#555]">
          <p>© 2025 SINERGIE SRL — P.IVA 12230640158 — Cap. Sociale €70.000</p>
          <Link to="/" className="mt-2 md:mt-0 hover:text-white transition-colors">TORNA SU ↑</Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
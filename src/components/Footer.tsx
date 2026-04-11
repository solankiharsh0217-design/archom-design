const Footer = () => {
  return (
    <footer className="w-full bg-[var(--color-arch-black)] text-[var(--color-arch-white)] py-24 px-8 border-t border-[#222]">
      <div className="max-w-[1920px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-32">
          {/* Logo Column */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-4xl font-sans font-black tracking-tighter mb-4">ARCHFORM</h2>
            <p className="text-gray-400 font-medium max-w-xs">
              Monolithic spaces built for endurance and high-impact feeling.
            </p>
          </div>

          {/* Contact Column */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-sm font-bold tracking-widest text-[#555] mb-6">CONTACT</h3>
            <ul className="space-y-3 font-semibold text-gray-300">
              <li>14 Brutalist Ave, Sector 9</li>
              <li>New Metro, NY 10001</li>
              <li className="mt-6 hover:text-white transition-colors cursor-pointer">studio@archform.com</li>
              <li className="hover:text-white transition-colors cursor-pointer">+1 234 567 8900</li>
            </ul>
          </div>

          {/* Sitemap Column */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-sm font-bold tracking-widest text-[#555] mb-6">SITEMAP</h3>
            <ul className="space-y-3 font-semibold text-gray-300">
              {['Home', 'Studio', 'Projects', 'Services', 'Journals'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors uppercase">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Column */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-sm font-bold tracking-widest text-[#555] mb-6">SOCIALS</h3>
            <ul className="space-y-3 font-semibold text-gray-300">
              {['Instagram', 'X (Twitter)', 'LinkedIn', 'Behance'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors uppercase">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center text-xs font-bold tracking-widest text-[#555]">
          <p>© 2026 ARCHFORM STUDIO</p>
          <p className="mt-4 md:mt-0 cursor-pointer hover:text-white transition-colors">BACK TO TOP ↑</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
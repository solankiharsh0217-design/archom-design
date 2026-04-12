import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white">
        <div className="flex justify-between items-center px-6 md:px-8 py-4 md:py-6 max-w-[1920px] mx-auto">
          {/* Logo */}
          <Link to="/" className="font-sans font-bold text-lg md:text-xl tracking-tighter cursor-pointer z-50" onClick={() => setIsOpen(false)}>
            SINERGIE SRL
          </Link>

          {/* Desktop Center Links (Hidden on small screens) */}
          <div className="hidden md:flex gap-8 lg:gap-12 font-sans text-xs md:text-sm font-semibold tracking-wider">
            <Link to="/" className="hover:opacity-70 transition-opacity">HOME</Link>
            <Link to="/servizi" className="hover:opacity-70 transition-opacity">SERVIZI</Link>
            <Link to="/lavori" className="hover:opacity-70 transition-opacity">LAVORI</Link>
            <Link to="/chi-siamo" className="hover:opacity-70 transition-opacity">CHI SIAMO</Link>
            <Link to="/contatti" className="hover:opacity-70 transition-opacity">CONTATTI</Link>
          </div>

          {/* Right Area: Contact + Hamburger */}
          <div className="flex items-center gap-4 md:gap-6 z-50">
            <Link to="/contatti" className="hidden sm:block text-xs md:text-sm font-bold tracking-wider hover:opacity-70 transition-opacity">
              CONTATTACI
            </Link>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center items-center gap-[5px] md:gap-[6px] w-8 md:w-10 h-8 md:h-10 group"
            >
              <span className={`h-[2px] bg-white transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-[7px] md:translate-y-[8px] w-7 md:w-8' : 'w-7 md:w-8 group-hover:w-5 md:group-hover:w-6'}`} />
              <span className={`h-[2px] bg-white transition-all duration-300 w-7 md:w-8 ${isOpen ? 'opacity-0' : 'group-hover:w-9 md:group-hover:w-10'}`} />
              <span className={`h-[2px] bg-white transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-[7px] md:-translate-y-[8px] w-7 md:w-8' : 'w-7 md:w-8 group-hover:w-4 md:group-hover:w-5'}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%', transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[var(--color-arch-black)] text-[var(--color-arch-white)] flex flex-col justify-center items-center"
          >
            <div className="flex flex-col space-y-6 md:space-y-8 text-center">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-4xl md:text-6xl lg:text-8xl font-sans font-black tracking-tighter hover:text-gray-400 transition-colors">HOME</Link>
              <Link to="/servizi" onClick={() => setIsOpen(false)} className="text-4xl md:text-6xl lg:text-8xl font-sans font-black tracking-tighter hover:text-gray-400 transition-colors">SERVIZI</Link>
              <Link to="/lavori" onClick={() => setIsOpen(false)} className="text-4xl md:text-6xl lg:text-8xl font-sans font-black tracking-tighter hover:text-gray-400 transition-colors">LAVORI</Link>
              <Link to="/chi-siamo" onClick={() => setIsOpen(false)} className="text-4xl md:text-6xl lg:text-8xl font-sans font-black tracking-tighter hover:text-gray-400 transition-colors">CHI SIAMO</Link>
              <Link to="/contatti" onClick={() => setIsOpen(false)} className="text-4xl md:text-6xl lg:text-8xl font-sans font-black tracking-tighter hover:text-gray-400 transition-colors">CONTATTI</Link>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-8 md:bottom-10 left-8 md:left-10 text-xs md:text-sm tracking-wider font-semibold opacity-50"
            >
              © 2025 SINERGIE SRL
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
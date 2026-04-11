import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white">
        <div className="flex justify-between items-center px-8 py-6 max-w-[1920px] mx-auto">
          {/* Logo */}
          <div className="font-sans font-bold text-xl tracking-tighter cursor-pointer z-50" onClick={() => setIsOpen(false)}>
            ARCHFORM
          </div>

          {/* Desktop Center Links (Hidden on small screens) */}
          <div className="hidden md:flex gap-12 font-sans text-sm font-semibold tracking-wider">
            {['HOME', 'STUDIO', 'PROJECTS', 'JOURNALS', 'GALLERY'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:opacity-70 transition-opacity">
                {item}
              </a>
            ))}
          </div>

          {/* Right Area: Contact + Hamburger */}
          <div className="flex items-center gap-6 z-50">
            <a href="#contact" className="hidden sm:block text-sm font-bold tracking-wider hover:opacity-70 transition-opacity">
              CONTACT US
            </a>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center items-center gap-[6px] w-10 h-10 group"
            >
              <span className={`h-[2px] bg-white transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-[8px] w-8' : 'w-8 group-hover:w-6'}`} />
              <span className={`h-[2px] bg-white transition-all duration-300 w-8 ${isOpen ? 'opacity-0' : 'group-hover:w-10'}`} />
              <span className={`h-[2px] bg-white transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-[8px] w-8' : 'w-8 group-hover:w-4'}`} />
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
            <div className="flex flex-col space-y-6 text-center">
              {['HOME', 'STUDIO', 'PROJECTS', 'JOURNALS', 'GALLERY', 'CONTACT'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10, transition: { delay: index * 0.05, duration: 0.2 } }}
                  transition={{ delay: 0.4 + (index * 0.1), duration: 0.5, ease: "easeOut" }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    onClick={() => setIsOpen(false)}
                    className="text-6xl md:text-8xl font-sans font-black tracking-tighter hover:text-gray-400 transition-colors"
                  >
                    {item}
                  </a>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-10 left-10 text-sm tracking-wider font-semibold opacity-50"
            >
              © 2026 ARCHFORM STUDIO
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
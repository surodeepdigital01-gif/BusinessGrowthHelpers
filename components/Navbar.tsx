
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onBookClick: () => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookClick, currentPage, setCurrentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Results', id: 'results' },
    { name: 'Process', id: 'process' },
    { name: 'About', id: 'about' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
      {/* Announcement Banner */}
      <div className="bg-blue-950 text-white py-2 px-4 text-center text-[10px] md:text-xs font-inter font-bold uppercase tracking-[0.3em]">
        Limited Availability: Only 3 New Clinic Partners Accepted for March 2026
      </div>
      
      <div className={`transition-all duration-300 ${scrolled ? 'py-4 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100' : 'py-6 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        <div 
          className="flex items-center gap-2 md:gap-3 cursor-pointer group shrink-0"
          onClick={() => handleNavClick('home')}
        >
          <Logo className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-950" />
          <span className="text-sm sm:text-lg md:text-2xl font-sora font-semibold tracking-tighter text-blue-950 whitespace-nowrap">
            BusinessGrowth<span className="text-[#FBAA19]">Helpers</span>
          </span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-xs font-inter font-normal uppercase tracking-[0.2em] flex-1 justify-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`transition-all relative py-1 whitespace-nowrap ${
                currentPage === link.id ? 'text-blue-600' : 'text-slate-400 hover:text-blue-950'
              }`}
            >
              {link.name}
              {currentPage === link.id && (
                <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBookClick}
            className="hidden sm:block bg-blue-950 hover:bg-blue-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-[14px] font-inter font-medium uppercase tracking-widest transition-all shadow-2xl shadow-blue-900/20 whitespace-nowrap"
          >
            Get My Clinic Growth Audit
          </motion.button>
          
          <button 
            className="md:hidden p-2 text-blue-950 relative z-[70]" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>
    </div>

      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={`md:hidden fixed inset-0 z-[60] bg-white p-6 pt-24 overflow-y-auto ${mobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="flex flex-col gap-8 items-center text-center pb-12">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-3xl sm:text-4xl font-sora font-semibold uppercase tracking-tighter ${
                currentPage === link.id ? 'text-blue-600' : 'text-blue-950'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => { onBookClick(); setMobileMenuOpen(false); }}
            className="w-full max-w-xs bg-blue-950 text-white px-6 py-5 rounded-2xl text-lg font-inter font-medium uppercase tracking-widest shadow-2xl mt-4"
          >
            Get My Clinic Growth Audit
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

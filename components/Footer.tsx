
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Facebook, Instagram } from 'lucide-react';

import Logo from './Logo';

interface FooterProps {
  onBookClick: () => void;
  onPageChange: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onBookClick, onPageChange }) => {
  const handleLinkClick = (page: string) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-24 px-6 border-t border-slate-100 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* SECTION 11 — FINAL CTA */}
        <div className="bg-blue-950 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 lg:p-24 text-center mb-32 relative overflow-hidden shadow-2xl shadow-blue-950/20">
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-white text-3xl sm:text-5xl lg:text-7xl font-sora font-semibold mb-8 md:mb-10 tracking-tighter leading-[1.1] md:leading-[1]">
              Capture Every Patient. <br className="hidden lg:block" /> Grow Your Clinic Automatically.
            </h2>
            <p className="text-blue-100 text-lg md:text-2xl mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed font-inter font-normal text-[18px]">
              Stop losing patients to missed calls. Install an AI system that works 24/7 to book patients while you focus on care.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onBookClick}
              className="w-full sm:w-auto bg-white text-blue-950 px-8 py-4 sm:px-12 sm:py-6 rounded-xl sm:rounded-2xl text-[16px] font-inter font-medium uppercase tracking-widest hover:bg-blue-50 transition-all shadow-2xl"
            >
              Get Your Free Clinic Growth Audit
            </motion.button>
            
            <div className="mt-16 flex flex-col items-center gap-2 text-blue-400 font-inter font-bold text-xs uppercase tracking-[0.3em]">
              <p>Limited implementation slots available each month.</p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <div 
              className="flex items-center gap-2 sm:gap-3 mb-10 cursor-pointer group"
              onClick={() => handleLinkClick('home')}
            >
              <Logo className="w-8 h-8 sm:w-10 sm:h-10 text-blue-950" />
              <span className="text-xl sm:text-2xl font-sora font-semibold tracking-tighter text-blue-950">
                BusinessGrowth<span className="text-[#FBAA19]">Helpers</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm sm:text-base max-w-sm mb-10 leading-relaxed font-inter font-normal text-[16px]">
              Helping clinics capture more patients and increase revenue through intelligent AI operations.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61587260380164" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl border border-slate-100 flex items-center justify-center hover:bg-blue-50 transition-all text-slate-400 hover:text-blue-950" 
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/businessgrowthhelpers?igsh=MXM5bzFtNnd2cXRrcw==" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl border border-slate-100 flex items-center justify-center hover:bg-blue-50 transition-all text-slate-400 hover:text-blue-950" 
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-sora font-semibold mb-10 text-blue-950 uppercase tracking-[0.3em] text-xs">Solutions</h4>
            <ul className="space-y-5 text-slate-500 text-base font-inter font-normal">
              <li><button onClick={() => handleLinkClick('voice-receptionist')} className="hover:text-blue-950 transition-colors text-left">AI Voice Receptionist</button></li>
              <li><button onClick={() => handleLinkClick('whatsapp-automation')} className="hover:text-blue-950 transition-colors text-left">WhatsApp Automation</button></li>
              <li><button onClick={() => handleLinkClick('booking-engine')} className="hover:text-blue-950 transition-colors text-left">Smart Booking Engine</button></li>
              <li><button onClick={() => handleLinkClick('patient-followups')} className="hover:text-blue-950 transition-colors text-left">Patient Follow-Ups</button></li>
              <li><button onClick={() => handleLinkClick('social-media')} className="hover:text-blue-950 transition-colors text-left">Social Media Management</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sora font-semibold mb-10 text-blue-950 uppercase tracking-[0.3em] text-xs">Company</h4>
            <ul className="space-y-5 text-slate-500 text-base font-inter font-normal">
              <li><button onClick={() => handleLinkClick('about')} className="hover:text-blue-950 transition-colors text-left">About Us</button></li>
              <li><button onClick={() => handleLinkClick('results')} className="hover:text-blue-950 transition-colors text-left">Case Studies</button></li>
              <li><button onClick={() => handleLinkClick('privacy')} className="hover:text-blue-950 transition-colors text-left">Privacy Policy</button></li>
              <li><button onClick={() => handleLinkClick('terms')} className="hover:text-blue-950 transition-colors text-left">Terms of Service</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-16 border-t border-slate-100 text-center flex flex-col items-center gap-8">
          <div className="space-y-3">
            <p className="text-blue-950 font-inter font-bold text-sm uppercase tracking-[0.2em]">AI Systems Architecture for Established Clinics</p>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <div className="h-px w-12 bg-slate-100"></div>
            <div className="text-slate-400 text-xs font-inter font-normal uppercase tracking-widest flex flex-col items-center gap-4">
              <p className="text-[10px] opacity-60 tracking-[0.3em]">AI-Powered Patient Acquisition & Growth Consultant Surodeep Oraon</p>
              <p>&copy; {new Date().getFullYear()} BusinessGrowthHelpers. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

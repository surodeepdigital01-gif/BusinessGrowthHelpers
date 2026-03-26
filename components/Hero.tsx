
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, FileSearch, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onAuditClick: () => void;
}

// Hero component for the dental growth assistant landing page
const Hero: React.FC<HeroProps> = ({ onAuditClick }) => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-40 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest"
            >
              AI-Powered Clinic Infrastructure
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-sora font-semibold text-blue-950 leading-[1.1] mb-8 tracking-tighter">
              Stop Losing Patients to <br />
              <span className="text-blue-600">Missed Calls and Slow Replies</span>
            </h1>
            
            <p className="text-lg md:text-[18px] font-inter font-normal text-slate-500 mb-10 leading-relaxed">
              Install an AI-powered patient operations system that captures calls, replies instantly on WhatsApp, and increases clinic bookings 10–40% automatically.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "AI voice receptionist answers every call",
                "WhatsApp automation responds instantly",
                "Smart booking system converts inquiries"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-slate-700 font-inter font-normal text-[16px]">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col gap-6">
              <button
                onClick={onAuditClick}
                className="w-full sm:w-auto px-8 md:px-10 py-5 rounded-xl bg-blue-950 text-white font-inter font-medium text-[16px] hover:bg-blue-900 transition-all shadow-2xl shadow-blue-900/20 active:scale-95 group flex items-center justify-center gap-3"
              >
                Get Your Free Clinic Growth Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-slate-400 text-xs font-inter font-bold uppercase tracking-widest">
                Built for clinics receiving inquiries through Google, referrals, and social media.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 bg-white p-4">
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop" 
                alt="Doctor working on laptop managing clinic operations" 
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-[2rem]"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Metric */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-6 lg:-right-8 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 hidden md:block"
            >
              <p className="text-blue-600 font-sora font-bold text-5xl tracking-tighter mb-1">40%</p>
              <p className="text-[10px] text-slate-400 font-inter font-bold uppercase tracking-widest">Booking Increase</p>
            </motion.div>
            
            {/* Floating Metric 2 */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-12 -left-6 lg:-left-8 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 hidden md:block"
            >
              <p className="text-blue-950 font-sora font-bold text-5xl tracking-tighter mb-1">24/7</p>
              <p className="text-[10px] text-slate-400 font-inter font-bold uppercase tracking-widest">AI Patient Support</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>
    </section>
  );
};

export default Hero;
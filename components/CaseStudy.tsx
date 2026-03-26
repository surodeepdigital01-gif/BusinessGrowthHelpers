
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, PhoneMissed, CalendarCheck, Clock } from 'lucide-react';

const CaseStudy: React.FC = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] sm:rounded-[3rem] border border-slate-100 overflow-hidden shadow-2xl"
        >
          <div className="p-6 sm:p-10 md:p-20">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 md:mb-10">
              <span className="bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]">Real Clinic Result</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-sora font-semibold text-blue-950 mb-8 md:mb-12 leading-[1.1] md:leading-[1] tracking-tighter">
              30% increase in bookings within 52 days
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-12 md:mb-16">
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <p className="text-xs font-inter font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Before</p>
                <div className="space-y-2">
                  <p className="text-2xl font-sora font-bold text-blue-950">110 calls per month</p>
                  <p className="text-2xl font-sora font-bold text-red-500">38 missed calls</p>
                </div>
              </div>
              
              <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
                <p className="text-xs font-inter font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">After</p>
                <div className="space-y-2">
                  <p className="text-2xl font-sora font-bold text-blue-950">9 missed calls</p>
                  <p className="text-2xl font-sora font-bold text-blue-600">30% Booking Increase</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-8 md:gap-10 pt-8 md:pt-12 border-t border-slate-100 text-center md:text-left">
              <div className="space-y-2">
                <p className="text-blue-950 font-sora font-semibold text-lg sm:text-xl tracking-tight">
                  System deployed without increasing marketing spend.
                </p>
              </div>
              <button className="w-full md:w-auto whitespace-nowrap bg-blue-950 text-white px-8 py-4 sm:px-12 sm:py-6 rounded-xl sm:rounded-2xl font-inter font-medium text-[16px] uppercase tracking-widest hover:bg-blue-900 transition-all flex items-center justify-center gap-4 shadow-2xl shadow-blue-900/20 group">
                Get Your Free Clinic Growth Audit <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Subtle Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>
    </section>
  );
};

export default CaseStudy;

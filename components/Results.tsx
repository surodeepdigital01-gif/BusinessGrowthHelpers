
import React from 'react';
import { motion } from 'framer-motion';
import { Star, BarChart3 } from 'lucide-react';

const Results: React.FC = () => {
  return (
    <section id="results" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[40px] font-sora font-semibold text-blue-950 mb-6 tracking-tighter"
          >
            What This Means for Your Clinic
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-10 md:p-20 rounded-[2rem] sm:rounded-[3rem] border border-slate-100 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <BarChart3 className="w-48 h-48" />
            </div>
            
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="space-y-4 md:space-y-8">
                  <div className="p-6 md:p-8 bg-slate-50 rounded-2xl md:rounded-3xl border border-slate-100">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-400 font-inter font-bold mb-3 md:mb-4">Average Treatment Value</p>
                    <p className="text-4xl md:text-5xl font-sora font-bold text-blue-950 tracking-tighter">₹6,000</p>
                  </div>
                  <div className="p-6 md:p-8 bg-slate-50 rounded-2xl md:rounded-3xl border border-slate-100">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-400 font-inter font-bold mb-3 md:mb-4">Additional Patients / Month</p>
                    <p className="text-4xl md:text-5xl font-sora font-bold text-blue-600 tracking-tighter">40+</p>
                  </div>
                </div>
                
                <div className="text-center md:text-left py-4 md:py-0">
                  <p className="text-slate-400 text-[10px] md:text-sm font-inter font-bold uppercase tracking-[0.3em] mb-4">Resulting In</p>
                  <p className="text-4xl sm:text-6xl md:text-7xl font-sora font-bold text-blue-950 mb-6 tracking-tighter">₹2,40,000</p>
                  <p className="text-lg md:text-xl text-slate-500 font-inter font-normal text-[16px]">Additional Monthly Revenue</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>
    </section>
  );
};

export default Results;
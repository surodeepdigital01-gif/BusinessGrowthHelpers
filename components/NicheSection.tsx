
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, BarChart3 } from 'lucide-react';

const NicheSection: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brightBlue-50 border border-brightBlue-100 text-brightBlue-600 text-xs font-black uppercase tracking-[0.3em]">
              Niche Specification
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-navy-950 mb-8 tracking-tighter leading-[1]">
              Built for Clinics Already <br />
              <span className="text-brightBlue-600">Generating Demand</span>
            </h2>
            <p className="text-slate-500 text-xl md:text-2xl font-medium leading-relaxed mb-10">
              The systems are engineered for established clinics receiving consistent inquiry volume through referrals and organic growth.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-brightBlue-600/20 transition-all">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-brightBlue-600 shrink-0 shadow-sm">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-navy-950 font-black text-base uppercase tracking-widest mb-1">Optimization Focus</h4>
                  <p className="text-slate-500 text-base font-medium">The infrastructure optimizes capture and conversion — not traffic generation.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-brightBlue-600"></div>
              <div className="space-y-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-50 pb-8 gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-2">System Input</p>
                    <p className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight">Existing Patient Demand</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-50 pb-8 gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-2">System Output</p>
                    <p className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight">Confirmed Appointments</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-brightBlue-50 flex items-center justify-center text-brightBlue-600 shrink-0">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-widest leading-relaxed">
                    *The infrastructure is designed to maximize the ROI of existing traffic by eliminating leakage in the patient journey.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brightBlue-600/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NicheSection;

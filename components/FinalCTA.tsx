
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onAuditClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onAuditClick }) => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-navy-900 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-brightBlue-500"></div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold font-sora text-white mb-8 leading-tight tracking-tight">
            Ready to Plug the <br className="hidden md:block" />
            <span className="text-amberAccent-500">Revenue Leaks</span> in Your Clinic?
          </h2>
          
          <p className="text-slate-400 text-xl font-medium mb-12 max-w-2xl mx-auto">
            Most clinics don’t need more traffic. They need better systems. Request your free Clinic Growth Audit today.
          </p>
          
          <button
            onClick={onAuditClick}
            className="px-12 py-6 rounded-2xl bg-brightBlue-500 text-navy-900 font-black text-xl hover:bg-brightBlue-600 transition-all shadow-2xl shadow-brightBlue-500/20 active:scale-95 group flex items-center justify-center gap-3 mx-auto"
          >
            Get Your Free Clinic Growth Audit
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="mt-8 text-slate-500 text-sm font-bold uppercase tracking-widest">
            Limited availability for monthly audits.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;

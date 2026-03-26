
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

const QualificationSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-navy-950 mb-6 tracking-tighter"
          >
            Is This System Right for Your Clinic?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg md:text-xl font-medium"
          >
            Our AI Operations System is designed for clinics that:
          </motion.p>
        </div>

        <div className="grid md:grid-cols-1 gap-4 mb-12">
          {[
            "Receive 80+ calls or inquiries per month",
            "Rely on referrals and organic Google traffic",
            "Miss patient calls or delay responses",
            "Want automation without hiring more staff",
            "Care about operational efficiency"
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm"
            >
              <CheckCircle2 className="text-green-500 w-6 h-6 shrink-0" />
              <span className="text-navy-950 font-bold text-lg">{item}</span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-red-50 border border-red-100 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <XCircle className="text-red-500 w-6 h-6" />
            <p className="text-red-900 font-black uppercase tracking-widest text-sm">Important Note</p>
          </div>
          <p className="text-red-800 font-bold text-lg">
            Not designed for clinics that need traffic generation or marketing campaigns.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QualificationSection;


import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: "Clinic Growth Audit",
    desc: "We analyze your current call and message volume to identify leaks."
  },
  {
    title: "Custom AI Training",
    desc: "We train the AI on your clinic's services, pricing, and scheduling rules."
  },
  {
    title: "System Integration",
    desc: "We connect the AI to your phone lines, WhatsApp, and calendar."
  },
  {
    title: "Go-Live & Optimization",
    desc: "The system starts capturing patients while we optimize for conversion."
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 px-6 relative bg-blue-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[40px] font-sora font-semibold mb-6 tracking-tighter"
          >
            How We Get You Results
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-3xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-all"
            >
              <div className="text-5xl font-sora font-bold text-white/10 mb-6 group-hover:text-blue-500/20 transition-all">0{index + 1}</div>
              <h3 className="text-xl font-sora font-semibold mb-4 tracking-tight">{step.title}</h3>
              <p className="text-blue-100/60 font-inter font-normal text-[16px] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

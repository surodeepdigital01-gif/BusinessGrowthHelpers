
import React from 'react';
import { motion } from 'framer-motion';

const NextStepsSection: React.FC = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Operational Review",
      description: "We analyze your clinic’s call flow, inquiry handling, and booking process."
    },
    {
      step: "Step 2",
      title: "Revenue Leakage Mapping",
      description: "We identify missed calls, response delays, and follow-up gaps affecting bookings."
    },
    {
      step: "Step 3",
      title: "AI System Architecture",
      description: "We design a tailored automation system for your clinic."
    },
    {
      step: "Step 4",
      title: "Deployment & Optimization",
      description: "Our team installs and optimizes the system inside your clinic operations."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold font-sora text-navy-900 mb-6 tracking-tight"
          >
            What Happens After You Request a Clinic Growth Audit?
          </motion.h2>
          <p className="text-slate-500 text-xl font-medium">Clear steps to operational efficiency.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm relative group hover:border-brightBlue-500/30 transition-all"
            >
              <div className="text-brightBlue-600 font-bold text-xs uppercase tracking-widest mb-4">{item.step}</div>
              <h3 className="text-2xl font-extrabold font-sora text-navy-900 mb-4 leading-tight">{item.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NextStepsSection;

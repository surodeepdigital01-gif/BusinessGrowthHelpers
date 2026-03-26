
import React from 'react';
import { motion } from 'framer-motion';

const ImplementationSection: React.FC = () => {
  const steps = [
    {
      title: "Operational Review",
      description: "We analyze your clinic’s call flow, inquiry handling, and booking process.",
      step: "01"
    },
    {
      title: "Revenue Leakage Mapping",
      description: "We identify missed calls, response delays, and follow-up gaps.",
      step: "02"
    },
    {
      title: "System Deployment",
      description: "We install the AI Voice, WhatsApp, and Booking infrastructure.",
      step: "03"
    },
    {
      title: "Optimization & Scale",
      description: "We monitor results and fine-tune the AI for maximum conversion.",
      step: "04"
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold font-sora text-navy-900 mb-6 tracking-tight"
          >
            What Happens After You Apply?
          </motion.h2>
          <p className="text-slate-500 text-xl font-medium">A transparent path to operational excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm"
            >
              <div className="text-6xl font-black font-sora text-brightBlue-500/10 absolute top-6 right-8">
                {step.step}
              </div>
              <h3 className="text-2xl font-extrabold font-sora text-navy-900 mb-4 relative z-10">
                {step.title}
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed relative z-10">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;

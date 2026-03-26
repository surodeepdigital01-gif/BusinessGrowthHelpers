
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PhoneOff, Zap } from 'lucide-react';

const SocialProof: React.FC = () => {
  const stats = [
    {
      label: "booking increase",
      value: "30%",
      icon: <TrendingUp className="w-8 h-8 text-brightBlue-500" />
    },
    {
      label: "fewer missed calls",
      value: "76%",
      icon: <PhoneOff className="w-8 h-8 text-brightBlue-500" />
    },
    {
      label: "patient response",
      value: "24/7",
      icon: <Zap className="w-8 h-8 text-brightBlue-500" />
    }
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 p-4 bg-brightBlue-50 rounded-2xl">
                {stat.icon}
              </div>
              <div className="text-5xl font-extrabold font-sora text-navy-900 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

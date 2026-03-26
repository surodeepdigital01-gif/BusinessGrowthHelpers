
import React from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, TrendingUp, Users } from 'lucide-react';

const RevenueImpact: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-navy-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brightBlue-500/5 skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-extrabold font-sora mb-8 leading-tight tracking-tight"
            >
              The Real Revenue Impact of <span className="text-amberAccent-500">AI Operations</span>
            </motion.h2>
            <p className="text-slate-400 text-xl font-medium mb-12">
              Most clinics focus on getting more leads. We focus on converting the leads you already have.
            </p>

            <div className="space-y-8">
              {[
                { label: "Average Treatment Value", value: "₹6,000", icon: <IndianRupee className="w-6 h-6" /> },
                { label: "Additional Monthly Bookings", value: "40+", icon: <Users className="w-6 h-6" /> },
                { label: "Potential Monthly Revenue Increase", value: "₹240,000", icon: <TrendingUp className="w-6 h-6" /> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-brightBlue-500 border border-white/10">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">{item.label}</p>
                    <p className="text-3xl font-extrabold font-sora text-white tracking-tight">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-xl"
          >
            <p className="text-amberAccent-500 font-black text-6xl mb-6 font-sora">10-40%</p>
            <p className="text-2xl font-extrabold font-sora mb-8">Increase in bookings without spending an extra rupee on ads.</p>
            <div className="h-1 w-24 bg-brightBlue-500 rounded-full mb-8"></div>
            <p className="text-slate-400 font-medium leading-relaxed">
              By capturing missed calls and replying instantly on WhatsApp, you stop your competitors from taking your patients.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RevenueImpact;

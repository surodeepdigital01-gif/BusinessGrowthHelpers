
import React from 'react';
import { motion } from 'framer-motion';

const painPoints = [
  "Word-of-mouth referrals",
  "Inconsistent walk-ins",
  "Untracked ad spending",
  "Manual follow-ups",
  "No clear revenue forecasting"
];

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-[40px] font-sora font-semibold text-blue-950 mb-8 tracking-tighter leading-tight">
              Most Clinics Lose Patients Before They Even Speak to a Doctor
            </h2>
            <div className="space-y-6">
              {[
                "Missed calls during busy hours",
                "Slow replies to WhatsApp messages",
                "No automated booking system",
                "No follow-up reminders",
                "No visibility into patient inquiries"
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-slate-700 font-inter font-normal text-[16px]">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-2xl text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-red-500"></div>
              <p className="text-6xl sm:text-8xl font-sora font-bold text-blue-950 mb-4 tracking-tighter">70%</p>
              <p className="text-xl text-slate-500 font-inter font-normal text-[16px] leading-relaxed">
                of patients will call the next clinic if their call isn’t answered within 5 minutes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>
    </section>
  );
};

export default ProblemSection;

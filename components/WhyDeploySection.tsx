
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

const WhyDeploySection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold font-sora text-navy-900 mb-8 tracking-tight">
              Why Clinics Deploy AI Operations Systems
            </h2>
            <p className="text-slate-600 text-xl font-medium mb-10">
              Even successful clinics lose patients due to operational inefficiencies:
            </p>
            <div className="space-y-6 mb-10">
              {[
                "Missed calls during busy hours",
                "Delayed WhatsApp replies",
                "No structured follow-up process",
                "Manual appointment management",
                "No visibility on inquiry conversion"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-700 font-semibold">
                  <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-navy-900 p-10 md:p-16 rounded-[3rem] text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <CheckCircle2 className="w-48 h-48" />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold font-sora mb-8 relative z-10">Our AI systems ensure:</h3>
            <div className="space-y-6 mb-12 relative z-10">
              {[
                "Every inquiry is captured",
                "Patients receive instant responses",
                "Bookings happen faster",
                "Staff workload is reduced"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-brightBlue-500 w-6 h-6 shrink-0" />
                  <span className="text-xl font-bold">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-8 border-t border-white/10 relative z-10">
              <p className="text-amberAccent-500 font-bold uppercase tracking-widest text-xs mb-2">The Bottom Line:</p>
              <p className="text-2xl md:text-3xl font-extrabold font-sora leading-tight">More booked appointments without increasing marketing spend.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyDeploySection;

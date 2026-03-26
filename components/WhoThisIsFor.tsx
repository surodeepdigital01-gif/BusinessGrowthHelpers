import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

const WhoThisIsFor: React.FC = () => {
  return (
    <section className="py-24 px-6 relative bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[40px] font-sora font-semibold text-blue-950 mb-6 tracking-tighter"
          >
            Is This Right for Your Clinic?
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm"
          >
            <h3 className="text-2xl font-sora font-semibold text-blue-950 mb-8 flex items-center gap-3">
              <CheckCircle2 className="text-emerald-500 w-8 h-8" />
              Who This Is For
            </h3>
            <ul className="space-y-6">
              {[
                "Clinics receiving 10+ inquiries per month",
                "Clinics using Google Ads or Social Media",
                "Clinics with a dedicated reception team",
                "Clinics looking to scale without hiring more staff"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-600 font-inter font-normal text-[16px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm"
          >
            <h3 className="text-2xl font-sora font-semibold text-blue-950 mb-8 flex items-center gap-3">
              <XCircle className="text-red-500 w-8 h-8" />
              Who This Is Not For
            </h3>
            <ul className="space-y-6">
              {[
                "Brand new clinics with zero inquiry volume",
                "Clinics not interested in using WhatsApp",
                "Clinics that don't want to automate bookings",
                "Clinics looking for 'cheap' manual solutions"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-600 font-inter font-normal text-[16px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>
    </section>
  );
};

export default WhoThisIsFor;

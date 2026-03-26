
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Phone, MessageSquare, CheckCircle2, ArrowDown } from 'lucide-react';

const PatientBehavior: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[40px] font-sora font-semibold text-blue-950 mb-6 tracking-tighter"
          >
            How Patients Choose Clinics Today
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-8 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                <Search className="w-10 h-10" />
              </div>
              <p className="text-lg font-inter font-normal text-blue-950 text-[16px]">Patient searches Google/Maps/social media</p>
            </motion.div>

            <ArrowDown className="text-slate-300 w-8 h-8" />

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-10 h-10" />
              </div>
              <p className="text-lg font-inter font-normal text-blue-950 text-[16px]">Finds clinic phone number</p>
            </motion.div>

            <ArrowDown className="text-slate-300 w-8 h-8" />

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-10 h-10" />
              </div>
              <p className="text-lg font-inter font-normal text-blue-950 text-[16px]">Calls or sends WhatsApp message</p>
            </motion.div>

            <ArrowDown className="text-slate-300 w-8 h-8" />

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-blue-600 shadow-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <p className="text-xl font-sora font-semibold text-blue-950">Chooses the clinic that responds first</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-20 p-8 rounded-3xl bg-blue-950 text-white text-center shadow-2xl shadow-blue-900/20"
          >
            <p className="text-2xl md:text-3xl font-sora font-semibold tracking-tight">
              The clinic that responds fastest wins the patient.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PatientBehavior;

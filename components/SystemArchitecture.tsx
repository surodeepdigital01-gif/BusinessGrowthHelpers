
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Bot, Calendar, Bell, BarChart3, ArrowRight, ArrowDown, Mic } from 'lucide-react';

const steps = [
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Patient Inquiry",
    desc: "Incoming signal from phone or WhatsApp."
  },
  {
    icon: <Mic className="w-8 h-8" />,
    title: "AI Voice Receptionist",
    desc: "Instant call capture and response."
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "WhatsApp Automation",
    desc: "Immediate reply and qualification."
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Smart Booking Engine",
    desc: "Direct calendar scheduling."
  },
  {
    icon: <Bell className="w-8 h-8" />,
    title: "Follow-Up Automation",
    desc: "Confirmation and no-show reduction."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Conversion Analytics Dashboard",
    desc: "Real-time performance tracking."
  }
];

const SystemArchitecture: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[40px] font-sora font-semibold text-blue-950 mb-6 tracking-tighter"
          >
            How the System Works
          </motion.h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm group hover:border-blue-600/20 transition-all"
              >
                <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {step.icon}
                </div>
                <h3 className="text-xl font-sora font-semibold text-blue-950 mb-2 tracking-tight">{step.title}</h3>
                <p className="text-slate-500 font-inter font-normal text-[16px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Subtle Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>
    </section>
  );
};

export default SystemArchitecture;

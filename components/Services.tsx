
import React from 'react';
import { motion } from 'framer-motion';
import { Layout, MessageSquare, Search, Mic, Zap } from 'lucide-react';

const services = [
  {
    title: "AI Voice Receptionist",
    desc: "Answers patient calls automatically, even outside clinic hours.",
    icon: <Mic className="w-8 h-8" />
  },
  {
    title: "WhatsApp Automation",
    desc: "Instant replies and automated follow-ups.",
    icon: <MessageSquare className="w-8 h-8" />
  },
  {
    title: "Smart Booking Engine",
    desc: "Schedules appointments directly into the clinic calendar.",
    icon: <Zap className="w-8 h-8" />
  },
  {
    title: "Follow-Up Automation",
    desc: "Automatically confirms bookings and reduces no-shows.",
    icon: <Layout className="w-8 h-8" />
  },
  {
    title: "Analytics Dashboard",
    desc: "Tracks every inquiry and booking conversion.",
    icon: <Search className="w-8 h-8" />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[40px] font-sora font-semibold text-blue-950 mb-6 tracking-tighter"
          >
            The AI Patient Operations System
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100 rounded-3xl overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 md:p-10 bg-white hover:bg-slate-50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 md:mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {React.cloneElement(service.icon as React.ReactElement, { className: "w-6 h-6" })}
              </div>
              <h3 className="text-xl font-sora font-semibold text-blue-950 mb-4 tracking-tight">{service.title}</h3>
              <p className="text-slate-500 font-inter font-normal text-[16px] leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="p-8 md:p-10 bg-blue-950 text-white flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Zap className="w-24 h-24" />
            </div>
            <h3 className="text-xl font-sora font-semibold mb-6 relative z-10">System Impact</h3>
            <ul className="space-y-4 relative z-10">
              {[
                "Capture every inquiry.",
                "Automate every reply.",
                "Book every patient."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  <span className="text-base font-inter font-normal uppercase tracking-widest text-blue-100">{item}</span>
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

export default Services;


import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, MessageSquare, Calendar, BarChart3, Share2 } from 'lucide-react';

const dashboards = [
  {
    title: "Call Management Dashboard",
    desc: "Shows every call, missed call, and AI-handled interaction.",
    icon: <PhoneCall className="w-6 h-6" />
  },
  {
    title: "WhatsApp Automation",
    desc: "Automated replies and appointment booking through WhatsApp.",
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    title: "Smart Booking System",
    desc: "Real-time calendar scheduling for patients.",
    icon: <Calendar className="w-6 h-6" />
  },
  {
    title: "Social Media Management",
    desc: "Manage and automate patient inquiries across all social platforms.",
    icon: <Share2 className="w-6 h-6" />
  },
  {
    title: "Analytics Dashboard",
    desc: "Tracks inquiry volume, conversion rate, and revenue impact.",
    icon: <BarChart3 className="w-6 h-6" />
  }
];

const InsideSystem: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[40px] font-sora font-semibold text-blue-950 mb-6 tracking-tighter"
          >
            Inside the AI Patient Operations System
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {dashboards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 md:p-10 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-600/20 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {card.icon}
              </div>
              <h3 className="text-2xl font-sora font-semibold text-blue-950 mb-4 tracking-tight">{card.title}</h3>
              <p className="text-slate-500 font-inter font-normal text-[16px] leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Subtle Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>
    </section>
  );
};

export default InsideSystem;

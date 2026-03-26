
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Calendar, Bell, BarChart3, Bot } from 'lucide-react';

const AISystemSection: React.FC = () => {
  const features = [
    {
      title: "AI Voice Receptionist",
      description: "The AI Voice Receptionist is capable of answering calls even after clinic hours.",
      icon: <Phone className="w-8 h-8 text-brightBlue-500" />
    },
    {
      title: "WhatsApp Automation",
      description: "The system provides instant replies to patient messages.",
      icon: <MessageSquare className="w-8 h-8 text-brightBlue-500" />
    },
    {
      title: "Smart Booking Engine",
      description: "Schedules appointments automatically.",
      icon: <Calendar className="w-8 h-8 text-brightBlue-500" />
    },
    {
      title: "Follow-Up Automation",
      description: "Reminders reduce missed appointments.",
      icon: <Bell className="w-8 h-8 text-brightBlue-500" />
    },
    {
      title: "Analytics Dashboard",
      description: "Track enquiries and bookings.",
      icon: <BarChart3 className="w-8 h-8 text-brightBlue-500" />
    },
    {
      title: "Intelligent Qualification",
      description: "AI filters and qualifies patients based on their needs.",
      icon: <Bot className="w-8 h-8 text-brightBlue-500" />
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold font-sora text-navy-900 mb-6 tracking-tight"
          >
            The AI Patient Operations System
          </motion.h2>
          <p className="text-slate-500 text-xl font-medium">A complete infrastructure for clinic growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-brightBlue-500/30 hover:shadow-2xl hover:shadow-brightBlue-500/5 transition-all group"
            >
              <div className="mb-6 p-4 bg-white rounded-2xl inline-block shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-extrabold font-sora text-navy-900 mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISystemSection;

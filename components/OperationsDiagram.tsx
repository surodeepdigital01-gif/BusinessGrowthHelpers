
import React from 'react';
import { motion } from 'framer-motion';
import { User, Phone, MessageSquare, Bot, Sparkles, Calendar, Bell, BarChart3, ArrowRight } from 'lucide-react';

const OperationsDiagram: React.FC = () => {
  const steps = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Patient Inquiry",
      desc: "Call, WhatsApp, or Form",
      color: "bg-blue-500"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Capture",
      desc: "Instant Response",
      color: "bg-brightBlue-500"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Qualification",
      desc: "AI Filters Leads",
      color: "bg-indigo-500"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Booking",
      desc: "Auto-Scheduling",
      color: "bg-emerald-500"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Follow-Up",
      desc: "No-Show Prevention",
      color: "bg-amber-500"
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold font-sora text-navy-900 mb-6 tracking-tight"
          >
            System Architecture Flow
          </motion.h2>
          <p className="text-slate-500 text-xl font-medium">How we turn missed opportunities into confirmed appointments.</p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative z-10 flex flex-col items-center w-full lg:w-48"
            >
              <div className={`w-20 h-20 ${step.color} rounded-3xl flex items-center justify-center text-white shadow-2xl mb-6`}>
                {step.icon}
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl text-center w-full">
                <h3 className="text-lg font-extrabold font-sora text-navy-900 mb-1">{step.title}</h3>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{step.desc}</p>
              </div>
              
              {i < steps.length - 1 && (
                <div className="lg:hidden my-4">
                  <ArrowRight className="w-6 h-6 text-slate-300 rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-white rounded-[3rem] border border-slate-100 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-navy-900 flex items-center justify-center text-white">
              <BarChart3 className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-2xl font-extrabold font-sora text-navy-900">Analytics Dashboard</h4>
              <p className="text-slate-500 font-medium">Real-time visibility into every step of the flow.</p>
            </div>
          </div>
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" referrerPolicy="no-referrer" />
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-white bg-brightBlue-500 flex items-center justify-center text-white text-xs font-bold">
              +12
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsDiagram;


import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Target, BarChart3, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Who We Work With */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-[40px] font-sora font-semibold text-blue-950 mb-10 tracking-tighter">
              The Infrastructure is Engineered for Clinics That:
            </h2>
            <div className="space-y-4">
              {[
                "Generate ₹2L+ in monthly revenue",
                "Want structured, long-term growth",
                "Are ready to invest in scaling",
                "Value performance, data, and accountability"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-blue-600/20 transition-all">
                  <CheckCircle2 className="text-blue-600 w-6 h-6 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-900 font-sora font-semibold text-xl tracking-tight">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-10 text-slate-400 font-inter font-normal text-base uppercase tracking-widest italic">
              The system is not designed for low-cost marketing experiments. It is engineered for serious operators.
            </p>
          </motion.div>

          {/* Why Clinics Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-[40px] font-sora font-semibold text-blue-950 mb-10 tracking-tighter">
              Why Clinics Deploy This Infrastructure
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Healthcare-Specific Focus", icon: <ShieldCheck className="w-5 h-5" /> },
                { title: "AI-Integrated Growth Systems", icon: <Zap className="w-5 h-5" /> },
                { title: "Transparent Performance Tracking", icon: <BarChart3 className="w-5 h-5" /> },
                { title: "ROI-Driven Strategy", icon: <Target className="w-5 h-5" /> },
                { title: "Dedicated Growth Partnership", icon: <Users className="w-5 h-5" /> }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:border-blue-600/20 transition-all group">
                  <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-blue-950 font-sora font-semibold leading-tight tracking-tight">{item.title}</h4>
                </div>
              ))}
            </div>
            <div className="mt-12 p-10 rounded-3xl bg-blue-950 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
              <p className="text-xl font-sora font-semibold uppercase tracking-widest">The system focuses on outcomes — not activity.</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>
    </section>
  );
};

export default About;
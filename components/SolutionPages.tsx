
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Calendar, Users, CheckCircle2, ArrowRight, Bot, Zap, ShieldCheck, Clock, Share2, BarChart3, Rocket } from 'lucide-react';

interface SolutionPageProps {
  onBookClick: () => void;
}

export const SocialMediaManagementPage: React.FC<SolutionPageProps> = ({ onBookClick }) => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    className="py-20 px-6 max-w-7xl mx-auto"
  >
    <div className="text-center mb-20">
      <h1 className="text-4xl md:text-[64px] font-sora font-semibold text-blue-950 mb-8 tracking-tighter leading-tight">
        Social Media <span className="text-blue-600">Management</span>
      </h1>
      <p className="text-lg md:text-[18px] font-inter font-normal text-slate-500 max-w-3xl mx-auto leading-relaxed">
        Turn your social presence into a patient acquisition machine. We manage and automate your clinic's interactions across Instagram, Facebook, and more to ensure no inquiry goes unanswered.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
      <div className="bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 p-8 opacity-5"><Share2 className="w-32 h-32" /></div>
        <div className="relative z-10 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Instagram DM</p>
            <p className="text-slate-700 italic">"How much for a full checkup? Do you have slots this week?"</p>
          </div>
          <div className="bg-blue-600 p-6 rounded-2xl shadow-lg ml-8 text-white">
            <p className="text-xs font-bold text-blue-100 uppercase tracking-widest mb-2">AI Manager</p>
            <p className="italic">"Hi! A checkup is ₹500. We have a slot this Friday at 11 AM. Would you like to book it?"</p>
          </div>
        </div>
      </div>
      <div className="space-y-8">
        <h2 className="text-3xl md:text-[40px] font-sora font-semibold text-blue-950 tracking-tighter">
          Omnichannel Automation.
        </h2>
        <div className="space-y-6">
          {[
            { title: "Unified Inbox", desc: "All inquiries from Facebook, Instagram, and Google My Business in one place." },
            { title: "Auto-Engagement", desc: "Instant AI responses to comments and DMs, driving users toward booking." },
            { title: "Content Strategy", desc: "Data-driven posting schedules to keep your clinic top-of-mind for local patients." }
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-sora font-bold text-blue-950 mb-1">{item.title}</h4>
                <p className="text-slate-500 font-inter font-normal text-[16px]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={onBookClick} className="bg-blue-950 text-white px-8 py-4 rounded-xl font-inter font-medium flex items-center gap-2 hover:bg-blue-900 transition-all">
          Automate My Socials <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </motion.div>
);

export const VoiceReceptionistPage: React.FC<SolutionPageProps> = ({ onBookClick }) => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    className="py-20 px-6 max-w-7xl mx-auto"
  >
    <div className="text-center mb-20">
      <h1 className="text-4xl md:text-[64px] font-sora font-semibold text-blue-950 mb-8 tracking-tighter leading-tight">
        AI Voice <span className="text-blue-600">Receptionist</span>
      </h1>
      <p className="text-lg md:text-[18px] font-inter font-normal text-slate-500 max-w-3xl mx-auto leading-relaxed">
        Never miss another patient call. Our AI Voice Receptionist handles inquiries, schedules appointments, and answers common questions 24/7 with a natural, professional voice.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
      <div className="space-y-8">
        <h2 className="text-3xl md:text-[40px] font-sora font-semibold text-blue-950 tracking-tighter">
          The End of Missed Opportunities.
        </h2>
        <div className="space-y-6">
          {[
            { title: "24/7 Availability", desc: "Patients can book appointments at 10 PM or 6 AM without needing a human on the line." },
            { title: "Instant Response", desc: "Zero wait times. Every caller is greeted immediately, eliminating hang-ups." },
            { title: "Smart Scheduling", desc: "Directly integrates with your clinic's calendar to find and book open slots." }
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-sora font-bold text-blue-950 mb-1">{item.title}</h4>
                <p className="text-slate-500 font-inter font-normal text-[16px]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={onBookClick} className="bg-blue-950 text-white px-8 py-4 rounded-xl font-inter font-medium flex items-center gap-2 hover:bg-blue-900 transition-all">
          Deploy Voice AI <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <div className="bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5"><Phone className="w-32 h-32" /></div>
        <div className="relative z-10 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Patient Call</p>
            <p className="text-slate-700 italic">"Hi, I'd like to book a cleaning for next Tuesday afternoon."</p>
          </div>
          <div className="bg-blue-600 p-6 rounded-2xl shadow-lg ml-8 text-white">
            <p className="text-xs font-bold text-blue-100 uppercase tracking-widest mb-2">AI Receptionist</p>
            <p className="italic">"Of course! I see a 2:30 PM slot available on Tuesday. Shall I book that for you?"</p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export const WhatsAppAutomationPage: React.FC<SolutionPageProps> = ({ onBookClick }) => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    className="py-20 px-6 max-w-7xl mx-auto"
  >
    <div className="text-center mb-20">
      <h1 className="text-4xl md:text-[64px] font-sora font-semibold text-blue-950 mb-8 tracking-tighter leading-tight">
        WhatsApp <span className="text-blue-600">Automation</span>
      </h1>
      <p className="text-lg md:text-[18px] font-inter font-normal text-slate-500 max-w-3xl mx-auto leading-relaxed">
        Meet your patients where they are. Automate inquiries, appointment confirmations, and patient support through the world's most popular messaging app.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 mb-32">
      {[
        { icon: <Zap />, title: "Instant Replies", desc: "Automated responses to common questions about pricing, location, and services." },
        { icon: <Calendar />, title: "Chat-to-Book", desc: "Allow patients to view availability and book appointments without leaving WhatsApp." },
        { icon: <ShieldCheck />, title: "Secure & Compliant", desc: "Built on the official WhatsApp Business API for professional, secure communication." }
      ].map((item, i) => (
        <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
            {item.icon}
          </div>
          <h3 className="text-xl font-sora font-bold text-blue-950 mb-4">{item.title}</h3>
          <p className="text-slate-500 font-inter font-normal text-[16px] leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>

    <div className="bg-blue-950 rounded-[3rem] p-12 md:p-20 text-center text-white">
      <h2 className="text-3xl md:text-5xl font-sora font-semibold mb-8 tracking-tighter">Ready to automate your patient chat?</h2>
      <button onClick={onBookClick} className="bg-white text-blue-950 px-10 py-5 rounded-2xl font-inter font-medium hover:bg-blue-50 transition-all">
        Get WhatsApp Infrastructure
      </button>
    </div>
  </motion.div>
);

export const BookingEnginePage: React.FC<SolutionPageProps> = ({ onBookClick }) => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    className="py-20 px-6 max-w-7xl mx-auto"
  >
    <div className="text-center mb-20">
      <h1 className="text-4xl md:text-[64px] font-sora font-semibold text-blue-950 mb-8 tracking-tighter leading-tight">
        Smart Booking <span className="text-blue-600">Engine</span>
      </h1>
      <p className="text-lg md:text-[18px] font-inter font-normal text-slate-500 max-w-3xl mx-auto leading-relaxed">
        A frictionless booking experience designed for modern patients. Real-time availability, automated reminders, and seamless integration with your clinic's workflow.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
      <div className="order-2 lg:order-1">
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-8">
          <div className="flex items-center justify-between mb-8">
            <h4 className="font-sora font-bold text-blue-950">Select Time Slot</h4>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-200"></div>
              <div className="w-3 h-3 rounded-full bg-slate-200"></div>
              <div className="w-3 h-3 rounded-full bg-blue-600"></div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM'].map((time, i) => (
              <div key={i} className={`p-4 rounded-xl border text-center font-inter font-medium text-sm ${i === 3 ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-100 text-slate-600'}`}>
                {time}
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Duration</p>
                <p className="text-blue-950 font-bold">45 Minutes</p>
              </div>
            </div>
            <button className="w-full bg-blue-950 text-white py-4 rounded-xl font-inter font-medium">Confirm Appointment</button>
          </div>
        </div>
      </div>
      <div className="order-1 lg:order-2 space-y-8">
        <h2 className="text-3xl md:text-[40px] font-sora font-semibold text-blue-950 tracking-tighter">
          Frictionless Scheduling.
        </h2>
        <p className="text-slate-500 font-inter font-normal text-[16px] leading-relaxed">
          Our booking engine removes the back-and-forth emails and phone calls. Patients see exactly when you're free and book themselves in seconds.
        </p>
        <ul className="space-y-4">
          {[
            "Real-time sync with Google/Outlook/iCal",
            "Automated SMS & Email reminders",
            "Custom intake forms for new patients",
            "Payment integration for deposits"
          ].map((text, i) => (
            <li key={i} className="flex items-center gap-3 text-blue-950 font-inter font-medium">
              <CheckCircle2 className="w-5 h-5 text-blue-600" /> {text}
            </li>
          ))}
        </ul>
        <button onClick={onBookClick} className="text-blue-600 font-sora font-bold flex items-center gap-2 hover:gap-4 transition-all">
          View Demo Engine <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  </motion.div>
);

export const FollowUpsPage: React.FC<SolutionPageProps> = ({ onBookClick }) => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    className="py-20 px-6 max-w-7xl mx-auto"
  >
    <div className="text-center mb-20">
      <h1 className="text-4xl md:text-[64px] font-sora font-semibold text-blue-950 mb-8 tracking-tighter leading-tight">
        Patient <span className="text-blue-600">Follow-Ups</span>
      </h1>
      <p className="text-lg md:text-[18px] font-inter font-normal text-slate-500 max-w-3xl mx-auto leading-relaxed">
        Build lasting relationships automatically. Our system handles post-treatment care, review requests, and re-engagement campaigns to keep your chairs full.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 mb-32">
      <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8">
          <Bot className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-sora font-bold text-blue-950 mb-4">Post-Treatment Care</h3>
        <p className="text-slate-500 font-inter font-normal text-[16px] leading-relaxed mb-6">
          Automatically send care instructions and check-in messages after procedures to ensure patient comfort and satisfaction.
        </p>
        <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
          <CheckCircle2 className="w-4 h-4" /> Increases patient trust
        </div>
      </div>
      <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8">
          <Users className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-sora font-bold text-blue-950 mb-4">Review Generation</h3>
        <p className="text-slate-500 font-inter font-normal text-[16px] leading-relaxed mb-6">
          Identify happy patients and automatically request Google reviews to boost your local SEO and clinic reputation.
        </p>
        <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
          <CheckCircle2 className="w-4 h-4" /> Boosts local ranking
        </div>
      </div>
    </div>

    <div className="text-center">
      <h2 className="text-3xl font-sora font-semibold text-blue-950 mb-8">Stop losing patients to the "one-and-done" cycle.</h2>
      <button onClick={onBookClick} className="bg-blue-950 text-white px-12 py-6 rounded-2xl font-inter font-medium shadow-2xl shadow-blue-950/20 hover:scale-105 transition-all">
        Start Automated Follow-Ups
      </button>
    </div>
  </motion.div>
);

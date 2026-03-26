
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import PatientBehavior from './components/PatientBehavior';
import Services from './components/Services';
import SystemArchitecture from './components/SystemArchitecture';
import InsideSystem from './components/InsideSystem';
import CaseStudy from './components/CaseStudy';
import Results from './components/Results';
import WhoThisIsFor from './components/WhoThisIsFor';
import Process from './components/Process';
import About from './components/About';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import BackgroundAnimation from './components/BackgroundAnimation';
import Chatbot from './components/Chatbot';
import { VoiceReceptionistPage, WhatsAppAutomationPage, BookingEnginePage, FollowUpsPage, SocialMediaManagementPage } from './components/SolutionPages';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle2, FileSearch, Sparkles, BarChart3, Rocket, HeartPulse, Mail, MapPin, Scale, ShieldAlert, AlertTriangle, Loader2, CheckCircle } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Hero 
              onBookClick={toggleModal} 
              onAuditClick={() => {
                setCurrentPage('audit');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <ProblemSection />
            <PatientBehavior />
            <Services />
            <SystemArchitecture />
            <InsideSystem />
            <CaseStudy />
            <Results />
            <WhoThisIsFor />
            <Process />
          </motion.div>
        );
      case 'services':
        return <ServicesPage onBookClick={toggleModal} />;
      case 'results':
        return <ResultsPage />;
      case 'process':
        return <ProcessPage onBookClick={toggleModal} />;
      case 'about':
        return <AboutPage />;
      case 'audit':
        return <AuditPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'terms':
        return <TermsPage />;
      case 'disclaimer':
        return <DisclaimerPage />;
      case 'voice-receptionist':
        return <VoiceReceptionistPage onBookClick={toggleModal} />;
      case 'whatsapp-automation':
        return <WhatsAppAutomationPage onBookClick={toggleModal} />;
      case 'booking-engine':
        return <BookingEnginePage onBookClick={toggleModal} />;
      case 'patient-followups':
        return <FollowUpsPage onBookClick={toggleModal} />;
      case 'social-media':
        return <SocialMediaManagementPage onBookClick={toggleModal} />;
      default:
        return <Hero 
          onBookClick={toggleModal} 
          onAuditClick={() => setCurrentPage('audit')}
        />;
    }
  };

  const isLegalPage = currentPage === 'privacy' || currentPage === 'terms' || currentPage === 'disclaimer';

  return (
    <div className={`relative min-h-screen grid-bg ${isLegalPage ? 'bg-white' : 'bg-white text-slate-900'} selection:bg-blue-50 selection:text-blue-900 transition-colors duration-300`}>
      <Navbar 
        onBookClick={toggleModal} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />
      
      <main className="pt-20 md:pt-24">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      <Footer onBookClick={toggleModal} onPageChange={setCurrentPage} />
      
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      <Chatbot />
    </div>
  );
};

// --- Sub-Pages Components ---

  const AuditPage = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [insight, setInsight] = useState('');
  const [formData, setFormData] = useState({ url: '', email: '', focus: 'General Dentistry' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.target as HTMLFormElement;
    const formDataObj = new FormData(form);

    try {
      // Submit to Formspree
      await fetch('https://formspree.io/f/maqlnnyo', {
        method: 'POST',
        body: formDataObj,
        headers: {
          'Accept': 'application/json'
        }
      });

      // Also generate AI insight for the user experience
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Generate a short, professional 2-sentence growth insight for a dental clinic based on their form submission. Focus on potential for patient conversion and automation.`,
      });
      setInsight(response.text || "Your clinic has massive potential for automated patient booking through high-ticket local SEO optimization.");
      setStatus('success');
    } catch (err) {
      console.error(err);
      setInsight("Our analysis suggests your clinic could capture 50%+ more appointments by optimizing for local high-intent keywords and 24/7 AI response.");
      setStatus('success');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-20 px-6 max-w-2xl mx-auto text-center">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white p-12 rounded-3xl border border-slate-100 shadow-sm">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-blue-950">Audit Request Received!</h2>
          <p className="text-slate-500 mb-8">Your full report is being engineered. Check your email in the next 24 hours.</p>
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-left relative overflow-hidden">
            <Sparkles className="absolute top-2 right-2 w-8 h-8 text-blue-600/5" />
            <h4 className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2">Immediate AI Insight:</h4>
            <p className="text-slate-700 italic leading-relaxed">"{insight}"</p>
          </div>

          <button onClick={() => setStatus('idle')} className="mt-10 text-blue-600 font-bold hover:underline">Request Infrastructure Review</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-20 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6 tracking-tighter text-blue-950">Clinic Growth <span className="text-[#FBAA19]">Audit</span></h1>
        <p className="text-slate-500">Identify exactly where your clinic is losing patients and how to fix it.</p>
      </div>
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5"><FileSearch className="w-24 h-24" /></div>
        
        <form className="space-y-10 relative z-10" onSubmit={handleSubmit}>
          {/* SECTION 1 — BASIC INFO */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[10px]">01</span>
              Basic Info
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500">First Name</label>
                <input type="text" name="firstName" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:border-blue-600 outline-none transition-all" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500">Clinic Name</label>
                <input type="text" name="clinicName" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:border-blue-600 outline-none transition-all" placeholder="Acme Dental" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500">Phone Number</label>
                <input type="tel" name="phone" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:border-blue-600 outline-none transition-all" placeholder="+91 98765 43210" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500">City</label>
                <input type="text" name="city" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:border-blue-600 outline-none transition-all" placeholder="Mumbai" />
              </div>
            </div>
          </div>

          {/* SECTION 2 — PATIENT FLOW */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[10px]">02</span>
              Patient Flow
            </h3>
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-bold text-blue-950">How many patient inquiries do you receive per week?</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['0–20', '20–50', '50–100', '100+'].map((option) => (
                    <label key={option} className="relative flex items-center justify-center p-4 rounded-xl border border-slate-100 bg-slate-50 cursor-pointer hover:bg-white hover:border-blue-200 transition-all group">
                      <input type="radio" name="weeklyInquiries" value={option} className="sr-only peer" required />
                      <span className="text-xs font-bold text-slate-600 peer-checked:text-blue-600 transition-colors uppercase tracking-widest">{option}</span>
                      <div className="absolute inset-0 border-2 border-transparent peer-checked:border-blue-600 rounded-xl pointer-events-none"></div>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-bold text-blue-950">How do patients contact your clinic? (Select all that apply)</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {['Phone Calls', 'WhatsApp', 'Google', 'Instagram', 'Walk-ins'].map((option) => (
                    <label key={option} className="relative flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50 cursor-pointer hover:bg-white hover:border-blue-200 transition-all">
                      <input type="checkbox" name="contactMethods" value={option} className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                      <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3 — PROBLEM IDENTIFICATION */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[10px]">03</span>
              Problem Identification
            </h3>
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-bold text-blue-950">What challenges are you facing? (Select all that apply)</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Missed calls',
                    'Slow WhatsApp replies',
                    'No follow-up system',
                    'Low Google reviews',
                    'Weak social media presence',
                    'Low conversion from inquiries'
                  ].map((option) => (
                    <label key={option} className="relative flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50 cursor-pointer hover:bg-white hover:border-blue-200 transition-all">
                      <input type="checkbox" name="challenges" value={option} className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                      <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-bold text-blue-950">What happens when a call is missed?</p>
                <div className="grid grid-cols-2 gap-3">
                  {['Call back later', 'No action', 'Reception handles it', 'Not sure'].map((option) => (
                    <label key={option} className="relative flex items-center justify-center p-4 rounded-xl border border-slate-100 bg-slate-50 cursor-pointer hover:bg-white hover:border-blue-200 transition-all">
                      <input type="radio" name="missedCallAction" value={option} className="sr-only peer" required />
                      <span className="text-xs font-bold text-slate-600 peer-checked:text-blue-600 transition-colors uppercase tracking-widest">{option}</span>
                      <div className="absolute inset-0 border-2 border-transparent peer-checked:border-blue-600 rounded-xl pointer-events-none"></div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4 — CURRENT SYSTEM */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[10px]">04</span>
              Current System
            </h3>
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-bold text-blue-950">Do you use any system for managing patient inquiries?</p>
                <div className="grid grid-cols-2 gap-3">
                  {['No system', 'Manual (staff)', 'CRM / software', 'Not sure'].map((option) => (
                    <label key={option} className="relative flex items-center justify-center p-4 rounded-xl border border-slate-100 bg-slate-50 cursor-pointer hover:bg-white hover:border-blue-200 transition-all">
                      <input type="radio" name="currentSystem" value={option} className="sr-only peer" required />
                      <span className="text-xs font-bold text-slate-600 peer-checked:text-blue-600 transition-colors uppercase tracking-widest">{option}</span>
                      <div className="absolute inset-0 border-2 border-transparent peer-checked:border-blue-600 rounded-xl pointer-events-none"></div>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-bold text-blue-950">How quickly do you respond to new inquiries?</p>
                <div className="grid grid-cols-2 gap-3">
                  {['Instantly', 'Within 10 minutes', '30+ minutes', 'Sometimes missed'].map((option) => (
                    <label key={option} className="relative flex items-center justify-center p-4 rounded-xl border border-slate-100 bg-slate-50 cursor-pointer hover:bg-white hover:border-blue-200 transition-all">
                      <input type="radio" name="responseSpeed" value={option} className="sr-only peer" required />
                      <span className="text-xs font-bold text-slate-600 peer-checked:text-blue-600 transition-colors uppercase tracking-widest">{option}</span>
                      <div className="absolute inset-0 border-2 border-transparent peer-checked:border-blue-600 rounded-xl pointer-events-none"></div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 5 — BUSINESS LEVEL */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[10px]">05</span>
              Business Level
            </h3>
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-bold text-blue-950">Monthly revenue range:</p>
                <div className="grid grid-cols-2 gap-3">
                  {['Below ₹2L', '₹2L – ₹5L', '₹5L – ₹10L', '₹10L+'].map((option) => (
                    <label key={option} className="relative flex items-center justify-center p-4 rounded-xl border border-slate-100 bg-slate-50 cursor-pointer hover:bg-white hover:border-blue-200 transition-all">
                      <input type="radio" name="revenueRange" value={option} className="sr-only peer" required />
                      <span className="text-xs font-bold text-slate-600 peer-checked:text-blue-600 transition-colors uppercase tracking-widest">{option}</span>
                      <div className="absolute inset-0 border-2 border-transparent peer-checked:border-blue-600 rounded-xl pointer-events-none"></div>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-bold text-blue-950">Are you currently investing in growth?</p>
                <div className="grid grid-cols-3 gap-3">
                  {['Yes', 'No', 'Planning'].map((option) => (
                    <label key={option} className="relative flex items-center justify-center p-4 rounded-xl border border-slate-100 bg-slate-50 cursor-pointer hover:bg-white hover:border-blue-200 transition-all">
                      <input type="radio" name="investingInGrowth" value={option} className="sr-only peer" required />
                      <span className="text-xs font-bold text-slate-600 peer-checked:text-blue-600 transition-colors uppercase tracking-widest">{option}</span>
                      <div className="absolute inset-0 border-2 border-transparent peer-checked:border-blue-600 rounded-xl pointer-events-none"></div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 6 — INTENT */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[10px]">06</span>
              Intent
            </h3>
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-bold text-blue-950">Why are you interested in improving patient flow?</p>
                <textarea name="intentReason" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:border-blue-600 outline-none transition-all text-blue-950 text-sm min-h-[120px]" placeholder="Tell us about your goals..."></textarea>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-bold text-blue-950">When are you looking to implement a solution?</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {['Immediately', 'Within 30 days', 'Just exploring'].map((option) => (
                    <label key={option} className="relative flex items-center justify-center p-4 rounded-xl border border-slate-100 bg-slate-50 cursor-pointer hover:bg-white hover:border-blue-200 transition-all">
                      <input type="radio" name="implementationTimeline" value={option} className="sr-only peer" required />
                      <span className="text-xs font-bold text-slate-600 peer-checked:text-blue-600 transition-colors uppercase tracking-widest">{option}</span>
                      <div className="absolute inset-0 border-2 border-transparent peer-checked:border-blue-600 rounded-xl pointer-events-none"></div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button 
              disabled={status === 'loading'}
              className="w-full bg-blue-950 text-white font-bold py-6 rounded-2xl text-xl hover:bg-blue-900 transition-all shadow-2xl shadow-blue-900/20 flex items-center justify-center gap-3 disabled:bg-slate-100 disabled:text-slate-400"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Engineering Your Audit...
                </>
              ) : "Get My Clinic Growth Audit"}
            </button>
            <p className="text-[13px] text-center text-blue-600 font-bold mt-8 leading-relaxed font-sora">
              “Based on your answers, we will identify where your clinic is losing patients and show how to fix it.”
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

const DisclaimerPage = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    className="bg-white text-slate-900 min-h-screen pb-20"
  >
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12 border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-4 uppercase tracking-tight">Disclaimer</h1>
        <p className="text-slate-500 font-medium italic">Last Updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">1. No Professional-Client Relationship</h2>
          <p>Your use of this website—including implementation of any suggestions set out in this website and/or use of any resources available on this website—does not create a professional-client relationship between you and <strong>Businessgrowthhelpers</strong>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">2. Results Are Not Guaranteed</h2>
          <p>While we frequently reference potential growth of <strong>50%+</strong> for dental clinics, these figures are based on internal data and past performance of specific campaigns. They are not a guarantee of future results.</p>
          <p className="mt-4 italic">Success in dental patient acquisition depends on a multitude of factors outside of our control, including:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Local market demand and seasonality</li>
            <li>Competition within your specific geographic area</li>
            <li>The clinic's ability to handle inbound inquiries effectively</li>
            <li>Adherence to clinical and ethical standards by the client</li>
            <li>Platform policy changes (Google, Meta, WhatsApp)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">3. Testimonials Disclaimer</h2>
          <p>Testimonials appearing on this site are actually received via text, audio, or video submission. They are individual results and do not necessarily represent the experience of all clients. They are not intended to guarantee that anyone will achieve the same or similar results.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">4. Errors and Omissions</h2>
          <p>This website is a public resource of general information that is intended, but not promised or guaranteed, to be correct, complete, and up-to-date. We have taken reasonable steps to ensure that the information contained in this website is accurate, but we cannot represent that this website is free of errors.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">5. External Links Disclaimer</h2>
          <p>The website may contain links to external websites that are not provided or maintained by or in any way affiliated with Businessgrowthhelpers. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
        </section>

        <section className="pt-8 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">6. Infrastructure Review</h2>
          <p>If you require any more information or have any questions about our site's disclaimer, please feel free to request a review by email:</p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-[#FBAA19]" />
              <p className="font-bold text-slate-900">Businessgrowthhelpers - Risk & Compliance</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <p>Businessgrowthhelpers@gmail.com</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </motion.div>
);

const TermsPage = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    className="bg-white text-slate-900 min-h-screen pb-20"
  >
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12 border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-4 uppercase tracking-tight">Terms & Conditions</h1>
        <p className="text-slate-500 font-medium italic">Effective Date: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        <section>
          <p>Welcome to <strong>Businessgrowthhelpers</strong> (“Company”, “we”, “our”, or “us”).</p>
          <p className="mt-4">By accessing this website or using our services, you agree to comply with and be bound by the following Terms & Conditions. If you do not agree, please do not use this website.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">1. Services</h2>
          <p>Businessgrowthhelpers provides:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Website design and development</li>
            <li>WhatsApp automation setup</li>
            <li>Google SEO and Local SEO services</li>
            <li>AI voice assistant setup</li>
            <li>Marketing and business growth consulting</li>
            <li>Lead generation and automation systems</li>
          </ul>
          <p className="mt-4">All services are provided under agreed project scope, proposal, or written agreement.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">2. No Guaranteed Results</h2>
          <p>While we aim to help clients increase patients, clients, or revenue (including potential 50%+ growth), results are not guaranteed. Performance depends on multiple factors including market conditions, competition, budget, implementation, client cooperation, and external platform changes (Google, Meta, etc.). We do not guarantee specific income or revenue results.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">3. Client Responsibilities</h2>
          <p>Clients agree to provide accurate information, respond in a timely manner, approve content promptly, and comply with all applicable laws. Delays in communication may affect timelines and outcomes.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">4. Payments & Fees</h2>
          <p>All fees are agreed upon before work begins. Payments must be made according to invoice terms. Deposits are non-refundable unless otherwise stated in writing. Ongoing services may require monthly payments. Failure to make payment may result in suspension of services.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">5. Intellectual Property</h2>
          <p>Final website designs and deliverables become client property upon full payment. We may showcase completed projects in our portfolio. All proprietary systems and internal methodologies remain the intellectual property of Businessgrowthhelpers.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">6. Third-Party Tools</h2>
          <p>We use third-party platforms (Google, WhatsApp, Hosting, CRMs, AI platforms). We are not responsible for outages or performance issues caused by these providers.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">7. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Businessgrowthhelpers shall not be liable for loss of revenue, profits, business interruption, or consequential damages. Our total liability shall not exceed the amount paid for services rendered.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">8. Confidentiality</h2>
          <p>We respect client confidentiality and expect clients to respect any confidential methodologies shared during consulting.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">9. Termination</h2>
          <p>Either party may terminate services with written notice. Client must pay for all work completed up to the termination date.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">10. Website Use</h2>
          <p>You agree not to use this website for unlawful purposes, attempt to hack services, or copy website content without permission.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">11. Governing Law</h2>
          <p>These Terms shall be governed by the laws of <strong>India</strong>. Any disputes shall be resolved under the jurisdiction of courts in <strong>Kolkata, India</strong>.</p>
        </section>

        <section className="pt-8 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">12. Infrastructure Review Inquiries</h2>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <Scale className="w-5 h-5 text-[#FBAA19] mt-1" />
              <div>
                <p className="font-bold text-slate-900 uppercase">Businessgrowthhelpers</p>
                <p className="text-sm">Legal Department</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <p>Businessgrowthhelpers@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-600" />
              <p>Kolkata, India</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </motion.div>
);

const PrivacyPage = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    className="bg-white text-slate-900 min-h-screen pb-20"
  >
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12 border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-4 uppercase tracking-tight">Privacy Policy</h1>
        <p className="text-slate-500 font-medium italic">Revised Date: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">1. Introduction</h2>
          <p>Welcome to <strong>Businessgrowthhelpers</strong> (“Company”, “we”, “our”, or “us”).</p>
          <p className="mt-2">We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.</p>
          <p className="mt-2">If you do not agree with the terms of this Privacy Policy, please do not access the site.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <div className="mt-4 ml-4">
            <h3 className="font-bold text-slate-900 mb-2">Personal Information</h3>
            <p>When you book a strategy call, request a growth audit, or subscribe to emails, we may collect:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business name</li>
              <li>Website URL</li>
              <li>Any information you provide in forms</li>
            </ul>
          </div>
          <div className="mt-6 ml-4">
            <h3 className="font-bold text-slate-900 mb-2">Automatically Collected Information</h3>
            <p>We may collect IP addresses, browser type, device information, pages visited, and time spent on our website. This information helps us improve our services and marketing.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">3. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Schedule and conduct strategy calls</li>
            <li>Provide growth audits</li>
            <li>Respond to system audit requests</li>
            <li>Send marketing emails (if subscribed)</li>
            <li>Improve our website and services</li>
            <li>Deliver automation and consulting services</li>
          </ul>
          <p className="mt-4 font-bold text-slate-900">We do NOT sell your personal information to third parties.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">4. Cookies & Tracking Technologies</h2>
          <p>Our website may use cookies and similar tracking technologies to improve user experience, analyze website performance, and track marketing effectiveness. You can disable cookies through your browser settings.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">5. Third-Party Services</h2>
          <p>We may use trusted third-party tools such as website analytics tools, CRM systems, email marketing platforms, payment processors, WhatsApp automation platforms, and AI voice assistant systems. These providers only access data necessary to perform their services.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">6. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information. However, no electronic transmission over the Internet can be guaranteed to be 100% secure.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">7. Your Rights</h2>
          <p>Depending on your location, you may have the right to access your personal data, request correction of your data, request deletion of your data, withdraw consent, or opt-out of marketing emails.</p>
          <p className="mt-4">To exercise your rights, contact us at:</p>
          <div className="mt-2 flex items-center gap-2 font-medium text-blue-900">
            <Mail className="w-5 h-5" />
            <a href="mailto:Businessgrowthhelpers@gmail.com">Businessgrowthhelpers@gmail.com</a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">8. Data Retention</h2>
          <p>We retain your information only as long as necessary to provide services, comply with legal obligations, and resolve disputes.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">9. Children’s Privacy</h2>
          <p>Our services are intended for business owners and professionals. We do not knowingly collect information from individuals under 18 years of age.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">10. Updates to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised date.</p>
        </section>

        <section className="pt-8 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">11. Infrastructure Review Inquiries</h2>
          <p>If you have questions about this Privacy Policy, request a review:</p>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#FBAA19] mt-1" />
              <div>
                <p className="font-bold text-slate-900 uppercase">Businessgrowthhelpers</p>
                <p className="text-sm">Automation & Dental Growth Consulting</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <p>Businessgrowthhelpers@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-600" />
              <p>Kolkata, India</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </motion.div>
);

const ServicesPage = ({ onBookClick }: { onBookClick: () => void }) => (
  <div className="py-20 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold mb-4">Dental <span className="text-blue-600">Patient Acquisition</span> Infrastructure</h1>
      <p className="text-slate-400 max-w-2xl mx-auto">Every module of the system is fine-tuned for the dental patient psychology and journey.</p>
    </div>
    <Services />
    <div className="mt-12 md:mt-20 glass-morphism p-8 md:p-12 rounded-2xl md:rounded-3xl text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-[#FBAA19]"></div>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Request a tailored Growth Blueprint</h2>
      <p className="text-slate-400 text-sm md:text-base mb-6 md:mb-8 max-w-xl mx-auto">The audit identifies exactly how to stop the leaks in the clinic.</p>
      <button onClick={onBookClick} className="w-full md:w-auto bg-[#FBAA19] text-slate-950 font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all">Deploy AI Operations Stack</button>
    </div>
  </div>
);

const ResultsPage = () => (
  <div className="py-20 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold mb-4">Measurable Growth for <span className="text-blue-600">Modern Clinics</span></h1>
      <p className="text-slate-400">Factual performance data from clinic infrastructure deployments.</p>
    </div>
    <Results />
    
    <div className="mt-20 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden"
      >
        <div className="p-6 sm:p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Case Study: AI Operations</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="text-slate-500 text-[10px] sm:text-xs font-medium">52-Day Deployment</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-950 mb-8 leading-tight tracking-tight">
            How a Dental Clinic Deployed an AI Call Capture System and Reduced Missed Calls by 76% in 52 Days
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mb-10">
            <div className="p-5 sm:p-6 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-2">Missed Calls</p>
              <p className="text-xl sm:text-2xl font-black text-blue-950">38 → 9</p>
            </div>
            <div className="p-5 sm:p-6 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-2">Bookings</p>
              <p className="text-xl sm:text-2xl font-black text-blue-600">76% Increase</p>
            </div>
            <div className="p-5 sm:p-6 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-2">Timeline</p>
              <p className="text-xl sm:text-2xl font-black text-blue-950">52 Days</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6 pt-8 border-t border-slate-100 text-center md:text-left">
            <div className="space-y-2">
              <p className="text-slate-600 text-sm sm:text-base font-medium">
                System deployed without increasing marketing spend.
              </p>
              <p className="text-slate-400 text-[10px] sm:text-xs font-medium uppercase tracking-widest">
                Infrastructure-First Positioning Verified.
              </p>
            </div>
            <button className="w-full md:w-auto bg-blue-950 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-900 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
              Deploy AI Operations Stack <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const ProcessPage = ({ onBookClick }: { onBookClick: () => void }) => (
  <div className="py-20 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold mb-4">Simple 3-Step <span className="text-blue-600">Patient Growth</span> Process</h1>
      <p className="text-slate-400">The infrastructure manages technical complexity, allowing the focus to remain on dentistry.</p>
    </div>
    <Process />
    <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Why our roadmap works for clinics.</h2>
        <div className="flex gap-4">
          <div className="bg-[#FBAA19]/10 p-3 rounded-xl"><CheckCircle2 className="text-[#FBAA19]" /></div>
          <div>
            <h4 className="font-bold">Dental-Specific Integrations</h4>
            <p className="text-slate-400 text-sm">We integrate with your existing booking software and CRM.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-[#FBAA19]/10 p-3 rounded-xl"><CheckCircle2 className="text-[#FBAA19]" /></div>
          <div>
            <h4 className="font-bold">Weekly Performance Dashboards</h4>
            <p className="text-slate-400 text-sm">See exactly how many treatment plans were generated via the system.</p>
          </div>
        </div>
      </div>
      <div className="glass-morphism p-6 md:p-8 rounded-2xl md:rounded-3xl border-[#FBAA19]/20">
         <h3 className="text-lg md:text-xl font-bold mb-4">Step 1 starts today.</h3>
         <button onClick={onBookClick} className="w-full bg-[#FBAA19] text-slate-950 font-bold py-4 rounded-xl">Get My Clinic Growth Audit</button>
      </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="py-20 px-6 max-w-7xl mx-auto">
    <About />
    <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
      <div className="p-8 glass-morphism rounded-2xl">
        <Sparkles className="w-10 h-10 text-[#FBAA19] mx-auto mb-4" />
        <h3 className="font-bold mb-2">Healthcare Compliance</h3>
        <p className="text-slate-400 text-sm">Systems built with security and data privacy best practices for clinics.</p>
      </div>
      <div className="p-8 glass-morphism rounded-2xl">
        <BarChart3 className="w-10 h-10 text-[#FBAA19] mx-auto mb-4" />
        <h3 className="font-bold mb-2">Growth Engineering</h3>
        <p className="text-slate-400 text-sm">The focus is not on 'art'. The infrastructure consists of engineered systems that deliver patients.</p>
      </div>
      <div className="p-8 glass-morphism rounded-2xl">
        <Rocket className="w-10 h-10 text-[#FBAA19] mx-auto mb-4" />
        <h3 className="font-bold mb-2">Scale-Ready</h3>
        <p className="text-slate-400 text-sm">Whether you have one chair or ten clinics, our systems scale with you.</p>
      </div>
    </div>
  </div>
);

export default App;
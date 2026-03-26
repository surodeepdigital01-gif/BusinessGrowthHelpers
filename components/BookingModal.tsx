
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, Loader2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/maqlnnyo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          console.error(data.errors.map((error: any) => error.message).join(', '));
        } else {
          console.error('Oops! There was a problem submitting your form');
        }
        setStatus('idle');
      }
    } catch (error) {
      console.error('Oops! There was a problem submitting your form', error);
      setStatus('idle');
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setStatus('idle'), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-blue-950/40 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-white p-6 sm:p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto"
          >
            <button onClick={handleClose} className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-slate-400 hover:text-blue-950 transition-colors z-10">
              <X className="w-6 h-6" />
            </button>
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 sm:py-10"
                >
                  <div className="w-16 h-16 sm:w-24 sm:h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
                    <CheckCircle className="w-8 h-8 sm:w-12 sm:h-12 text-green-600" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-sora font-semibold text-blue-950 mb-4">Application Received</h2>
                  <p className="text-slate-500 mb-8 sm:mb-10 max-w-xs mx-auto text-base sm:text-lg font-inter font-normal">Our growth engineering team is reviewing your clinic's data. We'll be in touch within 2 business hours.</p>
                  <button 
                    onClick={handleClose}
                    className="w-full sm:w-auto bg-blue-950 text-white font-inter font-medium px-10 py-4 rounded-full hover:bg-blue-900 transition-colors shadow-xl"
                  >
                    Close Window
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form">
                  <div className="text-center mb-8 sm:mb-10">
                    <h2 className="text-2xl sm:text-3xl font-sora font-semibold text-blue-950 mb-3">Clinic Growth Audit</h2>
                    <p className="text-slate-500 font-inter font-normal text-sm sm:text-base">Complete this form to identify your clinic's growth potential.</p>
                  </div>

                  <form className="space-y-8" onSubmit={handleSubmit}>
                    {/* SECTION 1 — BASIC INFO */}
                    <div className="space-y-4">
                      <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[10px]">01</span>
                        Basic Info
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold ml-1">First Name</label>
                          <input type="text" name="firstName" required className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-blue-950 text-sm" placeholder="John" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold ml-1">Clinic Name</label>
                          <input type="text" name="clinicName" required className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-blue-950 text-sm" placeholder="Acme Dental" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold ml-1">Phone Number</label>
                          <input type="tel" name="phone" required className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-blue-950 text-sm" placeholder="+91 98765 43210" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold ml-1">City</label>
                          <input type="text" name="city" required className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-blue-950 text-sm" placeholder="Mumbai" />
                        </div>
                      </div>
                    </div>

                    {/* SECTION 2 — PATIENT FLOW */}
                    <div className="space-y-4">
                      <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[10px]">02</span>
                        Patient Flow
                      </h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-blue-950">How many patient inquiries do you receive per week?</p>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {['0–20', '20–50', '50–100', '100+'].map((option) => (
                              <label key={option} className="relative flex items-center justify-center p-3 rounded-xl border border-slate-100 bg-slate-50 cursor-pointer hover:bg-white hover:border-blue-200 transition-all group">
                                <input type="radio" name="weeklyInquiries" value={option} className="sr-only peer" required />
                                <span className="text-xs font-medium text-slate-600 peer-checked:text-blue-600 transition-colors">{option}</span>
                                <div className="absolute inset-0 border-2 border-transparent peer-checked:border-blue-600 rounded-xl pointer-events-none"></div>
                              </label>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-blue-950">How do patients contact your clinic? (Select all that apply)</p>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {['Phone Calls', 'WhatsApp', 'Google', 'Instagram', 'Walk-ins'].map((option) => (
                              <label key={option} className="relative flex items-center gap-2 p-3 rounded-xl border border-slate-100 bg-slate-50 cursor-pointer hover:bg-white hover:border-blue-200 transition-all">
                                <input type="checkbox" name="contactMethods" value={option} className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                                <span className="text-xs font-medium text-slate-600">{option}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SECTION 3 — PROBLEM IDENTIFICATION */}
                    <div className="space-y-4">
                      <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[10px]">03</span>
                        Problem Identification
                      </h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-blue-950">What challenges are you facing? (Select all that apply)</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {[
                              'Missed calls',
                              'Slow WhatsApp replies',
                              'No follow-up system',
                              'Low Google reviews',
                              'Weak social media presence',
                              'Low conversion from inquiries'
                            ].map((option) => (
                              <label key={option} className="relative flex items-center gap-2 p-3 rounded-xl border border-slate-100 bg-slate-50 cursor-pointer hover:bg-white hover:border-blue-200 transition-all">
                                <input type="checkbox" name="challenges" value={option} className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                                <span className="text-xs font-medium text-slate-600">{option}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-blue-950">What happens when a call is missed?</p>
                          <div className="grid grid-cols-2 gap-2">
                            {['Call back later', 'No action', 'Reception handles it', 'Not sure'].map((option) => (
                              <label key={option} className="relative flex items-center justify-center p-3 rounded-xl border border-slate-100 bg-slate-50 cursor-pointer hover:bg-white hover:border-blue-200 transition-all">
                                <input type="radio" name="missedCallAction" value={option} className="sr-only peer" required />
                                <span className="text-xs font-medium text-slate-600 peer-checked:text-blue-600 transition-colors">{option}</span>
                                <div className="absolute inset-0 border-2 border-transparent peer-checked:border-blue-600 rounded-xl pointer-events-none"></div>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SECTION 4 — CURRENT SYSTEM */}
                    <div className="space-y-4">
                      <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[10px]">04</span>
                        Current System
                      </h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-blue-950">Do you use any system for managing patient inquiries?</p>
                          <div className="grid grid-cols-2 gap-2">
                            {['No system', 'Manual (staff)', 'CRM / software', 'Not sure'].map((option) => (
                              <label key={option} className="relative flex items-center justify-center p-3 rounded-xl border border-slate-100 bg-slate-50 cursor-pointer hover:bg-white hover:border-blue-200 transition-all">
                                <input type="radio" name="currentSystem" value={option} className="sr-only peer" required />
                                <span className="text-xs font-medium text-slate-600 peer-checked:text-blue-600 transition-colors">{option}</span>
                                <div className="absolute inset-0 border-2 border-transparent peer-checked:border-blue-600 rounded-xl pointer-events-none"></div>
                              </label>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-blue-950">How quickly do you respond to new inquiries?</p>
                          <div className="grid grid-cols-2 gap-2">
                            {['Instantly', 'Within 10 minutes', '30+ minutes', 'Sometimes missed'].map((option) => (
                              <label key={option} className="relative flex items-center justify-center p-3 rounded-xl border border-slate-100 bg-slate-50 cursor-pointer hover:bg-white hover:border-blue-200 transition-all">
                                <input type="radio" name="responseSpeed" value={option} className="sr-only peer" required />
                                <span className="text-xs font-medium text-slate-600 peer-checked:text-blue-600 transition-colors">{option}</span>
                                <div className="absolute inset-0 border-2 border-transparent peer-checked:border-blue-600 rounded-xl pointer-events-none"></div>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SECTION 5 — BUSINESS LEVEL */}
                    <div className="space-y-4">
                      <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[10px]">05</span>
                        Business Level
                      </h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-blue-950">Monthly revenue range:</p>
                          <div className="grid grid-cols-2 gap-2">
                            {['Below ₹2L', '₹2L – ₹5L', '₹5L – ₹10L', '₹10L+'].map((option) => (
                              <label key={option} className="relative flex items-center justify-center p-3 rounded-xl border border-slate-100 bg-slate-50 cursor-pointer hover:bg-white hover:border-blue-200 transition-all">
                                <input type="radio" name="revenueRange" value={option} className="sr-only peer" required />
                                <span className="text-xs font-medium text-slate-600 peer-checked:text-blue-600 transition-colors">{option}</span>
                                <div className="absolute inset-0 border-2 border-transparent peer-checked:border-blue-600 rounded-xl pointer-events-none"></div>
                              </label>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-blue-950">Are you currently investing in growth?</p>
                          <div className="grid grid-cols-3 gap-2">
                            {['Yes', 'No', 'Planning'].map((option) => (
                              <label key={option} className="relative flex items-center justify-center p-3 rounded-xl border border-slate-100 bg-slate-50 cursor-pointer hover:bg-white hover:border-blue-200 transition-all">
                                <input type="radio" name="investingInGrowth" value={option} className="sr-only peer" required />
                                <span className="text-xs font-medium text-slate-600 peer-checked:text-blue-600 transition-colors">{option}</span>
                                <div className="absolute inset-0 border-2 border-transparent peer-checked:border-blue-600 rounded-xl pointer-events-none"></div>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SECTION 6 — INTENT */}
                    <div className="space-y-4">
                      <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[10px]">06</span>
                        Intent
                      </h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-blue-950">Why are you interested in improving patient flow?</p>
                          <textarea name="intentReason" required className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-blue-950 text-sm min-h-[100px]" placeholder="Tell us about your goals..."></textarea>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-blue-950">When are you looking to implement a solution?</p>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            {['Immediately', 'Within 30 days', 'Just exploring'].map((option) => (
                              <label key={option} className="relative flex items-center justify-center p-3 rounded-xl border border-slate-100 bg-slate-50 cursor-pointer hover:bg-white hover:border-blue-200 transition-all">
                                <input type="radio" name="implementationTimeline" value={option} className="sr-only peer" required />
                                <span className="text-xs font-medium text-slate-600 peer-checked:text-blue-600 transition-colors">{option}</span>
                                <div className="absolute inset-0 border-2 border-transparent peer-checked:border-blue-600 rounded-xl pointer-events-none"></div>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={status === 'loading'}
                        className="w-full bg-blue-950 hover:bg-blue-900 text-white font-inter font-bold py-5 rounded-2xl flex items-center justify-center gap-3 disabled:bg-slate-100 disabled:text-slate-400 shadow-2xl shadow-blue-950/20"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="w-6 h-6 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            Get My Clinic Growth Audit
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </motion.button>
                      
                      <p className="text-[12px] text-center text-blue-600 font-bold mt-6 leading-relaxed font-sora">
                        “Based on your answers, we will identify where your clinic is losing patients and show how to fix it.”
                      </p>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;

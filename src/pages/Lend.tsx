import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Plus, Trash2, ArrowRight, ShieldCheck, HelpCircle, AlertCircle, CheckCircle2, Wrench, Video, Tent, Music, Dribbble, Cpu, Gamepad2, Utensils, Wind, PlusCircle } from 'lucide-react';
import { CATEGORIES } from '../constants';
import { formatCurrency } from '../lib/utils';
import { Link } from 'react-router-dom';

const iconMap: Record<string, any> = {
  Photography: Camera,
  'Power Tools': Wrench,
  'Event & AV': Video,
  Camping: Tent,
  Music: Music,
  Sports: Dribbble,
  Electronics: Cpu,
  Gaming: Gamepad2,
  'Home & Kitchen': Utensils,
  Cleaning: Wind,
};

export default function Lend() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    price: '',
    value: '',
    description: '',
    condition: 'Excellent'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.category) newErrors.category = 'Select a category';
    if (!formData.price || Number(formData.price) <= 0) newErrors.price = 'Enter a valid price';
    if (!formData.value || Number(formData.value) <= 0) newErrors.value = 'Required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep1()) setStep(2);
  };

  const handleList = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setStep(3);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 md:pt-32 pb-24 px-6 md:px-8 max-w-4xl mx-auto"
    >
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[9px] font-black uppercase tracking-widest mb-4 border border-emerald-100">
            <PlusCircle className="w-3 h-3" />
            Lender Hub
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-none mb-4">List Gear.</h1>
          <p className="text-text-muted font-bold text-sm opacity-60 uppercase tracking-widest">Monetize your inventory in Bashundhara.</p>
          
          <div className="mt-10 flex items-center gap-2">
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className={`h-1 flex-1 rounded-full transition-all duration-700 ${i <= step ? 'bg-text-main glow-brand' : 'bg-black/[0.05]'}`}
              />
            ))}
          </div>
        </header>

        {step === 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Step 1: Photos */}
            <section className="bg-white p-6 md:p-10 rounded-[2.5rem] border border-black/[0.04] shadow-compact">
              <h2 className="text-xl font-black mb-8 flex items-center gap-3 tracking-tight">
                <span className="w-8 h-8 bg-text-main text-white rounded-xl flex items-center justify-center text-[10px] shadow-lg">1</span>
                Primary Details
              </h2>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-[0.2em] text-text-muted ml-1 opacity-50">Lending Title</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Sony A7III Mirrorless"
                    className="w-full bg-[#F8FAFC] border border-black/[0.03] h-16 px-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/10 focus:bg-white focus:border-brand/20 transition-all font-black text-lg tracking-tight placeholder:opacity-30"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                  {errors.title && <p className="text-red-500 text-[9px] font-black uppercase tracking-widest ml-2 mt-1">{errors.title}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-text-muted ml-1 opacity-50">Category</label>
                    <select 
                      className="w-full bg-[#F8FAFC] border border-black/[0.03] h-16 px-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/10 focus:bg-white focus:border-brand/20 transition-all font-black text-base appearance-none cursor-pointer"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      <option value="">Choose Category</option>
                      {CATEGORIES.map(cat => <option key={cat.label} value={cat.label}>{cat.label}</option>)}
                    </select>
                    {errors.category && <p className="text-red-500 text-[9px] font-black uppercase tracking-widest ml-2 mt-1">{errors.category}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-text-muted ml-1 opacity-50">Condition</label>
                    <select 
                      className="w-full bg-[#F8FAFC] border border-black/[0.03] h-16 px-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/10 focus:bg-white focus:border-brand/20 transition-all font-black text-base appearance-none cursor-pointer"
                      value={formData.condition}
                      onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                    >
                      <option>Brand New</option>
                      <option>Excellent</option>
                      <option>Good</option>
                      <option>Fair</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>

            <button 
              onClick={nextStep}
              className="w-full h-16 bg-text-main text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-brand transition-all flex items-center justify-center gap-2 shadow-lg active:scale-[0.97] group"
            >
              Continue to Pricing
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <section className="bg-white p-6 md:p-10 rounded-[2.5rem] border border-black/[0.04] shadow-compact space-y-10">
              <h2 className="text-xl font-black mb-8 flex items-center gap-3 tracking-tight">
                <span className="w-8 h-8 bg-text-main text-white rounded-xl flex items-center justify-center text-[10px] shadow-lg">2</span>
                Valuation
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-[0.2em] text-text-muted ml-1 opacity-50">Daily Yield</label>
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-xl opacity-20">৳</span>
                    <input 
                      type="number" 
                      placeholder="800"
                      className="w-full bg-[#F8FAFC] border border-black/[0.03] h-20 pl-12 pr-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/10 focus:bg-white focus:border-brand/20 transition-all font-black text-2xl tracking-tighter"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-[0.2em] text-text-muted ml-1 opacity-50">Replacement Value</label>
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-xl opacity-20">৳</span>
                    <input 
                      type="number" 
                      placeholder="120k"
                      className="w-full bg-[#F8FAFC] border border-black/[0.03] h-20 pl-12 pr-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/10 focus:bg-white focus:border-brand/20 transition-all font-black text-2xl tracking-tighter opacity-60"
                      value={formData.value}
                      onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                    />
                  </div>
                  <p className="text-[8px] text-emerald-600 font-bold uppercase tracking-widest ml-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Covered by bKash Escrow
                  </p>
                </div>
              </div>

              <div className="space-y-8 pt-8 border-t border-black/[0.03]">
                <div className="space-y-4">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-text-main opacity-80">Media Inventory</h3>
                  <div className="grid grid-cols-4 gap-3">
                    <button className="aspect-square rounded-2xl border-2 border-dashed border-black/[0.05] flex flex-col items-center justify-center gap-2 text-text-muted hover:border-brand hover:text-brand transition-all bg-white hover:bg-brand/[0.02] group active:scale-95">
                      <Camera className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </button>
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="aspect-square rounded-2xl bg-black/[0.02] border border-black/[0.01]" />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <div className="flex gap-3">
              <button 
                onClick={() => setStep(1)}
                className="w-24 h-16 bg-black/[0.03] text-text-main rounded-2xl font-black uppercase tracking-widest text-[9px] hover:bg-black/[0.06] transition-all active:scale-95"
              >
                Back
              </button>
              <button 
                onClick={handleList}
                disabled={isSubmitting}
                className="flex-1 h-16 bg-text-main text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-brand transition-all shadow-lg flex items-center justify-center glow-brand disabled:opacity-80 active:scale-[0.97]"
              >
                {isSubmitting ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                ) : (
                  "Verify & Publish"
                )}
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 space-y-10 bg-white rounded-[3rem] border border-black/[0.04] shadow-compact"
          >
            <div className="w-32 h-32 bg-brand text-white rounded-3xl flex items-center justify-center mx-auto shadow-elevated rotate-6 glow-brand">
              <CheckCircle2 className="w-16 h-16" />
            </div>
            <div className="space-y-2 px-8">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none">Asset Live.</h2>
              <p className="text-text-muted text-[11px] font-bold uppercase tracking-[0.2em] opacity-40">
                Visible to Bashundhara's premium hardware network.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-12">
              <Link to="/dashboard" className="w-full h-16 bg-text-main text-white rounded-2xl flex items-center justify-center font-black uppercase tracking-widest text-[9px] hover:bg-brand transition-all shadow-lg active:scale-95">
                Go to Hub
              </Link>
              <button 
                onClick={() => setStep(1)}
                className="w-full h-16 bg-black/[0.03] text-text-main rounded-2xl flex items-center justify-center font-black uppercase tracking-widest text-[9px] hover:bg-black/[0.06] transition-all active:scale-95"
              >
                List Another
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

function Tooltip({ text }: { text: string }) {
  return (
    <div className="group relative">
      <HelpCircle className="w-3.5 h-3.5 text-text-muted cursor-help" />
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-text-main text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 font-bold uppercase tracking-tighter text-center">
        {text}
      </div>
    </div>
  );
}

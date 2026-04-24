import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Camera, Save, ArrowLeft, ShieldCheck, User, MapPin, Mail, Phone, Lock } from 'lucide-react';
import { MOCK_USERS } from '../constants';

export default function EditProfile() {
  const navigate = useNavigate();
  const currentUser = MOCK_USERS[0];
  const [isSaving, setIsSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    name: currentUser.name,
    location: currentUser.location,
    bio: "Tech explorer and community-first lender based in Bashundhara. I maintain a specialized collection of hardware tailored for digital creators and builders.",
    email: "siam@rentmate.bd",
    phone: "+880 1712-345678"
  });

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      navigate(`/profile/${currentUser.id}`);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="pt-28 md:pt-40 px-6 md:px-8 max-w-4xl mx-auto"
    >
      <div className="max-w-3xl mx-auto">
        <header className="mb-12 flex items-center justify-between">
          <div>
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-text-muted hover:text-text-main transition-colors mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back
            </button>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">Edit Profile.</h1>
          </div>
          
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="h-16 px-10 bg-text-main text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-[10px] hover:bg-brand transition-all shadow-xl shadow-black/10 flex items-center gap-3 disabled:opacity-50"
          >
            {isSaving ? (
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            Save Changes
          </button>
        </header>

        <div className="space-y-12">
          {/* Profile Picture */}
          <section className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-black/[0.05] shadow-premium relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="relative group cursor-pointer">
                <img 
                  src={currentUser.avatar} 
                  className="w-40 h-40 rounded-[3rem] object-cover ring-8 ring-black/[0.02] group-hover:ring-brand/10 transition-all duration-500" 
                  alt="Profile" 
                />
                <div className="absolute inset-0 bg-black/40 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="text-center md:text-left space-y-4">
                <h3 className="text-2xl font-black tracking-tight">Identity Image</h3>
                <p className="text-sm text-text-muted font-medium opacity-60 max-w-xs">
                  A clear profile photo helps build trust within the community. Front-facing shots work best.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <button className="px-6 py-3 bg-black/[0.03] rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black/5 transition-all">Upload New</button>
                  <button className="px-6 py-3 text-red-500 text-[10px] font-black uppercase tracking-widest hover:bg-red-50 rounded-xl transition-all">Remove</button>
                </div>
              </div>
            </div>
          </section>

          {/* Core Info */}
          <section className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-black/[0.05] shadow-premium space-y-10">
            <h2 className="text-2xl font-black tracking-tight mb-4 flex items-center gap-3">
              <User className="w-6 h-6 text-brand" />
              Public Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted ml-4">Full Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#F1F5F9] border border-transparent h-16 px-8 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:bg-white focus:border-brand/30 transition-all font-bold text-lg"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted ml-4">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted opacity-40" />
                  <input 
                    type="text" 
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full bg-[#F1F5F9] border border-transparent h-16 pl-14 pr-8 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:bg-white focus:border-brand/30 transition-all font-bold text-lg"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted ml-4">Bio / About you</label>
              <textarea 
                rows={4}
                value={formData.bio}
                onChange={(e) => setFormData({...formData, bio: e.target.value})}
                className="w-full bg-[#F1F5F9] border border-transparent p-8 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-brand/20 focus:bg-white focus:border-brand/30 transition-all font-medium text-text-main resize-none"
              />
            </div>
          </section>

          {/* Contact & Security */}
          <section className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-black/[0.05] shadow-premium space-y-10">
            <h2 className="text-2xl font-black tracking-tight mb-4 flex items-center gap-3">
              <Lock className="w-6 h-6 text-brand" />
              Contact & Security
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted ml-4">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted opacity-40" />
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[#F1F5F9] border border-transparent h-16 pl-14 pr-8 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:bg-white focus:border-brand/30 transition-all font-bold text-lg"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted ml-4">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted opacity-40" />
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-[#F1F5F9] border border-transparent h-16 pl-14 pr-8 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:bg-white focus:border-brand/30 transition-all font-bold text-lg"
                  />
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button className="flex items-center gap-3 px-8 h-16 bg-black text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-brand transition-all">
                Change Password
              </button>
            </div>
          </section>

          {/* Verification Status */}
          <section className="bg-brand/[0.03] p-10 rounded-[3rem] border border-brand/10 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-brand" />
              </div>
              <div>
                <h4 className="text-xl font-black tracking-tight">Identity Verified</h4>
                <p className="text-sm text-text-muted font-medium opacity-60">NID Verification completed on 12 Jan, 2024</p>
              </div>
            </div>
            <span className="hidden md:block px-6 py-2 bg-emerald-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest">Active</span>
          </section>
        </div>
      </div>
    </motion.div>
  );
}

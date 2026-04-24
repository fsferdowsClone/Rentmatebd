import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, HelpCircle, ShieldCheck, MapPin, Calendar, MessageCircle, AlertCircle, ArrowLeft, CheckCircle2, MessageSquare, Star } from 'lucide-react';
import MapLibreComponent from '../components/MapLibreComponent';
import { MOCK_LISTINGS, MOCK_USERS } from '../constants';
import { formatCurrency } from '../lib/utils';

export default function ListingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'processing' | 'success'>('idle');
  
  const listing = MOCK_LISTINGS.find(l => l.id === id);
  const owner = MOCK_USERS.find(u => u.id === listing?.ownerId);

  const handleBooking = () => {
    setBookingStatus('processing');
    setTimeout(() => {
      setBookingStatus('success');
    }, 1500);
  };

  if (!listing || !owner) return <div className="pt-24 px-8 text-center font-black">Listing not found.</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 md:pt-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <button 
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-text-muted hover:text-brand transition-all group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Visuals - High Density */}
          <section className="lg:col-span-7 space-y-4">
            <motion.div 
              layoutId={`image-${listing.id}`}
              className="aspect-[4/3] md:aspect-[16/11] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#F8FAFC] group relative shadow-elevated border border-black/[0.03]"
            >
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImage}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  src={listing.images[activeImage]} 
                  alt={listing.title}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 flex gap-1.5 z-10 bg-black/10 backdrop-blur-md p-2 rounded-xl">
                {listing.images.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`h-1 rounded-full transition-all duration-500 ${i === activeImage ? 'w-8 bg-white' : 'w-1 bg-white/40'}`}
                  />
                ))}
              </div>
            </motion.div>
            
            <div className="grid grid-cols-4 gap-3 md:gap-4 overflow-x-auto no-scrollbar py-2">
              {listing.images.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-square rounded-xl md:rounded-[1.5rem] overflow-hidden border-2 transition-all shrink-0 ${i === activeImage ? 'border-brand scale-95 shadow-lg' : 'border-transparent opacity-50 hover:opacity-100 hover:scale-[1.02]'}`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </button>
              ))}
            </div>
          </section>

          {/* Info - Ultra Compact */}
          <section className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-2.5 py-1 bg-black/[0.03] border border-black/[0.03] rounded-lg text-[9px] font-black uppercase tracking-widest text-text-muted">
                  {listing.category}
                </span>
                <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-lg text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  {listing.condition}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter leading-tight">{listing.title}</h1>
              <div className="flex items-center gap-2.5 text-text-muted text-[11px] font-bold px-3 py-1.5 bg-black/[0.02] border border-black/[0.02] rounded-lg self-start inline-flex">
                <MapPin className="w-3 h-3 text-brand" />
                {listing.location} • {listing.distance}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-5 rounded-[1.5rem] bg-white border border-black/[0.05] shadow-compact">
                <p className="text-[9px] font-black uppercase tracking-widest text-text-muted mb-1">Repl. Value</p>
                <p className="text-lg font-black tracking-tight">{formatCurrency(listing.replacementValue).replace('BDT', '৳')}</p>
              </div>
              <div className="p-2 rounded-[1.5rem] bg-white border border-black/[0.05] shadow-compact overflow-hidden relative group cursor-pointer h-full min-h-[80px]">
                <div className="absolute inset-0 grayscale opacity-40">
                  <MapLibreComponent 
                    center={[90.4143, 23.8183]} 
                    zoom={13} 
                    interactive={false}
                  />
                </div>
                <div className="relative z-10 flex items-center justify-center h-full gap-3 px-3">
                  <div className="relative shrink-0">
                    <div className="w-8 h-8 bg-brand text-white rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <MapPin className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-text-muted opacity-80 leading-tight">Verified Area</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-text-muted">Description</h3>
              <p className="text-base text-text-main/70 leading-relaxed font-medium opacity-80">
                {listing.description}
              </p>
            </div>

            {/* Lender - More Compact */}
            <div className="pt-6 border-t border-black/[0.05]">
              <Link to={`/profile/${owner.id}`} className="flex items-center gap-4 p-3 rounded-[1.5rem] bg-black/[0.02] border border-transparent hover:border-brand/20 hover:bg-white hover:shadow-compact transition-all group">
                <div className="relative shrink-0">
                  <img src={owner.avatar} className="w-14 h-14 rounded-xl object-cover ring-4 ring-black/5" alt="" />
                  {owner.isVerified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-lg flex items-center justify-center shadow-lg border border-black/5">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <h4 className="font-black text-base tracking-tight group-hover:text-brand transition-colors mb-0.5">{owner.name}</h4>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-[11px] font-bold">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" /> 
                      {owner.rating}
                    </div>
                    <div className="text-[9px] font-black uppercase tracking-tighter text-text-muted">
                      {owner.totalReviews} Rentals
                    </div>
                    <div className="text-[9px] font-black uppercase tracking-tighter text-brand">
                      Fast Reply
                    </div>
                  </div>
                </div>
                
                <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-brand transform group-hover:translate-x-1 transition-all" />
              </Link>
            </div>

            {/* Booking Card - Ultra Compact & Vibrant */}
            <div className="bg-text-main p-6 md:p-8 rounded-[2.5rem] shadow-elevated relative overflow-hidden text-white">
              <AnimatePresence mode="wait">
                {bookingStatus === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-2 space-y-6"
                  >
                    <div className="w-16 h-16 bg-brand text-white rounded-[1.5rem] flex items-center justify-center mx-auto shadow-2xl">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black tracking-tight">Order Placed!</h3>
                      <p className="text-[10px] uppercase tracking-widest transition-opacity opacity-60 mt-2">Owner will confirm soon.</p>
                    </div>
                    <Link 
                      to={`/chat/${listing.id}`}
                      className="w-full h-14 bg-white text-text-main rounded-xl flex items-center justify-center gap-2 font-black uppercase tracking-widest text-[9px] hover:bg-brand hover:text-white transition-all shadow-lg"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      Chat with Lender
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div key="idle" exit={{ opacity: 0, x: -10 }} className="relative z-10">
                    <div className="flex items-baseline justify-between mb-8">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl font-black tracking-tighter">৳{listing.pricePerDay}</span>
                        <span className="opacity-40 text-[9px] font-black uppercase tracking-[0.2em]">/ day</span>
                      </div>
                      <div className="px-3 py-1 bg-white/10 rounded-lg text-[9px] font-black uppercase tracking-widest">Available</div>
                    </div>

                    <div className="grid grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden mb-8 border border-white/10">
                      <div className="bg-white/5 p-4">
                        <div className="text-[8px] font-black uppercase tracking-[0.2em] opacity-40 mb-1">Check-in</div>
                        <div className="text-xs font-black">25 Apr, 24</div>
                      </div>
                      <div className="bg-white/5 p-4 border-l border-white/10">
                        <div className="text-[8px] font-black uppercase tracking-[0.2em] opacity-40 mb-1">Return</div>
                        <div className="text-xs font-black">27 Apr, 24</div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2 mb-8 opacity-70">
                      <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest">
                        <span className="opacity-50 text-[9px]">Subtotal (2d)</span>
                        <span>৳{listing.pricePerDay * 2}</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest">
                        <span className="opacity-50 text-[9px]">Protection</span>
                        <span>৳300</span>
                      </div>
                      <div className="pt-4 flex justify-between items-baseline border-t border-white/10">
                        <span className="font-black text-[10px] uppercase tracking-[0.2em]">Total</span>
                        <span className="text-2xl font-black text-brand tracking-tighter">৳{listing.pricePerDay * 2 + 300}</span>
                      </div>
                    </div>

                    <button 
                      onClick={handleBooking}
                      disabled={bookingStatus === 'processing'}
                      className="w-full h-16 bg-brand text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-text-main transition-all shadow-xl flex items-center justify-center"
                    >
                      {bookingStatus === 'processing' ? (
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                      ) : (
                        "Instant Rent"
                      )}
                    </button>
                    
                    <div className="flex items-center gap-2 justify-center mt-6 text-white/30">
                      <ShieldCheck className="w-4 h-4" />
                      <p className="text-[8px] font-black uppercase tracking-widest italic">LendAset Secured</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}

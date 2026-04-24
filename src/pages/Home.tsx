import React from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Camera, Wrench, Video, Tent, Music, Dribbble, Cpu, ArrowRight, ShieldCheck, MessageCircle, Gamepad2, Utensils, Wind } from 'lucide-react';
import { CATEGORIES, MOCK_LISTINGS } from '../constants';
import ListingCard from '../components/ListingCard';
import { Link, useNavigate } from 'react-router-dom';

const iconMap: Record<string, any> = {
  Camera: Camera,
  Wrench: Wrench,
  Video: Video,
  Tent: Tent,
  Music: Music,
  Dribbble: Dribbble,
  Cpu: Cpu,
  Gamepad2: Gamepad2,
  Utensils: Utensils,
  Wind: Wind,
};

export default function Home() {
  const navigate = useNavigate();
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24"
    >
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="bg-text-main rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-16 text-white flex flex-col items-center text-center relative overflow-hidden shadow-elevated">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          
          <div className="relative z-10 max-w-4xl w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-6 md:mb-10 border border-white/10 shadow-lg"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              Live in Bashundhara R/A
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl md:text-8xl font-black mb-4 md:mb-8 leading-none tracking-tighter"
            >
              RentMate<span className="text-brand">BD</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[13px] md:text-lg opacity-60 font-medium max-w-lg mx-auto mb-10 md:mb-16 leading-relaxed px-4"
            >
              Professional gear. Neighborly trust. <br className="hidden md:block" /> Secure asset sharing for the modern creator.
            </motion.p>

            {/* Sliding Hero Images - Optimized */}
            <div className="w-full overflow-hidden mb-12 md:mb-20 relative -mx-4 md:mx-0">
               <motion.div 
                 animate={{ x: [0, -1200] }}
                 transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                 className="flex gap-4 md:gap-6 whitespace-nowrap"
               >
                 {[...MOCK_LISTINGS, ...MOCK_LISTINGS].map((item, i) => (
                   <motion.div 
                     key={`${item.id}-${i}`} 
                     className="w-40 h-40 md:w-56 md:h-56 rounded-2xl md:rounded-[2.5rem] overflow-hidden shrink-0 border border-white/5 shadow-elevated group cursor-pointer"
                   >
                     <img 
                       src={item.images[0]} 
                       className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                       alt="" 
                     />
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <span className="text-[9px] font-black uppercase tracking-widest text-white border border-white/20 px-3 py-1.5 rounded-lg">View Gear</span>
                     </div>
                   </motion.div>
                 ))}
               </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto"
            >
              <Link to="/explore" className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 h-14 md:h-16 bg-brand text-white rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-[11px] hover:bg-[#FF8A3D] transition-all shadow-xl shadow-brand/20 active:scale-95 group glow-brand">
                Browse Collection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/lend" className="w-full sm:w-auto inline-flex items-center justify-center px-10 h-14 md:h-16 bg-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-[11px] hover:bg-white/20 transition-all border border-white/10 active:scale-95">
                Start Listing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Ticker */}
      <section className="mt-8 overflow-hidden py-6 opacity-30 whitespace-nowrap border-y border-black/[0.03]">
        <div className="flex gap-16 md:gap-32 animate-infinite-scroll">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex gap-16 md:gap-32">
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                <ShieldCheck className="w-3 h-3 md:w-4 md:h-4" /> NID VERIFIED
              </span>
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                <Search className="w-3 h-3 md:w-4 md:h-4" /> BKASH SECURE
              </span>
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                <MessageCircle className="w-3 h-3 md:w-4 md:h-4" /> 24/7 SUPPORT
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mt-12 md:mt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2.5 py-2 overflow-x-auto no-scrollbar scroll-smooth">
          <Link to="/explore" className="cat-pill-vibrant active shrink-0">All Assets</Link>
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => navigate(`/explore`, { state: { category: cat.label } })}
              className="cat-pill-vibrant shrink-0"
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid Section */}
      <section className="mt-16 md:mt-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-1 rounded-full bg-brand" />
              <span className="text-[9px] font-black uppercase tracking-widest text-text-muted">Featured Items</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none">Nearby Assets.</h2>
          </div>
          <Link to="/explore" className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-brand items-center gap-2 hover:gap-3 transition-all hidden sm:flex border-b border-brand/20 pb-1">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {MOCK_LISTINGS.map((listing) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={listing.id}
            >
              <ListingCard listing={listing} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="mt-32 md:mt-48 px-4 md:px-12 max-w-7xl mx-auto pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight tracking-tighter">Safe. <span className="text-brand">Secure.</span><br />Community-First.</h2>
            <div className="space-y-6 md:space-y-10">
              {[
                { title: 'NID Verification', desc: 'Secure identity checks via Gov API.', icon: ShieldCheck, color: 'text-safe bg-safe/10' },
                { title: 'bKash Protection', desc: 'Digital deposits held in escrow.', icon: MessageCircle, color: 'text-brand bg-brand/10' },
                { title: 'Rating System', desc: 'Two-way verified reviews.', icon: ArrowRight, color: 'text-blue-600 bg-blue-50' }
              ].map((item) => (
                <div key={item.title} className="flex gap-5">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-[13px] md:text-sm uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-text-muted text-xs md:text-sm leading-relaxed font-medium opacity-60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-[#F8FAFC] rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-16 border border-black/[0.03] shadow-compact text-center lg:text-left order-1 lg:order-2">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-emerald-50 rounded-xl text-emerald-600 font-black text-[10px] uppercase tracking-widest mb-6 border border-emerald-100">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Verified Protocol
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-6 tracking-tight">The trusted layer for gear sharing.</h3>
            <p className="text-text-muted font-medium text-sm md:text-base mb-10 opacity-70 leading-relaxed">
              RentMate BD is transforming idle household assets into income-generating resources while giving renters affordable, verified access to premium gear.
            </p>
            <button className="w-full sm:w-auto bg-text-main text-white px-10 h-14 md:h-16 rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-brand transition-all shadow-compact hover:shadow-lg active:scale-95">
              Launch Partnership
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

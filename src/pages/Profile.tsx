import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, MapPin, Star, Calendar, MessageSquare, Award, Settings, CheckCircle2 } from 'lucide-react';
import { MOCK_USERS, MOCK_LISTINGS } from '../constants';
import ListingCard from '../components/ListingCard';

export default function Profile() {
  const { id } = useParams();
  const currentUser = MOCK_USERS[0];
  const user = MOCK_USERS.find(u => u.id === id);
  const userListings = MOCK_LISTINGS.filter(l => l.ownerId === id);
  const isOwnProfile = id === currentUser.id;

  if (!user) return (
    <div className="pt-40 text-center space-y-6">
      <h1 className="text-4xl font-black">User Not Found</h1>
      <Link to="/" className="text-brand font-black uppercase tracking-widest text-xs">Return Home</Link>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 md:pt-32 pb-24 px-6 md:px-8 max-w-6xl mx-auto"
    >
      <div className="bg-white rounded-[3rem] border border-black/[0.04] shadow-compact overflow-hidden">
        {/* Cover - Slimmer */}
        <div className="h-40 md:h-64 bg-text-main relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent animate-pulse" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="px-6 md:px-12 pb-12 -mt-16 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
              <div className="relative inline-block group">
                <img 
                  src={user.avatar} 
                  className="w-32 h-32 md:w-44 md:h-44 rounded-3xl object-cover ring-[12px] ring-white shadow-elevated transition-transform group-hover:scale-105 duration-1000" 
                  alt={user.name} 
                />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center border-[4px] border-white shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                  <ShieldCheck className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="text-center md:text-left pb-2">
                <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-none mb-4">{user.name}</h1>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <div className="flex items-center gap-2 px-3 py-1 bg-black/[0.03] rounded-lg text-[9px] font-black uppercase tracking-widest text-text-muted">
                    <MapPin className="w-3 h-3 text-brand" />
                    {user.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-brand">
                    {user.rating} <Star className="w-3 h-3 fill-current" />
                    <span className="text-text-muted ml-0.5 opacity-40">({user.totalReviews})</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              {isOwnProfile ? (
                <Link 
                  to="/profile/edit"
                  className="flex-1 md:flex-none h-12 px-6 bg-brand text-white rounded-xl font-black uppercase tracking-widest text-[9px] hover:bg-text-main transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                >
                  <Settings className="w-4 h-4" /> Edit
                </Link>
              ) : (
                <button className="flex-1 md:flex-none h-12 px-6 bg-text-main text-white rounded-xl font-black uppercase tracking-widest text-[9px] hover:bg-brand transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2">
                  <MessageSquare className="w-4 h-4" /> Message
                </button>
              )}
              <button className="w-12 h-12 bg-black/[0.03] rounded-xl flex items-center justify-center hover:bg-black/5 transition-all active:scale-95">
                <Settings className="w-4 h-4 text-text-muted" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 pt-10 border-t border-black/[0.03]">
            <div className="xl:col-span-4 space-y-8">
              <div className="bg-black/[0.02] p-8 rounded-3xl border border-black/[0.02]">
                <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-text-muted mb-6">Vital Stats</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Stock Volume', value: userListings.length, icon: Calendar },
                    { label: 'Trust Level', value: 'High', icon: Award },
                    { label: 'ID Verified', value: 'YES', icon: CheckCircle2 }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-compact group-hover:scale-110 transition-transform">
                          <stat.icon className="w-4 h-4 text-brand" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-text-muted opacity-60">{stat.label}</span>
                      </div>
                      <span className="text-sm font-black tracking-tight">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="px-2">
                <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-text-muted mb-4">Focus Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {['Photography', 'Hardware', 'Drones'].map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-text-main/5 text-text-main text-[9px] font-black uppercase tracking-widest rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="xl:col-span-8 space-y-12">
              <div>
                <h3 className="text-xl font-black tracking-tight mb-4 text-text-main">Bio.</h3>
                <p className="text-sm text-text-muted font-medium leading-relaxed opacity-70">
                  Curated hardware lender in {user.location}. Professional focus on visual production and creative tools. All assets under strict maintenance protocol.
                </p>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-black tracking-tight">Active In-Stock</h3>
                  <div className="text-[10px] font-black uppercase tracking-widest text-text-muted opacity-40">{userListings.length} Assets</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {userListings.map(listing => (
                    <Link to={`/listing/${listing.id}`} key={listing.id} className="group">
                      <div className="aspect-[16/11] bg-black/[0.02] rounded-3xl overflow-hidden mb-4 border border-black/[0.04] shadow-compact relative">
                        <img src={listing.images[0]} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="" />
                        <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[9px] font-black uppercase tracking-widest shadow-lg">
                          ৳{listing.pricePerDay}
                        </div>
                      </div>
                      <h4 className="font-black text-base tracking-tight leading-none group-hover:text-brand transition-colors line-clamp-1">{listing.title}</h4>
                      <p className="text-[9px] font-black text-text-muted uppercase tracking-widest mt-1.5">{listing.category}</p>
                    </Link>
                  ))}
                </div>
                <button className="w-full mt-10 h-16 bg-black/[0.02] rounded-2xl border border-black/[0.04] font-black uppercase tracking-widest text-[10px] hover:bg-black/5 transition-all text-text-muted active:scale-98">
                  Browse Full Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

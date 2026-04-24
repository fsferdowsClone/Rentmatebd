import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { Listing } from '../types';
import { formatCurrency } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface ListingCardProps {
  listing: Listing;
  variant?: 'grid' | 'list';
}

export default function ListingCard({ listing, variant = 'grid' }: ListingCardProps) {
  if (variant === 'list') {
    return (
      <motion.div
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
      >
          <Link to={`/listing/${listing.id}`} className="group block">
          <div className="card-vibrant flex flex-col md:flex-row gap-4 p-3 md:p-3.5">
            <div className="relative w-full md:w-40 aspect-[16/9] md:aspect-square rounded-2xl overflow-hidden bg-[#F8FAFC] shrink-0">
              <img 
                src={listing.images[0]} 
                alt={listing.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <AnimatePresence>
                {listing.isSmartPriced && (
                  <motion.div 
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute top-2 left-2 bg-safe text-white px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-widest shadow-lg"
                  >
                    Verified
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex-1 flex flex-col justify-between py-0.5 px-0.5">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-sans font-bold text-sm md:text-base group-hover:text-brand transition-colors tracking-tight leading-tight">{listing.title}</h3>
                  <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-yellow-400/10 rounded-md text-[9px] font-black text-yellow-700">
                    <span>★</span>
                    <span>4.9</span>
                  </div>
                </div>
                <p className="text-[11px] text-text-muted line-clamp-2 mb-3 font-medium leading-normal opacity-50">
                  {listing.description}
                </p>
                <div className="flex items-center gap-3 text-[8px] text-text-muted font-black uppercase tracking-[0.1em] opacity-40">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5" />
                    {listing.distance}
                  </div>
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-2.5 h-2.5" />
                    Secure
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-black/[0.02]">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-base font-black text-text-main tracking-tighter">৳{listing.pricePerDay}</span>
                  <span className="text-text-muted text-[8px] font-black uppercase tracking-widest opacity-30">/day</span>
                </div>
                <button className="px-4 py-2 bg-text-main text-white rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-brand transition-all active:scale-95">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Link to={`/listing/${listing.id}`} className="group block">
        <div className="card-vibrant h-full flex flex-col p-2.5 md:p-3">
          <div className="relative aspect-[16/14] rounded-2xl md:rounded-[1.5rem] overflow-hidden mb-3 bg-[#F8FAFC]">
            <img 
              src={listing.images[0]} 
              alt={listing.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute top-2 left-2 flex gap-1.5">
              {listing.isSmartPriced && (
                <div className="bg-safe text-white px-2 py-0.5 rounded-md text-[7px] font-black uppercase tracking-widest shadow-lg">
                  Verified
                </div>
              )}
            </div>
            <button className="absolute top-2 right-2 w-7 h-7 bg-white/20 hover:bg-brand/80 backdrop-blur-md rounded-lg flex items-center justify-center transition-all group/heart active:scale-90 border border-white/20">
              <Heart className="w-3.5 h-3.5 text-white group-hover/heart:fill-white" />
            </button>
          </div>
          <div className="px-1 flex-1 flex flex-col justify-between">
            <div className="mb-2">
              <h3 className="font-sans font-bold text-[13px] md:text-sm mb-1 line-clamp-1 group-hover:text-brand transition-colors tracking-tight leading-tight">{listing.title}</h3>
              <div className="flex items-center justify-between text-[8px] md:text-[9px] font-black uppercase tracking-[0.1em] text-text-muted opacity-50">
                <span className="flex items-center gap-1"><MapPin className="w-2.5 h-2.5" /> {listing.distance}</span>
                <span className="flex items-center gap-0.5"><span className="text-brand">★</span> 4.9</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-black/[0.02]">
              <div className="flex items-baseline gap-0.5">
                <span className="text-sm md:text-base font-black text-text-main tracking-tighter">৳{listing.pricePerDay}</span>
                <span className="text-text-muted text-[8px] font-black uppercase tracking-widest opacity-40">/d</span>
              </div>
              <div className="w-6 h-6 bg-black/[0.03] group-hover:bg-brand rounded-md flex items-center justify-center text-text-main group-hover:text-white transition-all shadow-compact">
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

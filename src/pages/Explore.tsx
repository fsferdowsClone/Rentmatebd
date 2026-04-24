import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, MapPin, Grid, List as ListIcon, X, Map as MapIcon } from 'lucide-react';
import { CATEGORIES, MOCK_LISTINGS } from '../constants';
import ListingCard from '../components/ListingCard';
import { useLocation } from 'react-router-dom';
import MapLibreComponent from '../components/MapLibreComponent';

export default function Explore() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(location.state?.category || null);
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'map'>('grid');

  const filteredListings = MOCK_LISTINGS.filter(l => {
    const matchesSearch = l.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || l.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const mapMarkers = filteredListings.map((listing, i) => ({
    id: listing.id,
    position: [
      90.4143 + (Math.cos(i * 5678) * 0.01), // Lng
      23.8183 + (Math.sin(i * 1234) * 0.01),  // Lat
    ] as [number, number],
  }));

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 md:pt-28 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <header className="mb-6 md:mb-10">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-none">Explore Gear.</h1>
            <div className="hidden sm:flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-text-muted bg-black/[0.03] px-4 py-2 rounded-lg border border-black/[0.02]">
              <MapPin className="w-3 h-3 text-brand" />
              Bashundhara R/A
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-muted transition-colors group-focus-within:text-brand" />
              <input 
                type="text" 
                placeholder="Search premium hardware..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-black/[0.04] shadow-compact h-14 pl-12 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/10 transition-all text-sm font-medium placeholder:text-text-muted/40"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-black/5 rounded-full transition-all"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
            
            <div className="flex gap-2 w-full md:w-auto">
              <div className="flex-1 md:flex-none flex bg-white p-1 rounded-xl border border-black/[0.04] shadow-compact">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`flex-1 md:flex-none p-2.5 rounded-lg transition-all active:scale-90 flex items-center justify-center ${viewMode === 'grid' ? 'bg-text-main text-white' : 'text-text-muted hover:text-text-main hover:bg-black/[0.02]'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`flex-1 md:flex-none p-2.5 rounded-lg transition-all active:scale-90 flex items-center justify-center ${viewMode === 'list' ? 'bg-text-main text-white' : 'text-text-muted hover:text-text-main hover:bg-black/[0.02]'}`}
                >
                  <ListIcon className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setViewMode('map')}
                  className={`flex-1 md:flex-none p-2.5 rounded-lg transition-all active:scale-90 flex items-center justify-center ${viewMode === 'map' ? 'bg-text-main text-white' : 'text-text-muted hover:text-text-main hover:bg-black/[0.02]'}`}
                >
                  <MapIcon className="w-4 h-4" />
                </button>
              </div>

              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 h-14 rounded-xl border border-black/[0.04] bg-white font-black text-[9px] uppercase tracking-widest hover:border-brand/20 transition-all shadow-compact group active:scale-95">
                <SlidersHorizontal className="w-3.5 h-3.5 text-text-muted group-hover:text-brand transition-colors" />
                Filters
              </button>
            </div>
          </div>

          <div className="mt-6 flex gap-2.5 overflow-x-auto no-scrollbar py-2 border-t border-black/[0.02] pt-6 items-center">
            <button 
              onClick={() => setSelectedCategory(null)}
              className={`cat-pill-vibrant shrink-0 ${!selectedCategory ? 'active' : ''}`}
            >
              All Assets
            </button>
            <div className="w-px h-4 bg-black/[0.05] shrink-0 mx-1" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setSelectedCategory(cat.label)}
                className={`cat-pill-vibrant shrink-0 ${selectedCategory === cat.label ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </header>

        {filteredListings.length > 0 ? (
          viewMode === 'map' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full aspect-[4/3] sm:aspect-[16/7] bg-[#F8FAFC] rounded-[2rem] md:rounded-[2.5rem] border border-[#E2E8F0] overflow-hidden group shadow-compact"
            >
              <MapLibreComponent 
                markers={mapMarkers}
                zoom={14}
              />
              <div className="absolute bottom-6 left-6 z-10 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-black/5 shadow-lg">
                <span className="text-[9px] font-black uppercase tracking-widest text-text-muted">OpenFreeMap Tiles</span>
              </div>
            </motion.div>
          ) : (
            <div className={viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10" : "flex flex-col gap-6"}>
              {filteredListings.map((listing) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  key={listing.id}
                >
                  <ListingCard listing={listing} variant={viewMode === 'list' ? 'list' : 'grid'} />
                </motion.div>
              ))}
            </div>
          )
        ) : (
          <div className="py-32 text-center space-y-4">
            <div className="w-16 h-16 bg-black/5 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-black/[0.02]">
              <Search className="w-6 h-6 text-black/10" />
            </div>
            <h2 className="text-xl font-black tracking-tighter">Zero assets match.</h2>
            <p className="text-text-muted text-[11px] font-bold uppercase tracking-widest opacity-60">Try clearing filters.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

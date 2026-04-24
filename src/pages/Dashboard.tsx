import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { LayoutDashboard, ShoppingCart, Wallet, Settings, Bell, ChevronRight, Package, ArrowUpRight, ArrowDownLeft, PlusCircle } from 'lucide-react';
import { formatCurrency } from '../lib/utils';
import { MOCK_LISTINGS } from '../constants';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Earnings', value: 12450, icon: Wallet, color: 'bg-emerald-50 text-emerald-600' },
    { label: 'Active Rents', value: 3, icon: Package, color: 'bg-blue-50 text-blue-600' },
    { label: 'Platform Rating', value: 4.9, icon: Bell, color: 'bg-orange-50 text-orange-600' },
  ];

  const recentTransactions = [
    { id: 't1', item: 'Sony A7III', type: 'Income', amount: 3600, date: '2h ago', status: 'Completed' },
    { id: 't2', item: 'Epson Projector', type: 'Expense', amount: 800, date: 'Yesterday', status: 'Active' },
    { id: 't3', item: 'Camping Tent', type: 'Income', amount: 900, date: '3d ago', status: 'Completed' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 md:pt-32 px-4 md:px-8 max-w-7xl mx-auto"
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* Sidebar - Pro Compact */}
        <aside className="w-full lg:w-48 lg:sticky lg:top-32 h-fit shrink-0">
          <div className="flex lg:flex-col gap-1.5 overflow-x-auto no-scrollbar pb-4 lg:pb-0">
            {[
              { id: 'overview', label: 'Home', icon: LayoutDashboard },
              { id: 'my-listings', label: 'Gear', icon: Package },
              { id: 'bookings', label: 'Flow', icon: ShoppingCart },
              { id: 'payouts', label: 'Wallet', icon: Wallet },
              { id: 'settings', label: 'Admin', icon: Settings },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex-1 lg:flex-none flex items-center justify-center lg:justify-start gap-2.5 px-6 lg:px-4 h-12 rounded-xl font-black text-[8px] md:text-[9px] uppercase tracking-widest transition-all whitespace-nowrap active:scale-95 ${activeTab === item.id ? 'bg-text-main text-white shadow-compact' : 'text-text-muted hover:bg-black/5 hover:text-text-main group border border-transparent'}`}
                >
                  <Icon className={`w-3.5 h-3.5 transition-transform ${activeTab === item.id ? '' : 'group-hover:scale-110'}`} />
                  <span className="hidden sm:inline-block lg:inline-block">{item.label}</span>
                  <span className="sm:hidden">{item.label.split(' ')[0]}</span>
                </button>
              )
            })}
          </div>
        </aside>

        {/* Content - High Density */}
        <main className="flex-1 space-y-10">
          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-none mb-1">Hub.</h1>
              <div className="flex items-center gap-1.5 opacity-40">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-text-muted">Live Sync Active</span>
              </div>
            </div>
            <Link to="/lend" className="bg-brand text-white px-5 h-12 rounded-xl font-black uppercase tracking-widest text-[9px] hover:bg-text-main transition-all shadow-compact flex items-center justify-center gap-2 shrink-0 active:scale-95 group">
              <PlusCircle className="w-4 h-4 group-hover:rotate-90 transition-transform" />
              List Gear
            </Link>
          </header>

          {/* Mini Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {stats.map((stat, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                key={stat.label} 
                className="p-4 rounded-2xl bg-white border border-black/[0.04] shadow-compact group hover:border-brand/40 transition-all flex flex-col justify-between h-28 md:h-32"
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 ${stat.color}`}>
                  <stat.icon className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[8px] font-black uppercase tracking-widest text-text-muted mb-0.5 opacity-50">{stat.label}</p>
                  <p className="text-xl md:text-2xl font-black tracking-tighter leading-none">
                    {typeof stat.value === 'number' && stat.label.includes('Earnings') ? `৳${stat.value}` : stat.value}
                  </p>
                </div>
              </motion.div>
            ))}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="p-4 rounded-2xl bg-text-main text-white shadow-compact flex flex-col justify-between h-28 md:h-32 overflow-hidden relative group"
            >
               <div className="absolute top-0 right-0 p-3 opacity-20">
                  <Package className="w-8 h-8" />
               </div>
               <div className="relative z-10 flex items-center gap-1.5 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                  <span className="text-[7px] font-black uppercase tracking-widest opacity-60">System Healthy</span>
               </div>
               <div className="relative z-10">
                  <p className="text-[8px] font-black uppercase tracking-widest opacity-40 mb-1">Latency</p>
                  <p className="text-xl font-black tracking-tighter">14ms</p>
               </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-8">
            {/* System Status / Vercel-style CLI section */}
            <div className="xl:col-span-12">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                     <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted opacity-40">Build Status</h3>
                     <div className="bg-white border border-black/[0.04] rounded-2xl p-4 shadow-compact">
                        <div className="flex items-center justify-between mb-4">
                           <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-black/[0.03] rounded-lg flex items-center justify-center">
                                 <PlusCircle className="w-3.5 h-3.5 opacity-40" />
                              </div>
                              <div>
                                 <div className="text-[10px] font-black tracking-tight">Main Protocol</div>
                                 <div className="text-[8px] font-mono text-text-muted opacity-50">#8f23a1z</div>
                              </div>
                           </div>
                           <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-md text-[7px] font-black uppercase tracking-widest">Ready</span>
                        </div>
                        <div className="space-y-1">
                           <div className="flex justify-between items-center text-[8px] font-black opacity-30 uppercase tracking-widest">
                              <span>Health Check</span>
                              <span>100%</span>
                           </div>
                           <div className="w-full h-1 bg-black/[0.03] rounded-full overflow-hidden">
                              <div className="w-full h-full bg-emerald-500 rounded-full" />
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="md:col-span-2 space-y-4">
                     <div className="flex items-center justify-between">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted opacity-40">System Console</h3>
                        <div className="flex gap-1.5">
                           <span className="w-2 h-2 rounded-full bg-red-400/20" />
                           <span className="w-2 h-2 rounded-full bg-yellow-400/20" />
                           <span className="w-2 h-2 rounded-full bg-emerald-400/20" />
                        </div>
                     </div>
                     <div className="bg-text-main rounded-2xl p-4 md:p-6 font-mono text-[9px] md:text-[10px] text-white/40 h-[140px] shadow-elevated relative group overflow-hidden">
                        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-text-main to-transparent pointer-events-none" />
                        <div className="space-y-1.5">
                           <div className="flex gap-4">
                              <span className="text-emerald-500 shrink-0">18:24:06</span>
                              <span>[VERIFY] ID Check initiated for node @bashundhara_RA</span>
                           </div>
                           <div className="flex gap-4">
                              <span className="text-emerald-500 shrink-0">18:24:08</span>
                              <span className="text-white/80">[SUCCESS] NID #2394... verified via Gov Layer</span>
                           </div>
                           <div className="flex gap-4">
                              <span className="text-emerald-500 shrink-0">18:24:10</span>
                              <span>[SYNC] Updating cache for Sony A7III listing</span>
                           </div>
                           <div className="flex gap-4">
                              <span className="text-emerald-500 shrink-0">18:24:12</span>
                              <span className="text-brand">[WAIT] Awaiting digital deposit confirmation</span>
                           </div>
                           <div className="flex gap-4 opacity-40 animate-pulse">
                              <span className="text-emerald-500 shrink-0">18:24:15</span>
                              <span>[POLL] Listening for bKash Webhook events...</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* Active Inventory - High Density */}
            <div className="xl:col-span-12 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-text-muted opacity-60">Gear Control</h3>
                <button className="text-[9px] font-black uppercase tracking-widest text-brand hover:opacity-70 transition-opacity">Full Stack</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {MOCK_LISTINGS.slice(0, 3).map((item) => (
                  <div key={item.id} className="p-2 rounded-2xl bg-white border border-black/[0.04] flex items-center gap-3 shadow-compact group hover:border-brand/20 transition-all cursor-pointer">
                    <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                      <img src={item.images[0]} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="" />
                    </div>
                    <div className="flex-1 min-w-0 pr-1">
                       <h4 className="font-black text-xs tracking-tight truncate group-hover:text-brand transition-colors mb-0.5">{item.title}</h4>
                       <div className="flex items-center justify-between">
                         <span className="text-[9px] font-black text-text-main opacity-80">৳{item.pricePerDay}</span>
                         <span className="px-1.5 py-0.5 bg-emerald-50 text-emerald-600 rounded text-[7px] font-black uppercase tracking-widest leading-none">In Use</span>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial History - Compact */}
            <div className="xl:col-span-7 space-y-6">
               <div className="flex items-center justify-between">
                <h3 className="text-xl font-black tracking-tight">Financial Flow</h3>
              </div>
              <div className="bg-white p-2 rounded-[2.5rem] border border-black/[0.04] shadow-compact">
                {recentTransactions.map((tx, i) => (
                  <div key={tx.id} className={`flex items-center gap-4 p-4 rounded-2xl hover:bg-black/[0.01] transition-all group ${i !== recentTransactions.length - 1 ? 'border-b border-black/[0.02]' : ''}`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${tx.type === 'Income' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'}`}>
                      {tx.type === 'Income' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownLeft className="w-4 h-4" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-black text-[9px] uppercase tracking-widest truncate group-hover:text-brand transition-colors">{tx.item}</h4>
                      <p className="text-[10px] text-text-muted font-bold mt-0.5">{tx.date}</p>
                    </div>
                    <div className="text-right">
                      <p className={`font-black text-base tracking-tighter ${tx.type === 'Income' ? 'text-emerald-600' : 'text-text-main'}`}>
                        {tx.type === 'Income' ? '+' : '-'}{formatCurrency(tx.amount).replace('BDT', '৳')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wallet Card - Slimmer */}
            <div className="xl:col-span-5 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black tracking-tight">Withdrawal</h3>
              </div>
              <div className="bg-text-main p-8 rounded-[3rem] text-white shadow-elevated relative overflow-hidden group h-full flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand/20 rounded-bl-full animate-pulse blur-xl" />
                <div className="relative z-10">
                  <h4 className="text-[8px] font-black uppercase tracking-[0.2em] opacity-40 mb-2">Ready to payout</h4>
                  <p className="text-4xl font-black tracking-tighter mb-8">৳8,400</p>
                  <button className="w-full h-14 bg-white text-text-main rounded-xl font-black uppercase tracking-widest text-[9px] hover:bg-brand hover:text-white transition-all shadow-xl active:scale-95">
                    Fast Payout
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-6 opacity-30 text-[8px] font-black uppercase tracking-widest grayscale group-hover:grayscale-0 transition-all">
                  <div className="px-1.5 py-0.5 border border-white rounded">Visa</div>
                  <div className="px-1.5 py-0.5 border border-white rounded">bKash</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}

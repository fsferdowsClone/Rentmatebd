import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Home, User, Compass, LayoutDashboard, PlusCircle, Search, MapPin, LogOut, Settings, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { MOCK_USERS } from '../constants';
import Logo from './Logo';

export default function Navbar() {
  const location = useLocation();
  const currentUser = MOCK_USERS[0];
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const profileMenuItems = [
    { label: 'View Profile', to: `/profile/${currentUser.id}`, icon: User },
    { label: 'Edit Profile', to: `/profile/edit`, icon: Settings },
    { label: 'System Settings', to: '/settings', icon: Settings },
    { label: 'Sign Out', to: '/logout', icon: LogOut, danger: true },
  ];

  return (
    <>
      {/* Desktop Navbar - Compact */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4 hidden md:block">
        <div className="max-w-7xl mx-auto h-16 bg-white/80 backdrop-blur-xl rounded-2xl border border-black/[0.04] shadow-compact flex items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <Logo size={32} />
            <span className="text-lg font-black tracking-tighter text-text-main hidden lg:block">
              RentMate<span className="text-brand">BD</span>
            </span>
          </Link>

          <div className="flex-1 max-w-sm mx-8 hidden lg:block">
             <button
               onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
               className="w-full flex items-center justify-between px-3 h-10 bg-black/[0.03] border border-black/[0.03] rounded-xl text-text-muted hover:bg-black/[0.05] transition-all group"
             >
                <div className="flex items-center gap-2">
                   <Search className="w-3.5 h-3.5 opacity-30 group-hover:opacity-60" />
                   <span className="text-[11px] font-bold opacity-30 group-hover:opacity-60">Search nodes...</span>
                </div>
                <div className="flex items-center gap-1">
                   <span className="text-[8px] font-mono opacity-20 group-hover:opacity-40">⌘</span>
                   <span className="text-[8px] font-mono opacity-20 group-hover:opacity-40">K</span>
                </div>
             </button>
          </div>

          <div className="flex items-center gap-1">
            {[
              { to: '/explore', label: 'Explore', icon: Search },
              { to: '/lend', label: 'Lend', icon: PlusCircle },
              { to: '/dashboard', label: 'Hub', icon: LayoutDashboard },
            ].map((link) => {
              const isActive = location.pathname === link.to;
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "relative px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all",
                    isActive 
                      ? "text-brand" 
                      : "text-text-muted hover:text-text-main hover:bg-black/[0.02]"
                  )}
                >
                  <div className="flex items-center gap-1.5">
                    <Icon className="w-3 h-3" />
                    {link.label}
                  </div>
                  {isActive && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="relative">
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-3 bg-black/[0.02] p-1 pr-4 rounded-xl border border-black/[0.02] hover:border-brand/20 transition-all group"
            >
              <img 
                src={currentUser.avatar} 
                alt="Profile" 
                className={cn(
                  "w-8 h-8 rounded-lg object-cover ring-2 ring-transparent transition-all",
                  isProfileOpen ? "ring-brand/20" : "group-hover:ring-brand/20"
                )}
              />
              <div className="text-left hidden lg:block">
                <div className="text-[9px] font-black uppercase tracking-widest text-text-main line-clamp-1">{currentUser.name.split(' ')[0]}</div>
                <div className="text-[8px] font-bold text-text-muted uppercase tracking-tighter">Verified</div>
              </div>
            </button>

            <AnimatePresence>
              {isProfileOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsProfileOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 10, scale: 0.95 }}
                    className="absolute right-0 mt-3 w-64 bg-white/95 backdrop-blur-xl rounded-2xl border border-black/[0.05] shadow-elevated p-3 z-50 overflow-hidden"
                  >
                    <div className="flex items-center gap-3 p-3 bg-black/[0.02] rounded-xl mb-3">
                      <img src={currentUser.avatar} className="w-10 h-10 rounded-lg object-cover" alt="" />
                      <div>
                        <div className="text-xs font-black tracking-tight">{currentUser.name}</div>
                        <div className="text-[9px] font-bold text-text-muted uppercase tracking-widest">{currentUser.location}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-0.5">
                      {profileMenuItems.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          onClick={() => setIsProfileOpen(false)}
                          className={cn(
                            "flex items-center justify-between p-2.5 rounded-lg transition-all group",
                            item.danger 
                              ? "text-red-500 hover:bg-red-50" 
                              : "text-text-muted hover:text-text-main hover:bg-black/[0.03]"
                          )}
                        >
                          <div className="flex items-center gap-2.5">
                            <item.icon className="w-3.5 h-3.5" />
                            <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                          </div>
                          {!item.danger && <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      {/* Mobile Header - Compact */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/[0.03] h-14 flex items-center justify-between px-5 md:hidden">
        <Link to="/" className="flex items-center gap-2">
          <Logo size={28} />
          <span className="text-base font-black tracking-tighter">RentMateBD</span>
        </Link>
        <button onClick={() => setIsProfileOpen(!isProfileOpen)}>
          <img 
            src={currentUser.avatar} 
            className={cn(
              "w-7 h-7 rounded-lg object-cover ring-2 ring-transparent transition-all",
              isProfileOpen ? "ring-brand/20" : ""
            )} 
            alt="" 
          />
        </button>
      </nav>

      {/* Mobile Bottom Navigation - Compact High Density */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 px-5 pb-5 md:hidden">
        <div className="bg-text-main rounded-2xl h-16 shadow-elevated flex items-center justify-around px-2 border border-white/5">
          {[
            { to: '/', icon: Home, label: 'Home' },
            { to: '/explore', icon: Search, label: 'Find' },
            { to: '/lend', icon: PlusCircle, label: 'Lend' },
            { to: '/dashboard', icon: LayoutDashboard, label: 'Hub' },
          ].map((link) => {
            const isActive = location.pathname === link.to;
            const Icon = link.icon;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "flex flex-col items-center gap-1 transition-all flex-1",
                  isActive ? "text-brand" : "text-white/40"
                )}
              >
                <div className={cn(
                  "w-9 h-9 rounded-xl flex items-center justify-center transition-all",
                  isActive ? "bg-brand/10 shadow-inner shadow-brand/5" : ""
                )}>
                  <Icon className={cn("w-4 h-4", isActive ? "scale-110" : "")} />
                </div>
                <span className="text-[7px] font-black uppercase tracking-widest">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

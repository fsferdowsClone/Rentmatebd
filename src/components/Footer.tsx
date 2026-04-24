import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Mail, Github, Twitter, MapPin } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import Logo from './Logo';

export default function Footer() {
  const deployUrl = "https://rentmatebd.vercel.app/";

  return (
    <footer className="bg-[#F8FAFC] border-t border-black/[0.03] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 group mb-6">
              <Logo size={32} />
              <span className="text-xl font-black tracking-tighter text-text-main">
                RentMate<span className="text-brand">BD</span>
              </span>
            </Link>
            <p className="text-text-muted text-sm font-medium leading-relaxed opacity-60 mb-8 max-w-xs">
              The premium protocol for hardware and gear sharing in Bangladesh. Built for creators, powered by community.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2.5 bg-white rounded-xl border border-black/[0.04] text-text-muted hover:text-brand transition-all shadow-compact hover:shadow-lg">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-white rounded-xl border border-black/[0.04] text-text-muted hover:text-brand transition-all shadow-compact hover:shadow-lg">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-white rounded-xl border border-black/[0.04] text-text-muted hover:text-brand transition-all shadow-compact hover:shadow-lg">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted opacity-40 mb-6">Platform</h4>
            <ul className="space-y-4">
              {['Explore', 'Lend Gear', 'Smart Pricing', 'Safety', 'Categories'].map((item) => (
                <li key={item}>
                  <Link to="/explore" className="text-sm font-bold text-text-main hover:text-brand transition-colors opacity-70 hover:opacity-100">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted opacity-40 mb-6">HQ bashundhara</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand mt-0.5" />
                <p className="text-sm font-bold text-text-main opacity-70 leading-relaxed">
                  Block G, Bashundhara R/A<br />
                  Dhaka, Bangladesh
                </p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-black/[0.04] shadow-compact flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">Node Online</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted opacity-40 mb-6 md:text-right">Mobile Ecosystem</h4>
            <div className="p-3 bg-white rounded-2xl border border-black/[0.04] shadow-elevated relative group transition-all hover:scale-[1.02]">
              <QRCodeSVG 
                value={deployUrl}
                size={80}
                level="M"
                includeMargin={false}
                className="opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none" />
            </div>
            <p className="mt-4 text-[9px] font-black uppercase tracking-widest text-text-muted opacity-40 md:text-right">Scan to visit node</p>
          </div>
        </div>

        <div className="pt-10 border-t border-black/[0.03] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-text-muted opacity-30">
            © 2026 RentMate BD. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link to="#" className="text-[10px] font-black uppercase tracking-widest text-text-muted opacity-30 hover:opacity-60 transition-opacity">Privacy Policy</Link>
            <Link to="#" className="text-[10px] font-black uppercase tracking-widest text-text-muted opacity-30 hover:opacity-60 transition-opacity">Terms of Service</Link>
          </div>
          <div className="flex items-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
             <span className="text-[9px] font-bold text-text-muted opacity-40 uppercase tracking-widest">Protocol v1.0.4 - Bangladesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

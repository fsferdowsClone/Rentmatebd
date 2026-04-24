import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Image, MapPin, ShieldCheck, ArrowLeft, MoreHorizontal, User } from 'lucide-react';
import { MOCK_LISTINGS, MOCK_USERS } from '../constants';

export default function Chat() {
  const { id } = useParams();
  const navigate = useNavigate();
  const listing = MOCK_LISTINGS.find(l => l.id === id);
  const owner = MOCK_USERS.find(u => u.id === listing?.ownerId);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I just booked your item. When can we meet for pickup?", sender: 'me', time: '10:30 AM' },
    { id: 2, text: "Hey Siam! Thanks for the booking. I'm available at the North South University main gate around 2 PM today. Does that work for you?", sender: 'other', time: '10:32 AM' }
  ]);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!message.trim()) return;
    setMessages([...messages, {
      id: Date.now(),
      text: message,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
    setMessage('');
  };

  if (!listing || !owner) return <div className="p-20 text-center">Chat not found.</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 md:pt-24 h-screen flex flex-col bg-[#F8FAFC]"
    >
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col bg-white md:rounded-t-[3rem] shadow-2xl overflow-hidden border-x border-t border-[#E2E8F0]">
        {/* Chat Header */}
        <header className="px-6 py-4 border-b border-[#F1F5F9] flex items-center justify-between bg-white z-10 sticky top-0">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-2 hover:bg-[#F1F5F9] rounded-full transition-all">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="relative">
              <img src={owner.avatar} className="w-10 h-10 rounded-full object-cover" alt="" />
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-safe border-2 border-white rounded-full" />
            </div>
            <div>
              <h3 className="font-bold text-sm leading-none flex items-center gap-1">
                {owner.name}
                <ShieldCheck className="w-3 h-3 text-safe" />
              </h3>
              <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest mt-1">Lender • Active Now</p>
            </div>
          </div>
          <button className="p-2 hover:bg-[#F1F5F9] rounded-full transition-all">
            <MoreHorizontal className="w-5 h-5 text-text-muted" />
          </button>
        </header>

        {/* Item context banner */}
        <div className="px-6 py-3 bg-brand/5 border-b border-brand/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={listing.images[0]} className="w-8 h-8 rounded-lg object-cover" alt="" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-tight text-brand">Renting Item</p>
              <h4 className="text-xs font-bold truncate max-w-[150px]">{listing.title}</h4>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black uppercase tracking-tight text-text-muted">Security Deposit</p>
            <p className="text-xs font-bold text-text-main">bKash Active</p>
          </div>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth bg-[#F8FAFC]/30">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] space-y-1 ${msg.sender === 'me' ? 'items-end' : 'items-start'} flex flex-col`}>
                <div className={`px-5 py-3 rounded-2xl text-sm font-medium shadow-sm ${
                  msg.sender === 'me' 
                  ? 'bg-brand text-white rounded-br-none' 
                  : 'bg-white border border-[#E2E8F0] text-text-main rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
                <span className="text-[10px] font-bold text-text-muted px-1">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-6 bg-white border-t border-[#F1F5F9] sticky bottom-0">
          <div className="flex items-end gap-4">
            <button className="mb-2 p-2 hover:bg-[#F1F5F9] rounded-xl transition-all text-text-muted">
              <Image className="w-5 h-5" />
            </button>
            <div className="flex-1 relative">
              <textarea 
                rows={1}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                placeholder="Type your message..."
                className="w-full bg-[#F1F5F9] border border-[#E2E8F0] rounded-2xl py-3.5 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-brand/10 transition-all text-sm font-medium resize-none"
              />
              <button 
                onClick={handleSend}
                disabled={!message.trim()}
                className="absolute right-2.5 bottom-2.5 w-9 h-9 bg-brand text-white rounded-xl flex items-center justify-center hover:scale-[1.05] active:scale-95 disabled:opacity-30 transition-all shadow-lg shadow-brand/20"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 justify-center">
            <MapPin className="w-3 h-3 text-text-muted" />
            <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest leading-none">Share location for meet-up</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

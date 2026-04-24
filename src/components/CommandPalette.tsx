import React, { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  MapPin, 
  PlusCircle, 
  LayoutDashboard, 
  User, 
  Command as CommandIcon,
  Package,
  Settings,
  HelpCircle,
  LogOut
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle the menu when ⌘K or Ctrl+K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            className="w-full max-w-[540px] bg-white rounded-2xl shadow-elevated border border-black/5 overflow-hidden relative z-50"
          >
            <Command className="p-2">
              <div className="flex items-center gap-3 px-3 py-2 border-b border-black/[0.03]">
                <Search className="w-4 h-4 text-text-muted opacity-40 shrink-0" />
                <Command.Input 
                  placeholder="Type a command or search..." 
                  className="w-full bg-transparent border-none focus:outline-none text-sm font-medium placeholder:text-text-muted/30 h-8"
                />
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-[10px] bg-black/[0.05] text-text-muted px-1.5 py-0.5 rounded-md font-mono">ESC</span>
                </div>
              </div>

              <Command.List className="max-h-[300px] overflow-y-auto p-2 no-scrollbar">
                <Command.Empty className="py-8 text-center text-xs text-text-muted opacity-40 font-bold uppercase tracking-widest">
                  No results found.
                </Command.Empty>

                <Command.Group heading="Navigation" className="text-[9px] font-black uppercase tracking-[0.2em] text-text-muted/50 px-3 py-2">
                  <Item onSelect={() => runCommand(() => navigate('/'))} icon={LayoutDashboard}>Explore Feed</Item>
                  <Item onSelect={() => runCommand(() => navigate('/dashboard'))} icon={Package}>Hub Dashboard</Item>
                  <Item onSelect={() => runCommand(() => navigate('/lend'))} icon={PlusCircle}>List New Gear</Item>
                </Command.Group>

                <Command.Group heading="Account" className="text-[9px] font-black uppercase tracking-[0.2em] text-text-muted/50 px-3 py-2 mt-2">
                  <Item onSelect={() => runCommand(() => navigate('/profile'))} icon={User}>View Profile</Item>
                  <Item onSelect={() => runCommand(() => navigate('/settings'))} icon={Settings}>Admin Settings</Item>
                </Command.Group>

                <Command.Group heading="Support" className="text-[9px] font-black uppercase tracking-[0.2em] text-text-muted/50 px-3 py-2 mt-2">
                  <Item onSelect={() => runCommand(() => {})} icon={HelpCircle}>Documentation</Item>
                  <Item onSelect={() => runCommand(() => {})} icon={LogOut}>Sign Out</Item>
                </Command.Group>
              </Command.List>

              <div className="p-3 bg-black/[0.01] border-t border-black/[0.03] flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-[9px] font-bold text-text-muted opacity-40">
                       <span className="px-1 py-0.5 bg-black/[0.05] rounded">↑↓</span>
                       <span>Navigate</span>
                    </div>
                    <div className="flex items-center gap-1 text-[9px] font-bold text-text-muted opacity-40">
                       <span className="px-1 py-0.5 bg-black/[0.05] rounded">↵</span>
                       <span>Select</span>
                    </div>
                 </div>
                 <div className="flex items-center gap-1 text-[9px] font-bold text-brand opacity-60">
                    <CommandIcon className="w-3 h-3" />
                    <span>Bashundhara Layer V1</span>
                 </div>
              </div>
            </Command>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function Item({ children, icon: Icon, onSelect }: { children: React.ReactNode, icon: any, onSelect: () => void }) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-default select-none aria-selected:bg-black/[0.03] aria-selected:text-brand transition-all group"
    >
      <div className="w-8 h-8 rounded-lg bg-black/[0.02] flex items-center justify-center group-aria-selected:bg-brand/10 transition-colors">
        <Icon className="w-4 h-4 text-text-muted opacity-60 group-aria-selected:text-brand transition-colors" />
      </div>
      <span className="text-[13px] font-bold tracking-tight">{children}</span>
    </Command.Item>
  );
}

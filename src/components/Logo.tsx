import React from 'react';
import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  size?: number;
  variant?: 'light' | 'dark' | 'brand';
}

export default function Logo({ className, size = 32 }: LogoProps) {
  return (
    <motion.div
      className={`flex items-center justify-center overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{ width: size, height: size }}
    >
      <img 
        src="/logo.png" 
        alt="RentMateBD Logo" 
        className="w-full h-full object-contain"
        referrerPolicy="no-referrer"
        loading="eager"
      />
    </motion.div>
  );
}

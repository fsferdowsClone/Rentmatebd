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
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ width: size, height: size }}
    >
      <img 
        src="/logo.jpg" 
        alt="RentMateBD Logo" 
        className="w-full h-full object-cover rounded-lg"
        referrerPolicy="no-referrer"
      />
    </motion.div>
  );
}

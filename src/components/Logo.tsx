import React from 'react';
import { motion } from 'motion/react';
import logoImg from '../assets/logo.png';

interface LogoProps {
  className?: string;
  size?: number;
  variant?: 'light' | 'dark' | 'brand';
}

export default function Logo({ className, size = 32 }: LogoProps) {
  return (
    <motion.div
      style={{ width: size, height: size }}
      className={`relative overflow-hidden rounded-xl ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img 
        src={logoImg} 
        alt="RentMateBD Logo" 
        className="w-full h-full object-contain"
        referrerPolicy="no-referrer"
      />
    </motion.div>
  );
}

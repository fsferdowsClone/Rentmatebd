import React from 'react';
import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  size?: number;
  variant?: 'light' | 'dark' | 'brand';
}

export default function Logo({ className, size = 32, variant = 'brand' }: LogoProps) {
  const colors = {
    brand: '#FF7211',
    navy: '#0F172A',
    white: '#FFFFFF'
  };

  const primaryColor = variant === 'brand' ? colors.brand : variant === 'light' ? colors.white : colors.navy;
  const secondaryColor = variant === 'brand' ? colors.navy : variant === 'light' ? colors.brand : colors.white;

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background Pin Shape - Minimalist & Elegant */}
      <path
        d="M50 90C50 90 85 64.9123 85 40C85 20.67 69.33 5 50 5C30.67 5 15 20.67 15 40C15 64.9123 50 90 50 90Z"
        fill={primaryColor}
        className="opacity-100"
      />

      {/* Timer / Progress Ring - Subtle Luxury */}
      <circle
        cx="50"
        cy="40"
        r="30"
        stroke={secondaryColor}
        strokeWidth="1.5"
        strokeDasharray="4 4"
        className="opacity-20"
      />
      
      {/* Clock Hand - Indicating specificity of time */}
      <motion.line
        x1="50"
        y1="40"
        x2="50"
        y2="25"
        stroke={secondaryColor}
        strokeWidth="2"
        strokeLinecap="round"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        style={{ transformOrigin: '50px 40px' }}
      />

      {/* Stylized Hands Meeting - Interlocking Pattern */}
      {/* Hand 1 - Lender (Giving) */}
      <path
        d="M30 45C30 45 35 35 45 35C50 35 55 38 60 40"
        stroke={secondaryColor}
        strokeWidth="3"
        strokeLinecap="round"
        className="opacity-80"
      />
      {/* Hand 2 - Borrower (Receiving) */}
      <path
        d="M70 35C70 35 65 45 55 45C50 45 45 42 40 40"
        stroke={secondaryColor}
        strokeWidth="3"
        strokeLinecap="round"
        className="opacity-80"
      />

      {/* Product Gear Icon - Camera/Lens Focus */}
      <circle
        cx="50"
        cy="40"
        r="8"
        fill={secondaryColor}
        className="opacity-90 shadow-lg"
      />
      <circle
        cx="50"
        cy="40"
        r="4"
        fill={primaryColor}
      />
      
      {/* Sparkle of Luxury */}
      <path
        d="M50 15L52 20L57 22L52 24L50 29L48 24L43 22L48 20L50 15Z"
        fill={secondaryColor}
        className="opacity-40"
      />
    </motion.svg>
  );
}

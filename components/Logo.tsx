
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <svg 
      viewBox="0 0 500 500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <defs>
        <linearGradient id="navyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A192F" />
          <stop offset="100%" stopColor="#050C1A" />
        </linearGradient>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="amberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBAA19" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      
      {/* Background Swoosh / Circle part */}
      <path 
        d="M366.5 154.5C384.5 195.5 372.5 304.5 289 342.5C205.5 380.5 144 330.5 137.5 311.5C124 271.5 144 218.5 204.5 174.5" 
        stroke="url(#blueGradient)" 
        strokeWidth="45" 
        strokeLinecap="round"
        opacity="0.9"
      />
      
      {/* Bars */}
      <rect x="175" y="200" width="35" height="75" rx="4" fill="url(#blueGradient)" />
      <rect x="220" y="160" width="35" height="115" rx="4" fill="url(#navyGradient)" />
      <rect x="265" y="115" width="35" height="160" rx="4" fill="url(#blueGradient)" />
      <rect x="310" y="210" width="35" height="65" rx="4" fill="url(#blueGradient)" opacity="0.6" />

      {/* Main Upward Swoosh with Arrow */}
      <path 
        d="M125 285C140 220 220 180 370 85" 
        stroke="url(#amberGradient)" 
        strokeWidth="38" 
        strokeLinecap="round" 
      />
      
      {/* Arrow Head */}
      <path 
        d="M355 65L385 80L360 110" 
        stroke="url(#amberGradient)" 
        strokeWidth="38" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
};

export default Logo;

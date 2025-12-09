"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface TacticalTapProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const TacticalTap = ({ children, className = "", onClick }: TacticalTapProps) => {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Efeito de Scanline que passa rápido ao clicar */}
      <motion.div
        className="absolute inset-0 bg-white/10 skew-x-12 pointer-events-none"
        initial={{ x: '-100%', opacity: 0 }}
        whileTap={{
          x: ['100%', '-100%'],
          opacity: [0, 0.5, 0],
          transition: { duration: 0.3 }
        }}
      />
      {children}
    </motion.div>
  );
};
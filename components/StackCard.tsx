'use client';

import { motion } from 'framer-motion';
import React from 'react';

type StackCardProps = {
  name: string;
  icon: React.ReactNode;
};

export default function StackCard({ name, icon }: StackCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="flex-shrink-0 sm:shrink bg-white/10 backdrop-blur-lg p-4 min-w-[220px] sm:min-w-0 border border-white/10 rounded-xl flex items-center gap-4 hover:border-yellow-400 transition"
      title={name}
    >
      {icon}
      <div className="text-white font-medium">{name}</div>
    </motion.div>
  );
}

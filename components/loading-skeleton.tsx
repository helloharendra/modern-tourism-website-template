'use client';

import { motion } from 'framer-motion';

export function LoadingSkeleton() {
  const variants = {
    animate: {
      backgroundPosition: ['200% center', '-200% center'],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  return (
    <motion.div
      className="w-full h-12 rounded-lg bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 bg-[length:200%_100%]"
      variants={variants}
      animate="animate"
    />
  );
}

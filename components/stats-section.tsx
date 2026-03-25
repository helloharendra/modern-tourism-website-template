'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { value: 500, label: 'Destinations', suffix: '+' },
  { value: 50000, label: 'Happy Travelers', suffix: '+' },
  { value: 98, label: 'Satisfaction Rate', suffix: '%' },
  { value: 24, label: 'Support Hours', suffix: '/7' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          const increment = Math.ceil(value / 50);
          const timer = setInterval(() => {
            setCount((prev) => {
              if (prev + increment >= value) {
                clearInterval(timer);
                return value;
              }
              return prev + increment;
            });
          }, 30);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-bold text-4xl md:text-5xl text-accent">
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center"
              variants={itemVariants}
            >
              <motion.div
                className="inline-flex flex-col items-center gap-2 mb-4 p-4 bg-card rounded-xl border border-border"
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </motion.div>
              <p className="text-lg font-semibold text-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

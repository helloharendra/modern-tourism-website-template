'use client';

import { motion } from 'framer-motion';
import { Award, Shield, Users, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: 'Expert Curation',
    description: 'Handpicked destinations and experiences vetted by travel experts',
  },
  {
    icon: Shield,
    title: 'Guaranteed Best Price',
    description: 'Price match guarantee on all bookings with no hidden fees',
  },
  {
    icon: Users,
    title: 'Local Guides',
    description: 'Connect with experienced local guides for authentic experiences',
  },
  {
    icon: Zap,
    title: 'Instant Booking',
    description: 'Real-time availability and instant confirmation for your trips',
  },
];

export function BenefitsSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
              <span className="text-accent font-semibold text-sm">Why Choose Us</span>
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Experience Travel Reimagined
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            We're committed to making every journey unforgettable with world-class service
          </motion.p>
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 40px rgba(45, 106, 79, 0.1)',
                }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

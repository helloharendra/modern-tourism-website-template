'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { toast } from 'sonner';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);

    toast.success('Thank you for subscribing!');
    setEmail('');
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
            <span className="text-accent font-semibold text-sm">Stay Updated</span>
          </span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-foreground mb-4"
        >
          Get Exclusive Travel Deals
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-xl text-muted-foreground mb-10"
        >
          Subscribe to our newsletter and receive the latest travel tips, exclusive offers, and insider recommendations straight to your inbox.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3"
        >
          <div className="flex-1 relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 pl-12 py-3 rounded-lg bg-white/50 backdrop-blur-sm border border-border hover:border-primary/50 focus:border-primary focus:outline-none transition-colors placeholder-muted-foreground"
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-accent hover:bg-accent/90 text-white px-8 h-12 rounded-lg font-semibold whitespace-nowrap"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </motion.form>

        <motion.p
          variants={itemVariants}
          className="text-sm text-muted-foreground mt-4"
        >
          We respect your privacy. Unsubscribe at any time.
        </motion.p>
      </motion.div>
    </section>
  );
}

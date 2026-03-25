'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BookingForm } from '@/components/booking-form';

export default function BookingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page header */}
      <div className="pt-32 pb-8 px-4 bg-gradient-to-b from-primary/10 to-transparent">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-foreground mb-4"
            variants={itemVariants}
          >
            Complete Your Booking
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground"
            variants={itemVariants}
          >
            Fill in your details to reserve your dream vacation
          </motion.p>
        </motion.div>
      </div>

      {/* Booking form */}
      <motion.div
        className="max-w-2xl mx-auto px-4 py-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
          <BookingForm destinationName="Your Destination" price={1299} />
        </div>

        {/* Trust badges */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            {
              title: 'Secure Payment',
              description: 'Your payment information is encrypted and secure',
              icon: '🔒',
            },
            {
              title: 'Free Cancellation',
              description: 'Cancel up to 48 hours before your trip',
              icon: '✓',
            },
            {
              title: '24/7 Support',
              description: 'Our team is available 24/7 to help you',
              icon: '☎️',
            },
          ].map((badge) => (
            <motion.div
              key={badge.title}
              className="text-center p-6 bg-card rounded-lg border border-border"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-3">{badge.icon}</div>
              <h3 className="font-bold text-foreground mb-2">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <Footer />
    </main>
  );
}

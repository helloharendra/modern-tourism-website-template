'use client';

import { motion } from 'framer-motion';
import { DestinationCard } from './destination-card';

const destinations = [
  {
    id: '1',
    name: 'Bali, Indonesia',
    region: 'Southeast Asia',
    price: 1299,
    rating: 4.9,
    reviews: 2847,
    image: 'https://images.unsplash.com/photo-1515030122597-e8fab8e1e0f0?w=500&h=400&fit=crop',
    description: 'Discover tropical paradise with ancient temples, stunning beaches, and rich culture.',
  },
  {
    id: '2',
    name: 'Paris, France',
    region: 'Europe',
    price: 1599,
    rating: 4.8,
    reviews: 3412,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&h=400&fit=crop',
    description: 'Experience the city of love with world-class museums, fine dining, and iconic landmarks.',
  },
  {
    id: '3',
    name: 'Tokyo, Japan',
    region: 'East Asia',
    price: 1449,
    rating: 4.9,
    reviews: 2156,
    image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9ec?w=500&h=400&fit=crop',
    description: 'Immerse yourself in ancient traditions and cutting-edge modernity in Japan\'s vibrant capital.',
  },
  {
    id: '4',
    name: 'New York City, USA',
    region: 'North America',
    price: 1199,
    rating: 4.7,
    reviews: 4521,
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&h=400&fit=crop',
    description: 'Explore the city that never sleeps with Broadway, world-class museums, and endless cuisine.',
  },
  {
    id: '5',
    name: 'Dubai, UAE',
    region: 'Middle East',
    price: 1399,
    rating: 4.8,
    reviews: 1893,
    image: 'https://images.unsplash.com/photo-1512453391337-5ce35b3c3f7d?w=500&h=400&fit=crop',
    description: 'Discover luxury shopping, iconic architecture, and desert adventures in this modern metropolis.',
  },
  {
    id: '6',
    name: 'Santorini, Greece',
    region: 'Europe',
    price: 1349,
    rating: 4.9,
    reviews: 2734,
    image: 'https://images.unsplash.com/photo-1570179197253-dba95be1eb1e?w=500&h=400&fit=crop',
    description: 'Witness breathtaking sunsets and explore charming white-washed villages on this iconic island.',
  },
];

export function FeaturedDestinations() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
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
          <motion.div variants={titleVariants} className="mb-4">
            <span className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
              <span className="text-accent font-semibold text-sm">Featured Destinations</span>
            </span>
          </motion.div>

          <motion.h2
            variants={titleVariants}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Explore Our Handpicked Destinations
          </motion.h2>

          <motion.p
            variants={titleVariants}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Discover unforgettable experiences around the world, curated just for you
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              {...destination}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

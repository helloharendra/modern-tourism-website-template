'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { DestinationCard } from '@/components/destination-card';
import { DestinationsFilter, FilterState } from '@/components/destinations-filter';

const allDestinations = [
  {
    id: '1',
    name: 'Bali, Indonesia',
    region: 'Asia',
    price: 1299,
    rating: 4.9,
    reviews: 2847,
    image: 'https://images.unsplash.com/photo-1515030122597-e8fab8e1e0f0?w=500&h=400&fit=crop',
    description: 'Discover tropical paradise with ancient temples, stunning beaches, and rich culture.',
    budget: 'Mid-Range',
    activity: 'Beach',
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
    budget: 'Luxury',
    activity: 'Culture',
  },
  {
    id: '3',
    name: 'Tokyo, Japan',
    region: 'Asia',
    price: 1449,
    rating: 4.9,
    reviews: 2156,
    image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9ec?w=500&h=400&fit=crop',
    description: 'Immerse yourself in ancient traditions and cutting-edge modernity in Japan\'s vibrant capital.',
    budget: 'Luxury',
    activity: 'Culture',
  },
  {
    id: '4',
    name: 'New York City, USA',
    region: 'Americas',
    price: 1199,
    rating: 4.7,
    reviews: 4521,
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&h=400&fit=crop',
    description: 'Explore the city that never sleeps with Broadway, world-class museums, and endless cuisine.',
    budget: 'Luxury',
    activity: 'Culture',
  },
  {
    id: '5',
    name: 'Dubai, UAE',
    region: 'Africa',
    price: 1399,
    rating: 4.8,
    reviews: 1893,
    image: 'https://images.unsplash.com/photo-1512453391337-5ce35b3c3f7d?w=500&h=400&fit=crop',
    description: 'Discover luxury shopping, iconic architecture, and desert adventures in this modern metropolis.',
    budget: 'Ultra-Luxury',
    activity: 'Adventure',
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
    budget: 'Luxury',
    activity: 'Beach',
  },
  {
    id: '7',
    name: 'Swiss Alps, Switzerland',
    region: 'Europe',
    price: 1799,
    rating: 4.9,
    reviews: 1523,
    image: 'https://images.unsplash.com/photo-1531366936337-7788a2a1616b?w=500&h=400&fit=crop',
    description: 'Experience world-class hiking, skiing, and stunning mountain vistas.',
    budget: 'Ultra-Luxury',
    activity: 'Mountains',
  },
  {
    id: '8',
    name: 'Machu Picchu, Peru',
    region: 'Americas',
    price: 1099,
    rating: 4.9,
    reviews: 3245,
    image: 'https://images.unsplash.com/photo-1587595431973-160550ba5e88?w=500&h=400&fit=crop',
    description: 'Trek through the Andes to the ancient Incan citadel and UNESCO World Heritage Site.',
    budget: 'Budget',
    activity: 'Adventure',
  },
  {
    id: '9',
    name: 'Bora Bora, French Polynesia',
    region: 'Oceania',
    price: 2199,
    rating: 5,
    reviews: 987,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop',
    description: 'Paradise island with crystal waters, overwater bungalows, and pristine beaches.',
    budget: 'Ultra-Luxury',
    activity: 'Beach',
  },
  {
    id: '10',
    name: 'Barcelona, Spain',
    region: 'Europe',
    price: 1249,
    rating: 4.8,
    reviews: 2891,
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=500&h=400&fit=crop',
    description: 'Discover Gaudí architecture, vibrant beaches, and Mediterranean charm.',
    budget: 'Mid-Range',
    activity: 'Culture',
  },
  {
    id: '11',
    name: 'Reykjavik, Iceland',
    region: 'Europe',
    price: 1349,
    rating: 4.8,
    reviews: 1647,
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&h=400&fit=crop',
    description: 'Witness the Northern Lights and explore dramatic waterfalls and volcanic landscapes.',
    budget: 'Luxury',
    activity: 'Adventure',
  },
  {
    id: '12',
    name: 'Maldives',
    region: 'Asia',
    price: 2099,
    rating: 4.9,
    reviews: 2134,
    image: 'https://images.unsplash.com/photo-1583862589985-5937adda66a6?w=500&h=400&fit=crop',
    description: 'Tropical island resort paradise with water villas and world-class diving.',
    budget: 'Ultra-Luxury',
    activity: 'Beach',
  },
];

export default function DestinationsPage() {
  const [filters, setFilters] = useState<FilterState>({
    region: 'All Regions',
    budget: 'All Budgets',
    activity: 'All Activities',
  });

  const filteredDestinations = allDestinations.filter((dest) => {
    const regionMatch =
      filters.region === 'All Regions' || dest.region === filters.region;
    const budgetMatch =
      filters.budget === 'All Budgets' || dest.budget === filters.budget;
    const activityMatch =
      filters.activity === 'All Activities' || dest.activity === filters.activity;

    return regionMatch && budgetMatch && activityMatch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Page header */}
      <div className="pt-32 pb-12 px-4 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Explore All Destinations
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Browse our complete collection of handpicked destinations around the world
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar filters */}
          <div className="lg:col-span-1">
            <DestinationsFilter onFilterChange={setFilters} />
          </div>

          {/* Destinations grid */}
          <div className="lg:col-span-3">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-muted-foreground">
                Showing {filteredDestinations.length} of {allDestinations.length} destinations
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={JSON.stringify(filters)}
            >
              {filteredDestinations.map((dest, index) => (
                <DestinationCard
                  key={dest.id}
                  {...dest}
                  index={index}
                />
              ))}
            </motion.div>

            {filteredDestinations.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-xl text-muted-foreground">
                  No destinations found matching your filters. Try adjusting your criteria.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

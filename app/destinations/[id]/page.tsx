'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ItineraryTimeline } from '@/components/itinerary-timeline';
import { ImageGallery } from '@/components/image-gallery';
import { Button } from '@/components/ui/button';
import { Star, Users, MapPin, Clock, DollarSign } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const destinationDetails: Record<string, any> = {
  '1': {
    name: 'Bali, Indonesia',
    region: 'Southeast Asia',
    price: 1299,
    rating: 4.9,
    reviews: 2847,
    image: 'https://images.unsplash.com/photo-1515030122597-e8fab8e1e0f0?w=1200&h=600&fit=crop',
    description: 'Discover tropical paradise with ancient temples, stunning beaches, and rich culture. Bali is a perfect blend of spiritual serenity and modern luxury.',
    longDescription: `Bali is an enchanting Indonesian island that captivates visitors with its rich cultural heritage, breathtaking landscapes, and world-class hospitality. From the terraced rice paddies of Ubud to the pristine beaches of Nusa Dua, every corner of Bali offers unique experiences and unforgettable memories.

Whether you seek adventure, relaxation, spiritual awakening, or cultural immersion, Bali has something for everyone. Experience the warmth of Balinese hospitality, indulge in rejuvenating spa treatments, explore ancient temples, and enjoy world-class dining and entertainment.`,
    bestTime: 'April to October (dry season)',
    duration: '5-7 days',
    groupSize: '2-4 people',
    images: [
      'https://images.unsplash.com/photo-1515030122597-e8fab8e1e0f0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1537225228614-b4fad34a0b60?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1537359755453-8d86e6ef7fa9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1552733913-ff5200b243f0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1532274040911-5f82f5ec1629?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?w=800&h=600&fit=crop',
    ],
    highlights: [
      'Ubud Rice Terraces',
      'Tirta Empul Temple',
      'Nusa Dua Beaches',
      'Traditional Balinese Spa',
      'Monkey Forest',
      'Mount Batur Sunrise Trek',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Bali',
        description: 'Arrive at Ngurah Rai International Airport and transfer to your luxury resort.',
        activities: ['Airport transfer', 'Hotel check-in', 'Welcome dinner'],
        highlights: ['Beachfront resort', 'Sunset view', 'Traditional welcome ceremony'],
      },
      {
        day: 2,
        title: 'Ubud Cultural Experience',
        description: 'Explore the cultural heart of Bali with visits to temples and rice terraces.',
        activities: ['Ubud Rice Terraces', 'Tirta Empul Temple', 'Arts and crafts market'],
        highlights: ['Traditional Balinese lunch', 'Temple ceremony', 'Local artisan demonstrations'],
      },
      {
        day: 3,
        title: 'Adventure Day',
        description: 'Experience thrilling adventures including water sports and jungle activities.',
        activities: ['Monkey Forest trek', 'Swing activities', 'Jungle exploration'],
        highlights: ['Wildlife encounters', 'Forest canopy views', 'Local guide experience'],
      },
      {
        day: 4,
        title: 'Beach Relaxation',
        description: 'Enjoy pristine beaches and water activities at Nusa Dua.',
        activities: ['Snorkeling', 'Beach club', 'Water sports'],
        highlights: ['Coral reef viewing', 'Tropical fish', 'Beach sunset'],
      },
      {
        day: 5,
        title: 'Mount Batur Sunrise Trek',
        description: 'Early morning trek to witness the spectacular sunrise from Mount Batur.',
        activities: ['Mountain trek', 'Sunrise viewing', 'Breakfast with a view'],
        highlights: ['Panoramic vistas', 'Mountain photography', 'Local breakfast'],
      },
    ],
  },
};

export default function DestinationDetailPage({ params }: { params: { id: string } }) {
  const destination = destinationDetails[params.id] || destinationDetails['1'];
  const [selectedDates, setSelectedDates] = useState('');

  const handleBooking = () => {
    if (selectedDates) {
      toast.success('Booking request submitted! Our team will contact you soon.');
    } else {
      toast.error('Please select your travel dates');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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

      {/* Hero Image */}
      <motion.div
        className="relative h-96 md:h-[500px] w-full overflow-hidden pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Title overlay */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-2">{destination.name}</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(destination.rating)
                      ? 'fill-accent text-accent'
                      : 'text-white/30'
                  }`}
                />
              ))}
            </div>
            <span className="text-lg font-semibold">{destination.rating}</span>
            <span className="text-sm opacity-80">({destination.reviews} reviews)</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Quick info */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              variants={itemVariants}
            >
              {[
                { icon: MapPin, label: 'Region', value: destination.region },
                { icon: Clock, label: 'Duration', value: destination.duration },
                { icon: Users, label: 'Group Size', value: destination.groupSize },
                { icon: DollarSign, label: 'From', value: `$${destination.price}` },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="bg-card rounded-lg p-4 border border-border">
                    <Icon className="w-5 h-5 text-accent mb-2" />
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-bold text-foreground">{item.value}</p>
                  </div>
                );
              })}
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-foreground mb-4">About</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {destination.longDescription}
              </p>
              <p className="text-muted-foreground">
                <strong>Best Time to Visit:</strong> {destination.bestTime}
              </p>
            </motion.div>

            {/* Gallery */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-foreground mb-6">Photo Gallery</h2>
              <ImageGallery images={destination.images} title={destination.name} />
            </motion.div>

            {/* Highlights */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-foreground mb-6">Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight: string) => (
                  <motion.div
                    key={highlight}
                    className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <p className="text-foreground font-medium">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Itinerary */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-foreground mb-6">Itinerary</h2>
              <ItineraryTimeline items={destination.itinerary} />
            </motion.div>
          </div>

          {/* Booking sidebar */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="sticky top-24 bg-card rounded-xl p-6 border border-border">
              <p className="text-muted-foreground text-sm mb-2">Starting from</p>
              <h3 className="text-4xl font-bold text-foreground mb-6">
                ${destination.price}
                <span className="text-lg text-muted-foreground">/person</span>
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Travel Dates
                  </label>
                  <input
                    type="date"
                    value={selectedDates}
                    onChange={(e) => setSelectedDates(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <Button
                  onClick={handleBooking}
                  className="w-full bg-accent hover:bg-accent/90 text-white h-12 rounded-lg font-semibold text-base"
                >
                  Book Now
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10 h-12 rounded-lg font-semibold"
                >
                  Request Custom Itinerary
                </Button>
              </div>

              <div className="space-y-3 border-t border-border pt-4">
                {[
                  '✓ Best price guarantee',
                  '✓ 24/7 customer support',
                  '✓ Flexible cancellation',
                  '✓ Local expert guides',
                ].map((item) => (
                  <p key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </main>
  );
}

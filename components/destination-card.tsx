'use client';

import { motion } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DestinationCardProps {
  id: string;
  name: string;
  region: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  index?: number;
}

export function DestinationCard({
  id,
  name,
  region,
  price,
  rating,
  reviews,
  image,
  description,
  index = 0,
}: DestinationCardProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-shadow duration-300"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Image container */}
      <div className="relative h-64 overflow-hidden bg-slate-200">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Price tag */}
        <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-white font-bold">${price}/person</span>
        </div>

        {/* Region badge */}
        <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <MapPin className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-medium">{region}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-6">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? 'fill-accent text-accent'
                    : 'text-slate-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-foreground">{rating}</span>
          <span className="text-xs text-muted-foreground">({reviews} reviews)</span>
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold">
            View Details
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}

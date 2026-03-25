'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Users } from 'lucide-react';

interface TimelineItem {
  day: number;
  title: string;
  description: string;
  activities: string[];
  highlights: string[];
}

interface ItineraryTimelineProps {
  items: TimelineItem[];
}

export function ItineraryTimeline({ items }: ItineraryTimelineProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.day}
          className="relative flex gap-6 md:gap-8"
          variants={itemVariants}
        >
          {/* Timeline connector */}
          {index !== items.length - 1 && (
            <div className="absolute left-6 top-16 h-12 w-0.5 bg-gradient-to-b from-primary to-transparent" />
          )}

          {/* Timeline dot */}
          <motion.div
            className="relative z-10 flex-shrink-0"
            whileHover={{ scale: 1.2 }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold shadow-lg">
              {item.day}
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 pt-2">
            <motion.div
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground mb-4">{item.description}</p>

              {/* Activities */}
              {item.activities.length > 0 && (
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <p className="text-sm font-semibold text-foreground">Activities</p>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {item.activities.map((activity) => (
                      <li
                        key={activity}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Highlights */}
              {item.highlights.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <p className="text-sm font-semibold text-foreground">Highlights</p>
                  </div>
                  <ul className="space-y-1">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface DestinationsFilterProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  region: string;
  budget: string;
  activity: string;
}

const regions = ['All Regions', 'Asia', 'Europe', 'Americas', 'Africa', 'Oceania'];
const budgets = ['All Budgets', 'Budget', 'Mid-Range', 'Luxury', 'Ultra-Luxury'];
const activities = ['All Activities', 'Beach', 'Mountains', 'Culture', 'Adventure', 'Relaxation'];

export function DestinationsFilter({ onFilterChange }: DestinationsFilterProps) {
  const [filters, setFilters] = useState<FilterState>({
    region: 'All Regions',
    budget: 'All Budgets',
    activity: 'All Activities',
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const defaultFilters = {
      region: 'All Regions',
      budget: 'All Budgets',
      activity: 'All Activities',
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  const activeFilters = Object.values(filters).filter(
    (v) => !v.includes('All')
  ).length;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-foreground">Filter Destinations</h3>
        {activeFilters > 0 && (
          <motion.button
            onClick={resetFilters}
            className="flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
            whileHover={{ x: 5 }}
          >
            <X className="w-4 h-4" />
            Clear all
          </motion.button>
        )}
      </div>

      <Tabs defaultValue="region" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 bg-secondary/50">
          <TabsTrigger value="region">Region</TabsTrigger>
          <TabsTrigger value="budget">Budget</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="region" className="space-y-2">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {regions.map((region) => (
              <motion.button
                key={region}
                onClick={() => handleFilterChange('region', region)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filters.region === region
                    ? 'bg-primary text-white'
                    : 'bg-secondary hover:bg-secondary/80 text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {region}
              </motion.button>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="budget" className="space-y-2">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {budgets.map((budget) => (
              <motion.button
                key={budget}
                onClick={() => handleFilterChange('budget', budget)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filters.budget === budget
                    ? 'bg-primary text-white'
                    : 'bg-secondary hover:bg-secondary/80 text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {budget}
              </motion.button>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="activity" className="space-y-2">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {activities.map((activity) => (
              <motion.button
                key={activity}
                onClick={() => handleFilterChange('activity', activity)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filters.activity === activity
                    ? 'bg-primary text-white'
                    : 'bg-secondary hover:bg-secondary/80 text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activity}
              </motion.button>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Check, ChevronRight, ChevronLeft } from 'lucide-react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';

interface BookingFormProps {
  destinationName: string;
  price: number;
}

interface FormData {
  // Step 1: Trip Details
  startDate: string;
  endDate: string;
  travelers: number;
  
  // Step 2: Traveler Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Step 3: Preferences
  accommodation: string;
  activities: string[];
  specialRequests: string;
  
  // Step 4: Payment
  cardName: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
}

const steps = ['Trip Details', 'Traveler Info', 'Preferences', 'Payment'];

export function BookingForm({ destinationName, price }: BookingFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formData = watch();
  const totalPrice = (formData.travelers || 1) * price;

  const handleNextStep = async () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast.success('Booking confirmed! Check your email for details.');
  };

  const stepVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    if (newDirection > 0 && currentStep < steps.length - 1) {
      handleNextStep();
    } else if (newDirection < 0 && currentStep > 0) {
      handlePreviousStep();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Progress bar */}
      <motion.div
        className="space-y-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-2">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center flex-1">
              <motion.button
                type="button"
                onClick={() => index <= currentStep && setCurrentStep(index)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                  index <= currentStep
                    ? 'bg-primary text-white'
                    : 'bg-muted text-muted-foreground'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {index < currentStep ? (
                  <Check className="w-5 h-5" />
                ) : (
                  index + 1
                )}
              </motion.button>

              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    index < currentStep ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-sm font-semibold text-foreground">
          Step {currentStep + 1} of {steps.length}: {steps[currentStep]}
        </p>
      </motion.div>

      {/* Form steps */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          custom={1}
          variants={stepVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="space-y-6"
        >
          {/* Step 1: Trip Details */}
          {currentStep === 0 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Trip Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    {...register('startDate', { required: 'Start date is required' })}
                    className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 focus:border-primary focus:outline-none transition-colors"
                  />
                  {errors.startDate && (
                    <p className="text-red-500 text-sm mt-1">{errors.startDate.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    {...register('endDate', { required: 'End date is required' })}
                    className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 focus:border-primary focus:outline-none transition-colors"
                  />
                  {errors.endDate && (
                    <p className="text-red-500 text-sm mt-1">{errors.endDate.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Number of Travelers
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  {...register('travelers', { required: 'Number of travelers is required' })}
                  className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 focus:border-primary focus:outline-none transition-colors"
                />
                {errors.travelers && (
                  <p className="text-red-500 text-sm mt-1">{errors.travelers.message}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Traveler Info */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Traveler Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    {...register('firstName', { required: 'First name is required' })}
                    className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 focus:border-primary focus:outline-none transition-colors"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    {...register('lastName', { required: 'Last name is required' })}
                    className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 focus:border-primary focus:outline-none transition-colors"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 focus:border-primary focus:outline-none transition-colors"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  {...register('phone', { required: 'Phone number is required' })}
                  className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 focus:border-primary focus:outline-none transition-colors"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Preferences */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Travel Preferences</h3>
              
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Accommodation Type
                </label>
                <select
                  {...register('accommodation', { required: 'Please select accommodation' })}
                  className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Select accommodation...</option>
                  <option value="luxury">Luxury Resort</option>
                  <option value="boutique">Boutique Hotel</option>
                  <option value="standard">Standard Hotel</option>
                  <option value="homestay">Homestay</option>
                </select>
                {errors.accommodation && (
                  <p className="text-red-500 text-sm mt-1">{errors.accommodation.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Interests
                </label>
                <div className="space-y-2">
                  {['Beach', 'Mountains', 'Culture', 'Adventure', 'Food'].map((activity) => (
                    <label key={activity} className="flex items-center gap-3 cursor-pointer p-2 hover:bg-secondary/50 rounded">
                      <input
                        type="checkbox"
                        value={activity}
                        {...register('activities')}
                        className="w-4 h-4 rounded border-border"
                      />
                      <span className="text-foreground">{activity}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Special Requests
                </label>
                <textarea
                  {...register('specialRequests')}
                  placeholder="Any dietary restrictions, accessibility needs, or special requests?"
                  className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 focus:border-primary focus:outline-none transition-colors resize-none h-24"
                />
              </div>
            </div>
          )}

          {/* Step 4: Payment */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Payment Information</h3>
              
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20 mb-6">
                <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
                <p className="text-4xl font-bold text-foreground">${totalPrice.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  {formData.travelers} traveler(s) × ${price} per person
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  {...register('cardName', { required: 'Cardholder name is required' })}
                  className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  {...register('cardNumber', { required: 'Card number is required' })}
                  className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    {...register('cardExpiry', { required: 'Expiry date is required' })}
                    className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    CVC
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    {...register('cardCvc', { required: 'CVC is required' })}
                    className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg border border-border">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded" />
                <p className="text-sm text-muted-foreground">
                  I agree to the terms and conditions
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {currentStep > 0 && (
          <Button
            type="button"
            onClick={handlePreviousStep}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
        )}

        {currentStep < steps.length - 1 ? (
          <Button
            type="button"
            onClick={handleNextStep}
            className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-accent hover:bg-accent/90"
          >
            {isSubmitting ? 'Completing Booking...' : 'Complete Booking'}
          </Button>
        )}
      </motion.div>
    </form>
  );
}

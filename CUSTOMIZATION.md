# WanderLust - Customization Guide

This guide helps you customize WanderLust to match your brand and business needs.

## Brand Customization

### 1. Change Company Name

**File**: `/components/header.tsx` and `/components/footer.tsx`

Replace "WanderLust" with your company name:

```tsx
// In header.tsx (line ~40)
<span className="text-white font-bold text-xl hidden sm:inline">YourBrand</span>

// In footer.tsx (line ~80)
<span className="text-white font-bold text-lg">YourBrand</span>
```

**File**: `/app/layout.tsx`

Update metadata:

```tsx
export const metadata: Metadata = {
  title: 'YourBrand - Your Tagline',
  description: 'Your description here',
};
```

### 2. Change Logo

Add your logo to `/public/logo.png`, then update header:

```tsx
// components/header.tsx
import Image from 'next/image';

<Image src="/logo.png" alt="Logo" width={40} height={40} />
```

### 3. Change Color Scheme

Edit `/app/globals.css`:

```css
:root {
  /* Change primary color (emerald → your color) */
  --primary: oklch(0.35 0.15 162);  /* Emerald Green */
  
  /* Change accent color (gold → your color) */
  --accent: oklch(0.65 0.18 56);    /* Warm Gold */
  
  /* Change secondary color (cream → your color) */
  --secondary: oklch(0.88 0.1 48);  /* Warm Cream */
}
```

**Common Colors** (in OkLCh format):
- Blue: `oklch(0.45 0.12 264)`
- Purple: `oklch(0.55 0.15 290)`
- Red: `oklch(0.60 0.20 20)`
- Orange: `oklch(0.60 0.16 50)`
- Green: `oklch(0.50 0.15 150)`

### 4. Change Typography

Edit `/app/layout.tsx`:

```tsx
import { YourFont, YourMono } from 'next/font/google'

const _yourFont = YourFont({ subsets: ["latin"] });
const _yourMono = YourMono({ subsets: ["latin"] });
```

Update `/app/globals.css`:

```css
@theme inline {
  --font-sans: 'YourFont', 'YourFont Fallback';
  --font-mono: 'YourMono', 'YourMono Fallback';
}
```

## Content Customization

### 1. Update Home Page Hero

**File**: `/components/hero.tsx`

Change headline (line ~80):
```tsx
<span className="block">Your Headline</span>
<span className="block bg-gradient-to-r from-accent via-yellow-300 to-accent bg-clip-text text-transparent">
  Your Tagline
</span>
```

Change description (line ~92):
```tsx
Explore curated destinations, book unforgettable experiences, and create memories that last a lifetime
```

Change hero image (line ~55):
```tsx
backgroundImage: 'url(https://YOUR-IMAGE-URL.jpg)',
```

### 2. Add/Edit Destinations

**File**: `/components/featured-destinations.tsx` and `/app/destinations/page.tsx`

Edit the `destinations` array:

```tsx
const destinations = [
  {
    id: '1',
    name: 'Bali, Indonesia',
    region: 'Southeast Asia',
    price: 1299,
    rating: 4.9,
    reviews: 2847,
    image: 'https://YOUR-IMAGE-URL.jpg',
    description: 'Your destination description',
    budget: 'Mid-Range',
    activity: 'Beach',
  },
  // Add more destinations...
];
```

### 3. Add Destination Details

**File**: `/app/destinations/[id]/page.tsx`

Add to `destinationDetails` object:

```tsx
'99': {
  name: 'Your Destination',
  region: 'Your Region',
  price: 1299,
  rating: 4.9,
  reviews: 2847,
  image: 'https://YOUR-IMAGE-URL.jpg',
  description: 'Short description',
  longDescription: 'Long detailed description',
  bestTime: 'Best season to visit',
  duration: '5-7 days',
  groupSize: '2-4 people',
  images: [
    'https://image1.jpg',
    'https://image2.jpg',
    // More images...
  ],
  highlights: [
    'Highlight 1',
    'Highlight 2',
    // More highlights...
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival',
      description: 'Welcome to...',
      activities: ['Activity 1', 'Activity 2'],
      highlights: ['Highlight 1'],
    },
    // More days...
  ],
},
```

### 4. Update Testimonials

**File**: `/components/testimonials-carousel.tsx`

Edit testimonials array (line ~10):

```tsx
const testimonials = [
  {
    id: 1,
    name: 'Customer Name',
    role: 'Customer Role',
    image: 'https://image-url.jpg',
    text: 'Your testimonial text here...',
    rating: 5,
  },
  // Add more testimonials...
];
```

### 5. Update Benefits

**File**: `/components/benefits-section.tsx`

Edit benefits array (line ~7):

```tsx
const benefits = [
  {
    icon: Award,
    title: 'Your Benefit',
    description: 'Your benefit description',
  },
  // More benefits...
];
```

### 6. Update Footer

**File**: `/components/footer.tsx`

Edit footer sections (line ~15):

```tsx
const footerSections = [
  {
    title: 'Your Section',
    links: ['Link 1', 'Link 2', 'Link 3'],
  },
  // More sections...
];
```

Edit social links (line ~25):

```tsx
const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/yourpage' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/yourprofile' },
  // More social links...
];
```

## Functional Customization

### 1. Connect Newsletter Form

**File**: `/components/newsletter-signup.tsx`

Update handleSubmit (line ~12):

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!email) {
    toast.error('Please enter your email');
    return;
  }

  setIsLoading(true);
  
  try {
    // Call your email service API
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    
    if (!response.ok) throw new Error('Failed to subscribe');
    
    toast.success('Thank you for subscribing!');
    setEmail('');
  } catch (error) {
    toast.error('Failed to subscribe');
  } finally {
    setIsLoading(false);
  }
};
```

### 2. Connect Booking Form

**File**: `/components/booking-form.tsx`

Update handleSubmit (line ~120):

```tsx
const onSubmit = async (data: FormData) => {
  try {
    // Send booking data to your API
    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) throw new Error('Failed to book');
    
    toast.success('Booking submitted! We\'ll contact you soon.');
  } catch (error) {
    toast.error('Failed to submit booking');
  }
};
```

### 3. Add Payment Processing

Add Stripe to `package.json`:

```bash
npm install @stripe/react-stripe-js @stripe/stripe-js
```

Update booking form:

```tsx
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';

const stripe = useStripe();

const handlePayment = async () => {
  const { token } = await stripe.createToken(cardElement);
  
  // Send to your backend
  const response = await fetch('/api/payment', {
    method: 'POST',
    body: JSON.stringify({ token: token.id, amount: price }),
  });
};
```

### 4. Add Database Integration

**Option 1: Supabase**

```bash
npm install @supabase/supabase-js
```

```tsx
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// In your API route
const { data, error } = await supabase
  .from('bookings')
  .insert([{ destination, date, travelers, email }]);
```

**Option 2: Firebase**

```bash
npm install firebase
```

```tsx
import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc } from 'firebase/firestore';

const db = getFirestore(app);

await addDoc(collection(db, 'bookings'), {
  destination,
  date,
  travelers,
  email,
});
```

### 5. Add Authentication

Using Supabase Auth:

```bash
npm install @supabase/auth-helpers-nextjs @supabase/supabase-js
```

Or NextAuth.js:

```bash
npm install next-auth
```

## Advanced Customization

### 1. Change Animation Timing

**File**: `/app/globals.css`

Edit animation values:

```css
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);  /* Change distance */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@layer utilities {
  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;  /* Change duration */
  }
}
```

### 2. Change Filter Options

**File**: `/components/destinations-filter.tsx`

Edit filter arrays (line ~20):

```tsx
const regions = ['All Regions', 'Your Region 1', 'Your Region 2'];
const budgets = ['All Budgets', 'Your Budget 1', 'Your Budget 2'];
const activities = ['All Activities', 'Your Activity 1', 'Your Activity 2'];
```

### 3. Change Stats

**File**: `/components/stats-section.tsx`

Edit stats array (line ~9):

```tsx
const stats: StatItem[] = [
  { value: 500, label: 'Your Stat 1', suffix: '+' },
  { value: 50000, label: 'Your Stat 2', suffix: '+' },
  // More stats...
];
```

### 4. Add New Pages

Create `/app/about/page.tsx`:

```tsx
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function About() {
  return (
    <main>
      <Header />
      <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">About Us</h1>
        <p>Your about page content...</p>
      </div>
      <Footer />
    </main>
  );
}
```

Then add to navigation in `header.tsx`:

```tsx
const navItems = [
  { label: 'Destinations', href: '/destinations' },
  { label: 'About', href: '/about' },  // Add this
  { label: 'Contact', href: '#contact' },
];
```

## SEO Customization

### 1. Add Meta Tags

**File**: `/app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: 'WanderLust - Discover Your Next Adventure',
  description: 'Explore breathtaking destinations...',
  keywords: 'travel, tourism, destinations',
  authors: [{ name: 'Your Company' }],
  creator: 'Your Company',
  publisher: 'Your Company',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'WanderLust',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WanderLust',
    description: 'Your description',
    creator: '@yourhandle',
  },
};
```

### 2. Add Schema Markup

Add to components:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      name: 'WanderLust',
      url: 'https://yourdomain.com',
      telephone: '+1-800-YOUR-PHONE',
    }),
  }}
/>
```

## Performance Optimization

### 1. Optimize Images

Use Next.js Image component:

```tsx
import Image from 'next/image';

<Image 
  src="/image.jpg" 
  alt="Description"
  width={800}
  height={600}
  priority
/>
```

### 2. Add Analytics

Google Analytics:

```tsx
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout() {
  return (
    <html>
      <body>
        {/* Your content */}
        <GoogleAnalytics gaId="G-YOUR-ID" />
      </body>
    </html>
  )
}
```

## File Checklist for Customization

- [ ] Update company name and branding
- [ ] Change color scheme
- [ ] Update typography
- [ ] Add your logo
- [ ] Update hero section
- [ ] Add/edit destinations
- [ ] Update testimonials
- [ ] Update benefits
- [ ] Update footer
- [ ] Connect newsletter form
- [ ] Connect booking form
- [ ] Add authentication
- [ ] Add database integration
- [ ] Configure payment processing
- [ ] Update meta tags
- [ ] Add schema markup
- [ ] Optimize images
- [ ] Add analytics
- [ ] Test on mobile
- [ ] Deploy to production

---

Need help? Check the other documentation files or review the component files for more details.

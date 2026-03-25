# WanderLust - Setup & Development Guide

## Quick Start (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure Explained

### `/app` - Next.js Application
```
app/
├── layout.tsx              # Root HTML wrapper with metadata
├── page.tsx                # Home page (/)
├── globals.css             # Global styles & design tokens
├── destinations/
│   ├── page.tsx            # Destinations listing (/destinations)
│   └── [id]/
│       └── page.tsx        # Destination detail (/destinations/:id)
└── booking/
    └── page.tsx            # Booking form (/booking)
```

### `/components` - React Components
```
components/
├── hero.tsx                # Parallax hero section
├── header.tsx              # Navigation header
├── footer.tsx              # Footer with links
├── featured-destinations.tsx  # Featured destinations grid
├── destination-card.tsx       # Reusable card component
├── testimonials-carousel.tsx  # Auto-rotating testimonials
├── stats-section.tsx          # Animated counters
├── benefits-section.tsx       # Benefits grid
├── newsletter-signup.tsx      # Email subscription
├── booking-form.tsx           # 4-step booking form
├── image-gallery.tsx          # Photo gallery with modal
├── itinerary-timeline.tsx     # Timeline visualization
├── destinations-filter.tsx    # Filter controls
├── scroll-to-top.tsx          # Scroll button
└── ui/                        # shadcn/ui components (50+)
```

## Available Scripts

### Development
```bash
npm run dev        # Start dev server (hot reload)
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint checks
```

## File Changes Guide

### How to Change Destination Data

Edit `/app/destinations/page.tsx` to modify the `allDestinations` array:

```tsx
const allDestinations = [
  {
    id: '1',
    name: 'Your Destination',
    region: 'Asia',
    price: 1299,
    rating: 4.9,
    reviews: 2847,
    image: 'https://your-image-url.jpg',
    description: 'Your description',
    budget: 'Mid-Range',
    activity: 'Beach',
  },
  // Add more destinations...
];
```

### How to Change Colors

Edit `/app/globals.css` to update the color palette:

```css
:root {
  --primary: oklch(0.35 0.15 162);      /* Emerald green */
  --accent: oklch(0.65 0.18 56);        /* Warm gold */
  --secondary: oklch(0.88 0.1 48);      /* Cream */
  /* ... other colors ... */
}
```

### How to Change Fonts

Edit `/app/layout.tsx` and `/app/globals.css`:

```tsx
import { YourFont, YourMono } from 'next/font/google'

const _yourFont = YourFont({ subsets: ["latin"] });
const _yourMono = YourMono({ subsets: ["latin"] });
```

### How to Add New Pages

1. Create new folder in `/app`: `app/new-page/`
2. Add `page.tsx` inside
3. Add necessary imports and components
4. Next.js automatically routes it

Example:
```tsx
// app/about/page.tsx
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function About() {
  return (
    <main>
      <Header />
      <h1>About Us</h1>
      <Footer />
    </main>
  );
}
```

### How to Add New Components

1. Create file in `/components/your-component.tsx`
2. Build component with React & Framer Motion
3. Export as named export
4. Import in pages as needed

Example:
```tsx
// components/your-component.tsx
'use client';

import { motion } from 'framer-motion';

export function YourComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      Your content
    </motion.div>
  );
}
```

## Common Tasks

### Task: Change Hero Background Image
```tsx
// components/hero.tsx - Line ~55
backgroundImage: 'url(YOUR_NEW_IMAGE_URL)',
```

### Task: Update Newsletter Email Handler
```tsx
// components/newsletter-signup.tsx - Line ~18
const handleSubmit = async (e: React.FormEvent) => {
  // Add your email service API call here
  // e.g., sendgrid, mailchimp, etc.
};
```

### Task: Change Testimonials
```tsx
// components/testimonials-carousel.tsx - Line ~10
const testimonials = [
  {
    id: 1,
    name: 'Your Name',
    role: 'Your Role',
    image: 'URL',
    text: 'Your testimonial',
    rating: 5,
  },
];
```

### Task: Add New Destination Details
```tsx
// app/destinations/[id]/page.tsx - Line ~15
const destinationDetails: Record<string, any> = {
  '1': { /* existing */ },
  '99': {
    name: 'New Destination',
    region: 'Your Region',
    // ... complete object
  },
};
```

## Styling Guide

### Using Tailwind CSS
```tsx
<div className="flex items-center justify-between p-4 rounded-lg bg-primary/10 text-foreground">
  Content
</div>
```

### Using Design Tokens
All colors use CSS custom properties:
- `bg-background` / `bg-foreground`
- `bg-primary` / `bg-primary-foreground`
- `bg-accent` / `bg-accent-foreground`
- `bg-card` / `bg-card-foreground`
- `text-muted-foreground`
- `border-border`

### Using Framer Motion
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

## Form Handling

### Using React Hook Form
```tsx
import { useForm } from 'react-hook-form';

const { register, handleSubmit, formState: { errors } } = useForm();

<form onSubmit={handleSubmit(onSubmit)}>
  <input {...register('email', { required: true })} />
  {errors.email && <span>Email is required</span>}
</form>
```

## Notifications

### Using Sonner Toast
```tsx
import { toast } from 'sonner';

toast.success('Success message');
toast.error('Error message');
toast.loading('Loading...');
```

## Performance Tips

1. **Use Next.js Image Component**
   - Automatically optimizes images
   - Lazy loads out-of-viewport images

2. **Code Splitting**
   - Dynamic imports for heavy components
   - Automatic route-based code splitting

3. **Caching**
   - Static generation for unchanging pages
   - ISR for semi-dynamic content

4. **Optimize Animations**
   - Use GPU acceleration
   - Avoid animating layout properties
   - Use Framer Motion's optimizations

## Debugging

### Check Console
```bash
# In browser DevTools
F12 → Console tab
```

### View Network Requests
```bash
F12 → Network tab
```

### Debug TypeScript
```bash
npm run build  # Shows TypeScript errors
```

### React DevTools
- Install Chrome/Firefox extension
- Inspect component props and state

## Deployment Preparation

### Before Deploying
1. Test all pages locally
2. Run `npm run build` (should succeed)
3. Test production build: `npm run start`
4. Check for console errors
5. Test responsive design

### Environment Variables
Currently no `.env` variables needed. If adding external APIs:

1. Create `.env.local`:
```
NEXT_PUBLIC_API_URL=your_api_url
```

2. Use in code:
```tsx
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

## Getting Help

### Resources
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [shadcn/ui](https://ui.shadcn.com)

### Common Issues

**Issue**: Page doesn't load after changes
- Clear `.next` folder: `rm -rf .next`
- Restart dev server: `npm run dev`

**Issue**: Images not showing
- Check image URL is valid
- Check CORS headers
- Use absolute URLs for external images

**Issue**: Animations not working
- Check browser supports CSS transforms
- Verify Framer Motion is imported
- Check z-index conflicts

**Issue**: Form not submitting
- Check form validation
- Check console for errors
- Verify form inputs have names

## Next Steps

1. Customize colors to match your brand
2. Add your destinations and images
3. Set up form submission handlers
4. Connect to your backend/CMS
5. Deploy to Vercel
6. Monitor with Vercel Analytics

---

Happy coding! 🚀

# WanderLust - Premium Tourism Website

A modern, fully-functional tourism web application built with Next.js 16, React 19, and Tailwind CSS v4. Features premium animations, interactive components, and a seamless user experience for travelers worldwide.

## ✨ Features

### Premium Design & Animations
- Elegant emerald green and warm gold color palette
- Smooth parallax hero section with scroll effects
- Framer Motion animations throughout
- Glassmorphism effects and modern UI
- Fully responsive mobile-first design

### Core Pages & Functionality
- **Home Page**: Hero with parallax, featured destinations, animated stats, benefits, testimonials, newsletter
- **Destinations Page**: Browse 12+ curated destinations with real-time filtering
- **Destination Details**: Full itineraries, photo galleries with lightbox modal, reviews, booking widget
- **Booking Page**: 4-step multi-step form with validation and payment fields

### Interactive Components
- Parallax hero section with scroll-triggered animations
- Animated destination cards with hover effects
- Auto-rotating testimonial carousel
- Itinerary timeline visualization
- Image gallery with modal lightbox
- Scroll-triggered animated counters
- Newsletter subscription with validation
- Fully featured mobile navigation
- Smooth scroll-to-top button
- Toast notifications for user feedback

## 🚀 Tech Stack

- **Framework**: Next.js 16 with App Router
- **Runtime**: React 19 with Server Components
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Animations**: Framer Motion for smooth transitions
- **Forms**: React Hook Form + Zod validation
- **UI Components**: shadcn/ui collection
- **Icons**: Lucide React
- **Notifications**: Sonner toast system
- **Analytics**: Vercel Analytics included

## 📋 Getting Started

### Prerequisites
- Node.js 18 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone and enter the directory**
```bash
git clone <repository-url>
cd v0-tourism-website-design
```

2. **Install dependencies**
```bash
npm install
# or yarn install / pnpm install / bun install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx                 # Root layout with metadata & Sonner
│   ├── page.tsx                   # Home page
│   ├── globals.css                # Global styles & design tokens
│   ├── destinations/
│   │   ├── page.tsx               # Destinations listing with filters
│   │   └── [id]/page.tsx          # Destination detail page
│   └── booking/
│       └── page.tsx               # Multi-step booking form
├── components/
│   ├── hero.tsx                   # Parallax hero section
│   ├── header.tsx                 # Navigation with mobile menu
│   ├── footer.tsx                 # Footer with links
│   ├── featured-destinations.tsx  # Destinations grid
│   ├── destination-card.tsx       # Card component with animations
│   ├── testimonials-carousel.tsx  # Auto-rotating testimonials
│   ├── stats-section.tsx          # Animated counter stats
│   ├── benefits-section.tsx       # Benefits grid
│   ├── newsletter-signup.tsx      # Email subscription form
│   ├── booking-form.tsx           # 4-step booking flow
│   ├── image-gallery.tsx          # Gallery with lightbox modal
│   ├── itinerary-timeline.tsx     # Timeline visualization
│   ├── destinations-filter.tsx    # Advanced filtering controls
│   ├── scroll-to-top.tsx          # Smooth scroll button
│   └── ui/                        # 50+ shadcn/ui components
├── next.config.ts                 # Next.js config
├── tailwind.config.ts             # Tailwind setup
├── tsconfig.json                  # TypeScript config
└── package.json                   # Dependencies
```

## 🎨 Design System

### Color Palette
- **Primary (Emerald Green)**: `oklch(0.35 0.15 162)` - Main brand color
- **Accent (Warm Gold)**: `oklch(0.65 0.18 56)` - Call-to-action elements
- **Secondary (Cream)**: `oklch(0.88 0.1 48)` - Supporting color
- **Background**: `oklch(0.98 0.005 179)` - Light neutral
- **Foreground**: `oklch(0.18 0.02 180)` - Dark text

### Typography
- **Primary Font**: Geist (sans-serif) - All text
- **Mono Font**: Geist Mono - Code blocks

### Custom Animations
- `fade-in-up` - Fade in with upward slide
- `slide-in-left/right` - Horizontal slide entrance
- `scale-in` - Scale up from 0.95
- `shimmer` - Loading placeholder effect
- Smooth scroll behavior site-wide

## 🔧 Key Features Explained

### Parallax Hero Section
Uses scroll events to move background image at a slower rate than foreground, creating depth effect. Works with gradient overlay for text readability.

### Animated Statistics
Stats counter uses Intersection Observer to trigger number animation when scrolled into view. Creates engaging visual impact.

### Multi-Step Booking Flow
4-step form with:
- Trip Details (dates, travelers)
- Traveler Info (name, email, phone)
- Preferences (accommodation, activities)
- Payment (card information)

Each step validates before proceeding. Uses React Hook Form for efficiency.

### Smart Filtering
Filter destinations by:
- Region (Asia, Europe, Americas, Africa, Oceania)
- Budget (Budget, Mid-Range, Luxury, Ultra-Luxury)
- Activity (Beach, Mountains, Culture, Adventure, Relaxation)

Real-time filter updates with smooth transitions.

### Toast Notifications
Sonner provides elegant notifications for:
- Newsletter subscriptions
- Form submissions
- Booking confirmations
- Error messages

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Touch-friendly navigation and buttons
- Optimized images for all screen sizes

## ⚡ Performance

- Next.js 16 optimizations enabled
- Turbopack for fast builds
- Server-side rendering for better SEO
- Image lazy loading from external URLs
- Code splitting with dynamic imports
- Framer Motion with GPU acceleration
- Custom scrollbar styling

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🚀 Deployment

This project is configured for easy deployment to Vercel:

1. Push to GitHub
2. Connect repository to Vercel
3. Vercel automatically deploys on push to main branch

[Deploy to Vercel](https://vercel.com/new)

## 🔄 Built with v0

This repository is linked to [v0](https://v0.app). Continue developing:

[Continue working on v0 →](https://v0.app/chat/projects/prj_iopFDnhdnYgJfm9SX5rw5Aj02nt0)

Every push to main automatically deploys the application.

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [shadcn/ui](https://ui.shadcn.com)
- [v0 Documentation](https://v0.app/docs)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For questions or issues, please open a GitHub issue or contact the development team.

---

Built with ❤️ for travelers worldwide using [v0.app](https://v0.app)

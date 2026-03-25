# WanderLust - Quick Reference Card

## 🚀 Start Development (30 seconds)

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## 📁 Important Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Home page |
| `components/hero.tsx` | Hero section |
| `app/globals.css` | Colors & animations |
| `app/layout.tsx` | Site metadata |
| `components/featured-destinations.tsx` | Featured list |
| `app/destinations/page.tsx` | All destinations |
| `app/destinations/[id]/page.tsx` | Detail page |
| `app/booking/page.tsx` | Booking form |

## 🎨 Quick Color Changes

**File**: `app/globals.css` (line ~7)

```css
--primary: oklch(0.35 0.15 162);    /* Main color */
--accent: oklch(0.65 0.18 56);      /* Action color */
--secondary: oklch(0.88 0.1 48);    /* Supporting */
```

## 📝 Quick Text Changes

| What | Where |
|------|-------|
| Company name | `header.tsx` line 40 & `footer.tsx` line 80 |
| Hero headline | `hero.tsx` line 80 |
| Page title | `layout.tsx` line 12 |
| Benefits list | `benefits-section.tsx` line 7 |
| Testimonials | `testimonials-carousel.tsx` line 10 |
| Destinations | `featured-destinations.tsx` line 23 |

## 🔗 Key Links

- Home: `/`
- Destinations: `/destinations`
- Detail: `/destinations/:id`
- Booking: `/booking`

## 🧩 Main Components

```
Header          ← Navigation & logo
  ↓
Hero            ← Parallax section
  ↓
StatsSection    ← Animated counters
  ↓
FeaturedDests   ← 6 destinations
  ↓
BenefitsSection ← 4 benefits
  ↓
Testimonials    ← Carousel
  ↓
Newsletter      ← Email signup
  ↓
Footer          ← Links
```

## 📦 Install New Packages

```bash
npm install package-name
# Then restart dev server: npm run dev
```

## 🎬 Build & Deploy

```bash
npm run build    # Check for errors
npm run start    # Test production
# Then push to GitHub and Vercel auto-deploys
```

## 🐛 Common Issues

| Issue | Fix |
|-------|-----|
| Page doesn't update | Clear `.next`: `rm -rf .next` |
| Styles not applied | Check Tailwind class names |
| Images not showing | Verify image URL is accessible |
| Form not working | Check console for validation errors |
| Animations choppy | Check device GPU capability |

## 📊 Page Structure

```
Every page has:
  Header (navigation)
    ↓
  Main Content (unique)
    ↓
  Footer (consistent)
```

## 🎯 Common Tasks

**Add new destination**
```tsx
// In featured-destinations.tsx or page.tsx
{
  id: '7',
  name: 'New Place',
  region: 'Your Region',
  price: 1299,
  rating: 4.9,
  reviews: 100,
  image: 'https://url.jpg',
  description: 'Description',
}
```

**Change hero image**
```tsx
// In hero.tsx line ~55
backgroundImage: 'url(YOUR_IMAGE_URL)',
```

**Add button link**
```tsx
import Link from 'next/link';

<Link href="/destinations">
  <Button>Click Me</Button>
</Link>
```

**Add toast notification**
```tsx
import { toast } from 'sonner';

toast.success('Success!');
toast.error('Error!');
toast.loading('Loading...');
```

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

## 📱 Responsive Breakpoints

```css
sm:   640px
md:   768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

Usage: `md:text-2xl lg:p-8`

## 🎨 Tailwind Quick Reference

```tsx
// Spacing
p-4           /* padding */
m-2           /* margin */
gap-4         /* gap between items */

// Flexbox
flex          /* display: flex */
items-center  /* align-items: center */
justify-between  /* justify-content: space-between */

// Text
text-lg       /* font size */
font-bold     /* font weight */
text-center   /* text alignment */

// Colors
bg-primary    /* background */
text-white    /* text color */
border-border /* border */

// Responsive
md:text-xl    /* on medium screens */
lg:p-8        /* on large screens */
```

## 🔑 Environment Variables

Currently none needed. If adding APIs:

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
API_SECRET=your-secret-key
```

## 📈 Performance Tips

1. Keep animations under 0.6s
2. Use Tailwind classes (not inline CSS)
3. Lazy load images
4. Don't optimize prematurely
5. Test on real devices

## 🚢 Deployment Steps

1. Push to GitHub
2. Connect repo to Vercel
3. Select Next.js framework
4. Deploy!

That's it. Vercel handles the rest.

## 📞 Quick Help

**Docs**: README.md, SETUP_GUIDE.md, CUSTOMIZATION.md
**Questions**: Check component files for examples
**Issues**: Look at error message in console (F12)

---

## File Locations Cheat Sheet

```
src files        → /app, /components
styles          → /app/globals.css
components      → /components/*.tsx
pages           → /app/*/page.tsx
config          → next.config.ts, tailwind.config.ts
deps            → package.json
documentation   → *.md files
```

---

**Last Updated**: 2026-03-25
**Version**: 1.0.0

Good luck! 🎉

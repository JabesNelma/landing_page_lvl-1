# JN - Modern Product Landing Page

A premium, motion-driven product landing page built with **Next.js 16**, **Framer Motion**, and **Tailwind CSS**. Features immersive animations, interactive product showcase, and seamless checkout experience.

---

## 🔗 Links

- **Live Demo**: [Deploy Link](https://landing-page-lvl-1.vercel.app)
- **Repository**: [GitHub](https://github.com/jabes/landing_page_lvl-1)
- **Issues & Feedback**: [GitHub Issues](https://github.com/jabes/landing_page_lvl-1/issues)

---

## 🎯 Overview

This is a production-ready frontend application showcasing a modern approach to product presentation with smooth transitions, scroll-based animations, and interactive UI patterns. Built with TypeScript for type safety and Radix UI components for accessible, customizable interfaces.

---

## ✨ Key Features

- **Motion-Driven UX** – Smooth, performant animations powered by Framer Motion
  - Auto-rotation and scale transitions
  - Scroll-triggered animations
  - Hover interactions with spring physics
  - Morph-like transitions between states

- **Interactive Product Showcase** – Dynamic product presentation with visual effects

- **Fully Responsive** – Mobile-first design with adaptive layouts

- **Accessible Components** – Built on Radix UI primitives ensuring accessibility standards

- **Complete Checkout Flow** – Form validation, order processing, and confirmation

- **Multi-Page Experience** – Landing page, demo page, and checkout routes

- **Regional Localization** – Timor-Leste support (municipalities, phone format, currency)

- **Form Management** – React Hook Form with Zod validation

- **State Management** – Zustand for lightweight, predictable state

- **Dark Mode Support** – Theme switching via Next Themes

- **Type-Safe** – Full TypeScript coverage

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ (or compatible npm version)
- **Git** (optional, for cloning)
- Modern web browser
- Code editor (VS Code recommended)

---

## 🛠️ Installation & Development

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Step 3: Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Landing page (Hero, Features, CTA)
│   │   ├── checkout/page.tsx   # Checkout page with form validation
│   │   └── demo/page.tsx       # Product demo page with specs
│   ├── components/            # Reusable React components
│   │   └── ui/               # shadcn/ui components
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility functions
│   └── app/globals.css       # Global styles
├── public/                    # Static assets
├── prisma/                   # Database schema (if applicable)
├── package.json               # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── README.md                 # This file
```

---

## 🎬 Animations & Motion System

### Auto Animation
Product rotates continuously with smooth, natural motion at 8-second intervals. Uses `rotateY` for 3D perspective effect and spring timing for premium feel.

### Hover Interactions
Interactive elements respond to user input with scale, rotation, and shadow effects. Framer Motion's spring physics create natural, satisfying motion.

### Scroll-Based Animations
Sections animate into view as users scroll using `whileInView`. Staggered animations across child elements create depth and visual hierarchy.

### Transitions
Morph-like transitions between states using `layoutId` and `AnimatePresence`. Smooth, PowerPoint-style animations between pages and UI states.

---

## 🔧 Tech Stack

### Framework & Core
- **Next.js 16** – React framework with App Router
- **React 19** – Latest React with automatic JSX runtime
- **TypeScript 5** – Type-safe development environment

### Styling & Components
- **Tailwind CSS 4** – Utility-first CSS framework
- **shadcn/ui** – High-quality, accessible UI components
- **Radix UI** – Headless, unstyled component primitives
- **Lucide React** – Beautiful, consistent icon library

### Motion & Animation
- **Framer Motion 12** – Production-grade animation library for React

### Forms & Validation
- **React Hook Form** – Performant form state management
- **Zod** – TypeScript-first schema validation

### State & Data
- **Zustand** – Lightweight state management
- **TanStack Query** – Server state management (optional)

### Database
- **Prisma ORM** – Type-safe database client
- **@prisma/client** – Database query interface

### Utilities
- **clsx** – Conditional className builder
- **tailwind-merge** – Merge Tailwind utility classes
- **uuid** – Unique ID generation
- **date-fns** – Date manipulation utilities

### Notifications
- **Sonner** – Toast notifications library

---

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start dev server on port 3000
npm run lint         # Check code with ESLint
npm run lint:fix     # Auto-fix code quality issues

# Database
npm run db:push      # Push schema to database
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Run migrations
npm run db:reset     # Reset database

# Build & Production
npm run build         # Create optimized production build
npm run start         # Start production server
npm run clean         # Remove .next and node_modules
npm run type-check    # Run TypeScript type checker
```

---

## 📄 Pages Overview

### Landing Page (`/`)
Hero section with animated product, feature cards, interactive showcase, and strong CTAs. Demonstrates smooth scroll animations and premium motion design.

### Checkout Page (`/checkout`)
Complete checkout form with:
- Personal information fields
- Timor-Leste municipality selector
- Product color & quantity selection
- Payment method selection
- Form validation (submit disabled until complete)
- Order summary

### Demo Page (`/demo`)
Product showcase featuring:
- Interactive product carousel
- Customer rating and reviews
- Technical specifications
- Feature highlights
- Multiple call-to-action buttons

---

## 🌍 Localization Features

- **Phone Format**: `(+670) 7xxxxxxx`
- **Address Format**: `aldeia, suco, postu administrativu`
- **14 Municipalities**: Aileu, Ainaro, Atauro, Baucau, Bobonaro, Covalima, Dili, Ermera, Lautem, Liquica, Manatuto, Manufahi, Oecusse, Viqueque
- **Currency**: USD

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Other Platforms
- Netlify
- Railway
- Render
- AWS Amplify
- DigitalOcean App Platform

---

## 🧪 Troubleshooting

**Port 3000 already in use:**
```bash
PORT=3001 npm run dev
```

**Dependencies won't install:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
rm -rf .next
npm run build
```

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [TypeScript](https://www.typescriptlang.org/docs)

---

## 📄 License

This project is provided for development and demonstration purposes.

---

## 🎉 Getting Started Checklist

- [ ] Install Node.js 18+
- [ ] Clone repository
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Open `http://localhost:3000`
- [ ] Test all pages and interactions
- [ ] Deploy to Vercel or hosting platform



2. **Browser Shows:**
   - JN branding throughout
   - Animated product in hero section
   - Smooth transitions and hover effects
   - All pages accessible

3. **No Errors:**
   - No red text in terminal
   - No error popups in browser
   - Console is clean (F12)

---

## 🚀 Ready to Start?

Execute this command to begin:

```bash
npm run dev
```

Then open your browser to:
**http://localhost:3000**

**Enjoy developing with JN!** 🎨✨

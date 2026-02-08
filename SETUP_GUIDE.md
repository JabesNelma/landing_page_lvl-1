# 🚀 Quick Setup Guide for Local Development

This guide will help you run the **JN Landing Page** project locally using **npm**.

---

## 📋 Prerequisites Checklist

Before starting, ensure you have:

- [ ] **Node.js** 18+ installed
- [ ] **npm** (package manager)
- [ ] Git (optional, for cloning)
- [ ] Modern browser (Chrome, Firefox, Safari, Edge)
- [ ] Code editor (VS Code recommended)
- [ ] Terminal/command prompt

---

## 🎯 3 Steps to Run Locally

### Step 1: Install Dependencies

**Using npm (Most common package manager)**

```bash
npm install
```

**What this does:**
- Downloads and installs all packages from `package.json`
- Creates `node_modules` folder
- Generates `package-lock.json`
- Shows progress bars during installation

**What if installation fails?**

```bash
# Clear cache and try again
rm -rf node_modules package-lock.json
npm install
```

**Alternative package managers:**

```bash
# npm (Recommended - Most common)
npm install

# yarn
yarn install

# pnpm
pnpm install
```

---

### Step 2: Start Development Server

```bash
npm run dev
```

**What happens:**
- Next.js development server starts on **port 3000**
- Hot reload enabled (changes auto-refresh when you save files)
- Compiles TypeScript on the fly
- Logs output to `dev.log` file

**Open in browser:**
```
http://localhost:3000
```

**How to verify it's working:**
1. Open terminal and check for `✓ Ready in XXXms`
2. Open browser to http://localhost:3000
3. You should see the JN landing page with animated product

---

### Step 3: Verify All Pages are Working

Once the server starts, test each page:

#### 1. Landing Page (http://localhost:3000/)

**Check these features:**
- [ ] Hero section with animated JN product visible
- [ ] Product image rotates automatically (8-second loop)
- [ ] Hover effects work (product tilts and scales)
- [ ] "Order Now" button navigates to /checkout
- [ ] "Watch Demo" button navigates to /demo
- [ ] Problem → Solution section displays correctly
- [ ] 6 feature cards with icons visible
- [ ] Interactive Product Showcase works
- [ ] CTA section with trust badges visible
- [ ] All animations are smooth and premium

#### 2. Checkout Page (http://localhost:3000/checkout)

**Check these features:**
- [ ] Personal Information section visible
  - [ ] Full Name field works
  - [ ] Email field works
  - [ ] Phone Number field with placeholder (+670) 7xxxxxxx
- [ ] Shipping Address section visible
  - [ ] Address field with placeholder "aldeia, suco, postu administrativu"
  - [ ] Municipality dropdown with 14 Timor-Leste options
- [ ] Order Details section visible
  - [ ] Color selection (5 options) works
  - [ ] Quantity selector (1-10) works
- [ ] Payment Method selection (COD, Bank Transfer, E-Wallet) works
- [ ] Order Summary shows product preview
- [ ] Price breakdown visible (Price, Shipping, Total)
- [ ] **Form Validation:**
  - [ ] Pay button is DISABLED when form is incomplete
  - [ ] Button shows "Please fill all required fields" when invalid
  - [ ] Button shows correct price when all fields filled
  - [ ] Button becomes ENABLED only when all fields are valid

#### 3. Demo Page (http://localhost:3000/demo)

**Check these features:**
- [ ] Product showcase with animated product visible
- [ ] Color selection works
- [ ] Product rating displays (4.9 stars, 2,847 reviews)
- [ ] 6 feature cards with full details visible
- [ ] Technical specifications (6 categories) complete
- [ ] Customer reviews (3 samples) visible
- [ ] Multiple "Buy Now" buttons navigate to checkout

#### 4. Responsiveness

**Test on different screen sizes:**
- [ ] Mobile (iPhone SE size: 375px)
- [ ] Tablet (iPad size: 768px)
- [ ] Desktop (1920px)
- [ ] All pages work on all screen sizes

---

## 🛠️ Common Issues & Solutions

### Issue 1: Port 3000 Already in Use

**Error message:**
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solution 1: Kill the process**
```bash
# Find what's using port 3000
lsof -ti:3000
# or on Windows
netstat -ano | findstr :3000

# Kill the process (replace <PID> with actual PID)
kill -9 <PID>
```

**Solution 2: Use a different port**
```bash
# Use port 3001 instead
PORT=3001 npm run dev
```

---

### Issue 2: Dependencies Not Installing

**Error messages:**
```
Error: Cannot find module '...'
EACCES: permission denied
```

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# On Windows, run terminal as Administrator
# On macOS/Linux, check permissions
chmod +x .
```

---

### Issue 3: Module Not Found After Installation

**Error message:**
```
Module not found: Can't resolve '...'
```

**Solution:**
```bash
# Check if all dependencies are installed
npm list

# Reinstall if package is missing
npm install <package-name>

# Or try with --force flag
npm install --force
```

---

### Issue 4: Build Errors

**Error messages:**
```
Module not found: Can't resolve '...
Type error: Cannot find type definition
```

**Solution:**
```bash
# Clear Next.js cache
rm -rf .next

# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Restart development server
npm run dev
```

---

### Issue 5: Hot Reload Not Working

**Symptoms:**
- Changes don't appear when you save files
- Need to refresh browser manually

**Solution:**
```bash
# 1. Check dev server is running
ps aux | grep "next dev"

# 2. Restart the server
# Stop the server (Ctrl+C)
# Run again:
npm run dev
```

---

### Issue 6: TypeScript Errors in Console

**Error messages:**
```
TypeScript error: Property 'xxx' does not exist
```

**Solution:**
```bash
# Run type check
npm run type-check

# Fix reported errors
npm run lint:fix

# Restart server
npm run dev
```

---

### Issue 7: Cannot Find Node.js or npm

**Symptoms:**
- Command not found: `node: command not found`
- Command not found: `npm: command not found`

**Solution:**

**For Windows:**
1. Download and install Node.js from https://nodejs.org
2. Download and install npm from https://www.npmjs.com
3. Restart your terminal/command prompt

**For macOS:**
```bash
# Using Homebrew
brew install node
brew install npm

# OR using Node version manager (nvm)
nvm install --lts
nvm use --lts
```

**For Linux (Ubuntu/Debian):**
```bash
# Using apt
sudo apt update
sudo apt install nodejs npm
```

**For Linux (Fedora/CentOS):**
```bash
# Using yum
sudo yum install nodejs npm
```

---

## 📝 Available Scripts

All commands available in `package.json`:

### Development Scripts

```bash
npm run dev              # Start development server (port 3000)
npm run lint             # Check code quality
npm run lint:fix         # Auto-fix ESLint issues
```

### Database Scripts (if using Prisma)

```bash
npm run db:push          # Push schema to database
npm run db:generate        # Generate Prisma client
npm run db:migrate         # Run database migrations
npm run db:reset           # Reset database
```

### Utility Scripts

```bash
npm run clean            # Remove .next and node_modules
npm run type-check        # TypeScript type checking
```

### Build & Production Scripts

```bash
npm run build             # Create optimized production build
npm run start             # Start production server
```

---

## 📁 Project Structure Overview

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
│   ├── product.png            # Generated product image
│   └── robots.txt
├── prisma/                   # Database schema (if using)
├── package.json               # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── .env.example              # Environment variables template
├── README.md                # Full documentation
└── SETUP_GUIDE.md           # This file
```

---

## 🎨 Key Features Explained

### 1. Landing Page (`/`)

**Hero Section:**
- Large bold headline with gradient text
- Subheadline explaining product value
- Two CTA buttons: "Order Now" and "Watch Demo"
- Animated product image with auto-rotation (8-second loop)
- Hover effects: product tilts and scales with intensified shadows

**Problem → Solution Section:**
- 3 user pain points with icons
- 3 solution points showing how JN solves them
- Fade-in animations when scrolling into view

**Features Section:**
- 6 feature cards with icons
- Descriptions of each feature
- Hover effects (cards lift up on hover)

**Interactive Product Showcase:**
- Animated product in center
- Surrounding spec panels
- Smooth transitions based on scroll position

**CTA Section:**
- Strong closing call-to-action
- 3 trust badges (2-Year Warranty, Secure Payment, Eco-Friendly)

### 2. Checkout Page (`/checkout`)

**Personal Information:**
- Full Name (required)
- Email (required, with format validation)
- Phone Number with format (+670) 7xxxxxxx (required)

**Shipping Address:**
- Complete Address with placeholder "aldeia, suco, postu administrativu" (required)
- Municipality dropdown with 14 Timor-Leste options (required)

**Order Details:**
- Color selection: 5 options (Default White, Midnight Black, Ocean Blue, Forest Green, Rose Pink)
- Quantity selector: 1-10 (with +/- buttons)

**Payment Method:**
- Cash on Delivery
- Bank Transfer
- E-Wallet

**Order Summary:**
- Product preview with image
- Dynamic price calculation
- Price breakdown: Price, Shipping, Total
- Shipping discount for 2+ items

**Form Validation:**
- All fields validated before submission
- Pay button disabled when form incomplete
- Button shows "Please fill all required fields" when invalid
- Button shows correct price when all fields filled
- Visual feedback with opacity and cursor styles

### 3. Demo Page (`/demo`)

**Product Showcase:**
- Animated product with color selection
- Product rating: 4.9 stars, 2,847 reviews

**6 Feature Cards:**
1. Smart Hydration Tracking
2. Temperature Control
3. Self-Cleaning UV-C
4. Smart App Integration
5. Long Battery Life
6. Leak-Proof Design

**Technical Specifications:**
- Material (Stainless Steel, BPA-Free, FDA Approved)
- Capacity & Size (750ml, 26cm height, 350g weight)
- Performance (24h cold, 12h hot retention, 7-day battery)
- Technology (Bluetooth 5.0, iOS & Android app, UV-C, IPX7)
- Package Contents (Bottle, USB-C cable, Quick Start Guide, Warranty Card)
- Warranty (2 years, 30-day return, 24/7 support)

**Customer Reviews:**
- 3 sample reviews with ratings
- Review cards with profile pictures

---

## 💰 Pricing Details

- **Product Price**: $35.00 USD (29% discount from $50.00)
- **Shipping**: $5.00 USD (FREE for 2+ items)
- **Payment Methods**: Cash on Delivery, Bank Transfer, E-Wallet

**Total Calculation:**
```
Price (Product × Quantity) + Shipping - Discount (if applicable) = Total
```

---

## 🌍 Timor-Leste Localization Complete

**Phone Format:**
- Placeholder: `(+670) 7xxxxxxx`
- Validation: Must not be empty

**Address Format:**
- Placeholder: `aldeia, suco, postu administrativu`
- Validation: Must not be empty

**Municipality Dropdown:**
14 Timor-Leste municipalities:
1. Aileu
2. Ainaro
3. Atauro
4. Baucau
5. Bobonaro
6. Covalima
7. Dili
8. Ermera
9. Lautem
10. Liquica
11. Manatuto
12. Manufahi
13. Oecusse (RAEOA)
14. Viqueque

**Currency:**
- USD with 2 decimal places ($35.00)

---

## 🧪 Technology Stack Explained

### Core Framework
- **Next.js 16** - Latest React framework with App Router
- **TypeScript 5** - Type-safe JavaScript for better developer experience
- **React 19** - Latest React with automatic JSX runtime

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework for rapid UI development
- **shadcn/ui** - High-quality, accessible components built on Radix UI
- **Lucide React** - Beautiful & consistent icon library

### Animation
- **Framer Motion 12** - Production-ready motion library for React
  - Auto-rotation, hover effects, scroll animations
  - Morph-like transitions for smooth flow

### State Management & Data Fetching
- **React State** - Built-in hooks for component state
- **TanStack Query** - Server state synchronization for React
- **Fetch** - Promise-based HTTP request

### Forms & Validation
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation
- **Custom Validation** - Real-time form field validation for checkout

### UI Components
- **Radix UI** - Unstyled, accessible components (buttons, inputs, dialogs, etc.)
- **Sonner** - Beautiful toast notifications for user feedback

### Utilities
- **clsx** - Conditional className utility for merging classes
- **tailwind-merge** - Merge Tailwind CSS classes without conflicts
- **date-fns** - Modern JavaScript date utility library

### Database (Optional)
- **Prisma ORM** - Next-generation TypeScript ORM
- **SQLite** - Default database for development

---

## 🎯 Performance Tips

### Development Performance

**Use npm for faster installs:**
- npm is the most common and well-optimized package manager
- Package downloads are cached globally
- Install times are generally faster than alternatives

**Clear browser cache:**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear cache: F12 > Application > Clear storage

**Close unnecessary tabs:**
- Keep only necessary tabs open to save memory

### Debugging

**Use browser DevTools:**
- Open Chrome DevTools (F12)
- Check Console for errors
- Use Network tab to see API calls
- Use React DevTools for component inspection

**Check console logs:**
- Server logs are saved to `dev.log`
- View logs: `tail -n 50 dev.log` (Linux/Mac) or Get-Content dev.log (Windows)

---

## 📚 Learning Resources

**Official Documentation:**
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion)
- [shadcn/ui](https://ui.shadcn.com)
- [Radix UI](https://www.radix-ui.com)
- [TypeScript](https://www.typescriptlang.org/docs)

**Tutorials:**
- [Next.js Learn](https://nextjs.org/learn)
- [React Documentation](https://react.dev)
- [npm Documentation](https://docs.npmjs.com)

---

## ✅ Final Verification Checklist

After starting the server, verify all these work:

**Page Functionality:**
- [ ] Landing page loads without errors
- [ ] All animations are smooth and premium
- [ ] "Order Now" button navigates to /checkout
- [ ] "Watch Demo" button navigates to /demo
- [ ] Checkout page form validation works
- [ ] Pay button properly disables/enables based on form validity
- [ ] Municipality dropdown shows all 14 Timor-Leste options
- [ ] Demo page displays all product information
- [ ] All pricing displays correctly in USD ($XX.XX)

**Responsiveness:**
- [ ] Pages work on mobile (375px width)
- [ ] Pages work on tablet (768px width)
- [ ] Pages work on desktop (1920px width)
- [ ] Touch targets are at least 44px for mobile

**Technical:**
- [ ] No TypeScript errors in console
- [ ] No ESLint errors
- [ ] Server runs on port 3000
- [ ] Hot reload works (changes appear on save)

**Content:**
- [ ] Brand JN is consistent across all pages
- [ ] English language throughout
- [ ] Timor-Leste localization correct
- [ ] All images load properly

---

## 🚀 Ready to Start?

Execute this command to begin development:

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Then open your browser to:
**http://localhost:3000**

**Expected outcome:**
- Server starts with message: `✓ Ready in XXXms - Local: http://localhost:3000`
- You see the JN landing page with animated product
- All pages are accessible and functional

**Happy coding with JN!** 🎨✨

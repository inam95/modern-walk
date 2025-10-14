# Modern Walk - E-commerce Fashion Store

A modern, responsive e-commerce application built for a Senior Frontend Developer assessment. Modern Walk is a fashion store that showcases timeless fashion with a modern edge, featuring products from various categories including men's and women's clothing, jewelry, and electronics.

## 🌐 Live Demo

**Live Application:** [https://modern-walk-opal.vercel.app/](https://modern-walk-opal.vercel.app/)

## 🚀 Features

### Core Functionality

- **Product Catalog**: Browse products across multiple categories
- **Shopping Cart**: Add, remove, and manage items with quantity selection
- **Product Details**: Detailed product pages with image galleries
- **Category Filtering**: Filter products by category (Men's, Women's, Jewelry, Electronics)
- **Responsive Design**: Mobile-first responsive design for all screen sizes

### Home Page Features

- **Hero Section**: Eye-catching landing section with call-to-action
- **Category Tiles**: Visual category navigation with hover effects
- **Flash Sale**: Alternating men's and women's products
- **Product Sections**: Most Popular, Latest Products, and Related Products
- **Newsletter Subscription**: Email subscription for updates
- **Autumn Sale Banner**: Promotional banner with discount information

### Shop Page Features

- **Sorting Options**:
  - Most Popular
  - Best Rating
  - Recent
  - Price: Low to High
  - Price: High to Low
- **Category Filters**: Sidebar filtering with checkboxes
- **Product Grid**: Responsive grid layout with product cards
- **Pagination**: Navigate through product pages
- **Breadcrumb Navigation**: Clear navigation hierarchy

### Product Detail Page

- **Image Gallery**: Multiple product images with thumbnails
- **Product Information**: Title, price, rating, and description
- **Size Selection**: Choose product size (S, M, L)
- **Quantity Selector**: Adjust item quantity
- **Add to Cart**: Add items with size and quantity
- **Related Products**: Suggested items based on current product

### Shopping Cart

- **Cart Management**: Add, remove, and update quantities
- **Order Summary**: Subtotal, shipping, tax, and grand total calculations
- **Empty State**: User-friendly empty cart experience
- **Persistent Storage**: Cart persists across browser sessions

## 🛠️ Technology Stack

### Frontend Framework

- **Next.js 15.5.4**: React framework with App Router
- **React 19.1.0**: Latest React with concurrent features
- **TypeScript 5**: Type-safe development

### Styling & UI

- **Tailwind CSS 4**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
  - Avatar, Checkbox, Dropdown Menu, Select, Separator, Slot
- **Lucide React**: Beautiful icon library
- **Class Variance Authority**: Component variant management

### State Management

- **Zustand 5.0.8**: Lightweight state management
- **Persistent Storage**: Cart data persists across sessions
- **DevTools Integration**: Redux DevTools support

### Data Fetching

- **FakeStore API**: Product data from fakestoreapi.com
- **Server Components**: Next.js App Router server-side rendering
- **Suspense**: Loading states and error boundaries

### URL State Management

- **nuqs 2.7.1**: URL state synchronization for filters and search

### Development Tools

- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting with Tailwind plugin
- **TypeScript**: Static type checking

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── cart/              # Shopping cart page
│   ├── shop/               # Shop pages
│   │   ├── [id]/          # Dynamic product detail pages
│   │   └── page.tsx       # Main shop page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── add-to-cart-button.tsx
│   ├── item-card.tsx
│   ├── navbar.tsx
│   ├── shopping-cart.tsx
│   ├── filters.tsx
│   ├── sort.tsx
│   └── ...               # Other components
└── lib/                  # Utilities and configurations
    ├── api/              # API types and interfaces
    ├── dal.ts            # Data access layer
    ├── store.ts          # Zustand store
    ├── constants.ts      # Application constants
    └── utils.ts          # Utility functions
```

## 🔧 Installation & Setup

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd modern-walk
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
pnpm build
pnpm start
```

## 🛒 Shopping Cart Features

### Cart Functionality

- **Add to Cart**: Products with size and quantity selection
- **Update Quantities**: Increment/decrement with visual feedback
- **Remove Items**: Easy removal with confirmation
- **Persistent Storage**: Cart survives browser refreshes
- **Order Calculations**: Automatic subtotal, shipping, and tax

### Cart State Management

- **Zustand Store**: Centralized cart state
- **Type Safety**: TypeScript interfaces for cart items
- **Computed Values**: Automatic total calculations
- **DevTools**: Redux DevTools integration for debugging

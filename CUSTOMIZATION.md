# Customization Guide

## 🎨 Changing Colors

### Primary Color (Red/Neon)

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#ff3838', // Change this to your preferred color
    600: '#ed1515',
    700: '#c80d0d',
  }
}
```

### Background Colors

In `tailwind.config.js`:

```javascript
dark: {
  900: '#0a0a0a', // Darkest background
  800: '#121212', // Secondary background
  700: '#1a1a1a', // Card backgrounds
}
```

## 📝 Updating Company Information

### Contact Details

Edit `src/components/Footer.js` and `src/components/Navbar.js`:

```javascript
// Phone
<a href="tel:+917840000893">+91 7840000893</a>

// Email
<a href="mailto:Degi20035@gmail.com">Degi20035@gmail.com</a>

// Address
3366-3700 1st Floor, Sita Ram Bazar, Delhi - 110006

// GST Number
070GVPS6503K1ZB
```

### WhatsApp Number

Update in multiple files:
- `src/components/WhatsAppButton.js`
- `src/components/Hero.js`
- `src/components/Products.js`
- `src/components/ProductDetail.js`

Replace: `https://wa.me/917840000893`

## 🛍️ Managing Products

### Adding New Products

Edit `src/data/products.js`:

```javascript
{
  id: 17, // Increment ID
  name: 'Your Product Name',
  category: 'Category Name',
  price: 299,
  originalPrice: 399,
  rating: 4.8,
  reviews: 100,
  image: '🧴', // Emoji or image URL
  description: 'Product description',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  sizes: ['500ml', '1L', '5L'],
}
```

### Adding New Categories

In `src/data/products.js`:

```javascript
export const categories = [
  'All Products',
  'Your New Category', // Add here
  'Floor Cleaners',
  // ... existing categories
];
```

### Changing Product Images

Replace emoji with actual images:

1. Add images to `public/images/products/`
2. Update product data:

```javascript
image: '/images/products/product-name.jpg'
```

3. Update `ProductCard` component to use `<img>` tag instead of emoji

## ✨ Customizing Animations

### Animation Speed

Edit `src/index.css`:

```css
/* Slower animations */
animation: float 10s ease-in-out infinite; /* Change from 6s to 10s */

/* Faster animations */
animation: float 3s ease-in-out infinite; /* Change from 6s to 3s */
```

### Disable Animations

To disable specific animations, comment out or remove:

```javascript
// In components, remove motion props:
<motion.div
  // animate={{ y: [0, -20, 0] }} // Comment this out
>
```

### Custom Cursor

To disable custom cursor, remove from `App.js`:

```javascript
// <CustomCursor /> // Comment this line
```

### Particles Background

To disable particles, remove from `App.js`:

```javascript
// <ParticlesBackground /> // Comment this line
```

## 🎭 Changing Fonts

### Google Fonts

Edit `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;700&display=swap');
```

Update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
  display: ['YourDisplayFont', 'sans-serif'],
}
```

## 📱 Customizing Mobile Experience

### Mobile Navigation

Edit `src/components/Navbar.js` to customize mobile menu

### Mobile Button Sizes

In `src/index.css`:

```css
@media (max-width: 768px) {
  .btn-primary {
    @apply px-6 py-3 text-sm; /* Adjust sizes */
  }
}
```

## 🎯 Adding New Sections

### Create New Component

1. Create file: `src/components/YourSection.js`

```javascript
import React from 'react';
import { motion } from 'framer-motion';

const YourSection = () => {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Your content */}
      </div>
    </section>
  );
};

export default YourSection;
```

2. Import in `App.js`:

```javascript
import YourSection from './components/YourSection';

// Add to HomePage component
<YourSection />
```

## 🔧 Advanced Customizations

### Adding Blog Section

1. Create `src/data/blogs.js`
2. Create `src/components/Blog.js`
3. Create `src/components/BlogDetail.js`
4. Add route in `App.js`

### Adding Shopping Cart

1. Install state management: `npm install zustand`
2. Create `src/store/cartStore.js`
3. Implement cart logic
4. Add cart icon to navbar

### Adding Payment Gateway

1. Choose provider (Razorpay, Stripe, PayPal)
2. Install SDK
3. Create checkout component
4. Implement payment flow

### Adding Admin Panel

1. Create admin routes
2. Add authentication
3. Create product management UI
4. Implement CRUD operations

## 🎨 Theme Customization

### Light Mode

Already implemented! Toggle with the sun/moon icon in navbar.

To customize light mode colors, edit `tailwind.config.js` and component styles.

### Custom Theme

Create theme file `src/theme.js`:

```javascript
export const themes = {
  dark: {
    background: '#0a0a0a',
    text: '#ffffff',
    primary: '#ff3838',
  },
  light: {
    background: '#ffffff',
    text: '#000000',
    primary: '#ff3838',
  },
  blue: {
    background: '#0a0a1a',
    text: '#ffffff',
    primary: '#3838ff',
  }
};
```

## 📊 Analytics Integration

### Google Analytics

1. Install: `npm install react-ga4`

2. Initialize in `src/index.js`:

```javascript
import ReactGA from 'react-ga4';

ReactGA.initialize('YOUR-GA-MEASUREMENT-ID');
```

3. Track page views in `App.js`

## 🔍 SEO Optimization

### Dynamic Meta Tags

Install: `npm install react-helmet-async`

Use in components:

```javascript
import { Helmet } from 'react-helmet-async';

<Helmet>
  <title>Your Page Title</title>
  <meta name="description" content="Your description" />
</Helmet>
```

## 💡 Tips

1. **Test on Multiple Devices**: Always test changes on mobile, tablet, and desktop
2. **Performance**: Use Chrome DevTools Lighthouse to check performance
3. **Accessibility**: Ensure proper contrast ratios and keyboard navigation
4. **Browser Compatibility**: Test on Chrome, Firefox, Safari, and Edge
5. **Backup**: Always backup before making major changes

## 📞 Need Help?

Contact for customization support:
- Email: Degi20035@gmail.com
- Phone: +91 7840000893

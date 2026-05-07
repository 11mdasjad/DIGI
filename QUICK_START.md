# 🚀 Quick Start Guide

Get your DIGI Chemicals & Electronics website running in 3 simple steps!

## Step 1: Navigate to Project

```bash
cd digi-chemicals
```

## Step 2: Install Dependencies (if not already done)

```bash
npm install
```

This will install all required packages. It may take 2-3 minutes.

## Step 3: Start Development Server

```bash
npm start
```

The website will automatically open in your browser at **http://localhost:3000**

---

## ✅ What You Should See

1. **Loading Screen** - Premium animated loading screen with DIGI logo
2. **Hero Section** - Animated hero with 3D floating products
3. **Products Grid** - 16 products with filters and search
4. **Features** - 6 key features with icons
5. **Testimonials** - Auto-sliding customer reviews
6. **FAQ** - Accordion-style frequently asked questions
7. **Footer** - Complete contact information

---

## 🎨 First Customizations

### 1. Update Company Phone Number

Find and replace `+917840000893` with your number in:
- `src/components/Navbar.js`
- `src/components/Hero.js`
- `src/components/Footer.js`
- `src/components/WhatsAppButton.js`
- `src/components/Products.js`
- `src/components/ProductDetail.js`

### 2. Update Email Address

Find and replace `Degi20035@gmail.com` with your email in:
- `src/components/Navbar.js`
- `src/components/Footer.js`

### 3. Update Company Address

Edit `src/components/Footer.js` and change the address

### 4. Update GST Number

Edit `src/components/Footer.js` and change the GST number

---

## 📦 Building for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

---

## 🆘 Troubleshooting

### Port Already in Use?

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm start
```

### Dependencies Not Installing?

```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Tailwind CSS Not Working?

```bash
# Restart the server
# Press Ctrl+C to stop
npm start
```

---

## 📚 Next Steps

1. ✅ **Read README.md** - Complete project documentation
2. ✅ **Read CUSTOMIZATION.md** - Learn how to customize everything
3. ✅ **Read DEPLOYMENT.md** - Deploy to production
4. ✅ **Test on Mobile** - Check responsive design
5. ✅ **Add Real Images** - Replace emoji with product photos

---

## 🎯 Key Features to Test

- [ ] Navigation menu (desktop & mobile)
- [ ] Hero section animations
- [ ] Product filtering by category
- [ ] Product search
- [ ] Product detail pages
- [ ] WhatsApp button (floating)
- [ ] Dark/Light mode toggle
- [ ] Testimonials auto-slider
- [ ] FAQ accordion
- [ ] All links and buttons
- [ ] Responsive design on mobile

---

## 📞 Need Help?

- 📧 Email: Degi20035@gmail.com
- 📱 Phone: +91 7840000893
- 💬 WhatsApp: [Chat Now](https://wa.me/917840000893)

---

## 🎉 You're All Set!

Your premium website is ready to customize and deploy!

**Happy Building! 🚀**

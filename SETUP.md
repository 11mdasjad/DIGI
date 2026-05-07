# Setup Instructions

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for version control)
- A code editor (VS Code recommended)

## 🚀 Quick Start

### Step 1: Navigate to Project Directory

```bash
cd digi-chemicals
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages:
- React
- Tailwind CSS
- Framer Motion
- Three.js
- React Router DOM
- React Icons

### Step 3: Start Development Server

```bash
npm start
```

The application will open automatically at [http://localhost:3000](http://localhost:3000)

## 🔧 Troubleshooting

### Issue: Port 3000 is already in use

**Solution:**
```bash
# Kill the process using port 3000
# On Mac/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port:
PORT=3001 npm start
```

### Issue: npm install fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Tailwind CSS not working

**Solution:**
```bash
# Ensure Tailwind is properly configured
# Check if tailwind.config.js and postcss.config.js exist
# Restart the development server
npm start
```

### Issue: Module not found errors

**Solution:**
```bash
# Install missing dependencies
npm install

# If specific package is missing:
npm install <package-name>
```

## 📁 Project Structure Explained

```
digi-chemicals/
├── public/                 # Static files
│   ├── index.html         # HTML template
│   ├── favicon.ico        # Website icon
│   └── manifest.json      # PWA manifest
│
├── src/                   # Source files
│   ├── components/        # React components
│   │   ├── Navbar.js     # Navigation bar
│   │   ├── Hero.js       # Hero section
│   │   ├── Products.js   # Products grid
│   │   ├── Features.js   # Features section
│   │   ├── Testimonials.js # Customer reviews
│   │   ├── FAQ.js        # FAQ accordion
│   │   ├── Footer.js     # Footer section
│   │   ├── ProductDetail.js # Product page
│   │   ├── LoadingScreen.js # Loading animation
│   │   ├── CustomCursor.js # Custom cursor
│   │   ├── ParticlesBackground.js # Particle effects
│   │   └── WhatsAppButton.js # Floating WhatsApp button
│   │
│   ├── data/             # Data files
│   │   └── products.js   # Product data
│   │
│   ├── App.js            # Main app component
│   ├── index.js          # Entry point
│   └── index.css         # Global styles
│
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── package.json          # Dependencies and scripts
├── README.md             # Project documentation
├── DEPLOYMENT.md         # Deployment guide
├── CUSTOMIZATION.md      # Customization guide
└── SETUP.md             # This file
```

## 🎨 Development Workflow

### 1. Making Changes

Edit files in the `src` directory. The development server will automatically reload.

### 2. Adding New Components

```bash
# Create new component file
touch src/components/NewComponent.js

# Import in App.js or other components
import NewComponent from './components/NewComponent';
```

### 3. Adding New Products

Edit `src/data/products.js` and add your product data.

### 4. Styling

- Use Tailwind CSS classes for styling
- Custom styles go in `src/index.css`
- Component-specific styles can be inline or in CSS modules

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

## 🏗️ Building for Production

```bash
# Create optimized production build
npm run build

# The build folder will contain optimized files
# Ready to deploy to any static hosting service
```

## 📦 Available Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from Create React App (irreversible!)
```

## 🔐 Environment Setup

### Development Environment

Create `.env.development`:
```
REACT_APP_API_URL=http://localhost:3000
REACT_APP_ENV=development
```

### Production Environment

Create `.env.production`:
```
REACT_APP_API_URL=https://yourdomain.com
REACT_APP_ENV=production
```

## 🌐 Browser Support

The website supports:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Development

To test on mobile devices:

1. **Using Local Network:**
```bash
# Find your local IP
# Mac/Linux: ifconfig
# Windows: ipconfig

# Access from mobile: http://YOUR_IP:3000
```

2. **Using ngrok:**
```bash
# Install ngrok
npm install -g ngrok

# Start tunnel
ngrok http 3000
```

## 🔄 Version Control (Git)

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add remote repository
git remote add origin YOUR_REPO_URL

# Push to GitHub
git push -u origin main
```

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Router Docs](https://reactrouter.com/)

## 🆘 Getting Help

### Common Commands

```bash
# Check Node version
node --version

# Check npm version
npm --version

# Update npm
npm install -g npm@latest

# Clear cache
npm cache clean --force

# Audit dependencies
npm audit

# Fix vulnerabilities
npm audit fix
```

### Support Channels

1. **Documentation**: Check README.md, CUSTOMIZATION.md, DEPLOYMENT.md
2. **GitHub Issues**: Report bugs or request features
3. **Email**: Degi20035@gmail.com
4. **Phone**: +91 7840000893

## ✅ Checklist

Before starting development:

- [ ] Node.js installed
- [ ] npm/yarn installed
- [ ] Code editor installed
- [ ] Dependencies installed (`npm install`)
- [ ] Development server running (`npm start`)
- [ ] Website opens in browser
- [ ] No console errors
- [ ] All animations working
- [ ] Responsive on mobile

## 🎯 Next Steps

1. **Customize Content**: Update company info, products, and images
2. **Test Thoroughly**: Check all features and pages
3. **Optimize**: Run Lighthouse audit
4. **Deploy**: Follow DEPLOYMENT.md guide
5. **Monitor**: Set up analytics and monitoring

## 💡 Pro Tips

1. **Hot Reload**: Changes auto-reload in development
2. **Console**: Check browser console for errors
3. **DevTools**: Use React DevTools extension
4. **Performance**: Use Chrome Lighthouse for audits
5. **Mobile First**: Always test on mobile devices
6. **Git Commits**: Commit frequently with clear messages
7. **Backup**: Keep backups before major changes

## 📞 Contact

For setup assistance:
- Email: Degi20035@gmail.com
- Phone: +91 7840000893
- WhatsApp: [Click here](https://wa.me/917840000893)

---

**Happy Coding! 🚀**

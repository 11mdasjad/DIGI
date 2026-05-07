# Deployment Guide

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd digi-chemicals
vercel
```

3. Follow the prompts and your site will be live!

**Advantages:**
- Free hosting
- Automatic HTTPS
- Global CDN
- Automatic deployments from Git

### Option 2: Netlify

1. Build the project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod --dir=build
```

**Advantages:**
- Free hosting
- Continuous deployment
- Form handling
- Serverless functions

### Option 3: GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/digi-chemicals",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

### Option 4: Traditional Hosting (cPanel, etc.)

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `build` folder to your web server's public directory (usually `public_html` or `www`)

3. Configure your server to serve `index.html` for all routes (for React Router)

## 🔧 Environment Variables

If you need to add environment variables:

1. Create a `.env` file in the root directory:
```
REACT_APP_WHATSAPP_NUMBER=917840000893
REACT_APP_EMAIL=Degi20035@gmail.com
REACT_APP_PHONE=+917840000893
```

2. Use in your code:
```javascript
const whatsappNumber = process.env.REACT_APP_WHATSAPP_NUMBER;
```

## 📊 Performance Optimization

### Before Deployment:

1. **Optimize Images**: Use WebP format and compress images
2. **Code Splitting**: Already implemented with React.lazy
3. **Minification**: Automatic with `npm run build`
4. **Gzip Compression**: Enable on your server

### After Deployment:

1. **Enable Caching**: Configure browser caching headers
2. **Use CDN**: For static assets
3. **Monitor Performance**: Use Google Lighthouse
4. **Analytics**: Add Google Analytics or similar

## 🔒 Security Checklist

- [ ] Remove console.logs from production
- [ ] Enable HTTPS
- [ ] Add security headers
- [ ] Implement rate limiting for contact forms
- [ ] Regular dependency updates
- [ ] Environment variables for sensitive data

## 📱 Mobile Optimization

The site is already mobile-optimized with:
- Responsive design
- Touch-friendly buttons
- Mobile navigation
- Optimized animations for mobile

## 🧪 Testing Before Deployment

```bash
# Run tests
npm test

# Build and test locally
npm run build
npx serve -s build
```

## 📈 SEO Checklist

- [x] Meta tags configured
- [x] Open Graph tags
- [x] Semantic HTML
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Submit to Google Search Console
- [ ] Add structured data (JSON-LD)

## 🔄 Continuous Deployment

### With GitHub Actions:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install and Build
        run: |
          npm install
          npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

## 📞 Support

For deployment issues, contact:
- Email: Degi20035@gmail.com
- Phone: +91 7840000893

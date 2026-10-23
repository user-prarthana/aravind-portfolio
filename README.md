# Aravind V — Creative Marketing Portfolio

Official, responsive, editorial personal portfolio website for **Aravind V**, Creative Head & Social Media Marketing Head at Lead College Autonomous. Built with React, Vite, modern CSS design tokens, and Lucide React icons.

---

## 📌 Project Overview

- **Name:** Aravind V
- **Positioning:** Marketing × Creative × Content
- **Location:** Palakkad, Kerala, India
- **Email:** [av972491@gmail.com](mailto:av972491@gmail.com)
- **Phone:** +91 70348 58639
- **LinkedIn:** [https://linkedin.com/in/aravind-vamadevan](https://linkedin.com/in/aravind-vamadevan)
- **Current Role:** Creative Head | Social Media Marketing Head at Lead College Autonomous (2025–Present)

---

## 🛠️ Technology Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Icons:** Lucide React
- **Styling:** Vanilla CSS design tokens & modular classes (`src/styles/global.css`)
- **Typography:** Manrope (Headings), Inter (Body & UI), and Playfair Display Italic (Subtle editorial accent) via Google Fonts
- **Responsive Design:** Mobile-first, tablet, desktop, ultra-wide layouts with accessible contrast and reduced-motion support

---

## 📂 Project Structure

```
aravind-portfolio/
├── public/
│   └── favicon.svg               # Custom AV Monogram SVG Favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Responsive navigation with mobile drawer
│   │   ├── Hero.jsx               # Opening editorial section with CTAs
│   │   ├── About.jsx              # Verified bio, competencies, and mindset
│   │   ├── Experience.jsx         # Lead College Autonomous timeline & pillars
│   │   ├── PortfolioGallery.jsx   # Responsive grid of 10 Instagram Reels
│   │   ├── PortfolioCard.jsx      # 9:16 vertical video card with external link
│   │   ├── Expertise.jsx          # 8 Core competencies from resume
│   │   ├── Platforms.jsx          # Instagram, LinkedIn, and YouTube ecosystem
│   │   ├── Education.jsx          # Calicut MBA & Kerala Univ B.Com cards
│   │   ├── Contact.jsx            # Direct email, phone, and inquiry mailto form
│   │   └── Footer.jsx             # Dynamic copyright, navigation, back-to-top
│   ├── data/
│   │   └── portfolio.js           # Single source of truth for resume & 10 Reels
│   ├── styles/
│   │   └── global.css             # Editorial design tokens and responsive CSS
│   ├── App.jsx                    # Root component layout
│   └── main.jsx                   # React entry point
├── index.html                     # SEO meta tags, title, and font imports
├── vite.config.js                 # Vite configuration with relative base './'
├── package.json                   # Project scripts and dependencies
└── README.md                      # Documentation & deployment guide
```

---

## 🚀 Local Development

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

---

## 📦 Production Build

To compile and optimize the production bundle:
```bash
npm run build
```
The output files will be created in the `dist/` directory.

To test the production build locally:
```bash
npm run preview
```

---

## 🌐 GitHub Pages Deployment Instructions

### Option A: Automated GitHub Actions Workflow (Recommended)

1. Create `.github/workflows/deploy.yml` with the following content:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. In your GitHub repository:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.
   - Push your code to the `main` branch. GitHub Actions will build and deploy automatically.

### Option B: Manual Deployment via `gh-pages` Branch
1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add deploy script to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run:
   ```bash
   npm run deploy
   ```

> **Base Path Note:** In `vite.config.js`, `base: './'` is already configured to support root domains, custom domains, or repository subpaths (e.g. `https://<username>.github.io/<repo-name>/`).

---

## 🎬 How to Manage, Reorder, or Add Instagram Reels

All 10 Instagram Reel links are centralized in [`src/data/portfolio.js`](file:///d:/Aravind%20portfolio/src/data/portfolio.js).

To reorder or add a reel:
```javascript
export const portfolioReels = [
  {
    id: 'reel-01',
    reelCode: 'DVlUeCwk4xA', // Instagram Reel Shortcode
    number: '01',
    title: 'Instagram Reel 01',
    category: 'Vertical Content',
    format: '9:16 Reel',
    url: 'https://www.instagram.com/reel/DVlUeCwk4xA/?obrf=MWx1d3IzeHVxcG9pMw==',
    thumbnail: null, // Set to an image URL if an approved thumbnail is supplied
    aspectRatio: '9:16',
  },
  // ...
];
```

---

## 📋 Status of Assets & Profile Links

| Asset / Link | Status | Notes |
|---|---|---|
| **Resume Data** | ✅ Complete | Verified against official resume |
| **10 Instagram Reels** | ✅ Complete | Authoritative URLs wired to clickable cards |
| **LinkedIn URL** | ✅ Complete | `https://linkedin.com/in/aravind-vamadevan` |
| **Email & Phone** | ✅ Complete | `av972491@gmail.com` / `+91 70348 58639` |
| **Instagram Profile Handle** | ⏳ Pending | Placeholder label active until exact profile link is provided |
| **YouTube Channel Link** | ⏳ Pending | Placeholder label active until exact channel link is provided |
| **Profile Photograph** | 🎨 Editorial Composition | Typographic editorial graphic used to preserve authenticity |

# Stravon Media — Agency Website

> **Build Authority. Drive Growth. Own Your Market.**

A premium, high-converting digital agency website built with **React + Vite**. Designed for performance, SEO, and seamless deployment on Vercel.

---

## 🚀 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool & dev server |
| CSS Variables | Theming & design tokens |
| IntersectionObserver | Scroll animations |
| Google Fonts | Syne + DM Sans typography |

---

## 📁 Project Structure

```
stravon-media/
├── public/
│   └── logo.jpeg              # Favicon & OG image
├── src/
│   ├── assets/                # Static assets imported in JS
│   ├── components/
│   │   ├── layout/            # Structural components (Navbar, Footer)
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/          # Page sections
│   │   │   ├── Hero.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── PersonalBranding.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/                # Reusable UI primitives
│   │       ├── Button.jsx
│   │       ├── GlassCard.jsx
│   │       ├── SectionLabel.jsx
│   │       └── WhatsAppButton.jsx
│   ├── constants/
│   │   └── navigation.js      # Nav links config
│   ├── data/
│   │   └── agencyData.js      # All website content (single source of truth)
│   ├── hooks/
│   │   └── useReveal.js       # Scroll-triggered animation hook
│   ├── styles/
│   │   ├── global.css         # CSS reset + variables + base styles
│   │   ├── animations.css     # Keyframe animations
│   │   └── utilities.css      # Utility classes
│   ├── utils/
│   │   └── scroll.js          # Smooth scroll helpers
│   ├── App.jsx
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vercel.json
└── vite.config.js
```

---

## ⚡ Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/stravon-media.git
cd stravon-media

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run preview   # Preview the production build locally
```

---

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 2: GitHub Integration (Easiest)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Vercel auto-detects Vite — click **Deploy**
5. Done! 🎉

> The `vercel.json` is already configured for SPA routing and asset caching.

---

## ✏️ Customisation

All website content lives in **one file**: `src/data/agencyData.js`

- Update services, contact info, taglines — no need to touch component files.
- To add/remove services, edit the `services` array.
- WhatsApp number is in `contact.whatsapp`.

---

## 📄 License

MIT © Stravon Media

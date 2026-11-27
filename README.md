# Adya Pustaka Bhandara (ಆದ್ಯ ಪುಸ್ತಕ ಭಂಡಾರ)
### Adya Jyothirvijnana Samshodhana Kendra (ಆದ್ಯ ಜ್ಯೋತಿರ್ವಿಜ್ಞಾನ ಸಂಶೋಧನಾ ಕೇಂದ್ರ)

> High-performance, serverless React application with Tailwind CSS and Vite, dedicated to authentic Vedic literature, astrology, Vastu Shastra, rituals, and classical Sanskrit texts. Features complete bilingual support (Kannada & English) and direct WhatsApp ordering.

---

## Architecture Overview

```text
Adya Pustaka Bhandara/
├── client/                               # Frontend application
│   ├── public/
│   │   └── images/                       # 12 organized category image directories
│   │       ├── astrology/
│   │       ├── dharmashastra/
│   │       ├── numerology/
│   │       ├── pooja-homa/
│   │       ├── prashna/
│   │       ├── puranas-upanishads/
│   │       ├── remedies-shanti/
│   │       ├── sacred-articles/
│   │       ├── tantra-mantra/
│   │       ├── vastu/
│   │       ├── vedas-agamas/
│   │       └── yoga-ayurveda/
│   └── src/
│       ├── categories/                   # 12 modular book category data files + index.js
│       ├── components/                   # Reusable UI, Layout, Header, Footer, CartDrawer
│       ├── locales/                      # Kannada (kn.js) and English (en.js) dictionaries
│       ├── pages/                        # Home, Catalogue, BookDetails, Cart, Checkout, etc.
│       ├── App.jsx                       # Application routing
│       ├── config.js                     # Business contacts, WhatsApp desk, social links
│       ├── hooks.js                      # Custom hooks (useCart, useLanguage)
│       ├── index.css                     # Global styles and Tailwind typography
│       └── main.jsx                      # Client application entry point
├── package.json                          # Project scripts
└── vercel.json                           # SPA routing configuration for Vercel
```

---

## Getting Started

### 1. Installation
```bash
npm run install:client
```

### 2. Development
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

### 4. Code Quality
```bash
npm run lint
```

---

## Features
- **Curated Catalogue**: 226 authentic editions categorized across 12 classical disciplines.
- **WhatsApp Integration**: Instant checkout generating order references (`APB-XXXX-XXXX`) and direct WhatsApp messaging to the order desk.
- **Bilingual Interface**: Seamless switching between Kannada (ಕನ್ನಡ) and English.
- **Serverless & Fast**: 100% static client-side application deployable on Vercel, Netlify, or Cloudflare Pages with zero server maintenance.

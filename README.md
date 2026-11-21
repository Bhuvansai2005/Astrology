# Adya Pustaka Bhandara (ಆದ್ಯ ಪುಸ್ತಕ ಭಂಡಾರ) & Adya Jyothirvijnana Samshodhana Kendra

> Full-stack MERN (MongoDB, Express.js, React, Node.js) multi-page web application with Tailwind CSS, preserving the traditional Indian aesthetic, visual identity, and bilingual Kannada / English support.

---

## Architecture Overview

```text
Adya Pustaka Bhandara/
├── client/                      # React + Vite + Tailwind CSS v4 (Multi-page application with React Router)
│   ├── src/
│   │   ├── components/          # Shared layout, UI, cart, and provider components
│   │   ├── config.js            # Business constants, catalogue, and API client
│   │   ├── hooks.js             # Shared React hooks
│   │   ├── locales/             # English and Kannada translations
│   │   └── pages/               # Public application pages
│   └── package.json
│
├── server/                      # Node.js + Express + MongoDB Orders API
│   ├── src/
│   │   ├── config/              # Server-owned catalogue and configuration
│   │   ├── controllers/         # HTTP request/response orchestration
│   │   ├── middleware/          # Error and not-found handling
│   │   ├── models/              # Mongoose persistence models
│   │   ├── routes/              # HTTP route definitions
│   │   ├── services/             # Business rules and persistence workflows
│   │   ├── app.js               # Middleware and route composition
│   │   ├── db.js                # MongoDB connection
│   │   └── server.js            # Process startup
│   └── test/                    # Node test-runner tests
│   └── package.json
│
└── package.json                 # Monorepo root scripts
```

---

## Pages Implemented

1. **Home** (`/`) — Hero, intro, book categories showcase, video library, about overview, catalogue CTA, community links, contact, location, social bar.
2. **About Us** (`/about`) — Institution overview (Adya Pustaka Bhandara & Adya Jyothirvijnana Samshodhana Kendra) and scholar profile for Sri Chandrashekar Adya.
3. **Book Catalogue** (`/books`) — Complete catalogue with live search and category filters.
4. **Book Details** (`/books/:slug`) — Detailed book information, pricing, add to cart, and WhatsApp direct enquiry.
5. **Shopping Cart** (`/cart`) — Dedicated cart review with quantity controls and live subtotal.
6. **Checkout** (`/checkout`) — Customer name, phone, optional email, delivery address, server-side order storage in MongoDB, and WhatsApp handoff.
7. **Order Confirmation** (`/order/:orderRef`) — Saved order details, itemized breakdown, reference number, and WhatsApp follow-up.
8. **Astrology Services** (`/services/astrology`) — Janma Kundali, Prashna Shastra, Vivaha Melapaka, Numerology, and Parihara.
9. **Vastu Services** (`/services/vastu`) — Residential, commercial, plot analysis, and non-demolition remedies.
10. **Other Religious Services** (`/services/other`) — Griha Pravesha, Sudarshana & Chandi Homas, Shanti Poojas, Yantra consecration.
11. **Classes and Educational Programs** (`/classes`) — Astrology, Vastu, Prashna, and Mantra/Yantra courses.
12. **Announcements** (`/announcements`) — New editions, upcoming batches, and religious ceremonies.
13. **Contact Us** (`/contact`) — Phone numbers, WhatsApp, consultation hours, and location map link.

---

## Quick Start Instructions

### 1. Prerequisites
- Node.js (v18 or higher)
- MongoDB (local instance or MongoDB Atlas connection string)

### 2. Configure Environment
In `server/.env`:
```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
MONGODB_URI=mongodb://localhost:27017/adya_pustaka_bhandara
```

### 3. Run Development Servers
In terminal 1 (Backend Orders API on port 5000):
```bash
npm run server
```
In terminal 2 (Frontend Vite app on port 5173):
```bash
npm run client
```

### Security notes

- Order confirmation lookup requires a cryptographically random access token in addition to the order reference.
- The API uses Helmet, strict CORS allow-listing, request-size limits, rate limiting, and server-side catalogue pricing.
- Keep `server/.env` local and never commit it. The local JSON fallback under `server/data/` is also ignored by Git.

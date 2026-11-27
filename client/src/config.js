import {
  CATALOG_ITEMS,
  BOOKS_BY_CATEGORY,
  astrologyBooks,
  vastuBooks,
  prashnaBooks,
  numerologyBooks,
  tantraMantraBooks,
  remediesShantiBooks,
  vedasAgamasBooks,
  poojaHomaBooks,
  puranasUpanishadsBooks,
  yogaAyurvedaBooks,
  dharmashastraBooks,
  sacredArticlesBooks,
} from './categories/index.js';

export const BUSINESS = {
  centre: {
    kn: 'ಆದ್ಯ ಜ್ಯೋತಿರ್ವಿಜ್ಞಾನ ಸಂಶೋಧನಾ ಕೇಂದ್ರ',
    en: 'Adya Jyothirvijnana Samshodhana Kendra',
  },
  name: { kn: 'ಆದ್ಯ ಪುಸ್ತಕ ಭಂಡಾರ', en: 'Adya Pustaka Bhandara' },
  phone: ['91642 42099'],
  phoneLinks: ['tel:+919164242099'],
  whatsapp: 'https://wa.me/919164242099',
  orderWhatsapp: 'https://wa.me/919164242099',
  whatsappCatalogue: 'https://wa.me/c/919164242099',
  whatsappGroup: 'https://chat.whatsapp.com/GfZFYQ2ngH5C454ItJoQlv?s=cl&p=a&ilr=4',
  telegram: 'https://t.me/Adyapustakabhandara',
  facebook: 'https://www.facebook.com/share/1Fz3ZG4Tus/',
  instagram: 'https://www.instagram.com/adyapustakabhandara02/',
  instagramHandle: '@adyapustakabhandara02',
  googleMaps: 'https://www.google.com/maps/place/%E0%B2%86%E0%B2%A6%E0%B3%8D%E0%B2%AF+%E0%B2%AA%E0%B3%81%E0%B2%B8%E0%B3%8D%E0%B2%A4%E0%B2%95+%E0%B2%AD%E0%B2%82%E0%B2%A1%E0%B2%BE%E0%B2%B0/@12.4236,77.2237,17z/data=!4m6!3m5!1s0x3baeff00399a0f2b:0x94bfa22e6fdd4bf3!8m2!3d12.4236252!4d77.223731!16s%2Fg%2F11zcvfp259?hl=en&entry=ttu',
};

export const HERO_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?auto=format&fit=crop&w=2000&q=85',
  about: '/images/yoga-ayurveda/charaka-samhite.webp',
  location: '/images/dharmashastra/dharmasindhu.webp',
};

export const CATEGORY_IMAGES = {
  "astrology": "/images/astrology/30-dinadalli-jyotishya-kaliyiri.webp",
  "vastu": "/images/vastu/vastu-shastra-ritya-ayadi-vargaganita.webp",
  "prashna": "/images/prashna/ashtamangala-prashna-deepika.webp",
  "numerology": "/images/numerology/bhavishya-nudiyuva-sankhyegalu.webp",
  "tantra-mantra": "/images/tantra-mantra/shree-vidya-mantra-yantra-tantra-rahasyagalu.webp",
  "remedies-shanti": "/images/remedies-shanti/ashlesha-bali-sarpa-bali-kala-sarpayoga-shanti.webp",
  "vedas-agamas": "/images/vedas-agamas/rigveda-samhita-14-pustakagalu.webp",
  "pooja-homa": "/images/pooja-homa/satyanarayana-pooja-vidhi-bhaga-1-mattu-2.webp",
  "puranas-upanishads": "/images/puranas-upanishads/shree-vishnu-puranam.webp",
  "yoga-ayurveda": "/images/yoga-ayurveda/charaka-samhite.webp",
  "dharmashastra": "/images/dharmashastra/dharmashastra.webp",
  "sacred-articles": "/images/sacred-articles/arishina-male.webp",
};

// Populate per-book images dynamically for any legacy lookups
for (const item of CATALOG_ITEMS) {
  if (item.id && item.imageUrl) {
    CATEGORY_IMAGES[item.id] = item.imageUrl;
  }
}

export {
  CATALOG_ITEMS,
  BOOKS_BY_CATEGORY,
  astrologyBooks,
  vastuBooks,
  prashnaBooks,
  numerologyBooks,
  tantraMantraBooks,
  remediesShantiBooks,
  vedasAgamasBooks,
  poojaHomaBooks,
  puranasUpanishadsBooks,
  yogaAyurvedaBooks,
  dharmashastraBooks,
  sacredArticlesBooks,
};

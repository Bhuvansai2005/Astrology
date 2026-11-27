// Combined Books Catalogue by Category
import { astrologyBooks } from './astrology.js';
import { vastuBooks } from './vastu.js';
import { prashnaBooks } from './prashna.js';
import { numerologyBooks } from './numerology.js';
import { tantraMantraBooks } from './tantra-mantra.js';
import { remediesShantiBooks } from './remedies-shanti.js';
import { vedasAgamasBooks } from './vedas-agamas.js';
import { poojaHomaBooks } from './pooja-homa.js';
import { puranasUpanishadsBooks } from './puranas-upanishads.js';
import { yogaAyurvedaBooks } from './yoga-ayurveda.js';
import { dharmashastraBooks } from './dharmashastra.js';
import { sacredArticlesBooks } from './sacred-articles.js';

export {
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

export const BOOKS_BY_CATEGORY = {
  'astrology': astrologyBooks,
  'vastu': vastuBooks,
  'prashna': prashnaBooks,
  'numerology': numerologyBooks,
  'tantra-mantra': tantraMantraBooks,
  'remedies-shanti': remediesShantiBooks,
  'vedas-agamas': vedasAgamasBooks,
  'pooja-homa': poojaHomaBooks,
  'puranas-upanishads': puranasUpanishadsBooks,
  'yoga-ayurveda': yogaAyurvedaBooks,
  'dharmashastra': dharmashastraBooks,
  'sacred-articles': sacredArticlesBooks,
};

export const CATALOG_ITEMS = [
  ...astrologyBooks,
  ...vastuBooks,
  ...prashnaBooks,
  ...numerologyBooks,
  ...tantraMantraBooks,
  ...remediesShantiBooks,
  ...vedasAgamasBooks,
  ...poojaHomaBooks,
  ...puranasUpanishadsBooks,
  ...yogaAyurvedaBooks,
  ...dharmashastraBooks,
  ...sacredArticlesBooks,
];

export default CATALOG_ITEMS;

import { useState } from 'react';
import {
  Button,
  CategoryCard,
  Container,
  SectionHeading,
} from '../components/UI';
import { WhatsAppIcon } from '../components/SocialIcons';
import { useCart, useLanguage, useRevealOnScroll } from '../hooks';
import { BUSINESS, CATALOG_ITEMS, HERO_IMAGES } from '../config';

// 1. Yantras data
const YANTRAS_LIST = [
  { id: 'yantra-1', name: 'ವಾಸ್ತು ಯಂತ್ರ', enName: 'Vastu Yantra', desc: 'ಗೃಹ ಮತ್ತು ಕಚೇರಿಯ ವಾಸ್ತು ದೋಷ ನಿವಾರಣೆ ಹಾಗೂ ಸಕಾರಾತ್ಮಕ ಶಕ್ತಿಯ ಸಂಚಾರಕ್ಕಾಗಿ.' },
  { id: 'yantra-2', name: 'ಮತ್ಸ್ಯ ಯಂತ್ರ', enName: 'Matsya Yantra', desc: 'ವಾಸ್ತು ದೋಷ ನಿವಾರಣೆ, ಸಂಪತ್ತು, ಶಾಂತಿ ಹಾಗೂ ಸಮೃದ್ಧಿಯ ಆಗಮನಕ್ಕೆ.' },
  { id: 'yantra-3', name: 'ಗೃಹ ದಿಗ್ಬಂಧನ ಯಂತ್ರ', enName: 'Griha Digbandhana Yantra', desc: 'ಮನೆಗೆ ಕೆಟ್ಟ ದೃಷ್ಟಿ ಹಾಗೂ ನಕಾರಾತ್ಮಕ ಶಕ್ತಿಗಳು ಬರದಂತೆ ರಕ್ಷಣೆ ನೀಡಲು.' },
  { id: 'yantra-4', name: 'ವ್ಯಾಪಾರ ಅಭಿವೃದ್ಧಿ ಯಂತ್ರ', enName: 'Vyapara Abhivrudhi Yantra', desc: 'ವ್ಯಾಪಾರ-ವ್ಯವಹಾರಗಳಲ್ಲಿ ಲಾಭ, ಆಕರ್ಷಣೆ ಹಾಗೂ ಪ್ರಗತಿಗಾಗಿ.' },
  { id: 'yantra-5', name: 'ಪ್ರತ್ಯಂಗಿರಾ ಯಂತ್ರ', enName: 'Pratyangira Yantra', desc: 'ಶತ್ರು ಬಾಧೆ, ತಂತ್ರ ಬಾಧೆ ಹಾಗೂ ತೀವ್ರ ದೋಷಗಳ ನಿವಾರಣೆಗೆ ರಕ್ಷಣಾ ಕವಚ.' },
  { id: 'yantra-6', name: 'ಸರ್ವ ರಕ್ಷಾ ಯಂತ್ರ', enName: 'Sarva Raksha Yantra', desc: 'ಸಮಸ್ತ ಆಪತ್ತು ಹಾಗೂ ನಕಾರಾತ್ಮಕ ಪ್ರಭಾವಗಳಿಂದ ರಕ್ಷಣೆ ನೀಡುವ ಸಿದ್ಧ ಯಂತ್ರ.' },
  { id: 'yantra-7', name: 'ದುರ್ಗಾ ಯಂತ್ರ', enName: 'Durga Yantra', desc: 'ಆತ್ಮವಿಶ್ವಾಸ ವೃದ್ಧಿ, ಭಕ್ತಿ ಹಾಗೂ ದುರ್ಗಾ ದೇವಿಯ ದಿವ್ಯ ಅನುಗ್ರಹಕ್ಕಾಗಿ.' },
  { id: 'yantra-8', name: 'ಗಣಪತಿ ಯಂತ್ರ', enName: 'Ganapati Yantra', desc: 'ಕಾರ್ಯ ವಿಘ್ನ ನಿವಾರಣೆ, ವಿದ್ಯೆ, ಬುದ್ಧಿ ಹಾಗೂ ಸಕಲ ಸಿದ್ಧಿಗಾಗಿ.' },
  { id: 'yantra-9', name: 'ಸರ್ವ ಆಕರ್ಷಣ ಯಂತ್ರ', enName: 'Sarva Aakarshana Yantra', desc: 'ಜನ ಪ್ರಿಯತೆ, ಕಾರ್ಯ ಸಫಲತೆ ಹಾಗೂ ಸೌಹಾರ್ದಯುತ ವಾತಾವರಣಕ್ಕೆ.' },
  { id: 'yantra-10', name: 'ದೃಷ್ಟಿ ದೋಷ ನಿವಾರಣ ಯಂತ್ರ', enName: 'Drishti Dosha Nivarana Yantra', desc: 'ಕೆಟ್ಟ ಕಣ್ಣು ದೃಷ್ಟಿ, ನರದೃಷ್ಟಿ ಹಾಗೂ ಅನಿಷ್ಟಗಳ ಪರಿಹಾರಕ್ಕಾಗಿ.' },
];

// 2. Poojas, Homas, Parayanas, Shantis data
const POOJAS_LIST = [
  'ಗಣಪತಿ ಪೂಜೆ', 'ದೇವಾಲಯ ಪ್ರತಿಷ್ಠಾಪನ ಪೂಜೆ', 'ಗೃಹಪ್ರವೇಶ ಪೂಜೆ', 'ಭೂಮಿ ಪೂಜೆ',
  'ವಾಸ್ತು ಪೂಜೆ', 'ಲಕ್ಷ್ಮಿ ಪೂಜೆ', 'ಶ್ರೀ ಸತ್ಯನಾರಾಯಣ ಪೂಜೆ', 'ಶ್ರೀ ದುರ್ಗಾ ದೀಪನಮಸ್ಕಾರ',
  'ಆಶ್ಲೇಷ ಬಲಿ ಪೂಜೆ', 'ಧನ್ವಂತರಿ ಪೂಜೆ', 'ವನದುರ್ಗ ಪೂಜೆ', 'ನವಗ್ರಹ ಪೂಜೆ',
  'ಗೋ ಪೂಜೆ', 'ರುದ್ರಾಭಿಷೇಕ ಪೂಜೆ'
];

const HOMAS_LIST = [
  'ಗಣಪತಿ ಹೋಮ', 'ಸುದರ್ಶನ ಹೋಮ', 'ಚಂಡಿ ಹೋಮ', 'ದುರ್ಗಾ ಹೋಮ',
  'ರುದ್ರ ಹೋಮ', 'ನವಗ್ರಹ ಹೋಮ', 'ವಾಸ್ತು ಹೋಮ', 'ಪ್ರತ್ಯಂಗಿರಾ ಹೋಮ',
  'ಧನ್ವಂತರಿ ಹೋಮ', 'ಅಘೋರ ಹೋಮ'
];

const PARAYANAS_LIST = [
  'ವೇದಪಾರಾಯಣ', 'ಚಂಡಿಪಾರಾಯಣ', 'ರುದ್ರಪಾರಾಯಣ', 'ಸಹಸ್ರ ನಾಮಪಾರಾಯಣಗಳು', 'ದುರ್ಗಾ ಪಾರಾಯಣ'
];

const SHANTIS_LIST = [
  'ಗೃಹಪ್ರವೇಶ ಶಾಂತಿ', 'ನವಗ್ರಹ ಶಾಂತಿ', 'ವಿವಾಹ ಪ್ರತಿಬಂಧಕ ಶಾಂತಿ', 'ಬಾಲಾರಿಷ್ಟಶಾಂತಿ',
  'ಸಹಸ್ರ ಚಂದ್ರದರ್ಶನ ಶಾಂತಿ', 'ಉಗ್ರರಥ ಶಾಂತಿ', 'ಷಷ್ಠಿಪೂರ್ತಿ ಶಾಂತಿ', 'ಭೀಮರಥ ಶಾಂತಿ',
  'ಸರ್ಪ ಶಾಂತಿ', 'ನಕ್ಷತ್ರ ಶಾಂತಿ', 'ದಶಾ ಸಂಧಿ ಶಾಂತಿ', 'ಏಕ ನಕ್ಷತ್ರ ಶಾಂತಿ',
  'ಪಂಚಮಾರಿಷ್ಟ ಶಾಂತಿ', 'ಪಂಚಕ ಶಾಂತಿ', 'ಜನನ ದೋಷಗಳಿಗೆ ಶಾಂತಿ ಪೂಜೆಗಳು', 'ಗ್ರಾಮ ಶಾಂತಿ',
  'ಗೃಹಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಸರ್ವಶಾಂತಿಗಳು'
];

// 3. Other Facilities / Services categories
const OTHER_FACILITIES = [
  {
    category: 'ಜಾತಕ ವಿಮರ್ಶೆ',
    enCategory: 'Horoscope Consultation',
    icon: '✦',
    items: [
      'ಜಾತಕ ವಿಮರ್ಶೆ',
      'ವಿವಾಹ ಹೊಂದಾಣಿಕೆ ಮುಹೂರ್ತ ನಿರ್ಣಯ',
      'ಕಂಪ್ಯೂಟರ್ ಜಾತಕ ತೆಗೆಯುವುದು',
      'ಕೈಬರಹರ ಜಾತಕ'
    ]
  },
  {
    category: 'ಪ್ರಶ್ನಾ ಶಾಸ್ತ್ರ',
    enCategory: 'Prashna Shastra',
    icon: '❂',
    items: [
      'ಕವಡೆ ಪ್ರಶ್ನೆ',
      'ತಾಂಬೂಲ ಪ್ರಶ್ನೆ'
    ]
  },
  {
    category: 'ವಾಸ್ತು ಸೇವೆಗಳು & ಪರಿಹಾರ',
    enCategory: 'Vastu Shastra & Remedies',
    icon: '⌖',
    items: [
      'ಭೂಪರೀಕ್ಷೆಯಿಂದ ಗ್ರಹಪ್ರವೇಶದವರೆಗೂ ವಾಸ್ತು ರೀತಿ ಆಯ ನಿರ್ಣಯ',
      'ವಾಸ್ತು ಸಲಹೆ ಹಾಗೂ ಪರಿಹಾರಗಳು',
      'ಪಿರಮಿಡ್ ಪರಿಹಾರಗಳು'
    ]
  },
  {
    category: 'ಸಂಖ್ಯಾ ಭವಿಷ್ಯ',
    enCategory: 'Numerology Consultations',
    icon: '🔢',
    items: [
      'ಹೆಸರಿನ ಸಂಖ್ಯಾಶಾಸ್ತ್ರ',
      'ವಾಹನ ಸಂಖ್ಯಾಶಾಸ್ತ್ರ',
      'ಮೊಬೈಲ್ ಸಂಖ್ಯಾಶಾಸ್ತ್ರ',
      'ಸಂಖ್ಯಾಶಾಸ್ತ್ರ ರಿಪೋರ್ಟ್'
    ]
  },
  {
    category: 'ಶುಭ ಹಾಗೂ ಅಶುಭ ನಿರ್ಣಯ',
    enCategory: 'Property & Deal Timing',
    icon: '⚖',
    items: [
      'ಮನೆ ವಾಹನ ಜಮೀನು ಮಾರುವ ಮತ್ತು ಕೊಳ್ಳುವ ವಿಚಾರವಾಗಿ ಶುಭ ಹಾಗೂ ಅಶುಭ ನಿರ್ಣಯ'
    ]
  }
];

export default function HomePage() {
  const { t, lang } = useLanguage();
  const { addToCart } = useCart();
  const [activeRitualTab, setActiveRitualTab] = useState('pooja');

  const [catHeadingRef, isCatVisible] = useRevealOnScroll(0.12);
  const [ritualsRef, isRitualsVisible] = useRevealOnScroll(0.1);
  const [yantrasRef, isYantrasVisible] = useRevealOnScroll(0.1);
  const [facilitiesRef, isFacilitiesVisible] = useRevealOnScroll(0.1);
  const [classesRef, isClassesVisible] = useRevealOnScroll(0.1);

  const isKn = lang === 'kn';

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[650px] flex items-center overflow-hidden bg-maroon-dark bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(49,17,17,.92) 0%, rgba(49,17,17,.63) 45%, rgba(49,17,17,.26)), url(${HERO_IMAGES.hero})`,
        }}
      >
        <Container>
          <div className="relative text-white py-[70px] md:py-[82px] animate-reveal-up">
            <p className="text-[10px] tracking-[0.2em] font-bold text-gold uppercase flex items-center gap-[10px] m-0">
              <span className="inline-block w-[34px] h-[1px] bg-current" aria-hidden="true" />
              {t.hero.eyebrow}
            </p>

            <h1 className="font-serif font-medium text-[36px] sm:text-[46px] md:text-[clamp(44px,5.6vw,74px)] leading-[1.12] tracking-[-0.02em] my-[25px] mb-4">
              {t.hero.title1}
              <br />
              <em className="not-italic text-gold-light">{t.hero.title2}</em>
            </h1>

            <p className="font-serif font-normal text-[19px] md:text-[23px] text-gold-light m-0 mb-2.5">
              {t.hero.subtitle}
            </p>

            <p className="font-serif font-normal text-[15px] md:text-[17px] leading-[1.9] text-hero-desc max-w-[530px] m-0">
              {t.hero.description}
            </p>

            <div className="flex gap-[13px] mt-[30px] flex-wrap">
              <Button variant="primary" href="/books">
                {t.hero.exploreBtn} <span>↗</span>
              </Button>
              <Button variant="outline" href={BUSINESS.whatsapp} className="inline-flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4" />
                <span>{t.hero.whatsappBtn}</span>
              </Button>
            </div>

            <div className="mt-[70px] text-[10px] tracking-[0.13em] uppercase text-gold-muted flex items-center">
              <span className="text-gold text-[18px] mr-2">✺</span>
              {t.hero.note}
            </div>
          </div>
        </Container>

        <div
          className="absolute right-[4%] md:right-[9%] bottom-[7%] md:bottom-[8%] text-gold-ornament font-serif text-[100px] md:text-[180px] select-none pointer-events-none leading-none"
          aria-hidden="true"
        >
          ॐ
        </div>
      </section>

      {/* 1. ಮೊದಲನೆಯದು: ಪುಸ್ತಕಗಳ ಬಗ್ಗೆ (Book Catalogue Section) */}
      <section id="books-section" className="py-[72px] md:py-[105px] bg-cream-warm border-b border-line">
        <Container>
          <div
            ref={catHeadingRef}
            className={`transition-all duration-700 ${
              isCatVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-[25px]'
            }`}
          >
            <SectionHeading
              kickerNumber="01"
              kickerLabel={isKn ? 'ಮೊದಲನೆಯದು • ಗ್ರಂಥ ಸಂಗ್ರಹ' : 'FIRST • SACRED BOOKS'}
              title={
                <>
                  {isKn ? 'ಆದ್ಯ' : 'Curated'}{' '}
                  <em className="not-italic text-gold-light">
                    {isKn ? 'ಪುಸ್ತಕಗಳ ವಿವರಣೆ' : 'Book Catalogue'}
                  </em>
                </>
              }
              subtitle={
                isKn
                  ? 'ಜ್ಯೋತಿಷ್ಯ, ವಾಸ್ತು, ವೇದ-ಆಗಮ, ಪುರಾಣ, ಯಂತ್ರ-ಮಂತ್ರ, ಯೋಗ ಹಾಗೂ ಧರ್ಮಶಾಸ್ತ್ರಗಳ ಅಧಿಕೃತ ಪ್ರಮಾಣಿತ ಗ್ರಂಥಗಳು.'
                  : 'Authentic classical texts across Astrology, Vastu, Vedas, Agamas, Puranas, Yoga, and Dharmashastra.'
              }
            />
          </div>

          {CATALOG_ITEMS.length === 0 ? (
            <div className="text-center py-12 px-4 bg-white border border-line">
              <p className="text-muted font-serif text-base m-0">
                {t.categories.emptyState || 'Book catalogue is being updated with new titles.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-[18px]">
              {CATALOG_ITEMS.slice(0, 4).map((cat) => {
                const bookInfo = t.bookDetailsPage?.books?.[cat.id] || {};
                const slug = (cat.imageUrl || '').split('/').pop().replace(/\.webp$/, '');
                const cleanSlug = slug.replace(/-\d+$/, '');
                const englishTitle = cleanSlug
                  .split('-')
                  .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
                  .join(' ');

                return (
                  <CategoryCard
                    key={cat.id}
                    id={cat.id}
                    title={bookInfo.title || cat.title}
                    subtitle={englishTitle}
                    description={bookInfo.description || cat.description}
                    price={cat.price}
                    imageUrl={cat.imageUrl}
                    onAddToCart={addToCart}
                  />
                );
              })}
            </div>
          )}

          <div className="text-center mt-12 flex justify-center gap-4 flex-wrap">
            <Button variant="primary" href="/books">
              {isKn ? 'ಸಂಪೂರ್ಣ ಪುಸ್ತಕ ಭಂಡಾರ ವೀಕ್ಷಿಸಿ' : 'View Complete Catalogue'} <span>→</span>
            </Button>
            <Button variant="outline-dark" href={BUSINESS.whatsappCatalogue}>
              {isKn ? 'ವಾಟ್ಸಾಪ್ ಕ್ಯಾಟಲಾಗ್' : 'WhatsApp Catalogue'} <span>↗</span>
            </Button>
          </div>
        </Container>
      </section>

      {/* 2. ಎರಡನೆಯದು: ಪೂಜಾ, ಪಾರಾಯಣ, ಶಾಂತಿ, ಹೋಮಗಳ ಬಗ್ಗೆ */}
      <section id="rituals-section" className="py-[72px] md:py-[105px] bg-paper border-b border-line">
        <Container>
          <div
            ref={ritualsRef}
            className={`transition-all duration-700 ${
              isRitualsVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-[25px]'
            }`}
          >
            <SectionHeading
              kickerNumber="02"
              kickerLabel={isKn ? 'ಎರಡನೆಯದು • ಧಾರ್ಮಿಕ ಆಚರಣೆಗಳು' : 'SECOND • VEDIC RITUALS'}
              title={
                <>
                  {isKn ? 'ಪೂಜಾ, ಪಾರಾಯಣ,' : 'Vedic Poojas, Parayanas,'}{' '}
                  <em className="not-italic text-gold-light">
                    {isKn ? 'ಶಾಂತಿ ಮತ್ತು ಹೋಮಗಳು' : 'Homas & Shantis'}
                  </em>
                </>
              }
              subtitle={
                isKn
                  ? 'ಸನಾತನ ವೈದಿಕ ವಿಧಿ-ವಿಧಾನಗಳ ಪ್ರಕಾರ ನಿಮ್ಮ ಮನೆ, ದೇವಾಲಯ ಹಾಗೂ ಕಚೇರಿಗಳಲ್ಲಿ ಶ್ರದ್ಧಾ ಭಕ್ತಿಗಳಿಂದ ನೆರವೇರಿಸಲಾಗುವ ಪೂಜಾ-ಹೋಮ-ಶಾಂತಿ ಕಾರ್ಯಗಳು.'
                  : 'Auspicious Vedic rituals, ancestral and remedial shantis, scriptural recitations, and homas conducted strictly according to traditional agamas.'
              }
            />

            {/* Navigation Tabs */}
            <div className="flex gap-2 flex-wrap justify-center mb-10">
              {[
                { id: 'pooja', label: 'ಪೂಜೆಗಳು (14)', count: POOJAS_LIST.length },
                { id: 'homa', label: 'ಹೋಮಗಳು (10)', count: HOMAS_LIST.length },
                { id: 'parayana', label: 'ಪಾರಾಯಣಗಳು (5)', count: PARAYANAS_LIST.length },
                { id: 'shanti', label: 'ಶಾಂತಿಗಳು (17)', count: SHANTIS_LIST.length },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveRitualTab(tab.id)}
                  className={`px-5 py-2.5 text-xs md:text-sm font-bold tracking-wide rounded-[2px] transition-all cursor-pointer border ${
                    activeRitualTab === tab.id
                      ? 'bg-maroon text-white border-maroon shadow-sm'
                      : 'bg-white text-ink border-line hover:border-maroon hover:text-maroon'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab 1: Poojas */}
            {activeRitualTab === 'pooja' && (
              <div className="bg-white border border-line p-6 md:p-10 shadow-xs animate-in fade-in duration-300">
                <div className="flex items-center justify-between mb-6 border-b border-line pb-4 flex-wrap gap-2">
                  <h3 className="font-serif font-semibold text-2xl text-maroon m-0">
                    {isKn ? 'ಪೂಜಾ ವಿಧಿ-ವಿಧಾನಗಳು' : 'Sacred Pooja Rituals'}
                  </h3>
                  <span className="text-xs text-gold font-bold uppercase tracking-wider">
                    {POOJAS_LIST.length} {isKn ? 'ಪ್ರಮುಖ ಪೂಜೆಗಳು' : 'Services'}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                  {POOJAS_LIST.map((pooja, i) => (
                    <div
                      key={pooja}
                      className="p-3.5 rounded bg-cream border border-gold/20 flex items-center justify-between hover:border-maroon/50 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-maroon/10 text-maroon text-xs font-bold grid place-items-center shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-sm font-medium text-ink">{pooja}</span>
                      </div>
                      <a
                        href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(
                          `ನಮಸ್ಕಾರ, ${pooja} ಪೂಜಾ ಕಾರ್ಯಕ್ರಮದ ಕುರಿತು ವಿವರಗಳನ್ನು ತಿಳಿಯಲು ಬಯಸುತ್ತೇನೆ.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-saffron hover:text-maroon text-xs font-bold"
                        title="Book / Enquire on WhatsApp"
                      >
                        ↗
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Homas */}
            {activeRitualTab === 'homa' && (
              <div className="bg-white border border-line p-6 md:p-10 shadow-xs animate-in fade-in duration-300">
                <div className="flex items-center justify-between mb-6 border-b border-line pb-4 flex-wrap gap-2">
                  <h3 className="font-serif font-semibold text-2xl text-maroon m-0">
                    {isKn ? 'ವೈದಿಕ ಹೋಮಗಳು' : 'Vedic Sacred Homas'}
                  </h3>
                  <span className="text-xs text-gold font-bold uppercase tracking-wider">
                    {HOMAS_LIST.length} {isKn ? 'ಪ್ರಮುಖ ಹೋಮಗಳು' : 'Services'}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                  {HOMAS_LIST.map((homa, i) => (
                    <div
                      key={homa}
                      className="p-3.5 rounded bg-cream border border-gold/20 flex items-center justify-between hover:border-maroon/50 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-saffron/15 text-saffron text-xs font-bold grid place-items-center shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-sm font-medium text-ink">{homa}</span>
                      </div>
                      <a
                        href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(
                          `ನಮಸ್ಕಾರ, ${homa} ಹೋಮ ಕಾರ್ಯಕ್ರಮದ ಕುರಿತು ವಿವರಗಳನ್ನು ತಿಳಿಯಲು ಬಯಸುತ್ತೇನೆ.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-saffron hover:text-maroon text-xs font-bold"
                        title="Book / Enquire on WhatsApp"
                      >
                        ↗
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Parayanas */}
            {activeRitualTab === 'parayana' && (
              <div className="bg-white border border-line p-6 md:p-10 shadow-xs animate-in fade-in duration-300">
                <div className="flex items-center justify-between mb-6 border-b border-line pb-4 flex-wrap gap-2">
                  <h3 className="font-serif font-semibold text-2xl text-maroon m-0">
                    {isKn ? 'ಪವಿತ್ರ ಪಾರಾಯಣಗಳು' : 'Scriptural Parayanas'}
                  </h3>
                  <span className="text-xs text-gold font-bold uppercase tracking-wider">
                    {PARAYANAS_LIST.length} {isKn ? 'ಪಾರಾಯಣ ಸೇವೆಗಳು' : 'Services'}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {PARAYANAS_LIST.map((parayana, i) => (
                    <div
                      key={parayana}
                      className="p-4 rounded bg-cream border border-gold/20 flex items-center justify-between hover:border-maroon/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-gold/20 text-maroon text-xs font-bold grid place-items-center shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-base font-serif font-medium text-maroon">
                          {parayana}
                        </span>
                      </div>
                      <a
                        href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(
                          `ನಮಸ್ಕಾರ, ${parayana} ಪಾರಾಯಣ ಸೇವೆಗಾಗಿ ವಿವರಗಳನ್ನು ತಿಳಿಯಲು ಬಯಸುತ್ತೇನೆ.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-saffron hover:text-maroon text-xs font-bold"
                        title="Book / Enquire on WhatsApp"
                      >
                        ↗
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 4: Shantis */}
            {activeRitualTab === 'shanti' && (
              <div className="bg-white border border-line p-6 md:p-10 shadow-xs animate-in fade-in duration-300">
                <div className="flex items-center justify-between mb-6 border-b border-line pb-4 flex-wrap gap-2">
                  <h3 className="font-serif font-semibold text-2xl text-maroon m-0">
                    {isKn ? 'ಸರ್ವ ಶಾಂತಿ ಪರಿಹಾರ ಕಾರ್ಯಗಳು' : 'Remedial & Astrological Shantis'}
                  </h3>
                  <span className="text-xs text-gold font-bold uppercase tracking-wider">
                    {SHANTIS_LIST.length} {isKn ? 'ವಿಶೇಷ ಶಾಂತಿಗಳು' : 'Services'}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                  {SHANTIS_LIST.map((shanti, i) => (
                    <div
                      key={shanti}
                      className="p-3.5 rounded bg-cream border border-gold/20 flex items-center justify-between hover:border-maroon/50 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-maroon/10 text-maroon text-xs font-bold grid place-items-center shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-sm font-medium text-ink">{shanti}</span>
                      </div>
                      <a
                        href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(
                          `ನಮಸ್ಕಾರ, ${shanti} ಶಾಂತಿ ಕಾರ್ಯಕ್ರಮದ ಕುರಿತು ವಿವರಗಳನ್ನು ತಿಳಿಯಲು ಬಯಸುತ್ತೇನೆ.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-saffron hover:text-maroon text-xs font-bold"
                        title="Book / Enquire on WhatsApp"
                      >
                        ↗
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="text-center mt-8">
              <Button
                variant="primary"
                href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(
                  'ನಮಸ್ಕಾರ, ಪೂಜೆ, ಹೋಮ, ಪಾರಾಯಣ ಹಾಗೂ ಶಾಂತಿ ಕಾರ್ಯಗಳ ದಿನಾಂಕ, ಮುಹೂರ್ತ ಹಾಗೂ ವಿಧಿ-ವಿಧಾನಗಳ ಬಗ್ಗೆ ಮಾರ್ಗದರ್ಶನ ಬೇಕಾಗಿದೆ.'
                )}`}
                className="inline-flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>{isKn ? 'ಪೂಜಾ/ಹೋಮಗಳಿಗಾಗಿ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ವಿಚಾರಿಸಿ' : 'Book Rituals on WhatsApp'}</span>
                <span>↗</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. ಮೂರನೆಯದು: ಯಂತ್ರಗಳ ಬಗ್ಗೆ (Sacred Yantras) */}
      <section id="yantras-section" className="py-[72px] md:py-[105px] bg-cream-warm border-b border-line">
        <Container>
          <div
            ref={yantrasRef}
            className={`transition-all duration-700 ${
              isYantrasVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-[25px]'
            }`}
          >
            <SectionHeading
              kickerNumber="03"
              kickerLabel={isKn ? 'ಮೂರನೆಯದು • ಸಿದ್ಧ ಯಂತ್ರಗಳು' : 'THIRD • SACRED YANTRAS'}
              title={
                <>
                  {isKn ? 'ಸಿದ್ಧ ಹಾಗೂ ಪ್ರಭಾವಿ' : 'Consecrated'}{' '}
                  <em className="not-italic text-gold-light">
                    {isKn ? 'ಯಂತ್ರಗಳು' : 'Sacred Yantras'}
                  </em>
                </>
              }
              subtitle={
                isKn
                  ? 'ಸಂಪೂರ್ಣ ಶಾಸ್ತ್ರೋಕ್ತವಾಗಿ ಮಂತ್ರ ಪೂಜಿತಗೊಳಿಸಿ ನೀಡಲಾಗುವ ಸಿದ್ಧ ಯಂತ್ರಗಳು.'
                  : 'Authenticated, energized sacred yantras customized to traditional Vedic geometry and rituals.'
              }
            />

            {/* Crucial Delivery Notice */}
            <div className="max-w-2xl mx-auto mb-10 p-4 bg-amber-50 border-2 border-amber-300 rounded text-center">
              <span className="text-amber-800 font-bold text-sm md:text-base flex items-center justify-center gap-2">
                <span>⏱</span>
                <span>
                  {isKn
                    ? 'ಸೂಚನೆ: ನೀವು ತಿಳಿಸಿದ 15 ದಿನದ ನಂತರ ದೊರೆಯುತ್ತದೆ'
                    : 'Notice: Yantras are prepared and available 15 days after placing order.'}
                </span>
              </span>
              <p className="text-xs text-amber-700 mt-1 m-0">
                {isKn
                  ? 'ಪ್ರತಿ ಯಂತ್ರವನ್ನು ಶಾಸ್ತ್ರೋಕ್ತ ಮುಹೂರ್ತದಲ್ಲಿ ಸಿದ್ಧಪಡಿಸಿ, ಜಪ-ಅನುಷ್ಠಾನ ನಡೆಸಿ ನೀಡುವುದರಿಂದ 15 ದಿನಗಳ ಕಾಲಾವಕಾಶ ಅಗತ್ಯವಿರುತ್ತದೆ.'
                  : 'Since each yantra is energized individually with traditional mantra anushthana, a 15-day preparation period is required.'}
              </p>
            </div>

            {/* Yantras Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {YANTRAS_LIST.map((yantra, idx) => (
                <div
                  key={yantra.id}
                  className="bg-white border border-line p-5 md:p-6 rounded flex flex-col justify-between hover:shadow-card-hover transition-all duration-300"
                >
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[11px] font-bold text-gold tracking-widest uppercase">
                        YANTRA 0{idx + 1}
                      </span>
                      <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-900 rounded font-bold">
                        15 ದಿನಗಳ ನಂತರ
                      </span>
                    </div>

                    <h3 className="font-serif font-semibold text-xl text-maroon mb-1">
                      {yantra.name}
                    </h3>
                    <div className="text-xs font-sans text-gold-rich font-medium tracking-wide mb-3">
                      {yantra.enName}
                    </div>
                    <p className="text-xs text-muted leading-relaxed mb-5">
                      {yantra.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-line flex justify-between items-center">
                    <span className="text-[11px] text-ink-soft">
                      {isKn ? 'ಸಿದ್ಧಪಡಿಸಿ ಪೂರೈಕೆ' : 'Consecrated upon order'}
                    </span>
                    <a
                      href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(
                        `ನಮಸ್ಕಾರ, ನನಗೆ "${yantra.name}" (${yantra.enName}) ಯಂತ್ರದ ಕುರಿತು ಮಾಹಿತಿ ಮತ್ತು ನೋಂದಣಿ ಬೇಕಾಗಿದೆ.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-maroon text-white hover:bg-maroon-dark text-xs font-bold rounded flex items-center gap-1.5 transition-colors"
                    >
                      <span>{isKn ? 'ವಿಚಾರಿಸಿ' : 'Enquire'}</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. ನಾಲ್ಕನೆಯದು: ನಮ್ಮಲ್ಲಿ ಸಿಗುವ ಇತರ ಸೌಲಭ್ಯಗಳ ಬಗ್ಗೆ */}
      <section id="facilities-section" className="py-[72px] md:py-[105px] bg-paper border-b border-line">
        <Container>
          <div
            ref={facilitiesRef}
            className={`transition-all duration-700 ${
              isFacilitiesVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-[25px]'
            }`}
          >
            <SectionHeading
              kickerNumber="04"
              kickerLabel={isKn ? 'ನಾಲ್ಕನೆಯದು • ಸಮಗ್ರ ಸೌಲಭ್ಯಗಳು' : 'FOURTH • EXPERT SERVICES'}
              title={
                <>
                  {isKn ? 'ನಮ್ಮಲ್ಲಿ ಸಿಗುವ' : 'Our Specialized'}{' '}
                  <em className="not-italic text-gold-light">
                    {isKn ? 'ಇತರ ಸೌಲಭ್ಯಗಳು' : 'Consultancy Facilities'}
                  </em>
                </>
              }
              subtitle={
                isKn
                  ? 'ಜಾತಕ ವಿಮರ್ಶೆ, ಪ್ರಶ್ನಾ ಶಾಸ್ತ್ರ, ವಾಸ್ತು ವಿಮರ್ಶೆ, ಸಂಖ್ಯಾ ಭವಿಷ್ಯ ಹಾಗೂ ಸ್ಥಿರಾಸ್ತಿ ವ್ಯವಹಾರಗಳ ಶುಭ-ಅಶುಭ ನಿರ್ಣಯ ಸೇವೆಗಳು.'
                  : 'Comprehensive consultation in Vedic Astrology, Horary Questioning, Vastu Analysis, Numerology and Property Deals.'
              }
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {OTHER_FACILITIES.map((facility) => (
                <div
                  key={facility.category}
                  className="bg-white border border-line p-6 md:p-8 flex flex-col justify-between hover:shadow-card-hover transition-all duration-300 rounded"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-10 h-10 rounded-full bg-cream border border-gold/30 text-maroon text-lg grid place-items-center shrink-0">
                        {facility.icon}
                      </span>
                      <div>
                        <h3 className="font-serif font-semibold text-xl text-maroon m-0">
                          {facility.category}
                        </h3>
                        <small className="text-[11px] text-gold tracking-wide uppercase font-sans font-medium">
                          {facility.enCategory}
                        </small>
                      </div>
                    </div>

                    <ul className="space-y-2.5 text-sm text-ink mb-6 pt-2 border-t border-line">
                      {facility.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-gold mt-1 text-xs">✦</span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-line">
                    <Button
                      variant="outline-dark"
                      href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(
                        `ನಮಸ್ಕಾರ, ${facility.category} ಕುರಿತು ಸಮಾಲೋಚನೆಗಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತಿದ್ದೇನೆ.`
                      )}`}
                      className="w-full inline-flex items-center justify-center gap-2 text-xs"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                      <span>{isKn ? 'ಸಮಾಲೋಚನೆಗೆ ಸಂಪರ್ಕಿಸಿ' : 'Book Consultation'}</span>
                      <span>↗</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. ಐದನೆಯದು: ನಮ್ಮ ತರಗತಿಗಳ ಬಗ್ಗೆ ವಿವರಣೆ (Classes & Courses) */}
      <section id="classes-section" className="py-[72px] md:py-[105px] bg-cream-warm border-b border-line">
        <Container>
          <div
            ref={classesRef}
            className={`transition-all duration-700 ${
              isClassesVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-[25px]'
            }`}
          >
            <SectionHeading
              kickerNumber="05"
              kickerLabel={isKn ? 'ಐದನೆಯದು • ಜ್ಞಾನ ಬೋಧನೆ' : 'FIFTH • ACADEMIC COURSES'}
              title={
                <>
                  {isKn ? 'ನಮ್ಮ ತರಗತಿಗಳ' : 'Study Cohorts &'}{' '}
                  <em className="not-italic text-gold-light">
                    {isKn ? 'ಸಂಪೂರ್ಣ ವಿವರಣೆ' : 'Curriculum Classes'}
                  </em>
                </>
              }
              subtitle={
                isKn
                  ? 'ಚಂದ್ರಶೇಖರ್ ಆದ್ಯ ಅವರಿಂದ ವೈದಿಕ ಜ್ಯೋತಿಷ್ಯ, ವಾಸ್ತು, ವೇದ, ಸಂಖ್ಯಾಶಾಸ್ತ್ರ ಹಾಗೂ ಪ್ರಶ್ನ ಶಾಸ್ತ್ರಗಳ ವ್ಯವಸ್ಥಿತ ತರಗತಿಗಳು.'
                  : 'Structured traditional instruction in Vedic Astrology, Vastu Shastra, Vedas, Numerology and Prashna Shastra.'
              }
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {(t.classesPage?.courses || []).map((course, idx) => (
                <div
                  key={course.title}
                  className="bg-white border border-line p-6 md:p-8 flex flex-col justify-between hover:shadow-card-hover transition-all duration-300 rounded"
                >
                  <div>
                    <span className="block text-xs tracking-wider text-gold font-bold uppercase mb-2">
                      {isKn ? 'ತರಗತಿ 0' : 'CLASS 0'}{idx + 1}
                    </span>
                    <h3 className="font-serif font-semibold text-xl text-maroon mb-3">
                      {course.title}
                    </h3>

                    <div className="flex flex-wrap gap-3 text-xs text-muted mb-4 pb-3 border-b border-line">
                      <span>
                        <strong className="text-ink">{isKn ? 'ಅವಧಿ:' : 'Duration:'}</strong> {course.duration}
                      </span>
                      <span>
                        <strong className="text-ink">{isKn ? 'ವಿಧಾನ:' : 'Mode:'}</strong> {course.mode}
                      </span>
                    </div>

                    <h4 className="text-xs uppercase tracking-wider font-bold text-maroon mb-2">
                      {isKn ? 'ಪಠ್ಯಕ್ರಮದ ವಿಷಯಗಳು:' : 'Curriculum Topics:'}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-ink-soft mb-6">
                      {course.syllabus.map((topic) => (
                        <li key={topic} className="flex items-start gap-2">
                          <span className="text-gold text-xs mt-0.5">✦</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-line">
                    <Button
                      variant="outline-dark"
                      href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(
                        `ನಮಸ್ಕಾರ, ${course.title} ತರಗತಿಯ ಪ್ರವೇಶಾತಿ ಹಾಗೂ ವಿವರಗಳನ್ನು ತಿಳಿಯಲು ಬಯಸುತ್ತೇನೆ.`
                      )}`}
                      className="w-full inline-flex items-center justify-center gap-2 text-xs"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                      <span>{isKn ? 'ಪ್ರವೇಶಾತಿಗೆ ವಿಚಾರಿಸಿ' : 'Inquire for Admission'}</span>
                      <span>↗</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="primary" href="/classes">
                {isKn ? 'ಸಂಪೂರ್ಣ ತರಗತಿಗಳ ಪುಟ ವೀಕ್ಷಿಸಿ' : 'View Full Classes Page'} <span>→</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

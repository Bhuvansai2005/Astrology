import {
  Button,
  Container,
  SectionHeading,
} from '../components/UI';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from '../components/SocialIcons';
import { useLanguage, useRevealOnScroll } from '../hooks';
import { BUSINESS, HERO_IMAGES } from '../config';

const OTHER_FACILITIES = [
  {
    id: 'horoscope',
    category: 'ಜಾತಕ ವಿಮರ್ಶೆ',
    enCategory: 'Horoscope Consultation',
    icon: 'ॐ',
  },
  {
    id: 'prashna',
    category: 'ಪ್ರಶ್ನಾ ಶಾಸ್ತ್ರ',
    enCategory: 'Prashna Shastra',
    icon: '❂',
  },
  {
    id: 'vastu',
    category: 'ವಾಸ್ತು ಸೇವೆಗಳು & ಪರಿಹಾರ',
    enCategory: 'Vastu Shastra & Remedies',
    icon: '🏛',
  },
  {
    id: 'numerology',
    category: 'ಸಂಖ್ಯಾ ಭವಿಷ್ಯ',
    enCategory: 'Numerology Consultations',
    icon: '🔢',
  },
  {
    id: 'timing',
    category: 'ಶುಭ ಹಾಗೂ ಅಶುಭ ನಿರ್ಣಯ',
    enCategory: 'Property & Deal Timing',
    icon: '⚖',
  }
];

const DIVINE_STORE_ITEMS = [
  {
    id: 'rudrakshi-mala-6-mm',
    title: 'ರುದ್ರಾಕ್ಷಿಗಳು',
    enTitle: 'Rudraksha Malas & Beads',
    sanskritLabel: 'RUDRAKSHA',
    imageUrl: '/images/sacred-articles/rudrakshi-mala-6-mm.webp',
    description: 'ಏಕಾಗ್ರತೆ, ಶಿವನ ಅನುಗ್ರಹ, ಮನೋಶಾಂತಿ ಹಾಗೂ ಸಕಾರಾತ್ಮಕ ಶಕ್ತಿಗಾಗಿ ಪವಿತ್ರ ಮುಖಿ ರುದ್ರಾಕ್ಷಿಗಳು ಮತ್ತು ಮಾಲೆಗಳು.',
    enDescription: 'Authentic 5-mukhi and specialized Rudraksha prayer malas for focus, mental strength and spiritual aura.',
    enquiryText: 'ನಮಸ್ಕಾರ, ಆದ್ಯ ಡಿವೈನ್ ಸ್ಟಾರ್‌ನಿಂದ ರುದ್ರಾಕ್ಷಿಗಳು ಹಾಗೂ ರುದ್ರಾಕ್ಷಿ ಮಾಲೆಗಳ ಮುಖಿ ಪ್ರಕಾರಗಳು, ಲಭ್ಯತೆ ಮತ್ತು ಬೆಲೆಗಳನ್ನು ತಿಳಿಸಿ.',
  },
  {
    id: 'spatika-male',
    title: 'ಸ್ಪಟಿಕ ಮಾಲೆಗಳು',
    enTitle: 'Spatika Malas (Quartz Crystal)',
    sanskritLabel: 'SPATIKA',
    imageUrl: '/images/sacred-articles/spatika-mala.jpg',
    description: 'ಶುದ್ಧ ನೈಸರ್ಗಿಕ ಸ್ಪಟಿಕ, ದೇಹದ ಶಾಖ ನಿಯಂತ್ರಣ, ಧ್ಯಾನ-ಜಪ ಸಿದ್ಧಿ ಹಾಗೂ ಮಾನಸಿಕ ಪ್ರಶಾಂತತೆಗಾಗಿ ಶ್ರೇಷ್ಠ ಮಾಲೆ.',
    enDescription: 'Pure faceted natural quartz crystal rosary for cooling the body, deep meditation, and peaceful mind.',
    enquiryText: 'ನಮಸ್ಕಾರ, ಆದ್ಯ ಡಿವೈನ್ ಸ್ಟಾರ್‌ನಿಂದ ನೈಸರ್ಗಿಕ ಶುದ್ಧ ಸ್ಪಟಿಕ ಮಾಲೆಗಳ ಲಭ್ಯತೆ ಮತ್ತು ಬೆಲೆಗಳನ್ನು ತಿಳಿಸಿ.',
  },
  {
    id: 'navaratnagalu',
    title: 'ನವರತ್ನಗಳು',
    enTitle: 'Navaratnas (Nine Sacred Gems)',
    sanskritLabel: 'NAVARATNA',
    imageUrl: '/images/sacred-articles/navaratna.jpg',
    description: 'ನವಗ್ರಹ ದೋಷ ನಿವಾರಣೆ, ಗ್ರಹಬಲ ವೃದ್ಧಿ ಹಾಗೂ ಭಾಗ್ಯೋದಯಕ್ಕಾಗಿ ಪರೀಕ್ಷಿತ ಅಧಿಕೃತ ನೈಸರ್ಗಿಕ ರತ್ನಗಳು.',
    enDescription: 'Certified authentic Vedic planetary gemstones for astrological harmony and planetary propitiation.',
    enquiryText: 'ನಮಸ್ಕಾರ, ಆದ್ಯ ಡಿವೈನ್ ಸ್ಟಾರ್‌ನಿಂದ ನವರತ್ನಗಳು ಮತ್ತು ಜಾತಕಾನುಗುಣ ರಾಶಿ ರತ್ನಗಳ ಲಭ್ಯತೆಯ ಕುರಿತು ವಿವರಗಳನ್ನು ತಿಳಿಸಿ.',
  },
  {
    id: 'brasletgalu',
    title: 'ಬ್ರಾಸ್ಲೈಟ್ಗಳು',
    enTitle: 'Divine Energy Bracelets',
    sanskritLabel: 'KANKANA',
    imageUrl: '/images/sacred-articles/bracelets.jpg',
    description: 'ರುದ್ರಾಕ್ಷಿ, ಸ್ಪಟಿಕ ಹಾಗೂ ನೈಸರ್ಗಿಕ ರತ್ನ-ಹರಳುಗಳಿಂದ ಸಿದ್ಧಪಡಿಸಲಾದ ಪವಿತ್ರ ಆಧ್ಯಾತ್ಮಿಕ ರಕ್ಷಾ ಬ್ರೇಸ್ಲೆಟ್‌ಗಳು.',
    enDescription: 'Handcrafted healing crystal and sacred Rudraksha wrist bracelets for daily spiritual aura and protection.',
    enquiryText: 'ನಮಸ್ಕಾರ, ಆದ್ಯ ಡಿವೈನ್ ಸ್ಟಾರ್‌ನಿಂದ ಆಧ್ಯಾತ್ಮಿಕ ಬ್ರಾಸ್ಲೈಟ್‌ಗಳ ವಿನ್ಯಾಸಗಳು, ಲಭ್ಯತೆ ಮತ್ತು ಬೆಲೆಗಳನ್ನು ತಿಳಿಸಿ.',
  },
  {
    id: 'karanguli-mala',
    title: 'ಕರಂಗೋಲಿ ಮಾಲೆ',
    enTitle: 'Karangoli Mala (Ebony Wood)',
    sanskritLabel: 'KARUNGALI',
    imageUrl: '/images/sacred-articles/karanguli-mala.webp',
    description: 'ಶತ್ರುಭಾದೆ, ದೃಷ್ಟಿದೋಷ ನಿವಾರಣೆ ಹಾಗೂ ಋಣಾತ್ಮಕ ಶಕ್ತಿಗಳಿಂದ ರಕ್ಷಣೆಗಾಗಿ ಶಿವನ ಸಾನ್ನಿಧ್ಯದಲ್ಲಿ ಪೂಜಿಸಲಾದ ಅಸಲಿ ಕರಂಗೋಲಿ ಮಾಲೆ.',
    enDescription: 'Genuine Karungali (black ebony wood) mala energized for protection against negative energies and evil eye.',
    enquiryText: 'ನಮಸ್ಕಾರ, ಆದ್ಯ ಡಿವೈನ್ ಸ್ಟಾರ್‌ನಿಂದ ಅಸಲಿ ಕರಂಗೋಲಿ (ಕರುಂಗಾಲಿ) ಮಾಲೆಯ ಲಭ್ಯತೆ ಮತ್ತು ವಿವರಗಳನ್ನು ತಿಳಿಸಿ.',
  },
];

export default function HomePage() {
  const { t, lang } = useLanguage();

  const [ritualsRef, isRitualsVisible] = useRevealOnScroll(0.1);
  const [yantrasRef, isYantrasVisible] = useRevealOnScroll(0.1);
  const [divineRef, isDivineVisible] = useRevealOnScroll(0.1);
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

      {/* 2. ಎರಡನೆಯದು: ಪೂಜಾ, ಪಾರಾಯಣ, ಶಾಂತಿ, ಹೋಮಗಳ ಬಗ್ಗೆ */}
      <section id="rituals-section" className="py-[72px] md:py-[105px] bg-paper border-b border-line">
        <Container>
          <div
            ref={ritualsRef}
            className={`transition-all duration-700 ${
              isRitualsVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-[25px]'
            }`}
          >
            <div className="mx-auto mb-10 max-w-4xl border-2 border-maroon bg-cream-light p-1.5 shadow-sm">
              <div className="border border-gold px-5 py-8 text-center sm:px-10 md:py-10">
                <p className="m-0 text-xs tracking-[0.3em] text-maroon" aria-hidden="true">
                  ॥ ॐ ॥
                </p>
                <img
                  src="/images/brand/adya-logo.jpeg"
                  alt={isKn ? 'ಆದ್ಯ ಜ್ಯೋತಿರ್ವಿಜ್ಞಾನ ಸಂಶೋಧನಾ ಕೇಂದ್ರ' : 'Adya Jyothirvijnana Samshodhana Kendra'}
                  className="mx-auto my-3 h-24 w-36 object-contain sm:h-32 sm:w-48"
                />
                <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                  {isKn ? 'ಎರಡನೆಯದು • ಧಾರ್ಮಿಕ ಆಚರಣೆಗಳು' : '02 • VEDIC RITUAL SERVICES'}
                </p>
                <div className="mx-auto my-4 flex max-w-sm items-center gap-3 text-gold" aria-hidden="true">
                  <span className="h-px flex-1 bg-gold/60" />
                  <span className="text-sm">◆</span>
                  <span className="h-px flex-1 bg-gold/60" />
                </div>
                <h2 className="m-0 font-serif text-2xl font-semibold leading-snug text-maroon sm:text-3xl">
                  {isKn ? 'ಎಲ್ಲಾ ರೀತಿಯ ವೈದಿಕ ಸೇವೆಗಳು' : 'Vedic Rituals for Every Occasion'}
                </h2>
                <p className="mx-auto mb-6 mt-2 max-w-xl text-sm leading-relaxed text-muted">
                  {isKn
                    ? 'ಗೃಹ, ದೇವಾಲಯ ಹಾಗೂ ಕಚೇರಿಗಳಲ್ಲಿ ಶಾಸ್ತ್ರೋಕ್ತವಾಗಿ, ಶ್ರದ್ಧಾಭಕ್ತಿಯಿಂದ ನೆರವೇರಿಸಲಾಗುತ್ತದೆ.'
                    : 'Traditional ceremonies conducted with devotion in homes, temples, and workplaces.'}
                </p>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {[
                    { id: 'pooja', label: isKn ? 'ಪೂಜೆ' : 'Pooja' },
                    { id: 'homa', label: isKn ? 'ಹೋಮ' : 'Homa' },
                    { id: 'parayana', label: isKn ? 'ಪಾರಾಯಣ' : 'Parayana' },
                    { id: 'shanti', label: isKn ? 'ಶಾಂತಿ' : 'Shanti' },
                  ].map((tab) => (
                    <Link
                      key={tab.id}
                      to={`/services/rituals/${tab.id}`}
                      className="grid min-h-12 place-items-center border border-gold/70 bg-white/70 px-3 py-2 font-serif text-base font-semibold text-maroon transition-colors hover:bg-maroon hover:text-white"
                    >
                      {tab.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center justify-between gap-4 bg-maroon px-6 py-5 text-center text-white sm:flex-row sm:text-left">
              <div>
                <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-light">
                  {isKn ? 'ಬುಕಿಂಗ್‌ಗಾಗಿ ವಾಟ್ಸಾಪ್ ಮಾಡಿ' : 'BOOKINGS & ENQUIRIES'}
                </p>
                <a
                  href={BUSINESS.phoneLinks[0]}
                  className="mt-1 inline-block font-serif text-xl font-semibold text-white hover:text-gold-light"
                >
                  {BUSINESS.phone[0]}
                </a>
              </div>
              <Button
                variant="outline"
                href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(
                  'ನಮಸ್ಕಾರ, ಪೂಜೆ, ಹೋಮ, ಪಾರಾಯಣ ಹಾಗೂ ಶಾಂತಿ ಕಾರ್ಯಗಳ ದಿನಾಂಕ, ಮುಹೂರ್ತ ಹಾಗೂ ವಿಧಿ-ವಿಧಾನಗಳ ಬಗ್ಗೆ ಮಾರ್ಗದರ್ಶನ ಬೇಕಾಗಿದೆ.'
                )}`}
                className="inline-flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>{isKn ? 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ವಿಚಾರಿಸಿ' : 'Enquire on WhatsApp'}</span>
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
            <div className="mx-auto max-w-4xl border-2 border-maroon bg-cream-light p-1.5 shadow-sm">
              <div className="border border-gold px-5 py-8 text-center sm:px-10 md:py-10">
                <p className="m-0 text-xs tracking-[0.3em] text-maroon" aria-hidden="true">
                  ॥ ॐ ॥
                </p>
                <img
                  src="/images/brand/adya-logo.jpeg"
                  alt={isKn ? 'ಆದ್ಯ ಜ್ಯೋತಿರ್ವಿಜ್ಞಾನ ಸಂಶೋಧನಾ ಕೇಂದ್ರ' : 'Adya Jyothirvijnana Samshodhana Kendra'}
                  className="mx-auto my-3 h-20 w-32 object-contain sm:h-24 sm:w-40"
                />
                <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                  {isKn ? 'ಮೂರನೆಯದು • ಸಿದ್ಧ ಯಂತ್ರಗಳು' : '03 • SACRED YANTRAS'}
                </p>
                <div className="mx-auto my-4 flex max-w-sm items-center gap-3 text-gold" aria-hidden="true">
                  <span className="h-px flex-1 bg-gold/60" />
                  <span className="text-sm">◆</span>
                  <span className="h-px flex-1 bg-gold/60" />
                </div>
                <h2 className="m-0 font-serif text-2xl font-semibold leading-snug text-maroon sm:text-3xl">
                  {isKn ? 'ಸಿದ್ಧ ಹಾಗೂ ಪ್ರಭಾವಿ ಯಂತ್ರಗಳು' : 'Consecrated Sacred Yantras'}
                </h2>
                <p className="mx-auto mb-6 mt-2 max-w-xl text-sm leading-relaxed text-muted">
                  {isKn
                    ? 'ಸಂಪೂರ್ಣ ಶಾಸ್ತ್ರೋಕ್ತವಾಗಿ ಮಂತ್ರ ಪೂಜಿತಗೊಳಿಸಿ ನೀಡಲಾಗುವ ಸಿದ್ಧ ಯಂತ್ರಗಳು.'
                    : 'Authenticated, energized sacred yantras customized to traditional Vedic geometry and rituals.'}
                </p>
                <Button variant="primary" href="/yantras">
                  {isKn ? 'ಎಲ್ಲಾ ಯಂತ್ರಗಳನ್ನು ವೀಕ್ಷಿಸಿ' : 'Explore Sacred Yantras'} <span>→</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. ನಾಲ್ಕನೆಯದು: ಆದ್ಯ ಡಿವೈನ್ ಸ್ಟಾರ್ (Adya Divine Store) */}
      <section id="divine-store-section" className="py-[72px] md:py-[105px] bg-paper border-b border-line">
        <Container>
          <div
            ref={divineRef}
            className={`transition-all duration-700 ${
              isDivineVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-[25px]'
            }`}
          >
            <div className="mx-auto mb-10 max-w-5xl border-2 border-maroon bg-cream-light p-1.5 shadow-sm">
              <div className="border border-gold px-4 py-8 sm:px-8 md:py-10 text-center">
                <p className="m-0 text-xs tracking-[0.3em] text-maroon" aria-hidden="true">
                  ॥ ॐ ॥
                </p>
                <img
                  src="/images/brand/adya-logo.jpeg"
                  alt={isKn ? 'ಆದ್ಯ ಜ್ಯೋತಿರ್ವಿಜ್ಞಾನ ಸಂಶೋಧನಾ ಕೇಂದ್ರ' : 'Adya Jyothirvijnana Samshodhana Kendra'}
                  className="mx-auto my-3 h-20 w-32 object-contain sm:h-24 sm:w-40"
                />
                <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                  {isKn ? 'ನಾಲ್ಕನೆಯದು • ಪವಿತ್ರ ಧಾರ್ಮಿಕ ಪರಿಕರಗಳು' : '04 • SACRED SPIRITUAL ARTICLES'}
                </p>
                <div className="mx-auto my-4 flex max-w-sm items-center gap-3 text-gold" aria-hidden="true">
                  <span className="h-px flex-1 bg-gold/60" />
                  <span className="text-sm">◆</span>
                  <span className="h-px flex-1 bg-gold/60" />
                </div>
                <h2 className="m-0 font-serif text-2xl sm:text-3xl font-semibold leading-snug text-maroon">
                  {isKn ? 'ಆದ್ಯ ಡಿವೈನ್ ಸ್ಟಾರ್' : 'Adya Divine Store'}
                </h2>
                <p className="mx-auto mb-8 mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  {isKn
                    ? 'ರುದ್ರಾಕ್ಷಿಗಳು, ಸ್ಪಟಿಕ ಮಾಲೆಗಳು, ನವರತ್ನಗಳು, ಪವಿತ್ರ ಬ್ರಾಸ್ಲೈಟ್‌ಗಳು ಹಾಗೂ ಅಸಲಿ ಕರಂಗೋಲಿ ಮಾಲೆಗಳ ಪವಿತ್ರ ಸಂಗ್ರಹ.'
                    : 'Consecrated Rudraksha beads, pure Spatika quartz malas, certified Navaratnas, sacred energy bracelets, and genuine Karungali malas.'}
                </p>

                {/* 5 Divine Store Items Grid with Images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 text-left">
                  {DIVINE_STORE_ITEMS.map((item) => (
                    <article
                      key={item.id}
                      className="group flex flex-col justify-between border border-gold/70 bg-white p-3.5 transition-all duration-300 hover:border-maroon hover:shadow-md rounded-xs"
                    >
                      <div>
                        {/* Image Container with 1:1 Aspect Ratio */}
                        <div className="relative w-full aspect-square overflow-hidden bg-cream-light/60 border border-line/60 rounded-xs mb-3">
                          <img
                            src={item.imageUrl}
                            alt={isKn ? item.title : item.enTitle}
                            loading="lazy"
                            className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                          />
                          <span className="absolute top-1.5 left-1.5 bg-maroon/90 text-gold-light text-[8px] font-bold tracking-wider px-1.5 py-0.5 rounded-xs uppercase">
                            {item.sanskritLabel}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="m-0 font-serif font-bold text-sm sm:text-[15px] text-maroon leading-snug group-hover:text-saffron transition-colors">
                          {isKn ? item.title : item.enTitle}
                        </h3>
                        <p className="m-0 text-[10px] text-gold font-medium mt-0.5 tracking-wide">
                          {isKn ? item.enTitle : item.title}
                        </p>

                        {/* Description */}
                        <p className="m-0 text-[11px] text-ink/75 leading-relaxed mt-2 line-clamp-3">
                          {isKn ? item.description : item.enDescription}
                        </p>
                      </div>

                      {/* Action Button */}
                      <div className="pt-3 mt-3 border-t border-line/60">
                        <a
                          href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(item.enquiryText)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-2 bg-cream hover:bg-maroon text-maroon hover:text-white border border-line hover:border-maroon text-[11px] font-bold rounded-xs transition-all duration-200"
                        >
                          <WhatsAppIcon className="w-3.5 h-3.5" />
                          <span>{isKn ? 'ವಿಚಾರಿಸಿ' : 'Enquire'}</span>
                          <span>↗</span>
                        </a>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Direct Action Link to Catalogue */}
                <div className="mt-8 text-center">
                  <Button variant="primary" href="/books">
                    {isKn ? 'ಎಲ್ಲಾ ಧಾರ್ಮಿಕ ಪರಿಕರಗಳನ್ನು ವೀಕ್ಷಿಸಿ' : 'Explore All Sacred Articles'} <span>→</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Bottom Support & Order Guidance Strip */}
            <div className="mt-8 flex flex-col items-center justify-between gap-4 bg-maroon px-6 py-5 text-center text-white sm:flex-row sm:text-left">
              <div>
                <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-light">
                  {isKn ? 'ಸಿದ್ಧ ಪರಿಕರಗಳ ವಿಚಾರಣೆಗಾಗಿ ಸಂಪರ್ಕಿಸಿ' : 'CONSECRATED SACRED ARTICLES ENQUIRIES'}
                </p>
                <p className="m-0 mt-1 font-serif text-sm text-white/90">
                  {isKn
                    ? 'ಪ್ರತಿಯೊಂದು ಪರಿಕರವನ್ನೂ ವಿಧಿಪೂರ್ವಕವಾಗಿ ಶುದ್ಧೀಕರಿಸಿ, ಮಂತ್ರಪೂತಗೊಳಿಸಿ ನೀಡಲಾಗುತ್ತದೆ.'
                    : 'Every item is purified and consecrated according to Vedic traditions prior to dispatch.'}
                </p>
              </div>
              <Button
                variant="outline"
                href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(
                  'ನಮಸ್ಕಾರ, ಆದ್ಯ ಡಿವೈನ್ ಸ್ಟಾರ್‌ನ ರುದ್ರಾಕ್ಷಿ, ಸ್ಪಟಿಕ, ನವರತ್ನಗಳು, ಬ್ರಾಸ್ಲೈಟ್‌ಗಳು ಹಾಗೂ ಕರಂಗೋಲಿ ಮಾಲೆಗಳ ಬಗ್ಗೆ ಹೆಚ್ಚಿನ ವಿವರಗಳನ್ನು ತಿಳಿಸಿ.'
                )}`}
                className="inline-flex items-center gap-2 shrink-0"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>{isKn ? 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ವಿಚಾರಿಸಿ' : 'Enquire on WhatsApp'}</span>
                <span>↗</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. ಐದನೆಯದು: ನಮ್ಮಲ್ಲಿ ಸಿಗುವ ಇತರ ಸೌಲಭ್ಯಗಳ ಬಗ್ಗೆ */}
      <section id="facilities-section" className="py-[72px] md:py-[105px] bg-cream-warm border-b border-line">
        <Container>
          <div
            ref={facilitiesRef}
            className={`transition-all duration-700 ${
              isFacilitiesVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-[25px]'
            }`}
          >
            <div className="mx-auto mb-10 max-w-4xl border-2 border-maroon bg-cream-light p-1.5 shadow-sm">
              <div className="border border-gold px-5 py-8 text-center sm:px-10 md:py-10">
                <p className="m-0 text-xs tracking-[0.3em] text-maroon" aria-hidden="true">
                  ॥ ॐ ॥
                </p>
                <img
                  src="/images/brand/adya-logo.jpeg"
                  alt={isKn ? 'ಆದ್ಯ ಜ್ಯೋತಿರ್ವಿಜ್ಞಾನ ಸಂಶೋಧನಾ ಕೇಂದ್ರ' : 'Adya Jyothirvijnana Samshodhana Kendra'}
                  className="mx-auto my-3 h-20 w-32 object-contain sm:h-24 sm:w-40"
                />
                <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                  {isKn ? 'ಐದನೆಯದು • ಸಮಗ್ರ ಸೌಲಭ್ಯಗಳು' : '05 • EXPERT CONSULTANCY SERVICES'}
                </p>
                <div className="mx-auto my-4 flex max-w-sm items-center gap-3 text-gold" aria-hidden="true">
                  <span className="h-px flex-1 bg-gold/60" />
                  <span className="text-sm">◆</span>
                  <span className="h-px flex-1 bg-gold/60" />
                </div>
                <h2 className="m-0 font-serif text-2xl font-semibold leading-snug text-maroon sm:text-3xl">
                  {isKn ? 'ನಮ್ಮಲ್ಲಿ ಸಿಗುವ ಇತರ ಸೌಲಭ್ಯಗಳು' : 'Specialized Vedic Consultations'}
                </h2>
                <p className="mx-auto mb-6 mt-2 max-w-xl text-sm leading-relaxed text-muted">
                  {isKn
                    ? 'ಜಾತಕ ವಿಮರ್ಶೆ, ಪ್ರಶ್ನಾ ಶಾಸ್ತ್ರ, ವಾಸ್ತು ವಿಮರ್ಶೆ, ಸಂಖ್ಯಾ ಭವಿಷ್ಯ ಹಾಗೂ ಸ್ಥಿರಾಸ್ತಿ ವ್ಯವಹಾರಗಳ ಶುಭ-ಅಶುಭ ನಿರ್ಣಯ ಸೇವೆಗಳು.'
                    : 'Comprehensive consultation in Vedic Astrology, Horary Questioning, Vastu Analysis, Numerology and Property Deals.'}
                </p>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
                  {OTHER_FACILITIES.map((facility) => (
                    <Link
                      key={facility.id}
                      to={`/services/consultations/${facility.id}`}
                      className="group flex min-h-[96px] flex-col items-center justify-center border border-gold/70 bg-white/70 p-3 text-center transition-all duration-250 hover:bg-maroon hover:text-white"
                    >
                      <span className="text-xl text-gold transition-colors group-hover:text-gold-light" aria-hidden="true">
                        {facility.icon}
                      </span>
                      <span className="mt-1 font-serif text-sm font-semibold text-maroon group-hover:text-white leading-tight">
                        {isKn ? facility.category : facility.enCategory}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. ಆರನೆಯದು: ನಮ್ಮ ತರಗತಿಗಳ ಬಗ್ಗೆ ವಿವರಣೆ (Classes & Courses) */}
      <section id="classes-section" className="py-[72px] md:py-[105px] bg-paper border-b border-line">
        <Container>
          <div
            ref={classesRef}
            className={`transition-all duration-700 ${
              isClassesVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-[25px]'
            }`}
          >
            <SectionHeading
              kickerNumber="06"
              kickerLabel={isKn ? 'ಆರನೆಯದು • ಜ್ಞಾನ ಬೋಧನೆ' : 'SIXTH • ACADEMIC COURSES'}
              title={
                <>
                  {isKn ? 'ನಮ್ಮ ತರಗತಿಗಳ' : 'Study Cohorts &'}{' '}
                  <em className="not-italic text-gold-light">
                    {isKn ? 'ಸಂಪೂರ್ಣ ವಿವರಣೆ' : 'Class Offerings'}
                  </em>
                </>
              }
              subtitle={
                isKn
                  ? 'ಚಂದ್ರಶೇಖರ್ ಆದ್ಯ ಅವರಿಂದ ವೈದಿಕ ಜ್ಯೋತಿಷ್ಯ, ವಾಸ್ತು, ವೇದ, ಸಂಖ್ಯಾಶಾಸ್ತ್ರ ಹಾಗೂ ಪ್ರಶ್ನ ಶಾಸ್ತ್ರಗಳ ವ್ಯವಸ್ಥಿತ ತರಗತಿಗಳು.'
                  : 'Structured traditional instruction in Vedic Astrology, Vastu Shastra, Vedas, Numerology and Prashna Shastra.'
              }
            />

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

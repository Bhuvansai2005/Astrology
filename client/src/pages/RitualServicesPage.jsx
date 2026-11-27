import { Link, useParams } from 'react-router-dom';
import { Button, Container, SectionKicker } from '../components/UI';
import { useLanguage } from '../hooks';
import { BUSINESS } from '../config';
import NotFoundPage from './NotFoundPage';

const RITUAL_SERVICES = {
  pooja: {
    title: { en: 'Sacred Pooja Rituals', kn: 'ಪೂಜಾ ವಿಧಿ-ವಿಧಾನಗಳು' },
    countLabel: { en: 'Services', kn: 'ಪ್ರಮುಖ ಪೂಜೆಗಳು' },
    message: 'ಪೂಜಾ ಕಾರ್ಯಕ್ರಮದ ಕುರಿತು ವಿವರಗಳನ್ನು ತಿಳಿಯಲು ಬಯಸುತ್ತೇನೆ.',
    services: [
      'ಗಣಪತಿ ಪೂಜೆ', 'ದೇವಾಲಯ ಪ್ರತಿಷ್ಠಾಪನ ಪೂಜೆ', 'ಗೃಹಪ್ರವೇಶ ಪೂಜೆ', 'ಭೂಮಿ ಪೂಜೆ',
      'ವಾಸ್ತು ಪೂಜೆ', 'ಲಕ್ಷ್ಮಿ ಪೂಜೆ', 'ಶ್ರೀ ಸತ್ಯನಾರಾಯಣ ಪೂಜೆ', 'ಶ್ರೀ ದುರ್ಗಾ ದೀಪನಮಸ್ಕಾರ',
      'ಆಶ್ಲೇಷ ಬಲಿ ಪೂಜೆ', 'ಧನ್ವಂತರಿ ಪೂಜೆ', 'ವನದುರ್ಗ ಪೂಜೆ', 'ನವಗ್ರಹ ಪೂಜೆ',
      'ಗೋ ಪೂಜೆ', 'ರುದ್ರಾಭಿಷೇಕ ಪೂಜೆ',
    ],
  },
  homa: {
    title: { en: 'Vedic Sacred Homas', kn: 'ವೈದಿಕ ಹೋಮಗಳು' },
    countLabel: { en: 'Services', kn: 'ಪ್ರಮುಖ ಹೋಮಗಳು' },
    message: 'ಹೋಮ ಕಾರ್ಯಕ್ರಮದ ಕುರಿತು ವಿವರಗಳನ್ನು ತಿಳಿಯಲು ಬಯಸುತ್ತೇನೆ.',
    services: [
      'ಗಣಪತಿ ಹೋಮ', 'ಸುದರ್ಶನ ಹೋಮ', 'ಚಂಡಿ ಹೋಮ', 'ದುರ್ಗಾ ಹೋಮ',
      'ರುದ್ರ ಹೋಮ', 'ನವಗ್ರಹ ಹೋಮ', 'ವಾಸ್ತು ಹೋಮ', 'ಪ್ರತ್ಯಂಗಿರಾ ಹೋಮ',
      'ಧನ್ವಂತರಿ ಹೋಮ', 'ಅಘೋರ ಹೋಮ',
    ],
  },
  parayana: {
    title: { en: 'Scriptural Parayanas', kn: 'ಪವಿತ್ರ ಪಾರಾಯಣಗಳು' },
    countLabel: { en: 'Services', kn: 'ಪಾರಾಯಣ ಸೇವೆಗಳು' },
    message: 'ಪಾರಾಯಣ ಸೇವೆಗಾಗಿ ವಿವರಗಳನ್ನು ತಿಳಿಯಲು ಬಯಸುತ್ತೇನೆ.',
    services: [
      'ವೇದಪಾರಾಯಣ', 'ಚಂಡಿಪಾರಾಯಣ', 'ರುದ್ರಪಾರಾಯಣ',
      'ಸಹಸ್ರ ನಾಮಪಾರಾಯಣಗಳು', 'ದುರ್ಗಾ ಪಾರಾಯಣ',
    ],
  },
  shanti: {
    title: { en: 'Remedial & Astrological Shantis', kn: 'ಸರ್ವ ಶಾಂತಿ ಪರಿಹಾರ ಕಾರ್ಯಗಳು' },
    countLabel: { en: 'Services', kn: 'ವಿಶೇಷ ಶಾಂತಿಗಳು' },
    message: 'ಶಾಂತಿ ಕಾರ್ಯಕ್ರಮದ ಕುರಿತು ವಿವರಗಳನ್ನು ತಿಳಿಯಲು ಬಯಸುತ್ತೇನೆ.',
    services: [
      'ಗೃಹಪ್ರವೇಶ ಶಾಂತಿ', 'ನವಗ್ರಹ ಶಾಂತಿ', 'ವಿವಾಹ ಪ್ರತಿಬಂಧಕ ಶಾಂತಿ', 'ಬಾಲಾರಿಷ್ಟಶಾಂತಿ',
      'ಸಹಸ್ರ ಚಂದ್ರದರ್ಶನ ಶಾಂತಿ', 'ಉಗ್ರರಥ ಶಾಂತಿ', 'ಷಷ್ಠಿಪೂರ್ತಿ ಶಾಂತಿ', 'ಭೀಮರಥ ಶಾಂತಿ',
      'ಸರ್ಪ ಶಾಂತಿ', 'ನಕ್ಷತ್ರ ಶಾಂತಿ', 'ದಶಾ ಸಂಧಿ ಶಾಂತಿ', 'ಏಕ ನಕ್ಷತ್ರ ಶಾಂತಿ',
      'ಪಂಚಮಾರಿಷ್ಟ ಶಾಂತಿ', 'ಪಂಚಕ ಶಾಂತಿ', 'ಜನನ ದೋಷಗಳಿಗೆ ಶಾಂತಿ ಪೂಜೆಗಳು', 'ಗ್ರಾಮ ಶಾಂತಿ',
      'ಗೃಹಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಸರ್ವಶಾಂತಿಗಳು',
    ],
  },
};

const RITUAL_TABS = [
  { id: 'pooja', en: 'Pooja', kn: 'ಪೂಜೆ' },
  { id: 'homa', en: 'Homa', kn: 'ಹೋಮ' },
  { id: 'parayana', en: 'Parayana', kn: 'ಪಾರಾಯಣ' },
  { id: 'shanti', en: 'Shanti', kn: 'ಶಾಂತಿ' },
];

export default function RitualServicesPage() {
  const { type } = useParams();
  const { lang } = useLanguage();
  const ritual = RITUAL_SERVICES[type];

  if (!ritual) return <NotFoundPage />;

  const isKn = lang === 'kn';

  return (
    <section className="bg-paper py-[72px] md:py-[105px]">
      <Container>
        <SectionKicker
          number="02"
          label={isKn ? 'ವೈದಿಕ ಧಾರ್ಮಿಕ ಸೇವೆಗಳು' : 'VEDIC RITUAL SERVICES'}
        />
        <div className="mb-10 mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="m-0 font-serif text-[clamp(34px,5vw,60px)] font-medium leading-tight text-maroon">
              {ritual.title[isKn ? 'kn' : 'en']}
            </h1>
            <p className="mb-0 mt-3 text-muted">
              {isKn
                ? 'ಶಾಸ್ತ್ರೋಕ್ತವಾಗಿ ನೆರವೇರಿಸಲಾಗುವ ವೈದಿಕ ಸೇವೆಗಳು.'
                : 'Traditional ceremonies conducted with devotion and Vedic practice.'}
            </p>
          </div>
          <Button variant="outline-dark" href="/">
            {isKn ? 'ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ' : 'Back to Home'} <span>←</span>
          </Button>
        </div>

        <nav className="mb-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4" aria-label="Ritual services">
          {RITUAL_TABS.map((tab) => (
            <Link
              key={tab.id}
              to={`/services/rituals/${tab.id}`}
              aria-current={type === tab.id ? 'page' : undefined}
              className={`grid min-h-12 place-items-center border px-3 py-2 font-serif text-base font-semibold transition-colors ${
                type === tab.id
                  ? 'border-maroon bg-maroon text-white'
                  : 'border-gold/70 bg-white/70 text-maroon hover:bg-gold/15'
              }`}
            >
              {isKn ? tab.kn : tab.en}
            </Link>
          ))}
        </nav>

        <div className="mb-6 flex items-center justify-between border-b border-line pb-4">
          <h2 className="m-0 font-serif text-2xl font-semibold text-maroon">
            {ritual.title[isKn ? 'kn' : 'en']}
          </h2>
          <span className="text-xs font-bold uppercase tracking-wider text-gold">
            {ritual.services.length} {ritual.countLabel[isKn ? 'kn' : 'en']}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ritual.services.map((service, index) => (
            <div
              key={service}
              className="flex items-center justify-between gap-3 rounded border border-gold/20 bg-cream p-3.5 transition-colors hover:border-maroon/50"
            >
              <div className="flex items-center gap-2.5">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-maroon/10 text-xs font-bold text-maroon">
                  {index + 1}
                </span>
                <span className="text-sm font-medium text-ink">{service}</span>
              </div>
              <a
                href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(
                  `ನಮಸ್ಕಾರ, ${service} ${ritual.message}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-saffron hover:text-maroon"
                aria-label={`${isKn ? 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ವಿಚಾರಿಸಿ' : 'Enquire on WhatsApp'}: ${service}`}
              >
                ↗
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

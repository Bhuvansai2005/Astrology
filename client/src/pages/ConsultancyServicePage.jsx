import { useParams } from 'react-router-dom';
import { Button, Container, SectionKicker } from '../components/UI';
import { useLanguage } from '../hooks';
import { BUSINESS } from '../config';
import NotFoundPage from './NotFoundPage';

const CONSULTANCY_SERVICES = {
  horoscope: {
    icon: 'ॐ',
    title: { en: 'Horoscope Consultation', kn: 'ಜಾತಕ ವಿಮರ್ಶೆ' },
    items: ['ಜಾತಕ ವಿಮರ್ಶೆ', 'ವಿವಾಹ ಹೊಂದಾಣಿಕೆ ಮುಹೂರ್ತ ನಿರ್ಣಯ', 'ಕಂಪ್ಯೂಟರ್ ಜಾತಕ ತೆಗೆಯುವುದು', 'ಕೈಬರಹರ ಜಾತಕ'],
  },
  prashna: {
    icon: '❂',
    title: { en: 'Prashna Shastra', kn: 'ಪ್ರಶ್ನಾ ಶಾಸ್ತ್ರ' },
    items: ['ಕವಡೆ ಪ್ರಶ್ನೆ', 'ತಾಂಬೂಲ ಪ್ರಶ್ನೆ'],
  },
  vastu: {
    icon: '🏛',
    title: { en: 'Vastu Shastra & Remedies', kn: 'ವಾಸ್ತು ಸೇವೆಗಳು & ಪರಿಹಾರ' },
    items: [
      'ಭೂಪರೀಕ್ಷೆಯಿಂದ ಗ್ರಹಪ್ರವೇಶದವರೆಗೂ ವಾಸ್ತು ರೀತಿ ಆಯ ನಿರ್ಣಯ',
      'ವಾಸ್ತು ಸಲಹೆ ಹಾಗೂ ಪರಿಹಾರಗಳು',
      'ಪಿರಮಿಡ್ ಪರಿಹಾರಗಳು',
    ],
  },
  numerology: {
    icon: '🔢',
    title: { en: 'Numerology Consultations', kn: 'ಸಂಖ್ಯಾ ಭವಿಷ್ಯ' },
    items: ['ಹೆಸರಿನ ಸಂಖ್ಯಾಶಾಸ್ತ್ರ', 'ವಾಹನ ಸಂಖ್ಯಾಶಾಸ್ತ್ರ', 'ಮೊಬೈಲ್ ಸಂಖ್ಯಾಶಾಸ್ತ್ರ', 'ಸಂಖ್ಯಾಶಾಸ್ತ್ರ ರಿಪೋರ್ಟ್'],
  },
  timing: {
    icon: '⚖',
    title: { en: 'Property & Deal Timing', kn: 'ಶುಭ ಹಾಗೂ ಅಶುಭ ನಿರ್ಣಯ' },
    items: ['ಮನೆ ವಾಹನ ಜಮೀನು ಮಾರುವ ಮತ್ತು ಕೊಳ್ಳುವ ವಿಚಾರವಾಗಿ ಶುಭ ಹಾಗೂ ಅಶುಭ ನಿರ್ಣಯ'],
  },
};

export default function ConsultancyServicePage() {
  const { type } = useParams();
  const { lang } = useLanguage();
  const service = CONSULTANCY_SERVICES[type];

  if (!service) return <NotFoundPage />;

  const isKn = lang === 'kn';

  return (
    <section className="bg-paper py-[72px] md:py-[105px]">
      <Container>
        <SectionKicker
          number="04"
          label={isKn ? 'ಸಮಗ್ರ ಸೌಲಭ್ಯಗಳು' : 'EXPERT SERVICES'}
        />
        <div className="mb-10 mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="m-0 font-serif text-[clamp(34px,5vw,60px)] font-medium leading-tight text-maroon">
              {service.title[isKn ? 'kn' : 'en']}
            </h1>
            <p className="mb-0 mt-3 text-muted">
              {isKn
                ? 'ಸಮಾಲೋಚನೆ ಮತ್ತು ಸೇವೆಗಳ ಸಂಪೂರ್ಣ ವಿವರಗಳು.'
                : 'View the services available in this consultation area.'}
            </p>
          </div>
          <Button variant="outline-dark" href="/">
            {isKn ? 'ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ' : 'Back to Home'} <span>←</span>
          </Button>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {service.items.map((item, index) => (
            <div key={item} className="flex items-start gap-3 border border-line bg-white p-5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cream text-maroon">
                {index + 1}
              </span>
              <p className="m-0 pt-1 text-sm leading-relaxed text-ink">{item}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 bg-maroon px-6 py-5 text-center text-white sm:flex-row sm:text-left">
          <div>
            <p className="m-0 text-xs font-semibold uppercase tracking-wider text-gold-light">
              {isKn ? 'ಸಮಾಲೋಚನೆಗಾಗಿ ಸಂಪರ್ಕಿಸಿ' : 'CONSULTATION ENQUIRIES'}
            </p>
            <p className="mb-0 mt-1 text-sm text-white/85">
              {service.title[isKn ? 'kn' : 'en']}
            </p>
          </div>
          <a
            href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(
              `ನಮಸ್ಕಾರ, ${service.title.kn} ಕುರಿತು ಸಮಾಲೋಚನೆಗಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತಿದ್ದೇನೆ.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/60 px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-white hover:text-maroon"
          >
            {isKn ? 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ವಿಚಾರಿಸಿ' : 'Enquire on WhatsApp'} <span>↗</span>
          </a>
        </div>
      </Container>
    </section>
  );
}

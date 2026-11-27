import { Button, Container, SectionKicker } from '../components/UI';
import { useLanguage } from '../hooks';
import { BUSINESS } from '../config';

const YANTRAS = [
  { name: 'ವಾಸ್ತು ಯಂತ್ರ', enName: 'Vastu Yantra', desc: 'ಗೃಹ ಮತ್ತು ಕಚೇರಿಯ ವಾಸ್ತು ದೋಷ ನಿವಾರಣೆ ಹಾಗೂ ಸಕಾರಾತ್ಮಕ ಶಕ್ತಿಯ ಸಂಚಾರಕ್ಕಾಗಿ.' },
  { name: 'ಮತ್ಸ್ಯ ಯಂತ್ರ', enName: 'Matsya Yantra', desc: 'ವಾಸ್ತು ದೋಷ ನಿವಾರಣೆ, ಸಂಪತ್ತು, ಶಾಂತಿ ಹಾಗೂ ಸಮೃದ್ಧಿಯ ಆಗಮನಕ್ಕೆ.' },
  { name: 'ಗೃಹ ದಿಗ್ಬಂಧನ ಯಂತ್ರ', enName: 'Griha Digbandhana Yantra', desc: 'ಮನೆಗೆ ಕೆಟ್ಟ ದೃಷ್ಟಿ ಹಾಗೂ ನಕಾರಾತ್ಮಕ ಶಕ್ತಿಗಳು ಬರದಂತೆ ರಕ್ಷಣೆ ನೀಡಲು.' },
  { name: 'ವ್ಯಾಪಾರ ಅಭಿವೃದ್ಧಿ ಯಂತ್ರ', enName: 'Vyapara Abhivrudhi Yantra', desc: 'ವ್ಯಾಪಾರ-ವ್ಯವಹಾರಗಳಲ್ಲಿ ಲಾಭ, ಆಕರ್ಷಣೆ ಹಾಗೂ ಪ್ರಗತಿಗಾಗಿ.' },
  { name: 'ಪ್ರತ್ಯಂಗಿರಾ ಯಂತ್ರ', enName: 'Pratyangira Yantra', desc: 'ಶತ್ರು ಬಾಧೆ, ತಂತ್ರ ಬಾಧೆ ಹಾಗೂ ತೀವ್ರ ದೋಷಗಳ ನಿವಾರಣೆಗೆ ರಕ್ಷಣಾ ಕವಚ.' },
  { name: 'ಸರ್ವ ರಕ್ಷಾ ಯಂತ್ರ', enName: 'Sarva Raksha Yantra', desc: 'ಸಮಸ್ತ ಆಪತ್ತು ಹಾಗೂ ನಕಾರಾತ್ಮಕ ಪ್ರಭಾವಗಳಿಂದ ರಕ್ಷಣೆ ನೀಡುವ ಸಿದ್ಧ ಯಂತ್ರ.' },
  { name: 'ದುರ್ಗಾ ಯಂತ್ರ', enName: 'Durga Yantra', desc: 'ಆತ್ಮವಿಶ್ವಾಸ ವೃದ್ಧಿ, ಭಕ್ತಿ ಹಾಗೂ ದುರ್ಗಾ ದೇವಿಯ ದಿವ್ಯ ಅನುಗ್ರಹಕ್ಕಾಗಿ.' },
  { name: 'ಗಣಪತಿ ಯಂತ್ರ', enName: 'Ganapati Yantra', desc: 'ಕಾರ್ಯ ವಿಘ್ನ ನಿವಾರಣೆ, ವಿದ್ಯೆ, ಬುದ್ಧಿ ಹಾಗೂ ಸಕಲ ಸಿದ್ಧಿಗಾಗಿ.' },
  { name: 'ಸರ್ವ ಆಕರ್ಷಣ ಯಂತ್ರ', enName: 'Sarva Aakarshana Yantra', desc: 'ಜನ ಪ್ರಿಯತೆ, ಕಾರ್ಯ ಸಫಲತೆ ಹಾಗೂ ಸೌಹಾರ್ದಯುತ ವಾತಾವರಣಕ್ಕೆ.' },
  { name: 'ದೃಷ್ಟಿ ದೋಷ ನಿವಾರಣ ಯಂತ್ರ', enName: 'Drishti Dosha Nivarana Yantra', desc: 'ಕೆಟ್ಟ ಕಣ್ಣು ದೃಷ್ಟಿ, ನರದೃಷ್ಟಿ ಹಾಗೂ ಅನಿಷ್ಟಗಳ ಪರಿಹಾರಕ್ಕಾಗಿ.' },
];

export default function YantrasPage() {
  const { lang } = useLanguage();
  const isKn = lang === 'kn';

  return (
    <section className="bg-paper py-[72px] md:py-[105px]">
      <Container>
        <SectionKicker
          number="03"
          label={isKn ? 'ಸಿದ್ಧ ಯಂತ್ರಗಳು' : 'SACRED YANTRAS'}
        />
        <div className="mb-10 mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="m-0 font-serif text-[clamp(34px,5vw,60px)] font-medium leading-tight text-maroon">
              {isKn ? 'ಸಿದ್ಧ ಹಾಗೂ ಪ್ರಭಾವಿ ಯಂತ್ರಗಳು' : 'Consecrated Sacred Yantras'}
            </h1>
            <p className="mb-0 mt-3 max-w-2xl text-muted">
              {isKn
                ? 'ಸಂಪೂರ್ಣ ಶಾಸ್ತ್ರೋಕ್ತವಾಗಿ ಮಂತ್ರ ಪೂಜಿತಗೊಳಿಸಿ ನೀಡಲಾಗುವ ಸಿದ್ಧ ಯಂತ್ರಗಳು.'
                : 'Authenticated, energized sacred yantras customized to traditional Vedic geometry and rituals.'}
            </p>
          </div>
          <Button variant="outline-dark" href="/">
            {isKn ? 'ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ' : 'Back to Home'} <span>←</span>
          </Button>
        </div>

        <div className="mx-auto mb-10 max-w-2xl rounded border-2 border-amber-300 bg-amber-50 p-4 text-center">
          <p className="m-0 text-sm font-bold text-amber-900">
            {isKn
              ? 'ಸೂಚನೆ: ಯಂತ್ರಗಳು ಆರ್ಡರ್ ಮಾಡಿದ 15 ದಿನಗಳ ನಂತರ ಸಿದ್ಧವಾಗುತ್ತವೆ.'
              : 'Notice: Yantras are prepared and available 15 days after placing an order.'}
          </p>
          <p className="mb-0 mt-1 text-xs text-amber-700">
            {isKn
              ? 'ಪ್ರತಿ ಯಂತ್ರವನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಮಂತ್ರಾನುಷ್ಠಾನದೊಂದಿಗೆ ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತದೆ.'
              : 'Each yantra is individually prepared with traditional mantra anushthana.'}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {YANTRAS.map((yantra, index) => (
            <article
              key={yantra.enName}
              className="flex flex-col justify-between rounded border border-line bg-white p-5 transition-shadow hover:shadow-card-hover md:p-6"
            >
              <div>
                <div className="mb-2 flex items-start justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gold">
                    YANTRA {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-900">
                    15 days
                  </span>
                </div>
                <h2 className="mb-1 font-serif text-xl font-semibold text-maroon">{yantra.name}</h2>
                <p className="mb-3 text-xs font-medium tracking-wide text-gold-rich">{yantra.enName}</p>
                <p className="mb-5 text-xs leading-relaxed text-muted">{yantra.desc}</p>
              </div>
              <div className="flex items-center justify-between border-t border-line pt-3">
                <span className="text-[11px] text-ink-soft">
                  {isKn ? 'ಸಿದ್ಧಪಡಿಸಿ ಪೂರೈಕೆ' : 'Consecrated upon order'}
                </span>
                <a
                  href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(
                    `ನಮಸ್ಕಾರ, ನನಗೆ "${yantra.name}" (${yantra.enName}) ಯಂತ್ರದ ಕುರಿತು ಮಾಹಿತಿ ಮತ್ತು ನೋಂದಣಿ ಬೇಕಾಗಿದೆ.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded bg-maroon px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-maroon-dark"
                >
                  {isKn ? 'ವಿಚಾರಿಸಿ' : 'Enquire'} <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

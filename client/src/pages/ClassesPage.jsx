import { Button, Container, SectionKicker } from '../components/UI';
import { WhatsAppIcon } from '../components/SocialIcons';
import { useLanguage } from '../hooks';
import { BUSINESS } from '../config';

export default function ClassesPage() {
  const { t } = useLanguage();
  const cp = t.classesPage;

  return (
    <div className="py-[72px] md:py-[105px] bg-paper">
      <Container>
        <div className="mb-12">
          <SectionKicker number={cp.kickerNumber} label={cp.kickerLabel} />
          <h1 className="font-serif font-medium text-[clamp(34px,5vw,60px)] leading-[1.1] text-maroon mt-3 mb-4">
            {cp.title}
          </h1>
          <p className="text-muted text-base max-w-[700px] leading-relaxed">{cp.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cp.courses.map((course, idx) => (
            <div
              key={course.title}
              className="bg-white border border-line p-6 md:p-8 flex flex-col justify-between hover:shadow-card-hover transition-all duration-300 rounded-sm"
            >
              <div>
                <small className="block text-xs tracking-wider text-gold font-bold uppercase mb-2">
                  {cp.prefix}{idx + 1}
                </small>
                <h2 className="font-serif font-semibold text-xl md:text-2xl text-maroon mb-4 leading-snug">
                  {course.title}
                </h2>
              </div>

              <div className="pt-4 border-t border-line mt-6">
                <Button
                  variant="outline-dark"
                  href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(
                    `ನಮಸ್ಕಾರ, ${course.title} ಪ್ರವೇಶಾತಿ ಹಾಗೂ ವಿವರಗಳನ್ನು ತಿಳಿಯಲು ಬಯಸುತ್ತೇನೆ.`
                  )}`}
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>{cp.ctaBtn}</span>
                  <span>↗</span>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-cream border border-line p-8 md:p-10 text-center rounded-sm">
          <span className="mx-auto mb-2 block font-serif text-3xl text-gold select-none leading-none" aria-hidden="true">
            ॐ
          </span>
          <h2 className="font-serif font-medium text-2xl text-maroon mb-2">{cp.bannerTitle}</h2>
          <p className="text-muted text-sm max-w-xl mx-auto leading-relaxed mb-6">{cp.bannerDesc}</p>
          <Button variant="primary" href={BUSINESS.whatsapp} className="inline-flex items-center gap-2">
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>{cp.bannerBtn}</span>
            <span>↗</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}


import { Button, Container, SectionKicker } from '../components/UI';
import { useLanguage } from '../hooks';
import { BUSINESS, HERO_IMAGES } from '../config';

export default function AboutPage() {
  const { t } = useLanguage();
  const ap = t.aboutPage;

  return (
    <div className="py-[72px] md:py-[105px] bg-paper">
      <Container>
        <div className="mb-12">
          <SectionKicker number={ap.kickerNumber} label={ap.kickerLabel} />
          <h1 className="font-serif font-medium text-[clamp(34px,5vw,65px)] leading-[1.1] text-maroon mt-3 mb-4">
            {ap.title}
          </h1>
          <p className="text-muted text-[17px] max-w-[700px] leading-relaxed">{ap.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {ap.centres.map((c) => (
            <div
              key={c.title}
              className="bg-white border border-line p-8 md:p-10 flex flex-col justify-between shadow-sm"
            >
              <div>
                <span className="text-gold text-2xl mb-3 block">ॐ</span>
                <h2 className="font-serif font-semibold text-2xl text-maroon mb-1">{c.title}</h2>
                <small className="block text-[10px] tracking-[0.2em] text-gold font-bold uppercase mb-4">
                  {c.tag}
                </small>
                <p className="text-muted text-[15px] leading-relaxed mb-6">{c.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-cream border border-line p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-center">
            <div
              className="min-h-[360px] md:min-h-[420px] bg-maroon-dark bg-cover bg-center rounded-sm relative"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(49,20,17,.6), transparent 50%), url(${HERO_IMAGES.about})`,
              }}
            >
              <div className="absolute bottom-5 left-5 text-white">
                <span className="font-serif text-xl block">{ap.scholarName}</span>
                <small className="text-[10px] tracking-[0.18em] text-gold uppercase">
                  {ap.scholarRoleLabel}
                </small>
              </div>
            </div>

            <div>
              <SectionKicker number={ap.scholarKickerNum} label={ap.scholarRoleLabel} />
              <h2 className="font-serif font-medium text-[32px] md:text-[40px] text-maroon mt-2 mb-4">
                {ap.scholarName}
              </h2>
              <p className="text-muted text-[15px] leading-relaxed mb-6">{ap.scholarBio}</p>

              <h3 className="text-maroon font-serif font-medium text-lg mb-3">
                {ap.qualificationsHeading}
              </h3>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {ap.qualifications.map((cred) => (
                  <span
                    key={cred}
                    className="inline-flex items-center px-3.5 py-1.5 bg-white border border-line text-maroon text-[12px] font-semibold tracking-wide"
                  >
                    ✦ {cred}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap">
                <Button variant="primary" href={BUSINESS.whatsapp}>
                  {ap.contactBtn} <span>↗</span>
                </Button>
                <Button variant="outline-dark" href="/contact">
                  {t.nav.contact}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}


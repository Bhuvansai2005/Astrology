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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {cp.courses.map((course, idx) => (
            <div
              key={course.title}
              className="bg-white border border-line p-6 md:p-8 flex flex-col justify-between hover:shadow-card-hover transition-all duration-300 rounded-sm"
            >
              <div>
                <small className="block text-xs tracking-wider text-gold font-bold uppercase mb-2">
                  {cp.prefix} {idx + 1}
                </small>
                <h2 className="font-serif font-semibold text-2xl text-maroon mb-4">
                  {course.title}
                </h2>

                <div className="flex flex-wrap gap-4 text-xs text-muted mb-4 pb-4 border-b border-line">
                  <span>
                    <strong className="text-ink">{cp.durationLabel}</strong> {course.duration}
                  </span>
                  <span>
                    <strong className="text-ink">{cp.modeLabel}</strong> {course.mode}
                  </span>
                </div>

                <h3 className="text-xs uppercase tracking-wider font-bold text-maroon mb-3">
                  {cp.topicsHeading}
                </h3>
                <ul className="space-y-2 text-sm text-ink-soft mb-6">
                  {course.syllabus.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="text-gold shrink-0 mt-0.5">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-line">
                <Button
                  variant="outline-dark"
                  href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(course.title)}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2"
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
          <span className="text-3xl font-serif text-gold block mb-2">ॐ</span>
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


import { Button, Container, SectionKicker } from '../components/UI';
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
          <p className="text-muted text-[16px] max-w-[700px] leading-relaxed">{cp.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {cp.courses.map((course, idx) => (
            <div
              key={course.title}
              className="bg-white border border-line p-6 md:p-8 flex flex-col justify-between hover:shadow-card-hover transition-all duration-300"
            >
              <div>
                <small className="block text-[9px] tracking-[0.18em] text-gold font-bold uppercase mb-2">
                  {cp.prefix}
                  {idx + 1}
                </small>
                <h2 className="font-serif font-semibold text-2xl text-maroon mb-4">
                  {course.title}
                </h2>

                <div className="flex flex-wrap gap-4 text-xs text-muted mb-4 pb-4 border-b border-line">
                  <span>
                    <strong>{cp.durationLabel}</strong> {course.duration}
                  </span>
                  <span>
                    <strong>{cp.modeLabel}</strong> {course.mode}
                  </span>
                </div>

                <h3 className="text-xs uppercase tracking-wider font-bold text-maroon mb-2">
                  {cp.topicsHeading}
                </h3>
                <ul className="space-y-1.5 text-xs text-muted mb-6">
                  {course.syllabus.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-gold">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-line">
                <a
                  href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(course.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-saffron text-xs font-bold hover:underline flex items-center gap-1"
                >
                  {cp.ctaBtn} <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-cream border border-line p-8 md:p-10 text-center">
          <span className="text-3xl font-serif text-gold block mb-2">ॐ</span>
          <h2 className="font-serif font-medium text-2xl text-maroon mb-2">{cp.bannerTitle}</h2>
          <p className="text-muted text-sm max-w-xl mx-auto leading-relaxed mb-6">{cp.bannerDesc}</p>
          <Button variant="primary" href={BUSINESS.whatsapp}>
            {cp.bannerBtn} <span>↗</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}


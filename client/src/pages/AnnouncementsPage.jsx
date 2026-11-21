import { Button, Container, SectionKicker } from '../components/UI';
import { useLanguage } from '../hooks';
import { BUSINESS } from '../config';

export default function AnnouncementsPage() {
  const { t } = useLanguage();
  const ap = t.announcementsPage;

  return (
    <div className="py-[72px] md:py-[105px] bg-paper">
      <Container>
        <div className="mb-12">
          <SectionKicker number={ap.kickerNumber} label={ap.kickerLabel} />
          <h1 className="font-serif font-medium text-[clamp(34px,5vw,60px)] leading-[1.1] text-maroon mt-3 mb-4">
            {ap.title}
          </h1>
          <p className="text-muted text-[16px] max-w-[700px] leading-relaxed">{ap.subtitle}</p>
        </div>

        <div className="space-y-6 max-w-4xl mb-16">
          {ap.items.map((a) => (
            <article
              key={a.id}
              className="bg-white border border-line p-6 md:p-8 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                <span className="inline-block px-2.5 py-0.5 bg-cream border border-gold text-maroon text-[10px] font-bold tracking-wider uppercase">
                  {a.tag}
                </span>
                <span className="text-xs text-muted font-medium">{a.date}</span>
              </div>

              <h2 className="font-serif font-semibold text-2xl text-maroon mb-3">{a.title}</h2>
              <p className="text-muted text-sm leading-relaxed mb-6">{a.content}</p>

              <div className="pt-4 border-t border-line flex justify-end">
                <a
                  href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(a.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-saffron text-xs font-bold hover:underline"
                >
                  {ap.contactBtn}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="bg-cream border border-line p-8 text-center max-w-4xl">
          <span className="text-3xl font-serif text-gold block mb-2">✦</span>
          <h2 className="font-serif font-medium text-xl md:text-2xl text-maroon mb-2">
            {ap.bannerTitle}
          </h2>
          <p className="text-muted text-sm max-w-xl mx-auto mb-6">{ap.bannerDesc}</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button variant="primary" href={BUSINESS.whatsappGroup}>
              {ap.whatsappBtn} <span>↗</span>
            </Button>
            <Button variant="outline-dark" href={BUSINESS.telegram}>
              {ap.telegramBtn} <span>↗</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}


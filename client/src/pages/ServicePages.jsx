import { Button, Container, SectionKicker } from '../components/UI';
import { useLanguage } from '../hooks';
import { BUSINESS } from '../config';

function ServiceGridPage({
  page,
  prefix,
  modeLabel,
  bannerTitle,
  bannerDesc,
  bannerBtn,
  gridClass = 'grid-cols-1 md:grid-cols-2',
  compactCard = false,
  splitBanner = false,
}) {
  return (
    <div className="py-[72px] md:py-[105px] bg-paper">
      <Container>
        <div className="mb-12">
          <SectionKicker number={page.kickerNumber} label={page.kickerLabel} />
          <h1 className="font-serif font-medium text-[clamp(34px,5vw,60px)] leading-[1.1] text-maroon mt-3 mb-4">
            {page.title}
          </h1>
          <p className="text-muted text-[16px] max-w-[700px] leading-relaxed">{page.subtitle}</p>
        </div>

        <div className={`grid ${gridClass} gap-6 mb-16`}>
          {page.services.map((s, idx) => (
            <div
              key={s.title}
              className="bg-white border border-line p-6 md:p-8 flex flex-col justify-between hover:shadow-card-hover transition-all duration-300"
            >
              <div>
                <small className="block text-[9px] tracking-[0.18em] text-gold font-bold uppercase mb-2">
                  {prefix}
                  {idx + 1}
                </small>
                <h2
                  className={`font-serif font-semibold ${
                    compactCard ? 'text-xl' : 'text-2xl'
                  } text-maroon mb-3`}
                >
                  {s.title}
                </h2>
                <p
                  className={`text-muted ${
                    compactCard ? 'text-xs' : 'text-sm'
                  } leading-relaxed mb-6`}
                >
                  {s.description}
                </p>
              </div>
              <div
                className={`pt-4 border-t border-line ${
                  modeLabel ? 'flex justify-between items-center' : ''
                }`}
              >
                {modeLabel && <span className="text-xs text-muted font-medium">{modeLabel}</span>}
                <a
                  href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(s.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-saffron text-xs font-bold hover:underline inline-flex items-center gap-1"
                >
                  {page.ctaBtn} <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {splitBanner ? (
          <div className="bg-cream border border-line p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="font-serif font-medium text-2xl text-maroon mb-2">{bannerTitle}</h2>
              <p className="text-muted text-sm max-w-xl leading-relaxed m-0">{bannerDesc}</p>
            </div>
            <Button variant="primary" href={BUSINESS.whatsapp}>
              {bannerBtn} <span>↗</span>
            </Button>
          </div>
        ) : (
          <div className="bg-cream border border-line p-8 md:p-10 text-center">
            <span className="text-3xl font-serif text-gold block mb-2">ॐ</span>
            <h2 className="font-serif font-medium text-2xl md:text-3xl text-maroon mb-3">
              {bannerTitle}
            </h2>
            <p className="text-muted text-sm max-w-2xl mx-auto leading-relaxed mb-6">
              {bannerDesc}
            </p>
            <Button variant="primary" href={BUSINESS.whatsapp}>
              {bannerBtn} <span>↗</span>
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
}

export function AstrologyServicesPage() {
  const { t } = useLanguage();
  const ap = t.astrologyPage;
  return (
    <ServiceGridPage
      page={ap}
      prefix={ap.servicePrefix}
      modeLabel={ap.modeLabel}
      bannerTitle={ap.processTitle}
      bannerDesc={ap.processDesc}
      bannerBtn={ap.processBtn}
    />
  );
}

export function VastuServicesPage() {
  const { t } = useLanguage();
  const vp = t.vastuPage;
  return (
    <ServiceGridPage
      page={vp}
      prefix={vp.prefix}
      modeLabel={vp.modeLabel}
      bannerTitle={vp.bannerTitle}
      bannerDesc={vp.bannerDesc}
      bannerBtn={vp.bannerBtn}
      splitBanner
    />
  );
}

export function OtherServicesPage() {
  const { t } = useLanguage();
  const op = t.otherServicesPage;
  return (
    <ServiceGridPage
      page={op}
      prefix={op.prefix}
      bannerTitle={op.noteTitle}
      bannerDesc={op.noteDesc}
      bannerBtn={op.noteBtn}
      gridClass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      compactCard
    />
  );
}


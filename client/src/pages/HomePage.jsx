import {
  Button,
  CategoryCard,
  Container,
  SectionHeading,
  SectionKicker,
} from '../components/UI';
import { useCart, useLanguage, useRevealOnScroll } from '../hooks';
import { BUSINESS, CATALOG_ITEMS, HERO_IMAGES } from '../config';

export default function HomePage() {
  const { t } = useLanguage();
  const { addToCart } = useCart();

  const [catHeadingRef, isCatVisible] = useRevealOnScroll(0.12);
  const [ctaRef, isCtaVisible] = useRevealOnScroll(0.05);

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
              <Button variant="outline" href={BUSINESS.whatsapp}>
                <span className="text-sm">◉</span> {t.hero.whatsappBtn}
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

      {/* Intro Section */}
      <section className="bg-cream py-[72px] md:py-[105px]">
        <Container className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-5 md:gap-[35px] lg:gap-[90px] items-start">
          <SectionKicker number={t.intro.kickerNumber} label={t.intro.kickerLabel} />
          <div>
            <h2 className="font-serif font-medium text-[clamp(34px,4vw,55px)] leading-[1.2] text-maroon m-0 mb-[18px]">
              {t.intro.title1} <em className="not-italic text-gold-light">{t.intro.title2}</em>
            </h2>
            <p className="max-w-[540px] text-muted text-[16px] m-0 leading-relaxed">
              {t.intro.description}
            </p>
            <Button variant="outline-dark" href="/about" className="mt-6">
              {t.intro.aboutBtn} <span>→</span>
            </Button>
          </div>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="py-[72px] md:py-[105px]">
        <Container>
          <div
            ref={catHeadingRef}
            className={`transition-all duration-700 ${isCatVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-[25px]'
              }`}
          >
            <SectionHeading
              kickerNumber={t.categories.kickerNumber}
              kickerLabel={t.categories.kickerLabel}
              title={
                <>
                  {t.categories.title1}{' '}
                  <em className="not-italic text-gold-light">{t.categories.title2}</em>
                </>
              }
              subtitle={t.categories.subtitle}
            />
          </div>

          {CATALOG_ITEMS.length === 0 ? (
            <div className="text-center py-12 px-4 bg-white border border-line">
              <p className="text-muted font-serif text-base m-0">
                {t.categories.emptyState || 'Book catalogue is being updated with new titles. Please check back shortly.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-[18px]">
              {CATALOG_ITEMS.slice(0, 8).map((cat) => {
                const bookInfo = t.bookDetailsPage?.books?.[cat.id] || {};
                return (
                  <CategoryCard
                    key={cat.id}
                    id={cat.id}
                    title={bookInfo.title || cat.title}
                    description={bookInfo.description || cat.description}
                    price={cat.price}
                    imageUrl={cat.imageUrl}
                    onAddToCart={addToCart}
                  />
                );
              })}
            </div>
          )}

          <div className="text-center mt-12">
            <Button variant="outline-dark" href="/books">
              {t.categories.viewCatalogueBtn} <span>→</span>
            </Button>
          </div>
        </Container>
      </section>

      {/* Catalogue CTA */}
      <section className="bg-maroon py-[72px] md:py-[105px]">
        <Container>
          <div
            ref={ctaRef}
            className={`grid grid-cols-[60px_1fr] md:grid-cols-[90px_1fr_auto] items-center gap-[18px] md:gap-7 text-white transition-all duration-700 ${isCtaVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-[25px]'
              }`}
          >
            <div className="w-[58px] h-[58px] md:w-[75px] md:h-[75px] border border-gold-border rounded-full grid place-items-center font-serif text-[28px] md:text-[36px] text-[#d7ac6e] shrink-0">
              ॐ
            </div>

            <div>
              <div className="text-[10px] tracking-[0.2em] font-bold text-gold-pale uppercase flex items-center gap-[10px]">
                <span>{t.catalogueCTA.kickerNumber}</span>
                <span className="inline-block w-[34px] h-[1px] bg-current" aria-hidden="true" />
                <span>{t.catalogueCTA.kickerLabel}</span>
              </div>
              <h2 className="font-serif font-medium text-[clamp(28px,3.5vw,46px)] leading-[1.2] text-white m-0 mt-4 mb-2">
                {t.catalogueCTA.title1}{' '}
                <em className="not-italic text-gold-light">{t.catalogueCTA.title2}</em>
              </h2>
              <p className="text-[#dfcec1] m-0 text-sm md:text-base">{t.catalogueCTA.description}</p>
            </div>

            <div className="col-span-2 md:col-span-1 flex gap-3 flex-wrap justify-start md:justify-end mt-2 md:mt-0">
              <Button variant="light" href="/books">
                {t.catalogueCTA.browseBtn} <span>→</span>
              </Button>
              <Button variant="outline" href={BUSINESS.whatsappCatalogue}>
                {t.catalogueCTA.whatsappBtn} <span>↗</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}


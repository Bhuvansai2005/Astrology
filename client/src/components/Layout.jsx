import { Outlet } from 'react-router-dom';
import Header, { TopStrip } from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { BackToTop, Button, CommunityCard, Container, SectionKicker } from './UI';
import { useCart, useLanguage, useRevealOnScroll } from '../hooks';
import { BUSINESS, HERO_IMAGES } from '../config';

export function FloatingCartButton() {
  const { totalItems, openCart, isCartOpen } = useCart();
  const { t } = useLanguage();

  if (isCartOpen) return null;

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={t.nav.cart || 'Cart'}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-maroon hover:bg-maroon-dark text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-[0_6px_22px_rgba(49,17,17,0.4)] border-2 border-gold/70 cursor-pointer active:scale-95 transition-all duration-200 group"
    >
      <div className="relative flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:scale-110 transition-transform"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>

        {totalItems > 0 && (
          <span className="absolute -top-2.5 -right-3 min-w-[20px] h-[20px] px-1 rounded-full bg-saffron text-white text-[11px] font-bold flex items-center justify-center shadow-xs">
            {totalItems}
          </span>
        )}
      </div>

      <span className="hidden sm:inline font-semibold text-xs tracking-wide">
        {t.nav.cart}
      </span>
      {totalItems > 0 && (
        <span className="hidden sm:inline text-gold-light text-xs font-bold">
          ({totalItems})
        </span>
      )}
    </button>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink font-sans">
      <TopStrip />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <FloatingCartButton />
      <BackToTop />
    </div>
  );
}

export function CommunitySection() {
  const { t } = useLanguage();

  return (
    <section className="bg-cream-warm py-[72px] md:py-[105px]">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <CommunityCard
          icon="◉"
          badge={t.communities.whatsappBadge}
          title={t.communities.whatsappTitle}
          description={t.communities.whatsappDesc}
          linkText={t.communities.whatsappBtn}
          href={BUSINESS.whatsappGroup}
          variant="whatsapp"
        />
        <CommunityCard
          icon="➤"
          badge={t.communities.telegramBadge}
          title={t.communities.telegramTitle}
          description={t.communities.telegramDesc}
          linkText={t.communities.telegramBtn}
          href={BUSINESS.telegram}
          variant="telegram"
        />
      </Container>
    </section>
  );
}

export function LocationSection() {
  const [ref, isVisible] = useRevealOnScroll(0.05);
  const { t } = useLanguage();

  return (
    <section id="location" className="bg-cream py-[72px] md:py-[105px]">
      <Container>
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 min-h-[340px] bg-white transition-all duration-700 ${
            isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-[25px]'
          }`}
        >
          <div
            className="min-h-[280px] md:min-h-full bg-maroon-dark flex items-center justify-center flex-col gap-[14px] text-white text-center p-6 bg-cover bg-center font-serif text-[26px]"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(62,23,20,.75), rgba(62,23,20,.25)), url(${HERO_IMAGES.location})`,
            }}
          >
            <span className="font-serif text-[45px] text-gold-rich leading-none">⌖</span>
            <div className="leading-snug">
              {t.location.visualText1}
              <br />
              <em className="not-italic text-gold-light">{t.location.visualText2}</em>
            </div>
          </div>

          <div className="p-[35px_25px] md:p-[55px] flex flex-col justify-center">
            <SectionKicker number={t.location.kickerNumber} label={t.location.kickerLabel} />
            <h2 className="font-serif font-medium text-[clamp(34px,4vw,55px)] leading-[1.2] text-maroon m-0 mt-[18px] mb-2">
              {t.location.title}
            </h2>
            <p className="text-muted text-[15px] mb-[25px] leading-relaxed">
              {t.location.description}
            </p>
            <div>
              <Button variant="primary" href={BUSINESS.googleMaps}>
                {t.location.directionsBtn} <span>↗</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from './UI';
import { useLanguage } from '../hooks';
import { BUSINESS } from '../config';

export function Brand({ variant = 'default', className = '' }) {
  const isLight = variant === 'light';
  const { t } = useLanguage();

  return (
    <Link
      to="/"
      aria-label="Adya Jyothirvijnana Samshodhana Kendra and Adya Pustaka Bhandara home"
      className={`inline-flex items-center gap-2.5 sm:gap-3 select-none shrink-0 ${
        isLight ? 'text-footer-brand' : 'text-maroon'
      } ${className}`}
    >
      <img
        src="/images/brand/adya-logo.jpeg"
        alt=""
        className="w-[68px] h-[46px] sm:w-[72px] sm:h-[48px] object-contain rounded-sm shrink-0 bg-[#fff9eb]"
      />
      <span className="max-w-[215px] sm:max-w-[260px] xl:max-w-[320px]">
        <strong
          className={`block font-serif font-semibold leading-[1.2] ${
            isLight ? 'text-[16px] md:text-[18px]' : 'text-[12px] sm:text-[13px] xl:text-[14px]'
          }`}
        >
          {t.brand.title}
        </strong>
        <small
          className={`block text-[8.5px] sm:text-[9px] tracking-[0.14em] mt-[3px] font-sans font-normal uppercase ${
            isLight ? 'text-footer-text' : 'text-muted'
          }`}
        >
          {t.brand.subtitle}
        </small>
      </span>
    </Link>
  );
}

export function TopStrip() {
  const { openLanguageModal, t } = useLanguage();

  return (
    <div className="bg-maroon-dark text-strip-text text-[9px] md:text-[11px] tracking-[0.08em] uppercase">
      <Container className="flex justify-between items-center py-2">
        <span className="max-w-[60%] md:max-w-none truncate md:overflow-visible">
          {t.topStrip.tagline}
        </span>

        <div className="flex items-center gap-4 shrink-0">
          <a href={BUSINESS.phoneLinks[0]} className="text-strip-link font-medium hover:underline">
            {BUSINESS.phone[0]}
          </a>

          <button
            type="button"
            onClick={openLanguageModal}
            className="px-2.5 py-0.5 border border-gold text-gold-light hover:bg-gold hover:text-maroon-dark font-bold text-[10px] tracking-wider transition-colors rounded-xs cursor-pointer flex items-center gap-1"
            title="Choose language / ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ"
          >
            <span className="text-xs">🌐</span>
            <span>{t.topStrip.langToggle}</span>
          </button>
        </div>
      </Container>
    </div>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setIsOpen(false);
      setServicesOpen(false);
    });
    return () => cancelAnimationFrame(raf);
  }, [location.pathname]);

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.catalogue, href: '/books' },
    {
      label: t.nav.services,
      isDropdown: true,
      children: [
        { label: t.nav.servicesDropdown.astrology, href: '/services/astrology' },
        { label: t.nav.servicesDropdown.vastu, href: '/services/vastu' },
        { label: t.nav.servicesDropdown.religious, href: '/services/other' },
      ],
    },
    { label: t.nav.classes, href: '/classes' },
    { label: t.nav.announcements, href: '/announcements' },
    { label: t.nav.contact, href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[rgba(251,249,244,0.96)] border-b border-line backdrop-blur-[14px]">
      <Container className="flex items-center justify-between gap-6 min-h-[70px] md:min-h-[82px] relative">
        <Brand />

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="lg:hidden bg-transparent border-0 p-2 cursor-pointer shrink-0 text-maroon ml-auto"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isOpen}
        >
          <span className="block w-6 h-[2px] bg-maroon my-[5px] transition-all" />
          <span className="block w-6 h-[2px] bg-maroon my-[5px] transition-all" />
          <span className="block w-6 h-[2px] bg-maroon my-[5px] transition-all" />
        </button>

        <nav
          aria-label="Main navigation"
          className={`
            ${isOpen ? 'flex' : 'hidden'} lg:flex
            max-lg:absolute max-lg:top-[70px] max-lg:left-0 max-lg:right-0
            max-lg:p-5 max-lg:bg-paper max-lg:border-b max-lg:border-line
            max-lg:flex-col max-lg:items-stretch max-lg:gap-1 max-lg:shadow-[0_10px_20px_rgba(0,0,0,0.08)]
            lg:items-center lg:gap-[18px] xl:gap-[26px] text-[12px] xl:text-[13px] font-semibold text-ink
          `}
        >
          {navLinks.map((item) => {
            if (item.isDropdown) {
              return (
                <div
                  key={item.label}
                  className="relative group max-lg:py-2 shrink-0"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setServicesOpen((prev) => !prev)}
                    className="flex items-center gap-1 py-1 text-ink hover:text-saffron transition-colors cursor-pointer font-semibold text-[12px] xl:text-[13px] whitespace-nowrap"
                  >
                    {item.label} <span className="text-[10px]">▾</span>
                  </button>

                  <div
                    className={`
                      ${servicesOpen ? 'block' : 'hidden'} lg:group-hover:block
                      lg:absolute lg:top-full lg:left-0 lg:w-60 lg:bg-white lg:border lg:border-line lg:shadow-md lg:py-2
                      max-lg:pl-4 max-lg:mt-1 max-lg:space-y-1 z-50
                    `}
                  >
                    {item.children.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        onClick={() => {
                          setIsOpen(false);
                          setServicesOpen(false);
                        }}
                        className="block px-4 py-2.5 text-xs text-ink hover:text-saffron hover:bg-cream transition-colors whitespace-nowrap"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`py-3 lg:py-0 whitespace-nowrap shrink-0 transition-colors duration-250 ${
                  location.pathname === item.href
                    ? 'text-saffron font-bold'
                    : 'text-ink hover:text-saffron'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}


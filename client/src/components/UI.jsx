import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, useRevealOnScroll } from '../hooks';

export function Container({ children, className = '' }) {
  return (
    <div
      className={`w-[min(100%-34px,520px)] md:w-[min(1160px,calc(100%-48px))] mx-auto ${className}`}
    >
      {children}
    </div>
  );
}

export function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  disabled = false,
  type = 'button',
  onClick,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center gap-[17px] px-[21px] py-[14px] rounded-[2px] text-[11px] font-bold tracking-[0.04em] transition-all duration-250 cursor-pointer select-none';
  const hoverLift = disabled ? 'opacity-45 cursor-not-allowed' : 'hover:-translate-y-[3px]';
  const variants = {
    primary: 'bg-saffron text-white hover:bg-saffron-hover',
    outline: 'border border-white/55 text-white hover:bg-white hover:text-maroon',
    light: 'bg-cream-light text-maroon hover:bg-cream',
    'outline-dark': 'border border-maroon text-maroon hover:bg-maroon hover:text-white',
  };
  const combinedClass = `${baseStyles} ${hoverLift} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    const isExternal =
      href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className={combinedClass}
          {...props}
        >
          {children}
        </a>
      );
    }
    if (href.startsWith('#')) {
      return (
        <a href={href} className={combinedClass} onClick={onClick} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={combinedClass} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClass}
      {...props}
    >
      {children}
    </button>
  );
}

export function SectionKicker({ number, label, className = '' }) {
  return (
    <div
      className={`text-[10px] tracking-[0.2em] font-bold text-gold uppercase flex items-center gap-[10px] ${className}`}
    >
      {number && <span>{number}</span>}
      <span className="inline-block w-[34px] h-[1px] bg-current" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}

export function SectionHeading({
  kickerNumber,
  kickerLabel,
  title,
  subtitle,
  className = '',
}) {
  return (
    <div
      className={`flex flex-col md:flex-row md:justify-between md:items-end mb-[43px] block md:flex ${className}`}
    >
      <div>
        {kickerLabel && (
          <SectionKicker number={kickerNumber} label={kickerLabel} className="mb-2" />
        )}
        <h2 className="font-serif font-medium text-[clamp(34px,4vw,55px)] leading-[1.2] text-maroon m-0 [&>em]:not-italic [&>em]:text-gold-light">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="max-w-[540px] text-muted text-[16px] m-0 mb-2 text-left md:text-right mt-3 md:mt-0">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function CategoryCard({
  id,
  title,
  subtitle,
  _description,
  author,
  categoryLabel,
  price,
  imageUrl,
  onAddToCart,
}) {
  const [ref, isVisible] = useRevealOnScroll(0.05);
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { t } = useLanguage();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart({ id, bookId: id, name: title, price, type: 'physical' });
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 1400);
    }
  };

  return (
    <article
      ref={ref}
      className={`group bg-white border border-line rounded-xs flex flex-col justify-between transition-all duration-300 hover:border-gold hover:shadow-card-hover hover:-translate-y-1 overflow-hidden ${
        isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-4'
      }`}
    >
      {/* 3:4 Fixed Aspect Ratio Image Container */}
      <Link
        to={id ? `/books/${id}` : '/books'}
        className="relative block w-full aspect-[3/4] bg-cream-light/60 overflow-hidden border-b border-line/70 select-none"
        aria-label={title}
      >
        {!isImgLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-cream-light via-cream to-cream-light animate-pulse" />
        )}
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          onLoad={() => setIsImgLoaded(true)}
          onError={() => setIsImgLoaded(true)}
          className={`w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-105 ${
            isImgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {categoryLabel && (
          <span className="absolute top-2 left-2 bg-maroon/90 backdrop-blur-xs text-gold-light text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-xs shadow-xs">
            {categoryLabel}
          </span>
        )}
      </Link>

      {/* Book Content Container */}
      <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between gap-2.5">
        <div>
          {/* Author / Lineage */}
          <p className="text-[10px] sm:text-[11px] font-sans font-medium text-gold uppercase tracking-wider truncate m-0">
            {author || 'ಆದ್ಯ ಪುಸ್ತಕ ಭಂಡಾರ'}
          </p>

          {/* Book Title limited strictly to 2 lines */}
          <Link
            to={id ? `/books/${id}` : '/books'}
            className="block text-maroon hover:text-saffron transition-colors mt-1"
          >
            <h3 className="m-0 font-serif font-semibold text-[13px] sm:text-[15px] leading-snug line-clamp-2 min-h-[2.5rem] sm:min-h-[2.75rem]">
              {title}
            </h3>
          </Link>

          {/* Optional Subtitle (English or Transliteration) truncated to 1 line */}
          {subtitle && (
            <p className="text-[10px] sm:text-[11px] font-sans text-muted truncate mt-0.5 mb-0">
              {subtitle}
            </p>
          )}
        </div>

        {/* Price and Add to Cart Section */}
        <div className="pt-2.5 border-t border-line/60 flex items-center justify-between gap-2 mt-auto">
          <div className="flex flex-col">
            <span className="text-[9px] text-muted uppercase font-bold tracking-wider">Price</span>
            <span className="font-serif font-bold text-sm sm:text-base text-maroon leading-none">
              ₹{price}
            </span>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Add ${title} to cart`}
            className={`px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-xs text-[10px] sm:text-xs font-semibold cursor-pointer transition-all duration-200 flex items-center gap-1 shrink-0 ${
              isAdded
                ? 'bg-green-700 text-white'
                : 'bg-maroon text-white hover:bg-maroon-dark active:scale-95 shadow-xs'
            }`}
          >
            {isAdded ? (
              <>
                <span>✓</span>
                <span className="hidden sm:inline">Added</span>
              </>
            ) : (
              <>
                <span>+</span>
                <span>{t.categories.addToCart}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}

export function ContactRow({ icon, label, value, href, isExternal = false }) {
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-[18px] py-[21px] border-b border-line transition-all duration-250 hover:pl-2 group"
    >
      <span className="grid place-items-center w-[42px] h-[42px] bg-cream rounded-full text-saffron text-[23px] shrink-0">
        {icon}
      </span>
      <span>
        <small className="block text-[9px] tracking-[0.18em] text-gold font-bold uppercase">
          {label}
        </small>
        <strong className="block text-maroon font-serif font-medium text-[22px] leading-tight">
          {value}
        </strong>
      </span>
      <b className="ml-auto text-gold font-normal text-lg transition-transform group-hover:translate-x-1">
        ↗
      </b>
    </a>
  );
}

export function CommunityCard({
  icon,
  badge,
  title,
  description,
  linkText,
  href,
  variant = 'whatsapp',
}) {
  const [ref, isVisible] = useRevealOnScroll(0.12);
  const iconStyles = {
    whatsapp: 'bg-whatsapp-bg text-whatsapp-text',
    telegram: 'bg-telegram-bg text-telegram-text',
  };

  return (
    <article
      ref={ref}
      className={`flex gap-[22px] p-5 md:p-[35px] bg-white border border-line transition-all duration-300 ${
        isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-[25px]'
      }`}
    >
      <div
        className={`shrink-0 w-12 h-12 rounded-full grid place-items-center ${
          iconStyles[variant] || iconStyles.whatsapp
        }`}
      >
        {icon}
      </div>
      <div>
        <small className="block text-gold text-[9px] tracking-[0.18em] font-bold uppercase">
          {badge}
        </small>
        <h3 className="font-serif font-medium text-[24px] text-maroon my-2 leading-tight">
          {title}
        </h3>
        <p className="text-muted text-[13px] mb-[18px] leading-relaxed">{description}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-saffron text-[11px] font-bold hover:underline inline-flex items-center gap-[7px]"
        >
          {linkText} <span>↗</span>
        </a>
      </div>
    </article>
  );
}

export function VideoCard({ category, title, description, posterUrl, videoUrl }) {
  const [ref, isVisible] = useRevealOnScroll(0.12);

  return (
    <article
      ref={ref}
      className={`border border-line bg-paper overflow-hidden transition-all duration-300 ${
        isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-[25px]'
      }`}
    >
      <video
        controls
        preload="metadata"
        poster={posterUrl}
        className="block w-full h-[190px] md:h-[230px] object-cover bg-maroon-dark"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
      <div className="p-[22px]">
        <small className="block text-gold text-[9px] tracking-[0.18em] font-bold uppercase">
          {category}
        </small>
        <h3 className="my-2 text-maroon font-serif font-medium text-[24px]">{title}</h3>
        <p className="text-muted text-[13px] m-0 leading-relaxed">{description}</p>
      </div>
    </article>
  );
}

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed right-6 bottom-24 w-[44px] h-[44px] border-0 bg-saffron hover:bg-saffron-hover active:scale-95 text-white text-[20px] transition-all duration-250 z-40 cursor-pointer flex items-center justify-center rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.18)] ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      ↑
    </button>
  );
}


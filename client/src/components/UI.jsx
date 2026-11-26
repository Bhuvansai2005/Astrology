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
  description,
  price,
  imageUrl,
  onAddToCart,
}) {
  const [ref, isVisible] = useRevealOnScroll(0.05);
  const { t } = useLanguage();

  return (
    <article
      ref={ref}
      className={`bg-white border border-line transition-all duration-300 hover:-translate-y-[7px] hover:shadow-card-hover flex flex-col ${
        isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-[25px]'
      }`}
    >
      <Link
        to={id ? `/books/${id}` : '/books'}
        className="block h-[175px] md:h-[210px] bg-paper bg-contain bg-center bg-no-repeat relative cursor-pointer border-b border-line overflow-hidden"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="p-[14px] md:p-[19px] flex flex-col flex-1">
        <Link to={id ? `/books/${id}` : '/books'} className="hover:text-saffron transition-colors">
          <h3 className="m-0 text-maroon font-serif font-semibold text-[17px] md:text-[19px] leading-snug">
            {title}
          </h3>
          {subtitle && (
            <span className="block text-[11px] md:text-[12px] font-sans font-medium text-gold-rich tracking-wide mt-1">
              {subtitle}
            </span>
          )}
        </Link>
        <p className="text-[11px] md:text-[12px] text-muted min-h-[58px] my-2.5 leading-relaxed flex-1 line-clamp-3">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mt-auto pt-3 border-t border-line/40">
          <span className="font-serif font-bold text-base text-maroon">₹{price}</span>
          <button
            type="button"
            onClick={() => onAddToCart({ id, bookId: id, name: title, price, type: 'physical' })}
            className="w-full sm:w-auto px-3 py-1.5 bg-maroon text-white hover:bg-maroon-dark active:scale-95 transition-all rounded text-[11px] md:text-xs font-semibold cursor-pointer flex items-center justify-center gap-1 shadow-xs"
          >
            <span>{t.categories.addToCart}</span>
            <span className="text-sm font-bold leading-none">+</span>
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


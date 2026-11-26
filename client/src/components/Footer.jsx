import { Link } from 'react-router-dom';
import { Container } from './UI';
import { Brand } from './Header';
import { WhatsAppIcon, TelegramIcon, FacebookIcon, InstagramIcon } from './SocialIcons';
import { useLanguage } from '../hooks';
import { BUSINESS } from '../config';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-maroon-dark text-[#eadfd0] pt-[65px] pb-[22px]">
      <Container className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-[30px] lg:gap-10">
        <div className="col-span-2 lg:col-span-1">
          <Brand variant="light" />
          <p className="text-footer-text max-w-[300px] font-serif text-[14px] leading-[1.8] mt-5">
            {t.footer.brandDesc}
          </p>
          <p className="text-muted-footer text-xs max-w-[300px] leading-relaxed mt-2">
            {t.footer.centreDesc}
          </p>
        </div>

        <div>
          <h4 className="m-0 mb-[18px] text-gold-footer uppercase text-[10px] tracking-[0.15em] font-bold">
            {t.footer.exploreHeading}
          </h4>
          <Link to="/about" className="block text-footer-link text-[12px] my-[9px] hover:text-white transition-colors duration-200">
            {t.nav.about}
          </Link>
          <Link to="/books" className="block text-footer-link text-[12px] my-[9px] hover:text-white transition-colors duration-200">
            {t.nav.catalogue}
          </Link>
          <Link to="/classes" className="block text-footer-link text-[12px] my-[9px] hover:text-white transition-colors duration-200">
            {t.nav.classes}
          </Link>
          <Link to="/announcements" className="block text-footer-link text-[12px] my-[9px] hover:text-white transition-colors duration-200">
            {t.nav.announcements}
          </Link>
          <Link to="/contact" className="block text-footer-link text-[12px] my-[9px] hover:text-white transition-colors duration-200">
            {t.nav.contact}
          </Link>
        </div>

        <div>
          <h4 className="m-0 mb-[18px] text-gold-footer uppercase text-[10px] tracking-[0.15em] font-bold">
            {t.footer.consultationsHeading}
          </h4>
          <Link to="/services/astrology" className="block text-footer-link text-[12px] my-[9px] hover:text-white transition-colors duration-200">
            {t.nav.servicesDropdown.astrology}
          </Link>
          <Link to="/services/vastu" className="block text-footer-link text-[12px] my-[9px] hover:text-white transition-colors duration-200">
            {t.nav.servicesDropdown.vastu}
          </Link>
          <Link to="/services/other" className="block text-footer-link text-[12px] my-[9px] hover:text-white transition-colors duration-200">
            {t.nav.servicesDropdown.religious}
          </Link>
          <Link to="/books" className="block text-footer-link text-[12px] my-[9px] hover:text-white transition-colors duration-200">
            {t.footer.vedasAgamasLink}
          </Link>
        </div>

        <div>
          <h4 className="m-0 mb-[18px] text-gold-footer uppercase text-[10px] tracking-[0.15em] font-bold">
            {t.footer.connectHeading}
          </h4>
          <a href={BUSINESS.phoneLinks[0]} className="block text-footer-link text-[12px] my-[9px] hover:text-white transition-colors duration-200">
            {BUSINESS.phone[0]}
          </a>
          <a href={BUSINESS.phoneLinks[1]} className="block text-footer-link text-[12px] my-[9px] hover:text-white transition-colors duration-200">
            {BUSINESS.phone[1]}
          </a>
          <div className="flex flex-col gap-2 mt-3">
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-footer-link text-[12px] hover:text-[#25D366] transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0 text-[#25D366]" />
              <span>{t.footer.whatsappLink}</span>
            </a>
            <a
              href={BUSINESS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-footer-link text-[12px] hover:text-[#229ED9] transition-colors duration-200"
              aria-label="Telegram"
            >
              <TelegramIcon className="w-4 h-4 shrink-0 text-[#229ED9]" />
              <span>{t.footer.telegramLink}</span>
            </a>
            <a
              href={BUSINESS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-footer-link text-[12px] hover:text-[#1877F2] transition-colors duration-200"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4 shrink-0 text-[#1877F2]" />
              <span>{t.footer.facebookLink}</span>
            </a>
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-footer-link text-[12px] hover:text-[#E4405F] transition-colors duration-200"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4 shrink-0 text-[#E4405F]" />
              <span>{t.footer.instagramLink}</span>
            </a>
          </div>
        </div>
      </Container>

      <Container className="flex flex-col md:flex-row justify-between gap-3 border-t border-footer-border mt-[50px] pt-[18px] text-muted-footer text-[10px] leading-relaxed md:leading-normal">
        <span className="block md:inline">
          © {CURRENT_YEAR} {t.footer.copyright}
        </span>
        <div className="flex flex-wrap gap-x-4 gap-y-1 md:justify-end">
          <Link to="/privacy-policy" className="hover:text-white transition-colors duration-200">
            {t.footer.privacyPolicyLink}
          </Link>
          <Link to="/terms-and-conditions" className="hover:text-white transition-colors duration-200">
            {t.footer.termsLink}
          </Link>
          <span>{t.footer.knowledgeTag}</span>
        </div>
      </Container>
    </footer>
  );
}

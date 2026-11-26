import { Button, ContactRow, Container, SectionKicker } from '../components/UI';
import { CommunitySection, LocationSection } from '../components/Layout';
import { WhatsAppIcon, TelegramIcon, FacebookIcon, InstagramIcon, PhoneIcon } from '../components/SocialIcons';
import { useLanguage } from '../hooks';
import { BUSINESS } from '../config';

export default function ContactPage() {
  const { t } = useLanguage();
  const cp = t.contactPage;

  return (
    <div className="py-[72px] md:py-[105px] bg-paper">
      <Container>
        <div className="mb-12">
          <SectionKicker number={cp.kickerNumber} label={cp.kickerLabel} />
          <h1 className="font-serif font-medium text-[clamp(34px,5vw,60px)] leading-[1.1] text-maroon mt-3 mb-3">
            {cp.title}
          </h1>
          <p className="text-muted text-[16px] max-w-[600px] leading-relaxed">{cp.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          <div className="bg-white border border-line p-8 md:p-10">
            <h2 className="font-serif font-medium text-2xl text-maroon mb-2">
              {cp.directHeading}
            </h2>
            <p className="text-muted text-sm mb-6">{cp.directDesc}</p>

            <div className="border-t border-line">
              <ContactRow
                icon={<PhoneIcon className="w-5 h-5 text-maroon" />}
                label={t.contact.callUs}
                value={BUSINESS.phone[0]}
                href={BUSINESS.phoneLinks[0]}
              />
              <ContactRow
                icon={<PhoneIcon className="w-5 h-5 text-maroon" />}
                label={t.contact.callUs}
                value={BUSINESS.phone[1]}
                href={BUSINESS.phoneLinks[1]}
              />
              <ContactRow
                icon={<WhatsAppIcon className="w-5 h-5 text-[#25D366]" />}
                label={t.contact.messageUs}
                value={t.contact.whatsappLabel}
                href={BUSINESS.whatsapp}
                isExternal
              />
              <ContactRow
                icon={<TelegramIcon className="w-5 h-5 text-[#229ED9]" />}
                label={t.communities.telegramTitle}
                value="Adya Pustaka Bhandara"
                href={BUSINESS.telegram}
                isExternal
              />
            </div>
          </div>

          <div className="bg-cream border border-line p-8 md:p-10">
            <h2 className="font-serif font-medium text-2xl text-maroon mb-2">
              {cp.hoursHeading}
            </h2>
            <p className="text-muted text-sm mb-6 leading-relaxed">{cp.hoursDesc}</p>
            <div className="space-y-4 text-sm text-ink">
              <div className="flex justify-between border-b border-line pb-2">
                <span className="font-semibold">{cp.monSat}</span>
                <span className="text-muted">{cp.monSatTime}</span>
              </div>
              <div className="flex justify-between border-b border-line pb-2">
                <span className="font-semibold">{cp.sunday}</span>
                <span className="text-muted">{cp.sundayTime}</span>
              </div>
              <div className="flex justify-between border-b border-line pb-2">
                <span className="font-semibold">{cp.modeHeading}</span>
                <span className="text-muted">{cp.modeValue}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <LocationSection />
      <CommunitySection />

      <section className="py-[70px] bg-paper border-t border-gold/15">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex items-center gap-[15px] md:gap-[22px] flex-wrap sm:flex-nowrap p-6 rounded-[8px] bg-cream border border-gold/25">
              <span className="grid place-items-center w-[55px] h-[55px] rounded-full bg-[#1877F2] text-white shrink-0 shadow-sm">
                <FacebookIcon className="w-7 h-7" />
              </span>

              <div className="min-w-0 flex-1">
                <small className="block text-gold text-[9px] tracking-[0.18em] font-bold uppercase">
                  {t.social.kicker}
                </small>
                <h2 className="m-0 mt-1 text-maroon font-serif font-medium text-[23px] leading-tight">
                  {t.social.title}
                </h2>
                <div className="mt-4">
                  <Button variant="outline-dark" href={BUSINESS.facebook} className="inline-flex items-center gap-2">
                    <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
                    <span>{t.social.button}</span> <span>↗</span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 rounded-[8px] bg-cream border border-gold/25">
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="grid place-items-center w-[55px] h-[55px] rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shrink-0 shadow-sm hover:opacity-95 transition-opacity"
                aria-label={BUSINESS.instagramHandle}
              >
                <InstagramIcon className="w-7 h-7 text-white" />
              </a>

              <div className="min-w-0 flex-1">
                <small className="block text-gold text-[9px] tracking-[0.18em] font-bold uppercase">
                  {t.social.instagramKicker}
                </small>
                <h2 className="m-0 mt-1 text-maroon font-serif font-medium text-[23px] leading-tight">
                  {t.social.instagramTitle}
                </h2>
                <p className="m-0 mt-1.5 text-ink-soft text-[13px] font-mono tracking-wide">
                  {BUSINESS.instagramHandle}
                </p>
                <div className="mt-4">
                  <Button variant="outline-dark" href={BUSINESS.instagram} className="inline-flex items-center gap-2">
                    <InstagramIcon className="w-4 h-4 text-[#E4405F]" />
                    <span>{t.social.instagramButton}</span> <span>↗</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}


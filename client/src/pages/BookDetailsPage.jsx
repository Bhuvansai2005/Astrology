import { Link, useParams } from 'react-router-dom';
import { Button, Container, SectionKicker } from '../components/UI';
import { useCart, useLanguage } from '../hooks';
import { BUSINESS, CATALOG_ITEMS, CATEGORY_IMAGES } from '../config';

export default function BookDetailsPage() {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const { t, lang } = useLanguage();
  const dp = t.bookDetailsPage;

  const bookFromConfig = CATALOG_ITEMS.find((b) => b.id === slug);
  const book = dp?.books?.[slug] || (bookFromConfig ? {
    title: bookFromConfig.title,
    sanskrit: bookFromConfig.sanskritLabel || 'ಗ್ರಂಥ',
    author: 'ಆದ್ಯ ಪುಸ್ತಕ ಭಂಡಾರ',
    description: bookFromConfig.description || `${bookFromConfig.title} - ಅಧಿಕೃತ ಪ್ರಕಾಶನ.`,
    price: bookFromConfig.price,
    language: 'ಕನ್ನಡ',
    type: bookFromConfig.category === 'sacred-articles' ? 'ಪವಿತ್ರ ಪರಿಕರ' : 'ಮುದ್ರಿತ ಆವೃತ್ತಿ',
    pages: 0,
    availability: 'ಲಭ್ಯವಿದೆ',
  } : null);

  const imageUrl = CATEGORY_IMAGES[slug] || bookFromConfig?.imageUrl || '';

  if (!book) {
    return (
      <div className="py-[72px] md:py-[105px] bg-paper">
        <Container>
          <div className="text-center py-16 px-6 bg-white border border-line max-w-lg mx-auto">
            <h1 className="font-serif font-medium text-2xl md:text-3xl text-maroon mb-3">
              {lang === 'kn' ? 'ಗ್ರಂಥ ಲಭ್ಯವಿಲ್ಲ' : 'Book Not Found'}
            </h1>
            <p className="text-muted text-sm mb-6 leading-relaxed">
              {lang === 'kn'
                ? 'ನೀವು ಹುಡುಕುತ್ತಿರುವ ಗ್ರಂಥವು ಪ್ರಸ್ತುತ ಲಭ್ಯವಿಲ್ಲ ಅಥವಾ ಪುಸ್ತಕ ಭಂಡಾರವನ್ನು ನವೀಕರಿಸಲಾಗುತ್ತಿದೆ.'
                : 'The requested book is currently not in the catalogue or the catalogue is being updated.'}
            </p>
            <Button variant="primary" href="/books">
              {dp?.backBtn || (lang === 'kn' ? 'ಪುಸ್ತಕ ಭಂಡಾರಕ್ಕೆ ಹಿಂತಿರುಗಿ' : 'Back to Catalogue')}
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  const handleWhatsAppEnquiry = () => {
    const text =
      lang === 'kn'
        ? encodeURIComponent(
            `ನಮಸ್ಕಾರ, ಆದ್ಯ ಪುಸ್ತಕ ಭಂಡಾರದಿಂದ "${book.title}" (ಮೌಲ್ಯ: ₹${book.price}) ಗ್ರಂಥವನ್ನು ಪಡೆಯುವ ಕುರಿತು ಲಭ್ಯತೆ ಮತ್ತು ರವಾನೆ ವಿವರಗಳನ್ನು ತಿಳಿಸಬೇಕಾಗಿ ವಿನಂತಿ.`
          )
        : encodeURIComponent(
            `Greetings, I would like to inquire about ordering "${book.title}" (Price: ₹${book.price}) from Adya Pustaka Bhandara. Kindly share edition availability and dispatch details.`
          );
    window.open(`${BUSINESS.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-[72px] md:py-[105px] bg-paper">
      <Container>
        <div className="text-xs text-muted mb-8 flex items-center gap-2">
          <Link to="/" className="hover:text-saffron">
            {dp.home}
          </Link>
          <span>/</span>
          <Link to="/books" className="hover:text-saffron">
            {dp.catalogue}
          </Link>
          <span>/</span>
          <span className="text-maroon font-semibold">{book.title}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.9fr] gap-8 md:gap-14 bg-white border border-line p-6 md:p-12 mb-16">
          <div className="relative">
            <div
              className="h-[380px] md:h-[460px] bg-paper bg-contain bg-center bg-no-repeat rounded-sm relative border border-line"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="mt-4 flex justify-between text-xs text-muted">
              <span>✦ {dp.catalogue}</span>
              <span className="text-success-text font-bold">● {book.availability}</span>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <SectionKicker label={book.type} />
              <h1 className="font-serif font-semibold text-3xl md:text-5xl text-maroon mt-3 mb-1">
                {book.title}
              </h1>
              {bookFromConfig?.englishTitle && (
                <div className="text-sm font-sans font-medium text-gold-rich tracking-wider mb-2">
                  {bookFromConfig.englishTitle}
                </div>
              )}

              <div className="text-2xl md:text-3xl font-serif font-bold text-maroon my-4">
                ₹{book.price}
              </div>

              <p className="text-muted text-[15px] leading-relaxed mb-6">{book.description}</p>

              <div className="grid grid-cols-2 gap-3 p-4 bg-cream border border-line text-xs mb-8">
                <div>
                  <span className="text-muted block">{dp.languageLabel}</span>
                  <strong className="text-maroon font-serif text-sm">{book.language}</strong>
                </div>
                <div>
                  <span className="text-muted block">{dp.formatLabel}</span>
                  <strong className="text-maroon font-serif text-sm">{book.type}</strong>
                </div>
                <div>
                  <span className="text-muted block">{dp.authorLabel}</span>
                  <strong className="text-maroon font-serif text-sm">{book.author}</strong>
                </div>
                <div>
                  <span className="text-muted block">{dp.pagesLabel}</span>
                  <strong className="text-maroon font-serif text-sm">{book.pages}</strong>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-line">
              <Button
                variant="primary"
                onClick={() =>
                  addToCart({
                    id: slug,
                    bookId: slug,
                    name: book.title,
                    price: book.price,
                    type: 'physical',
                  })
                }
                className="w-full sm:w-auto justify-center text-center"
              >
                {dp.addToCartBtn} <span>+</span>
              </Button>
              <Button
                variant="outline-dark"
                onClick={handleWhatsAppEnquiry}
                className="w-full sm:w-auto justify-center text-center"
              >
                {dp.whatsappBtn} <span>↗</span>
              </Button>
            </div>
          </div>
        </div>

        <div>
          <Link to="/books" className="text-xs font-bold text-maroon hover:text-saffron transition-colors">
            ← {dp.backBtn}
          </Link>
        </div>
      </Container>
    </div>
  );
}


import { useState } from 'react';
import { CategoryCard, Container, SectionKicker } from '../components/UI';
import { useCart, useLanguage } from '../hooks';
import { CATALOG_ITEMS } from '../config';

export default function CataloguePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();
  const { t } = useLanguage();
  const cp = t.cataloguePage;

  const localizedBooks = CATALOG_ITEMS.map((item) => {
    const bookInfo = t.bookDetailsPage?.books?.[item.id] || {};
    return {
      ...item,
      kannadaTitle: item.title,
      englishTitle: item.englishTitle || '',
      title: bookInfo.title || item.title || item.id,
      description: bookInfo.description || item.description || '',
    };
  });

  const filteredBooks = localizedBooks.filter((book) => {
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    const q = searchQuery.trim().toLowerCase();
    if (!q) return matchesCategory;

    const matchesSearch =
      (book.title && book.title.toLowerCase().includes(q)) ||
      (book.kannadaTitle && book.kannadaTitle.toLowerCase().includes(q)) ||
      (book.englishTitle && book.englishTitle.toLowerCase().includes(q)) ||
      (book.sanskritLabel && book.sanskritLabel.toLowerCase().includes(q)) ||
      (book.description && book.description.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-[72px] md:py-[105px] bg-paper">
      <Container>
        <div className="mb-10">
          <SectionKicker number={cp.kickerNumber} label={cp.kickerLabel} />
          <h1 className="font-serif font-medium text-[clamp(34px,5vw,60px)] leading-[1.1] text-maroon mt-3 mb-3">
            {cp.title}
          </h1>
          <p className="text-muted text-[16px] max-w-[600px] leading-relaxed">{cp.subtitle}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white border border-line p-4 md:p-6 mb-10">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={cp.searchPlaceholder}
            className="w-full md:w-96 border border-line p-3 text-sm font-sans outline-none focus:border-maroon transition-colors"
          />

          <div className="flex gap-2 flex-wrap w-full md:w-auto">
            {cp.filters.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider border cursor-pointer transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-maroon text-white border-maroon'
                    : 'bg-cream text-maroon border-line hover:border-maroon'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {filteredBooks.length === 0 ? (
          <div className="text-center py-20 bg-white border border-line">
            <p className="text-muted font-serif text-lg">{cp.emptyState}</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredBooks.map((book) => (
              <CategoryCard
                key={book.id}
                id={book.id}
                title={book.title}
                subtitle={book.englishTitle}
                description={book.description}
                price={book.price}
                imageUrl={book.imageUrl}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}


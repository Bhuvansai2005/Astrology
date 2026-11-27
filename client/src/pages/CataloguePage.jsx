import { useState, useMemo, useRef } from 'react';
import {
  Search,
  SlidersHorizontal,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  X,
  RotateCcw,
  BookOpen,
} from 'lucide-react';
import { CategoryCard, Container, SectionKicker } from '../components/UI';
import { useCart, useLanguage } from '../hooks';
import { CATALOG_ITEMS } from '../config';

const ITEMS_PER_PAGE = 24;

export default function CataloguePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default'); // 'default', 'price-low', 'price-high', 'newest', 'alpha-asc', 'alpha-desc'
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const catalogueTopRef = useRef(null);

  const { addToCart } = useCart();
  const { t, lang } = useLanguage();
  const isKn = lang === 'kn';
  const cp = t.cataloguePage || {};

  // Localized books dataset with author, categories, and searchable strings
  const localizedBooks = useMemo(() => {
    return CATALOG_ITEMS.map((item) => {
      const bookInfo = t.bookDetailsPage?.books?.[item.id] || {};
      const catConfig = cp.filters?.find((f) => f.id === item.category);
      return {
        ...item,
        title: bookInfo.title || item.title || item.id,
        kannadaTitle: item.title,
        englishTitle: item.englishTitle || '',
        sanskritLabel: item.sanskritLabel || 'ಗ್ರಂಥ',
        description: bookInfo.description || item.description || '',
        author: bookInfo.author || (isKn ? 'ಆದ್ಯ ಪುಸ್ತಕ ಭಂಡಾರ' : 'Adya Pustaka Bhandara'),
        categoryLabel: catConfig?.label || item.category,
      };
    });
  }, [t, cp.filters, isKn]);

  // Compute category count breakdown for badges
  const categoryCounts = useMemo(() => {
    const counts = { all: localizedBooks.length };
    localizedBooks.forEach((book) => {
      if (book.category) {
        counts[book.category] = (counts[book.category] || 0) + 1;
      }
    });
    return counts;
  }, [localizedBooks]);

  // Filter and sort items
  const filteredAndSortedBooks = useMemo(() => {
    let result = localizedBooks.filter((book) => {
      const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
      if (!matchesCategory) return false;

      const q = searchQuery.trim().toLowerCase();
      if (!q) return true;

      return (
        (book.title && book.title.toLowerCase().includes(q)) ||
        (book.kannadaTitle && book.kannadaTitle.toLowerCase().includes(q)) ||
        (book.englishTitle && book.englishTitle.toLowerCase().includes(q)) ||
        (book.sanskritLabel && book.sanskritLabel.toLowerCase().includes(q)) ||
        (book.author && book.author.toLowerCase().includes(q)) ||
        (book.categoryLabel && book.categoryLabel.toLowerCase().includes(q)) ||
        (book.description && book.description.toLowerCase().includes(q))
      );
    });

    // Sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case 'price-high':
        result.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case 'alpha-asc':
        result.sort((a, b) => a.title.localeCompare(b.title, isKn ? 'kn' : 'en'));
        break;
      case 'alpha-desc':
        result.sort((a, b) => b.title.localeCompare(a.title, isKn ? 'kn' : 'en'));
        break;
      case 'newest':
        // Reverse order of listing
        result.reverse();
        break;
      default:
        // Default curated catalog order
        break;
    }

    return result;
  }, [localizedBooks, selectedCategory, searchQuery, sortBy, isKn]);

  // Pagination calculation
  const totalBooks = filteredAndSortedBooks.length;
  const totalPages = Math.ceil(totalBooks / ITEMS_PER_PAGE) || 1;
  const validCurrentPage = Math.min(Math.max(1, currentPage), totalPages);

  const paginatedBooks = useMemo(() => {
    const startIndex = (validCurrentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedBooks.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredAndSortedBooks, validCurrentPage]);

  // Handle filter changes cleanly without setState inside useEffect
  const handleSearchChange = (val) => {
    setSearchQuery(val);
    setCurrentPage(1);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 200);
  };

  const handleCategorySelect = (catId) => {
    setSelectedCategory(catId);
    setCurrentPage(1);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 200);
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
    setCurrentPage(1);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 200);
  };

  // Scroll smoothly to top of catalogue grid on page change
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages || newPage === validCurrentPage) return;
    setCurrentPage(newPage);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 150);

    if (catalogueTopRef.current) {
      const topOffset = catalogueTopRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortBy('default');
    setCurrentPage(1);
  };

  const selectedCategoryLabel =
    cp.filters?.find((f) => f.id === selectedCategory)?.label ||
    (isKn ? 'ಎಲ್ಲಾ ವಿಭಾಗಗಳು' : 'All Categories');

  const hasActiveFilters = selectedCategory !== 'all' || searchQuery.trim() !== '' || sortBy !== 'default';

  return (
    <div className="py-[60px] md:py-[90px] bg-paper min-h-screen">
      <Container>
        {/* Page Header */}
        <div ref={catalogueTopRef} className="mb-8">
          <SectionKicker number={cp.kickerNumber || '01'} label={cp.kickerLabel || (isKn ? 'ಸಂಪೂರ್ಣ ಪುಸ್ತಕ ಭಂಡಾರ' : 'COMPLETE CATALOGUE')} />
          <div className="mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="font-serif font-medium text-[32px] sm:text-[40px] md:text-[52px] leading-[1.15] text-maroon m-0">
                {cp.title || (isKn ? 'ಪುಸ್ತಕ ಭಂಡಾರ' : 'Book Catalogue')}
              </h1>
              <p className="text-muted text-sm sm:text-base max-w-[640px] leading-relaxed mt-2 m-0">
                {cp.subtitle ||
                  (isKn
                    ? 'ಅಧಿಕೃತ ವೈದಿಕ ಸಾಹಿತ್ಯ, ಶಾಸ್ತ್ರ ಗ್ರಂಥಗಳು, ವ್ಯಾಖ್ಯಾನಗಳು ಹಾಗೂ ಸಿದ್ಧ ಪರಿಕರಗಳ ಭಂಡಾರ.'
                    : 'Explore authentic Vedic literature, classical shastric treatises, traditional commentaries and sacred articles.')}
              </p>
            </div>

            {/* Total Books Stat Badge */}
            <div className="flex items-center gap-2 self-start md:self-end bg-cream px-3.5 py-2 border border-line rounded-xs shrink-0">
              <BookOpen className="w-4 h-4 text-gold" />
              <span className="text-xs font-serif font-bold text-maroon">
                {isKn ? `ಒಟ್ಟು ${totalBooks} ಗ್ರಂಥಗಳು` : `Total ${totalBooks} Books`}
              </span>
            </div>
          </div>
        </div>

        {/* Search, Filter Bar, and Scrollable Category Chips */}
        <div className="bg-white border border-line p-4 md:p-5 shadow-xs mb-6 space-y-4 rounded-xs">
          {/* Top Controls: Search Input + Sorting + Expand Filter Toggle */}
          <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder={
                  isKn
                    ? 'ಗ್ರಂಥದ ಹೆಸರು, ಲೇಖಕ, ಶೀರ್ಷಿಕೆ ಅಥವಾ ವಿಷಯ ಹುಡುಕಿ...'
                    : 'Search by book title, author, category or keywords...'
                }
                className="w-full pl-10 pr-9 py-2.5 bg-paper border border-line text-sm text-ink placeholder:text-muted/70 font-sans outline-none focus:border-maroon focus:bg-white transition-all rounded-xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => handleSearchChange('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-maroon p-0.5 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort & Filter Controls */}
            <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
              {/* Sorting Dropdown */}
              <div className="relative flex items-center min-w-[170px] sm:min-w-[190px]">
                <ArrowUpDown className="w-3.5 h-3.5 text-gold absolute left-3 pointer-events-none" />
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="w-full pl-8 pr-7 py-2.5 bg-paper border border-line text-xs font-semibold text-maroon rounded-xs outline-none focus:border-maroon cursor-pointer appearance-none transition-colors"
                >
                  <option value="default">{isKn ? 'ವರ್ಗೀಕರಣ: ಶಿಫಾರಸು ಮಾಡಲಾದ' : 'Sort: Featured'}</option>
                  <option value="price-low">{isKn ? 'ಬೆಲೆ: ಕಡಿಮೆಯಿಂದ ಹೆಚ್ಚಿಗೆ' : 'Price: Low to High'}</option>
                  <option value="price-high">{isKn ? 'ಬೆಲೆ: ಹೆಚ್ಚಿನಿಂದ ಕಡಿಮೆಗೆ' : 'Price: High to Low'}</option>
                  <option value="alpha-asc">{isKn ? 'ಅಕ್ಷರಮಾಲೆ: ಅ - ಳ (A - Z)' : 'Alphabetical: A to Z'}</option>
                  <option value="alpha-desc">{isKn ? 'ಅಕ್ಷರಮಾಲೆ: ಳ - ಅ (Z - A)' : 'Alphabetical: Z to A'}</option>
                  <option value="newest">{isKn ? 'ಹೊಸ ಸೇರ್ಪಡೆಗಳು' : 'Newest Additions'}</option>
                </select>
                <span className="absolute right-3 pointer-events-none text-[10px] text-muted">▼</span>
              </div>

              {/* Expandable Category Filter Button */}
              <button
                type="button"
                onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 border text-xs font-bold rounded-xs cursor-pointer transition-all ${
                  isFilterDrawerOpen || selectedCategory !== 'all'
                    ? 'bg-maroon text-white border-maroon'
                    : 'bg-cream text-maroon border-line hover:border-gold'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>{isKn ? 'ವಿಭಾಗ ಶೋಧಕ' : 'Filters'}</span>
                {selectedCategory !== 'all' && (
                  <span className="w-2 h-2 rounded-full bg-gold-light inline-block" />
                )}
              </button>

              {/* Reset Filters Button */}
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  title={isKn ? 'ಶೋಧನೆಗಳನ್ನು ತೆರವುಗೊಳಿಸಿ' : 'Reset all filters'}
                  className="inline-flex items-center gap-1 px-3 py-2.5 text-xs font-semibold text-muted hover:text-maroon border border-transparent hover:border-line transition-colors cursor-pointer rounded-xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{isKn ? 'ರೀಸೆಟ್' : 'Reset'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Chips: Wrapped cleanly across rows so no category is cut off */}
          <div className="pt-2 border-t border-line/60">
            <div className="flex flex-wrap items-center gap-2 py-1">
              {(cp.filters || []).map((cat) => {
                const count = categoryCounts[cat.id] || 0;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-200 border ${
                      isSelected
                        ? 'bg-maroon text-white border-maroon shadow-xs'
                        : 'bg-cream/70 text-maroon border-line hover:border-gold hover:bg-cream'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isSelected ? 'bg-gold text-maroon' : 'bg-white text-muted border border-line/50'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Expandable Category Filter Drawer */}
          {isFilterDrawerOpen && (
            <div className="pt-4 border-t border-line/70 animate-fadeIn">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gold">
                  {isKn ? 'ಎಲ್ಲಾ ವಿಭಾಗಗಳಿಂದ ಆಯ್ಕೆಮಾಡಿ' : 'Browse All Categories'}
                </span>
                <button
                  type="button"
                  onClick={() => setIsFilterDrawerOpen(false)}
                  className="text-xs text-muted hover:text-maroon flex items-center gap-1 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>{isKn ? 'ಮುಚ್ಚಿ' : 'Close'}</span>
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {(cp.filters || []).map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  const count = categoryCounts[cat.id] || 0;
                  return (
                    <button
                      key={`drawer-${cat.id}`}
                      type="button"
                      onClick={() => {
                        handleCategorySelect(cat.id);
                        setIsFilterDrawerOpen(false);
                      }}
                      className={`p-2.5 text-left border rounded-xs transition-all flex flex-col justify-between cursor-pointer ${
                        isSelected
                          ? 'border-maroon bg-maroon/5 text-maroon font-bold ring-1 ring-maroon'
                          : 'border-line bg-paper/60 hover:bg-white hover:border-gold text-ink'
                      }`}
                    >
                      <span className="text-xs font-serif leading-tight">{cat.label}</span>
                      <span className="text-[10px] text-muted font-sans mt-1.5">
                        {count} {isKn ? 'ಗ್ರಂಥಗಳು' : 'books'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Active Filters Badges & Summary Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 text-xs text-muted">
          <div className="flex flex-wrap items-center gap-2">
            <span>{isKn ? 'ತೋರಿಸಲಾಗುತ್ತಿದೆ:' : 'Showing:'}</span>
            <span className="font-bold text-maroon">
              {totalBooks === 0
                ? 0
                : `${(validCurrentPage - 1) * ITEMS_PER_PAGE + 1} - ${Math.min(
                    validCurrentPage * ITEMS_PER_PAGE,
                    totalBooks
                  )}`}{' '}
              {isKn ? `(ಒಟ್ಟು ${totalBooks} ಗ್ರಂಥಗಳಲ್ಲಿ)` : `of ${totalBooks} books`}
            </span>

            {/* Active Category Chip */}
            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center gap-1 bg-maroon text-white text-[11px] px-2.5 py-0.5 rounded-full">
                <span>{selectedCategoryLabel}</span>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  aria-label="Remove category filter"
                  className="hover:text-gold cursor-pointer"
                >
                  ×
                </button>
              </span>
            )}

            {/* Active Search Term Chip */}
            {searchQuery && (
              <span className="inline-flex items-center gap-1 bg-cream-warm border border-gold/60 text-maroon text-[11px] px-2.5 py-0.5 rounded-full font-medium">
                <span>&quot;{searchQuery}&quot;</span>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search term"
                  className="hover:text-saffron cursor-pointer"
                >
                  ×
                </button>
              </span>
            )}
          </div>

          {/* Quick Page Info */}
          {totalPages > 1 && (
            <span className="text-muted text-xs">
              {isKn ? `ಪುಟ ${validCurrentPage} / ${totalPages}` : `Page ${validCurrentPage} of ${totalPages}`}
            </span>
          )}
        </div>

        {/* Skeleton Loaders during page or filter change */}
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3.5 sm:gap-4 md:gap-5">
            {Array.from({ length: 10 }).map((_, idx) => (
              <div
                key={`skeleton-${idx}`}
                className="bg-white border border-line rounded-xs overflow-hidden p-3 flex flex-col gap-3 animate-pulse"
              >
                <div className="w-full aspect-[3/4] bg-cream-light rounded-xs" />
                <div className="h-3 w-1/2 bg-cream-light rounded" />
                <div className="h-4 w-5/6 bg-cream-light rounded" />
                <div className="h-4 w-2/3 bg-cream-light rounded" />
                <div className="mt-auto pt-3 border-t border-line/50 flex justify-between items-center">
                  <div className="h-4 w-12 bg-cream-light rounded" />
                  <div className="h-7 w-16 bg-cream-light rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : paginatedBooks.length === 0 ? (
          /* Empty State */
          <div className="text-center py-20 px-6 bg-white border border-line rounded-xs max-w-xl mx-auto shadow-xs">
            <h3 className="font-serif font-semibold text-xl text-maroon mb-2">
              {isKn ? 'ಯಾವುದೇ ಗ್ರಂಥಗಳು ಕಂಡುಬಂದಿಲ್ಲ' : 'No Books Found'}
            </h3>
            <p className="text-muted text-sm max-w-md mx-auto mb-6 leading-relaxed">
              {searchQuery
                ? isKn
                  ? `"${searchQuery}" ಹುಡುಕಾಟಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗುವ ಯಾವುದೇ ಗ್ರಂಥಗಳು ಸಿಗಲಿಲ್ಲ. ಬೇರೆ ಪದಗಳನ್ನು ಬಳಸಿ ಪ್ರಯತ್ನಿಸಿ.`
                  : `No books matched "${searchQuery}". Try using different terms or clear your search.`
                : cp.emptyState || (isKn ? 'ಗ್ರಂಥ ಭಂಡಾರವನ್ನು ಶೀಘ್ರದಲ್ಲೇ ನವೀಕರಿಸಲಾಗುತ್ತದೆ.' : 'No books available under this selection.')}
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-4 py-2 bg-maroon text-white hover:bg-maroon-dark text-xs font-bold rounded-xs cursor-pointer transition-colors shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isKn ? 'ಎಲ್ಲಾ ಗ್ರಂಥಗಳನ್ನು ವೀಕ್ಷಿಸಿ' : 'View All Books'}</span>
            </button>
          </div>
        ) : (
          /* Responsive Product Grid: Mobile: 2 cols, Tablet: 3 cols, Desktop: 4-5 cols */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
            {paginatedBooks.map((book) => (
              <CategoryCard
                key={book.id}
                id={book.id}
                title={book.title}
                subtitle={book.englishTitle}
                author={book.author}
                categoryLabel={book.categoryLabel}
                description={book.description}
                price={book.price}
                imageUrl={book.imageUrl}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        )}

        {/* Server-Style Pagination Bar */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-line p-4 rounded-xs shadow-xs">
            <p className="text-xs text-muted m-0">
              {isKn
                ? `ಪುಟ ${validCurrentPage} / ${totalPages} (ಒಟ್ಟು ${totalBooks} ಗ್ರಂಥಗಳು)`
                : `Showing Page ${validCurrentPage} of ${totalPages} (${totalBooks} Total Books)`}
            </p>

            <div className="flex items-center gap-1 sm:gap-1.5">
              {/* First Page */}
              <button
                type="button"
                onClick={() => handlePageChange(1)}
                disabled={validCurrentPage === 1}
                aria-label="First page"
                className="p-2 border border-line bg-paper text-maroon hover:bg-cream disabled:opacity-40 disabled:cursor-not-allowed rounded-xs transition-colors cursor-pointer"
              >
                <ChevronsLeft className="w-4 h-4" />
              </button>

              {/* Previous Page */}
              <button
                type="button"
                onClick={() => handlePageChange(validCurrentPage - 1)}
                disabled={validCurrentPage === 1}
                aria-label="Previous page"
                className="p-2 border border-line bg-paper text-maroon hover:bg-cream disabled:opacity-40 disabled:cursor-not-allowed rounded-xs transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Numbered Page Buttons */}
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((p) => {
                  // Display first, last, current, and surrounding 1 page
                  return (
                    p === 1 ||
                    p === totalPages ||
                    Math.abs(p - validCurrentPage) <= 1
                  );
                })
                .reduce((acc, p, idx, arr) => {
                  if (idx > 0 && p - arr[idx - 1] > 1) {
                    acc.push('ellipsis-' + p);
                  }
                  acc.push(p);
                  return acc;
                }, [])
                .map((item) => {
                  if (typeof item === 'string') {
                    return (
                      <span key={item} className="px-2 text-xs text-muted">
                        …
                      </span>
                    );
                  }
                  const isCurrent = item === validCurrentPage;
                  return (
                    <button
                      key={`page-${item}`}
                      type="button"
                      onClick={() => handlePageChange(item)}
                      aria-current={isCurrent ? 'page' : undefined}
                      className={`min-w-8 h-8 px-2 text-xs font-serif font-bold rounded-xs cursor-pointer transition-all ${
                        isCurrent
                          ? 'bg-maroon text-white border border-maroon shadow-xs'
                          : 'bg-paper text-maroon border border-line hover:border-gold hover:bg-cream'
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}

              {/* Next Page */}
              <button
                type="button"
                onClick={() => handlePageChange(validCurrentPage + 1)}
                disabled={validCurrentPage === totalPages}
                aria-label="Next page"
                className="p-2 border border-line bg-paper text-maroon hover:bg-cream disabled:opacity-40 disabled:cursor-not-allowed rounded-xs transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Last Page */}
              <button
                type="button"
                onClick={() => handlePageChange(totalPages)}
                disabled={validCurrentPage === totalPages}
                aria-label="Last page"
                className="p-2 border border-line bg-paper text-maroon hover:bg-cream disabled:opacity-40 disabled:cursor-not-allowed rounded-xs transition-colors cursor-pointer"
              >
                <ChevronsRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

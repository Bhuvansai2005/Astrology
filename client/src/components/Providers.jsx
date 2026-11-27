import { useState, useEffect } from 'react';
import { LanguageContext, CartContext } from '../hooks';
import { translations } from '../locales';

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('apb_language') || 'en';
    } catch {
      return 'en';
    }
  });
  const [showLanguagePrompt, setShowLanguagePrompt] = useState(() => {
    try {
      return !sessionStorage.getItem('apb_lang_prompt_dismissed');
    } catch {
      return true;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('apb_language', lang);
      document.documentElement.lang = lang;
    } catch (e) {
      console.error(e);
    }
  }, [lang]);

  const selectLanguage = (nextLanguage) => {
    setLang(nextLanguage);
    try {
      localStorage.setItem('apb_language_selected', 'true');
      sessionStorage.setItem('apb_lang_prompt_dismissed', 'true');
    } catch (e) {
      console.error(e);
    }
    setShowLanguagePrompt(false);
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'kn' ? 'en' : 'kn'));
    try {
      localStorage.setItem('apb_language_selected', 'true');
      sessionStorage.setItem('apb_lang_prompt_dismissed', 'true');
    } catch (e) {
      console.error(e);
    }
  };

  const openLanguageModal = () => setShowLanguagePrompt(true);
  const closeLanguageModal = () => {
    try {
      sessionStorage.setItem('apb_lang_prompt_dismissed', 'true');
    } catch (e) {
      console.error(e);
    }
    setShowLanguagePrompt(false);
  };

  const t = translations[lang] || translations.kn;

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLanguage: selectLanguage,
        toggleLanguage,
        openLanguageModal,
        closeLanguageModal,
        t,
      }}
    >
      {children}
      {showLanguagePrompt && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#28120f]/70 px-4 backdrop-blur-sm transition-all"
          role="dialog"
          aria-modal="true"
          aria-labelledby="language-selection-title"
          onClick={closeLanguageModal}
        >
          <div
            className="relative w-full max-w-sm border border-[#ded5c3] bg-white p-7 text-center shadow-[0_24px_70px_rgba(31,14,10,0.28)] md:p-9 animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLanguageModal}
              className="absolute top-3 right-3 text-[#756a60] hover:text-[#591d1b] text-lg font-bold p-1 leading-none cursor-pointer"
              aria-label="Close language selection"
            >
              ✕
            </button>
            <span className="grid h-14 w-14 place-items-center rounded-full border border-[#b8995f] mx-auto mb-5 text-[#6f2623] font-serif text-2xl select-none" aria-hidden="true">
              ॐ
            </span>
            <h2
              id="language-selection-title"
              className="m-0 mb-2 font-serif text-2xl text-[#591d1b]"
            >
              Choose your language
            </h2>
            <p className="m-0 mb-1 text-sm text-[#756a60]">
              ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ
            </p>
            <p className="m-0 mb-6 text-xs text-[#756a60]">
              Select a language to continue
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => selectLanguage('en')}
                className={`border border-[#591d1b] px-4 py-3 text-sm font-bold transition-colors cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[#591d1b] text-white shadow-sm'
                    : 'bg-white text-[#591d1b] hover:bg-[#591d1b]/10'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => selectLanguage('kn')}
                className={`border border-[#591d1b] px-4 py-3 text-sm font-bold transition-colors cursor-pointer ${
                  lang === 'kn'
                    ? 'bg-[#591d1b] text-white shadow-sm'
                    : 'bg-white text-[#591d1b] hover:bg-[#591d1b]/10'
                }`}
              >
                ಕನ್ನಡ
              </button>
            </div>
          </div>
        </div>
      )}
    </LanguageContext.Provider>
  );
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('apb_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('apb_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find(
        (i) => (item.id && i.id === item.id) || i.name === item.name
      );
      if (existing) {
        return prev.map((i) =>
          (item.id && i.id === item.id) || i.name === item.name
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i
        );
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (name, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.name === name) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (name) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  const clearCart = () => {
    setCart([]);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        openCart,
        closeCart,
        toggleCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}


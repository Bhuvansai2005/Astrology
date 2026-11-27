import { useNavigate } from 'react-router-dom';
import { Button } from './UI';
import { useCart, useLanguage } from '../hooks';

export function CartItem({ item, onUpdateQuantity }) {
  const { t } = useLanguage();
  const itemKey = item.bookId || item.id;
  const displayName = (itemKey && t.bookDetailsPage?.books?.[itemKey]?.title) || item.name;

  return (
    <div className="flex justify-between items-center gap-[15px] py-4 border-b border-line">
      <div>
        <strong className="block text-maroon font-serif font-medium text-[17px]">
          {displayName}
        </strong>
        <small className="text-muted text-[12px]">
          ₹{item.price} × {item.quantity}
        </small>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onUpdateQuantity(item.name, -1)}
          className="border border-line bg-white w-[26px] h-[26px] cursor-pointer text-maroon hover:bg-cream transition-colors font-bold text-sm flex items-center justify-center select-none"
          aria-label={t.cart.removeOne}
        >
          −
        </button>
        <span className="text-sm font-semibold text-ink min-w-[16px] text-center">
          {item.quantity}
        </span>
        <button
          type="button"
          onClick={() => onUpdateQuantity(item.name, 1)}
          className="border border-line bg-white w-[26px] h-[26px] cursor-pointer text-maroon hover:bg-cream transition-colors font-bold text-sm flex items-center justify-center select-none"
          aria-label={t.cart.addOne}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default function CartDrawer() {
  const { cart, isCartOpen, closeCart, updateQuantity, subtotal } = useCart();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  return (
    <>
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-[#1f0f0d99] transition-opacity duration-250 z-40 ${
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      <aside
        id="cart"
        aria-label={t.cart.yourCart}
        className={`fixed right-0 top-0 bottom-0 w-[min(410px,100%)] bg-paper z-50 p-6 md:p-[30px] shadow-[-10px_0_35px_rgba(0,0,0,0.13)] flex flex-col transition-transform duration-300 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center border-b border-line pb-[18px]">
          <h2 className="text-maroon font-serif font-medium text-[30px] m-0">
            {t.cart.yourCart}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="border-0 bg-transparent text-maroon text-[30px] cursor-pointer leading-none p-1 hover:text-saffron transition-colors"
          >
            ×
          </button>
        </div>

        <div className="flex-1 py-[18px] overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-muted text-[14px] py-4 text-center">{t.cart.empty}</p>
          ) : (
            cart.map((item) => (
              <CartItem key={item.name} item={item} onUpdateQuantity={updateQuantity} />
            ))
          )}
        </div>

        <div className="border-t border-line pt-5 mt-auto">
          <div className="flex justify-between items-center mb-[18px]">
            <span className="text-muted text-sm uppercase tracking-wider font-semibold">
              {t.cart.subtotal}
            </span>
            <strong className="text-[20px] text-maroon font-serif font-medium">
              ₹{subtotal}
            </strong>
          </div>
          <Button
            variant="primary"
            disabled={cart.length === 0}
            onClick={handleProceedToCheckout}
            className="w-full justify-center"
          >
            {t.cart.proceedBtn} <span>→</span>
          </Button>
        </div>
      </aside>
    </>
  );
}


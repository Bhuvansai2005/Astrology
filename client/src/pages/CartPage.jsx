import { Button, Container, SectionKicker } from '../components/UI';
import { CartItem } from '../components/CartDrawer';
import { useCart, useLanguage } from '../hooks';

export default function CartPage() {
  const { cart, subtotal, updateQuantity, clearCart } = useCart();
  const { t } = useLanguage();
  const c = t.cart;

  return (
    <div className="py-[72px] md:py-[105px] bg-paper">
      <Container>
        <div className="mb-10">
          <SectionKicker number={c.pageKickerNumber} label={c.pageKickerLabel} />
          <h1 className="font-serif font-medium text-[clamp(32px,4vw,55px)] leading-[1.1] text-maroon mt-3 mb-2">
            {c.pageTitle}
          </h1>
          <p className="text-muted text-[15px]">{c.pageSubtitle}</p>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white border border-line p-12 text-center max-w-xl mx-auto my-8">
            <span className="mx-auto mb-3 block font-serif text-3xl text-gold select-none leading-none" aria-hidden="true">
              ॐ
            </span>
            <h2 className="text-xl font-serif text-maroon mb-2">{c.emptyTitle}</h2>
            <p className="text-muted text-sm mb-6">{c.emptyDesc}</p>
            <Button variant="primary" href="/books">
              {c.exploreBooksBtn} <span>→</span>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr] gap-8 items-start">
            <div className="bg-white border border-line p-6 md:p-8">
              <div className="flex justify-between items-center pb-4 border-b border-line mb-4">
                <h2 className="font-serif font-medium text-xl text-maroon m-0">
                  {c.itemsCount} ({cart.length})
                </h2>
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs text-muted hover:text-maroon underline cursor-pointer"
                >
                  {c.clearAll}
                </button>
              </div>

              <div className="divide-y divide-line">
                {cart.map((item) => (
                  <CartItem key={item.name} item={item} onUpdateQuantity={updateQuantity} />
                ))}
              </div>
            </div>

            <div className="bg-cream border border-line p-6 md:p-8">
              <h2 className="font-serif font-medium text-xl text-maroon pb-4 border-b border-line mb-4">
                {t.checkout.summaryTitle}
              </h2>

              <div className="space-y-3 text-sm pb-4 border-b border-line">
                <div className="flex justify-between text-muted">
                  <span>{c.booksSubtotal}</span>
                  <span className="font-semibold text-ink">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>{c.shippingLabel}</span>
                  <span className="text-success-text font-semibold">{c.shippingNotice}</span>
                </div>
              </div>

              <div className="flex justify-between items-center py-4 text-lg font-serif">
                <span className="text-maroon font-bold">{c.estimatedTotal}</span>
                <span className="text-maroon font-bold text-2xl">₹{subtotal}</span>
              </div>

              <Button variant="primary" href="/checkout" className="w-full justify-center mt-2">
                {c.proceedBtn} <span>→</span>
              </Button>

              <p className="text-[11px] text-muted text-center mt-4 leading-relaxed">
                {c.noPaymentNotice}
              </p>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}


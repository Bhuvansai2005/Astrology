import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, SectionKicker } from '../components/UI';
import { useCart, useLanguage } from '../hooks';
import { BUSINESS, CATALOG_ITEMS } from '../config';

// Defensive sanitizer to prevent WhatsApp markdown formatting disruption or injection
function sanitizeText(str = '') {
  return str.replace(/[*_~`]/g, '').trim();
}

export default function CheckoutPage() {
  const { cart, subtotal, clearCart } = useCart();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [pendingOrder, setPendingOrder] = useState(null);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Step 1: Validate, sanitize, re-verify prices against catalogue, and prepare WhatsApp preview
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setError('');

    const cleanName = sanitizeText(formData.name);
    const cleanAddress = sanitizeText(formData.address);
    const digitsOnlyPhone = formData.phone.replace(/\D/g, '');

    if (cleanName.length < 2) {
      setError(t.checkout?.nameError || 'Please enter a valid full name.');
      return;
    }

    // Validate 10-digit Indian mobile number
    if (digitsOnlyPhone.length < 10 || !/^[6-9]\d{9}$/.test(digitsOnlyPhone.slice(-10))) {
      setError(t.checkout?.phoneError || 'Please enter a valid 10-digit mobile number.');
      return;
    }

    if (cleanAddress.length < 5) {
      setError(t.checkout?.addressError || 'Please provide a complete delivery address with PIN code.');
      return;
    }

    const refCode =
      'APB-' +
      Date.now().toString(36).toUpperCase() +
      '-' +
      Math.random().toString(36).substring(2, 6).toUpperCase();

    // Security mitigation: Recalculate price from source-of-truth CATALOG_ITEMS to prevent client tampering
    let verifiedSubtotal = 0;
    const items = cart.map((item) => {
      const canonicalBook = CATALOG_ITEMS.find((b) => b.id === (item.bookId || item.id));
      const authoritativePrice = canonicalBook ? canonicalBook.price : item.price;
      const safeQuantity = Math.max(1, Math.floor(Number(item.quantity) || 1));
      verifiedSubtotal += authoritativePrice * safeQuantity;

      return {
        bookId: item.bookId || item._id || item.id,
        name: sanitizeText(canonicalBook?.title || item.name),
        price: authoritativePrice,
        quantity: safeQuantity,
        type: item.type || 'physical',
      };
    });

    const itemsList = items
      .map((item) => `• ${item.name} (Qty: ${item.quantity}) - ₹${item.price * item.quantity}`)
      .join('\n');

    const msg = `*New Order - Adya Pustaka Bhandara*\n\n*Order Ref:* ${refCode}\n*Name:* ${cleanName}\n*Phone:* ${digitsOnlyPhone.slice(-10)}\n${
      formData.email ? `*Email:* ${formData.email.trim()}\n` : ''
    }*Address:* ${cleanAddress}\n\n*Items:*\n${itemsList}\n\n*Total:* ₹${verifiedSubtotal}\n\nKindly confirm edition availability, postage, and payment instructions.`;

    setWhatsappUrl(`${BUSINESS.orderWhatsapp}?text=${encodeURIComponent(msg)}`);
    setPendingOrder({
      orderRef: refCode,
      name: cleanName,
      phone: digitsOnlyPhone.slice(-10),
      email: formData.email ? formData.email.trim() : undefined,
      address: cleanAddress,
      items,
      subtotal: verifiedSubtotal,
    });
  };

  // Step 2: Open WhatsApp and save order details locally
  const openWhatsAppAndPlaceOrder = () => {
    if (!pendingOrder || !whatsappUrl) return;

    setError('');
    setSubmitting(true);

    const whatsappWindow = window.open(whatsappUrl, '_blank');
    if (!whatsappWindow) {
      setSubmitting(false);
      setError(t.checkout?.popupBlockedError || 'Popup blocked. Please click the direct WhatsApp link below.');
      return;
    }

    try {
      whatsappWindow.opener = null;
    } catch {
      // Ignore opener assignment errors on restricted contexts
    }

    const orderSubtotal = pendingOrder.subtotal ?? subtotal;
    const orderData = {
      orderRef: pendingOrder.orderRef,
      customer: {
        name: pendingOrder.name,
        phone: pendingOrder.phone,
        email: pendingOrder.email,
        address: pendingOrder.address,
      },
      items: pendingOrder.items,
      subtotal: orderSubtotal,
      total: orderSubtotal,
      createdAt: new Date().toISOString(),
    };

    try {
      sessionStorage.setItem(
        `apb_order_${orderData.orderRef}`,
        JSON.stringify({ order: orderData, whatsappUrl })
      );
      // Keep customer's recent orders in localStorage as backup
      const existingHistory = JSON.parse(localStorage.getItem('apb_orders') || '[]');
      existingHistory.unshift(orderData);
      localStorage.setItem('apb_orders', JSON.stringify(existingHistory.slice(0, 50)));
    } catch {
      // Ignore storage errors
    }

    setPendingOrder(null);
    clearCart();
    navigate(`/order/${orderData.orderRef}`, {
      state: { order: orderData, whatsappUrl },
    });
  };

  return (
    <section id="checkout" className="bg-cream py-[72px] md:py-[105px]">
      <Container className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-[45px] lg:gap-[75px]">
        <div>
          <SectionKicker number={t.checkout.kickerNumber} label={t.checkout.kickerLabel} />
          <h2 className="font-serif font-medium text-[clamp(34px,4vw,55px)] leading-[1.2] text-maroon m-0 mt-3 mb-2">
            {t.checkout.title1}{' '}
            <em className="not-italic text-gold-light">{t.checkout.title2}</em>
          </h2>
          <p className="text-muted text-[14px] m-0 mb-6">{t.checkout.note}</p>

          {error && (
            <div className="mb-4 p-3 border border-red-200 bg-red-50 text-red-700 text-sm">
              {error}
            </div>
          )}

          {pendingOrder ? (
            <div className="py-[30px] border-t border-line space-y-5">
              <div>
                <h3 className="text-maroon font-serif font-medium text-[24px] m-0 mb-2">
                  {t.checkout.whatsappStepTitle}
                </h3>
                <p className="text-muted text-[15px] m-0 leading-relaxed">
                  {t.checkout.whatsappStepDesc}
                </p>
              </div>

              <div className="flex flex-col items-start gap-3">
                <div className="w-full border border-success-text/30 bg-success-bg px-4 py-3 text-sm font-medium text-success-text">
                  {t.checkout.whatsappFollowUpNotice}
                </div>
                <Button
                  variant="primary"
                  onClick={openWhatsAppAndPlaceOrder}
                  disabled={submitting}
                >
                  {submitting ? t.checkout.savingBtn : t.checkout.openWhatsappOrderBtn}{' '}
                  <span>↗</span>
                </Button>
                {error && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-maroon underline"
                  >
                    {t.checkout.retryWhatsappBtn}
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setPendingOrder(null);
                    setError('');
                  }}
                  disabled={submitting}
                  className="text-xs text-saffron font-bold underline cursor-pointer bg-transparent border-0 p-0 mt-2"
                >
                  ← {t.checkout.editDetailsBtn}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-[17px] mt-[30px]">
              <label className="grid gap-1.5 text-maroon text-[12px] font-bold">
                {t.checkout.fullName}
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.checkout.fullNamePlaceholder}
                  className="border border-line bg-white p-[13px] text-[14px] font-sans text-ink outline-none focus:border-maroon transition-colors"
                />
              </label>

              <label className="grid gap-1.5 text-maroon text-[12px] font-bold">
                {t.checkout.phone}
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.checkout.phonePlaceholder}
                  className="border border-line bg-white p-[13px] text-[14px] font-sans text-ink outline-none focus:border-maroon transition-colors"
                />
              </label>

              <label className="grid gap-1.5 text-maroon text-[12px] font-bold">
                {t.checkout.email}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.checkout.emailPlaceholder}
                  className="border border-line bg-white p-[13px] text-[14px] font-sans text-ink outline-none focus:border-maroon transition-colors"
                />
              </label>

              <label className="grid gap-1.5 text-maroon text-[12px] font-bold">
                {t.checkout.deliveryAddress}
                <textarea
                  required
                  name="address"
                  rows={3}
                  value={formData.address}
                  onChange={handleChange}
                  placeholder={t.checkout.addressPlaceholder}
                  className="border border-line bg-white p-[13px] text-[14px] font-sans text-ink outline-none focus:border-maroon transition-colors resize-y"
                />
              </label>

              <div className="mt-2">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={cart.length === 0 || submitting}
                  className="w-full md:w-auto justify-center"
                >
                  {t.checkout.placeOrderBtn} <span>→</span>
                </Button>
              </div>
            </form>
          )}
        </div>

        <div className="self-start bg-white border border-line p-5 md:p-7">
          <h3 className="m-0 text-maroon font-serif font-medium text-[24px] pb-3 border-b border-line">
            {t.checkout.summaryTitle}
          </h3>

          <div className="py-2">
            {cart.length === 0 ? (
              <p className="text-muted text-sm py-4">{t.checkout.emptySummary}</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center gap-3 py-3 border-b border-line text-[13px]"
                >
                  <span className="text-muted">
                    {((item.bookId || item.id) &&
                      t.categories.items[item.bookId || item.id]?.title) ||
                      item.name}{' '}
                    × {item.quantity}
                  </span>
                  <strong className="text-maroon font-semibold">
                    ₹{item.price * item.quantity}
                  </strong>
                </div>
              ))
            )}
          </div>

          <div className="border-t border-line pt-[18px] mt-[14px] flex justify-between items-center">
            <span className="font-semibold text-ink text-base">{t.checkout.total}</span>
            <strong className="text-[20px] text-maroon font-serif font-medium">₹{subtotal}</strong>
          </div>

          <p className="text-muted text-xs mt-3 leading-relaxed">{t.checkout.noPaymentNote}</p>
          <p className="text-muted text-xs mt-4 leading-relaxed">
            {t.checkout.legalNotice}{' '}
            <Link className="text-maroon underline" to="/privacy-policy">
              {t.checkout.privacyPolicyLink}
            </Link>{' '}
            {t.checkout.andAgree}{' '}
            <Link className="text-maroon underline" to="/terms-and-conditions">
              {t.checkout.termsLink}
            </Link>
            . {t.checkout.legalNoticeEnd}
          </p>
        </div>
      </Container>
    </section>
  );
}

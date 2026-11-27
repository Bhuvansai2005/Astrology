import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Button, Container, SectionKicker } from '../components/UI';
import { useLanguage } from '../hooks';
import { BUSINESS } from '../config';

function getCachedOrderData(orderRef) {
  try {
    const cached = sessionStorage.getItem(`apb_order_${orderRef}`);
    if (cached) return JSON.parse(cached);

    // Fallback: check localStorage history
    const history = JSON.parse(localStorage.getItem('apb_orders') || '[]');
    const matched = history.find((o) => o.orderRef === orderRef);
    return matched ? { order: matched } : null;
  } catch {
    return null;
  }
}

export default function OrderConfirmationPage() {
  const { orderRef } = useParams();
  const location = useLocation();
  const { t } = useLanguage();
  const oc = t.orderConfirmation;

  const [order] = useState(
    () => location.state?.order || getCachedOrderData(orderRef)?.order || null
  );
  const [whatsappUrl] = useState(
    () => location.state?.whatsappUrl || getCachedOrderData(orderRef)?.whatsappUrl || ''
  );

  const fallbackWhatsapp = `${BUSINESS.whatsapp}?text=${encodeURIComponent(
    `Adya Pustaka Bhandara — Order Ref: ${orderRef}`
  )}`;

  return (
    <div className="py-[72px] md:py-[105px] bg-paper">
      <Container>
        <div className="max-w-2xl mx-auto bg-white border border-line p-8 md:p-12 text-center shadow-sm">
          <span className="grid place-items-center w-14 h-14 rounded-full bg-success-bg text-success-text text-3xl font-bold mx-auto mb-4">
            ✓
          </span>

          <SectionKicker number={oc.kickerNumber} label={oc.kickerLabel} className="justify-center mb-2" />
          <h1 className="font-serif font-medium text-3xl md:text-4xl text-maroon m-0 mb-3">
            {oc.title}
          </h1>
          <p className="text-muted text-[15px] mb-4">{oc.refIs}</p>

          <div className="inline-block px-5 py-2.5 bg-cream border border-gold rounded text-maroon font-mono font-bold text-lg mb-6">
            {order?.orderRef || orderRef || 'APB-ORDER-PENDING'}
          </div>

          <p className="text-muted text-sm leading-relaxed max-w-lg mx-auto mb-8">{oc.desc}</p>
          <div className="mb-8 border border-success-text/30 bg-success-bg px-4 py-3 text-sm font-medium text-success-text">
            {oc.whatsappNotice}
          </div>

          {order && (
            <div className="text-left bg-cream border border-line p-5 md:p-6 mb-8 space-y-5">
              {order.customer && (
                <div>
                  <h2 className="font-serif font-semibold text-base text-maroon mb-2 pb-1.5 border-b border-line">
                    {oc.customerDetailsHeading}
                  </h2>
                  <div className="text-xs text-muted space-y-1">
                    <p>
                      <strong className="text-ink">{oc.nameLabel}</strong> {order.customer.name}
                    </p>
                    <p>
                      <strong className="text-ink">{oc.phoneLabel}</strong> {order.customer.phone}
                    </p>
                    {order.customer.address && (
                      <p>
                        <strong className="text-ink">{oc.addressLabel}</strong> {order.customer.address}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {Array.isArray(order.items) && order.items.length > 0 && (
                <div>
                  <h2 className="font-serif font-semibold text-base text-maroon mb-2 pb-1.5 border-b border-line">
                    {oc.itemsHeading}
                  </h2>
                  <div className="space-y-2 text-xs">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-ink">
                        <span>
                          {item.name} × {item.quantity}
                        </span>
                        <span className="font-semibold text-maroon">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-3 mt-3 border-t border-line font-serif">
                    <span className="text-maroon font-bold">{oc.totalPaidLabel}</span>
                    <span className="text-maroon font-bold text-lg">₹{order.total}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="flex justify-center gap-4 flex-wrap">
            <Button variant="primary" href={whatsappUrl || fallbackWhatsapp}>
              {oc.openWhatsappBtn} <span>↗</span>
            </Button>
            <Button variant="outline-dark" href="/">
              {oc.returnHomeBtn}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

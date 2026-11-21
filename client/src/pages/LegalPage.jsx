import { Container, SectionKicker } from '../components/UI';

const policySections = [
  {
    title: '1. Information We Collect',
    body: 'When you contact us or place an order, we may collect your name, mobile number, email address, other contact details you provide, selected books, quantities, order preferences, order-related communication, delivery address, and messages shared through WhatsApp, phone, or email. We collect only the information necessary to process your orders and communicate with you.',
  },
  {
    title: '2. How We Use Your Information',
    body: 'We may use your information to process and manage orders; confirm order details and availability; communicate about payment, collection, or delivery arrangements; respond to questions, complaints, and customer-service requests; maintain order and transaction records; protect our website and prevent misuse or fraud; and meet applicable legal and regulatory obligations. We do not use your order information for unrelated purposes without an appropriate legal basis.',
  },
  {
    title: '3. WhatsApp Communication',
    body: "When you choose to contact us or place an order through WhatsApp, the information you share is processed by WhatsApp in accordance with its own terms and privacy policy. Please review WhatsApp's privacy information before using the service. We use WhatsApp to communicate about orders, answer questions, and coordinate order-related arrangements.",
  },
  {
    title: '4. Cookies and Browser Storage',
    body: 'We currently do not use advertising or analytics cookies. Local Storage remembers cart items and selected language preference. Session Storage temporarily retains order-confirmation information during your browsing session. These are browser-storage features rather than cookies. Local Storage may remain until cleared, while Session Storage is generally associated with the browser tab session. Clearing browser storage may remove saved cart items, language preferences, or temporary confirmation information. If we introduce analytics, advertising pixels, tracking technologies, or services that use cookies, we will update this policy and provide notices or consent options required by applicable law.',
  },
  {
    title: '5. Sharing of Information',
    body: 'We do not sell or rent your personal information. We may share relevant information when reasonably necessary with WhatsApp when you choose to communicate or submit order information through it, and with delivery or logistics providers when required to deliver your order. We do not share personal information with third parties for advertising or marketing purposes.',
  },
  {
    title: '6. Data Storage and Security',
    body: 'We take reasonable measures to protect personal information against unauthorised access, misuse, or disclosure and handle it only for the purposes described in this policy.',
  },
  {
    title: '7. Data Retention',
    body: 'We retain personal information only as long as reasonably necessary for order fulfilment, customer support, business records, dispute resolution, and compliance with legal obligations. Retention may vary by information type and purpose. Where information is no longer required and there is no legal reason to retain it, we will take reasonable steps to delete it.',
  },
  {
    title: '8. Your Choices and Privacy Requests',
    body: 'You may ask what personal information we hold about you, request correction of inaccurate or incomplete information, request deletion where legally and operationally permitted, raise a concern about how information is used, or withdraw consent where processing relies on consent and applicable law permits. We may verify your identity and retain information required by law or necessary for business records and dispute handling. Please visit our Contact Us page to make a privacy request.',
  },
  {
    title: '9. Third-Party Websites and Services',
    body: 'Our website may contain links to third-party websites or services, including WhatsApp. We do not control the privacy practices, security, or content of third-party services. Your use of those services is subject to their own terms and privacy policies.',
  },
  {
    title: '10. Changes to This Privacy Policy',
    body: 'We may update this Privacy Policy when our website, business practices, services, or legal requirements change. The revised version will be published on this page with an updated Last Updated date. We encourage you to review this page periodically.',
  },
  {
    title: '11. Contact Us',
    body: 'For questions regarding this Privacy Policy or your personal information, please visit our Contact Us page.',
  },
];

const termsSections = [
  {
    title: '1. About Our Website',
    body: 'Adya Pustaka Bhandara provides an online catalogue where customers can browse books, view prices, add items to their cart, and submit order details through WhatsApp.',
  },
  {
    title: '2. Products and Availability',
    body: 'We make reasonable efforts to display accurate book details, images, and prices. Product images are for identification purposes and actual products may have minor differences in appearance. Product availability may change without prior notice. Adding a book to your cart does not guarantee that it is reserved or available. We will inform you if a requested book is unavailable.',
  },
  {
    title: '3. Prices and Charges',
    body: 'All displayed prices are in Indian Rupees (INR), unless stated otherwise. Prices may change without prior notice. Applicable delivery charges or additional costs will be communicated before the order is finalised. The final order amount will be confirmed during order communication.',
  },
  {
    title: '4. Orders and Confirmation',
    body: 'Customers can select books and submit their order details through WhatsApp. Sending an order request does not automatically mean that the order has been accepted. We will confirm product availability, pricing, payment arrangements, and delivery or collection details. An order is confirmed only after confirmation from Adya Pustaka Bhandara. We may decline an order if the product is unavailable, the displayed price is incorrect, or the order cannot be fulfilled. We will inform you if this happens.',
  },
  {
    title: '5. Payment',
    body: 'Our website currently does not provide an online payment gateway. Payment methods and arrangements will be communicated directly during order confirmation. Customers should follow the payment instructions provided by Adya Pustaka Bhandara. The payment amount and any applicable charges will be confirmed before the order is finalised.',
  },
  {
    title: '6. Delivery and Collection',
    body: 'Delivery and collection arrangements will be communicated during order confirmation. Delivery availability, estimated timelines, and charges may depend on the customer’s location. Customers must provide accurate contact and delivery details. Any specific delivery commitment will be communicated before the order is finalised. We will inform customers about unexpected delivery delays.',
  },
  {
    title: '7. Cancellation, Returns and Refunds',
    body: 'Customers who wish to cancel an order should contact us as soon as possible. Cancellation requests will be handled based on the order’s processing and delivery status. If a book is received damaged, defective, or incorrect, customers should contact us with their order details and relevant photographs where applicable. Return, replacement, and refund requests will be handled in accordance with applicable policies and consumer protection laws. Approved refunds will be processed through an appropriate payment method within the applicable timeframe. Please contact us for assistance.',
  },
  {
    title: '8. Customer Responsibilities',
    body: 'Customers agree to provide accurate contact and delivery information; check selected books, quantities, and order details before submitting an order; use the website only for lawful purposes; avoid activities that may disrupt or damage the website; and not attempt unauthorised access to the website or its administrative features.',
  },
  {
    title: '9. Privacy',
    body: 'Your personal information will be handled in accordance with our Privacy Policy. Please read our Privacy Policy to understand how we collect, use, and protect the information you provide when browsing our website or placing an order.',
  },
  {
    title: '10. Contact and Updates',
    body: 'For questions about products, orders, payments, delivery, cancellations, returns, or these Terms and Conditions, please visit our Contact Us page. We may update these Terms and Conditions when our website, business practices, or legal requirements change. The revised version will be published on this page with an updated Last Updated date.',
  },
];

function LegalPage({ title, label, sections, updated }) {
  return (
    <div className="bg-paper py-[72px] md:py-[105px]">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionKicker number="LEGAL" label={label} />
          <h1 className="font-serif font-medium text-[clamp(34px,5vw,60px)] text-maroon mt-3 mb-8">
            {title}
          </h1>
          {updated && (
            <p className="text-muted text-xs mb-6">
              <strong>Adya Pustaka Bhandara</strong> · Last Updated: {updated}
            </p>
          )}
          <div className="bg-white border border-line p-6 md:p-10 space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-serif text-xl text-maroon mb-2">{section.title}</h2>
                <p className="text-muted text-sm leading-relaxed m-0">{section.body}</p>
              </section>
            ))}
            {title === 'Terms and Conditions' && (
              <p className="border-t border-line pt-5 text-xs text-muted m-0">
                By using our website, you acknowledge that you have had the opportunity to read these Terms and Conditions.
              </p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      label="PRIVACY"
      updated="12 November 2026"
      sections={policySections}
    />
  );
}

export function TermsAndConditionsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      label="TERMS"
      updated="12 November 2026"
      sections={termsSections}
    />
  );
}

import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider, CartProvider } from './components/Providers';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CataloguePage from './pages/CataloguePage';
import BookDetailsPage from './pages/BookDetailsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import {
  AstrologyServicesPage,
  VastuServicesPage,
  OtherServicesPage,
} from './pages/ServicePages';
import ClassesPage from './pages/ClassesPage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import SellerDashboardPage from './pages/SellerDashboardPage';
import { PrivacyPolicyPage, TermsAndConditionsPage } from './pages/LegalPage';

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <ScrollToTopOnRouteChange />
        <Routes>
          <Route path="/dashboard" element={<SellerDashboardPage />} />
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/books" element={<CataloguePage />} />
            <Route path="/books/:slug" element={<BookDetailsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order/:orderRef" element={<OrderConfirmationPage />} />
            <Route path="/services/astrology" element={<AstrologyServicesPage />} />
            <Route path="/services/vastu" element={<VastuServicesPage />} />
            <Route path="/services/other" element={<OtherServicesPage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/announcements" element={<AnnouncementsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </LanguageProvider>
  );
}

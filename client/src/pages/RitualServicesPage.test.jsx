import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { LanguageContext } from '../hooks';
import { translations } from '../locales';
import ConsultancyServicePage from './ConsultancyServicePage';
import HomePage from './HomePage';
import RitualServicesPage from './RitualServicesPage';
import YantrasPage from './YantrasPage';

function renderRoute(path) {
  return renderToStaticMarkup(
    createElement(
      LanguageContext.Provider,
      { value: { lang: 'en', t: translations.en } },
      createElement(
        MemoryRouter,
        { initialEntries: [path] },
        createElement(
          Routes,
          null,
          createElement(Route, { path: '/', element: createElement(HomePage) }),
          createElement(Route, {
            path: '/services/rituals/:type',
            element: createElement(RitualServicesPage),
          }),
          createElement(Route, {
            path: '/services/consultations/:type',
            element: createElement(ConsultancyServicePage),
          }),
          createElement(Route, { path: '/yantras', element: createElement(YantrasPage) })
        )
      )
    )
  );
}

describe('ritual service navigation', () => {
  it('links all ritual categories from home without listing their services inline', () => {
    const home = renderRoute('/');

    for (const type of ['pooja', 'homa', 'parayana', 'shanti']) {
      expect(home).toContain(`href="/services/rituals/${type}"`);
    }

    expect(home).toContain('href="/yantras"');
    for (const type of ['horoscope', 'prashna', 'vastu', 'numerology', 'timing']) {
      expect(home).toContain(`href="/services/consultations/${type}"`);
    }
    expect(home).toContain('href="/classes"');

    expect(home).not.toContain('ಗಣಪತಿ ಪೂಜೆ');
    expect(home).not.toContain('ಗಣಪತಿ ಹೋಮ');
    expect(home).not.toContain('ವೇದಪಾರಾಯಣ');
    expect(home).not.toContain('ಗೃಹಪ್ರವೇಶ ಶಾಂತಿ');
    expect(home).not.toContain('ವಾಸ್ತು ಯಂತ್ರ');
    expect(home).not.toContain('ಕವಡೆ ಪ್ರಶ್ನೆ');
    expect(home).not.toContain('Introduction to Rashis');
  });

  it.each([
    ['pooja', 'Sacred Pooja Rituals', 'ಗಣಪತಿ ಪೂಜೆ'],
    ['homa', 'Vedic Sacred Homas', 'ಗಣಪತಿ ಹೋಮ'],
    ['parayana', 'Scriptural Parayanas', 'ವೇದಪಾರಾಯಣ'],
    ['shanti', 'Remedial &amp; Astrological Shantis', 'ಗೃಹಪ್ರವೇಶ ಶಾಂತಿ'],
  ])('renders the %s service list on its dedicated route', (type, title, firstService) => {
    const page = renderRoute(`/services/rituals/${type}`);

    expect(page).toContain(title);
    expect(page).toContain(firstService);
  });

  it('renders yantra details on their dedicated route', () => {
    const page = renderRoute('/yantras');

    expect(page).toContain('Vastu Yantra');
    expect(page).toContain('ಮತ್ಸ್ಯ ಯಂತ್ರ');
  });

  it.each([
    ['horoscope', 'Horoscope Consultation', 'ವಿವಾಹ ಹೊಂದಾಣಿಕೆ ಮುಹೂರ್ತ ನಿರ್ಣಯ'],
    ['prashna', 'Prashna Shastra', 'ಕವಡೆ ಪ್ರಶ್ನೆ'],
    ['vastu', 'Vastu Shastra &amp; Remedies', 'ಪಿರಮಿಡ್ ಪರಿಹಾರಗಳು'],
    ['numerology', 'Numerology Consultations', 'ವಾಹನ ಸಂಖ್ಯಾಶಾಸ್ತ್ರ'],
    ['timing', 'Property &amp; Deal Timing', 'ಮನೆ ವಾಹನ ಜಮೀನು'],
  ])('renders the %s consultation details on its dedicated route', (type, title, item) => {
    const page = renderRoute(`/services/consultations/${type}`);

    expect(page).toContain(title);
    expect(page).toContain(item);
  });
});

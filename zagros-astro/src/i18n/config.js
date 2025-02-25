import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './en';
import arTranslations from './ar';

// Get the initial language from URL path or default to 'en'
const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    const pathSegments = window.location.pathname.split('/');
    const lang = pathSegments[1];
    return lang === 'ar' ? 'ar' : 'en';
  }
  return 'en';
};

// Initialize i18next
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: enTranslations
        },
        ar: {
          translation: arTranslations
        }
      },
      lng: getInitialLanguage(),
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false
      },
      react: {
        useSuspense: false
      },
      // Add these options for better Arabic support
      returnNull: false,
      returnEmptyString: false,
      load: 'currentOnly'
    });

  // Add language change handler
  if (typeof window !== 'undefined') {
    window.addEventListener('popstate', () => {
      const pathSegments = window.location.pathname.split('/');
      const lang = pathSegments[1];
      if (lang === 'ar' || lang === 'en') {
        i18n.changeLanguage(lang);
      }
    });
  }
}

export default i18n;

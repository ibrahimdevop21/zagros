import i18next from 'i18next';
import enTranslations from './en';
import arTranslations from './ar';

async function initI18n() {
  await i18next.init({
    resources: {
      en: {
        translation: enTranslations
      },
      ar: {
        translation: arTranslations
      }
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

  return i18next;
}

// Helper function to get translations
export function t(key) {
  if (!i18next.isInitialized) {
    return key;
  }
  return i18next.t(key);
}

export { initI18n, i18next };

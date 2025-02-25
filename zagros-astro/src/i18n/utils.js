import { ui, defaultLang } from './ui';

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang;
  return defaultLang;
}

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || key;
  }
}

export function getRouteFromUrl(url, lang) { 
  const [, , ...rest] = url.pathname.split('/');
  return `/${lang}/${rest.join('/')}`;
}

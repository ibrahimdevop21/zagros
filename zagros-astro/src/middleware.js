import { defaultLang, ui } from './i18n/ui';

export function onRequest({ request }, next) {
  const url = new URL(request.url);
  const [, lang] = url.pathname.split('/');

  if (!lang) {
    // Redirect to default language
    return Response.redirect(`${url.origin}/${defaultLang}${url.pathname}`);
  }

  if (lang && !(lang in ui)) {
    // Invalid language, redirect to default
    const rest = url.pathname.split('/').slice(2).join('/');
    return Response.redirect(`${url.origin}/${defaultLang}/${rest}`);
  }

  return next();
}

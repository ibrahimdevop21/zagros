import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon, LanguageIcon } from '@heroicons/react/24/outline';
import { useTranslations, getLangFromUrl, getRouteFromUrl } from '../i18n/utils';

export default function Navigation({ url }) {
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);
  const [theme, setTheme] = useState('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Get initial theme
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    setTheme(currentTheme);
  }, []);

  const navigation = [
    { name: t('nav.home'), href: `/${lang}/` },
    { name: t('nav.about'), href: `/${lang}/about` },
    { name: t('nav.products'), href: `/${lang}/products` },
    { name: t('nav.contact'), href: `/${lang}/contact` }
  ];

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  const handleLanguageToggle = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    const newPath = getRouteFromUrl(url, newLang);
    window.location.pathname = newPath;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href={`/${lang}/`} className="flex items-center gap-x-2">
              <span className="text-xl font-bold text-crop-600 dark:text-crop-400 transition-colors duration-200">
                Zagros
              </span>
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden sm:flex sm:gap-x-8">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-700 dark:text-gray-200 hover:text-crop-600 dark:hover:text-crop-400 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Theme and Language toggles */}
          <div className="flex items-center gap-x-4">
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-md p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-crop-500 transition-colors duration-200"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
            <button
              type="button"
              onClick={handleLanguageToggle}
              className="rounded-md p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-crop-500 transition-colors duration-200"
              aria-label={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            >
              <LanguageIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-crop-500 transition-colors duration-200"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden absolute inset-x-0 top-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700" id="mobile-menu">
            <div className="space-y-1 px-4 py-3">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-crop-600 dark:hover:text-crop-400 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

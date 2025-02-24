import React from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n/config';

const products = [
  {
    id: 1,
    category: 'irrigation',
    image: '/images/products/smart-irrigation.svg',
  },
  {
    id: 2,
    category: 'farming',
    image: '/images/products/smart-farming.svg',
  },
  {
    id: 3,
    category: 'equipment',
    image: '/images/products/equipment.svg',
  },
  {
    id: 4,
    category: 'consulting',
    image: '/images/products/consulting.svg',
  }
];

export default function Product() {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t('products.title')}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
                <img
                  src={product.image}
                  alt={t(`products.${product.category}.title`)}
                  className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    <a href={`#${product.category}`} className="hover:underline">
                      {t(`products.${product.category}.title`)}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {t(`products.${product.category}.description`)}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:bg-primary-700 dark:hover:bg-primary-600"
                >
                  {t('products.learnMore')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

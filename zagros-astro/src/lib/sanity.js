import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import groq from 'groq';

export const client = createClient({
  projectId: '9ddq083f',
  dataset: 'production',
  apiVersion: '2024-02-23',
  useCdn: false, // set to `false` to bypass the edge cache
  perspective: 'published',
  stega: {
    enabled: false,
    studioUrl: '/studio',
  },
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// Helper function to subscribe to real-time updates
export function createSubscription(query, params = {}, callback) {
  return client.listen(query, params, {
    includeResult: true,
    visibility: 'query',
    events: ['mutation'],
  }).subscribe((update) => {
    callback(update);
  });
}

// Example queries
export const queries = {
  products: groq`*[_type == "product"] {
    _id,
    title,
    slug,
    mainImage,
    categories[]->{
      _id,
      title
    },
    description,
    price
  }`,
  productBySlug: groq`*[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    categories[]->{
      _id,
      title
    },
    description,
    price
  }`,
  categories: groq`*[_type == "productCategory"] {
    _id,
    title,
    description
  }`,
};

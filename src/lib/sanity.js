import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '9ddq083f',
  dataset: 'production',
  apiVersion: '2024-02-23',
  useCdn: false, // set to `false` to bypass the edge cache
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

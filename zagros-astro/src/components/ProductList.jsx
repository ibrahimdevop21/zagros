import { useEffect, useState } from 'react';
import { client, queries, createSubscription, urlFor } from '../lib/sanity';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Initial fetch
    const fetchProducts = async () => {
      const result = await client.fetch(queries.products);
      setProducts(result);
    };

    fetchProducts();

    // Subscribe to real-time updates
    const subscription = createSubscription(queries.products, {}, (update) => {
      // Refetch products when changes occur
      fetchProducts();
    });

    // Cleanup subscription
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product._id} className="border rounded-lg p-4">
          {product.mainImage && (
            <img
              src={urlFor(product.mainImage).width(400).url()}
              alt={product.title?.en || ''}
              className="w-full h-48 object-cover rounded-md"
            />
          )}
          <h3 className="mt-2 text-lg font-semibold">
            {product.title?.en || product.title?.ar || ''}
          </h3>
          <p className="mt-1 text-gray-600">
            {product.description?.en || product.description?.ar || ''}
          </p>
          <p className="mt-2 text-lg font-bold">
            ${product.price}
          </p>
        </div>
      ))}
    </div>
  );
}

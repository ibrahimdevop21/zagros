import { client, queries } from './sanity.js';

async function testSanityConnection() {
  try {
    // Test basic connection
    console.log('Testing Sanity connection...');
    const test = await client.fetch('*[_type == "product"][0...1]');
    console.log('✅ Connection successful!');
    
    // Test product query
    console.log('\nTesting product query...');
    const products = await client.fetch(queries.products);
    console.log(`✅ Found ${products.length} products`);
    if (products.length > 0) {
      console.log('Sample product:', {
        title: products[0].title,
        slug: products[0].slug,
        hasImage: !!products[0].mainImage
      });
    }

    // Test category query
    console.log('\nTesting category query...');
    const categories = await client.fetch(queries.categories);
    console.log(`✅ Found ${categories.length} categories`);
    if (categories.length > 0) {
      console.log('Sample category:', {
        title: categories[0].title,
        description: categories[0].description
      });
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    throw error;
  }
}

// Run the test
testSanityConnection()
  .then(() => console.log('\n✨ All tests passed!'))
  .catch(() => {
    console.log('\n❌ Some tests failed');
    process.exit(1);
  });

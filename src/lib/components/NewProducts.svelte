<script>
  import { getContentFromDirectory } from '$lib/utils/content.js';
  

  async function loadLatestProduct() {
    const products = await getContentFromDirectory('products');
    if (products.length === 0) return null;
    
    const latestProduct = products[0]; // First product (most recent due to sorting)
    return {
      ...latestProduct,
      link: `/products/${latestProduct.slug}`
    };
  }
  
  let latestProductPromise = loadLatestProduct();

</script>


{#await latestProductPromise}
<div class="new-product-container punkcard">
  <div class="punkcard-content">
    <div class="inner-container">
      <h2 class="section-title">//Featured Product</h2>
    </div>
  </div>
</div>
{:then product}
{#if product}
<!-- Product content goes here -->
<a href={product.link} aria-label="" class="new-product-container punkcard product-punkcard">
          <div class="punkcard-content">
            <div class="inner-container">
              <h2 class="section-title">//Featured Product</h2>
              <div class="content-area">
                <div class="product-content">
                  <img src={product.featuredImage} alt={product.title} class="featured-image">
                  <h2>{product.title}</h2>
                </div>
              </div>
            </div>
          </div>
      </a>
    {:else}
      <div>No products available</div>
    {/if}
    {:catch error}
      <div>Error loading product: {error.message}</div>
    {/await}
  
  <style>
    .new-product-container {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .content-area {
      flex-grow: 1;
    }

    .product-punkcard {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: background-color 0.2s ease, transform 0.2s ease;
    }

    .product-punkcard:hover {
      transform: translateY(-2px);
    }

    .product-content {
      text-align: center;
    }

    .product-content img {
      border-radius: var(--border-radius);
    }
  </style>
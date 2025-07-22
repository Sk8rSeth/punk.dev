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
          <div class="punkcard-content bg" style="background-image: radial-gradient(ellipse, rgba(24, 24, 27, .25) 20%, rgb(24, 24, 27) 80%), url({product.featuredImage}) ;">
            <div class="inner-container">
              <h2 class="section-title">//Featured Product</h2>
              <h3 class="product-title">{product.title}</h3>
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

    .punkcard-content.bg {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }

    .punkcard-content.bg .inner-container {
      height: 100%;
      justify-content: space-between;
      flex-direction: column;
      display: flex;
    }

    .product-title {
      text-align:center;
    }

    .product-punkcard {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: background-color 0.2s ease, transform 0.2s ease;
    }

    .product-punkcard:hover {
      transform: translateY(-2px);
    }

    .featured-image-container,  .content-area h2 {
      text-align: center;
    }
    .featured-image-container img {
      border-radius: var(--border-radius);
    }
  </style>
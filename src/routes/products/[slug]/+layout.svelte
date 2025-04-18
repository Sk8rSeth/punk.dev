<script>
    import { onMount } from 'svelte';
    import { getContentFromDirectory } from '$lib/utils/content.js';
    
    let products = [];
    let selectedProduct = null;
    let currentSlug = '';
    
    // Get current slug from the URL
    onMount(async () => {
      // Get the current path and extract slug
      const path = window.location.pathname;
      const match = path.match(/\/products\/([^\/]+)/);
      currentSlug = match ? match[1] : '';
      
      // Fetch all products
      products = await getContentFromDirectory('products');
      
      // If we're on a product page, set the selected product
      if (currentSlug) {
        selectedProduct = products.find(product => product.slug === currentSlug);
      }
    });
    
    // Handle selecting a product
    function selectProduct(product) {
      selectedProduct = product;
      // Update URL without full page navigation
      window.history.pushState(
        {}, 
        product.title, 
        `/products/${product.slug}`
      );
    }
  </script>

<!-- Individual product view -->
<div class="product-layout">
    <div class="main-content-area">
        {#if selectedProduct}
        <div class="product-content">
            <h1>{selectedProduct.title}</h1>
            
            {#if selectedProduct.featuredImage}
            <img src={selectedProduct.featuredImage} alt={selectedProduct.title} class="featured-image" />
            {/if}
            
            {#if selectedProduct.price}
            <div class="product-price">{selectedProduct.price}</div>
            {/if}
            
            {#if selectedProduct.category}
            <div class="product-category">{selectedProduct.category}</div>
            {/if}
            
            {#if selectedProduct.Content}
            <div class="product-description">
                <svelte:component this={selectedProduct.Content} />
            </div>
            {/if}
            
            {#if selectedProduct.shopifyLink}
            <a href={selectedProduct.shopifyLink} target="_blank" rel="noopener noreferrer" class="shop-link">
                View in Store
            </a>
            {/if}
        </div>
        {:else}
        <div class="product-not-found">
            <h1>Product not found</h1>
            <p>The product you're looking for doesn't exist or has been removed.</p>
            <a href="/products" class="back-link">Back to Products</a>
        </div>
        {/if}
    </div>

  <div class="product-list-sidebar">
    <div class="sidebar-header">
      <h2>//All Products</h2>
    </div>
    <div class="product-list">
      {#each products as product}
        <button 
          class="product-list-item" 
          class:active={selectedProduct && selectedProduct.slug === product.slug} 
          on:click={() => selectProduct(product)}
        >
          <div class="product-list-title">{product.title}</div>
          {#if product.price}
            <div class="product-list-price">{product.price}</div>
          {/if}
        </button>
      {/each}
    </div>
  </div>
</div>
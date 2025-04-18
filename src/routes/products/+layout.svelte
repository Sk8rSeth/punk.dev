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
  
    <!-- Product grid view -->
    <div class="products-grid-container">
      <h1 class="page-title">//Products</h1>
      
      <div class="products-grid">
        {#each products as product}
          <a href={`/products/${product.slug}`} class="product-card punkcard">
            <div class="product-image-container">
              {#if product.featuredImage}
                <img src={product.featuredImage} alt={product.title} class="product-image" />
              {:else}
                <div class="placeholder-image"></div>
              {/if}
            </div>
            <div class="product-title">{product.title}</div>
          </a>
        {/each}
        
        {#if products.length === 0}
          <div class="no-products">
            <p>No products available yet.</p>
          </div>
        {/if}
      </div>
    </div>
  
  <style>
    /* Product Grid Styles */
    .products-grid-container {
      grid-column: 1 / 25;
      grid-row: 2 / 4;
      background-color: var(--panel-color);
      border-radius: var(--border-radius);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 2rem;
      overflow-y: auto;
      max-height: calc(100vh - var(--header-height) - var(--footer-height) - (var(--grid-gap) * 2));
    }
    
    .page-title {
      font-family: var(--font-mono);
      margin-bottom: 2rem;
      color: var(--color-east-side-800);
    }
    
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 2rem;
    }
    
    .product-card {
      display: flex;
      flex-direction: column;
      background-color: var(--color-east-side-100);
      border-radius: var(--border-radius);
      overflow: hidden;
      text-decoration: none;
      color: inherit;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      position: relative;
    }
    
    .product-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    
    /* Glow effect for punk cards */
    .product-card::before,
    .product-card::after {
      border-radius: inherit;
      content: "";
      height: 100%;
      left: 0px;
      opacity: 0;
      position: absolute;
      top: 0px;
      transition: opacity 500ms;
      width: 100%;
    }
    
    .product-card::before {
      background: radial-gradient(
        800px circle at var(--mouse-x) var(--mouse-y), 
        rgba(168, 134, 192, 0.15),
        transparent 40%
      );
      z-index: 1;
    }
    
    .product-card::after {
      background: radial-gradient(
        600px circle at var(--mouse-x) var(--mouse-y), 
        rgba(168, 134, 192, 0.4),
        transparent 40%
      );
      z-index: 0;
    }
    
    .product-card:hover::before,
    .product-card:hover::after {
      opacity: 1;
    }
    
    .product-image-container {
      width: 100%;
      padding-top: 100%; /* 1:1 Aspect ratio */
      position: relative;
    }
    
    .product-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .placeholder-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--color-east-side-200);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .product-title {
      padding: 1rem;
      text-align: center;
      font-weight: 600;
      color: var(--color-east-side-800);
      position: relative;
      z-index: 2;
    }
    
    .no-products {
      grid-column: 1 / -1;
      text-align: center;
      padding: 3rem;
      color: var(--color-east-side-600);
    }
    
    /* Individual Product View Styles */
    .product-layout {
      display: grid;
      grid-template-columns: repeat(24, 1fr);
      grid-template-rows: auto;
      gap: var(--grid-gap);
      height: 100%;
      width: 100%;
    }
    
    .main-content-area {
      grid-column: 1 / 17;
      background-color: var(--panel-color);
      border-radius: var(--border-radius);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 2rem;
      overflow-y: auto;
      max-height: calc(100vh - var(--header-height) - var(--footer-height) - (var(--grid-gap) * 2));
    }
    
    .product-list-sidebar {
      grid-column: 17 / 25;
      background-color: var(--panel-color);
      border-radius: var(--border-radius);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      max-height: calc(100vh - var(--header-height) - var(--footer-height) - (var(--grid-gap) * 2));
    }
    
    .sidebar-header {
      padding: 1.5rem;
      border-bottom: 1px solid var(--color-east-side-200);
    }
    
    .sidebar-header h2 {
      font-family: var(--font-mono);
      margin: 0;
      color: var(--color-east-side-800);
    }
    
    .product-list {
      overflow-y: auto;
      flex-grow: 1;
      padding: 0.5rem;
    }
    
    .product-list-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      text-align: left;
      padding: 1rem;
      background-color: transparent;
      border: none;
      border-radius: var(--border-radius);
      margin-bottom: 0.5rem;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }
    
    .product-list-item:hover {
      background-color: var(--color-east-side-100);
    }
    
    .product-list-item.active {
      background-color: var(--color-east-side-200);
    }
    
    .product-list-title {
      font-weight: bold;
      color: var(--color-east-side-800);
    }
    
    .product-list-price {
      font-size: 0.85rem;
      color: var(--color-east-side-600);
    }
    
    .product-content h1 {
      font-family: var(--font-mono);
      color: var(--color-east-side-800);
      margin-bottom: 1.5rem;
    }
    
    .featured-image {
      width: 100%;
      max-height: 400px;
      object-fit: contain;
      border-radius: var(--border-radius);
      margin-bottom: 1.5rem;
      background-color: var(--color-east-side-100);
      padding: 1rem;
    }
    
    .product-price {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--color-east-side-800);
      margin-bottom: 1rem;
    }
    
    .product-category {
      display: inline-block;
      background-color: var(--color-east-side-200);
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
      color: var(--color-east-side-700);
    }
    
    .product-description {
      margin-bottom: 2rem;
    }
    
    .shop-link {
      display: inline-block;
      background-color: var(--color-east-side-600);
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: var(--border-radius);
      text-decoration: none;
      font-weight: bold;
      transition: background-color 0.2s ease;
    }
    
    .shop-link:hover {
      background-color: var(--color-east-side-700);
    }
    
    .product-not-found {
      text-align: center;
      padding: 3rem 1rem;
    }
    
    .back-link {
      display: inline-block;
      margin-top: 1rem;
      color: var(--color-east-side-600);
      text-decoration: none;
    }
    
    .back-link:hover {
      text-decoration: underline;
    }
    
    /* Responsive styles */
    @media (max-width: 768px) {
      .product-layout {
        display: flex;
        flex-direction: column;
        gap: var(--grid-gap);
      }
      
      .products-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 1rem;
      }
      
      .main-content-area,
      .product-list-sidebar {
        max-height: none;
      }
      
      .product-list-sidebar {
        height: 300px;
      }
    }
  </style>
<!-- src/lib/layouts/Product.svelte -->
<script>
    export let title;
    export let price;
    export let category;
    export let featuredImage;
    export let shopifyLink;
  </script>
  
  <div class="product-page">
    {#if featuredImage}
      <div class="product-image">
        <img src={featuredImage} alt={title} />
      </div>
    {/if}
    
    <div class="product-info">
      <h1>{title}</h1>
      {#if category}
        <p class="category">{category}</p>
      {/if}
      {#if price}
        <p class="price">{price}</p>
      {/if}
      
      <div class="description">
        <slot />
      </div>
      
      {#if shopifyLink}
        <a href={shopifyLink} class="shop-link" target="_blank" rel="noopener noreferrer">
          Buy Now
        </a>
      {/if}
    </div>
  </div>
  
  <style>
    /* Your styling here */
  </style>
<!-- src/lib/layouts/Branch.svelte -->
<script>
    export let title;
    export let featuredImage;
  </script>
  
  <div class="branch-page">
    <h1>{title}</h1>
    
    {#if featuredImage}
      <div class="featured-image">
        <img src={featuredImage} alt={title} />
      </div>
    {/if}
    
    <div class="content">
      <slot />
    </div>
  </div>
  
  <style>
    /* Your styling here */
  </style>
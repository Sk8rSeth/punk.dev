<!-- src/lib/layouts/code.svelte -->
<script>
    export let title;
    export let featuredImage;
  </script>
  
  <div class="code-page">
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
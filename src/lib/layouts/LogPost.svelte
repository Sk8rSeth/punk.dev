<!-- src/lib/layouts/LogPost.svelte -->
<script>
  export let title;
  export let date;
  export let excerpt;
  export let featuredImage;
  export let tags = [];
</script>

<article class="log-post">
  <header>
    <h1>{title}</h1>
    <time datetime={date}>{new Date(date).toLocaleDateString()}</time>
    {#if tags && tags.length > 0}
      <div class="tags">
        {#each tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
    {/if}
  </header>
  
  {#if featuredImage}
    <div class="featured-image">
      <img src={featuredImage} alt={title} />
    </div>
  {/if}
  
  <div class="excerpt">
    <p>{excerpt}</p>
  </div>
  
  <div class="content">
    <slot />
  </div>
</article>

<style>
  /* Your styling here */
</style>
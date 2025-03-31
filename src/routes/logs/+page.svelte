<!-- src/routes/logs/+page.svelte -->
<script>
    export let data;
    const { posts } = data;
  </script>
  
  <div class="logs-content-area">
    <div class="logs-container">
      <h1 class="page-title">//Logs</h1>
      
      <div class="blog-posts-grid">
        {#each posts as post}
          <div class="blog-post-card">
            {#if post.featuredImage}
              <img src={post.featuredImage} alt={post.title} class="post-image" />
            {/if}
            <h2 class="blog-post-title">{post.title}</h2>
            <p class="blog-post-date">{new Date(post.date).toLocaleDateString()}</p>
            <p class="blog-post-excerpt">{post.excerpt}</p>
            <a href={`/logs/${post.slug}`} class="read-more-link">Read more</a>
          </div>
        {/each}
      </div>
    </div>
  </div>
  
  <style>
    /* Your styling here */
  </style>
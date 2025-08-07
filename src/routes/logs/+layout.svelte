<script>
  import { onMount } from 'svelte';
  import { getContentFromDirectory } from '$lib/services/ghost.js';

import { initializeImageEnlargement, attachImageEnlargementHandlers } from '$lib/utils/imageEnlargement.js';
  import ImageModal from '$lib/components/ImageModal.svelte';

  /** @type {import('./$types').LayoutData} */
  export let data;
  
  let logPosts = [];
  let selectedPost = null;
  let currentSlug = '';

  // Image modal state
  let showImageModal = false;
  let modalImageSrc = '';
  let modalImageAlt = '';
  
  // Get current slug from the URL
  onMount(async () => {
    // Get the current path and extract slug
    const path = window.location.pathname;
    const match = path.match(/\/logs\/([^\/]+)/);
    currentSlug = match ? match[1] : '';
    
    // Fetch all blog posts for the archive
    logPosts = await getContentFromDirectory('log');
    
    // If we're on a post page, set the selected post
    if (currentSlug) {
      selectedPost = logPosts.find(post => post.slug === currentSlug);
      if (selectedPost.content) {
        selectedPost.content = selectedPost.content.replace(
          /<img([^>]*?)src="([^"]*?)"([^>]*?)>/g, 
          '<img$1src="$2"$3 class="enlarge" data-enlarge-src="$2">');
        }
    }
    
    // Initialize image enlargement
    initializeImageEnlargement();
    
    // Listen for image modal events
    document.addEventListener('showImageModal', handleShowImageModal);
    document.addEventListener('closeImageModal', handleCloseImageModal);
    
    setTimeout(attachImageEnlargementHandlers, 100);
  });
    
  // Handle selecting a post from the archive
  function selectPost(post) {
    selectedPost = post;
    
    // Update URL without full page navigation
    window.history.pushState(
      {}, 
      post.title, 
      `/logs/${post.slug}`
    );
  }

  function handleShowImageModal(event) {
    const { src, alt } = event.detail;
    modalImageSrc = src;
    modalImageAlt = alt;
    showImageModal = true;
  }
  
  function handleCloseImageModal() {
    showImageModal = false;
    modalImageSrc = '';
    modalImageAlt = '';
  }
    
  </script>
  
<div class="main-content-area logs-content-container">
    <div class="main-content-container punkcard">
        <div class="punkcard-content">
            <div class="inner-container">
                <h2 class="section-title">//Selected-Log</h2>
                {#if selectedPost}
                <div class="content-area">
                    <div class="post-content">
                    <h1>{selectedPost.title}</h1>
                    <div class="post-meta">
                        <time datetime={selectedPost.date}>
                        {new Date(selectedPost.date).toLocaleDateString()}
                        </time>
                        {#if selectedPost.tags && selectedPost.tags.length > 0}
                        <div class="tags">
                            {#each selectedPost.tags as tag}
                            <span class="tag">{tag}</span>
                            {/each}
                        </div>
                        {/if}
                    </div>
                    
                    {#if selectedPost.featuredImage}
                        <img src={selectedPost.featuredImage} alt={selectedPost.title} class="featured-image enlarge" />
                    {/if}
                    
                    {#if selectedPost.content}
                        {@html selectedPost.content}
                    {/if}
                    </div>
                </div>
                {:else}
                <div class="content-area">
                    <p>Select a post from the archive to read.  —></p>
                </div>
                {/if}
            </div>
        </div>
    </div>
</div>

<div class="logs-archive punkcard">
    <div class="punkcard-content">
        <div class="inner-container">
            <h2 class="section-title">//Logs</h2>  
            <div class="archive-list">
                {#each logPosts as post}
                <button 
                    class="archive-item" 
                    class:active={selectedPost && selectedPost.slug === post.slug} 
                    on:click={() => selectPost(post)}
                >
                    <div class="archives-post-title">{post.title}</div>
                    <div class="archives-post-date">{new Date(post.date).toLocaleDateString()}</div>
                </button>
                {/each}
                
                {#if logPosts.length === 0}
                <div class="no-posts">No posts yet.</div>
                {/if}
            </div>
        </div>
    </div>
</div>
    <!-- Image Modal -->
    <ImageModal 
      bind:show={showImageModal}
      src={modalImageSrc}
      alt={modalImageAlt}
      on:close={handleCloseImageModal}
    />
  
  <style>
    .content-area {
      flex-grow: 1;
    }

    .main-content-area {
      grid-column: 1 / 20;
    }

    .logs-archive {
      grid-column: 20 / 25;
      grid-row: 2 / 4;
      background-color: var(--panel-color);
      border-radius: var(--border-radius);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      height: 100%;
      /* max-height: calc(100vh - var(--header-height) - var(--footer-height) - (var(--grid-gap) * 2)); */
    }

    .logs-archive > .punkcard-content, .logs-content-container > .punkcard > .punkcard-content {
        overflow: scroll;
      }
    
    .archive-header {
      padding: 1.5rem;
      border-bottom: 1px solid var(--color-east-side-500);
    }
    
    .archive-header h2 {
      font-family: var(--font-mono);
      margin: 0;
      color: var(--color-east-side-800);
    }
    
    .archive-list {
      overflow-y: auto;
      flex-grow: 1;
      padding: 0.5rem;
    }
    
    .archive-item {
      display: block;
      width: 100%;
      text-align: left;
      padding: 1rem;
      background-color: transparent;
      border: 1px solid var(--color-east-side-990);
      border-radius: var(--border-radius);
      margin-bottom: 0.5rem;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }
    
    .archive-item:hover {
      background-color: var(--color-east-side-100);
    }
    
    .archive-item.active {
      background-color: var(--color-east-side-200);
    }
    
    .archives-post-title {
      font-weight: bold;
      font-size: .9rem;
      color: var(--color-east-side-800);
      margin-bottom: 0.25rem;
    }
    
    .archives-post-date {
      font-size: 0.7rem;
      color: var(--color-east-side-600);
    }
    
    .no-posts {
      padding: 1.5rem;
      color: var(--color-east-side-600);
      font-style: italic;
      text-align: center;
    }
    
    .logs-intro {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      text-align: center;
    }
    
    .logs-intro h1 {
      font-family: var(--font-mono);
      color: var(--color-east-side-800);
      margin-bottom: 1rem;
    }
    
    .logs-intro p {
      color: var(--color-east-side-600);
    }
    
    .post-content h1 {
      font-family: var(--font-mono);
      color: var(--color-east-side-800);
      margin-bottom: 1rem;
    }
    
    .post-meta {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
      color: var(--color-east-side-600);
    }
    
    .tags {
      display: flex;
      gap: 0.5rem;
    }
    
    .tag {
      background-color: var(--color-east-side-990);
      padding: 0.25rem 0.5rem;
      border-radius: 3px;
      font-size: 0.7rem;
    }
    
    .featured-image {
      width: 50%;
      object-fit: cover;
      border-radius: var(--border-radius);
      margin-bottom: 1.5rem;
    }
    
    .excerpt {
      font-style: italic;
      border-left: 3px solid var(--color-east-side-300);
      padding-left: 1rem;
      margin-bottom: 1.5rem;
      color: var(--color-east-side-700);
    }
    
    /* Ensure content styling is clear */
    .post-content :global(h2) {
      color: var(--color-east-side-700);
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
    
    .post-content :global(p) {
      margin-bottom: 1rem;
      line-height: 1.6;
    }
    
    .post-content :global(a) {
      color: var(--color-east-side-600);
      text-decoration: underline;
    }
    
    .post-content :global(ul), .post-content :global(ol) {
      margin-bottom: 1rem;
      padding-left: 1.5rem;
    }
    
    @media (max-width: 768px) {
      
      .main-content-area, .logs-archive {
        max-height: none;
      }

      .logs-content-container {
        grid-column: 1;
        grid-row: 2 / 5;
      }
      
      .logs-archive {
        grid-column: 1;
        grid-row: 5;
      }
    }
  </style>
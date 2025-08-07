<!-- src/lib/components/ImageModal.svelte -->
<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import { browser } from '$app/environment';
  
  const dispatch = createEventDispatcher();
  
  export let src = '';
  export let alt = '';
  export let show = false;
  
  let modalElement;
  let imageElement;
  let loading = true;
  let imageError = false;
  
  // Handle keyboard events
  function handleKeydown(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }
  
  // Handle backdrop click
  function handleBackdropClick(event) {
    if (event.target === modalElement) {
      closeModal();
    }
  }
  
  // Close modal
  function closeModal() {
    show = false;
    dispatch('close');
  }
  
  // Handle image load
  function handleImageLoad() {
    loading = false;
    imageError = false;
  }
  
  // Handle image error
  function handleImageError() {
    loading = false;
    imageError = true;
  }
  
  // Prevent body scroll when modal is open
  $: if (browser) {
    if (show) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeydown);
    } else {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeydown);
    }
  }
  
  onMount(() => {
    return () => {
      if (browser) {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKeydown);
      }
    };
  });
</script>

{#if show}
  <!-- Modal backdrop -->
  <div 
    class="image-modal-backdrop" 
    bind:this={modalElement}
    on:click={handleBackdropClick}
    role="dialog"
    tabindex="5"
    aria-modal="true"
    aria-label="Enlarged image view"
  >
    <!-- Close button -->
    <button 
      class="image-modal-close punkcard"
      on:click={closeModal}
      aria-label="Close image modal"
    >
      <div class="punkcard-content">
        <span class="close-icon">✕</span>
      </div>
    </button>
    
    <!-- Modal content -->
    <div class="image-modal-content">
      {#if loading}
        <div class="image-modal-loading">
          <div class="loading-spinner"></div>
          <p>Loading image...</p>
        </div>
      {/if}
      
      {#if imageError}
        <div class="image-modal-error punkcard">
          <div class="punkcard-content">
            <p>Failed to load image</p>
            <button on:click={closeModal} class="error-close-btn">Close</button>
          </div>
        </div>
      {:else}
        <img 
          bind:this={imageElement}
          {src}
          {alt}
          class="image-modal-img"
          class:loaded={!loading}
          on:load={handleImageLoad}
          on:error={handleImageError}
        />
      {/if}
    </div>
  </div>
{/if}

<style>
  .image-modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.95);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    box-sizing: border-box;
    backdrop-filter: blur(10px);
    animation: fadeIn 0.3s ease-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .image-modal-close {
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    z-index: 10001;
    padding: 0;
    min-width: 3rem;
    min-height: 3rem;
    border-radius: 8px;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }
  
  .image-modal-close:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
  
  .image-modal-close .punkcard-content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem;
  }
  
  .close-icon {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--color-east-side-700, #333);
  }
  
  .image-modal-content {
    position: relative;
    max-width: 80vw;
    max-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .image-modal-img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  .image-modal-img.loaded {
    opacity: 1;
    transform: scale(1);
  }
  
  .image-modal-loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: white;
  }
  
  .loading-spinner {
    width: 3rem;
    height: 3rem;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top: 3px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .image-modal-error {
    padding: 2rem;
    text-align: center;
  }
  
  .error-close-btn {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: var(--color-east-side-200, #f0f0f0);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: var(--color-east-side-700, #333);
  }
  
  .image-modal-caption {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    max-width: 80%;
    text-align: center;
  }
  
  .image-modal-caption p {
    margin: 0;
    color: var(--color-east-side-700, #333);
    font-size: 0.9rem;
    line-height: 1.4;
  }
  
  /* Mobile adjustments */
  @media (max-width: 768px) {
    .image-modal-backdrop {
      padding: 1rem;
    }
    
    .image-modal-close {
      top: 1rem;
      right: 1rem;
      min-width: 2.5rem;
      min-height: 2.5rem;
    }
    
    .close-icon {
      font-size: 1.25rem;
    }
    
    .image-modal-content {
      max-width: 100%;
      max-height: 85vh;
    }
    
    .image-modal-caption {
      bottom: 1rem;
      max-width: 90%;
    }
    
    .image-modal-caption p {
      font-size: 0.8rem;
    }
  }
</style>
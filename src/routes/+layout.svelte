<script>
import '../lib/styles/global.css';
import '../lib/styles/grid.css';
import NavigationHeader from '$lib/components/NavigationHeader.svelte';
import Footer from '$lib/components/Footer.svelte';
import { onMount } from 'svelte';
import { afterNavigate } from '$app/navigation';
import { initializeMouseEffects, attachMouseMoveHandlers } from '$lib/utils/mouseEffects.js';
import { fly } from 'svelte/transition';
import { browser } from '$app/environment';

  /** @type {{children: import('svelte').Snippet}} */
  let { children, data } = $props();

  let mouseEffectsObserver;

  onMount(() => {
    if (browser) {
      // Initialize with automatic detection
      mouseEffectsObserver = initializeMouseEffects({
        autoDetect: true,
        debounceTime: 50
      });
      
      return () => {
        // Cleanup on component unmount
        if (mouseEffectsObserver) {
          mouseEffectsObserver.disconnect();
        }
      };
    }
  });

  afterNavigate(() => {
    if (browser) {
      // Re-attach handlers after navigation
      attachMouseMoveHandlers();
    }
  });
</script>

<div class="grid-container">
    <div class="navigation-area">
        <NavigationHeader />
    </div>

    <!-- This is where page-specific content will be rendered -->
    {#key data.url}
    <div style="display:contents;"
      in:fly={{ x: -200, duration: 300, delay: 300 }}
      out:fly={{ x: 200, duration: 300 }}
    >
      <slot />
    </div>
  {/key}
  

    <div class="footer-area">
        <Footer />
    </div>
    <div class="legal">&copy;2025 .punk Labs. created with love and hate by <a href="https://sethdoes.dev">RedBeard</a></div>
</div>

<style>

.legal {
    width: 100%;
    grid-column: 1 / 25;
    font-size: .75rem;
    text-align: center;
    gap: 0;
}

.legal a {
    text-decoration: none;
    color: var(--color-east-side-800);
}

@media (max-width: 768px) {

    .legal {
        display: none;
    }

}
</style>
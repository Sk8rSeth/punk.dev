<!-- src/lib/components/PageTransition.svelte -->
<script>
    import { fly } from 'svelte/transition';
    import { navigating } from '$app/state';

  </script>
  
  {#key navigating.to}
    <div id="body-container" 
    in:fly={{ x: -2000, duration: 1000, delay: 1000 }}
    out:fly={{ x: 2000, duration: 1000 }}
    >
        <slot />
    </div>

  {/key}

  <style>
    #body-container {
        display: contents;
    }
  </style>
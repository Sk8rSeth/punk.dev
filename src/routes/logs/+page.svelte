<script>
  import { onMount } from 'svelte';
  import { getContentFromDirectory } from '$lib/services/ghost.js';
  
  let blogPosts = [];
  
  onMount(async () => {
    logPosts = await getContentFromDirectory('log');
  });
  console.log('main +page');
</script>

<!-- This page intentionally left empty as the layout handles all content -->
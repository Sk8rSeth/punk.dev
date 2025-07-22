<script>
  import { onMount } from 'svelte';
  import { getContentFromDirectory } from '$lib/utils/content.js';
  
  let blogPosts = [];
  
  onMount(async () => {
    logPosts = await getContentFromDirectory('log');
  });
</script>

<!-- This page intentionally left empty as the layout handles all content -->
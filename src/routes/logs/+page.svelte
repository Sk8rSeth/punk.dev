<script>
  import { onMount } from 'svelte';
  import { getContentFromDirectory } from '$lib/utils/content.js';
  
  let blogPosts = [];
  
  onMount(async () => {
    blogPosts = await getContentFromDirectory('blog');
  });
</script>

<!-- This page intentionally left empty as the layout handles all content -->
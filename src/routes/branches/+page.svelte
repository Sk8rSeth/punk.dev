<script>
    import { onMount } from 'svelte';
    import { getContentFromDirectory } from '$lib/utils/content.js';
    
    let blogPosts = [];
    
    onMount(async () => {
      branches = await getContentFromDirectory('branches');
    });
  </script>
  
  <!-- This page intentionally left empty as the layout handles all content -->
<!-- src/routes/admin/+page.svelte -->
<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      // Redirect to the Tina admin panel
      window.location.href = '/admin/index.html';
    });
  </script>
  
  <div>
    <h1>Redirecting to admin panel...</h1>
    <p>If you are not redirected, <a href="/admin/index.html">click here</a>.</p>
  </div>
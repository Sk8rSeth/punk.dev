<!-- src/routes/admin/+page.svelte -->
<script>
  import { onMount } from 'svelte';

  onMount(() => {
    // Use the custom domain in the redirect
    const clientId = 'Ov23liosKreuAgAcKgU5';
    const redirectUrl = 'https://punk.dev/admin/index.html';
    window.location.href = `/admin/index.html?clientId=${clientId}&redirectUrl=${encodeURIComponent(redirectUrl)}`;
  });
</script>

<div>
  <h1>Redirecting to admin panel...</h1>
  <p>If you are not redirected, <a href="/admin/index.html">click here</a>.</p>
</div>
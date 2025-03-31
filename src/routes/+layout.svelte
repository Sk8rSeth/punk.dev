<script>
import '../lib/styles/global.css';
import '../lib/styles/grid.css';
import NavigationHeader from '$lib/components/NavigationHeader.svelte';
import Footer from '$lib/components/Footer.svelte';
</script>

<div class="grid-container">
<div class="navigation-area">
    <NavigationHeader />
</div>

<!-- This is where page-specific content will be rendered -->
<slot />

<div class="footer-area desktop-only">
    <Footer />
</div>
</div>

<style>
.mobile-only {
    display: none;
}

@media (max-width: 768px) {
    .desktop-only {
    display: none;
    }
}
</style>
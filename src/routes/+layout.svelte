<script>
import '../lib/styles/global.css';
import '../lib/styles/grid.css';
import NavigationHeader from '$lib/components/NavigationHeader.svelte';
import Footer from '$lib/components/Footer.svelte';
import { onMount } from 'svelte';
    
    onMount(() => {
        for(const card of document.querySelectorAll(".punkcard")) {
            card.onmousemove = e => handleOnMouseMove(e);
        }
        const handleOnMouseMove = e => {
            const { currentTarget: target } = e;
            const rect = target.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;
                target.style.setProperty("--mouse-x", `${x}px`);
                target.style.setProperty("--mouse-y", `${y}px`);
        }

    });
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
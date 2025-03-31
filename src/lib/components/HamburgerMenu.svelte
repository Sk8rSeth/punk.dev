<script>
    import { onMount } from 'svelte';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    
    export let navItems = [];
    
    let menuOpen = false;
    let menuElement;
    
    // Animation for the menu slide
    const menuPosition = tweened(-200, {
      duration: 300,
      easing: cubicOut
    });
    
    // Toggle menu open/closed
    function toggleMenu() {
      menuOpen = !menuOpen;
      if (menuOpen) {
        menuPosition.set(0);
      } else {
        menuPosition.set(-200);
      }
    }
    
    // Close menu when clicking outside
    function handleClickOutside(event) {
      if (menuOpen && menuElement && !menuElement.contains(event.target) && !event.target.classList.contains('hamburger-icon')) {
        toggleMenu();
      }
    }
    
    onMount(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    });
  </script>
  
  <div class="hamburger-container">
    <button class="hamburger-icon" on:click={toggleMenu} aria-label="Menu">
      <div class="bar" class:bar1-active={menuOpen}></div>
      <div class="bar" class:bar2-active={menuOpen}></div>
      <div class="bar" class:bar3-active={menuOpen}></div>
    </button>
    
    <div 
      class="menu-overlay" 
      class:active={menuOpen} 
      style="opacity: {menuOpen ? 0.5 : 0}"
      on:click={toggleMenu}
    ></div>
    
    <div 
      bind:this={menuElement}
      class="menu-container" 
      style="transform: translateX({$menuPosition}%)"
    >
      <div class="menu-header">Menu</div>
      <div class="menu-items">
        {#each navItems as item}
          <a href={item.href} class="menu-item" on:click={toggleMenu}>
            {item.title}
          </a>
        {/each}
      </div>
    </div>
  </div>
  
  <style>
    .hamburger-container {
      display: none;
    }
    
    /* Only show hamburger on mobile */
    @media (max-width: 768px) {
      .hamburger-container {
        display: block;
      }
      
      .hamburger-icon {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 24px;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 110;
      }
      
      .bar {
        width: 100%;
        height: 3px;
        background-color: var(--color-east-side-700);
        transition: all 0.3s ease;
      }
      
      .bar1-active {
        transform: rotate(-45deg) translate(-5px, 6px);
      }
      
      .bar2-active {
        opacity: 0;
      }
      
      .bar3-active {
        transform: rotate(45deg) translate(-5px, -6px);
      }
      
      .menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--color-east-side-950);
        z-index: 100;
        transition: opacity 0.3s ease;
        pointer-events: none;
      }
      
      .menu-overlay.active {
        pointer-events: all;
      }
      
      .menu-container {
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        width: 70%;
        max-width: 300px;
        background-color: var(--color-east-side-50);
        z-index: 105;
        box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
        padding: 1rem 0 0;
        border-radius: var(--border-radius) 0 0 var(--border-radius);
        display: flex;
        flex-direction: column;
      }
      
      .menu-header {
        padding: 1rem;
        font-weight: bold;
        color: var(--color-east-side-800);
        border-bottom: 1px solid var(--color-east-side-200);
        margin-bottom: 1rem;
      }
      
      .menu-items {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0 1rem;
      }
      
      .menu-item {
        padding: 0.75rem;
        text-decoration: none;
        color: var(--color-east-side-700);
        font-weight: bold;
        background-color: var(--color-east-side-100);
        border-radius: var(--border-radius);
        transition: background-color 0.2s ease, transform 0.1s ease;
      }
      
      .menu-item:hover {
        background-color: var(--color-east-side-200);
        color: var(--color-east-side-800);
        transform: translateX(2px);
      }
    }
  </style>
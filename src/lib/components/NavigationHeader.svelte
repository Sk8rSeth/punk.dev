<script>
    import HamburgerMenu from './HamburgerMenu.svelte';
    
    const navItems = [
      { id: 'products', title: '//Products', href: '/products' },
      { id: 'logs', title: '//Logs', href: '/logs' },
      { id: 'branches', title: '//Branches', href: '/branches' },
      { id: 'about', title: '//About', href: '/about' }
    ];
  </script>
  
  <div class="navigation-container justify-center">
    <a href="/" data-sveltekit-reload class="logo-section punkcard">
        <div class="punkcard-content content-center">
            <div class="logo-wrapper">
                <div class="logo">.punk</div>
                <div class="tagline">// unconventional art support</div>
            </div>
        </div>
    </a>
    
    <!-- Desktop Navigation Links -->
    <div class="nav-links desktop-only">
      {#each navItems as item}
        <a href={item.href} data-sveltekit-reload class="nav-item punkcard">
            <div class="punkcard-content content-center">
                <span class="nav-text">{item.title}</span>
            </div>
        </a>
      {/each}
    </div>
    
    <!-- Mobile Hamburger Menu -->
    <div class="mobile-menu nav-item">
      <HamburgerMenu {navItems} />
    </div>
  </div>
  
  <style>
    .navigation-container {
      display: flex;
      width: 100%;
      height: 100%;
      position: relative;
      background-color: transparent;
      box-shadow: none;
      gap: var(--grid-gap);
    }
    
    .logo-section {
      flex: 1;
      display: flex;
      align-items: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-decoration: none;
      transition: background-color 0.2s ease, transform 0.2s ease;
    }
    
    .logo-wrapper {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
    }
    
    .logo {
      font-size: 3.5rem;
      font-weight: bold;
      margin-right: 0.75rem;
      padding-left: 1rem;
      color: var(--color-east-side-500);
      font-family: var(--font-logo);
    }
    
    .tagline {
      font-size: 1rem;
      padding-right: 6rem;
      color: var(--color-east-side-500);
    }
    
    .nav-links {
      flex: 1;
      display: flex;
      gap: var(--grid-gap);
      background-color: transparent;
      box-shadow: none;
    }
    
    .nav-item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: var(--color-east-side-500);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      height: 100%;
      transition: background-color 0.2s ease, transform 0.2s ease;
    }
    
    .nav-item:hover, .logo-section:hover {
      background-color: rgb(244, 240, 247, .2);
      color: var(--color-east-side-400);
      transform: translateY(-2px);
    }
    
    .nav-text {
      font-weight: bold;
      font-size: 1.1rem;
    }
    
    .mobile-menu {
      display: none;
    }
    
    /* Mobile Styles */
    @media (max-width: 768px) {
      .desktop-only {
        display: none;
      }
      
      .mobile-menu {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 1rem;
      }
      
      .logo-section {
        flex: 4; /* Take up 80% of the width */
      }
      
      .logo {
        font-size: 2rem;
      }
      
      .tagline {
        font-size: 0.85rem;
        padding-left: .5rem;
      }
    }
  </style>
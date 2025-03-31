<script>
    import HamburgerMenu from './HamburgerMenu.svelte';
    
    const navItems = [
      { id: 'products', title: '//Products', href: '/products' },
      { id: 'branches', title: '//Branches', href: '/branches' },
      { id: 'logs', title: '//Logs', href: '/logs' },
      { id: 'about', title: '//About', href: '/about' }
    ];
  </script>
  
  <div class="navigation-container">
    <div class="logo-section">
      <div class="logo-wrapper">
        <div class="logo">opunk</div>
        <div class="tagline">// unconventional art support</div>
      </div>
    </div>
    
    <!-- Desktop Navigation Links -->
    <div class="nav-links desktop-only">
      {#each navItems as item}
        <a href={item.href} class="nav-item">
          <span class="nav-text">{item.title}</span>
        </a>
      {/each}
    </div>
    
    <!-- Mobile Hamburger Menu -->
    <div class="mobile-menu">
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
      gap: 0.5rem;
    }
    
    .logo-section {
      flex: 1;
      display: flex;
      align-items: center;
      padding-left: 1.5rem;
      background-color: var(--panel-color);
      border-radius: var(--border-radius);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    .logo-wrapper {
      display: flex;
      align-items: baseline;
    }
    
    .logo {
      font-size: 1.75rem;
      font-weight: bold;
      margin-right: 0.75rem;
      color: var(--color-east-side-800);
    }
    
    .tagline {
      font-size: 1rem;
      color: var(--color-east-side-600);
    }
    
    .nav-links {
      flex: 1;
      display: flex;
      gap: 0.5rem;
      background-color: transparent;
      box-shadow: none;
    }
    
    .nav-item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: var(--color-east-side-700);
      background-color: var(--panel-color);
      border-radius: var(--border-radius);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      height: 100%;
      transition: background-color 0.2s ease, transform 0.2s ease;
    }
    
    .nav-item:hover {
      background-color: var(--color-east-side-100);
      color: var(--color-east-side-800);
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
        font-size: 1.5rem;
      }
      
      .tagline {
        font-size: 0.85rem;
      }
    }
  </style>
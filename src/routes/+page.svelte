<script>
    import MainContent from '$lib/components/MainContent.svelte';
    import NewProducts from '$lib/components/NewProducts.svelte';
    import LatestLogPost from '$lib/components/LatestLogPost.svelte';
  </script>
  
  <div class="main-content-area">
    <MainContent />
  </div>
  
  <!-- Desktop product section -->
  <div class="new-product-area desktop-only">
    <NewProducts />
  </div>
  
  <!-- Desktop blog section -->
  <div class="new-blog-area desktop-only">
    <LatestLogPost />
  </div>
  
  <!-- Mobile layout for side content -->
  <div class="side-content-container mobile-only">
    <div class="new-product-area">
      <NewProducts />
    </div>
    <div class="new-blog-area">
      <LatestLogPost />
    </div>
  </div>
  
  <style>
    .mobile-only {
      display: none;
    }
    
    .mobile-newsletter-container {
      padding: 0.75rem;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .newsletter-form {
      display: flex;
      flex-direction: column;
      margin-top: 0.5rem;
    }
    
    .email-input {
      margin-bottom: 0.5rem;
    }
    
    @media (max-width: 768px) {
      .desktop-only {
        display: none;
      }
      
      .mobile-only {
        display: block;
      }
    }
  </style>
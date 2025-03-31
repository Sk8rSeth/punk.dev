<div class="footer-container">
    <a href="/store" class="store-section">
      <div class="section-title">//Store —></div>
    </a>
    
    <div class="newsletter-section">
      <div class="section-title">//Newsletter Signup</div>
      <form class="newsletter-form">
        <input type="email" placeholder="Enter your email" class="email-input" />
        <button type="submit" class="submit-button">Submit</button>
      </form>
    </div>
  </div>
  
  <style>
    .footer-container {
      display: flex;
      width: 100%;
      height: 100%;
      background-color: transparent;
      box-shadow: none;
      gap: 0.5rem;
    }
    
    .store-section {
      flex: 1;
      display: flex;
      align-items: center;
      padding-left: 1.25rem;
      text-decoration: none;
      color: inherit;
      background-color: var(--panel-color);
      border-radius: var(--border-radius);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: background-color 0.2s ease, transform 0.2s ease;
    }
    
    .store-section:hover {
      background-color: var(--color-east-side-100);
      transform: translateY(-2px);
    }
    
    .newsletter-section {
      flex: 2;
      display: flex;
      align-items: center;
      padding: 0 1.25rem;
      background-color: var(--panel-color);
      border-radius: var(--border-radius);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    .section-title {
      font-weight: bold;
      white-space: nowrap;
      margin-right: 1rem;
    }
    
    .newsletter-form {
      display: flex;
      flex-grow: 1;
      margin-left: 1rem;
    }
    
    .email-input {
      flex-grow: 1;
      margin-right: 0.75rem;
    }
  </style>
<div class="footer-container">
    <a href="#" class="store-section punkcard">
        <div class="punkcard-content content-center">
            <div class="section-title">//Store —> (coming soon)</div>
        </div>
    </a>
    
    <div class="newsletter-section punkcard">
        <div class="punkcard-content content-center">
            <div class="inner-container">
                <div class="section-title content-center">//Newsletter-Signup</div>
                <form class="newsletter-form">
                    <input type="email" placeholder="Enter your email" class="email-input" />
                    <button type="submit" class="submit-button">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>
  
  <style>
    .footer-container {
      display: flex;
      width: 100%;
      height: 100%;
      background-color: transparent;
      box-shadow: none;
      gap: var(--grid-gap);
    }
    
    .store-section {
      flex: 1;
      display: flex;
      align-items: center;
      padding-left: 1.25rem;
      text-decoration: none;
      color: inherit;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: background-color 0.2s ease, transform 0.2s ease;
    }
    
    .store-section:hover {
      background-color: rgb(244, 240, 247, .2);
      transform: translateY(-2px);
      color: var(--color-east-side-500);
    }
    
    .newsletter-section {
      flex: 2;
      display: flex;
      align-items: center;
      padding: 0 1.25rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    .newsletter-form {
      display: flex;
      flex-grow: 1;
      margin-left: 1rem;
      z-index: 9;
    }
    
    .inner-container {
        display: flex;
    }
    .email-input {
      flex-grow: 1;
      margin-right: 0.75rem;
      color: var(--color-east-side-500);
      border-radius: .75rem;
    }

    .newsletter-form button {
        border-radius: .75rem;
        font-family: var(--font-mono);
    }

    @media (max-width: 768px) {
        .footer-container {
            display: grid;
        }
        .footer-container .newsletter-section {
            padding: 0;
            align-items: unset;
        }

        .footer-container .newsletter-section > .punkcard-content {
            position: relative;
            width: 100%;
        }

        .footer-container .newsletter-section .inner-container {
            display: inline;
        }
        .footer-container .newsletter-section .newsletter-form {
            margin-left: 0;
        }

    }
  </style>
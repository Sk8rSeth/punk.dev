import { browser } from '$app/environment';

let timeoutId;
let isInitialized = false;

/**
 * Main mouse move handler that sets CSS custom properties
 * @param {MouseEvent} e - The mouse event
 */
const handleOnMouseMove = (e) => {
  const { currentTarget: target } = e;
  const rect = target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
};

/**
 * Attaches mouse move handlers to all .punkcard elements
 * Includes debouncing to prevent excessive DOM queries
 */
export function attachMouseMoveHandlers() {
  if (!browser) return;
  
  // Clear any existing timeout to debounce rapid calls
  clearTimeout(timeoutId);
  
  timeoutId = setTimeout(() => {
    const cards = document.querySelectorAll(".punkcard");
    
    cards.forEach(card => {
      // Check if handler is already attached to avoid duplicates
      if (!card.dataset.mouseHandlerAttached) {
        card.addEventListener('mousemove', handleOnMouseMove);
        card.dataset.mouseHandlerAttached = 'true';
      }
    });
  }, 50); // 50ms debounce
}

/**
 * Removes mouse move handlers from all .punkcard elements
 */
export function removeMouseMoveHandlers() {
  if (!browser) return;
  
  const cards = document.querySelectorAll(".punkcard[data-mouse-handler-attached='true']");
  cards.forEach(card => {
    card.removeEventListener('mousemove', handleOnMouseMove);
    delete card.dataset.mouseHandlerAttached;
  });
}

/**
 * Attaches handler to a specific element
 * @param {Element} element - The element to attach the handler to
 */
export function attachMouseMoveToElement(element) {
  if (!browser || !element) return;
  
  if (!element.dataset.mouseHandlerAttached) {
    element.addEventListener('mousemove', handleOnMouseMove);
    element.dataset.mouseHandlerAttached = 'true';
  }
}

/**
 * Removes handler from a specific element
 * @param {Element} element - The element to remove the handler from
 */
export function removeMouseMoveFromElement(element) {
  if (!browser || !element) return;
  
  element.removeEventListener('mousemove', handleOnMouseMove);
  delete element.dataset.mouseHandlerAttached;
}

/**
 * Initialize mouse effects with automatic detection of new elements
 * @param {Object} options - Configuration options
 */
export function initializeMouseEffects(options = {}) {
  if (!browser || isInitialized) return null;
  
  const {
    autoDetect = true,
    debounceTime = 50,
    selector = '.punkcard'
  } = options;
  
  // Initial attachment
  attachMouseMoveHandlers();
  
  if (autoDetect) {
    // Set up MutationObserver to automatically handle new elements
    const observer = new MutationObserver((mutations) => {
      let shouldUpdate = false;
      
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            if (node.classList?.contains('punkcard') || node.querySelector?.(selector)) {
              shouldUpdate = true;
            }
          }
        });
      });
      
      if (shouldUpdate) {
        attachMouseMoveHandlers();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    isInitialized = true;
    
    return observer;
  }
  
  isInitialized = true;
  return null;
}

/**
 * Reinitialize mouse effects (useful after major DOM changes)
 */
export function reinitializeMouseEffects() {
  removeMouseMoveHandlers();
  isInitialized = false;
  return initializeMouseEffects();
}

/**
 * Utility function to run after async operations
 * @param {Promise} asyncOperation - The async operation to wait for
 * @param {Function} callback - Optional callback to run after attachment
 */
export async function attachAfterAsync(asyncOperation, callback) {
  try {
    const result = await asyncOperation;
    attachMouseMoveHandlers();
    
    if (callback && typeof callback === 'function') {
      callback(result);
    }
    
    return result;
  } catch (error) {
    console.error('Error in async operation:', error);
    throw error;
  }
}

/**
 * Check if mouse effects are currently active
 */
export function isMouseEffectsActive() {
  if (!browser) return false;
  return document.querySelectorAll(".punkcard[data-mouse-handler-attached='true']").length > 0;
}
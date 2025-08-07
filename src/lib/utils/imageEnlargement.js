// src/lib/utils/imageEnlargement.js
import { browser } from '$app/environment';

let imageModalComponent;
let currentModalData = {
  show: false,
  src: '',
  alt: ''
};

/**
 * Initialize image enlargement functionality
 */
export function initializeImageEnlargement() {
  if (!browser) return;

  // Create modal store/state
  createImageModalStore();
  
  // Attach click handlers to all enlargeable images
  attachImageEnlargementHandlers();
}

/**
 * Attach click handlers to images with 'enlarge' class
 */
export function attachImageEnlargementHandlers() {
  if (!browser) return;

  // Remove existing handlers to prevent duplicates
  removeImageEnlargementHandlers();

  // Find all images with 'enlarge' class
  const enlargeableImages = document.querySelectorAll('img.enlarge');
  
  enlargeableImages.forEach(img => {
    // Add click handler
    img.addEventListener('click', handleImageClick);
    
    // Add visual indicators
    img.style.cursor = 'pointer';
    img.setAttribute('title', 'Click to enlarge');
    
    // Add loading state handling
    if (!img.complete) {
      img.addEventListener('load', () => {
        img.style.cursor = 'pointer';
      });
    }
    
    // Mark as processed
    img.dataset.enlargementAttached = 'true';
  });
}

/**
 * Remove existing click handlers
 */
function removeImageEnlargementHandlers() {
  const processedImages = document.querySelectorAll('img[data-enlargement-attached="true"]');
  
  processedImages.forEach(img => {
    img.removeEventListener('click', handleImageClick);
    img.removeAttribute('data-enlargement-attached');
  });
}

/**
 * Handle image click
 */
function handleImageClick(event) {
  const img = event.target;
  
  // Prevent default behavior
  event.preventDefault();
  event.stopPropagation();
  
  // Get high-res source (data-src attribute or current src)
  const enlargedSrc = img.dataset.enlargeSrc || img.src;
  const alt = img.alt || 'Enlarged image';
  
  // Show modal
  showImageModal(enlargedSrc, alt);
}

/**
 * Show image modal
 */
function showImageModal(src, alt) {
  currentModalData = {
    show: true,
    src,
    alt
  };
  
  // Dispatch custom event to trigger modal
  document.dispatchEvent(new CustomEvent('showImageModal', {
    detail: currentModalData
  }));
}

/**
 * Close image modal
 */
export function closeImageModal() {
  currentModalData.show = false;
  
  document.dispatchEvent(new CustomEvent('closeImageModal'));
}

/**
 * Get current modal data
 */
export function getModalData() {
  return currentModalData;
}

/**
 * Create modal store for reactive updates
 */
function createImageModalStore() {
  // Listen for modal events
  document.addEventListener('showImageModal', (event) => {
    currentModalData = event.detail;
  });
  
  document.addEventListener('closeImageModal', () => {
    currentModalData.show = false;
  });
}

/**
 * Reinitialize after content changes (for use after async content loads)
 */
export function reinitializeImageEnlargement() {
  setTimeout(() => {
    attachImageEnlargementHandlers();
  }, 100);
}
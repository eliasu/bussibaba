import GalleryApp from './gallery/index.js';
import './b-letters-animation.js';

// Initialize gallery when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new GalleryApp();
  });
} else {
  new GalleryApp();
}

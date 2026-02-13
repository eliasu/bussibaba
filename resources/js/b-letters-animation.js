// Read available b-letter SVG filenames and base path from the DOM
const container = document.getElementById('b-letters');
const basePath = container?.dataset.basePath || '/assets/website-assets/b/';
const bLetterFrames = (container?.dataset.frames || '').split(',').filter(Boolean);

// Function to get a random frame different from the current one
function getRandomFrame(currentFrame) {
  const availableFrames = bLetterFrames.filter(frame => frame !== currentFrame);
  return availableFrames[Math.floor(Math.random() * availableFrames.length)];
}

// Function to change a letter's image
function changeLetter(elementId) {
  const img = document.getElementById(elementId);
  if (!img) return;
  
  const currentSrc = img.src;
  const currentFrame = currentSrc.split('/').pop();
  const newFrame = getRandomFrame(currentFrame);
  
  img.src = `${basePath}${newFrame}`;
}

// Start the animation when the page loads
document.addEventListener('DOMContentLoaded', () => {
  // First letter changes every 0.4 seconds
  setInterval(() => changeLetter('b-letter-1'), 400);
  
  // Second letter changes every 0.6 seconds
  setInterval(() => changeLetter('b-letter-2'), 600);
  
  // Third letter changes every 0.8 seconds
  setInterval(() => changeLetter('b-letter-3'), 800);
});

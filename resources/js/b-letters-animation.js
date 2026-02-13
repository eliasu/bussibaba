// Array of all available b-letter SVG filenames
const bLetterFrames = [
  'frame-2.svg',
  'frame-3.svg',
  'frame-4.svg',
  'frame-5.svg',
  'frame-6.svg',
  'frame-7.svg',
  'frame-8.svg',
  'frame-9.svg',
  'frame-10.svg',
  'frame-11.svg',
  'frame-12.svg',
  'frame-13.svg',
  'frame-14.svg',
  'frame-15.svg',
  'frame-16.svg'
];

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
  
  img.src = `/assets/website-assets/b/${newFrame}`;
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

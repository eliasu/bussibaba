// Audio Player Controller
const audio = document.getElementById('audioElement');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const trackName = document.getElementById('trackName');

const tracks = [
  { name: 'Hawara', src: '/assets/music/hawara-bussibaba.mp3' },
  { name: 'Nur Nicht Frei', src: '/assets/music/nur-nicht-frei-bussibaba.mp3' }
];

let currentTrack = 0;

function loadTrack(index, autoplay = false) {
  trackName.style.opacity = '0';
  setTimeout(() => {
    audio.src = tracks[index].src;
    trackName.textContent = tracks[index].name;
    trackName.style.opacity = '1';
    if (autoplay) {
      audio.play();
      playBtn.textContent = '⏸';
    }
  }, 200);
}

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '⏸';
  } else {
    audio.pause();
    playBtn.textContent = '⏵';
  }
});

prevBtn.addEventListener('click', () => {
  const wasPlaying = !audio.paused;
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrack, wasPlaying);
});

nextBtn.addEventListener('click', () => {
  const wasPlaying = !audio.paused;
  currentTrack = (currentTrack + 1) % tracks.length;
  loadTrack(currentTrack, wasPlaying);
});

audio.addEventListener('ended', () => {
  playBtn.textContent = '⏵';
});

loadTrack(0);

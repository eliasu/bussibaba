// Audio Player Controller
const audio = document.getElementById('audioElement');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const trackName = document.getElementById('trackName');

// Mobile controls
const playBtnMobile = document.getElementById('playBtnMobile');
const prevBtnMobile = document.getElementById('prevBtnMobile');
const nextBtnMobile = document.getElementById('nextBtnMobile');
const trackNameMobile = document.getElementById('trackNameMobile');

const tracks = [
  { name: 'Hawara', src: '/assets/music/hawara-bussibaba.mp3' },
  { name: 'Nur Nicht Frei', src: '/assets/music/nur-nicht-frei-bussibaba.mp3' }
];

let currentTrack = 0;

function loadTrack(index, autoplay = false) {
  trackName.style.opacity = '0';
  trackNameMobile.style.opacity = '0';
  setTimeout(() => {
    audio.src = tracks[index].src;
    trackName.textContent = tracks[index].name;
    trackNameMobile.textContent = tracks[index].name;
    trackName.style.opacity = '1';
    trackNameMobile.style.opacity = '1';
    if (autoplay) {
      audio.play();
      playBtn.textContent = '⏸';
      playBtnMobile.textContent = '⏸';
    }
  }, 200);
}

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '⏸';
    playBtnMobile.textContent = '⏸';
  } else {
    audio.pause();
    playBtn.textContent = '⏵';
    playBtnMobile.textContent = '⏵';
  }
}

function prevTrack() {
  const wasPlaying = !audio.paused;
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrack, wasPlaying);
}

function nextTrack() {
  const wasPlaying = !audio.paused;
  currentTrack = (currentTrack + 1) % tracks.length;
  loadTrack(currentTrack, wasPlaying);
}

// Desktop controls
playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);

// Mobile controls
playBtnMobile.addEventListener('click', togglePlay);
prevBtnMobile.addEventListener('click', prevTrack);
nextBtnMobile.addEventListener('click', nextTrack);

audio.addEventListener('ended', () => {
  playBtn.textContent = '⏵';
  playBtnMobile.textContent = '⏵';
});

loadTrack(0);


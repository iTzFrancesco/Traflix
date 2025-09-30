const audio = document.getElementById("bgMusic");
const toggleBtn = document.getElementById("toggleBtn");
const icon = document.getElementById("icon");
const volumeSlider = document.getElementById("volumeSlider");
const splash = document.getElementById("splash");

// 🎵 Elenco canzoni in loop
const songs = ["/files/song1.mp3", "/files/song2.mp3"];
let currentSong = 0;

// Volume iniziale
audio.volume = parseFloat(volumeSlider.value);

// Carica e avvia una canzone
function loadSong(index) {
  currentSong = index;
  audio.src = songs[currentSong];
  audio.play();
  toggleBtn.classList.remove("paused");
  icon.textContent = "🔊";
}

// Quando una canzone finisce → passa alla prossima
audio.addEventListener("ended", () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
});

// Splash click → avvia playlist dalla prima canzone
splash.addEventListener("click", () => {
  loadSong(0);
  splash.classList.add("fade-out"); // nasconde lo splash
});

// Play / Stop
toggleBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    toggleBtn.classList.remove("paused");
    icon.textContent = "🔊";
  } else {
    audio.pause();
    toggleBtn.classList.add("paused");
    icon.textContent = "🔇";
  }
});

// Slider volume
volumeSlider.addEventListener("input", () => {
  audio.volume = parseFloat(volumeSlider.value);
});

const audio = document.getElementById("bgMusic");
const toggleBtn = document.getElementById("toggleBtn");
const icon = document.getElementById("icon");
const volumeSlider = document.getElementById("volumeSlider");
const splash = document.getElementById("splash");

// Volume iniziale
audio.volume = parseFloat(volumeSlider.value);

// Splash click → avvia audio
splash.addEventListener("click", () => {
  audio.play();
  splash.classList.add("fade-out");
  toggleBtn.classList.remove("paused");
  icon.textContent = "🔊"; // cambia in stop
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

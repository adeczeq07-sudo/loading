
 


    const factElement = document.getElementById("fact");
    const facts = [
      "Czy wiesz, że GTA V to jedna z najlepiej sprzedających się gier wszech czasów?",
      "Niektóre skrypty naszego serwera umożliwiają realistyczną fizykę pojazdów.",
      "Dołącz do Discorda i poznaj społeczność graczy!",
      "Dziękujemy za zakup paczki <3",
    
    ];

    let factIndex = 0;

    function showNextFact() {
      factElement.classList.remove("show");
      factElement.classList.add("hide");

      setTimeout(() => {
        factElement.textContent = facts[factIndex % facts.length];
        factIndex++;
        factElement.classList.remove("hide");
        factElement.classList.add("show");
      }, 500);
    }

    factElement.textContent = facts[0];
    factElement.classList.add("show");
    factIndex = 1;

    setInterval(showNextFact, 7000);

  
    const loaderText = document.querySelector('.loader-text');
    let dots = 0;

    setInterval(() => {
      dots = (dots + 1) % 4;
      loaderText.textContent = 'Trwa ładowanie' + '.'.repeat(dots);
    }, 700);

    document.addEventListener("mousemove", (e) => {
  const slides = document.querySelectorAll(".slide");

  
  let x = (e.clientX / window.innerWidth - 0.5) * 20; 
  let y = (e.clientY / window.innerHeight - 0.5) * 20;

  slides.forEach(slide => {
    slide.style.transform = `translate(${x}px, ${y}px) scale(1.05)`; 
  });
});

const music = document.getElementById("loading-music");
const playPauseBtn = document.getElementById("play-pause-btn");
const muteBtn = document.getElementById("mute-btn");
const volumeSlider = document.getElementById("volume-slider");
const songTitle = document.getElementById("song-title");

const playIcon = document.getElementById("play-icon");
const muteIcon = document.getElementById("mute-icon");


music.volume = 0.5;


playPauseBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
   
    playIcon.innerHTML = '<path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z"/>';
  } else {
    music.pause();
    
    playIcon.innerHTML = '<path d="M8 5V19L19 12L8 5Z"/>';
  }
});


muteBtn.addEventListener("click", () => {
  music.muted = !music.muted;
  if (music.muted) {
    muteIcon.innerHTML = '<path d="M16.5 12C16.5 14.21 15.21 16.15 13.5 17.09V6.91C15.21 7.85 16.5 9.79 16.5 12ZM12 3.5V20.5L7 16H3V8H7L12 3.5ZM19 5L17.59 6.41L21.17 10L17.59 13.59L19 15L23 11L19 5Z"/>'; // z przekreśleniem
  } else {
    muteIcon.innerHTML = '<path d="M16.5 12C16.5 14.21 15.21 16.15 13.5 17.09V6.91C15.21 7.85 16.5 9.79 16.5 12ZM12 3.5V20.5L7 16H3V8H7L12 3.5Z"/>'; // normalny głośnik
  }
});


volumeSlider.addEventListener("input", () => {
  music.volume = volumeSlider.value;
  if (music.volume == 0) {
    music.muted = true;
    muteIcon.innerHTML = '<path d="M16.5 12C16.5 14.21 15.21 16.15 13.5 17.09V6.91C15.21 7.85 16.5 9.79 16.5 12ZM12 3.5V20.5L7 16H3V8H7L12 3.5ZM19 5L17.59 6.41L21.17 10L17.59 13.59L19 15L23 11L19 5Z"/>';
  } else {
    music.muted = false;
    muteIcon.innerHTML = '<path d="M16.5 12C16.5 14.21 15.21 16.15 13.5 17.09V6.91C15.21 7.85 16.5 9.79 16.5 12ZM12 3.5V20.5L7 16H3V8H7L12 3.5Z"/>';
  }
});


document.addEventListener("click", () => {
  if (music.paused) music.play();
  playIcon.innerHTML = '<path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z"/>'; 
}, { once: true });


const equalizer = document.querySelector(".equalizer");

function updateEqualizer() {
  if (music.muted || music.volume === 0 || music.paused) {
    equalizer.classList.add("paused");  
  } else {
    equalizer.classList.remove("paused"); 
  }

  if (music.muted || music.volume === 0) {
    equalizer.classList.add("muted");
  } else {
    equalizer.classList.remove("muted");
  }


  const speed = 1 - music.volume;
  equalizer.querySelectorAll(".bar").forEach(bar => {
    bar.style.animationDuration = `${0.5 + speed}s`;
  });
}



volumeSlider.addEventListener("input", updateEqualizer);
muteBtn.addEventListener("click", updateEqualizer);
playPauseBtn.addEventListener("click", updateEqualizer);






updateEqualizer();
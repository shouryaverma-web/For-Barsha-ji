
// ======================================
// BARSHA LOVE STORY - INTERACTIONS
// ======================================

// 1. Floating rose petals and hearts
const petalsContainer = document.getElementById("petals");

function createPetal() {
  if (!petalsContainer) return;

  const petal = document.createElement("span");
  petal.className = "petal";
  petal.textContent = Math.random() > 0.5 ? "♡" : "♥";

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = (12 + Math.random() * 17) + "px";
  petal.style.animationDuration = (7 + Math.random() * 8) + "s";

  petalsContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 16000);
}

setInterval(createPetal, 700);


// 2. Background music button
const music = document.getElementById("backgroundMusic");
const musicBtn = document.getElementById("musicBtn");

if (music && musicBtn) {
  musicBtn.addEventListener("click", async () => {
    if (music.paused) {
      try {
        await music.play();
        musicBtn.textContent = "♫ Pause Music";
      } catch (error) {
        musicBtn.textContent = "Music unavailable";
        console.log("Music could not play:", error);
      }
    } else {
      music.pause();
      musicBtn.textContent = "♫ Play Music";
    }
  });

  music.addEventListener("ended", () => {
    musicBtn.textContent = "♫ Play Music";
  });
}


// 3. YES button interaction
const yesBtn = document.getElementById("yesBtn");
const answer = document.getElementById("answer");

if (yesBtn && answer) {
  yesBtn.addEventListener("click", () => {
    answer.innerHTML = `
      <div class="celebration-message">
        <div style="font-size:48px;">❤️</div>
        <h3>Thank You, Barsha!</h3>
        <p>
          Your feelings and your choice matter.
          Whatever your answer, I will always respect it.
        </p>
        <div style="font-size:25px;">✨ 🌹 ✨</div>
      </div>
    `;

    answer.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    createCelebration();
  });
}


// 4. NO button - playful but still accessible
const noBtn = document.getElementById("noBtn");
const noMessages = [
  "That's okay. Your choice matters. ❤️",
  "No pressure, Barsha. 😊",
  "Thank you for being honest. 🌷"
];

let noMessageIndex = 0;

if (noBtn && answer) {
  noBtn.addEventListener("click", () => {
    answer.textContent = noMessages[
      noMessageIndex % noMessages.length
    ];

    noMessageIndex++;
  });

  let playfulMoves = 0;

  noBtn.addEventListener("pointerenter", () => {
    if (playfulMoves >= 3 || window.innerWidth <= 700) return;

    noBtn.style.transform =
      `translate(${(Math.random() - 0.5) * 70}px, ${(Math.random() - 0.5) * 35}px)`;

    playfulMoves++;
  });
}


// 5. Celebration animation
function createCelebration() {
  const symbols = ["❤️", "♡", "✨", "🌹"];

  for (let i = 0; i < 30; i++) {
    const item = document.createElement("div");

    item.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    item.style.position = "fixed";
    item.style.left = Math.random() * 100 + "vw";
    item.style.top = "-30px";
    item.style.fontSize = (18 + Math.random() * 18) + "px";
    item.style.zIndex = "9999";
    item.style.pointerEvents = "none";
    item.style.transition = "transform 3s ease, opacity 3s ease";

    document.body.appendChild(item);

    requestAnimationFrame(() => {
      item.style.transform =
        `translateY(${window.innerHeight + 80}px) rotate(${Math.random() * 500}deg)`;
      item.style.opacity = "0";
    });

    setTimeout(() => item.remove(), 3200);
  }
}


// 6. Photo click - open image in fullscreen
document.querySelectorAll(".photo-card img").forEach((img) => {
  img.style.cursor = "zoom-in";

  img.addEventListener("click", () => {
    const viewer = document.createElement("div");

    viewer.style.cssText = `
      position:fixed;
      inset:0;
      background:rgba(20,5,13,.95);
      z-index:10000;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:20px;
      cursor:zoom-out;
    `;

    const fullImage = document.createElement("img");
    fullImage.src = img.src;

    fullImage.style.cssText = `
      max-width:95%;
      max-height:90vh;
      object-fit:contain;
      border:5px solid white;
      border-radius:8px;
    `;

    viewer.appendChild(fullImage);
    document.body.appendChild(viewer);

    viewer.addEventListener("click", () => viewer.remove());
  });
});

console.log("Barsha Love Story loaded successfully ❤️");

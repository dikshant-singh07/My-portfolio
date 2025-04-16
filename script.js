// 1. Scroll Reveal Animation
const revealElements = document.querySelectorAll(".section");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// 2. Glitch effect boost on load
window.addEventListener("load", () => {
  const glitch = document.querySelector(".glitch-text");
  glitch.classList.add("animate-glitch");
  setTimeout(() => {
    glitch.classList.remove("animate-glitch");
  }, 3000);
});

// 3. Typewriter Effect
const subtitle = document.querySelector(".subtitle");
const text = "Developer | Designer | Night Owl";
let index = 0;

const typeWriter = () => {
  if (index < text.length) {
    subtitle.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 75);
  }
};

subtitle.textContent = "";
typeWriter();

// 4. Optional: Dark mode toggle framework (if you ever want a switch)
const toggleTheme = () => {
  document.body.classList.toggle("light-mode");
};

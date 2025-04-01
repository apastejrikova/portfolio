const bg = document.getElementById("background");
const observer = new IntersectionObserver(
  (entries) => {
    let visible = entries.find((e) => e.isIntersecting);
    if (!visible) return;
    const id = visible.target.id;
    if (id === "home" || id === "contact") {
      bg.classList.remove("shrink");
    } else {
      bg.classList.add("shrink");
    }
  },
  { threshold: 0.6 }
);

window.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("section, footer")
    .forEach((sec) => observer.observe(sec));

  const track = document.querySelector(".carousel-track");
  const iframes = track.querySelectorAll("iframe");
  const leftBtn = document.querySelector(".carousel-arrow.left");
  const rightBtn = document.querySelector(".carousel-arrow.right");

  let currentSlide = 0;

  function updateCarousel() {
    const offset = currentSlide * 800;
    track.style.transform = `translateX(-${offset}px)`;
  }

  leftBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + iframes.length) % iframes.length;
    updateCarousel();
  });

  rightBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % iframes.length;
    updateCarousel();
  });

  const modal = document.getElementById("contact-modal");
  const backdrop = document.querySelector(".modal-backdrop");

  backdrop.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
});

function openModal() {
  document.getElementById("contact-modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("contact-modal").classList.add("hidden");
}

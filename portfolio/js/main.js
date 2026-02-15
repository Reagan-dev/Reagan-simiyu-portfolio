// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Simple reveal on scroll (very lightweight)
const reveal = () => {
  const elements = document.querySelectorAll(".section, .project-card, .skill");
  const trigger = window.innerHeight * 0.9;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
};

document.addEventListener("scroll", reveal);
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".section, .project-card, .skill").forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(12px)";
    el.style.transition = "all .5s ease";
  });
  reveal();
});

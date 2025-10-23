// ===== Toggle Menu di HP =====
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// ===== Smooth Scroll ke Main Section =====
function scrollToSection() {
  document.getElementById("main-content").scrollIntoView({ behavior: "smooth" });
}

// ===== Animasi Scroll Masuk =====
window.addEventListener("scroll", () => {
  const content = document.querySelector(".container");
  if (window.scrollY > 100) {
    content.classList.add("visible");
  }
});

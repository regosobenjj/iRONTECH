// Auto-hide navbar on scroll
let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;
  navbar.style.top = (prevScrollPos > currentScrollPos) ? "0" : "-100px";
  prevScrollPos = currentScrollPos;
});

// Burger menu
const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

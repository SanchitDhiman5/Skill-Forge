const header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
const a = document.querySelectorAll('a[href="#"]');
const navLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 50);
});

// Navbar Menu:
menu.addEventListener("click", function (e) {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
  if (navbar.classList.contains("open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }
});

// Navbar Direct Link scroll:
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

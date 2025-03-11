const header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
// const a = document.querySelectorAll('a[href="#"]');
const body = document.querySelector("body");
// const navLinks = document.querySelectorAll(".nav-link");
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
body.addEventListener("click", function (e) {
  if (e.target.tagName === "A" && e.target.id !== "up-arrow") {
    e.preventDefault();
    const targetLink = e.target;
    if (targetLink.className === "nav-link") {
      scrollToSection(targetLink);
    }
  }
});
const scrollToSection = function (link) {
  const linkId = link.getAttribute("href").substring(1);
  const linkSection = document.getElementById(linkId);

  if (linkSection) {
    window.scrollTo({
      top: linkSection.offsetTop,
      behavior: "smooth",
    });
    if (menu.className === "bx bx-menu bx-x") {
      menu.classList.toggle("bx-x");
      navbar.classList.toggle("open");
    }
  }
};

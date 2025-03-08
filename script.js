const header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
const a = document.querySelectorAll('a[href="#"]');
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

// prevent anchor tag's default behaviour:
document.body.addEventListener("click", function (e) {
  if (e.target.tagName === "A" && e.target.id !== "up-arrow") {
    e.preventDefault();
  }
});

const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const i = document.querySelector("i");
const body = document.querySelector("body");
document.body.style.overflow = "scroll";
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 50);
});

const openNavbar = function () {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
  if (menu.className === "bx bx-menu bx-x") {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "scroll";
  }
};

const allAnchorPreventDefault = function (e) {
  preventDefaultITags(e);
  if (e.target.tagName === "A" && e.target.id !== "up-arrow") {
    e.preventDefault();
    const targetLink = e.target;
    if (targetLink.className === "nav-link") {
      scrollToSection(targetLink);
    }
  }
};

const scrollToSection = function (link) {
  const linkId = link.getAttribute("href").substring(1);
  const linkSection = document.getElementById(linkId);

  if (linkSection) {
    window.scrollTo({
      top: linkSection.offsetTop,
      behavior: "smooth",
    });
    if (menu.className === "bx bx-menu bx-x") {
      openNavbar();
    }
  }
};

const preventDefaultITags = function (e) {
  if (e.target.tagName === "I" && e.target.className !== "ri-arrow-up-line") {
    e.stopPropagation();
    e.preventDefault();
  }
};
// Navbar Menu:
menu.addEventListener("click", openNavbar);

// Navbar Direct Link scroll:
body.addEventListener("click", allAnchorPreventDefault);

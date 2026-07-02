const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".bar-menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

const viewProjectBtn = document.getElementById("viewProjectBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    // adjust threshold as needed
    viewProjectBtn.classList.add("show");
  } else {
    viewProjectBtn.classList.remove("show");
  }
});

document.getElementById("know-button").addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".logo").addEventListener("click", function () {
  document
    .getElementById("landing-page")
    .scrollIntoView({ behavior: "smooth" });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

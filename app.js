const burger = document.querySelector("#burger-menu");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  })
);

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {

  document.body.classList.toggle('dark');
});






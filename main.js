let toggleMenuBtn = document.querySelector(".toggle-menu");
let linksInMenu = document.querySelector(".navigation");
const toggleMenu = (e) => {
  e.stopPropagation();
  toggleMenuBtn.classList.toggle("menu-active");
  linksInMenu.classList.toggle("open");
};

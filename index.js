const navbar = document.querySelector(".navbar");
const menuBotton = document.querySelector(".menu-button");
menuBotton.addEventListener('click', () => {
    navbar.classList.toggle("show-menu");
});

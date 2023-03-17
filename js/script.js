const menu = document.querySelector(".menu__link");
const links = document.querySelector(".cabecalho__links");
const closeMenu = document.querySelector(".close__link");

menu.addEventListener("click",  () => {
    links.classList.toggle("ativo");
    menu.classList.toggle("fa-xmark");
});
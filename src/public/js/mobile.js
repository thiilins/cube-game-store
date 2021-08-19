// Menu Mobile - exibir/ocultar
/* Capturando o botão */
const menubtn = document.querySelector("#mobile-btn");
/* Capturando o menu */
const menu = document.getElementById("header-container2");
/* Criando a função que abrira o menu */

const toogleMenu = () => {
  /* Adicionando/Removendo a classe 'menu-links-active' ao menu */
  menu.classList.toggle("menu-links-active");
};
/* Habilitando escut de click no menu, e acionando a ação */
menubtn.addEventListener("click", toogleMenu);

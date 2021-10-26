const userMenuButton = document.getElementById("user-menu-button");
const userMenu = document.getElementById("menu");
const userMenuMobile = document.getElementById("mobile-menu");
const openCloseMenu = () => {
  userMenu.classList.toggle("lg:hidden");
  userMenu.classList.toggle("md:hidden");
};
userMenuButton.addEventListener("click", openCloseMenu);

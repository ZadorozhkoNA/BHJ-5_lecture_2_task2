let menuURL = document.querySelectorAll('.menu__link');
let menuLevelTwo = document.querySelectorAll('.menu_sub');

function activeClass(item, logic = false) {
    logic ? item.className += ' menu_active' : item.className = item.className.replace('menu_active', '');
}

function menu() {
  let subMenu = this.parentElement.querySelector('.menu_sub');
  if (subMenu) {
    if (subMenu.className.includes( 'menu_active' )) {
      menuLevelTwo.forEach((item) => {
        activeClass(item);
      });
      return false;
    } else {
      menuLevelTwo.forEach((item) => {
        activeClass(item);
      });
      activeClass(subMenu, true);
      return false;
    }
  }
}

menuURL.forEach((item) => {
  item.onclick = menu;
});

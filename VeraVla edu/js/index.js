import BurgerMenu from "./burger.js";
import Modal from "./modal.js";
import { swiperSlider } from "./swiper-slider.js";

try {
  new Modal({
    PAGE_BODY: "page__body",
    PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
  });

  new BurgerMenu({
    BURGER: "burger",
    BURGER_OPEN: "burger--open",
    HEADER_MENU: "header__menu",
    HEADER_MENU_OPEN: "header__menu--open",
    lABEL: {
      OPEN: "Открыть меню",
      CLOSE: "Закрыть меню",
    },
    PAGE_BODY: "page__body",
    PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
    MENU_LINK: "menu__link",
    BREAKPOINT: 768,
    MAIN: "main",
  });

  swiperSlider();
} catch (error) {
  console.error(error);
}
// import { scrollBtn } from "./scrollToTop.js";
// try {
//   scrollBtn();
// } catch (error) {
//   console.error(error);
// }

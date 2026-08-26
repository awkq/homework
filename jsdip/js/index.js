//бугер меню для мобилок

const burger = document.querySelector(`.burger`);
const headerMenu = document.querySelector(`.header__menu`);

burger.addEventListener("click", function () {
  this.classList.toggle("burger--open");
  headerMenu.classList.toggle("header__menu--open");
  console.log("burger toggle");
});

//модальное окно

const modal = document.querySelector(`.modal`);
const modalWindow = document.querySelector(`.modal__window`);
const modalOpen = document.querySelector(`.product__buy-button`);
const modalClose = document.querySelector(`.modal__close`);

function modalToggle() {
  modal.classList.toggle("modal--open");
  modalWindow.classList.toggle("modal__window--open");
  console.log("modal toggle");
}

modalOpen.addEventListener("click", () => {
  modalToggle();
});
modalClose.addEventListener("click", () => {
  modalToggle();
});

//слайдер

const slide = document.querySelector(".swiper-wrapper");
const slideCount = document.querySelectorAll(".swiper-slide").length;
const BtnPrev = document.querySelector(`.product__slider-button--prev`);
const BtnNext = document.querySelector(`.product__slider-button--next`);
let slideIndex = 0;

function doSlide(index) {
  if (index < 0) {
    index = slideCount - 1;
  } else if (index >= slideCount) {
    index = 0;
  }
  slideIndex = index;
  slide.style.transform = `translateX(${-index * 100}%)`;
}

BtnPrev.addEventListener("click", () => {
  doSlide(slideIndex - 1);
});

BtnNext.addEventListener("click", () => {
  doSlide(slideIndex + 1);
});

doSlide(0);

//кнопки размеров
const sizeList = document.querySelector(`.product__sizes-list`);

sizeList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    document.querySelectorAll(".product__sizes-list button").forEach((btn) => {
      btn.classList.remove("product__sizes-button--active");
    });
    event.target.classList.add("product__sizes-button--active");
  }
});

// Лайтбокс для видео
const play = document.querySelector(`.characteristics__video-play-icon`);
const lightbox = document.querySelector(`.lightbox`);
const lightboxWindow = document.querySelector(`.lightbox__window`);
const lightboxClose = document.querySelector(`.lightbox__close`);
let iframe = document.querySelector("iframe");

function lightboxToggle() {
  lightbox.classList.toggle("lightbox--open");
  lightboxWindow.classList.toggle("lightbox__window--open");
  console.log("lightbox toggle");
}

play.addEventListener("click", () => {
  lightboxToggle();
});
lightboxClose.addEventListener("click", () => {
  let iframeSrc = iframe.src;
  iframe.src = iframeSrc;
  lightboxToggle();
});

export const swiperSlider = () => {
  new Swiper(".swiper__first", {
    // slidesPerView: "3",

    breakpoints: {
      320: { slidesPerView: 1 }, // для мобильных
      768: { slidesPerView: 2 }, // для планшетов
      1024: { slidesPerView: 3 }, // для ПК
    },
    spaceBetween: 20,
    watchSlidesProgress: true,
    // centeredSlides: true,
    // loop: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      prevEl: ".prev-first",
      nextEl: ".next-first",
    },
  });

  new Swiper(".swiper__second", {
    // slidesPerView: "3",

    breakpoints: {
      320: { slidesPerView: 1 }, // для мобильных
      768: { slidesPerView: 2 }, // для планшетов
      1024: { slidesPerView: 3 }, // для ПК
    },
    spaceBetween: 20,
    watchSlidesProgress: true,
    // centeredSlides: true,
    // loop: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      prevEl: ".prev-second",
      nextEl: ".next-second",
    },
  });
};

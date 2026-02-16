const swiper = new Swiper(".servives-swiper", {
  spaceBetween: 20,
  pagination: {
    el: ".servives .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".servives .swiper-button-next",
    prevEl: ".servives .swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    730: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

const swiper = new Swiper(".members .mySwiper", {
  spaceBetween: 20,

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 3,
    },

    1000: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },

  pagination: {
    el: ".members .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".members .swiper-button-next",
    prevEl: ".members .swiper-button-prev",
  },
});

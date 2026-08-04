Fancybox.bind("[data-fancybox]", {
  //
});

const swiper = new Swiper(".blogs .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 24,

  pagination: {
    el: ".blogs .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".blogs .swiper-button-next",
    prevEl: ".blogs .swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

Fancybox.bind("[data-fancybox]", {
  //
});

const swiper = new Swiper(".testimonials .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 24,

  pagination: {
    el: ".testimonials .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".testimonials .swiper-button-next",
    prevEl: ".testimonials .swiper-button-prev",
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

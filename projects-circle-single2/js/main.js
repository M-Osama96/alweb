Fancybox.bind("[data-fancybox]", {
  //
});

var circulesswiper = new Swiper(".circules2-imgs-swiper", {
  // loop: true,

  navigation: {
    nextEl: ".circules2-imgs-cont .swiper-button-next",
    prevEl: ".circules2-imgs-cont .swiper-button-prev",
  },
  pagination: {
    el: ".circules2-imgs-cont .swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

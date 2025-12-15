Fancybox.bind("[data-fancybox]", {
  //
});

var circulesswiper = new Swiper(".circules-imgs-Swiper", {
  loop: true,

  navigation: {
    nextEl: ".circules-imgs-cont .swiper-button-next",
    prevEl: ".circules-imgs-cont .swiper-button-prev",
  },
  pagination: {
    el: ".circules-imgs-cont .swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: "auto",
      spaceBetween: 20,
    },
  },
});

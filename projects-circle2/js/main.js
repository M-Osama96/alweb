Fancybox.bind("[data-fancybox]", {
  //
});

var projects2swiper = new Swiper(".projects2Swiper", {
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".projects-circl2 .swiper-button-next",
    prevEl: ".projects-circl2 .swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

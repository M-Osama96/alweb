Fancybox.bind("[data-fancybox]", {
  //
});

var projects1swiper = new Swiper(".projects1Swiper", {
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".projects-circl1 .swiper-button-next",
    prevEl: ".projects-circl1 .swiper-button-prev",
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

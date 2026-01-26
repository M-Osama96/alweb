Fancybox.bind("[data-fancybox]", {
  //
});

var projects1swiper = new Swiper(".servicesSwiper", {
  spaceBetween: 20,
  pagination: {
    el: ".services-semicircle-cont .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".services-semicircle-cont .swiper-button-next",
    prevEl: ".services-semicircle-cont .swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

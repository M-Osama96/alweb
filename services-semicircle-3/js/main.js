Fancybox.bind("[data-fancybox]", {
  //
});

var services1swiper = new Swiper(".servicesSwiper", {
  spaceBetween: 20,
  pagination: {
    el: ".services-sharped .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".services-sharped .swiper-button-next",
    prevEl: ".services-sharped .swiper-button-prev",
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

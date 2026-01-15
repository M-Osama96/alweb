Fancybox.bind("[data-fancybox]", {
  //
});

var services1swiper = new Swiper(".productsSwiper", {
  spaceBetween: 20,
  pagination: {
    el: ".products-circle .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".products-circle .swiper-button-next",
    prevEl: ".products-circle .swiper-button-prev",
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

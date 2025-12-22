Fancybox.bind("[data-fancybox]", {
  //
});

var thumbsSwiper = new Swiper(".thumbs-swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      spaceBetween: 5,
    },
    768: {
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

var mainSwiper = new Swiper(".hero4-swiper", {
  spaceBetween: 10,

  thumbs: {
    swiper: thumbsSwiper,
  },
});

const swiper = new Swiper(".cars-swiper", {
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

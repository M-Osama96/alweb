// const swiper = new Swiper(".mySwiper", {
//   loop: true,

//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },

//   speed: 600,
// });
const swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 20,

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

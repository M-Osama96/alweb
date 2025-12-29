Fancybox.bind("[data-fancybox]", {
  //
});

// var hero6swiper = new Swiper(".hero6-Swiper", {
//   effect: "fade",
//   fadeEffect: {
//     crossFade: true,
//   },

//   speed: 600,
//   pagination: {
//     el: ".hero6-cont .swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".hero6-cont .swiper-button-next",
//     prevEl: ".hero6-cont .swiper-button-prev",
//   },
// });

var hero6swiper = new Swiper(".hero6-Swiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true, // مهم جدًا مع fade
  },

  loop: true,
  speed: 300,

  autoplay: {
    delay: 4000, // وقت الانتقال (غيره براحتك)
    disableOnInteraction: false,
    pauseOnMouseEnter: true, // اختياري
  },

  pagination: {
    el: ".hero6-cont .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".hero6-cont .swiper-button-next",
    prevEl: ".hero6-cont .swiper-button-prev",
  },
});

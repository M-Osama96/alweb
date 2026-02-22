Fancybox.bind("[data-fancybox]", {
  //
});

var projects1swiper = new Swiper(".projectsSwiper", {
  spaceBetween: 20,
  pagination: {
    el: ".projects-sharped .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".projects-sharped .swiper-button-next",
    prevEl: ".projects-sharped .swiper-button-prev",
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

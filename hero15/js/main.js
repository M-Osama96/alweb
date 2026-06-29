Fancybox.bind("[data-fancybox]", {
  //
});
const swiper = new Swiper(".hero15 .mySwiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".hero15 .swiper-button-next",
    prevEl: ".hero15 .swiper-button-prev",
  },

  pagination: {
    el: ".hero15 .swiper-pagination",
    clickable: true,

    renderBullet: function (index, className) {
      return `<span class="${className}">
        ${String(index + 1).padStart(2, "0")}
      </span>`;
    },
  },
});

Fancybox.bind("[data-fancybox]", {
  //
});
const swiper = new Swiper(".hero20 .mySwiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  pagination: {
    el: ".hero20 .swiper-pagination",
    clickable: true,

    renderBullet: function (index, className) {
      return `<span class="${className}">
        ${String(index + 1).padStart(2, "0")}
      </span>`;
    },
  },
});

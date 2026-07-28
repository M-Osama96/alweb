Fancybox.bind("[data-fancybox]", {
  //
});

document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.querySelector(".mobile-toggle");
  const heroNav = document.querySelector(".hero-nav");

  if (mobileToggle && heroNav) {
    mobileToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      heroNav.classList.toggle("active");
    });

    document.addEventListener("click", function (e) {
      if (!heroNav.contains(e.target) && !mobileToggle.contains(e.target)) {
        heroNav.classList.remove("active");
      }
    });
  }
});


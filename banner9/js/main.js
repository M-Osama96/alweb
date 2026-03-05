Fancybox.bind("[data-fancybox]", {
  //
});
if (document.querySelectorAll(".banner-cont") !== null) {
  let elementsArray = document.querySelectorAll(".banner-cont");
  window.addEventListener("scroll", fadeIn);
  function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
      var elem = elementsArray[i];
      var distInView =
        elem.getBoundingClientRect().top - window.innerHeight + 0;
      console.log(distInView);
      if (distInView < 0) {
        elem.classList.add("inView");
      } else {
        elem.classList.remove("inView");
      }
    }
  }
  fadeIn();
}

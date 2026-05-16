if (document.querySelectorAll(".accordion-header") !== null) {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const openItem = document.querySelector(".accordion-item.active-a");

      // لو فيه عنصر مفتوح غير الحالي → يقفله
      // if (openItem && openItem !== item) {
      //   openItem.classList.remove("active-a");
      // }

      // يقلب حالة العنصر الحالي (فتح / غلق)
      item.classList.toggle("active-a");
    });
  });
}

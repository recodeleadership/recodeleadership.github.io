document.addEventListener("DOMContentLoaded", function () {
  function equalizeCarouselHeights() {
    const carousels = document.querySelectorAll("#testimonialsCarousel .carousel-inner");
    carousels.forEach(inner => {
      const items = inner.querySelectorAll(".carousel-item");
      let maxHeight = 0;

      // Measure each item
      items.forEach(item => {
        // Temporarily show hidden items to measure
        const prevDisplay = item.style.display;
        item.style.display = "block";
        const h = item.scrollHeight;
        if (h > maxHeight) maxHeight = h;
        item.style.display = prevDisplay || "";
      });

      // Apply max height to the carousel-inner
      inner.style.minHeight = maxHeight + "px";
    });
  }

  equalizeCarouselHeights();

  // Recalculate on resize
  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(equalizeCarouselHeights, 200);
  });
});
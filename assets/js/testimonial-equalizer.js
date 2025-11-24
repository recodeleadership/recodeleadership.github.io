document.addEventListener("DOMContentLoaded", function () {
  function equalizeBoxHeights() {
    const boxes = document.querySelectorAll("#testimonialCarousel .testimonial-box");
    let maxHeight = 0;

    boxes.forEach(box => {
      const items = box.querySelectorAll(".carousel-item");
      const originalDisplay = [];

      // Temporarily show hidden items to measure
      items.forEach((item, i) => {
        originalDisplay[i] = item.style.display;
        item.style.display = "block";
      });

      // Measure tallest item in this box
      items.forEach(item => {
        if (item.scrollHeight > maxHeight) maxHeight = item.scrollHeight;
      });

      // Restore original display
      items.forEach((item, i) => {
        item.style.display = originalDisplay[i] || "";
      });
    });

    // Apply max height to all boxes
    boxes.forEach(box => { box.style.minHeight = maxHeight + "px"; });
  }

  equalizeBoxHeights();

  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(equalizeBoxHeights, 200);
  });
});

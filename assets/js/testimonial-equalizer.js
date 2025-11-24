document.addEventListener("DOMContentLoaded", function () {
  function equalizeBoxHeights() {
    const boxes = document.querySelectorAll("#testimonialCarousel .testimonial-box");
    let maxHeight = 0;

    // Reset first
    boxes.forEach(box => { box.style.minHeight = "0px"; });

    // Find tallest
    boxes.forEach(box => {
      const inner = box.querySelector(".carousel-inner");
      if (inner.scrollHeight > maxHeight) maxHeight = inner.scrollHeight;
    });

    // Apply tallest height to all boxes
    boxes.forEach(box => { box.style.minHeight = maxHeight + "px"; });
  }

  // Run once at start
  equalizeBoxHeights();

  // Recalculate on window resize
  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(equalizeBoxHeights, 200);
  });
});
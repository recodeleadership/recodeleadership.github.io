document.addEventListener("DOMContentLoaded", function () {
  function equalizeHeights() {
    const items = document.querySelectorAll("#testimonialCarousel .carousel-item");
    let maxHeight = 0;

    // Reset first
    items.forEach(item => { item.style.minHeight = "0px"; });

    // Find tallest
    items.forEach(item => { if (item.scrollHeight > maxHeight) maxHeight = item.scrollHeight; });

    // Apply height to all
    items.forEach(item => { item.style.minHeight = maxHeight + "px"; });
  }

  equalizeHeights();

  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(equalizeHeights, 200);
  });
});

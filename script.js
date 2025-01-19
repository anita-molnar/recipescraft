document.getElementById("darkModeButton").addEventListener("click", () => {
  document.body.classList.add("dark-mode");
});

document.getElementById("lightModeButton").addEventListener("click", () => {
  document.body.classList.remove("dark-mode");
});

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carouselCaptions");
  const prevButton = document.getElementById("carouselPrev");
  const nextButton = document.getElementById("carouselNext");

  // Add event listener for slide change
  carousel.addEventListener("slid.bs.carousel", () => {
    const activeItem = document.querySelector(
      "#carouselCaptions .carousel-item.active"
    );
    const allItems = document.querySelectorAll(
      "#carouselCaptions .carousel-item"
    );

    const activeIndex = Array.from(allItems).indexOf(activeItem);

    console.log("Active slide index: ", activeIndex); // debugging logs

    // Enable navigation buttons for all slides
    prevButton.disabled = false;
    nextButton.disabled = false;

    // Check if it's the first or last slide
    if (activeIndex === 0) {
      prevButton.disabled = false; // Optionally, keep it enabled
    } else if (activeIndex === allItems.length - 1) {
      nextButton.disabled = false; // Optionally, keep it enabled
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the filter buttons
  const buttons = document.querySelectorAll(".filter-btn");

  // Get all the cards
  const cards = document.querySelectorAll(".col-md-4");

  // Function to filter cards based on category
  function filterCards(filterValue) {
    cards.forEach((card) => {
      const category = card.getAttribute("data-category");
      card.style.display =
        filterValue === "All" || filterValue === category ? "flex" : "none";
    });
  }

  // Add event listeners to each filter button
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      filterCards(this.getAttribute("data-filter"));
      updateActiveButton(this);
    });
  });

  // Function to update active class on clicked button
  function updateActiveButton(clickedButton) {
    buttons.forEach((btn) => btn.classList.remove("active"));
    clickedButton.classList.add("active");
  }
});

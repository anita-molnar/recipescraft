document.addEventListener("DOMContentLoaded", function () {
  // Get the filter buttons by their ID
  const allButton = document.getElementById("filter-all");
  const fishButton = document.getElementById("filter-fish");
  const pastaButton = document.getElementById("filter-pasta");
  const pizzaButton = document.getElementById("filter-pizza");
  const saladButton = document.getElementById("filter-salad");
  const dessertButton = document.getElementById("filter-dessert");

  // Get all the cards by class name
  const cards = document.getElementsByClassName("col");

  // Function to filter cards based on category
  function filterCards(filterValue) {
    Array.from(cards).forEach((card) => {
      const category = card.getAttribute("data-category");

      if (filterValue === "All" || filterValue === category) {
        card.style.display = "block"; // Show card
      } else {
        card.style.display = "none"; // Hide card
      }
    });
  }

  // Add event listeners to each filter button
  allButton.addEventListener("click", function () {
    filterCards("All");
    updateActiveButton(allButton);
  });

  fishButton.addEventListener("click", function () {
    filterCards("Fish");
    updateActiveButton(fishButton);
  });

  pastaButton.addEventListener("click", function () {
    filterCards("Pasta");
    updateActiveButton(pastaButton);
  });

  pizzaButton.addEventListener("click", function () {
    filterCards("Pizza");
    updateActiveButton(pizzaButton);
  });

  saladButton.addEventListener("click", function () {
    filterCards("Salad");
    updateActiveButton(saladButton);
  });

  dessertButton.addEventListener("click", function () {
    filterCards("Dessert");
    updateActiveButton(dessertButton);
  });

  // Function to update active class on clicked button
  function updateActiveButton(clickedButton) {
    // Remove 'active' class from all buttons
    const buttons = [
      allButton,
      fishButton,
      pastaButton,
      pizzaButton,
      saladButton,
      dessertButton,
    ];
    buttons.forEach((btn) => btn.classList.remove("active"));

    // Add 'active' class to the clicked button
    clickedButton.classList.add("active");
  }
});

// JavaScript for Form Validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("recipeForm");

  form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add("was-validated");
  });
});

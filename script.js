const searchInput = document.getElementById("searchInput");
const bookCards = document.querySelectorAll(".book-card");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase().trim();

  bookCards.forEach(function (card) {
    const text = card.textContent.toLowerCase();

    if (text.includes(searchTerm)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});


const startReadingButton = document.querySelector(".primary-btn");

startReadingButton.addEventListener("click", function () {
  document.getElementById("trending").scrollIntoView({
    behavior: "smooth"
  });
});


const exploreButton = document.querySelector(".secondary-btn");

exploreButton.addEventListener("click", function () {
  document.getElementById("genres").scrollIntoView({
    behavior: "smooth"
  });
});


const genreButtons = document.querySelectorAll(".genre-card");

genreButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    searchInput.value = button.textContent.replace(/[^a-zA-Z ]/g, "").trim();
    searchInput.dispatchEvent(new Event("input"));

    document.getElementById("trending").scrollIntoView({
      behavior: "smooth"
    });
  });
});

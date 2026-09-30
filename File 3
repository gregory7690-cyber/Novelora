function searchNovels() {
const input = document
.getElementById("searchInput")
.value
.toLowerCase()
.trim();

const books = document.querySelectorAll(".book-card");

books.forEach(book => {
const title = book.dataset.title.toLowerCase();
const genre = book.dataset.genre.toLowerCase();

if (
  title.includes(input) ||
  genre.includes(input)
) {
  book.style.display = "";
} else {
  book.style.display = "none";
}

});
}

function openSearch() {
const searchBox = document.getElementById("searchInput");

searchBox.focus();

window.scrollTo({
top: document.querySelector(".search-section").offsetTop - 70,
behavior: "smooth"
});
}

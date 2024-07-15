function renderBooks(bookData) {
  const bookList = document.getElementById('book-list');

  // Ensure the bookList element exists before proceeding
  if (bookList) {
    bookData.forEach((book) => {
      const bookItem = document.createElement('li');
      bookItem.textContent = book.name; // Assuming 'name' is the property that holds the book title
      bookList.appendChild(bookItem);
    });
  } else {
    console.error("Element with id 'book-list' not found.");
  }
}

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((data) => renderBooks(data))
    .catch((error) => console.error('Error fetching books:', error));
}

document.addEventListener("DOMContentLoaded", () => {
  fetchBooks();
});

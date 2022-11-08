/* eslint-diable */
// eslint-disable-next-line no-unused-vars
const addRemoveListener = (book) => {
  document.getElementById(`remove-${book.id}`).addEventListener('click', (e) => {
    e.preventDefault();
    book.removeBook();
    // eslint-disable-next-line no-undef
    localStorage.setItem('library', JSON.stringify(library));
    // eslint-disable-next-line no-undef
    if (!library.length) {
      // eslint-disable-next-line no-undef
      displayEmpty();
    }
    const bookID = document.getElementById(`book-${book.id}`);
    if (bookID.parentNode) {
      bookID.parentNode.removeChild(bookID);
    }
  });
};

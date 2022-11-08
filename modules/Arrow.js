

const addRemoveListener = (book) => {
  document.getElementById(`remove-${book.id}`).addEventListener('click', (e) => {
    e.preventDefault();
    book.removeBook();
    localStorage.setItem('library', JSON.stringify(library));
    if (!library.length) {
      displayEmpty();
    }
    const bookID = document.getElementById(`book-${book.id}`);
    if (bookID.parentNode) {
      bookID.parentNode.removeChild(bookID);
    }
  });
};


  

listElement.addEventListener('click', (event) => {
  listBody.style.display = 'block';
  formBody.style.display = 'none';
  contactBody.style.display = 'none';
});

formElement.addEventListener('click', (event) => {
  formBody.style.display = 'block';
  listBody.style.display = 'none';
  contactBody.style.display = 'none';
});

contactElement.addEventListener('click', (event) => {
  contactBody.style.display = 'flex';
  listBody.style.display = 'none';
  formBody.style.display = 'none';
});




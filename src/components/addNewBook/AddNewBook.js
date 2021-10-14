import React from 'react';
// import { useDispatch } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
// import { addBook, removeBook } from '../../redux/books/books';

function AddNewBook() {
  // const dispatch = useDispatch();
  const bookList = document.getElementById('list-books');
  const getBook = () => {
    fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BhqzrQ20oG4ih4qjaX67/books')
      .then((res) => res.json())
      .then((data) => {
        Object.keys(data).forEach((book) => {
          const div = document.createElement('div');
          const title = document.createElement('h2');
          title.innerHTML = data[book][0].title;
          const category = document.createElement('p');
          category.innerHTML = data[book][0].category;
          bookList.appendChild(div);
          div.appendChild(title);
          div.appendChild(category);
        });
      });
  };
  getBook();

  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <div id="list-books" />
      <form>
        <input id="bookTitle" type="text" placeholder="Book Title" />
        <input id="author" type="text" placeholder="Author" />
        <button type="submit" onClick={getBook}>Add Book</button>
      </form>
    </div>
  );
}

export default AddNewBook;

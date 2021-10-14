import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
import { getBooks } from '../../redux/books/books';

function AddNewBook() {
  const dispatch = useDispatch();
  const newBook = [];
  useEffect(() => {
    fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BhqzrQ20oG4ih4qjaX67/books')
      .then((res) => res.json())
      .then((data) => {
        Object.keys(data).forEach((book) => {
          newBook.push({
            id_item: book,
            title: data[book][0].title,
            category: data[book][0].category,
          });
          const bookList = document.getElementById('book-list');
          const div = document.createElement('div');
          const title = document.createElement('h2');
          title.innerHTML = data[book][0].title;
          const category = document.createElement('p');
          category.innerHTML = data[book][0].category;
          const button = document.createElement('button');
          button.innerHTML = 'Remove';
          button.type = 'button';
          bookList.appendChild(div);
          div.appendChild(title);
          div.appendChild(category);
          div.appendChild(button);
        });
      });
    dispatch(getBooks(newBook));
  }, []);

  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <div id="book-list" />
      <form>
        <input id="bookTitle" type="text" placeholder="Book Title" />
        <input id="author" type="text" placeholder="Author" />
        <button type="button">Add Book</button>
      </form>
    </div>
  );
}

export default AddNewBook;

import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

function AddNewBook() {
  const dispatch = useDispatch();
  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: document.getElementById('bookTitle').value,
      author: document.getElementById('author').value,
    };

    dispatch(addBook(newBook));

    const book = document.getElementById('book');
    const div = document.createElement('div');
    div.innerHTML = newBook.title;
    book.appendChild(div);

    document.getElementById('bookTitle').value = '';
    document.getElementById('author').value = '';
  };

  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <p id="book" />
      <form>
        <input id="bookTitle" type="text" placeholder="Book Title" />
        <input id="author" type="text" placeholder="Author" />
        <button type="submit" onClick={submitBookToStore}>Add Book</button>
      </form>
    </div>
  );
}

export default AddNewBook;

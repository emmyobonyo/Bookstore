import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, removeBook } from '../../redux/books/books';

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

    const bookList = document.getElementById('list-books');
    const div = document.createElement('div');
    const title = document.createElement('h2');
    title.innerHTML = newBook.title;
    const author = document.createElement('p');
    author.innerHTML = newBook.author;
    const button = document.createElement('button');
    button.innerHTML = 'Remove';
    button.type = 'button';
    button.onclick = () => {
      dispatch(removeBook(newBook));
      bookList.removeChild(div);
    };
    bookList.appendChild(div);
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(button);

    document.getElementById('bookTitle').value = '';
    document.getElementById('author').value = '';
  };

  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <div id="list-books" />
      <form>
        <input id="bookTitle" type="text" placeholder="Book Title" />
        <input id="author" type="text" placeholder="Author" />
        <button type="submit" onClick={submitBookToStore}>Add Book</button>
      </form>
    </div>
  );
}

export default AddNewBook;

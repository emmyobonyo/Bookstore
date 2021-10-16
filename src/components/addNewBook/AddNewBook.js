import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { getBooks } from '../../redux/books/getBooksSlice';
import './AddNewBook.css';

function AddNewBook() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const postBook = () => {
    const id = uuidv4();
    const title = document.getElementById('bookTitle').value;
    const category = document.getElementById('category').value;
    fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BhqzrQ20oG4ih4qjaX67/books/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ item_id: id, title, category }),
    })
      .then((res) => res);
    const bookList = document.getElementById('book-list');
    const div = document.createElement('div');
    const newTitle = document.createElement('h2');
    newTitle.innerHTML = document.getElementById('bookTitle').value;
    const newCategory = document.createElement('p');
    newCategory.innerHTML = document.getElementById('category').value;
    const button = document.createElement('button');
    button.innerHTML = 'Remove';
    button.type = 'button';
    button.onclick = async function () {
      await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BhqzrQ20oG4ih4qjaX67/books/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ item_id: id }),
      });
      bookList.removeChild(div);
    };
    bookList.appendChild(div);
    div.appendChild(newTitle);
    div.appendChild(newCategory);
    div.appendChild(button);
    document.getElementById('bookTitle').value = '';
    document.getElementById('category').value = '';
  };

  return (
    <div className="add-book-component">
      <div id="book-list" />
      <h3 className="book-list-heading">ADD NEW BOOK</h3>
      <form>
        <input id="bookTitle" type="text" placeholder="Book Title" />
        <input id="category" type="text" placeholder="Category" />
        <button id="button" type="button" onClick={postBook}>Add Book</button>
      </form>
    </div>
  );
}

export default AddNewBook;
